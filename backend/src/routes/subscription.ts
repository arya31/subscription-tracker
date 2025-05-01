import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

//create
router.post('/', async (req, res) => {
    const { name, amount, startDate, category, isActive, frequency } = req.body;
    try {
        const newSubscription = await prisma.subscription.create({
            data: {
                name,
                amount,
                frequency,
                category,
                startDate: new Date(startDate),
                isActive,
            },
        });
        res.status(201).json(newSubscription);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create subscription' });
    }
});

//fetch all
router.get('/', async (_req, res) => {
    const subscriptions = await prisma.subscription.findMany();
    res.json(subscriptions);
});


//update
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, amount, startDate, category, isActive, frequency } = req.body;
    try {
        const updated = await prisma.subscription.update({
            where: { id: id },
            data: { name, amount, category, startDate: new Date(startDate), isActive, frequency },
        });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update subscription' });
    }
});

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.subscription.delete({ where: { id: id } });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete subscription' });
    }
});

export default router;

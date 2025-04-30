import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import subscriptionRoutes from './routes/subscription';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/subscriptions', subscriptionRoutes);

app.get('/', (_req, res) => {
    res.send('API running ');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

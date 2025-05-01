import { useState } from "react";
import { Subscription, BillingCycle } from "../types";

type Props = {
    onAdd: (sub: Subscription) => void;
};

export default function AddSubscriptionForm({ onAdd }: Props) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("Monthly");
    const [nextRenewal, setNextRenewal] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !amount || !nextRenewal) return;
        onAdd({
            id: Date.now(),
            name,
            amount: parseFloat(amount),
            billingCycle,
            nextRenewal,
        });
        setName("");
        setAmount("");
        setBillingCycle("Monthly");
        setNextRenewal("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow w-full max-w-md">
            <h2 className="text-xl font-semibold">Add Subscription</h2>
            <input
                className="w-full p-2 border rounded"
                placeholder="Subscription Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                className="w-full p-2 border rounded"
                value={billingCycle}
                onChange={(e) => setBillingCycle(e.target.value as BillingCycle)}
            >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
            </select>
            <input
                className="w-full p-2 border rounded"
                type="date"
                value={nextRenewal}
                onChange={(e) => setNextRenewal(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
                ➕ Add Subscription
            </button>
        </form>
    );
}

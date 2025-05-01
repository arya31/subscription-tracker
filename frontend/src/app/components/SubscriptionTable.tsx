import { Subscription } from "../types";

type Props = {
    subscriptions: Subscription[];
    onDelete: (id: number) => void;
};

export default function SubscriptionTable({ subscriptions, onDelete }: Props) {
    return (
        <div className="overflow-x-auto mt-8 w-full max-w-3xl">
            <table className="min-w-full bg-white rounded-xl shadow">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3">Name</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Cycle</th>
                        <th className="p-3">Next Renewal</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((sub) => (
                        <tr key={sub.id} className="border-t hover:bg-gray-50">
                            <td className="p-3">{sub.name}</td>
                            <td className="p-3">₹{sub.amount}</td>
                            <td className="p-3">{sub.billingCycle}</td>
                            <td className="p-3">{new Date(sub.nextRenewal).toLocaleDateString()}</td>
                            <td className="p-3">
                                <button
                                    onClick={() => onDelete(sub.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

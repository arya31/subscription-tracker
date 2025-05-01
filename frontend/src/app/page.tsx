"use client";
import { useState } from "react";
import AddSubscriptionForm from "./components/AddSubscriptionForm";
import SubscriptionTable from "./components/SubscriptionTable";
import { Subscription } from "./types";

export default function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const addSubscription = (sub: Subscription) => {
    setSubscriptions((prev) => [sub, ...prev]);
  };

  const deleteSubscription = (id: number) => {
    setSubscriptions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📦 Subscription Tracker</h1>
      <AddSubscriptionForm onAdd={addSubscription} />
      <SubscriptionTable subscriptions={subscriptions} onDelete={deleteSubscription} />
    </div>
  );
}

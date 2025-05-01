export type BillingCycle = "Monthly" | "Quarterly" | "Yearly";

export type Subscription = {
    id: number;
    name: string;
    amount: number;
    billingCycle: BillingCycle;
    nextRenewal: string; // ISO date string
};

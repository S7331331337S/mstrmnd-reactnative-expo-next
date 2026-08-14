export type TransactionType = "in" | "out";

export type Transaction = {
  id: string;
  name: string;
  subtitle: string;
  amount: number;
  type: TransactionType;
  date: string;
  time: string;
  category: "transfer" | "receive" | "subscription" | "shopping" | "salary";
};

export type Currency = {
  code: string;
  name: string;
  flag: string;
  balance: number;
  change: number;
};

export const user = {
  name: "Charlie Herwitz",
  handle: "@charlie.mstrmnd",
};

export const account = {
  balance: 44500.4,
  currencyCode: "USD",
  currencyLabel: "US Dollar",
  cardNumber: "9934",
  validThru: "05/28",
};

export const transactions: Transaction[] = [
  {
    id: "t1",
    name: "Firmansyah A.",
    subtitle: "Transfer to",
    amount: -240.0,
    type: "out",
    date: "Today",
    time: "04:03 PM",
    category: "transfer",
  },
  {
    id: "t2",
    name: "Adam S.",
    subtitle: "Receive from",
    amount: 20.0,
    type: "in",
    date: "Today",
    time: "02:15 PM",
    category: "receive",
  },
  {
    id: "t3",
    name: "Orbital Studio",
    subtitle: "Monthly salary",
    amount: 1300.0,
    type: "in",
    date: "Today",
    time: "09:00 AM",
    category: "salary",
  },
  {
    id: "t4",
    name: "Vercel Inc.",
    subtitle: "Subscription",
    amount: -20.0,
    type: "out",
    date: "Yesterday",
    time: "11:42 AM",
    category: "subscription",
  },
  {
    id: "t5",
    name: "Nova Market",
    subtitle: "Shopping",
    amount: -86.5,
    type: "out",
    date: "Yesterday",
    time: "06:20 PM",
    category: "shopping",
  },
  {
    id: "t6",
    name: "Priya K.",
    subtitle: "Receive from",
    amount: 500.0,
    type: "in",
    date: "Mon",
    time: "10:05 AM",
    category: "receive",
  },
];

export const currencies: Currency[] = [
  { code: "USD", name: "US Dollars", flag: "🇺🇸", balance: 44500.4, change: 2.4 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", balance: 12840.1, change: -0.8 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", balance: 6210.9, change: 1.1 },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", balance: 3120.0, change: 0.3 },
];

export const spendingWeekly = [
  { label: "Mon", value: 320 },
  { label: "Tue", value: 480 },
  { label: "Wed", value: 260 },
  { label: "Thu", value: 610 },
  { label: "Fri", value: 390 },
  { label: "Sat", value: 720 },
  { label: "Sun", value: 510 },
];

export const card = {
  holder: "Charlie Herwitz",
  number: "4921 3300 1187 9934",
  expiry: "05/28",
  network: "VISA",
  frozen: false,
};

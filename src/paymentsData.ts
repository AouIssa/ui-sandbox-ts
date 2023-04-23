interface Payment {
  feeType: string;
  fee: number;
  amountDue: number;
  dateDue: string;
  paid: number;
  remaining: number;
}

export const payments: Payment[] = [
  {
    feeType: "Team fee",
    fee: 50,
    amountDue: 250,
    dateDue: "2023-05-01",
    paid: 0,
    remaining: 250,
  },
  {
    feeType: "Spare Fee",
    fee: 10,
    amountDue: 20,
    dateDue: "2023-05-15",
    paid: 5,
    remaining: 15,
  },
  {
    feeType: "Jersey Fee",
    fee: 20,
    amountDue: 40,
    dateDue: "2023-06-01",
    paid: 10,
    remaining: 30,
  },
  {
    feeType: "Drink",
    fee: 5,
    amountDue: 10,
    dateDue: "2023-06-15",
    paid: 0,
    remaining: 10,
  },
  {
    feeType: "Tournament",
    fee: 30,
    amountDue: 60,
    dateDue: "2023-07-01",
    paid: 10,
    remaining: 50,
  },
  {
    feeType: "Event",
    fee: 25,
    amountDue: 50,
    dateDue: "2023-07-15",
    paid: 20,
    remaining: 30,
  },
  {
    feeType: "Other",
    fee: 15,
    amountDue: 30,
    dateDue: "2023-08-01",
    paid: 10,
    remaining: 20,
  },
];

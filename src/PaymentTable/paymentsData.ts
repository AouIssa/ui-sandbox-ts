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
    dateDue: "May 01, 2023",
    paid: 0,
    remaining: 250,
  },
  {
    feeType: "Spare Fee",
    fee: 10,
    amountDue: 20,
    dateDue: "May 15, 2023",
    paid: 5,
    remaining: 15,
  },
  {
    feeType: "Jersey Fee",
    fee: 20,
    amountDue: 40,
    dateDue: "Jun 01, 2023",
    paid: 10,
    remaining: 30,
  },
  {
    feeType: "Drink",
    fee: 5,
    amountDue: 10,
    dateDue: "Jun 15, 2023",
    paid: 0,
    remaining: 10,
  },
  {
    feeType: "Tournament",
    fee: 30,
    amountDue: 60,
    dateDue: "Jul 01, 2023",
    paid: 10,
    remaining: 50,
  },
  {
    feeType: "Event",
    fee: 25,
    amountDue: 50,
    dateDue: "Jul 15, 2023",
    paid: 20,
    remaining: 30,
  },
  {
    feeType: "Other",
    fee: 15,
    amountDue: 30,
    dateDue: "Aug 01, 2023",
    paid: 10,
    remaining: 20,
  },
];

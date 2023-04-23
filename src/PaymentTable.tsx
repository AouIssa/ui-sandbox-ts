import React, { useState } from "react";

interface Payment {
  feeType: string;
  fee: number;
  amountDue: number;
  dateDue: string;
  paid: number;
  remaining: number;
}

const payments: Payment[] = [
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

const PaymentTable: React.FC = () => {
  const [selectedFeeType, setSelectedFeeType] = useState<string | undefined>(
    undefined
  );

  const handlePayment = (payment: Payment) => {
    console.log(`Paying for ${payment.feeType}`);
  };

  const filteredPayments = selectedFeeType
    ? payments.filter((payment) => payment.feeType === selectedFeeType)
    : payments;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-2xl font-semibold mb-6 text-gray-600 border-b border-gray-300 w-full pb-2">
        Payments
      </div>
      <div className="w-full mb-6">
        <label htmlFor="fee-type-select" className="mr-2">
          Filter by fee type:
        </label>
        <select
          id="fee-type-select"
          onChange={(e) => setSelectedFeeType(e.target.value)}
          value={selectedFeeType ?? ""}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="">All fee types</option>
          <option value="Team fee">Team fee</option>
          <option value="Spare Fee">Spare Fee</option>
          <option value="Jersey Fee">Jersey Fee</option>
          <option value="Drink">Drink</option>
          <option value="Tournament">Tournament</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <table className="w-auto divide-y divide-gray-200 border border-gray-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fee Type
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fee
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount Due
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Due
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Paid
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Remaining
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {filteredPayments.map((payment, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">{payment.feeType}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">${payment.fee}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">
                  ${payment.amountDue}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">{payment.dateDue}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">${payment.paid}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">
                  ${payment.remaining}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
                  onClick={() => handlePayment(payment)}
                >
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PaymentTable;

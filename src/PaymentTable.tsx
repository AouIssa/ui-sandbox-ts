import React from "react";

interface Payment {
  plan: string;
  fee: number;
  amountDue: number;
  dateDue: string;
  paid: number;
  remaining: number;
}

const payments: Payment[] = [
  {
    plan: "Basic",
    fee: 2,
    amountDue: 10,
    dateDue: "2023-05-01",
    paid: 0,
    remaining: 10,
  },
  {
    plan: "Standard",
    fee: 4,
    amountDue: 20,
    dateDue: "2023-05-15",
    paid: 5,
    remaining: 15,
  },
  {
    plan: "Premium",
    fee: 6,
    amountDue: 30,
    dateDue: "2023-06-01",
    paid: 10,
    remaining: 20,
  },
];

const PaymentTable: React.FC = () => {
  const handlePayment = (payment: Payment) => {
    console.log(`Paying for ${payment.plan} plan`);
  };

  return (
    <div className="w-full flex justify-center">
      <table className="w-auto divide-y divide-gray-200 border border-gray-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Plan
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
          {payments.map((payment, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className="text-sm text-gray-900">{payment.plan}</div>
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

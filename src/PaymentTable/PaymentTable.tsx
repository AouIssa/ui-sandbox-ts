import React, { useState } from "react";
import { payments } from "./paymentsData";

interface Payment {
  feeType: string;
  fee: number;
  amountDue: number;
  dateDue: string;
  paid: number;
  remaining: number;
}

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
    <div className="relative w-full">
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
      <div className="w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
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
            {filteredPayments.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-4 whitespace-nowrap text-center"
                >
                  <div className="text-sm text-gray-900">No payments due</div>
                </td>
              </tr>
            ) : (
              filteredPayments.map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm text-gray-900">
                      {payment.feeType}
                    </div>
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
                    <div className="text-sm text-gray-900">
                      {payment.dateDue}
                    </div>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PaymentTable;

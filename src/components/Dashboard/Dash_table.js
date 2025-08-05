"use client"
import React, { useEffect, useState } from "react";
import { getTransactions } from '@/app/utils/transactions';

const Dash_table = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const tx = getTransactions();
    setTransactions(tx);
  }, []);

  return (
    <div className="text-white w-[77vw] ml-[10vw] mt-[2vh]">
      <div>
        <button
          type="button"
          className="w-[25vw] bg-[#FCCC18] p-2 m-3 rounded-md text-[#000000] font-bold"
        >
          <a href="/addExpense">➕ Add Expense</a>
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-600 bg-[#4B4221]">
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className={`border-b border-gray-600 rounded ${index % 2 === 0 ? "bg-[#2b251e]" : "bg-[#1f1a14]"
                  }`}
              >
                <td className="py-2 px-4">{tx.date}</td>
                <td className="py-2 px-4">{tx.category}</td>
                <td className="py-2 px-4">{tx.description}</td>
                <td className="py-2 px-4">₹{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dash_table;

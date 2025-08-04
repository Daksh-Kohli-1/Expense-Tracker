"use client"
import React from "react";
const transactions = [
  { date: "2024-08-01", category: "Food", description: "Lunch at cafe", amount: -25 },
  { date: "2024-07-31", category: "Transportation", description: "Bus fare", amount: -5 },
  { date: "2024-07-30", category: "Income", description: "Freelance work", amount: 600 },
  { date: "2024-07-29", category: "Shopping", description: "New shoes", amount: -120 },
  { date: "2024-07-28", category: "Entertainment", description: "Concert ticket", amount: -80 },
  { date: "2024-07-27", category: "Bills", description: "Electricity bill", amount: -60 },
  { date: "2024-07-26", category: "Food", description: "Dinner at a restaurant", amount: -50 },
  { date: "2024-07-25", category: "Transportation", description: "Taxi fare", amount: -20 },
  { date: "2024-07-24", category: "Income", description: "Salary", amount: 5000 },
  { date: "2024-07-23", category: "Shopping", description: "Clothes", amount: -200 },
  { date: "2024-07-22", category: "Entertainment", description: "Movie tickets", amount: -30 },
  { date: "2024-07-21", category: "Bills", description: "Internet bill", amount: -40 },
  { date: "2024-07-20", category: "Food", description: "Groceries", amount: -95 },
  { date: "2024-07-19", category: "Transportation", description: "Subway pass", amount: -10 },
  { date: "2024-07-18", category: "Health", description: "Pharmacy", amount: -35 },
  { date: "2024-07-17", category: "Entertainment", description: "Streaming service", amount: -15 },
  { date: "2024-07-16", category: "Income", description: "Refund", amount: 100 },
  { date: "2024-07-15", category: "Shopping", description: "Gift", amount: -45 },
  { date: "2024-07-14", category: "Food", description: "Fast food", amount: -12 },
  { date: "2024-07-13", category: "Transportation", description: "Bike rental", amount: -8 },
];


const Dash_table = () => {
  return (
    <div className="text-white w-[77vw] ml-[10vw] mt-[2vh]">
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
                className={`border-b border-gray-600 rounded ${
                    index % 2 == 0 ? "bg-[#2b251e]" : "bg-[#1f1a14]"
                }`}
              >
                <td className="py-2 px-4">{tx.date}</td>
                <td className="py-2 px-4">{tx.category}</td>
                <td className="py-2 px-4">{tx.description}</td>
                <td className="py-2 px-4">${tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dash_table;

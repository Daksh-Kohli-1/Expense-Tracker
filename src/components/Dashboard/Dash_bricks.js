"use client";
import React, { useState, useEffect } from "react";
import { getTransactions } from "@/app/utils/transactions";

const Dash_bricks = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const tx = getTransactions();
    setTransactions(tx);
  }, []);

  // Calculate total expenses from all transactions
  const totalExpenses = transactions.reduce((sum, tx) => {
    const amount = parseFloat(tx.amount);
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);

  const income = 12000;
  const savings = income - totalExpenses;

  return (
    <div>
      <div className="w-[81vw] ml-[10vw] mt-[3vh]">
        <p className="text-3xl md:text-5xl">Dashboard</p>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-3 h-[20vh] w-[25vw] bg-[#4B4221] rounded-xl p-2 mt-3">
            <p className="text-xl md:text-2xl">Total Expenses</p>
            <p className=" text-3xl md:text-4xl truncate">₹{totalExpenses}</p>
          </div>
          <div className="flex flex-col space-y-3 h-[20vh] w-[25vw] bg-[#4B4221] rounded-xl p-2 mt-3">
            <p className="text-xl md:text-2xl">Income</p>
            <p className=" text-3xl md:text-4xl truncate">₹{income}</p>
          </div>
          <div className="flex flex-col space-y-3 h-[20vh] w-[25vw] bg-[#4B4221] rounded-xl p-2 mt-3">
            <p className="text-xl md:text-2xl">Savings</p>
            <p className=" text-3xl md:text-4xl truncate">₹{savings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash_bricks;

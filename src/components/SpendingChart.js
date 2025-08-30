'use client'

import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { getTransactions } from '@/app/utils/transactions'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const SpendingChart = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const tx = getTransactions()
    setTransactions(tx)
  }, [])

  // Group spending by category (only for expenses)
  const categorySpending = {}
  transactions.forEach((tx) => {
    const amount = parseFloat(tx.amount)
    if (!isNaN(amount)) {
      if (!categorySpending[tx.category]) {
        categorySpending[tx.category] = 0
      }
      categorySpending[tx.category] += amount
    }
  })

  const data = {
    labels: Object.keys(categorySpending),
    datasets: [
      {
        label: 'Spending by Category',
        data: Object.values(categorySpending),
        backgroundColor: 'rgba(82, 71, 38, 1)',
        borderColor: 'rgba(82, 71, 38, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <p className="text-3xl md:text-5xl ml-5 mb-4">Your Expenses</p>
      <Bar data={data} options={options} />
      <a href="/dashboard" className='text-4xl  m-4 transition duration-300 ease-in-out hover:scale-105'>🔙</a>
    </div>
  )
}

export default SpendingChart

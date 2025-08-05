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
      <p className="text-5xl mb-4">Your Expenses</p>
      <Bar data={data} options={options} />
    </div>
  )
}

export default SpendingChart

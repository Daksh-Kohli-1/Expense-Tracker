"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addTransaction } from '@/app/utils/transactions';
const AddExpense = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  })

  const handleSubmit = (e) => {
  e.preventDefault();

  const trimmed = {
    date: formData.date.trim(),
    category: formData.category.trim(),
    description: formData.description.trim(),
    amount: formData.amount.trim()
  };

  if (
    !trimmed.date ||
    !trimmed.category ||
    !trimmed.amount ||
    isNaN(Number(trimmed.amount))
  ) {
    alert("Please fill out all fields correctly");
    return;
  }

  const newTransaction = {
    ...trimmed,
    id: Date.now()
  };

  addTransaction(newTransaction); // ✅ saves and appends to localStorage

  setFormData({
    date: '',
    category: '',
    description: '',
    amount: ''
  });

  router.push('/dashboard');
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div>
      <div className='flex flex-col items-center h-[20vh] justify-center'>
        <p className='text-5xl md:text-8xl'>Add Expense</p>
      </div>
      <form className='flex flex-col items-center' onSubmit={handleSubmit} >
        <input type="date" value={formData.date} onChange={handleChange} placeholder='Date' className='bg-[#4B4221] w-[60vw] md:w-[20vw] m-3 rounded-md h-[5vh] p-2' name='date' />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className='bg-[#4B4221] text-white w-[60vw] md:w-[20vw] m-3 rounded-md h-[6vh] p-2'
        >
          <option value="" disabled>Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Health">Health</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <input type="text" placeholder='Description' className='bg-[#4B4221] w-[60vw] md:w-[20vw] m-3 rounded-md h-[5vh] p-2' name='description' value={formData.description} onChange={handleChange} />
        <input type="text" placeholder='Amount' className='bg-[#4B4221] w-[60vw] md:w-[20vw] m-3 rounded-md h-[5vh] p-2' name='amount' value={formData.amount} onChange={handleChange} />
        <button type="submit" className='w-[65vw] md:w-[25vw] bg-[#FCCC18] p-2 m-3 rounded-md text-[#000000] transition duration-300 ease-in-out hover:bg-[#e0b500] hover:scale-105' >Add</button>
      </form>
    </div>
  )
}

export default AddExpense

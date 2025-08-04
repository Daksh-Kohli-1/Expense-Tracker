"use client"
import React from 'react'

const Dash_bricks = () => {
    let Total_Expenses = 10000;
    let Income = 12000;
    let Savings = Income - Total_Expenses;

    return (
        <div>
            <div className='w-[81vw] ml-[10vw] mt-[3vh]'>
                <p className='text-5xl'>Dashboard</p>
                <div className='flex space-x-4'>
                    <div className='flex flex-col space-y-3 h-[20vh] w-[25vw] bg-[#4B4221] rounded-xl p-2 mt-3'>
                        <p className='text-2xl'>Total Expenses</p>
                        <p className='text-4xl'>${Total_Expenses}</p>
                    </div>
                    <div className='flex flex-col space-y-3 h-[20vh] w-[25vw] bg-[#4B4221] rounded-xl p-2 mt-3'>
                        <p className='text-2xl'>Income</p>
                        <p className='text-4xl'>${Income}</p>
                    </div>
                    <div className='flex flex-col space-y-3 h-[20vh] w-[25vw] bg-[#4B4221] rounded-xl p-2 mt-3'>
                        <p className='text-2xl'>Savings</p>
                        <p className='text-4xl'>${Savings}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash_bricks

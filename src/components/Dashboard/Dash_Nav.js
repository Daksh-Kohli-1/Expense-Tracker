import React from 'react'
import Image from 'next/image'
const Dash_Nav = () => {
    return (
        <div>
            <div className='flex justify-between space-x-4'>
                {/* Left  */}
                <div className='h-[10vh] flex items-center ml-5'
                >

                    <Image
                        src="/graph.png"
                        alt="logo"
                        height={30}
                        width={30}
                        className='object-contain bg-white mx-3'
                    />

                    <a href="/" className='text-3xl'>Expense Tracker</a>
                </div>
                {/* Right  */}
                <div className='flex items-center space-x-16'>
                    <a href="/Dashboard">Dashboard</a>
                    <a href="/Charts">Charts</a>
                    <a href="/PastExpense">Past Expenses</a>
                    <Image
                        src="/man.png"
                        alt="logo"
                        height={40}
                        width={40}
                        className='object-contain  mx-3'
                    />
                </div>
            </div>


            <hr />
        </div>
    )
}

export default Dash_Nav

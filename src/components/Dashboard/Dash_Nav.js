import React from 'react'
import Image from 'next/image'
import Dash_Avatar from './Dash_Avatar'
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
                    <a href="/dashboard">Dashboard</a>
                    <a href="/charts">Charts</a>
                    <Dash_Avatar/>
                </div>
            </div>


            <hr />
        </div>
    )
}

export default Dash_Nav

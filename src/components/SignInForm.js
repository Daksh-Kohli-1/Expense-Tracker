"use client"
import React from 'react'

const SignInForm = () => {
    return (
        <div>
            <div className='flex flex-col items-center h-[20vh] justify-center'>
                        <p className='text-5xl'> Welcome to FinancePro</p>
            </div>
            <div>
                <form className='flex flex-col items-center'>
                    <input type="text" placeholder='Name' className='bg-[#4B4221] w-[20vw] m-3 rounded-md h-[5vh] p-2' />
                    <input type="email" placeholder='Email' className='bg-[#4B4221] w-[20vw] m-3 rounded-md h-[5vh] p-2' />
                    <input type="password" placeholder='Password' className='bg-[#4B4221] w-[20vw] m-3 rounded-md h-[5vh] p-2' />
                    <button type="submit" className='w-[25vw] bg-[#FCCC18] p-2 m-3 rounded-md text-[#000000] transition duration-300 ease-in-out hover:bg-[#e0b500] hover:scale-105'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm

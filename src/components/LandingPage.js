"use client"
import React from 'react'

const LandingPage = () => {

    const HandleSubmit = ()=>{
        alert("Form Submitted")
    }
  return (
    <div className='flex flex-col mt-20'>
      <div className='flex flex-col items-center h-[20vh] justify-center'>
        <p className='text-5xl'> Welcome to FinancePro</p>
        <p className='text-sm'>Track your expenses with extreme precision and full privacy</p>
      </div>
      <div className='mt-20 ml-[10vw]'>
        <form onSubmit={HandleSubmit} className='flex flex-col'>
            <input type="email" name="email" placeholder='Email'  className='bg-[#4B4221] w-[20vw] m-3 rounded-md h-[5vh] p-2'/>
            <input type="password" name="password" placeholder='Password'  className='bg-[#4B4221] w-[20vw] m-3 rounded-md h-[5vh] p-2' />
            <button type="submit" className='w-[25vw] bg-[#FCCC18] p-2 m-3 rounded-md text-[#000000] transition duration-300 ease-in-out hover:bg-[#e0b500] hover:scale-105'>Log In </button>
        </form>
      </div>
      <div className='ml-[43vw]'>
        <span className='text-[#D1C6A2] text-sm'>Don't have an account? <a href="/SigninPage" className=''>SignUp</a> </span> 
      </div>
    </div>
  )
}

export default LandingPage

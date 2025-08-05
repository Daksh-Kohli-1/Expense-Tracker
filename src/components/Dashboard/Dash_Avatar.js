"use client"
import React, {useState} from 'react'
import Image from 'next/image'

const Dash_Avatar = () => {


    return (
        <div>
            <Image
                src="/man.png"
                alt="logo"
                height={40}
                width={40}
                className='object-contain  mx-3'
            />
        </div>
    )
}

export default Dash_Avatar

import Dash_bricks from '@/components/Dashboard/Dash_bricks'
import Dash_Nav from '@/components/Dashboard/Dash_Nav'
import Dash_table from '@/components/Dashboard/Dash_table'
import React from 'react'

const page = () => {
  return (
    <div>
      <Dash_Nav/>
      <Dash_bricks/>
      <Dash_table/>
    </div>
  )
}

export default page

"use client"

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'


const Nav = () => {
  return (
      <nav className='flex justify-between p-4 items-center '>
            <div>
        <h1 className='font-bold text-2xl'>Blog application</h1>
    </div>
    <div className='flex gap-4'>
    <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug"/>
<UserButton/>
    </div>
        </nav>
  )
}

export default Nav
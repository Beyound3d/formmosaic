"use client"


import Image from 'next/image'
import React from 'react'

import { UserButton, useUser } from '@clerk/nextjs'
// import { Button } from '@/components/ui/button';



function Header  () {
  const {user,isSignedIn}=useUser();
  return (
    <div className="p-5 border-b shadow-sm">
      <div className="flex items-center justify-between">
        
            <Image src={'/logo.svg'} width={180}  height={50} alt='logo'></Image>
           
            {isSignedIn?
          <div className='flex items-center gap-5'>
            {/* <Button varient="outline">Dashboard</Button>   */}
            <UserButton/>
            </div>:
            // <Button>Get started</Button>
            <div></div>
          }
      </div>
    </div>
  )
}

export default Header
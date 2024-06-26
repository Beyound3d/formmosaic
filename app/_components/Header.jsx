import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="p-5 border-b shadow-sm">
        <div>
            <Image src={'/logo.svg'} width={100}  height={150} alt='logo'></Image>
        </div>
    </div>
  )
}

export default Header
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const nav = () => {

  const [getNavToggle, setNavToggle] = useState(false);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/logo-black-lg-bg0.svg'
          alt='Logo'
          width={70}
          height={70}
          className='object-contain'
        />
      </Link>

    {/*Desktop nav with Mobile nav adjusted*/}
    <div className='sm:flex hidden'>
      {/*Do user log in logic */}
      <div className='flex gap-3 md:gap-5'>
        {/*<Link href='' className='black_btn'>
          Sign Up
        </Link>*/}
        <button type='button' className='black_btn'>
          Sign up
        </button>
        <button type='button' className='outline_btn'>
          Log in
        </button>
      </div>
    </div>
     {/*Mobile nav */}
     <div className='sm:hidden flex relative'>
      {/*Do user log in logic */}
      <div className='flex'>
        <Image
          src='/assets/logo-color.svg'
          alt='Nav Toggle'
          width={30}
          height={30}
          className=''
          onClick={()=> setNavToggle((prev) => !prev)}
        />
      </div>
    </div>
   

    </nav>
  )
}

export default nav
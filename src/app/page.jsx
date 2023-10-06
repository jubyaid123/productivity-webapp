import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <div className='md:grid md:grid-cols-2 items-center flex flex-col p-5 mt-5'>
        <div>
          <h1 className='head_text text-center'>
          Manage & Organize 
          <br className=''></br>
          <span className='text-center blue_gradient'>All Your Tasks</span>
          </h1>
          <p className='desc text-center'>EffiFlow is a task-management and productivity web-application. 
          We allow our users to manage all their needs in one place, using a calendar and to-do list.</p>
          <div className= 'flex mt-10 blue_btn ml-40 mr-40 '>
            <Link href= "/signup" className=''>Get Started</Link>
          </div>
        </div>
        <Image className='items-center mt-5'
        src='/assets/home_img1.svg'
        alt=''
        width={300}
        height={300}
        layout="responsive"
        />
      </div>
    </section>
  )
}

export default Home

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const nav = () => {
  return (
    <>
    
    <nav>
        <div className='logo'>
          <Image src="/logo.png" alt='' width={125} height={125} ></Image>
        </div>
        <ol>
          <li>
            <Link href="/"><a>Home</a></Link></li>
          <li>
            <Link href="/apply_for_job"><a>Apply for Job</a></Link></li>
          <li>
            <Link href="/about"><a>About us</a></Link></li>
          <li>
            <Link href="/login"><a>Log In or Register</a></Link></li>
          <li><i className="fa fa-bell" /></li>
          <li  className='cart'>
          <Image  src="/cart.png" alt='' width={28} height={28} ></Image>
          </li>
        </ol>
      </nav>

    </>
  )
}

export default nav
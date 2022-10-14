import React from 'react'
import Image from 'next/image'

const service = () => {
  return (
    <>
    <div className='flex_ser_con'>


    <div className='service_con'>
        <div className='simg_container'>
            <Image  className='simg1' src="/prevention1.jpg" layout="fill" alt=''></Image>
        </div>
        <p>Safety Measures at every step</p>
    </div>
    <div className='service_con'>
        <div className='simg_container'>
            <Image className='simg1' src="/Customer Service.png" layout="fill" alt=''></Image>
        </div>
        <p>24*7 friendly customer service</p>
    </div>
    <div className='service_con'>
        <div className='simg_container'>
            <Image className='simg1' src="/care.jpg" layout="fill" alt=''></Image>
        </div>
        <p>We care for our customers and our sellers</p>

    </div>
    </div>
    </>
  )
}

export default service
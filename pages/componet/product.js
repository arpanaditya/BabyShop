import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsFillStarFill} from 'react-icons/bs'

const colors = {
    orange:"#ffb357",
    gray:"#bbbbbb"
}


const product = (data_p) => {

    const stars =Array(5).fill(0);
    
  return (
    <>
    <div className='pro_al'>
        <div className='product_container'>
            <Link href={"/product/"+data_p.id}>
            <Image src={data_p.img} alt="" layout="fill"></Image>
            </Link>
        </div>
    <p>{data_p.name}</p>
    
    {stars.map((_, index) =>{
        return(
    // <i class="uis uis-star" key={index} 
    // ></i>
    <BsFillStarFill key={index} color={data_p.rating <= index ? colors.gray : colors.orange }/>
        )
    })}
    <p>{data_p.price}</p>
    </div>
    </>
  )
}

export default product
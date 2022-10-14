import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import papi from "../api/papi"
// import {useState} from 'react'
// const tyu = papi
// const [pnsme,setPname]= useState(" ")

const P_id = () => {

  const router = useRouter();
  const pagen = router.query.p_id;
  // const pagen = router.query.p_id;
  const pgt = Number(pagen);
  function Jij(val, index) {
    if (val.id === pgt) {

      return (
        <>
          <div className="p_prod">
            
            <div className="p_data_d">
              <div className='con_da'>
              <p id='pn'>{val.name}</p>
              <p>{val.des}</p>
              <p>{val.price}</p>
              <p></p>
              <div className='f_btn'>
              <button>Add to Cart</button>
              <button>Buy Now</button>
              </div>
              </div>
            </div>
            {/* ______________________________________ */}
            <div className="p_img_d">
              <div className='con_im'>
              <Image src={val.img} alt="" layout='fill'></Image>

              </div>
            </div>
          </div>

        </>

      )

    }
  }


  return (
    <>
      <section className='pp'>
        {/* {pgt} */}
        {papi.map(Jij)}
        {/* <div cla/>ssName="p_prod"> */}
        {/* <div className="p_data_d">
          <p id='pn'>{papi[pagen].name}</p>
        </div> */}
        {/* ______________________________________ */}
        {/* <div className="p_img_d">
          <Image src={papi[pagen].img} alt="" layout='fill'></Image>
        </div> */}
        {/* </div> */}
      </section>
    </>
  )
}

export default P_id
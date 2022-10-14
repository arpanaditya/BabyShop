import Head from 'next/head'
import Image from 'next/image'
import Navbar from './componet/nav'
import Service from './componet/service'
import Product from './componet/product'
import papi from './api/papi'

export default function Home() {

  function mpd(val, index){
    return(
            <Product name={val.name} rating={val.rating} img={val.img} price={val.price} id={val.id}
            ></Product>
    )
  }
  return (
    <>
      <Head>
        <title>Welcome to BabyShop</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="shortcut icon" href="Img/logo.png" type="image/x-icon" />
      </Head>

      <Navbar />
{/* ------------------------------------------------------------- */}
      <section className='sec1'>
        <div className='hero_container'>
          <div>
            <p id='h_t'>We care for your baby</p>
            <p id='h_st'>What are you looking for? Just pick up anything and you will get that for rent at ease. Gift your baby with a branad new looks with our hygiene and safe product. </p>
          </div>
          <div>
            <Image src="/shoping.png" width={1256} height={760} alt=""></Image>
          </div>
        </div>

      </section>
      {/* ------------------------------------------------- */}

      {/* //!======================service section======================== */}
      <section className="sec2">
        <div className='headers'>
          <p>Our Service</p>
          <hr></hr>
        </div>
        <Service></Service>
      </section>

      {/* //!=============================Product Section=================== */}

      <section className="sec3">
        <div className='headers2'>
          <p>All Product</p>
          <hr></hr>
        </div>
        <div className='tfg'>
        <div className='four_gird'>
        {papi.map(mpd)}
        </div>
        </div>
      </section>

      {/* //!=============================Offer Section=================== */}

<section className='sec1 tfl'>
  <div className='sf'>

  <div id='div1'>
    <p id='off_end'>Want to stay connected?<br/>Subscribe for our monthly news letter</p>
    <input className='input' placeholder='Enter your mail id here'></input>
    <button id="sus">Subscribe &#8594;</button>
  </div>
  <div className='img_fo'>
    <div id='con-tx'>
    <Image src="/home1.png" alt="" layout="fill"></Image>
    </div>
  </div>

  </div>
</section>


    </>
  )
}

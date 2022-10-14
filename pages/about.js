import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import About from './componet/about_u'

const about = () => {
  return (
    <>
      <section className='res_mr'>
        {/* ----------------------------- */}
        <div className='fixtop_ab'>
          <h1 id='fd_ab_b'>Our Aim</h1>

        </div>

        <About></About>
        <div className='fixtop_ab'>
                    <h2 id='fd_ab_b'>Contact</h2>
                  </div>
        <div className='info_ab'>
          <div className='con_ab_info'>
          <div className='iab'>
          <Image src="/pic-2.jpeg" layout='fill' className="card-img-top" alt="Profile pic" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Aditya Arpan</h5>
            <p className="card-text"> B. Tech (CSE) 2nd year</p>
            <Link href="https://linktr.ee/arpanaditya" target="_blank"><button className='contact_ab_info'>Contact</button></Link>
          </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <footer>
        <div className='fixtop_ab'>
                    <h2 id='fd_ab_b'>FEED BACK FORM</h2>
                  </div>
          <div className="container">
            <iframe src="https://embed.lottiefiles.com/animation/53830"></iframe>
            <form>
              <div className='fdd'>
                <div className='fd_ab'>
                  <div className="row">
                    <div>
                      <label>First Name</label>
                    </div>
                    <div className='abtext'>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                        required />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Last Name</label>
                    </div>
                    <div className='abtext'>
                      <input
                        type="text"
                        id="fname"
                        name="lastname"
                        placeholder="Your last name.."
                        required />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Mail Id</label>
                    </div>
                    <div className="abtext">
                      <input
                        id='fname'
                        type="email"
                        name="mailid"
                        placeholder="Your mail id.."
                        required />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Country</label>
                    </div>
                    <div>
                      <select
                        id='fname'
                        name="country" required>
                        <option value="none">Select Country</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="russia">Russia</option>
                        <option value="japan">Japan</option>
                        <option value="india">India</option>
                        <option value="china">China</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>Feed Back</label>
                    </div>
                    <div>
                      <textarea
                        id="tfname"
                        name="subject"
                        placeholder="Write something.."
                        required></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <a href="">
                      <input
                        type="button"
                        id="btn_ab"
                        value="Submit"
                      />
                    </a>
                  </div>

                </div>

              </div>
            </form>

          </div>
        </footer>
      </section>
    </>
  )
}

export default about
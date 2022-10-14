import React, { useState } from 'react'
import Link from 'next/link';

const Apply_for_job = () => {
  const [registation, setRegistation] = useState({
    username: "",
    email: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistation({ ...registation, [name]: value })
  }


  return (
    <>

      <section className='res_mr'>
        <div className='c_contain'> {/*container*/}
          <div className='ch_contain'> {/*form */}


            <p className='t_res ty'>Apply For Job</p>
            <br></br>
            <p className='t_res ytr'>Hey, Enter your details to apply for job.</p>


{/* ----------------------------------------------------------------------------------- */}
            <form action=''>
              <p >First Name</p>
              <input 
              className='input_res'
              type="text" 
              />
<br/>
              <p>Last Name</p>
              <input 
              className='input_res'
              type="text" 
               />
<br/>
              <p>Email *</p>
              <input
                className='input_res'
                name="email"
                onChange={handleInput}
                value={registation.email}
                type="email"
              ></input> {/*email */}
<br/>
              <p
                >Phone Number</p>
              <input
              className='input_res'
                type="number"
               />

<br/>
              <p >Gender</p>

              <input 
              className='input_res'
              type="radio" 
              name="flexRadioDefault" />
              <label >
                Male
              </label>


              <input type="radio" name="flexRadioDefault" />
              <label >
                Female
              </label>


<br/>
              <div >
                <label>Country</label>
                <select  className='input_res bgw' aria-label="Default select example">
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


<br/>
              <p >Upload CV</p>
              <input 
              className='input_res bgw'
              type="file" />

              <div id='nji'>
                <button id='res_btn' type='submit'>Apply</button>
              </div>
            </form>
          </div>
        </div>
      </section>






    </>
  )
}

export default Apply_for_job
import React, { useState } from 'react'
import Link from 'next/link';

const Apply_for_job = () => {
  const [registation, setRegistation] = useState({
    username: "",
    email: "",
    phoneNumber: ""
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
            <form className='apply_job_form' action=''>
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
              <p>Email</p>
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
                name='phoneNumber'
                value={registation.phoneNumber}
                onChange={handleInput}
               />

<br/>
              <p >Gender</p>

              <div className='radio_container'>
                <input
                type="radio" 
                id='male'
                name="gender" />
                <label htmlFor='male'>
                  Male
                </label>


                <input type="radio" id='female' name="gender" />
                <label htmlFor='female'>
                  Female
                </label>
              </div>


<br/>
              <label htmlFor='country'>Country</label>
              <div >
                <select style={{width: "100%"}} id='country' className='input_res bgw' aria-label="Default select example">
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
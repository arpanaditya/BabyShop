import React ,{useState}from 'react'
import Link from 'next/link'

const Register = () => {
    const [registation, setRegistation] = useState({
		email: "",
		password: "",
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setRegistation({ ...registation, [name]: value })
	}

  return (
    <section className='res_mr'>
				<div className='c_contain'> {/*container*/}
					<div className='ch_contain'> {/*form */}
					<p className='t_res ty'>Login</p>
					<br></br>
					<p className='t_res ytr'>Hey, Enter your details to get Register your account</p>
						<form action=''>
							<p>Email *</p>
							<input
							className='input_res'
								name="email"
								onChange={handleInput}
								placeholder='e.g. abcde@xyz.com'
								value={registation.email}
								type="email"
							></input> {/*email */}
							<br></br>
							<p>Password *</p>
							<input
							className='input_res'
								name="password"
								onChange={handleInput}
								placeholder='Enter your password'
								value={registation.password}
								type="password"
							></input> {/*password*/}
							<br></br>
							<div id='nji'>
							<button id='res_btn' type='submit'>Login</button>
							</div>

							<p className='t_res'>Do not Have a account ? <Link href="/register">Register</Link></p>
						</form>
					</div>
				</div>
			</section>
  )
}

export default Register
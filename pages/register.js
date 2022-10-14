import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
	const [registation, setRegistation] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: ""
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setRegistation({ ...registation, [name]: value })
	}
	const handelSubmit = (e) => {
		e.preventDefault();
		const newRecord = { ...registation, id: new Date().getTime().toString }
		setRecords([...records, newRecord]);

		setRegistation({
			username: "",
			email: "",
			password: "",
			cpassword: ""
		})
	}

	return (
		<>

			<section className='res_mr'>
				<div className='c_contain'> {/*container*/}
					<div className='ch_contain'> {/*form */}
					<p className='t_res ty'>Registation</p>
					<br></br>
					<p className='t_res ytr'>Hey, Enter your details to get Register your account</p>
						<form action='' >
							<p>Name *</p>
							<input
							className='input_res'
								name="username"
								onChange={handleInput}
								placeholder='e.g. don joo'
								value={registation.username}
							></input> {/*name */}
							<br></br>
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
								placeholder=''
								value={registation.password}
								type="password"
							></input> {/*password*/}
							<br></br>
							<p>Conform Password *</p>
							<input
							className='input_res'
								name="cpassword"
								onChange={handleInput}
								placeholder=''
								value={registation.cpassword}
								type="password"
							></input> {/*cpassword*/}
							<br></br>
							<div id='nji'>

							<button id='res_btn' type='submit'>Register Me</button>
							</div>

							<p className='t_res'>Already Have a account ? <Link href="/login">Login</Link></p>
						</form>
					</div>
				</div>
			</section>

		</>
	)
}

export default Login
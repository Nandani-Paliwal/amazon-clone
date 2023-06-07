import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

function Login() {
const navigate = useNavigate('');  
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
  e.preventDefault();

  auth
      .signInWithEmailAndPassword(email, password)
      .then( (auth) => {
        navigate('/')
      })
      .catch(error => alert(error.message))

  //some fancy firebase login shittttt....
}

const register = e => {
  e.preventDefault();

  auth
      .createUserWithEmailAndPassword(email, password)
      .then( (auth) => {
        // it succesfully created a new user with email and password
        // console.log(auth);
        if (auth) {
          navigate('/')
        }
      } )
      .catch(error => alert(error.message))

  //Do some fancy firebase register shitttt...
}
  
      

  return (
    <div className='login flex flex-col items-center h-screen bg-white'>
        <Link to="/">
          < img className='login_logo mt-5 mb-5 object-contain w-28 mr-auto ml-auto' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' />
        </Link>

        <div className='login_container w-80 h-fit flex flex-col border border-solid border-gray-300 rounded-md p-5'>
          <h1 className='signin font-medium mb-5 '>Sign-in</h1>

          <form className='form mb-3 bg-white w-full'>
            <h5 className='email mb-1'>E-mail</h5>
            <input className='input1 h-8 mb-3 bg-white w-full border' type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5 className='pass mb-1'>Password</h5>
            <input className='input2 h-8 mb-3 bg-white w-full border' type='password' value={password} onChange={e => setPassword(e.target.value) } />

            <button type='submit' onClick={signIn} className='signInButton bg-button mt-3 border border-solid border-bordercolor rounded-sm cursor-pointer w-full h-8'>Sign In</button>
          </form>

          <p className='para mt-4 text-xs'>
            By Signing-in you agree to the AMAZON FAKE CLONE Conditions of Use  Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button onClick={register} className='login_registerButton mt-3 border border-solid border-gray-400 .rounded-sm cursor-pointer bg-gray-100 w-full h-8'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
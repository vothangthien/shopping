import React from 'react'
import Link from 'next/link'
import valid from '../utils/valid'
import { useState,useContext } from 'react'

function Signin() {
const initialState={email:'',password:'',}
const [userData,setUserData]=useState(initialState);
const {email,password}=userData;

const handlechangeinput=e=>{
 const {name,value}=e.target;
 setUserData({...userData, [name]:value})


}

const handleSubmit=e=>{
  e.preventDefault()
console.log(userData)
  
}


  return (
    <div>
        <form className='mx-auto my-4' style={{maxWidth:'500px' }} onSubmit={handleSubmit}>
           <div className="mb-3">
             <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" 
                  name='email'value={email} onChange={handlechangeinput}></input>
           </div>


        <div className="mb-3">
         <label forhtml="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1"
           name='password'value={password} onChange={handlechangeinput}></input>
       </div>
 
        <button type="submit" className="btn btn-primary">SIGNIN</button>
        <p className='my-2' >
        You not have an account? <Link href="/Register" legacyBehavior><a style={{color: 'crimson'}}>Register Now</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin
import React from 'react'
import Link from 'next/link'
import { useState,useContext } from 'react'
import valid from '../utils/valid';



function Register() {
const initialState={name:'',email:'',password:'',cf_password:''};
const [userData,setUserData]=useState(initialState);
const {name,email,password,cf_password}=userData;

const handlechangeinput=e=>{
  const{name,value}=e.target;
  setUserData({...userData,[name]:value});
}

const handleSubmit=e=>{
e.preventDefault();
const errMsg=valid(name,email,password,cf_password);
if(errMsg) console.log(errMsg);

};



  return (
    <div>
    <form className='mx-auto my-4' style={{maxWidth:'500px' }} onSubmit={handleSubmit} >
    <div className="mb-3">
         <label forhtml="name" className="form-label">NAME</label>
         <input type="text" className="form-control" id="name" 
           name='name'value={name} onChange={handlechangeinput}></input>
       </div>

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

   <div className="mb-3">
     <label forhtml="exampleInputPassword1" className="form-label">comfrim Password</label>
     <input type="password" className="form-control" id="exampleInputPassword2"
       name='cf_password' value={cf_password} onChange={handlechangeinput}></input>
   </div>

    <button type="submit" className="btn btn-primary">REGISTER</button>
    <p className='my-2' >
      Already have an account? <Link href="/Signin" legacyBehavior><a style={{color: 'crimson'}}>Login Now</a></Link>
    </p>
  </form>
</div>
  )
}

export default Register
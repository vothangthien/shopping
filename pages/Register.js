import React from 'react'
import Link from 'next/link'

function Register() {
  return (
    <div>
    <form className='mx-auto my-4' style={{maxWidth:'500px' }}>
    <div class="mb-3">
         <label for="name" class="form-label">NAME</label>
         <input type="email" class="form-control" id="name" 
           name='name'></input>
       </div>

       <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" 
           name='email'></input>
       </div>


    <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1"
       name='password'></input>
   </div>

   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">comfrim Password</label>
     <input type="password" class="form-control" id="exampleInputPassword2"
       name='cf_password'></input>
   </div>

    <button type="submit" class="btn btn-primary">REGISTER</button>
    <p className='my-2' >
      Already have an account? <Link href="/Signin" legacyBehavior><a style={{color: 'crimson'}}>Login Now</a></Link>
    </p>
  </form>
</div>
  )
}

export default Register
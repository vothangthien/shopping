import React from 'react'
import Link from 'next/link'
function Signin() {
  return (
    <div>
        <form className='mx-auto my-4' style={{maxWidth:'500px' }}>
           <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
               name='email'></input>
           </div>


        <div class="mb-3">
         <label for="exampleInputPassword1" class="form-label">Password</label>
         <input type="password" class="form-control" id="exampleInputPassword1"
           name='password'></input>
       </div>
 
        <button type="submit" class="btn btn-primary">SIGNIN</button>
        <p className='my-2' >
        You not have an account? <Link href="/Register" legacyBehavior><a style={{color: 'crimson'}}>Register Now</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin
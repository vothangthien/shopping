import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
const router=useRouter()
const isactive=r=>{
  if(r===router.pathname){
    return 'active'
  }else{
    return'';
  }
}



  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
    
    <Link  href="/" legacyBehavior>
    <a className="navbar-brand">
      SHOPPING</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <Link href="/Cart" legacyBehavior> 
              <a className={"nav-link"+isactive('/Cart')} >CART</a>

           </Link>
        </li>
        <li className="nav-item">
          
          <Link href="/Signin" legacyBehavior> 
             <a className={"nav-link"+isactive('/Signin')} >SIGNIN</a>
          </Link>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             USER NAME
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">PROFILE</a></li>
            <li><a className="dropdown-item" href="#">LAYOUT</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
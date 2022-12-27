import React,{useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {DataContext} from '../store/GlobalState'

function Navbar() {
const router=useRouter()
const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state

const isactive=r=>{
  if(r===router.pathname){
    return 'active'
  }else{
    return'';
  }
}

const handleLogout = () => {
  Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
  localStorage.removeItem('firstLogin')
  dispatch({ type: 'AUTH', payload: {} })
  dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
  return router.push('/')
}

const loggedRouter=()=>{
  return(
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       USER NAME
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li><a className="dropdown-item" href="#">PROFILE</a></li>
      <li><a className="dropdown-item" href="#">LAYOUT</a></li>
    </ul>
  </li>
  )

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
       {
           Object.keys(auth).length ===0
           ?<li className="nav-item">
          
           <Link href="/Signin" legacyBehavior> 
              <a className={"nav-link"+isactive('/Signin')} >SIGNIN</a>
           </Link>
         </li>
          :loggedRouter()
       }


       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
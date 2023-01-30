/* eslint-disable @next/next/no-img-element */
import React,{useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookies from 'js-cookie'
function Navbar() {
  const router = useRouter()
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
  Cookies.remove('refreshtoken', {path:'api/auth/accessToken'})
  localStorage.removeItem('firstLogin')
  dispatch({ type: 'AUTH', payload: {} })
  dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
  return router.push('/')
}

const adminRouter = () => {
  return(
      <>
      <Link href="/users">
          <a className="dropdown-item">Users</a>
      </Link>
      <Link href="/create">
          <a className="dropdown-item">Products</a>
      </Link>
      <Link href="/categories">
          <a className="dropdown-item">Categories</a>
      </Link>
      </>
  )
}



const loggedRouter=()=>{
  return(
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       
             <img src={auth.user.avatar} alt={auth.user.avatar} 
                    style={{
                        borderRadius: '50%', width: '30px', height: '30px',
                        transform: 'translateY(-3px)', marginRight: '3px'
                    }} /> {auth.user.name}
          
       
     </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li><a className="dropdown-item" href="#">PROFILE</a></li>
         <div className="dropdown-divider"></div>
         <button className="dropdown-item"onClick={handleLogout} >LAYOUT</button>
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
      <ul className="navbar-nav p-1">
      
        <li className="nav-item">
          <Link href="/Cart" legacyBehavior> 
              <a className={"nav-link"+isactive('/Cart')} >
                <i className='fas fa-shopping-cart position-relative'>
                <span className='position-absolute' 
                  style={{
                    padding: '3px 6px',
                    background:'#ed143dc2',
                    borderRadius:'50%',
                    top: '-10px',
                    right: '-10px',
                    color:'white',
                    fontSize:'14'
                  }}>
                 
                     {cart.length}
                  </span>
                CART

                </i>
                </a>

           </Link>
        </li>
       {
           Object.keys(auth).length ===0
           ?<li className="nav-item">
          
              <Link href="/Signin" legacyBehavior> 
                  <a className={"nav-link"+isactive('/Signin')} >SIGNIN</a>
               </Link>
         </li>
          : loggedRouter()
       }
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
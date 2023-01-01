import React from 'react'
import Navbar from './Navbar'
import Notify from './Notify'
import Notity from './Notify'
function Layout({children}) {
  return (
    <div className='container'>
      
       <Navbar/>
       <Notify/>
       {children}
    </div>
  )
}

export default Layout
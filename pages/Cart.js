/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { DataContext } from '../store/GlobalState'
import { useContext,useState,useEffect } from 'react'
import { isTemplateExpression } from 'typescript'
import CartItem from '../components/CartItem'

const Cart=()=>{
  const {state,dispatch}= useContext(DataContext)
  const {cart,auth}=state
  const [total,setTotal]=useState(0);
  useEffect(()=>{
       const getTotal=()=>{
        const res=cart.reduce((prev,item)=>{
          return prev+(item.price *item.quantity)
        },0)
        setTotal(res)
       }
       getTotal();
  },[cart])
  
  if(cart.length ===0)
    return <img className='img-responsive w-100' src='/shopping.jpg' alt='not empty'/>
  return (
    <div className='row mx-auto'>
        <Head>
          <title> THIS IS CART</title>
        </Head>
        <div className='col-md-8 text-secondary table-responsive my-3'>
          <h2 className='text-uppercase'> SHOPPING CART</h2>
          <table className='table my-3'>
            <tbody>
                {
                  cart.map(item => (
                     <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart}/>
                  ))
                  
                }
            </tbody>

          </table>

        </div>
        <div className='col-md-4 my-3 text-right text-uppercase text-secondary'>
           <form>
            <h2> Shipping</h2>
               <label htmlFor='address'>address</label>
               <input type="text" name='address' id='address' className='form-control mb-2'></input>
              <label htmlFor='mobile' >mobile</label>
               <input type="text" name="mobile" id='mobile' className='form-control mb-2' />
                  
           </form>
           <h3> ToTal:<span className='text-danger'>${total}</span></h3>

           <Link href={auth.user ? '#' : '/signin'} legacyBehavior>
              <a className='btn btn-dark my-2'> Procedd with payment</a>
           </Link>


        </div>
        

    </div>
  )
}

export default Cart
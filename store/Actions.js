  const Actions={
  AUTH:"AUTH",
  NOTIFY:"NOTIFY",
  ADD_CART: 'ADD_CART',

}

export const addToCart =(product,cart)=>{
  if(product.inStock ===0) return ({type:'NOTIFY', payload:{error:' this product is out of stock'}})

  const check = cart.every(item=>{ return item._id !== product._id})

  if(!check) return({type:'NOTIFY', payload:{error:'the product has been added to cart'}})
  return({type:'ADD_CART', payload:[...cart,{...product,quantity:1}]})
}

export const decrease=(data,id)=>{
  const newData =[...data]
  newData.forEach(item=>{
    if(item._id === id) item.quantity -= 1
  })
      return ({type:'ADD_CART',payload:newData})
}

export const increase =(data,id)=>{
  const newData =[...data]
  newData.forEach(item=>{
    if(item._id === id) item.quantity += 1
  })
  return ({type:'ADD_CART',payload:newData})
}


export default Actions
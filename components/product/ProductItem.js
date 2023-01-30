/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useContext } from "react"
import {DataContext} from '../../store/GlobalState'
import { addToCart } from "../../store/Actions"

const ProductItem =({product})=>{

  const {state, dispatch}=useContext(DataContext)
  const {cart}=state

const userLink=()=>{
  return(
    <>
      <Link href={`product/${product._id}`} legacyBehavior  >
        <a className="btn btn-info" style={{marginRight:'5px',flex:1}}> VIEW</a>
      </Link>
      <button className="btn btn-success" 
        style={{marginLeft:'5px', flex:1}}
        disabled={product.inStock ===0 ? true:false}// khi không còn sản phẩm sẽ không hiện lên nút mua
         onClick={()=> dispatch(addToCart(product,cart))}// chọn sản phẩm mua
       >      
               BUY
      </button>
    </>
  )
}


     return(
          <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src={product.images[0].url} alt={product.images[0].url}/>
                <div className="card-body">
                    <h5 className="card-title text-capitalize" title={product.title}>
                           {product.title}
                      
                       </h5>
                       <div>
                         <h6 className="text-danger">
                         ${product.price}
                         </h6>{
                            product.inStock>0
                            ?<h6 className="text-danger"> In stock : {product.inStock}</h6>
                            :<h6 className="text-danger"> Out Stock</h6>
                        
                          }

                       </div>
                    <p className="card-text" title={product.title}>
                       { product.description}

                    </p>
                    <div className="row justify-content-between mx-0">
                       {userLink()}
                    </div>

                </div>
          </div>
     )

}

export default ProductItem
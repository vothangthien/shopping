import { getData } from "../utils/fetchData";
import { useState } from "react";
import Head from "next/head";
import ProductItem from '../components/product/ProductItem'
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const home=(props)=>{
// eslint-disable-next-line react-hooks/rules-of-hooks
const [products,setProducts]=useState(props.products)
console.log(products)

  return(
    <div className="products">
       <Head>
        <title> this is home</title>
      </Head>
      {
         products.length===0
         ?<h2> No PRoducts</h2>
         : products.map(product =>(
           <ProductItem key={product._id} product={product}/>
         ))
      }
      </div>
  )
}


export async function getServerSideProps() {
  const res = await getData('product')
  return {
    props: {
       products:res.products,
       result:res.result
    }, // will be passed to the page component as props
  }
}

export default home;
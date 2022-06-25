import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function ContactUsPage() {
    const router= useRouter()
    const {productId} = router.query
    console.log(productId)
   
    const { data, error } = useSWR(`http://localhost:3000/place/product/${productId}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>  
    console.log(data.response)
     
    return (
        <div>
            <h1>Testing</h1>
            
            {
                data.response.map((item)=>item.title)
            }
        
        </div>
    )
    
   //return(<div></div>)
  }

/*
function ProductDetail()
{
    const [data, setData]= React.useState([])
    const router = useRouter()
    const productId = router.query.productId
    
    React.useEffect(()=>
    {
        axios
        .get('http://localhost:3000/place/product/')
        .then((res)=>
        {
            console.log(typeof(res.data.response))
            setData(res.status.response)
            console.log(data)
        })
        .catch((error) => console.error(error));
    },[data])
    return (
        <>
          <h1>Details about product {productId}</h1>
         
         
          {data.map((items, index)=>
          {
              items.title
          })}
          
      
        </>
      
    )
    
    
}
export default ProductDetail;
*/
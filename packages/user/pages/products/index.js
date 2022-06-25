import useSWR from "swr"
import { Button } from "@mui/material"
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then(res => res.json())
function productList() {
    const router = useRouter()
    const [productId, setProductId]= useState("")
    const handleGetId=(value)=>
    {
       console.log(value)
       setProductId(value)
       router.push(`/products/${value}`)
    }
    const { data, error } = useSWR(`http://localhost:3000/place/product/${productId}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data.response)
   
    return (
        <>

            {
                data.response.map((item, index) => {
                    return (
                        <div>
                            <Stack direction="row" key={index} spacing={2}>
                                <Button onClick={()=>handleGetId(item._id)} variant="outlined">{item.title}</Button>
                              
                            </Stack>


                        </div>
                    )
                })

            }
        </>
    )
}
export default productList
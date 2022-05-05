import React, { useEffect, useState  } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Display = (props) => {
    const {productList, setProductList} = props;
    
    // We want to the product to be updated immediately, that's how I know that I want to have/life state -> go to Main since this is getting imported. So we'll want to pass useState in as a prop    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err)=>console.log(err))
        }, [])
        // axios.post("http://localhost:8000/api/products");



    return (
        <div class="card p-5">
            
            {
                productList.map((product,index) => (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }

        </div>
    )
}

export default Display
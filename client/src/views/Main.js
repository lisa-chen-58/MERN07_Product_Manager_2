import React, { useState  } from 'react'
// import axios from 'axios';
import ProductForm from "../components/ProductForm";
import Display from "../components/Display";



const Main = () => {

    const [productList, setProductList] = useState([])
    // we initialize the state to what we want it to appear as

    return (
        <div>
            <ProductForm 
                productList={productList} 
                setProductList={setProductList}
            />
            <Display 
                productList={productList} 
                setProductList={setProductList}
            />
        </div>
    )
}

export default Main;
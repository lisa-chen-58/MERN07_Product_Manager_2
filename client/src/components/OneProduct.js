import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'

const OneProduct = (props) => {
    const [oneProduct, setOneProduct] = useState({});
    const{id}=props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err))

    },[])

    return (
        <div class="card p-5 m-5">
            <h2 class="card-header">{oneProduct.title}</h2>
            <hr/>
            <div class="card-body">
                <p>Cost: ${oneProduct.price}</p>
                <p>Description: {oneProduct.description}</p>
                <Link class="btn btn-secondary" to={"/"}>Home</Link>
            </div>
        </div>
    );
};

export default OneProduct
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleProduct = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()

    const fetchApi = async () => {
        var value = await fetch(`http://localhost:4000/item-api/${id}`);
        value = await value.json();
        setData(value);
        console.log(data)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
              
                    </div>
                    <div className='col-md-6'>
                    <h1>ID = {data._id}</h1>
                    <h1>Title = {data.title}</h1>
                    <h1>Description = {data.desc}</h1>
                    <h1>Price = {data.price} Rs</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct
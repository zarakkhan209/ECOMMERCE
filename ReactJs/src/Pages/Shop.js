import React, { useEffect, useState } from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";
// import "./shop.css";
// import banner from "../../assets/products/banner.jpg";
// import image from "../../assets/products/denim.jpg";
import { Link,useNavigate } from 'react-router-dom'
export const Shop = () => {

  
  const navigate = useNavigate()
    
  const [uData, setUData] = useState([]);
      
  const userData = async() =>{
      let res = await fetch("http://localhost:8000/product")
      res = await res.json();    
      setUData(res)
  }
  
  console.log(uData)
  
      useEffect(() => {
          userData()
      }, [])
  
      const deleteUser = async(id) =>{
        console.log("id : ", id)
        let res = await fetch("http://localhost:8000/product/"+id,{
            method: "delete"
        })
        res = await res.json()
        if(res){
            userData()
        }

    }

  // const { editApi } = props;
  // const [data, setData] = useState([]);

  // const fetchApi = async () => {
  //   var value = await fetch("http://localhost:4000/item-api");
  //   value = await value.json();
  //   setData(value);
  // };

  // //function for deleting the data
  // const delApi = async (id) => {
  //   // var data =
  //   await fetch(`http://localhost:4000/item-api/${id}`, {
  //     method: "DELETE",
  //   });
  //   // data = await data.json();
  //   fetchApi();
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, [editApi]);

  return (
    <div className="container">
      <div className="shopTitle mb-5">
        <h1 className="text-center display-3 mt-4">~New Products~</h1>
      </div>
      <div className="row pt-2 pb-2">
      {
          uData.map((item) => (
          <div className="col-md-3 mt-4">
            <div className="card " style={{ width: "16rem" }}>
              <img className="card-img-top" src={`http://localhost:8000/uploads/${item.image}`} alt="Card image cap" />
              <div className="card-body">
                  <Link style={{textDecoration: 'none', color: 'black'}} to={`/detail/${item._id}`}>
                <h5 className="card-title">
                  {item.title}</h5>

                  </Link>
                <p className="card-text">{item.description}</p>
                <h2 className="text-success">{item.price} Rs</h2>
                <div className="d-flex justify-content-around">
                  <Link to={`/editproduct/${item._id}`}>

                    <button
                      // onClick={() => editApi(item._id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>

                  </Link>
                  <button
                    // onClick={() => delApi(item._id)}
                    onClick={()=>deleteUser(item._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div> */}
    </div>
  );
};
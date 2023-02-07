import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from "../Redux/action";
import { Navigate, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [product,setProduct]=useState({
        "name":"",
        "image":"",
        "price":"",
        "category":"",
        "cartQuantity":0
    });
 const navigate=useNavigate()
 const dispatch=useDispatch();

 const handleChange=(e)=>{
   const {id,value}= e.target;
    setProduct({
        ...product,
        [id]:value,
    })
 }
 const handleAdd=()=>{

    dispatch(addProduct(product)).then((res)=> setProduct({
        "name":"",
        "image":"",
        "price":"",
        "category":""
    })
    )
  navigate("/")
 }
    return (
        <div>
            <h3>Add Product</h3>
            <div
                className="add-product-wrapper">
                <div className="form-element-div">
                    <label className="form-label">Product title</label>
                    <input onChange={handleChange} id="name" value={product.name} data-cy="add-product-title" type="text" />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Category</label>
                    <select id="category" data-cy="add-product-category" value={product.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Image</label>
                    <input onChange={handleChange} id="image"
                        data-cy="add-product-image"
                        type="url"
                        placeholder="Image URL"
                        value={product.image}
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Price</label>
                    <input onChange={handleChange} value={product.price} id="price" data-cy="add-product-price" type="text" />
                </div>
                <div style={{ textAlign: "right" }}>
                    <button data-cy="add-product-button" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;

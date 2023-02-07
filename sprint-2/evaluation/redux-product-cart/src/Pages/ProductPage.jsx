import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { getProducts, updateProduct } from '../Redux/action';
import './productpage.css'

const ProductPage = () => {
    const data=useSelector((store)=>store.products);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[])

    const handleCart=(product)=>{
        console.log(product,"product before update")
        if(product.cartQuantity===undefined){
            product={
                ...product,
                cartQuantity:0
            }
        }
        else{

            product={
                ...product,
                cartQuantity:product.cartQuantity+1
            }
        }
        console.log(product,"afterupdate")
        // dispatch(updateProduct(product))
    }
    return (
        <div style={{ width: "100%" }}>
            <div className='product-cards' style={{
                "display":"grid",
                "gridTemplateColumns":"repeat(4,1fr)"
                }}>
                
                {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through prop
                */
               data.map((product,index)=>
                    <ProductCard key={product.id} item={product}/>
               )
                }
            </div>
        </div>
    );
}

export default ProductPage
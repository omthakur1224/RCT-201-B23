import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProducts } from './../Redux/action';

const CartPage = () => {
    const [cart,setCart]=useState([]);
    const data=useSelector(store=>store.products);
    console.log(data,"data. in store");
    console.log(cart,'cartdata')
    
    useEffect(()=>{
        getProducts();
           setCart(data.filter((item)=>item.cartQuantity>0))
    },[])
    return (
        <div>
            <div className="cart-heading">Cart Page</div>
            <div className="cart-product-cards"
            style={{
                "display":"flex",
                "flexDirection":"column",
                "gap":50
                }} >
                {/* filter out the cart items from the product list (products that has some cartQuantity) and show them here, by rendering it in the ProductCard component */
                
                cart.map((product,index)=>
                <div key={index} 
                style={{
                 "display":"flex",
                 "justifyContent":"space-around"
                //  "flexDirection":"column",
                 }} >
                    
                  <img src={product.image} alt="imag"  style={{
                 "width":200,
                  "height":200}}
                 />
                 <div>

                  <p style={{
                      "textAlign":"left",
                      "display":"flex",
                      "justifyContent":"space-around"}}
                         >
                         <span>category</span>
                         <span>{product.category}</span>
                 </p>
 
                  <p style={{
                      "textAlign":"left",
                      "display":"flex",
                      "justifyContent":"space-around"}}
                      ><span>Name</span>
                         <span>{product.name}</span>
                  </p>
                  <p style={{
                      "textAlign":"left",
                      "display":"flex",
                      "justifyContent":"space-around"}}
                      ><span>Price</span>
                         <span>{product.price}</span>
                  </p>
                  <p style={{
                      "textAlign":"left",
                      "display":"flex",
                      "justifyContent":"space-around"}}
                      ><span>Cart Quantity</span>
                         <span>{product.cartQuantity}</span>
                  </p>
                </div>
                </div>
             
                )
                }
            </div>
        </div>
    )
}

export default CartPage
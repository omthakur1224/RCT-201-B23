import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { getProducts } from './../Redux/action';

const Navbar = () => {
    const [cartCount,setCartCount]=useState(0);
    const navigate=useNavigate();
    const data=useSelector(store=>store.products);

    useEffect(()=>{
        getProducts();
        let filtered=data.filter((item)=>item.cartQuantity>0)
        // console.log(filtered,'filtered ')
        setCartCount(filtered.length)
    },[data])
    return (
        <div style={{ display: "flex", padding: "0 10px", position: "relative" }}>
            <div className="navbar-title">
                <Link to='/'>
                    Product Dashboard
                </Link>
            </div>
            <div style={{ position: "absolute", right: "30px", top: "12px", display: 'flex', gap: '30px' }}>
                {/* Link the button to the /add route, when the user clicks on the button */}
                <button data-cy="add-product-navbar-button" className='navbar-add-product-btn' 
                onClick={()=>navigate('/add')}>
                    Add Product
                </button>

                <div style={{ position: 'relative' }}>
                    {/* The count should reflect the number of products, which has some cartQuantity value  */}
                    <div data-cy='navbar-cart-count' className='navbar-cart-count'>{cartCount}</div>
                    <Link to='/cart'>
                        <img data-cy='cart-image-link' src="./shopping-cart.png" alt='cart' width='30px' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../Redux/action";
import "./productcard.css"

const ProductCard = ({ item }) => {
    const dispatch=useDispatch();

    const handleCartDecrement=(item)=>{
        if(item.cartQuantity>0){
            item={
                ...item,
                cartQuantity:item.cartQuantity-1
            }
            dispatch(updateProduct(item.id,item))
        }
        else alert('item count is zero')
    }
    const handleCartIncrement=(item)=>{
        if(item.cartQuantity<=2){
            item={
                ...item,
                cartQuantity:item.cartQuantity+1
            }
            dispatch(updateProduct(item.id,item))
        }
        else alert("you can't add more than 3 item")
    }
    
    return (
        <div data-cy={`product-card-${item.id}`}>
            <div>
                <img data-cy="product-card-image" src={item.image} width={200} height={200} alt="Product" />
            </div>
            <div data-cy="product-card-name">{item.name}</div>
            <div data-cy="product-card-category">{item.category}</div>
            <div data-cy="product-card-price">€ {item.price}</div>
            <div>
                <div>
                    {/* Add a onClick handler for delete functionality */}
                    <button data-cy="delete-button" className="danger" onClick={()=>dispatch(deleteProduct(item.id))}>
                        <img src='./delete.png' alt='delete' width='20px' />
                    </button>

                </div>
                <div>
                    <button data-cy='add-to-cart' className="add-to-cart" onClick={()=>handleCartIncrement(item)}>
                        +
                    </button>
                    <span data-cy='product-quantity'>{item.cartQuantity}</span>
                    <button data-cy='remove-from-cart' className="remove-from-cart" onClick={()=>handleCartDecrement(item)}>
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

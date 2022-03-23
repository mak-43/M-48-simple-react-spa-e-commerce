import React from 'react';
import './Product.css'

const Product = ({handleAddToCart,product}) => {
        
        const {name,img,ratings,seller,price,}=product
       
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'> {name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Rating : {ratings} stars</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={()=>handleAddToCart(product)}>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;
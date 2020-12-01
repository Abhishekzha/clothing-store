import React from 'react';
import './cart-items.styles.scss';

const CartItems=({items:{imageUrl,name,price,quantity}})=>(
    <div className='cart-items'>
      <img src={imageUrl} alt='items'/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} X ${price}</span>

      </div>
    </div>
  )


export default CartItems;
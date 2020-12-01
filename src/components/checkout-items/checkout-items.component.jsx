import React from 'react';
import './checkout-items.styles.scss';
import {connect} from 'react-redux';
import {removeItemFromCart,addItems,increaseOrDecreaseQuantity} from '../../redux/cart/cart-action';


const CheckOutItems=({Items,removeItemFromCart,increaseOrDecreaseQuantity,addItems})=>{
  const {imageUrl,name,quantity,price}=Items;
  return(
    <div className='checkout-item'> 
    <div className='image-container'>
    <img src={imageUrl} alt='item'/>
    </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
      <div className='arrow' onClick={()=>increaseOrDecreaseQuantity(Items)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=>addItems(Items)}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={()=>removeItemFromCart(Items)}>&#10006;</div>
    </div>
  )
}
const mapDispatchToProps=dispatch=>({
    removeItemFromCart:items=>dispatch(removeItemFromCart(items)),
    addItems:items=>dispatch(addItems(items)),
    increaseOrDecreaseQuantity:items=>dispatch(increaseOrDecreaseQuantity(items))
})

export default connect(null,mapDispatchToProps)(CheckOutItems);
import React from 'react';
import './cart-dropdown.styles.scss';
import CartItems from '../cart-items/cart-items.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CustomButtom from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-action';

const CartDropdown=({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
       <div className='cart-items'>
         {
           cartItems.length ?
           (cartItems.map(cartItem=>(
             <CartItems key={cartItem.id} items={cartItem}/>
           ))
           ):(<span className='empty-cart'>No item in the Cart</span>)
         }
           </div>
         <CustomButtom onClick={()=>{history.push('/checkout')
           dispatch(toggleCartHidden())}}>
           CHECK OUT
           </CustomButtom>
         
       </div>
)

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
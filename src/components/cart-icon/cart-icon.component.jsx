import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon=({toggleCartHidden,cartItems})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{cartItems}</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=state=>({
  cartItems:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
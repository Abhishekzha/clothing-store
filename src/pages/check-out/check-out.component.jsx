import React from 'react';
import './check-out.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckOutItems from '../../components/checkout-items/checkout-items.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';


const CheckOut=({cartItems,total})=>(
   <div className='check-out'>
       <div className='checkout-header'>
           <div className='header-block'>
              <span>Product</span>
           </div>
           <div className='header-block'>
              <span>Description</span>
           </div>
           <div className='header-block'>
              <span>Quantity</span>
           </div>
           <div className='header-block'>
              <span>Price</span>
           </div>
           <div className='header-block'>
              <span>Remove</span>
           </div>

       </div>
       {
           cartItems.map(cartItem=>(
               <CheckOutItems key={cartItem.id} Items={cartItem} />
           ))
       }
       <span className='total'>TOTAL:${total}</span>
       <div className='empty-text'>
           ** Please provide the following card number to proceed payment **
           <br/>
           Number: 4242 4242 4242 4242
           <br/>
           CVC: Any 3 Numbers

       </div>
       <StripeButton price={total}/>
   </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);
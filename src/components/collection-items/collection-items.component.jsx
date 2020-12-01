import React from 'react';
import {connect} from 'react-redux';
import {addItems} from '../../redux/cart/cart-action';
import './collection-items.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItems=({items,addItems})=>{
    const {imageUrl,price,name}=items;
    return(
        <div className='collection-items'>
       <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
       <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
       </div>
       <CustomButton inverted onClick={()=>addItems(items)}>ADD TO CART</CustomButton>
    </div>
    )
   
}

const mapDispatchToProps=dispatch=>({
    addItems:items=>dispatch(addItems(items))
})
export default connect(null,mapDispatchToProps)(CollectionItems);
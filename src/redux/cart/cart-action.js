import CartActionType from './cart-actiontypes';

export const toggleCartHidden=()=>({
    type:CartActionType.TOGGLE_CART_HIDDEN
})

export const addItems=items=>({
    type:CartActionType.ADD_ITEMS,
    payload:items
})
export const removeItemFromCart=item=>({
    type:CartActionType.REMOVE_ITEM_FROM_CART,
    payload:item
})

export const increaseOrDecreaseQuantity=item=>({
    type:CartActionType.INCREASE_DECREASE_QUANTITY,
    payload:item
})

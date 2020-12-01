import CartActionType from './cart-actiontypes';
import {addItemToCart} from './cart.utlis';
import {addOrRemoveQuantity} from './cart.utlis';
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

 const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };

            case CartActionType.ADD_ITEMS:
                return{
                    ...state,
                    cartItems:addItemToCart(state.cartItems,action.payload)

                }
            case CartActionType.REMOVE_ITEM_FROM_CART:
                return{
                    ...state,
                    cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
                }    
            case CartActionType.INCREASE_DECREASE_QUANTITY:
                return{
                    ...state,
                    cartItems:addOrRemoveQuantity(state.cartItems,action.payload)
                }
            default:
                return state
    }
}
export default CartReducer;
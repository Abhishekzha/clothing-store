

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  export const addOrRemoveQuantity=(cartItems,removeCartItems)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===removeCartItems.id)
    if(existingCartItem.quantity===1){
      return cartItems.filter(cartItem=>
        cartItem.id !==removeCartItems.id)
        
    }
    return cartItems.map(cartItem=>
       cartItem.id===removeCartItems.id
       ? {...cartItem, quantity:cartItem.quantity-1}
       :cartItem
      )
  }
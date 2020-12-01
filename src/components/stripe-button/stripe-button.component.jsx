import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton=({price})=>{
     const PriceForStripe=price*100;
     const publishableKey='pk_test_51HsqKCCugMTJvN5TaSo2QCR2joyvOD7ofvdGzH8X6rrBkQqTowen7I1G7DIG7RGnMJy71FrwgC2Gt2DdIVSAqa2f00RFoqqjtB';
     const onToken=token=>{
         console.log(token)
         alert('Payment is done successfully ! ')
     }

    return(
       <StripeCheckout
       label='Pay Now'
       name='FlyCatcher Clothing'
       billingAddress
       shippingAddress
       image='https://sendeyo.com/up/d/f3eb2117da'
       description={`Your total is $${price}`}
       amount={PriceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
       
       />
    )
}
export default StripeButton;
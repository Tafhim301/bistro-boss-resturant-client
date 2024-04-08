import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";


const Checkout = () => {
    const stripe = useStripe();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const {user} = useAuth();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        totalPrice > 0 && axiosSecure.post('/create-payment-intent',{
            price:parseInt(totalPrice)
        })
        .then(res =>{
            console.log(res.data.clientSecet)
            setClientSecret(res.data.clientSecet)
        })

    }, [axiosSecure,totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        const {paymentIntent,error : confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anynomous',

                }
            }
        })
        if(confirmError){
            console.log('confirm Error',confirmError);

        }
        else{
            console.log('payment intent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)
                

            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !clientSecret} type="submit" className="btn bg-orange-400 my-6" >
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                <p className="text-green-500">Payment successful!<br></br> Your Transaction Id:{transactionId}</p>

            </form>

        </div>
    );
};

export default Checkout;
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect( () => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
          method:'post',
          // Stripe expects the total in a currencies subunits
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket])

  console.log('The Secret is  >>>', clientSecret)

  const handleSubmit = async (event) => {
    //do all the fancy stripe stuf....
    event.preventDefault();
    setProcessing(true);


    const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
      card: elements.getElement(CardElement)
    }
  }).then(({paymentIntent}) => {
    // PaymentIntent = payment Confirmation

    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

    setSucceeded(true);
    setError(null)
    setProcessing(false)

    dispatch({
      type: 'EMPTY_BASKET'
    })

    navigate('/orders')
  })

  };

  const handleChange = (event) => {
    /*Listen for changes in the CardElement and display any errors as the customer types their card details */
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment bg-white ">
      <div className="payment_container">
        <h1 className="h1 text-center p-3 font-normal bg-paymentH1 border-solid border-b border-gray-200">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment_section flex p-5 my-0 mx-5 border-solid border-b border-gray-200 ">
          <div className="payment_title basis-1/5 ">
            <h3 className="h3 font-bold">Delivery Address</h3>
          </div>
          <div className="payment_address basics-4/5">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment_section flex p-5 my-0 mx-5 border-solid border-b border-gray-200">
          <div className="payment_title">
            <h3 className="h3 font-bold">Review items and delivery</h3>
          </div>
          <div className="payment_items basic-4/5">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment_section flex p-5 my-0 mx-5 border-solid border-b border-gray-200">
          <div className="payment_title">
            <h3 className="h3 font-bold">Payment Method</h3>
          </div>
          <div className="payment_details basic-4/5 w-full">
            {/* Stripe magic will go */}

            <form className=" w-full" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceConatiner">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className="h3 font-bold">Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"£"}
                />
                <button className="buyNow bg-button rounded-sm h-8 border border-solid mt-3 border-bordercolor text-darkgray cursor-pointer w-fit px-4" disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

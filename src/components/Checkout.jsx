import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout flex p-5 max-h-full bg-white ">
      <div className="checkout-left m-7 p-5">
        <img
          className="checkout_image mb-3 w-full"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user ? user?.email : 'Guest '}</h3>
          <h2 className="checkout_tittle mr-3 p-3 border-b border-gray-300 ">
            Your shopping Basket
          </h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        


          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

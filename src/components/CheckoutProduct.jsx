import React from "react";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct flex mt-5 mb-5  ">
      <img
        className="checkoutProduct_image object-contain w-44 h-44"
        src={image}
      />

      <div className="checkoutProduct_info pl-5">
        <p className="checkoutProduct_title text-lg font-bold">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="removeFromBasket bg-button mt-3  border border-solid border-bordercolor cursor-pointer"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

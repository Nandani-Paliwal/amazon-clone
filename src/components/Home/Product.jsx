import React from "react";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="Product flex flex-col items-center justify-end m-2 p-5 w-full max-h-97 bg-white z-1 ">
      <div className="product_info h-24 mb-4">
        <p>
          {title}
        </p>
        <p className="product_price mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating flex ">
          {Array(rating).fill().map((_, index) => (
             <p key={index}>🌟</p>
          ))}

          
        </div>
      </div>

      <img
        className="img w-full max-h-52 object-contain mb-4"
        src={image}
        alt=""
      />

      <button onClick={addToBasket} className="addToBasketButton bg-button mt-2  border border-solid border-bordercolor">Add to Basket</button>
    </div>
  );
}

export default Product;

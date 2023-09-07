import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal flex flex-col justify-between w-80  h-32 p-5 m-2 bg-subtotal border border-solid border-subtotalborder rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of HW */}
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift flex items-center">
              <input type="checkbox" className="checkbox:mr-1" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />

      <button onClick={e => navigate('/payment')} className="proceedToCheckoutButton bg-button rounded-sm w-full h-8 border border-solid mt-3 border-bordercolor text-darkgray">Proceed to Pay</button>
    </div>
  );
}

export default Subtotal;

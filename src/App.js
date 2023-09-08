import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import PaymentPage from "./pages/PaymentPage";
import OrdersPage from "./pages/OrdersPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51Mc4pnSIpmnRw1zsU4j6wXbyC5QkXSRxGO0NWtqnu85v7y9Fl151yxISxW0lOMyNa2X1DvcXdZ3EYrNz4UDChl8K00qrYNkY56"
);

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //useEffect is like a dynamic if statement
    //will only run once when the app component loads..

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in OR the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/amazon-clone" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <PaymentPage />
              </Elements>
            }
          />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

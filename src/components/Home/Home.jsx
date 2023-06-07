import React from "react";
import "./style.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home flex justify-center ml-auto mr-auto max-w-screen-2xl">
      <div className="home_container ">
        <img
          className="home_banner -mb-10 z--1"
          src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
          alt=" "
        />

        <div className="home-content">
          <div className="home_row flex z-1 mr-1.5 ml-1.5">
            <Product
              id="9081234"
              title="The lean startup: How Constant Innovation Creates Radically Successful Businesses"
              price={29.99}
              image="https://m.media-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
              rating={5}
            />
            <Product
              id="3450913"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/51zGTRTMQhL._SX679_.jpg"
            />
          </div>

          <div className="home_row flex z-1 mr-1.5 ml-1.5">
            <Product
              id="8772310"
              title="Fitbit Sense 2 Health & Fitness Watch (Blue Mist / Soft Gold Aluminium) with 6-Month Premium Membership"
              price={30.76}
              rating={4}
              image="https://m.media-amazon.com/images/I/61o--H+O5+L._SX679_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg "
            />
            <Product
              id="3254354"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX679_.jpg"
            />
          </div>

          <div className="home_row flex z-1 mr-1.5 ml-1.5">
            <Product
              id="9087458"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
              price={199.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/71it2biogSS._SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

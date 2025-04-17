import React, { Component, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  200: { items: 1 },
  300: { items: 1 },
  350: { items: 1 },
  548: { items: 2 },
  720: { items: 3 },
  1024: { items: 3 },
};

export default function GroceryCategory(props: any) {
  const context = useContext(DataContext);
  const [category, SetCategory] = useState([
    {
      id: 1,
      src: require("../../../assets/img/category/cat4.png"),
      name: "Fruits & Vegitable",
    },
    {
      id: 2,
      src: require("../../../assets/img/category/cat2.png"),
      name: "Grocery & Stable",
    },
    {
      id: 3,
      src: require("../../../assets/img/category/cat3.png"),
      name: "Bekary & Biscuits",
    },
    {
      id: 4,
      src: require("../../../assets/img/category/cat1.png"),
      name: "Juices & Snacks",
    },
    {
      id: 5,
      src: require("../../../assets/img/category/cat5.png"),
      name: "Tea,Coffee & Helath drinks",
    },

    {
      id: 6,
      src: require("../../../assets/img/category/cat7.png"),
      name: "Dairy & Breakfast",
    },
    {
      id: 7,
      src: require("../../../assets/img/category/cat6.png"),
      name: "Household Items",
    },

    {
      id: 8,
      src: require("../../../assets/img/category/cat8.png"),
      name: "Masala Products",
    },

    {
      id: 9,
      src: require("../../../assets/img/category/cat9.png"),
      name: "Personal Cares",
    },
    {
      id: 10,
      src: require("../../../assets/img/category/cat10.png"),
      name: "Icecream & Chocolates",
    },
  ]);
  const [offer_banner, SetOfferBanner] = useState([
    {
      img: require("../../../assets/img/banner/grocery.png"),
    },
    { img: require("../../../assets/img/banner/grocery1.png") },
    { img: require("../../../assets/img/banner/grocery4.png") },
    { img: require("../../../assets/img/banner/grocery2.png") },
    { img: require("../../../assets/img/banner/grocery3.png") },
    { img: require("../../../assets/img/banner/grocery5.png") },

  ]);
  const [is_loading, SetIsLoading] = useState(true);


  useEffect(() => {
    console.log("GroceryCategory On mount :", props);
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      return { ...prevValue };
    });
    setTimeout(() => {
      SetIsLoading(false);
      console.log("timeout called!")
    }, 5000);
  }, []);

  return (
    <div className="page-main mb-5 px-sm-0 px-md-2">
      {/* <div className="bg-fff p-1">
        <img src={require("../../../assets/img/fill.jpg")} className="allcategory" />
      </div> */}
      <div className="bg-fff">
        {/* <h4 className="p-2">Free deliveries on all orders</h4> */}

        <AliceCarousel
          mouseTracking
          touchMoveDefaultEvents={false}
          // items={productsRestraunt}
          // paddingLeft={50}
          paddingRight={50}
          disableDotsControls
          responsive={responsive}
          disableButtonsControls
          controlsStrategy="alternate"
        >
          {offer_banner.map((banner, index) => (
            <div
              onDragStart={handleDragStart}
              className="p-2 mt-2"
              key={index}
            >
              {is_loading ? (
                <Skeleton height={100} width="100%" />
              ) : (
                <img src={banner.img} className="freeBanner cursor" />
              )}
            </div>
          ))}

        </AliceCarousel>
      </div>
      <div className="mt-2 bg-fff">
        {is_loading ? (
          <div className="p-2 pb-0">
            <Skeleton height={10} width={100} />
            <Skeleton height={8} width={150} />
          </div>
        ) : (
          <div>
            <h5 className="p-2 pb-0 mb-0">Shop by category</h5>
            <p className="pl-1 pt-2">Your favourite items for you</p>
          </div>
        )}

        <div className="row pt-2">
          {category.map((cat, index) => (
            <div
              className="col-4 col-md-3 col-lg-2 pt-3 p-1 cursor"
              key={index}
            >
              {is_loading ? (
                <div className="row center">
                  <div className="round-div col-12 col-md-4 p-0">
                    <Skeleton height={80} width={80} circle={true} />
                  </div>
                  <p className="text-center pt-2">
                    <Skeleton height={8} width={60} style={{marginBottom: 3}} />
                    <Skeleton height={8} width={50} />
                  </p>
                </div>
              ) : (
                <Link to="/grocery/grocery_main_category">
                  <div className="row center">
                    <div className="round-div col-12 col-md-4 p-0">
                      <img src={cat.src} className="round-brand" />
                    </div>
                    <div className="text-center pt-2">
                      <p className=""><b className="text-darkgray space">{cat.name}</b></p>
                    </div>

                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
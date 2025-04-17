import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function WishList(props: any) {
    const context = useContext(DataContext);
    const[product_show, SetProductShow] = useState([
        {
          id: 1,
          img_path: require("../../../assets/img/mob.jpg"),
          name: "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands",
          offer_price: "200",
          original_price: "250",
          discount_price: "50",
          qty: "1kg",
          addcount: 0,
          addbtn: false,
          fav_heart: false,
        },
        {
          id: 2,
          img_path: require("../../../assets/img/fashion.jpg"),
          name: "Fresh Berries Premium Brands",
          offer_price: "200",
          original_price: "250",
          discount_price: "50",
          qty: "1kg",
          addcount: 0,
          addbtn: false,
          fav_heart: false,
        },
        {
          id: 3,
          img_path: require("../../../assets/img/sub1.jpg"),
          name: "Fresh Berries Premium Brands",
          offer_price: "200",
          original_price: "250",
          discount_price: "50",
          qty: "1kg",
          addcount: 0,
          addbtn: false,
          fav_heart: false,
        },
        {
          id: 1,
          img_path: require("../../../assets/img/laptop.jpeg"),
          name: "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands",
          offer_price: "200",
          original_price: "250",
          discount_price: "50",
          qty: "1kg",
          addcount: 0,
          addbtn: false,
          fav_heart: false,
        },
        {
          id: 2,
          img_path: require("../../../assets/img/sub1.jpg"),
          name: "Fresh Berries Premium Brands",
          offer_price: "200",
          original_price: "250",
          discount_price: "50",
          qty: "1kg",
          addcount: 0,
          addbtn: false,
          fav_heart: false,
        },
        {
          id: 3,
          img_path: require("../../../assets/img/sub1.jpg"),
          name: "Fresh Berries Premium Brands",
          offer_price: "200",
          original_price: "250",
          discount_price: "50",
          qty: "1kg",
          addcount: 0,
          addbtn: false,
          fav_heart: false,
        },
      ]);


    useEffect(() => {
        console.log("WishList On mount :", props);
        console.log("WishList context :", context);
    }, []);


    return (
        <div className="mt-1">
        <h5 className="p-3">Your Wishlist</h5>
        <div className="p-3">
            {product_show.map((product_data, index) => (
              <Link to="/ecommerce/ecommerce_mobile_product_details" key={index}>
                <div className="card p-2 border-bottom">
                  <div className="row">
                    <div className="col-3 col-md-2">
                      <img
                        src={product_data.img_path}
                        className="card-img-list"
                      />
                    </div>
                    <div className="col-8 col-md-8">
                      <div className="p-1">
                        <p className="marg">{product_data.name}</p>
                        <div className="flex">
                          <h6>₹{product_data.offer_price}</h6>
                          <p className="pl-1">
                            <s>₹{product_data.original_price}</s>
                          </p>
                        </div>
                        <p className="save">
                          You have saves ₹{product_data.discount_price}
                        </p>
                      </div>
                    </div>
                    <div className="col-1 col-md-1 text-right">
                      <MaterialIcons
                        name="delete-outline"
                        size={20}
                        color="#333"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
}
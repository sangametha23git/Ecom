import React, { Component, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const category_data = [
    {
        src: require("../../../assets/img/category/biriyani.png"),
        name: "Indian",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/category/burger.png"),
        name: "Burger",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/category/pizza.png"),
        name: "Pizza",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/barbecue.png"),
        name: "Barbecue",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/sandwich.png"),
        name: "Sandwich",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/soup.png"),
        name: "Soups",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/category/desert.png"),
        name: "Cakes",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/snack.png"),
        name: "Snacks",
        content: "Shop Products in your mobile",
    },
    {
        src: require("../../../assets/img/chicken.png"),
        name: "Chicken",
        content: "Shop Products in your mobile",
    },
];

const childcategory_data = [
    {
        id: 2,
        src: require("../../../assets/img/berries.png"),
        name: "Fruits1",
        content: "Shop Products in your mobile",
    },
    {
        id: 3,
        src: require("../../../assets/img/sub1.jpg"),
        name: "Fruits2",
        content: "Shop Products in your mobile",
    },
    {
        id: 4,
        src: require("../../../assets/img/sub3.png"),
        name: "Fruits3",
        content: "Shop Products in your mobile",
    },
    {
        id: 5,
        src: require("../../../assets/img/sub4.png"),
        name: "Fruits4",
        content: "Shop Products in your mobile",
    },
    {
        id: 6,
        src: require("../../../assets/img/sub5.png"),
        name: "Fruits5",
        content: "Shop Products in your mobile",
    },
    {
        id: 7,
        src: require("../../../assets/img/sub6.jpg"),
        name: "Fruits6",
        content: "Shop Products in your mobile",
    },
];


export default function RestaurantCategory(props: any) {
    const context = useContext(DataContext);
    const [is_loading, SetIsLoading] = useState(true);

    useEffect(() => {
        console.log("Restaurant Category On mount :", props);
        console.log("Restaurant Category On context :", context);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);


    return (
        <div className="mb-4">
            {/* <div className="flex m-3 mb-0">
          <p>{categoryType}</p>
          {categoryType != "" ? <p>-{subcategoryType}</p> : ""}
          {subcategoryType != "" ? <p>-{childeCategoryType}</p> : ""}
        </div> */}
            <div className="p-3">
                {is_loading ? (
                    <Skeleton height={10} width={100} />
                ) : (
                    <h6>All Categories</h6>
                )}

            </div>
            <div className="row mt-2">
                {category_data.map((data, index) => (
                    <div key={index} className="col-4 col-md-2 text-center">
                        {is_loading ? (
                            <div className="p-2 text-center">
                                <Skeleton height={80} width={80} circle={true} />
                                <div className="mt-2">
                                    <Skeleton height={8} width={50} />
                                </div>
                            </div>
                        ) : (
                            <Link to="/restaurant/restaurant_subcategory">
                                <div className="p-2 text-center">
                                    <img src={data.src} className="ecomcate" />
                                    <div className="">
                                        <p className="text-black mt-2 fw-bolder">{data.name}</p>
                                    </div>
                                    {/* <div className="col-2 text-right">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={20}
                  color={data.name == categoryType ? "#0058b0" : "gray"}
                />
              </div> */}
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
    Octicons,
    Ionicons,
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer, Modal } from "@material-ui/core";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const handleDragStart = (e) => e.preventDefault();


export default function EcommerceCategory(props: any) {
    const context = useContext(DataContext);
    const [category_data, SetCategoryData] = useState([
        {
            id: 2,
            src: require("../../../assets/img/category/appliance.png"),
            name: "Appliances",
            content: "Shop Products in your mobile",

        },
        {
            id: 3,
            src: require("../../../assets/img/category/kitchen.png"),
            name: "Kitchen",
            content: "Shop Products in your mobile",

        },
        {
            id: 4,
            src: require("../../../assets/img/category/electronic.png"),
            name: "Electronic",
            content: "Shop Products in your mobile",

        },
        {
            id: 5,
            src: require("../../../assets/img/category/furniture.png"),
            name: "Furniture",
            content: "Shop Products in your mobile",

        },
        {
            id: 6,
            src: require("../../../assets/img/mob.png"),
            name: "Mobiles",
            content: "Shop Products in your mobile"
        },
        {
            id: 7,
            src: require("../../../assets/img/category/baby.png"),
            name: "Babycare",
            content: "Shop Products in your mobile",

        },
        {
            id: 8,
            src: require("../../../assets/img/category/beauty.png"),
            name: "Beauty",
            content: "Shop Products in your mobile",

        },
        {
            id: 9,
            src: require("../../../assets/img/category/fashion.png"),
            name: "Fashion",
            content: "Shop Products in your mobile",

        },
    ]);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [category_type, SetCategoryType] = useState("");
    const [sub_category_type, SetSubCategoryType] = useState("");
    const [child_category_type, SetChildCategoryType] = useState("");
    const [width, SetWidth] = React.useState(innerWidth);
    const [is_loading, SetIsLoading] = useState(true);

    useEffect(() => {
        console.log("EcommerceCategory On mount :", props);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);


    function toggleDrawer(anchor, open, event) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }

    return (
        <div className="mb-3">

            <div className="p-3 ">
                {is_loading ? (
                    <Skeleton height={12} width={100} />
                ) : (
                    <h5>All Categories</h5>
                )}

            </div>
            <div className="row py-2">
                {category_data.map((data, index) => (
                    <div key={index} className="col-4 col-md-2 p-2">
                        {is_loading ? (
                            <div className="text-center ">
                                <Skeleton height={80} width="100%" />
                                <div className="mt-2">
                                    <Skeleton height={8} width={60} />
                                </div>
                            </div>
                        ) : (
                            <div className="w-100">
                                <Link to="/ecommerce/ecommerce_main_category" className=" text-center cursor">

                                    <div className="main-category-css w-100 p-1">
                                        <img src={data.src} className="ecomcate" />
                                    </div>
                                    <p className="mt-2 ">{data.name}</p>

                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
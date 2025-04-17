import React, { Component, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
    Feather,
    FontAwesome,
    Entypo,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    AntDesign,
} from "@expo/vector-icons";
import { AccordionDetails, Drawer, Dialog, makeStyles } from "@material-ui/core";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
};

const handleDragStart = (e) => e.preventDefault();
const discountresponsive = {
    0: { items: 1 },
    300: { items: 1 },
    350: { items: 1 },
    548: { items: 1 },
    720: { items: 2 },
    912: { items: 2 },
    1024: { items: 4 },
};

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-end" // push the dialog to bottom
        }
    },
    paper: {
        // make the content full width
        [theme.breakpoints.down("xs")]: {
            margin: 0,
            maxWidth: "100%",
            width: "100%",
            overflow: "scroll",
        },
        overflow: "scroll",

    }
}));

const foodresponsive = {
    0: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    548: { items: 4 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 6 },
};

export default function RestaurantSearch(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [main, SetMain] = useState([
        {
            img: require("../../../assets/img/dhosa.jpg"),
            name: "A2B Veg",
            type: "Restaurant",
        },
        {
            img: require("../../../assets/img/food8.jpg"),
            name: "Dindigul Thalappakadi Biriyani",
            type: "Dish",
        },
        {
            img: require("../../../assets/img/north.jpeg"),
            name: "Erode Punjabi",
            type: "Restaurant",
        },
        {
            img: require("../../../assets/img/food4.jpg"),
            name: "Rowthar Biriyani Center",
            type: "Restaurant",
        },
        {
            img: require("../../../assets/img/food7.jpeg"),
            name: "Pizza",
            type: "Dish",
        },
        {
            img: require("../../../assets/img/c65.jpg"),
            name: "Chicken fry",
            type: "Dish",
        },
        {
            img: require("../../../assets/img/images.jpeg"),
            name: "Saravana Bhavan",
            type: "Restruant",
        },
    ]);
    const [shop, SetShop] = useState({
        menu: [
            {
                foodList: [
                    {
                        img_path: require("../../../assets/img/dhosa.jpg"),
                        name: "Dosa",
                        description:
                            "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 30,
                        addcount: 0,
                        addbtn: false,
                        variants: false,
                        snackopen: false,
                        addbtn: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food4.jpg"),
                        name: "Biryani",
                        description:
                            "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.",
                        type: "Nonveg",
                        price: 350,
                        addcount: 0,
                        addbtn: false,
                        variants: false,
                        addons: "",
                        addbtn: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food5.jpg"),
                        name: "Chicken Gravy",
                        description:
                            "Chicken chettinad gravy recipe - One of the most popular dishes from the chettinad cuisine.",
                        type: "Nonveg",
                        price: 150,
                        addcount: 0,
                        addbtn: false,
                        variants: false,
                        addbtn: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food6.jpg"),
                        name: "Samosa (2 Pieces)",
                        description:
                            "A samosa is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions.",
                        type: "Veg",
                        price: 40,
                        addcount: 0,
                        addbtn: false,
                        variants: false,
                        addbtn: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/category/pizza.png"),
                        name: "Pizza",
                        description:
                            "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients.",
                        type: "Veg",
                        price: 140,
                        addcount: 0,
                        addbtn: false,
                        variants: true,

                        addbtn: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/images.jpeg"),
                        name: "Masala Dosa",
                        description:
                            " Masala dosa is a variation of the popular South Indian Food, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 50,
                        addcount: 0,
                        addbtn: false,
                        variants: false,
                        addbtn: false,
                        addCount: 0,
                    },
                ],
            },
        ],
    });
    const [variants_size, SetVariantsSize] = useState([
        {
            item: "Small",
            price: 250,
        },
        {
            item: "Medium",
            price: 300,
        },
    ]);
    const [addons, SetAddons] = useState([
        {
            title: "toppings",
            child: [
                {
                    name: "Cheese",
                    price: 20,
                    addbtn: false,
                    addcount: 0,
                },
                {
                    name: "Onion",
                    price: 25,
                    addbtn: false,
                    addcount: 0,
                },

                {
                    name: "Mushroom",
                    price: 105,
                    addbtn: false,
                    addcount: 0,
                },
            ],
        },
        {
            title: "Addons",
            child: [
                {
                    name: "Pepsi",
                    price: 30,
                    addbtn: false,
                    addcount: 0,
                },
                {
                    name: "Cheese Garlic Bread",
                    price: 125,
                    addbtn: false,
                    addcount: 0,
                },

                {
                    name: "Mushroom",
                    price: 105,
                    addbtn: false,
                    addcount: 0,
                },
            ],
        },
    ]);
    const [size, SetSize] = useState(false);
    const [view_cart, SetCart] = useState(true);
    const [width, SetWidth] = React.useState(innerWidth);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [quick_view, SetQuickView] = useState({
        open: false,
        value: false
    });
    const [filter, SetFilter] = useState({
        open: false,
        value: ""
    });
    const [filter_option, SetFilterOption] = useState({
        open: true,
        value: ""
    });
    const [is_loading, SetIsLoading] = useState(true);
    const [restaurant, SetRestaurant] = useState([
        {
            type: 0,
            id: 1,
            img: require("../../../assets/img/dhosa.jpg"),
            offer: 25,
            name: "A2B Veg",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
        {
            type: 1,
            id: 2,
            img: require("../../../assets/img/food8.jpg"),
            offer: null,
            name: "Dindigul Thalappakadi Biriyani",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 3.9,
            deliveryTime: "41 mins",
            delivery: "",
        },
        {
            type: 0,
            id: 3,
            img: require("../../../assets/img/north.jpeg"),
            offer: null,
            name: "Erode Punjabi",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 3.9,
            deliveryTime: "51 mins",
            delivery: "",
        },
        {
            type: 1,
            id: 4,
            img: require("../../../assets/img/food4.jpg"),
            offer: null,
            name: "Rowthar Biriyani Center",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 3.8,
            deliveryTime: "32 mins",
            delivery: "Free Delivery",
        },
        {
            type: 0,
            id: 5,
            img: require("../../../assets/img/food7.jpeg"),
            offer: 13,
            name: "Pizza Hut",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            type: 1,
            id: 6,
            img: require("../../../assets/img/c65.jpg"),
            offer: 16,
            name: "Kokarako Chicken Center",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 3.6,
            deliveryTime: "28 mins",
            delivery: "Free Delivery",
        },
        {
            type: 0,
            id: 7,
            img: require("../../../assets/img/images.jpeg"),
            offer: 5,
            name: "Saravana Bhavan",
            cuisine: "South Indian, North Indian, Chinnese & more",
            rate: 4.2,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
    ]);

    useEffect(() => {
        console.log("RestaurantCategory On mount :", props);
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
        <div className="page-main mb-5 container px-sm-0 px-md-2 bg-fff">
            <div className=" mb-5 p-2">
                {/* <div className="res-search">
                    <input
                        type="text"
                        className="res-search-input"
                        placeholder="Search for foods"
                    />
                    <div className="ms-auto">
                        <img
                            src={require("../../../assets/icon/search.png")}
                            className=""
                        />
                    </div>
                </div> */}

                <div className="row py-3 px-0 bg-fff sticky-sm-60px sticky-md-110px">
                    <div className="input-icons form-group pe-0 search-div w-100">
                        <div className="cursor pe-1 pt-1">
                            <Ionicons name="md-search" size={21} color="#00ac0b" />
                        </div>
                        <input
                            type="text"
                            className="form-control search-bar p-0"
                            placeholder="Search here"
                        />

                        <div className="search-div-filter cursor" onClick={() => {
                            SetFilter({
                                open: true, value: ""
                            })
                        }}>
                            <div className="pe-1">
                                <Ionicons name="options-outline" size={20} color="#fff" />
                            </div>
                            Filter
                        </div>
                    </div>

                </div>

                <div className="mt-3">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6>Recently Searched</h6>
                    )}

                    {is_loading ? (
                        <div className="d-flex">
                            <Skeleton height={20} width={100} style={{ borderRadius: 20, marginRight: 10 }} />
                            <Skeleton height={20} width={50} style={{ borderRadius: 20, marginRight: 10 }} />
                        </div>
                    ) : (
                        <div className="over-scroll">
                            <label className="resta-radio-button cursor pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Annapoorna</span>
                            </label>
                            <label className="resta-radio-button cursor pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Kfc</span>
                            </label>
                            <label className="resta-radio-button cursor pb-2 " >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Cheeze pizza</span>
                            </label>
                            <label className="resta-radio-button cursor  pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>chicken</span>
                            </label>
                            <label className="resta-radio-button cursor  pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Cakes</span>
                            </label>
                        </div>
                    )}
                </div>


                <div className="mt-3">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6>Trending near you</h6>
                    )}


                    <div className="restaurant-list search-alice row px-0">
                        <AliceCarousel
                            mouseTracking
                            touchMoveDefaultEvents={false}
                            // items={productsRestraunt}
                            // paddingLeft={50}
                            paddingRight={20}
                            disableDotsControls
                            responsive={foodresponsive}
                            disableButtonsControls
                            controlsStrategy="alternate"
                        >
                            {restaurant.map((data, index) => (
                                <div
                                    className="restaurant-list__item mt-2"
                                    key={index}
                                    onDragStart={handleDragStart}
                                >
                                    <div className="restaurant-list__item_card cursor">
                                        {is_loading ? (
                                            <Skeleton height={160} width="100%" />
                                        ) : (
                                            <Link to="/restaurant/restaurant_shop">
                                                <div className="container">
                                                    <img className="restaurant-image" src={data.img} />
                                                    {data.offer != null ? (
                                                        <div className="top-right">
                                                            <p>
                                                                <MaterialCommunityIcons
                                                                    name="brightness-percent"
                                                                    size={15}
                                                                    color="#00ac0b"
                                                                />
                                                                <b className="pl-02">{data.offer}% OFF</b>
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="img_over_content_foods">
                                                    <div>
                                                        <div className="restaurant-name"><b>{data.name}</b></div>
                                                        <div className="restaurant-info flex align-center">
                                                            <MaterialIcons name="star" size={12} color="white" />
                                                            <p className="pl-02">{data.rate}</p>
                                                            <div className="pl-02 pb-1">
                                                                <Entypo name="dot-single" size={9} color="white" />
                                                            </div>
                                                            <p className="pl-02">{data.deliveryTime}</p>
                                                            {data.delivery != "" ? (
                                                                <div className="ms-auto">
                                                                    <img src={require("../../../assets/icon/free-shipping.png")} className="free-shipping-icon" />
                                                                    {/* <small className="text-white">Free</small> */}
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                        {/* {data.delivery != "" ? (
                                                        <div className="mt-1 border-top pt-1 flex align-center">
                                                            <img
                                src={require("../../../assets/icon/foodDelivery.png")}
                                className="del-icon"
                              />
                                                            <p className="text-green fw-bold">{data.delivery}</p>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )} */}
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </AliceCarousel>
                    </div>
                </div>




                <div className="mt-3">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6 className="mb-1 pt-2">Search Results</h6>
                    )}

                    <div className="row">
                        {main.map((data, index) => (
                            <div className="col-12 col-md-6 col-lg-4 px-2" key={index}>
                                {is_loading ? (
                                    <div className="row pt-3 cursor">
                                        <div className="col-3 px-0">
                                            <Skeleton height={50} width="100%" />
                                        </div>
                                        <div className="col-9 pr-0 pt-1">
                                            <Skeleton height={10} width={100} />
                                            <Skeleton height={8} width={50} />
                                        </div>
                                    </div>
                                ) : (
                                    <Link to="/restaruant/restaurant_shop">
                                        <div className="row pt-3 cursor">
                                            <div className="col-3 px-0">
                                                <img src={data.img} className="search-resta-img" />
                                            </div>
                                            <div className="col-9 pr-0 pt-1">
                                                <h6 className="oneline">{data.name}</h6>
                                                <p className="oneline">{data.type}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-3">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6 className="mb-1 pt-2">Search Results</h6>
                    )}
                    {shop.menu.map((menu, menuIndex) => (
                        <div className="row " key={menuIndex}>
                            {menu.foodList.map((data, index) => (
                                <div className="col-md-6 px-2" key={index}>
                                    <div className="row align-center border-bottom pb-3 pt-3 w-100">
                                        <div className="col-8 p-0  cursor" onClick={() => {
                                            SetQuickView({ open: true, value: data });
                                        }}>
                                            {is_loading ? (
                                                <div className="pe-1">
                                                    <div className="d-flex align-items-center w-100">
                                                        <Skeleton height={14} width={14} />

                                                        <div className="ms-auto">
                                                            <Skeleton width={30} height={8} />
                                                        </div>
                                                    </div>

                                                    <Skeleton width="80%" />
                                                    <Skeleton count={2} />
                                                    <Skeleton height={10} width={40} />
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="d-flex align-items-center w-100">
                                                        {data.type == "Veg" ? (
                                                            <img
                                                                src={require("../../../assets/icon/veg.png")}
                                                                className="type-img"
                                                            />
                                                        ) : (
                                                            <img
                                                                src={require("../../../assets/icon/nonveg.png")}
                                                                className="type-img"
                                                            />
                                                        )}
                                                        <div className="d-flex align-items-center ms-auto">
                                                            <FontAwesome name="star" size={13} color="#00ac0b" />
                                                            <p className="px-1">
                                                                <b className="text-green">Best Seller</b>
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <h6 className="pt-1 oneline">{data.name}</h6>
                                                    <p className="marg">{data.description}</p>
                                                    <p className="pt-1 ">
                                                        <b className="text-dark">₹{data.price}</b>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-4 p-0">
                                            {is_loading ? (
                                                <Skeleton height={100} width="100%" />
                                            ) : (
                                                <div>
                                                    {data.img_path != "" ? (
                                                        <img src={data.img_path} className="near-img" />
                                                    ) : null}

                                                    {data.addbtn ? (
                                                        <div
                                                            className={data.img_path !== "" ? "bottom-offer" : ""}
                                                        >
                                                            <div className="flex offer center p-2">
                                                                <div
                                                                    className="cursor pr-1 w-25 center"
                                                                // onClick={() => {
                                                                //     minus(menuIndex, index);
                                                                // }}
                                                                >
                                                                    <Entypo name="minus" size={18} color="#00ac0b" />
                                                                </div>
                                                                <div className="w-50 center">
                                                                    {/* <div
                              data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="1500"
                            > */}
                                                                    <p className="smooth">
                                                                        <b>{data.addcount}</b>
                                                                    </p>
                                                                    {/* </div> */}
                                                                </div>
                                                                <div
                                                                    className="cursor pl-1 w-25"
                                                                // onClick={() => {
                                                                //     add(menuIndex, index);
                                                                // }}
                                                                >
                                                                    <Entypo name="plus" size={18} color="#00ac0b" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {data.variants ? (
                                                                <div
                                                                    className={
                                                                        data.img_path !== "" ? "bottom-offer" : ""
                                                                    }
                                                                    onClick={(event) => {
                                                                        if (width < 720) {
                                                                            toggleDrawer("bottom", true, event);
                                                                        } else {
                                                                            toggleDrawer("right", true, event);
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className="offer">
                                                                        <p className="cursor p-2">
                                                                            <b>Add</b>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    className={
                                                                        data.img_path !== "" ? "bottom-offer" : ""
                                                                    }
                                                                // onClick={() => {
                                                                //     addcart(menuIndex, index);
                                                                // }}
                                                                >
                                                                    <div className="offer">
                                                                        <p className="cursor p-2">
                                                                            <b>Add</b>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {/* {view_cart ? (
                <div className="w-100 bg-darkgreen md-none p-2 py-3">
                    <div className="row">
                        <div className="col-6">
                            <h6 className="text-white mb-1">
                                <b>₹150</b>
                            </h6>
                            <p className="text-white">Total Price Amount</p>
                        </div>
                        <div className="col-6 align-center justify-end flex cursor">
                            <Link
                                to="/cart"
                                onClick={() => {
                                    console.log("Cart Click");
                                }}
                            >
                                <div className="flex ">
                                    <Feather name="shopping-cart" size={16} color="white" />
                                    <p className="pl-1">
                                        <b className="text-white">View Cart</b>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )} */}


            <div>
                {["right", "bottom"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button onClick={toggleDrawer(anchor, true)}>
          {anchor}
        </Button> */}
                        <Drawer
                            className="shop"
                            anchor={anchor}
                            open={state[anchor]}
                            // onClose={toggleDrawer(anchor, false)}
                            // onOpen={toggleDrawer(anchor, true)}
                            onClose={(event) => {
                                toggleDrawer(anchor, false, event);
                            }}
                            onOpen={(event) => {
                                toggleDrawer(anchor, true, event);
                            }}
                        >
                            <div
                                // className={
                                //     (styles.list,
                                //     {
                                //         [styles.fullList]: anchor === "top" || anchor === "bottom",
                                //     })
                                // }
                                role="presentation"
                            // onClose={toggleDrawer(anchor, false)}
                            // onOpen={toggleDrawer(anchor, true)}

                            >
                                <div className="p-0 mb-4">
                                    <div className="p-2 ">
                                        <div className="row">
                                            <div className="col-11 p-0">
                                                <h5>Pizza</h5>
                                                <p className="marg mt-1">
                                                    pizza, dish of Italian origin consisting of a flattened disk of
                                                    bread dough topped with some combination of olive oil, oregano,
                                                    tomato, olives, mozzarella or other cheese, and many other
                                                    ingredients.
                                                </p>
                                            </div>
                                            <div
                                                className="col-1 pr-0 text-right cursor"
                                                onClick={(event) => {
                                                    toggleDrawer(anchor, false, event);
                                                }}
                                            >
                                                <Ionicons name="close" size={20} color="gray" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 mb-2 border-bottom">
                                        <h6>
                                            <b>Size</b>
                                        </h6>
                                        <p>
                                            <small>Please Select One Option</small>
                                        </p>
                                        {variants_size.map((size, sizeIndex) => (
                                            <div className="mt-3" key={sizeIndex}>
                                                <label
                                                    className="row pb-2 p-0 cursor"
                                                    onClick={() => {
                                                        SetSize(true);
                                                    }}
                                                >
                                                    <div className="col-8">
                                                        <p>
                                                            <b>{size.item}</b>
                                                        </p>
                                                    </div>
                                                    <div className="col-4 text-right flex align-center justify-end pr-0">
                                                        <p className="text-dark">₹{size.price}</p>
                                                        <input type="radio" name="size" className="ml-2" />
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    {size == true ? (
                                        <div className="mb-5">
                                            {addons.map((data, index) => (
                                                <div className="py-3 border-bottom" key={index}>
                                                    <h6>
                                                        <b>{data.title}</b>
                                                    </h6>
                                                    <p>
                                                        <small>Choose Maximum 2 options</small>
                                                    </p>
                                                    {data.child.map((childData, childIndex) => (
                                                        <div className="mt-2" key={childIndex}>
                                                            <div className="row p-0">
                                                                <div className="col-8">
                                                                    <p className="">
                                                                        {childData.name}
                                                                        <small className="text-dark pl-1">
                                                                            ₹{childData.price}
                                                                        </small>
                                                                    </p>
                                                                </div>
                                                                <div className="col-4 text-right pr-0">
                                                                    {childData.addbtn ? (
                                                                        <div className="flex offer p-1 center ">
                                                                            <div
                                                                                className="cursor pr-1 w-25 center"
                                                                            // onClick={() => {
                                                                            //     addonminus(index, childIndex);
                                                                            // }}
                                                                            >
                                                                                <AntDesign
                                                                                    name="minus"
                                                                                    size={18}
                                                                                    color="#00ac0b"
                                                                                />
                                                                            </div>
                                                                            <div className="w-50 center">
                                                                                <p className="w-100">
                                                                                    <b>{childData.addcount}</b>
                                                                                </p>
                                                                            </div>
                                                                            <div
                                                                                className="cursor pl-1 center w-25"
                                                                            // onClick={() => {
                                                                            //     addonadd(index, childIndex);
                                                                            // }}
                                                                            >
                                                                                <AntDesign
                                                                                    name="plus"
                                                                                    size={14}
                                                                                    color="#00ac0b"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <div
                                                                                // type="button"
                                                                                className="offer p-2 text-center cursor"
                                                                            // onClick={() => {
                                                                            //     addoncart(index, childIndex);
                                                                            // }}
                                                                            >
                                                                                <p className="text-green">Add</p>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        ""
                                    )}

                                    <div className="bottom-fixed w-50 p-0">
                                        <div className="row center p-0">
                                            <div className="col-6 p-2 pl-3">
                                                <h6>₹300</h6>
                                                <p>
                                                    <small>Total Product Price</small>
                                                </p>
                                            </div>
                                            <div className="col-6 bg-green p-3 text-center">
                                                <div className="cursor">
                                                    <Link to="/restaurant/restaurant_shop">
                                                        <p>
                                                            <b className="text-white">Add Item</b>
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

            <Dialog open={quick_view.open} onClose={() => { SetQuickView({ open: false, value: "" }); }} classes={{ container: classes.root, paper: classes.paper }}>
                <div className="bg-fff px-2 py-3 radius-top">
                    <div className="center">
                        <hr className="hr-drawer" />
                    </div>
                    <div className="p-2">

                        <h6>{quick_view.value.name}</h6>
                        <div className="row align-items-center">
                            <div className="col-4">
                                {/* <img src={"https://cdn.1superapp.com/images/320/" + quick_view.value.images[0].url} className="near-img" /> */}
                            </div>
                            <div className="col-8">
                                <p>{quick_view.value.description}</p>
                                <p className="pt-1">
                                    <b className="text-dark">₹{quick_view.value.min_price} - ₹{quick_view.value.max_price}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>

            <div className="sort_filter">
                <Dialog
                    open={filter.open}
                    onClose={() => {
                        SetFilter({ open: false, value: "" })
                    }}
                    classes={{ container: classes.root, paper: classes.paper }}
                >
                    <div>
                        {/* <div className="center p-2">
                            <hr className="hr-drawer" />
                        </div> */}
                        <div className="shadow-head card p-3">
                            <div className="row align-center">
                                <div className="col-11 p-0">
                                    <h6 className="mb-0">Filters</h6>
                                </div>
                                <div className="col-1 text-end p-0 cursor"
                                    onClick={(event) => {
                                        SetFilter({ open: false, value: "" })
                                    }}
                                >
                                    <Ionicons name="close" size={20} color="gray" />
                                </div>
                            </div>
                        </div>


                        <div className=" px-3 mb-5">
                            <div className="row align-items-center py-2 border-bottom" onClick={() => {
                                SetFilterOption({ open: !filter_option.open, value: "" })
                            }}>
                                <div className="col-6 p-0">
                                    <p className="mb-0 fs-7 text-darkgray">Cost</p>
                                </div>
                                <div className="col-6 p-0 text-end cursor">
                                    {filter_option.open ? (
                                        <MaterialIcons name="keyboard-arrow-up" size={18} color="#555" />
                                    ) : (
                                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#555" />
                                    )}
                                </div>
                            </div>

                            {filter_option.open ? (
                                <div className="py-2">
                                    <p className="v-small"></p>
                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Relavance</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Rating</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Delivery Time</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Low to High Cost</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Hight to Low Cost</span>
                                    </label>

                                </div>
                            ) : (null)}
                        </div>

                        <div className="bottom-fix row align-items-center w-100 bg-fff shadow py-3">
                            <div className="col-6">
                                <button className="btn-outline-green fw-bold btn w-100" >Clear All</button>
                            </div>
                            <div className="col-6 ">
                                <button className="bg-green text-white fw-bold btn w-100" onClick={() => {
                                    SetFilter({ open: false, value: "" })
                                }}>Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
}
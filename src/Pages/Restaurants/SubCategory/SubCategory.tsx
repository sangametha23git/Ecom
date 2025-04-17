import React, { useState, useEffect, useContext } from "react";
import {
    MaterialIcons,
    Ionicons,
    Entypo,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5,
} from "@expo/vector-icons";
import DataContext from "../../../utils/Context/DataContext";
import { Link, useParams } from "react-router-dom";
import { Dialog, Drawer, SwipeableDrawer } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

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
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
        },
        overflow: "scroll",
        width: "50%"
    }
}));
const handleDragStart = (e) => e.preventDefault();

const category_data = [
    {
        id: 1,
        src: require("../../../assets/img/south.jpg"),
        name: "South Indian",
    },
    {
        id: 2,
        src: require("../../../assets/img/north.jpeg"),
        name: "North Indian",
    },
    {
        id: 3,
        src: require("../../../assets/img/food5.jpg"),
        name: "Chicken Curry",
    },
    {
        id: 4,
        src: require("../../../assets/img/noodle.webp"),
        name: "Noodles",
    },
    {
        id: 5,
        src: require("../../../assets/img/fried.webp"),
        name: "Fried Chicken",
    },
    {
        id: 6,
        src: require("../../../assets/img/food2.jpeg"),
        name: "Chicken Gravy",
    },
    {
        id: 7,
        src: require("../../../assets/img/food1.jpeg"),
        name: "Fried Chicken",
    },
    {
        id: 8,
        src: require("../../../assets/img/leatherShoe.jpg"),
        name: "Formal Shoes",
    },
    {
        id: 9,
        src: require("../../../assets/img/allWear.webp"),
        name: "Casual Shoes",
    },
];

const top_brands = [
    {
        id: 1,
        src: require("../../../assets/img/brands/kfc.png"),
        name: "KFC",
        starting: 203,
    },
    {
        id: 2,
        src: require("../../../assets/img/brands/mccdonald.png"),
        name: "Mccdonald",
        starting: 265,
    },
    {
        id: 3,
        src: require("../../../assets/img/brands/oyalo.png"),
        name: "Oyalo",
        starting: 120,
    },
    {
        id: 4,
        src: require("../../../assets/img/brands/a2b.png"),
        name: "A2B",
        starting: 248,
    },
    {
        id: 5,
        src: require("../../../assets/img/brands/annapoorna.png"),
        name: "Annapoorna",
        starting: 200,
    },
    {
        id: 6,
        src: require("../../../assets/img/brands/biriyani.png"),
        name: "Dindigul Thalappakatti",
        starting: 150,
    },
];
const responsive = {
    0: { items: 1 },
    200: { items: 2 },
    300: { items: 3 },
    350: { items: 3 },
    548: { items: 4 },
    720: { items: 5 },
    1024: { items: 6 },
    // 1100: { items: 8 },
    // 1200: { items: 8 },
};

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
};

const foodbanner = {
    0: { items: 1 },
    300: { items: 1 },
    350: { items: 1 },
    548: { items: 1 },
    720: { items: 2 },
    912: { items: 3 },
    1024: { items: 4 },
    1200: { items: 4 },
};

export default function RestaurantSubCategory(props: any) {
    const context = useContext(DataContext);
    const [id_value, SetIdValue] = useState(useParams());
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [bottom_drawer, SetBottomDrawer] = useState(false);
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
            delivery: "",
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
            delivery: "",
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
            delivery: "",
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
            delivery: "",
        },
    ]);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [subCategory, SetSubCategory] = useState([]);
    const [sort_open, SetSortOpen] = useState(true);
    const [food_banner, SetFoodBanner] = useState([
        { img: require("../../../assets/img/banner/food_banner1.png") },
        { img: require("../../../assets/img/banner/food_banner2.png") },
        { img: require("../../../assets/img/banner/food_banner3.png") },
        { img: require("../../../assets/img/banner/food_banner4.png") },
    ]);
    const [is_loading, SetIsLoading] = useState(true);


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

    useEffect(() => {
        console.log("Restaurant Sub Category On mount :", props);
        console.log("Restaurant Sub Category On mount :", context);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        if (context.app_data.restaurant.subCategory != undefined) {
            SetSubCategory(context.app_data.restaurant.subCategory)
            console.log("SubCategory On mount :", context.app_data.restaurant.subCategory);
            context.SetAppData((prevValue) => {
                prevValue.backHaves = props.backHaves;
                return { ...prevValue };
            });
        }

        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);

    }, []);


    return (
        <div className="page-main pb-5 px-sm-0 px-md-2 p-sm-0 food-page">
            {/* <div className="container"> */}
            <div className="pt-2 today bg-fff">
                <AliceCarousel
                    mouseTracking
                    touchMoveDefaultEvents={false}
                    // items={productsRestraunt}
                    // paddingLeft={20}
                    paddingRight={50}
                    disableDotsControls
                    responsive={foodbanner}
                    disableButtonsControls
                    controlsStrategy="alternate"
                    infinite
                >

                    {food_banner.map((banner, index) => (
                        is_loading ? (
                            <div className="p-1">
                                <Skeleton height={60} width="100%" />
                            </div>
                        ) : (
                            <Link
                                to="/restaurant/restaurant_subcategory"
                                key={index}
                                onDragStart={handleDragStart}
                            >
                                <div className="p-1 cursor">
                                    <img src={banner.img} className="subcate_banner_img" />
                                </div>
                            </Link>
                        )
                    ))}
                </AliceCarousel>
                {/* <img
                    src={require("../../../assets/img/banner/banner9.jpg")}
                    className="subBanner"
                /> */}
            </div>

            <div className="row py-2 bg-fff shadow-bottom">
                <div className="col-6 pr-0">
                    {is_loading ? (
                        <Skeleton height={10} width="80%" />
                    ) : (
                        <p className="text-black">{restaurant.length} Restaurant near by you</p>
                    )}
                </div>
                <div className="col-6 pr-2">
                    {is_loading ? (
                        <div className="ms-auto w-50">
                            <Skeleton height={10} width={70} />
                        </div>
                    ) : (
                        <div
                            className="flex justify-end align-center cursor"
                            onClick={(event) => {
                                SetBottomDrawer(true);
                            }}
                        >
                            <img
                                src={require("../../../assets/icon/filter.png")}
                                className="head-img"
                            />
                            <p className="pl-02 text-gray fw-bold">Filters</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-2">
                {subCategory != "" ? (
                    <div className="row py-2 bg-fff shadow-bottom">
                        {is_loading ? (
                            <div>
                                <div className="d-flex ps-2 align-items-center pb-1">
                                    <Skeleton className="head-img" circle={true} />
                                    <div className="ps-1">
                                        <Skeleton width={100} height="10px" />
                                    </div>
                                </div>
                                <p className="ps-3">
                                    <Skeleton width={250} height="10px" />
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={require("../../../assets/icon/fork.png")}
                                        className="head-img"
                                    />
                                    <h6 className="mb-0 pb-0 pl-1">Food Varieties</h6>
                                </div>
                                <p className="py-1">Choose your favorite foods</p>
                            </div>
                        )}
                        {subCategory.map((data, sub_index) => (
                            <div className="col-3" key={sub_index}>
                                {is_loading ? (
                                    <div className="text-center">
                                        <Skeleton circle={true} width={70} height={70} />
                                        <Skeleton height={10} width={50} />
                                    </div>
                                ) : (
                                    <Link to={"/restaurant/restaurant_shop"}>
                                        <div className="text-center" onClick={() => {
                                            console.log("subcategory directory data: ", data)
                                        }}>
                                            {data.image == null ? (
                                                <img src={require("../../../assets/img/category/burger.png")} className="food-img" />

                                            ) : (
                                                <img src={data.image} className="food-img" />
                                            )}
                                            <div className="text-center pt-1">
                                                <p className="food-name">{data.name} </p>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (null)}
            </div>

            <div className="mt-2">
                <div className="row bg-fff shadow-bottom">
                    {/* {restaurant.map((data, index) => (
                        // {subCategory.map((data, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <Link to="/restaurant/restaurant_shop">
                                <div className="row pt-3 cursor">
                                    <div className="col-4 p-0">
                                        <img src={data.img} className="near-img" />
                                        {data.offer != null ? (
                                            <div className="bottom-offer">
                                                <div className="offer">
                                                    <p>
                                                        <MaterialCommunityIcons
                                                            name="brightness-percent"
                                                            size={15}
                                                            color="#00ac0b"
                                                        />
                                                        <b className="pl-02 text-green">{data.offer}% OFF</b>
                                                    </p>
                                                    <small>Upto 120</small>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="col-8 pr-0 pt-2">
                                        <h6 className="oneline">{data.name}</h6>
                                        <p className="oneline">{data.cuisine}</p>
                                        <p>
                                            <small>
                                                <MaterialIcons name="star" size={12} color="gray" />
                                                <span className="pr-02">{data.rate}</span>
                                                <span className="pr-02">
                                                    <Entypo name="dot-single" size={9} color="gray" />
                                                </span>
                                                <span className="pr-02">{data.deliveryTime}</span>
                                            </small>
                                        </p>

                                        {data.delivery != "" ? (
                                            <div className="mt-1 pt-1 border-top flex align-center">
                                               
                                                <p className="text-green fw-bold">{data.delivery}</p>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))} */}

                    {restaurant.map((data, index) => (
                        <div className="col-12 col-md-6 col-lg-4 cursor restaurant-list__item" key={index}>
                            {is_loading ? (
                                <div className="row pt-3">
                                    <div className="col-5 p-0">
                                        <Skeleton width="100%" height={100} />
                                    </div>
                                    <div className="col-7 pe-0">
                                        <Skeleton height={10} width={100} />
                                        <Skeleton height={8} width="100%" count={2} />
                                    </div>
                                </div>
                            ):(
                            <Link to={"/restaurant/restaurant_shop"} >
                                <div className="row pt-3 restaurant-list__resta_card" onClick={() => {
                                    SaveContext(data);
                                }}>
                                    <div className="col-5 p-0">
                                        <div className="container p-0">

                                            {data.img != null ? (
                                                <img src={data.img} className="near-img" />
                                            ) : (
                                                <img src={require("../../../assets/img/dhosa.jpg")} className="near-img" />
                                            )}

                                            <div>
                                                {
                                                    data.offer != null ? (
                                                        <div className="top-right">
                                                            <p className="mb-0">
                                                                <MaterialCommunityIcons
                                                                    name="brightness-percent"
                                                                    size={13}
                                                                    color="#00ac0b"
                                                                />
                                                                <b className="pl-02 text-green fw-bold">
                                                                    {data.offer}% OFF
                                                                </b>
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )
                                                }
                                            </div>

                                            < div className="img_over_content_resta d-flex align-items-center">
                                                <div className="restaurant-info flex align-center w-100">
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


                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-7 pr-0">
                                        <h6 className="marg">{data.name}</h6>
                                        <p className="marg">{data.cuisine}</p>

                                    </div>
                                </div>
                            </Link>
                            )}
                        </div>
                    ))}

                </div>
            </div>


            <div className="sort_filter">
                <Dialog
                    open={bottom_drawer}
                    onClose={() => {
                        SetBottomDrawer(false)
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
                                        SetBottomDrawer(false)
                                    }}
                                >
                                    <Ionicons name="close" size={20} color="gray" />
                                </div>
                            </div>
                        </div>


                        <div className=" px-3 mb-5 ">
                            <div className="row align-items-center py-2" onClick={() => {
                                SetSortOpen(!sort_open);
                            }}>
                                <div className="col-6 p-0">
                                    <p className="mb-0 fs-7 text-darkgray">Cost</p>
                                </div>
                                <div className="col-6 p-0 text-end cursor">
                                    {sort_open ? (
                                        <MaterialIcons name="keyboard-arrow-up" size={18} color="#555" />
                                    ) : (
                                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#555" />
                                    )}
                                </div>
                            </div>

                            {sort_open ? (
                                <div className="py-2">
                                    <p className="v-small"></p>
                                    <label className="radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Relavance</span>
                                    </label>

                                    <label className="radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Rating</span>
                                    </label>

                                    <label className="radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Delivery Time</span>
                                    </label>

                                    <label className="radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Low to High Cost</span>
                                    </label>

                                    <label className="radio-button cursor">
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
                                    SetBottomDrawer(false);
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
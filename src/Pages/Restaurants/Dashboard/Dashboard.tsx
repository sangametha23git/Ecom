import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
    MaterialIcons,
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome,
    Entypo,
} from "@expo/vector-icons";
import { api } from "../../../utils/Api";

const handleDragStart = (e) => e.preventDefault();
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const items = [
    <img
        src={require("../../../assets/img/banner/banner1.png")}
        onDragStart={handleDragStart}
    />,
    <img
        src={require("../../../assets/img/banner/banner4.png")}
        onDragStart={handleDragStart}
    />,
    <img
        src={require("../../../assets/img/banner/banner2.jpg")}
        onDragStart={handleDragStart}
    />,
    <img
        src={require("../../../assets/img/banner/banner5.jpg")}
        onDragStart={handleDragStart}
    />,
];

const top_brands = [
    {
        id: 1,
        src: require("../../../assets/img/brands/kfc.png"),
        name: "KFC",
        offer: 23,
        offerPrice: 150,
        deliveryTime: "35 mins",
    },
    {
        id: 2,
        src: require("../../../assets/img/brands/mccdonald.png"),
        name: "Mccdonald",
        offer: 25,
        offerPrice: 90,
        deliveryTime: "28 mins",
    },
    {
        id: 3,
        src: require("../../../assets/img/brands/oyalo.png"),
        name: "Oyalo",
        offer: 120,
        offerPrice: 50,
        deliveryTime: "36 mins",
    },
    {
        id: 4,
        src: require("../../../assets/img/brands/a2b.png"),
        name: "A2B",
        offer: 24,
        offerPrice: 75,
        deliveryTime: "46 mins",
    },
    {
        id: 5,
        src: require("../../../assets/img/brands/annapoorna.png"),
        name: "Annapoorna",
        offer: 20,
        offerPrice: 50,
        deliveryTime: "49 mins",
    },
    {
        id: 6,
        src: require("../../../assets/img/brands/biriyani.png"),
        name: "Dindigul Thalappakatti",
        offer: 15,
        offerPrice: 60,
        deliveryTime: "29 mins",
    },
];

const responsive = {
    0: { items: 1 },
    300: { items: 2 },
    350: { items: 3 },
    548: { items: 3 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 8 },
    1200: { items: 10 },
};

const foodresponsive = {
    0: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    548: { items: 4 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 6 },
};

const brandresponsive = {
    0: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    450: { items: 3 },
    548: { items: 3 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 8 },
    1200: { items: 10 },
};

const foodcategory = {
    0: { items: 1 },
    300: { items: 3 },
    350: { items: 3 },
    548: { items: 3 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 8 },
    1200: { items: 10 },
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


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default function RestaurantDashboard(props: any) {
    const context = useContext(DataContext);
    const [id_value, SetIdValue] = useState(useParams());
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
    const [recommended, SetRecommended] = useState([
        {
            type: 0,
            id: 1,
            img: require("../../../assets/img/dhosa.jpg"),
            offer: 25,
            name: "A2B Veg",
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
            rate: 3.9,
            deliveryTime: "41 mins",
            delivery: "",
        },
        {
            type: 0,
            id: 3,
            img: require("../../../assets/img/north.jpeg"),
            offer: 15,
            name: "Erode Punjabi",
            rate: 3.9,
            deliveryTime: "51 mins",
            delivery: "",
        },
        {
            type: 1,
            id: 4,
            img: require("../../../assets/img/food4.jpg"),
            offer: 5,
            name: "Rowthar Biriyani Center",
            rate: 3.8,
            deliveryTime: "32 mins",
            delivery: "",
        },
        {
            type: 0,
            id: 3,
            img: require("../../../assets/img/c65.jpg"),
            offer: null,
            name: "Erode Chicken Center",
            rate: 3.9,
            deliveryTime: "51 mins",
            delivery: "",
        },
    ]);
    const [food_category, SetFoodCategody] = useState([
        {
            id: 1,
            image: require("../../../assets/img/category/pizza.png"),
            name: "Pizza",
        },
        {
            id: 2,
            image: require("../../../assets/img/category/southindian.png"),
            name: "South Indian",
        },
        {
            id: 3,
            image: require("../../../assets/img/category/icecream.png"),
            name: "Icecream",
        },
        {
            id: 4,
            image: require("../../../assets/img/category/northindian.png"),
            name: "North Indian",
        },
        {
            id: 5,
            image: require("../../../assets/img/category/desert.png"),
            name: "Desert",
        },
        {
            id: 6,
            image: require("../../../assets/img/category/burger.png"),
            name: "Burger",
        },
        {
            id: 7,
            image: require("../../../assets/img/category/sandwich.png"),
            name: "Rolls & Salads ",
        },
        {
            id: 6,
            image: require("../../../assets/img/category/biriyani.png"),
            name: "Biriyani",
        },
        {
            id: 1,
            image: require("../../../assets/img/category/pizza.png"),
            name: "Pizza",
        },
        {
            id: 2,
            image: require("../../../assets/img/category/southindian.png"),
            name: "South Indian",
        },
        {
            id: 3,
            image: require("../../../assets/img/category/icecream.png"),
            name: "Icecream",
        },
        {
            id: 4,
            image: require("../../../assets/img/category/northindian.png"),
            name: "North Indian",
        },
        {
            id: 5,
            image: require("../../../assets/img/category/desert.png"),
            name: "Desert",
        },
        {
            id: 6,
            image: require("../../../assets/img/category/burger.png"),
            name: "Burger",
        },
        {
            id: 7,
            image: require("../../../assets/img/category/sandwich.png"),
            name: "Rolls & Salads ",
        },
        {
            id: 6,
            image: require("../../../assets/img/category/biriyani.png"),
            name: "Biriyani",
        },
    ]);
    const [today_banner, SetTodayBanner] = useState([
        { img: require("../../../assets/img/banner/foodBanner1.jpg") },
        { img: require("../../../assets/img/banner/foodBanner2.jpg") },
        { img: require("../../../assets/img/banner/foodBanner3.jpg") },
        { img: require("../../../assets/img/banner/foodBanner4.jpg") },
        { img: require("../../../assets/img/banner/today5.png") },
    ]);
    const [food_banner, SetFoodBanner] = useState([
        { img: require("../../../assets/img/banner/food_banner1.png") },
        { img: require("../../../assets/img/banner/food_banner2.png") },
        { img: require("../../../assets/img/banner/food_banner3.png") },
        { img: require("../../../assets/img/banner/food_banner4.png") },
    ]);
    const [offer, SetOffer] = useState([
        {
            id: 1,
            img: require("../../../assets/img/dhosa.jpg"),
            offer: 25,
            name: "A2B Veg",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 2,
            img: require("../../../assets/img/food4.jpg"),
            offer: 5,
            name: "Rowthar Biriyani Center",
            rate: 3.8,
            deliveryTime: "32 mins",
            delivery: "",
        },
        {
            id: 3,
            img: require("../../../assets/img/food4.jpg"),
            offer: 5,
            name: "Rowthar Biriyani Center",
            rate: 3.8,
            deliveryTime: "32 mins",
            delivery: "",
        },
        {
            id: 4,
            img: require("../../../assets/img/north.jpeg"),
            offer: 15,
            name: "Erode Punjabi",
            rate: 3.9,
            deliveryTime: "51 mins",
            delivery: "",
        },
        {
            id: 4,
            img: require("../../../assets/img/north.jpeg"),
            offer: 15,
            name: "Erode Punjabi",
            rate: 3.9,
            deliveryTime: "51 mins",
            delivery: "",
        },
    ]);
    const [is_loading, SetIsLoading] = useState(true);

    const [vendors, SetVendors] = useState([]);
    const [products, SetProducts] = useState([]);
    const [product_category, SetProductCategory] = useState([]);

    useEffect(() => {
        console.log("RestaurantDashboard On mount :", props);
        console.log("RestaurantDashboard On mount :", context);
        console.log("id_value", id_value);
        // get_init();
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);

    async function get_init() {
        let data_res: any;
        if (context.app_data.sections.sections_type == "Vendors") {
            let pass_data = {
                get: {
                    slug: context.app_data.sections.sections_slug,
                },
            };
            data_res = await api("/section_vendors", pass_data);
            console.log("res :", data_res);
            SetVendors(data_res.response.vendors);
            SetProductCategory(data_res.response.product_categories);
        } else if (context.app_data.sections.sections_type == "Products") {
            let pass_data = {
                get: {
                    section_slug: context.app_data.sections.sections_slug,
                },
            };
            data_res = await api("/section_products", pass_data);
            console.log("res :", data_res);
            SetProducts(data_res.response.products);
        }
    }

    function SaveContext(data) {
        console.log("SaveContext:", data);
        context.SetAppData((prevValue) => {
            prevValue.restaurant.id = data.id;
            prevValue.restaurant.subCategory = data.children;
            prevValue.restaurant.slug = data.slug;
            prevValue.restaurant.brand_name = data.brand_name;
            prevValue.restaurant.name = data.name;
            return { ...prevValue };
        });
    }

    var settings = {
        className: "text-center d-flex bg-fff mt-1",
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 2,
        // arrows: true,
        // dots: true,
        // speed: 300,
        infinite: false,
        // autoplaySpeed: 5000,
        // autoplay: true,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 250,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    var brandsettings = {
        className: "text-center d-flex bg-fff mt-3",
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 2,
        // arrows: true,
        // dots: true,
        // speed: 300,
        infinite: false,
        // autoplaySpeed: 5000,
        // autoplay: true,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 250,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    return (
        <div className="page-main food-page mt-2 mb-5 px-sm-0 px-md-2">
            <div className="bg-fff p-2 pb-0">
                {is_loading ? (
                    <div>
                        <p><Skeleton width="25%" height="8px" /></p>
                        <p><Skeleton width="45%" height="8px" /></p>
                    </div>
                ) : (
                    <div>
                        <p className="v-small fw-bold ps-1"><b>Hi, Govindaraj</b></p>
                        <p className="extra-small ps-1">Delicisus foods for you</p>
                    </div>
                )}
            </div>
            <div className="bg-fff p-2 sticky-sm-60px sticky-md-110px shadow-bottom">
                {is_loading ? (
                    // <div>
                    //     <p><Skeleton width="25%" height="8px" /></p>
                    //     <p><Skeleton width="45%" height="8px" /></p>
                    //     <div className="py-2">
                    <Skeleton width="100%" height="25px" />
                    //     </div>
                    // </div>
                ) : (
                    <Link to="/restaurant/restaurant_search">
                        <div className="row align-items-center">
                            <div className="input-icons form-group w-100">
                                <input
                                    type="text"
                                    className="form-control search-bar p-0"
                                    placeholder="Delicisus foods for you"
                                />
                                <div className="cursor ps-2 border-left center">
                                    <Ionicons name="md-search" size={18} color="#00ac0b" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    // <div>
                    //     <p className="v-small fw-bold ps-1"><b>Hi, Govindaraj</b></p>
                    //     <p className="extra-small ps-1">Delicisus foods for you</p>
                    //     <div className="py-2 ">

                    //     </div>
                    // </div>
                )}



            </div>
            <div className="shadow-bottom food-customer-profile-div  mt-2">
                {/* <img
                    src={require("../../../assets/img/banner/resBanner2.png")}
                    className="resBanner"
                /> */}






                {/* <div className="center">
                    <div className="row p-3 w-100">
                        <div className="col-10 px-0">
                            <p className="v-small fw-bold ps-1"><b>Hi</b></p>
                            <h4 className="mb-1 fw-bold"><b>Govindaraj</b></h4>
                            <p className="extra-small ps-1">Delicisus foods for you</p>
                        </div>
                        <div className="col-2 p-0 end">
                            <img src={require("../../../assets/img/profile.png")} className="food-customer-profile" />
                        </div>
                    </div>
                </div> */}

                <div className="py-3 card shadow-bottom border-top-radius">
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
                            <div className="d-flex ps-2 align-items-center">
                                <img
                                    src={require("../../../assets/icon/restaurant.png")}
                                    className="head-img"
                                />
                                <h5 className="mb-1 pb-0 ps-1">Foods For You</h5>
                            </div>
                            <p className="ps-2">Most frequently orders from you</p>
                        </div>

                    )}

                    <div className="mt-2">
                        <div className="restaurant-list row">
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
                                        className="restaurant-list__item mt-3 ps-1 pr-1"
                                        key={index}
                                        onDragStart={handleDragStart}
                                    >
                                        <div className="restaurant-list__item_card cursor">
                                            {is_loading ? (
                                                <Skeleton height={200} />
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
                                                                        {/* <img src={require("../../../assets/icon/free-shipping.png")} className="free-shipping-icon" /> */}
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
                </div>

            </div>

            <div className="foodbrand mt-2 py-3 card shadow-bottom">
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

                        <div className="d-flex ps-2">
                            <img
                                src={require("../../../assets/icon/brand.png")}
                                className="head-img"
                            />
                            <h5 className="mb-1 pb-0 ps-1">Top Brands</h5>
                        </div>
                        <p className="ps-2 ">Best food brands for your orders</p>
                    </div>
                )}
                <AliceCarousel
                    mouseTracking
                    touchMoveDefaultEvents={false}
                    // items={productsRestraunt}
                    // paddingLeft={50}
                    paddingRight={50}
                    disableDotsControls
                    responsive={brandresponsive}
                    disableButtonsControls
                    controlsStrategy="alternate"
                    infinite
                >
                    {top_brands.map((data, index) => (
                        <div
                            className="mt-3 p-2 cursor"
                            key={index}
                            onDragStart={handleDragStart}
                        >
                            {is_loading ? (
                                <div>
                                    <div className="center w-100">
                                        <div className=" ">
                                            <Skeleton circle={true} height={70} width={70} />
                                        </div>
                                    </div>
                                    <div className="text-center  mt-1 ">
                                        <Skeleton height={10} width={20} />
                                        <div className="center">
                                            <Skeleton height={8} width={40} />
                                        </div>
                                    </div>
                                </div>

                            ) : (
                                <Link to="/restaurant/restaurant_shop">
                                    <div className="center w-100">
                                        <div className="resta-round-div ">
                                            <div className="px-1">
                                                <img src={data.src} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="text-center brands mt-1 ">
                                        <p className=" text-dark oneline">{data.name}</p>
                                        <div className="center pt-1">
                                            <p className="pe-1">
                                                <small className=" text-black">
                                                    {data.deliveryTime}
                                                </small>
                                            </p>
                                            <p className="border-left ps-1">
                                                <small className="text-black">{data.offer}% OFF</small>
                                            </p>

                                        </div>

                                    </div>
                                    {/* <div className="pt-2 text-center">



                                    <p>
                                        <small className="">
                                            Upto ₹{data.offerPrice}
                                        </small>
                                    </p>
                                </div> */}
                                </Link>
                            )}
                        </div>
                    ))}
                </AliceCarousel>
            </div>

            <div className="mt-2 py-3 card shadow-bottom">
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
                        <div className="d-flex ps-2">
                            <img
                                src={require("../../../assets/icon/fork.png")}
                                className="head-img"
                            />
                            <h5 className="mb-1 pb-0 ps-1">Popular Food Varieties</h5>
                        </div>
                        <p className="ps-2">Choose your favorite foods</p>
                    </div>
                )}
                <div className="continer">
                    <Slider {...settings}>
                        {food_category.map((category, cat_index) => (
                            <div className="p-2 cursor" key={cat_index} onDragStart={handleDragStart} onClick={() => {
                                SaveContext(category);
                            }}>
                                {is_loading ? (
                                    <div className="text-center">
                                        <Skeleton height={70} width={70} circle={true} />
                                        <p className="pt-1">
                                            <Skeleton height={8} width={50} />
                                        </p>
                                    </div>
                                ) : (
                                    <Link to={"/restaurant/restaurant_subcategory"}>
                                        <div className="text-center">
                                            <img src={category.image} className="food-img" />
                                            <div className="text-center">
                                                <p className="food-name oneline mb-0">{category.name} </p>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

            <div className="mt-2 py-3 card shadow-bottom">
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
                        <div className="d-flex ps-2">
                            <img
                                src={require("../../../assets/icon/today.png")}
                                className="head-img"
                            />
                            <h5 className="mb-1 pb-0 ps-1">Today's menu</h5>
                        </div>
                        <p className="ps-2">Today menus on foods</p>
                    </div>
                )}
                {/* <div className="mt-3 today">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={20}
                        paddingRight={50}
                        // disableDotsControls
                        responsive={foodbanner}
                        disableButtonsControls
                        controlsStrategy="alternate"
                        infinite
                    >
                        {today_banner.map((banner, index) => (
                            <Link
                                to="/restaurant/restaurant_subcategory"
                                key={index}
                                onDragStart={handleDragStart}
                            >
                                <div className="p-2 cursor">
                                    <img src={banner.img} className="banner-img" />
                                </div>
                            </Link>
                        ))}

                    </AliceCarousel>
                </div> */}

                <div className="mt-2 today">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={20}
                        paddingRight={50}
                        // disableDotsControls
                        responsive={foodbanner}
                        disableButtonsControls
                        controlsStrategy="alternate"
                        infinite
                    >
                        {food_banner.map((banner, index) => (
                            is_loading ? (
                                <div className="p-2">
                                    <Skeleton width={280} height={100} />
                                </div>
                            ) : (
                                <div>
                                    <Link
                                        to="/restaurant/restaurant_subcategory"
                                        key={index}
                                        onDragStart={handleDragStart}
                                    >
                                        <div className="p-2 cursor">
                                            <img src={banner.img} className="food_banner_img" />
                                        </div>
                                    </Link>
                                </div>
                            )

                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="mt-2 py-3 card shadow-bottom">
                {is_loading ? (
                    <div>
                        <div className="row p-0">
                            <div className="col-8 pe-0">
                                <div className="d-flex align-items-center pb-1">
                                    <Skeleton className="head-img" circle={true} />
                                    <div className="ps-1">
                                        <Skeleton width={100} height="10px" />
                                    </div>
                                </div>
                                <p className="ps-1">
                                    <Skeleton width={180} height="10px" />
                                </p>
                            </div>
                            <div className="col-4 text-right">
                                <div className="flex justify-end cursor">
                                    <p className="ps-3">
                                        <Skeleton width={50} height="10px" />
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div>
                        <div className="row p-0">
                            <div className="col-8 pe-0">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={require("../../../assets/icon/recommend.png")}
                                        className="head-img"
                                    />
                                    <h5 className="mb-1 pb-0 ps-1">Recommended Brands</h5>
                                </div>
                            </div>
                            <div className="col-4 text-right">
                                <div className="flex justify-end cursor">
                                    <p>
                                        <b className="text-dark">SEE ALL </b>
                                    </p>
                                    <img
                                        src={require("../../../assets/icon/next.png")}
                                        className="next-img"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="ps-2">Best Seller Brands & Restaurants</p>
                    </div>

                )}
                <div className=" p-2">
                    <div className=" row">
                        {recommended.map((data, index) => (
                            <div
                                className="col-6 col-md-4 col-lg-3 restaurant-list__item mt-3 ps-1 pr-1 cursor"
                                key={index}
                            >
                                <div className="restaurant-list__item_card">
                                    {is_loading ? (
                                        <div className="container">
                                            <Skeleton height={160} />
                                        </div>
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
                                                            <b className="pl-02 text-green">
                                                                {data.offer}% OFF
                                                            </b>
                                                        </p>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            <div className="img_over_content">
                                                <div>
                                                    <div className="restaurant-name"><b>{data.name}</b></div>
                                                    <div className="restaurant-info flex align-center">
                                                        <MaterialIcons name="star" size={12} color="white" />
                                                        <p className="pl-02 text-white">{data.rate}</p>
                                                        <div className="pl-02 pb-1">
                                                            <Entypo name="dot-single" size={9} color="white" />
                                                        </div>
                                                        <p className="pl-02 text-white">{data.deliveryTime}</p>
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

                                            {/* {data.delivery != "" ? (
                                            <div className="mt-1 pt-1 flex align-center bottom-60">
                                                <img
                              src={require("../../../assets/icon/foodDelivery.png")}
                              className="del-icon"
                            />
                                                <p className="text-green fw-bold ">{data.delivery}</p>
                                            </div>
                                        ) : (
                                            ""
                                        )} */}
                                        </Link>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-2 py-3 card shadow-bottom">
                {is_loading ? (
                    <div className="row p-0">
                        <div className="col-8 pe-0">
                            <div className="d-flex align-items-center pb-1">
                                <Skeleton className="head-img" circle={true} />
                                <div className="ps-1">
                                    <Skeleton width={100} height="10px" />
                                </div>
                            </div>
                            <p className="ps-1">
                                <Skeleton width={180} height="10px" />
                            </p>
                        </div>
                        <div className="col-4 text-right">
                            <div className="flex justify-end cursor">
                                <p className="ps-3">
                                    <Skeleton width={50} height="10px" />
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row p-0">
                        <div className="col-8 pe-0">
                            <div className="d-flex align-items-center">
                                <img
                                    src={require("../../../assets/icon/foodoffer.png")}
                                    className="head-img"
                                />
                                <h5 className="mb-1 pb-0 ps-1">Offers</h5>
                            </div>
                            <p className="">Exclusive Biggest Saving Offers</p>
                        </div>
                        <div className="col-4 text-right">
                            <div className="flex justify-end cursor">
                                <p>
                                    <b className="text-dark">SEE ALL </b>
                                </p>
                                <img
                                    src={require("../../../assets/icon/next.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="mt-2">
                    <div className="restaurant-list row p-2">
                        {/* <AliceCarousel
                mouseTracking
                    touchMoveDefaultEvents={false}
                // items={productsRestraunt}
                // paddingLeft={50}
                paddingRight={20}
                disableDotsControls
                responsive={foodresponsive}
                disableButtonsControls
                controlsStrategy="alternate"
              > */}
                        {offer.slice(0, 4).map((data, index) => (
                            <div
                                className="col-6 col-md-4 col-lg-3 restaurant-list__item mt-3 ps-1 pr-1 cursor"
                                key={index}
                            >
                                <div className="restaurant-list__item_card">
                                    {is_loading ? (
                                        <div className="container">
                                            <Skeleton height={160} />
                                        </div>
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
                                                            <b className="pl-02 text-green">
                                                                {data.offer}% OFF
                                                            </b>
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
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* </AliceCarousel> */}
                    </div>
                </div>
            </div>

            <div className="mt-2 py-3 card shadow-bottom">
                {is_loading ? (
                    <div >
                        <div className="d-flex align-items-center ps-2">
                            <Skeleton className="head-img" circle={true} />
                            <div className="ps-1">
                                <Skeleton width={100} height="10px" />
                            </div>
                        </div>
                        <p className="ps-1">
                            <Skeleton width={180} height="10px" />
                        </p>
                    </div>
                ) : (

                    <div>
                        <div className="d-flex ps-2 align-items-center">
                            <img
                                src={require("../../../assets/icon/restaurant2.png")}
                                className="head-img"
                            />
                            <h5 className="mb-0 pb-0 ps-1">All Restaurants</h5>
                        </div>
                        <p className="ps-2">Find tastie centers near you</p>
                    </div>
                )}

                <div className="mt-3">
                    <div className="row">
                        {/* {vendors.map((data, index) => ( */}
                        {restaurant.map((data, index) => (
                            <div className="col-12 col-md-6 col-lg-4 cursor restaurant-list__item" key={index}>
                                {is_loading ? (
                                    <div>
                                        <div className="row pt-3">
                                            <div className="col-5 p-0">
                                                <div className="container p-0">
                                                    <Skeleton height={160} />
                                                </div>
                                            </div>
                                            <div className="col-7 pr-0">
                                                <Skeleton width="75%" height={10} />
                                                <Skeleton width="100%" height={10} count={2} />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
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

                    {/* <div className="row">
                        {restaurant.map((data, index) => (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <div className="row pt-3">
                                    <div className="col-4 p-0">
                                        <Link to="/restaurant/restaurant_shop">
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
                                                            <b className="pl-02 text-green">
                                                                {data.offer}% OFF
                                                            </b>
                                                        </p>
                                                        <small>Upto 120</small>
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </Link>
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
                                            
                                                <p className="nearfreetext">{data.delivery}</p>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div >


            {/* <AliceCarousel
                mouseTracking
                touchMoveDefaultEvents={false}
                // items={productsRestraunt}
                // paddingLeft={20}
                paddingRight={50}
                disableDotsControls
                responsive={foodcategory}
                disableButtonsControls
                controlsStrategy="alternate"
            // infinite
            >

                {food_category.map((category, cat_index) => (
                    <div className="p-2 cursor" key={cat_index} onDragStart={handleDragStart} onClick={() => {
                        SaveContext(category);
                    }}>
                        <Link to={"/restaurant/restaurant_subcategory"}>
                            <div className="text-center">
                                <img src={category.image} className="food-img" />
            <div className="text-center pt-2">
                <p className="food-name">{category.name} </p>
            </div>
        </div>
                        </Link >
                    </div >
                ))
}
            </AliceCarousel > */}

        </div >
    );
}
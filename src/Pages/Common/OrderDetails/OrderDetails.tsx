import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    Foundation,
    MaterialIcons
} from "@expo/vector-icons";
import { Dialog, Drawer, Modal, SwipeableDrawer, makeStyles } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Variants from "../../Ecommerce/Variants/Variants";
import ReviewModal from "../Review/ReviewModal";
import HyperLocalTracking from "../HyperLocalTracking/HyperLocalTracking";
import { Rating } from "@material-ui/lab";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 1 },
    300: { items: 1 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 3 },
    1024: { items: 4 },
    1100: { items: 6 },
    1200: { items: 6 },
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
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
        },
        [theme.breakpoints.up("md")]: {
            overflow: "scroll",
            maxWidth: "50%",
            width: "100%",
        },
    }
}));

export default function OrderDetails(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [review, SetReview] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [restaurant, SetRestaurant] = useState(true);
    const [similiar, SetSimiliar] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/sub4.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 2,
            img_path: require("../../../assets/img/category/Dairy_bakery.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 3,
            img_path: require("../../../assets/img/category/Drinks_snacks.jpg"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 4,
            img_path: require("../../../assets/img/category/kitchen.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 5,
            img_path: require("../../../assets/img/category/packed.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 6,
            img_path: require("../../../assets/img/category/household.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 7,
            img_path: require("../../../assets/img/category/babycare.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
        {
            id: 5,
            img_path: require("../../../assets/img/category/packed.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: "200",
            price: "250",
            discount: "₹50",
            rating: "4.0",
            addcount: 0,
            addbtn: false,
        },
    ]);
    const [payment, SetPayment] = useState([
        {
            item_count: 1,
            product_price: 600,
            discount: 30,
            shipping_price: 35,
            total: 605,
        },
    ]);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [track, SetTrack] = useState(false);
    const [tracking_modal, SetTrackingModal] = useState(false);
    const [value, SetValue] = useState(0);
    const [hover, SetHover] = useState("-1");

    useEffect(() => {
        console.log("OrderDetails On mount :", props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
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
        <div>
            <div className="page-main mb-4 px-sm-2 px-md-3 bg-fff container">

                <div className="p-2 bg-fff">
                    <p className="fs-6 text-black">Order Details</p>
                </div>
                <div className="p-2 bg-fff radius shadow container mt-2">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-3 p-0 pb-2">
                            <div className="d-flex">
                                <img
                                    src={require("../../../assets/icon/fast-truck.png")}
                                    className="truck"
                                />
                                <p className="px-2 pt-1">Hyperlocal</p>

                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-sm-0 px-md-3 pb-2">
                            <div className="end ">
                                <MaterialCommunityIcons name="calendar" size={14} color="gray" />
                                <p className="ps-1"><small className="text-black">30 July</small></p>
                            </div>
                        </div>
                        <div className="col-9 col-md-4 p-0 ">
                            <p className="text-black">Order ID: OSG016</p>
                        </div>
                        <div className="col-3 col-md-2 ps-1 pe-0 text-end ">
                            <p className="text-dark">₹ 605</p>
                        </div>
                    </div>
                </div>

                <div className="mt-2 bg-fff radius shadow container py-2">
                    <div className="row pt-2">
                        <div className="col-md-6 px-sm-0 px-md-3">
                            <div className="d-flex py-1">
                                <img src={require("../../../assets/icon/pin2.png")} className="bank-img" />
                                <div className="px-2">
                                    <p className="text-dark fs-7">Chicken Center</p>
                                    <p className="text-black"><small>Chicken Center, RKV road, Erode - 638009</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 px-sm-0 px-md-3">
                            <div className="d-flex py-1">
                                <img src={require("../../../assets/icon/location-pin1.png")} className="bank-img" />
                                <div className="px-2">
                                    <p className="text-dark fs-7">Home</p>
                                    <p className="text-black"><small>28, Ganapathi Street, Karungalpalayam, Erode - 638009</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="bg-light-color p-2 radius mt-2">
                            <div className="d-flex align-items-center">
                                <p className="text-black fw-bold pe-1">Order status</p>
                                <div className="ms-auto">
                                    <p className="text-prime1 pe-1 fw-bold">Preparing</p>
                                </div>
                            </div>
                        </div> */}

                <div className="row border-bottom py-2">
                    <div className="col-md-6 p-sm-0">
                        {restaurant ? (
                            <div className="pb-2 border-right-md px-md-2 px-sm-0">
                                <div className="d-flex align-items-center py-2">
                                    <div className="px-2 center">
                                        <img src={require("../../../assets/icon/tray.png")} className="resta-img" />
                                    </div>
                                    <div className="px-1 w-100">
                                        <div className="">
                                            <p className="online text-dark pt-1 mb-0">Chicken Center</p>
                                        </div>

                                        <div className="d-flex align-items-center ">
                                            <p className="text-orange pe-1">4 ★</p>
                                            <p className="oneline "><small className="ps-1  border-left text-gray">chennai</small></p>
                                            <div className="d-flex align-items-center ms-auto">
                                                <FontAwesome name="circle" size={11} color="#00ac0b" />
                                                <p className="ps-2 text-green fw-bold extra-small">Preparing</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="d-flex align-items-center oneline py-1">
                                    <div className="pe-1 center">
                                        <img
                                            src={require("../../../assets/icon/nonveg.png")}
                                            className="type-img-small"
                                        />
                                    </div>
                                    <p className="px-1 food-name">2</p>
                                    <AntDesign name="close" size={10} color="black" />
                                    <p className="ps-1 oneline food-name">Chicken Golden Delight</p>
                                    <div className="ms-auto">
                                        <p className="food-name">₹300</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center oneline py-1">
                                    <div className="pe-1 center">
                                        <img
                                            src={require("../../../assets/icon/nonveg.png")}
                                            className="type-img-small"
                                        />
                                    </div>
                                    <p className="px-1 food-name">2</p>
                                    <AntDesign name="close" size={10} color="black" />
                                    <p className="ps-1 oneline food-name">Chicken Golden Delight 2</p>
                                    <div className="ms-auto">
                                        <p className="food-name">₹300</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className="text-black fs-6">Product(s) Details</p>
                                <div className="d-flex pt-3">
                                    <div className="px-1">
                                        <img src={require("../../../assets/img/shoe.png")} className="seemore" />
                                    </div>
                                    <div className="px-2">
                                        <p className="oneline text-black double">
                                            <b>Nike Sports Shoes</b>
                                        </p>

                                        <div className="d-flex py-1">
                                            <p className="text-dark fw-bold mb-0 pe-2">₹605</p>
                                            <div className="border-left ps-2">
                                                <p className="mb-0">Qty: 1</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        )}

                    </div>

                    <div className="col-md-6 pt-2 px-sm-0 px-md-3 border-top-sm">
                        <p className="text-black fs-6">Payment Details</p>
                        {payment.map((data, index) => (
                            <div className="row pt-2 px-0" key={index}>
                                <div className="col-8 ps-0">
                                    <p className="pt-2">
                                        SubTotal ({data.item_count} Item)
                                    </p>
                                    <p className="pt-2">Discount Price</p>
                                    <p className="pt-2">Shipping Price</p>
                                    <h6 className="pt-3">Total</h6>
                                </div>
                                <div className="col-4 text-right pe-0">
                                    <p className="pt-2">₹{data.product_price}</p>
                                    <p className="pt-2">₹{data.discount}</p>
                                    <p className="pt-2">₹{data.shipping_price}</p>
                                    <h6 className="pt-3">₹{data.total}</h6>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                <div className="">
                    <div className="row py-2">
                        <div className="col-md-6 border-right-md pt-2 pb-3 px-sm-0 px-md-3">
                            <div className="d-flex align-items-center mb-3">
                                <p className="text-black fs-6">Order Tracking</p>
                                <div className="ms-auto cursor sm-none md-block">
                                    {restaurant ? (
                                        <div className="d-flex align-items-center bg-prime1 px-3 py-2 radius" onClick={() => {
                                            SetTrackingModal(true);
                                        }}>
                                            <Ionicons name="location-sharp" size={14} color="#fff" />
                                            <p className="fw-bold text-white ps-1">Track Now</p>
                                        </div>
                                    ) : (
                                        <div className="d-flex align-items-center bg-prime1 px-3 py-2 radius" onClick={() => {
                                            SetTrack(true);
                                        }}>
                                            <Ionicons name="location-sharp" size={14} color="#fff" />
                                            <p className="fw-bold text-white ps-1">Track Now</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="stepper-wrapper py-2">
                                <div className="stepper-item completed">
                                    <div className="step-name">Ordered</div>
                                    <div className="step-counter"></div>
                                    <p>Sep 10, 2:10 Pm</p>
                                </div>
                                <div className="stepper-item completed">
                                    <div className="step-name">Shipped</div>
                                    <div className="step-counter"></div>
                                    <p>Today</p>
                                </div>
                                <div className="stepper-item">
                                    <div className="step-name">Delivered</div>
                                    <div className="step-counter"></div>
                                    <p>Today</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 pt-2 border-top-sm pb-3 px-sm-0 px-md-3">
                            <p className="text-black fs-6 mb-3">Order Actions</p>
                            <div className="mb-2">
                                <div className="d-flex align-items-center pb-3 cursor">
                                    <MaterialCommunityIcons name="cancel" size={15} color="#777" />
                                    <p className="ps-2 " >
                                        <b className="text-black">Cancel Order</b>
                                    </p>
                                </div>


                                <div className="d-flex align-items-center pb-3 cursor">
                                    <Feather name="download" size={15} color="#777" />
                                    <p className="ps-2 " >
                                        <b className="text-black"> Download Invoice</b>
                                    </p>
                                </div>

                                <div className="d-flex align-items-center pb-3 cursor">
                                    <Entypo name="star-outlined" size={16} color="#777" />
                                    <p className=" ps-2 "
                                        onClick={() => { SetReview(true) }}
                                    >
                                        <b className="text-black"> Rate & Review product</b>
                                    </p>
                                </div>

                                <div className="d-flex align-items-center pb-3 cursor">
                                    <AntDesign
                                        name="customerservice"
                                        size={15}
                                        color="#777"
                                    />{" "}
                                    <p className="ps-2 ">
                                        <b className="text-black">Need help</b>
                                    </p>
                                </div>
                                <div className="d-flex align-items-center pb-3 cursor">
                                    <Feather name="refresh-cw" size={15} color="#777" />{" "}
                                    <p className=" ps-2">
                                        <b className="text-black">Return</b> - Return up to{" "}
                                        <b className="text-black">January 28, 2023</b>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Dialog
                    classes={{ container: classes.root, paper: classes.paper }}
                    open={review}
                    onClose={() => { SetReview(false); }}
                    className="center"
                >
                    <div className="">
                        <div className="row p-3 shadow-bottom sticky-top align-center">
                            <div className="col-10 text-white ps-0">
                                <h5>Rating & Reviews</h5>
                            </div>
                            <div
                                className="col-2 text-right cursor p-0"
                                onClick={() => { SetReview(false); }}
                            >
                                <Ionicons
                                    name="ios-close"
                                    size={20}
                                    color="black"
                                />
                            </div>
                        </div>
                        {restaurant ? (
                            <div>
                                <div className="p-2 row px-md-3 px-sm-2">
                                    <div className="p-2">
                                        <p className="text-black fs-6">Rate for delivery service</p>
                                        <div className="d-flex align-items-center pt-2">
                                            <div className="px-1">
                                                <img src={require("../../../assets/img/prof.jpg")} className="del-person-img" />
                                            </div>
                                            <div className="pe-1 ps-2 ">
                                                <p className="text-black">Delivery partner name</p>
                                                <p className="text-orange">4 ★</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="flex py-2 text-center">
                                                <Rating
                                                    name="hover-feedback"
                                                    value={value}
                                                    precision={1}
                                                    onChange={(event, newValue) => {
                                                        SetValue(newValue);
                                                    }}
                                                    onChangeActive={(event, newHover) => {
                                                        SetHover(newHover);
                                                    }}
                                                />
                                                {/* <div className="ms-auto">
                        <p className="text-black fs-7">
                            {value !== null && labels[hover !== -1 ? hover : value]}
                        </p>
                    </div> */}
                                            </div>

                                            <div className="py-2">
                                                <p className="text-black pb-3">Quick Review</p>
                                                <label className="review-checkbox cursor" >
                                                    <input type="checkbox"
                                                        name="brand1"
                                                        className="checkbox"
                                                    />
                                                    <span>Good</span>
                                                </label>

                                                <label className="review-checkbox cursor">
                                                    <input type="checkbox"
                                                        name="brand1"
                                                        className="checkbox"
                                                    />
                                                    <span>Time to deliver</span>
                                                </label>

                                                <label className="review-checkbox cursor">
                                                    <input type="checkbox"
                                                        name="brand1"
                                                        className="checkbox"
                                                    />
                                                    <span>Too much of calling</span>
                                                </label>
                                            </div>
                                            <div className="pt-2 pb-0">
                                                <p className="text-black fw-bold fs-7">Delivery tips for your delivery partner</p>
                                                <div className="py-3">
                                                    <label className="review-checkbox cursor" >
                                                        <input type="radio"
                                                            name="brand1"
                                                        />
                                                        <span>₹15</span>
                                                    </label>

                                                    <label className="review-checkbox cursor" >
                                                        <input type="radio"
                                                            name="brand1"
                                                        />
                                                        <span>₹20</span>
                                                    </label>

                                                    <label className="review-checkbox cursor" >
                                                        <input type="radio"
                                                            name="brand1"
                                                        />
                                                        <span>₹30</span>
                                                    </label>

                                                    <label className="review-checkbox cursor" >
                                                        <input type="radio"
                                                            name="brand1"
                                                        />
                                                        <span>₹50</span>
                                                    </label>

                                                    <label className="review-checkbox cursor" >
                                                        <input type="radio"
                                                            name="brand1"
                                                        />
                                                        <span>₹100</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="p-2">
                                        <p className="text-black fs-6">Rate for restaurant</p>

                                        <div className="d-flex align-items-center pt-3">
                                            <div className="px-1">
                                                <img src={require("../../../assets/icon/tray.png")} className="resta-img" />
                                            </div>
                                            <div className="px-1">
                                                <p className="text-black">Restaurant name</p>
                                                <div className="d-flex align-items-center">
                                                    <p className="text-orange pe-1">4 ★</p>
                                                    <p className="oneline "><small className="ps-1  border-left text-gray">chennai</small></p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="pt-2">
                                            <div className="flex py-2 text-center">
                                                <Rating
                                                    name="hover-feedback"
                                                    value={value}
                                                    precision={1}
                                                    onChange={(event, newValue) => {
                                                        SetValue(newValue);
                                                    }}
                                                    onChangeActive={(event, newHover) => {
                                                        SetHover(newHover);
                                                    }}
                                                />
                                                {/* <div className="ms-auto">
                        <p className="text-black fs-7">
                            {value !== null && labels[hover !== -1 ? hover : value]}
                        </p>
                    </div> */}
                                            </div>

                                            <div className="py-2">
                                                <p className="text-black pb-3">Quick Review</p>
                                                <label className="review-checkbox cursor" >
                                                    <input type="checkbox"
                                                        name="brand1"
                                                        className="checkbox"
                                                    />
                                                    <span>Good</span>
                                                </label>

                                                <label className="review-checkbox cursor">
                                                    <input type="checkbox"
                                                        name="brand1"
                                                        className="checkbox"
                                                    />
                                                    <span>Package Demaged</span>
                                                </label>

                                                <label className="review-checkbox cursor">
                                                    <input type="checkbox"
                                                        name="brand1"
                                                        className="checkbox"
                                                    />
                                                    <span>Order item missing</span>
                                                </label>
                                            </div>

                                            <textarea
                                                name="review"
                                                id=""
                                                cols={30}
                                                rows={2}
                                                placeholder="Say any compliments or your complaints"
                                                onChange={(event) => { SetReviewText(event.target.value) }}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2 center mb-3">
                                    <div className="bg-prime1 px-4 py-2 radius w-sm-50 cursor ">
                                        <p className="text-white fs-7 text-center fw-bold">Submit</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <ReviewModal
                                onSubmit={(data) => {
                                    console.log("review on submit on product detail : ", data);
                                    SetReview(false);
                                    // review.push(data);
                                }}
                            />
                        )}
                    </div>
                </Dialog>

                <Modal open={track} onClose={() => { SetTrack(false) }} className="center">
                    <div className="scrolling-card ">
                        <div className="row align-center bg-sm-primary p-3 ">
                            <div className="col-10 p-0">
                                <h6 className="text-white">Track Orders</h6>
                            </div>
                            <div
                                className="col-2 text-right cursor p-0"
                                onClick={() => { SetTrack(false) }}
                            >
                                <Ionicons name="close" size={20} color="white" />
                            </div>
                        </div>
                        <div className="bg-white p-2">
                            <div className="border-bottom row align-items-center pb-2">
                                <div className="col-6">
                                    <p> <small>4 May, 2022</small></p>
                                </div>
                                <div className="col-6 text-end">
                                    <p><small>Order ID: 5AC22156C</small></p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="end cursor align-items-center pt-2">
                                    <AntDesign name="questioncircleo" size={11} color="#0058b0" />
                                    <p className="mb-0 ps-1 text-prime1">Need help</p>
                                </div>
                                <div className="col-3">
                                    <img src={require("../../../assets/img/berries.png")} className="prod_img" />
                                </div>
                                <div className="col-9">
                                    <p className="fw-bold">Fresh strawberry fruits</p>
                                    <div className="d-flex">
                                        <p className="text-dark fw-bold pt-1 mb-0">₹500.00</p>

                                    </div>

                                </div>
                            </div>

                            <div className="order-track">
                                <div className="order-track-step">
                                    <div className="order-track-status">
                                        <span className="order-track-status-dot completed"></span>
                                        <span className="order-track-status-line completed"></span>
                                    </div>
                                    <div className="order-track-text">
                                        {/* <div className="d-flex">
                                                <div>
                                                    <img src={require("../../../assets/icon/new/list.png")} className="track-icon" />
                                                </div> */}
                                        <div className="ps-2 cursor" onClick={() => {
                                            console.log("Click :", !isActive)
                                            setIsActive(!isActive);
                                        }}>
                                            <p className="text-dark">Order Placed</p>
                                            <p className="">
                                                Tues, 30th Aug, 2022
                                            </p>
                                        </div>
                                        {isActive == true ? (
                                            <div className="ps-2" >
                                                <p className=""><small>Order Details Order Arrived by maximum 10days Order Details Order Arrived by maximum 10days Order Details Order Arrived by maximum 10days</small></p>
                                            </div>
                                        ) : null}
                                        {/* </div> */}
                                    </div>
                                </div>

                                <div className="order-track-step">
                                    <div className="order-track-status">
                                        <span className="order-track-status-dot current"></span>
                                        <span className="order-track-status-line current"></span>
                                    </div>
                                    <div className="order-track-text">
                                        {/* <div className="d-flex">
                                                <div>
                                                    <img src={require("../../../assets/icon/new/box.png")} className="track-icon" />
                                                </div> */}
                                        <div className="ps-2">
                                            <p className="text-dark">Processed</p>
                                            <p className="">
                                                Tues, 30th Aug, 2022
                                            </p>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="order-track-step">
                                    <div className="order-track-status">
                                        <span className="order-track-status-dot"></span>
                                        <span className="order-track-status-line"></span>
                                    </div>
                                    <div className="order-track-text">
                                        {/* <div className="d-flex">
                                                <div>
                                                    <img src={require("../../../assets/icon/new/motorcycle.png")} className="track-icon" />
                                                </div> */}
                                        <div className="ps-2">
                                            <p className="text-dark">Shipped</p>
                                            <p className="">
                                                Fri, 2nd Sep, 2022
                                            </p>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="order-track-step">
                                    <div className="order-track-status">
                                        <span className="order-track-status-dot"></span>
                                        <span className="order-track-status-line"></span>
                                    </div>
                                    <div className="order-track-text">
                                        {/* <div className="d-flex">
                                                <div>
                                                    <img src={require("../../../assets/icon/new/package.png")} className="track-icon" />
                                                </div> */}
                                        <div className="ps-2">
                                            <p className="text-dark">Delivered</p>
                                            <p className="">
                                                Mon, 5th Sep, 2022
                                            </p>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal>

                <div>
                    {["right", "bottom"].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={(event) => { toggleDrawer(anchor, false, event); }}
                                onOpen={(event) => { toggleDrawer(anchor, true, event); }}
                                className="variant-modal"
                            >
                                <div className="row ">
                                    <div className="sticky_drawer bg-fff">
                                        {/* <div className="center">
                                        <hr className="hr-drawer" />
                                    </div> */}
                                        <div className=" d-flex p-2 pt-0 pb-3 p-md-3 align-items-center">
                                            <h5 className="mb-0">Variantions</h5>
                                            <div className="ms-auto ">
                                                <div className="cursor" onClick={(event) => {
                                                    toggleDrawer(anchor, false, event);
                                                }}>
                                                    <Ionicons name="close" size={20} color="gray" />
                                                    {/* <p className="mb-0 ps-1">Close</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Variants />
                                </div>
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>


                <Modal open={tracking_modal} onClose={() => { SetTrackingModal(false) }} className="center">
                    <div className="scrolling-card ">
                        <HyperLocalTracking onClose={() => { SetTrackingModal(false) }} />
                    </div>
                </Modal>

            </div>

            <div className="bottom-fix p-3 bg-prime1 shadow md-none sm-block cursor"
                onClick={() => {
                    restaurant ? (
                        SetTrackingModal(true)
                    ) : (
                        SetTrack(true)
                    )
                }}>
                <div className="center">
                    <img src={require("../../../assets/icon/tracking2.png")} className="bank-img" />
                    <p className="mb-0 text-white fw-bold fs-6 ps-2">Track now</p>
                </div>
            </div>
            {/* <p className="mb-0 text-prime1 fw-bold fs-7">REORDER</p> */}
        </div>



    );
}
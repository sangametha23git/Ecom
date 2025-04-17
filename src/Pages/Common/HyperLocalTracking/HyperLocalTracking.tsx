import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
    Ionicons, Entypo, Fontisto, AntDesign, FontAwesome, MaterialCommunityIcons, Feather, MaterialIcons, FontAwesome5
} from "@expo/vector-icons";
import { Dialog, Drawer, Modal, SwipeableDrawer, Slide } from "@material-ui/core";
import { LoadScript, GoogleMap, Polygon, DirectionsRenderer } from "@react-google-maps/api";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableBottomSheet from '@geomatico/react-swipeable-bottom-sheet';
// import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-end", // push the dialog to bottom
        },

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

function Transition(props) {
    return <Slide direction="up" timeout={500} {...props} />;
}

const styles = {
    title: {
        backgroundColor: '#00bcd4',
        padding: '16px 0',
        boxSizing: 'border-box',
        color: 'white',
        minHeight: '64px',
        fontSize: '24px',
        textAlign: 'center'
    },
    text: {
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        fontSize: '18px',
        minHeight: '50vh'
    }
};

export default function HyperLocalTracking(props: any) {
    const classes = useStyles();
    const context = useContext(DataContext);
    const [bottom_swipe, SetBottomSwipe] = useState(false);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [track, SetTrack] = useState(false)
    const [pickup, SetPickup] = useState("Erode");
    const [delivery, SetDelivery] = useState("Pallipalayam");
    const containerStyle = {
        width: '100%',
        height: '90vh'
    }; const [map_position, SetMapPosition] = useState({
        center: {
            lat: 11.342423,
            lng: 77.728165,
        },
        zoom: 11
    });
    const [order_collect, SetOrderCollect] = useState(false);
    const [delivered, SetDelivered] = useState(false);
    const [rating, SetRating] = useState(false);
    const [reached, SetReached] = useState(false);
    const [value, SetValue] = useState(0);
    const [hover, SetHover] = useState("-1");
    const [review_text, SetReviewText] = useState("");
    const [notes_open, SetNotesOpen] = useState(false);
    const [assign, SetAssign] = useState(false);


    useEffect((event: any) => {
        console.log("HyperLocalTracking On mount :", props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(() => {
            SetAssign(true);
            console.log("Assign timeout called!")
        }, 10000);
        setTimeout(() => {
            SetReached(true);
            console.log("shop Reached timeout called!")
        }, 20000);
        setTimeout(() => {
            SetOrderCollect(true);
            SetNotesOpen(true);
            console.log("Order Collect timeout called!")
        }, 30000);
        setTimeout(() => {
            SetDelivered(true);
            console.log("Order delivered timeout called!")
        }, 35000);
        setTimeout(() => {
            SetRating(true);
            console.log("Rating timeout called!")
        }, 40000);
    }, []);



    return (
        <div className="w-100 px-sm-0">

            <div className="bg-fff p-2 sticky-top shadow-bottom">
                <div className="d-flex py-2 pb-0">
                    <div
                        className="cursor px-1"
                        onClick={() => { props.onClose() }}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={18} color="black" />
                    </div>
                    <div className="ps-1 pe-0 w-100">
                        <p className="fs-7 text-dark mb-0 fw-500">Order ID: #012356</p>

                        <div className="d-flex align-items-center ">
                            <p className="text-gray pe-1">06:45 pm | 2 Item | ₹183</p>
                        </div>
                    </div>
                    <div className="ms-auto d-flex align-items-center">
                        <div className="d-flex align-items-center me-2">
                            <AntDesign name="customerservice" size={18} color="black" />
                            <p className="text-black fw-bold  ps-1 cursor">HELP</p>
                        </div>
                        <div className="p-1 cursor">
                            <AntDesign name="infocirlceo" size={20} color="#007dae" />
                        </div>
                    </div>
                </div>
            </div>
            {rating ? (
                <div className="">

                    <div className="text-center p-4 bg-light-custom-green sticky-sm-60px">
                        <h5 className="text-green">Your order is delivered!</h5>
                    </div>
                    <div className="p-2 row px-md-3 px-sm-2">
                        <div className="mt-2 p-2 col-md-6">
                            <p className="text-black fs-7">Rate for delivery service</p>
                            <div className="d-flex align-items-center pt-2">
                                <div className="px-1">
                                    <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
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

                            </div>
                        </div>


                        <div className="p-2 col-md-6">
                            <p className="text-black fs-7">Rate for restaurant food</p>

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
                <div className="row p-0 ">
                    <div className="col-md-7 col-12 p-0">
                        <LoadScript
                            googleMapsApiKey="AIzaSyC37EQ5KAX63pqvDFLC5EOSe3znJ0ebFVg"
                        >

                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={map_position.center}
                                zoom={map_position.zoom}
                                options={{
                                    streetViewControl: false,
                                    zoomControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false
                                }}
                            >
                                <div className="map-over">
                                    {order_collect ? (
                                        <div className="bg-fff">
                                            <div className="row align-items-center  pt-3 px-2 pb-2">

                                                <div className="col-1 p-0 center">
                                                    <img src={require("../../../assets/icon/send1.png")} className="free-shipping-icon" />
                                                </div>
                                                <div className="col-11">
                                                    <p className="text-gray "><b className="fs-7 text-dark">Ganapathi</b> is on the way to deliver your order.</p>
                                                </div>
                                            </div>

                                        </div>
                                    ) : (
                                        reached ? (
                                            null
                                        ) : (
                                            assign ? (
                                                <div className="bg-fff">
                                                    <div className="row align-items-center pt-3 px-2 pb-2">

                                                        <div className="col-1 p-0 center">
                                                            <img src={require("../../../assets/icon/send.png")} className="free-shipping-icon" />
                                                        </div>
                                                        <div className="col-11">
                                                            <p className="text-gray "><b className="fs-7 text-dark">Ganapathi</b> is on the way to pickup your order.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            ) : (
                                                <div className="bg-fff">
                                                    <div className="row align-items-center  pt-3 px-2 pb-2">

                                                        <div className="col-1 p-0 center">
                                                            <img src={require("../../../assets/icon/looking.png")} className="free-shipping-icon" />
                                                        </div>
                                                        <div className="col-11">
                                                            <p className="text-gray ">We are looking for a delivery partner to pick your order.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        )
                                    )}

                                </div>

                                <DirectionsRenderer
                                    options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                                        destination: delivery,
                                        origin: pickup,
                                        travelMode: "DRIVING",
                                        onZoomChanged: false
                                    }}
                                    callback={true}
                                    // optional
                                    onLoad={directionsRenderer => {
                                        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                    }}
                                    // optional
                                    onUnmount={directionsRenderer => {
                                        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                    }}
                                />

                            </GoogleMap>

                            <div className="map-over center sm-block md-none">
                                {/* <button className="btn p-2 bg-prime1 fw-bold text-white fs-7 bottom-fixed left-none shadow radius mb-2 w-75" onClick={(event) => {
     SetTrack(true);
 }}>View Tracking Details
 </button> */}

                                <SwipeableBottomSheet overflowHeight={320}>
                                    <div className="p-2 bg-fff sticky-top custom-swipe-shadow">
                                        <div className="center d-md-none d-sm-block pb-3">
                                            <hr className="hr-drawer" />
                                        </div>

                                        <div className="d-flex align-items-cetner px-2">
                                            <h6 className="mb-0">Delivery in 25 mins</h6>
                                            <div className="ms-auto">
                                                <p className="mb-0 px-2 py-1 text-green bg-light-custom-green  fw-bold radius">ON TIME</p>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-1">
                                            <div className="d-flex align-items-center">
                                                <Ionicons name="home-outline" size={14} color="#777" />
                                                <p className="text-dark ps-1">Home</p>
                                            </div>

                                            <p><small className="text-gray">28, Ganapathi Street, Karungalpalayam, Erode - 638009</small></p>
                                        </div>

                                        <div className="py-3 px-2">
                                            <div className="progress">
                                                <div className={reached ? "progress-bar w-50 bg-prime1" : "progress-bar w-25 bg-prime1"}></div>
                                            </div>
                                        </div>

                                        <div className="p-2">
                                            <div className="border p-2 radius">
                                                {order_collect ? (null) : (
                                                    <div className="d-flex pb-3 border-bottom">
                                                        <div className=" border radius p-0">
                                                            <img src={require("../../../assets/img/food8.jpg")} className="delivery-img" />
                                                        </div>
                                                        <div className=" px-2">
                                                            <div className="d-flex align-items-center">
                                                                <p className="text-darkgray"><b className="text-dark">Erode Chicken Center</b> is preparing your food orders.</p>
                                                                <div className="ps-2 py-2 cursor center">
                                                                    <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {order_collect ? (
                                                    <div>
                                                        <div className={order_collect ? "d-flex pb-3" : "d-flex pt-3"}>
                                                            <div className="border radius p-0">
                                                                <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
                                                            </div>
                                                            <div className="px-2">
                                                                <div className="d-flex align-items-center">
                                                                    <p className="text-darkgray"><b className="text-dark fs-7">Ganapathi</b> is on the way to deliver your order.</p>
                                                                    <div className="ps-2 py-2 cursor center">
                                                                        <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (

                                                    reached ? (
                                                        <div className="d-flex pt-3">
                                                            <div className="border radius p-0">
                                                                <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
                                                            </div>
                                                            <div className="px-2">
                                                                <div className="d-flex align-items-center">
                                                                    <p className="text-darkgray"><b className="text-dark fs-7">Ganapathi</b> is waiting to pickup your order.</p>
                                                                    <div className="ps-2 py-2 cursor center">
                                                                        <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        assign ? (
                                                            <div className="d-flex pt-3">
                                                                <div className="border radius p-0">
                                                                    <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
                                                                </div>
                                                                <div className="px-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <p className="text-darkgray"><b className="text-dark fs-7">Ganapathi</b> is on the way to pickup your order.</p>
                                                                        <div className="ps-2 py-2 cursor center">
                                                                            <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="d-flex pt-3">
                                                                <div className="border radius p-0 ">
                                                                    <div className="delivery-img center">
                                                                        <FontAwesome5 name="user" size={16} color="#555" />
                                                                    </div>
                                                                </div>
                                                                <div className="px-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <p className="text-darkgray">We are looking for a delivery partner to pick your order.</p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )
                                                )}


                                            </div>

                                            <div className="p-2">
                                                <div className="d-flex pt-3 align-items-center cursor"
                                                    onClick={() => {
                                                        if (order_collect) {
                                                            SetNotesOpen(true)
                                                        } else {
                                                            SetNotesOpen(!notes_open);
                                                        }
                                                    }}
                                                >
                                                    <div className="pe-1">
                                                        <MaterialCommunityIcons name="message-text-outline" size={16} color="#666" />
                                                    </div>
                                                    <p className=" text-dark">Delivery Notes</p>
                                                    <div className="ms-auto">
                                                        {notes_open ? (
                                                            <MaterialIcons name="keyboard-arrow-up" size={20} color="#555" />
                                                        ) : (
                                                            <MaterialIcons name="keyboard-arrow-down" size={20} color="#555" />
                                                        )}
                                                    </div>
                                                </div>
                                                {notes_open ? (
                                                    <div className="pt-2">
                                                        <textarea value="Leave orders at the door" rows={2} readOnly></textarea>
                                                    </div>
                                                ) : (null)}

                                            </div>
                                        </div>

                                    </div>
                                </SwipeableBottomSheet>
                            </div>

                        </LoadScript>
                    </div>
                    <div className="col-md-5 sm-none md-block pt-3">

                        <div className="d-flex align-items-cetner px-2">
                            <h6 className="mb-0">Delivery in 25 mins</h6>
                            <div className="ms-auto">
                                <p className="mb-0 px-2 py-1 text-green bg-light-custom-green  fw-bold radius">ON TIME</p>
                            </div>
                        </div>
                        <div className="px-2 pt-1">
                            <div className="d-flex align-items-center">
                                <Ionicons name="home-outline" size={14} color="#777" />
                                <p className="text-dark ps-1">Home</p>
                            </div>

                            <p><small className="text-gray">28, Ganapathi Street, Karungalpalayam, Erode - 638009</small></p>
                        </div>

                        <div className="py-3 px-2">
                            <div className="progress">
                                <div className={reached ? "progress-bar w-50 bg-prime1" : "progress-bar w-25 bg-prime1"}></div>
                            </div>
                        </div>

                        <div className="p-2">
                            <div className="border p-2 radius">
                                {order_collect ? (null) : (
                                    <div className="d-flex pb-3 border-bottom">
                                        <div className=" border radius p-0">
                                            <img src={require("../../../assets/img/food8.jpg")} className="delivery-img" />
                                        </div>
                                        <div className=" px-2">
                                            <div className="d-flex align-items-center">
                                                <p className="text-darkgray"><b className="text-dark">Erode Chicken Center</b> is preparing your food orders.</p>
                                                <div className="ps-2 py-2 cursor center">
                                                    <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {order_collect ? (
                                    <div>
                                        <div className={order_collect ? "d-flex pb-3" : "d-flex pt-3"}>
                                            <div className="border radius p-0">
                                                <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
                                            </div>
                                            <div className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <p className="text-darkgray"><b className="text-dark fs-7">Ganapathi</b> is on the way to deliver your order.</p>
                                                    <div className="ps-2 py-2 cursor center">
                                                        <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (

                                    reached ? (
                                        <div className="d-flex pt-3">
                                            <div className="border radius p-0">
                                                <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
                                            </div>
                                            <div className="px-2">
                                                <div className="d-flex align-items-center">
                                                    <p className="text-darkgray"><b className="text-dark fs-7">Ganapathi</b> is waiting to pickup your order.</p>
                                                    <div className="ps-2 py-2 cursor center">
                                                        <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        assign ? (
                                            <div className="d-flex pt-3">
                                                <div className="border radius p-0">
                                                    <img src={require("../../../assets/img/prof.jpg")} className="delivery-img" />
                                                </div>
                                                <div className="px-2">
                                                    <div className="d-flex align-items-center">
                                                        <p className="text-darkgray"><b className="text-dark fs-7">Ganapathi</b> is on the way to pickup your order.</p>
                                                        <div className="ps-2 py-2 cursor center">
                                                            <img src={require("../../../assets/icon/phone.png")} className="bank-img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="d-flex pt-3">
                                                <div className="border radius p-0 ">
                                                    <div className="delivery-img center">
                                                        <FontAwesome5 name="user" size={16} color="#555" />
                                                    </div>
                                                </div>
                                                <div className="px-2">
                                                    <div className="d-flex align-items-center">
                                                        <p className="text-darkgray">We are looking for a delivery partner to pick your order.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                )}


                            </div>

                            <div className="p-2">
                                <div className="d-flex pt-3 align-items-center cursor"
                                    onClick={() => {

                                    }}
                                >
                                    <div className="pe-1">
                                        <MaterialCommunityIcons name="message-text-outline" size={16} color="#666" />
                                    </div>
                                    <p className=" text-dark">Add Delivery Notes</p>
                                    <div className="ms-auto">
                                        <MaterialIcons name="keyboard-arrow-down" size={20} color="#555" />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <textarea placeholder="Example, Leave orders at the door" rows={2}></textarea>

                                </div>

                            </div>
                        </div>

                    </div>
                </div >
            )
            }



        </div >
    );
}
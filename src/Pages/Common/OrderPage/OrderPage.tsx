import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { Ionicons, Entypo, AntDesign, Feather, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dialog, Modal } from "@material-ui/core";
import ReviewModal from "../Review/ReviewModal";
import OrderFilter from "../OrderFilter/OrderFilter";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../utils/Api";

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

export default function OrderPage(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();

    const [filter_open, SetFilterOpen] = useState(false);
    const [review, SetReview] = useState(false);
    const [history, SetHistory] = useState(false);
    const [width, SetWidth] = React.useState(innerWidth);
    const [order_data, SetOrderData] = useState([
        {
            id: 1,
            order_id: "OSG15",
            seller: "Cake Shop",
            shipping: "Hyper Local",
            location: "Ooty",
            Product_name: "Black Forest Cake Piece",
            price: "200",
            track: "",
            details: "",
            variants: [
                {
                    quantity: "500G",
                    color: "Red",
                    // size:"m"
                },
            ],
            rating: "",
            review: "",
            product_img: require("../../../assets/img/berries.png"),
        },
        {
            id: 1,
            order_id: "OSG26",
            shipping: "Hyper Local",
            delivery: "Erode",
            Product_name: "Formal Shirts",
            price: "368",
            track: "",
            details: "",
            variants: [
                {
                    quantity: "500G",
                    color: "Orange",
                    // size:"m"
                },
            ],
            seller: "Super Grocery",
            rating: "",
            review: "",
            product_img: require("../../../assets/img/formal.jpeg"),
        },
    ]);
    const [confirm_cancel, SetConfirmCancel] = useState({
        open: false,
        data: ""
    });
    const [ordersData, SetOrdersData] = useState([
        {
            id: 1,
            order_id: "OSG15",
            shipping: "Hyper Local",
            delivery: "Ooty",
            Product_name: "Fresh Berries Premium brands",
            price: "200",
            track: "",
            details: "",
            variants: [
                {
                    quantity: "500G",
                    color: "Red",
                    // size:"m"
                },
            ],
            seller: "Super Grocery",
            rating: "",
            review: "",
            product_img: require("../../../assets/img/berries.png"),
            order_status: "Delivered"
        },
        {
            id: 1,
            order_id: "OSG26",
            shipping: "Hyper Local",
            delivery: "Erode",
            Product_name: "Formal Shirts",
            price: "368",
            track: "",
            details: "",
            variants: [
                {
                    quantity: "500G",
                    color: "Orange",
                    // size:"m"
                },
            ],
            seller: "Super Grocery",
            rating: "",
            review: "",
            product_img: require("../../../assets/img/formal.jpeg"),
            order_status: "Delivered"
        },
    ])
    // const [orders_accordian, SetOrdersAccordian] = useState({
    //     open: false,
    //     id: "",
    // });
    const [order_view, SetOrderView] = useState("history");


    useEffect(() => {
        console.log("OrderPage On mount :", props);
        console.log("OrderPage context :", context);
        // get_init();
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);

    async function get_init() {
        let pass_data = {
            get: {
                page: 1,
                view: "history",
                // view: "current"
            },
        };
        let data_res: any = await api("/orders", pass_data);
        console.log("get orders response :", data_res.response);
        SetOrderData(data_res.response.orders);
    }

    async function OrderCancel(id) {
        let pass_data = {
            get: {
                order_id: id,
            },
        };
        let data_res: any = await api("/cancel_order", pass_data);
        console.log("get cancel_order response :", data_res.response);
        get_init();
    }


    return (

        <div className="mb-3 bg-gray-300 p-sm-0">



            <div className="row p-1 align-items-center pt-2 pb-2 bg-fff sticky-md-110px sticky-sm-60px">

                <h6 className="mb-0 pb-2">My Orders</h6>



                <div className="col-10 pe-0">
                    <div className="input-icons from-group ">
                        <input
                            type="text"
                            className="form-control search-bar"
                            placeholder="Search here"
                        />
                        <div className="cursor px-2 border-left center">
                            <Ionicons name="md-search" size={18} color="#005d86" />
                        </div>
                    </div>
                </div>
                <div className="md-none col-2" onClick={() => { SetFilterOpen(true) }}>
                    <div className="center cursor">
                        <Ionicons name="options-outline" size={20} color="black" />
                        {/* <p className="mb-0 pl-1 text-black">Filter</p> */}
                    </div>

                </div>
                <div className="row text-center pt-2">
                    <div className="col-6 p-0" onClick={() => { SetOrderView("history") }}>
                        <p className={order_view == "history" ? "mb-0 pb-2 fs-7 fw-bold border-bottom-prime1 text-prime1 cursor" : "mb-0 pb-2 fs-7 fw-bold border-bottom  cursor"}>History</p>
                    </div>
                    <div className="col-6 p-0" onClick={() => { SetOrderView("current") }}>
                        <p className={order_view == "current" ? "mb-0 pb-2 fs-7 fw-bold border-bottom-prime1 text-prime1 cursor" : "mb-0 pb-2 fs-7 fw-bold border-bottom cursor "}>Upcoming</p>
                    </div>
                </div>

            </div>




            {/* <div className="searchbox">
                <input
                  type="text"
                  className="form-control ordersearch"
                  placeholder="Search your orders"
                />
                <div className="cursor flex align-center p-3 pr-0">
                  <Ionicons name="md-search" size={18} color="#005d86" />
                  <p className="pl-1 text-primary">Search</p>
                </div>
              </div> */}

            <div className="row pt-2">
                <div className="col-md-3 sm-d-none md-d-block px-1">
                    <div className="bg-fff radius p-3 sticky-115px">
                        <h6 className=" py-2">Filter</h6>
                        <OrderFilter />
                    </div>

                </div>
                <div className="col-md-9 px-0 ">

                    <div className="row">
                        {ordersData.map((data, index) => (
                            <div className="col-md-6 p-1" key={index}>
                                <div className="bg-fff radius p-2">
                                    <Link to={"/order_details"}>
                                        <div className="row">
                                            <div className="col-md-3 col-3 p-0" >


                                                <div className="cart_img">
                                                    {/* <img src={"https://cdn.1superapp.com/images/320/" + vendor_data.section_image_url} className="prod_img w-100" /> */}
                                                    <img src={require("../../../assets/img/hd-wallpaper.jpg")} className="w-100 radius" />
                                                </div>
                                            </div>

                                            <div className="col-md-9 col-9 pr-0">
                                                <p className="mb-0 text-dark oneline">
                                                    {/* {vendor_data.name}
                                            ({vendor_data.length} Item) */}
                                                    Cakes Shop (2)
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-8 pl-0">
                                                        {/* <p>{data.place}</p> */}
                                                        <p>Erode</p>
                                                    </div>
                                                    <div className="col-4 p-0 text-right cursor">
                                                        <p className="extra-small">20 Oct 2022</p>
                                                    </div>
                                                </div>

                                                <hr className="cart_shop_border" />

                                                <p className="text-green extra-small fw-bold ">{data.order_status}
                                                    {/* <small className={data.order_status == "Cancelled" ? "ps-1 text-red fw-bold" : "ps-1 text-green fw-bold"}>{data.order_status}</small> */}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="py-2">
                                            <div className="row w-100 align-items-center pb-2">
                                                <div className="col-6 col-md-7">
                                                    <div className="d-flex align-items-center">
                                                        {/* <Entypo name="dot-single" size={24} color="#555" /> */}
                                                        <p className="">2</p>
                                                        <AntDesign name="close" size={10} color="black" />
                                                        <p className="oneline px-1">Black Forest Cake Piece</p>
                                                    </div>

                                                </div>
                                                <div className="col-6 col-md-5 pe-1">
                                                    <p className="text-right text-dark ">
                                                        ₹ 200
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row w-100 align-items-center pb-2">
                                                <div className="col-6 col-md-7">
                                                    <div className="d-flex align-items-center">
                                                        {/* <Entypo name="dot-single" size={24} color="#555" /> */}
                                                        <p className="">2</p>
                                                        <AntDesign name="close" size={10} color="black" />
                                                        <p className="oneline px-1">Black Forest Cake Piece</p>
                                                    </div>

                                                </div>
                                                <div className="col-6 col-md-5 pe-1">
                                                    <p className="text-right text-dark fw-bold">
                                                        ₹ 200
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>


                                    < div className="row align-items-center bg-light-color p-2 radius" >
                                        <div className="col-8 pl-0">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={require("../../../assets/icon/fast-truck.png")}
                                                    className="truck-icon"
                                                />
                                                <p className="px-2 border-right extra-small">Hyperlocal</p>
                                                {history ? (
                                                    <p className="pl-1">
                                                        <small>30 July</small>
                                                    </p>
                                                ) : (
                                                    <p className="pl-1">
                                                        <small>4pm</small>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 p-0 text-right">
                                            <div className="end">
                                                <p className="v-small">Total : </p>
                                                <p className="ps-1 fw-bold text-dark ">₹ 400</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {ordersData.map((data, index) => (
                            <div className="col-md-6 p-1" key={index}>
                                <div className="bg-fff radius p-2 w-100">
                                    <Link to={"/order_details"}>
                                        <div className="row pt-2">
                                            <div className="col-md-3 col-2 p-0">
                                                <div className="cart_img">
                                                    <img src={data.product_img} className="w-100 radius" />
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-10 pe-0">
                                                {/* <div className="col-3 md-none">
                        <div className="img-box">
                          <img src={data.product_img} />
                        </div>
                      </div> */}
                                                <p className="oneline text-dark double">
                                                    <b>{data.Product_name}</b>
                                                </p>

                                                <div className="d-flex align-items-center">
                                                    <p className="oneline">{data.delivery}</p>


                                                </div>
                                                <p className="oneline">
                                                    <small>Sold by: {data.seller}</small>
                                                </p>

                                                <div className="d-flex align-items-center py-1">
                                                    <div className="pe-2">
                                                        <p className="mb-0">Qty: 1</p>
                                                    </div>
                                                    <div className="ps-2 ms-auto">
                                                        <p className="extra-small fw-bold text-green">Processing</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        < div className="row align-items-center bg-light-color p-2 radius" >
                                            <div className="col-8 pl-0">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={require("../../../assets/icon/fast-truck.png")}
                                                        className="truck-icon"
                                                    />
                                                    <p className="px-2 border-right extra-small">Hyperlocal</p>
                                                    {history ? (
                                                        <p className="pl-1">
                                                            <small>30 July</small>
                                                        </p>
                                                    ) : (
                                                        <p className="pl-1">
                                                            <small>6.30 pm</small>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-4 p-0 text-right">
                                                <div className="end">
                                                    <p className="v-small">Total : </p>
                                                    <p className="ps-1 fw-bold text-dark ">₹ {data.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <Modal onClose={() => { SetReview(false) }} open={review} className="center">
                <div className={width < 720 ? "scrolling-card" : "bg-white"}>
                    <div
                        className={
                            width < 720
                                ? "bg-sm-primary row p-3  align-center"
                                : "row p-3  align-center"
                        }
                    >
                        <div className="col-8 text-white">
                            <h5>Rating & Reviews</h5>
                        </div>
                        <div
                            className="col-4 text-right cursor p-0"
                            onClick={() => { SetReview(false) }}
                        >
                            <Ionicons
                                name="ios-close"
                                size={20}
                                color={width < 720 ? "white" : "black"}
                            />
                        </div>
                    </div>
                    <ReviewModal
                        onSubmit={(data) => {
                            console.log("review on submit on product detail : ", data);
                            SetReview(false)
                            // review.push(data);
                        }}
                    />
                </div>
            </Modal>

            <Dialog open={filter_open} onClose={() => { SetFilterOpen(false) }} classes={{ container: classes.root, paper: classes.paper }}>
                <div className="bg-fff pb-5">
                    <div className="row pt-3">
                        <div className="col-6">
                            <h6>Filter</h6>
                        </div>
                        <div className="col-6 cursor text-right md-none" onClick={() => { SetFilterOpen(false) }}>
                            <Ionicons name="close" size={24} color="gray" />
                        </div>
                    </div>
                    <OrderFilter />
                </div>
            </Dialog>


            <Dialog open={confirm_cancel.open} data={confirm_cancel.data} onClose={() => {
                SetConfirmCancel({
                    open: false,
                    data: confirm_cancel.data
                })
            }} classes={{ container: classes.root, paper: classes.paper }}>
                <div className="bg-fff p-3">

                    <div className="text-center pt-2 pb-3">
                        <h6>Do you want to cancel the order!</h6>
                    </div>

                    <div>
                        <textarea name="reasons" className="" placeholder="Reasons of order cancellations"></textarea>
                    </div>

                    <div className="mt-4 text-center ">
                        <div className="btn btn-border" onClick={() => {
                            OrderCancel(confirm_cancel.data);
                            SetConfirmCancel({
                                open: false,
                                data: confirm_cancel.data
                            })
                        }}>
                            Confirm Cancel Order
                        </div>

                        <div className="mt-3">
                            <p className="cursor" onClick={() => {
                                SetConfirmCancel({
                                    open: false,
                                    data: confirm_cancel.data
                                })
                            }}>Close</p>
                        </div>
                    </div>



                </div>
            </Dialog>

        </div>
    );
}
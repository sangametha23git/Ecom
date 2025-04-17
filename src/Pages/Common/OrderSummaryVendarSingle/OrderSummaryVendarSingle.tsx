import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
    MaterialIcons,
    Ionicons,
    Feather,
    Entypo,
} from "@expo/vector-icons";
import Modal from "@material-ui/core/Modal";
import DeliveryType from "../DeliveryType/DeliveryType";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Data } from "@react-google-maps/api";

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

export default function OrderSummaryVendarSingle(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    // const [order_data, SetOrderData] = useState([
    //     {
    //         id: 1,
    //         order_id: "OSG15",
    //         shipping: "Hyper Local",
    //         shippingCharge: 25,
    //         shop_img: require("../../../assets/img/shop4.jpg"),
    //         shop_name: "Shoe Collections",
    //         child: [
    //             {
    //                 name: "Nike Shoe",
    //                 price: 300,
    //                 original_price: 350,
    //                 discount: 50,
    //                 status: "Estimated Delivery by Sep 20, 2021",
    //                 track: "",
    //                 details: "",
    //                 variants: {
    //                     color: "Red & Black",
    //                     size: "10",
    //                     type: "",
    //                     addon: "",
    //                 },
    //                 rating: "",
    //                 review: "",
    //                 img_path: require("../../../assets/img/shoe.png"),
    //                 addbtn: true,
    //                 addcount: 1,
    //                 qty: "1",
    //             },
    //             {
    //                 name: "Nike Shoe",
    //                 price: 300,
    //                 original_price: 350,
    //                 discount: 50,
    //                 status: "Estimated Delivery by Sep 20, 2021",
    //                 track: "",
    //                 details: "",
    //                 variants: {
    //                     color: "Red & Black",
    //                     size: "10",
    //                     type: "",
    //                     addon: "",
    //                 },
    //                 rating: "",
    //                 review: "",
    //                 img_path: require("../../../assets/img/shoe.png"),
    //                 addbtn: true,
    //                 addcount: 1,
    //                 qty: "1",
    //             },
    //         ],
    //     },

    //     {
    //         id: 1,
    //         order_id: "OSG15",
    //         shipping: "Take Away",
    //         shippingCharge: 25,
    //         shop_img: require("../../../assets/img/shop4.jpg"),
    //         shop_name: "Super Grocery Shop",
    //         child: [
    //             {
    //                 name: "Seed Fruits",
    //                 price: 300,
    //                 original_price: 350,
    //                 discount: 50,
    //                 status: "Estimated Delivery by Sep 20, 2021",
    //                 track: "",
    //                 details: "",
    //                 variants: {
    //                     color: "Red & Black",
    //                     size: "10",
    //                     type: "",
    //                     addon: "",
    //                 },
    //                 rating: "",
    //                 review: "",
    //                 img_path: require("../../../assets/img/sub1.jpg"),
    //                 addbtn: true,
    //                 addcount: 1,
    //                 qty: "1",
    //             },
    //             {
    //                 name: "Nike Shoe",
    //                 price: 300,
    //                 original_price: 350,
    //                 discount: 50,
    //                 status: "Estimated Delivery by Sep 20, 2021",
    //                 track: "",
    //                 details: "",
    //                 variants: {
    //                     color: "Red & Black",
    //                     size: "10",
    //                     type: "",
    //                     addon: "",
    //                 },
    //                 rating: "",
    //                 review: "",
    //                 img_path: require("../../../assets/img/shoe.png"),
    //                 addbtn: true,
    //                 addcount: 1,
    //                 qty: "1",
    //             },
    //         ],
    //     },
    // ]);
    const [type, SetType] = useState([
        {
            img_path: require("../../../assets/icon/store.png"),
            name: "Inshop",
            checked: false,
        },
        {
            img_path: require("../../../assets/icon/box.png"),
            name: "Courier",
            checked: false,
        },
        {
            img_path: require("../../../assets/icon/delivery.png"),
            name: "Hyper Local",
            checked: false,
        },
        {
            img_path: require("../../../assets/icon/take-away.png"),
            name: "Take Away",
            checked: false,
        },
        {
            img_path: require("../../../assets/icon/delivery-truck.png"),
            name: "Schedule Hyper Local",
            checked: false,
        },
    ]);
    const [new_address, SetNewAddress] = useState(false);
    const [map_view, SetMapView] = useState(false);
    const [select_delivery, SetSelectDelivery] = useState({});
    const [delivery_type, SetDeliveryType] = useState(false);
    const [order_data, SetOrderData] = useState({
        sections: {
            sections_type: "",
            sections_id: "",
            sections_slug: "",
        },
        restaurant: {
            type: "",
            id: "",
            slug: "",
            subCategory_id: "",
            subCategory: [],
            brand_name: "",
            location: "",
        },
        checkout_data: {
            vendors: [],
            products: []
        },
        addressType: "",
        selected_delivery_address: "",
        vendors_total_amount: "",
    });


    useEffect(() => {
        console.log("OrderSummaryVendarSingle On mount :", props);
        console.log("OrderSummaryVendarSingle On context :", context);
        console.log("OrderSummaryVendarSingle On context :", context.app_data);
        SetOrderData(context.app_data);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);

    return (
        <div className="page-main mb-4">
            <div className="order_summary p-md-5  row">
                <div className="p-3 pb-0">
                    <h5 className="p-0">Shipment of products</h5>
                    <p className="pt-1 pl-0">Order delivery from OneSuper</p>
                    <hr className="cart_shop_border mb-0" />
                </div>
                <div className="col-md-6 p-0">
                    {order_data.checkout_data.vendors.map((data, index) => (
                        <div className="mt-3 bg-fff p-3" key={index}>
                            <div className="row pb-2">
                                <div className="round-shop col-2 p-0">
                                    <img src={"https://cdn.1superapp.com/images/320/" + data.section_image_url} />
                                </div>
                                <div className="pl-1 col-10 pr-0">
                                    <h4 className="mb-0">{data.name}</h4>
                                    <p>Erode</p>
                                </div>
                                {/*  <div className="col-1 pr-0 cursor text-right">
                                   <Ionicons name="close" size={18} color="darkgray" />
                                </div>  */}
                            </div>

                            {data.products.map((prod, prodIndex) => (
                                <div key={prodIndex} className="border-bottom py-2">
                                    <p className="fw-bold oneline">{prod.product_name}</p>
                                    <div className="row align-items-center">
                                        <div className="col-9 pt-2 ps-0">
                                            <p className="text-dark">₹ {prod.price}</p>
                                            {/* <p className="pl-1">
                                            <s>
                                                <sup>₹ {prod.original_price}</sup>
                                            </s>
                                        </p>
                                        <p className="pl-1 text-green">₹{prod.discount} OFF</p> */}
                                        </div>
                                        {/* <div className="col-9 p-0">
                                            <p className="pt-1">
                                                {prod.product_variant_data.map((variant, variant_index) => (
                                                    <small className="pr-1  border-right" key={variant_index}>
                                                        {variant.name}
                                                    </small>
                                                ))}
                                            </p>
                                        </div> */}
                                        <div className="col-3 p-0">
                                            {/*  <p className="">
                                               <b className="text-gray">Qty: {prod.qty}</b>
                                              </p>  */}
                                            <div className="end">
                                                <p className="pr-2"><b className="text-dark">Qty :</b></p>
                                                <p className="">{prod.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <h6 className=" mt-3">Delivery details</h6>
                            <div className="row p-2">
                                <div className="col-5 pl-0 pr-1" onClick={() => { SetDeliveryType(true) }}>
                                    <div className="flex justify-end">
                                        {data.delivery_type.courier_order == true ? (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/box.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        ) : (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/box1.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        )}

                                        {data.delivery_type.hyperlocal_order == true ? (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/delivery.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        ) : (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/delivery1.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        )}

                                        {data.delivery_type.inshop_order == true ? (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/store.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        ) : (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/store1.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        )}

                                        {data.delivery_type.takeaway_order == true ? (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/take-away.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        ) : (
                                            <div className="pr-3">
                                                <img
                                                    src={require("../../../assets/icon/take-away1.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        )}

                                        {data.delivery_type.Schedule == true ? (
                                            <div className="">
                                                <img
                                                    src={require("../../../assets/icon/delivery-truck.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        ) : (
                                            <div className="">
                                                <img
                                                    src={require("../../../assets/icon/delivery-truck1.png")}
                                                    className="w-10"
                                                />
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className="col-7 p-0 text-right">
                                    <p>Delivery charge: ₹{data.shippingCharge}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-6 p-3 mt-3 bg-fff">
                    <h4>Order now</h4>
                    <div className="border-bottom p-1 pt-3 pb-2">
                        <div className="row pb-2">
                            <div className="col-10 p-0">
                                <h6>Delivery to</h6>
                            </div>
                            <div className="col-2 pr-0 text-right">
                                <div className="text-primary cursor" onClick={() => { window.history.go(-1) }}>
                                    <Feather name="edit-3" size={18} color="#333" />
                                </div>
                            </div>
                        </div>
                        <p>
                            <b className="text-dark">{order_data.selected_delivery_address.name}</b>
                        </p>
                        <p className="pt-1 pb-1">
                            {order_data.selected_delivery_address.door_no},
                            {/* {order_data.selected_delivery_address.address}, */}
                            {order_data.selected_delivery_address.city},{order_data.selected_delivery_address.state},
                            {order_data.selected_delivery_address.country}-{order_data.selected_delivery_address.pincode}
                        </p>


                    </div>

                    {/* <div className="mt-2 border-bottom p-3 pt-2">
            <p>
              <b>Pay with</b>
            </p>
            <p className="pt-2">Phone pay ID ****56@lbi</p>
          </div> */}

                    <div className="p-1 pt-3 ">
                        <h6>Price Details</h6>
                        <div className="pt-3">
                            <div className="flex w-100">
                                <div className="w-75">
                                    <p>Subtotal</p>
                                </div>
                                <div className="w-25 justify-end">
                                    <p className="text-right">₹{order_data.checkout_data.vendors_total_amount}</p>
                                </div>
                            </div>
                            <div className="flex w-100 pt-2">
                                <div className="w-75">
                                    <p>Delivery</p>
                                </div>
                                <div className="w-25 justify-end">
                                    <p className="text-right">₹{order_data.discount}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex w-100">
                                <div className="w-75">
                                    <h5>Order Total</h5>
                                </div>
                                <div className="w-25 justify-end">
                                    <h5 className="text-right">₹{order_data.checkout_data.vendors_total_amount}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm-none text-center mt-3">
                        <Link to="/payment">
                            <button className="btn btn-warning w-50">
                                Order Placed & Pay
                            </button>
                        </Link>
                    </div>

                    <div className="mt-3 p-2">
                        <div className="flex align-center bg-light p-2">
                            <MaterialIcons name="verified-user" size={28} color="gray" />
                            <p className="pl-2 text-secondary">
                                Secure & Safe Payments on your One Super. Easy returns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/payment">
                <button className="btn bg-warning bottom-fixed w-100 md-none align-center">
                    Order Placed & Pay
                </button>
            </Link>

            <Dialog
                classes={{ container: classes.root, paper: classes.paper }}
                open={delivery_type}
                onClose={() => {
                    SetDeliveryType(false)
                }}
            >

                <div className="p-1 pb-0">
                    <div className="center sticky_drawer">
                        <hr className="hr-drawer" />
                    </div>
                    <h5 className="p-3">Select Delivery Type</h5>
                    <p className="p-0 btn-group-sm" >
                        {type.map((type, typeindex) => (
                            <button className={type.checked == true ? " px-3 py-2 other radius m-2" : "border px-3 py-2 bg-fff radius m-2 "} key={typeindex} onClick={() => { typeSelect(typeindex) }}>
                                <div className="flex">
                                    <img src={type.img_path} className="w-20" />
                                    <p className="pl-1">{type.name}</p>
                                </div>
                            </button>
                        ))}
                    </p>


                </div>
                <div className="w-100 p-2">
                    <div className=" bg-primary p-2 center mb-2 radius cursor" onClick={() => {
                        SetDeliveryType(false)
                    }}>
                        <p className="fw-bolder text-white mb-0">Change Delivery Type</p>
                    </div>
                </div>

            </Dialog>

        </div>
    );
}
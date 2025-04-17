import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Modal from "@material-ui/core/Modal";
import DeliveryType from "../DeliveryType/DeliveryType";
import Address from "../Address/Address";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bootstrap from "../../../assets/libraries/bootstrap/js/bootstrap";

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
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,

    },
    overflow: "scroll",

  }
}));

export default function OrderSummarySingleAddress(props: any) {
  const classes = useStyles();
  const context = useContext(DataContext);
  const [order_data, SetOrderData] = useState({
    products: [
      {
        id: 1,
        order_id: "OSG15",
        shipping: "Hyper Local",
        shippingCharge: 25,
        name: "Nike Shoe",
        price: 300,
        original_price: 350,
        discount: 50,
        status: "Estimated Delivery by Sep 20, 2021",
        track: "",
        details: "",
        variants: {
          color: "Red & Black",
          size: "10",
          type: "",
          addon: "",
        },
        seller: "Shoe Collections",
        rating: "",
        review: "",
        img_path: require("../../../assets/img/shoe.png"),
        addbtn: true,
        addcount: 1,
        qty: "1",
      },

      {
        id: 2,
        order_id: "OSG15",
        shop_name: "Shoe Collections",
        shipping: "Inshop",
        shippingCharge: 25,
        name: "Berries Premium brands",
        price: 200,
        original_price: 250,
        discount: 50,
        status: "Estimated Delivery by Sep 20, 2021",
        track: "",
        details: "",
        variants: {
          color: "Light Maroon",
          size: "Medium",
          type: "",
          addon: "",
        },
        seller: "Super Grocery",
        rating: "",
        review: "",
        img_path: require("../../../assets/img/sub2.jpg"),
        addbtn: true,
        addcount: 1,
        qty: "1",
      },
    ],
    vendors: [
      {
        id: 1,
        order_id: "OSG15",
        shipping: "Hyper Local",
        shippingCharge: 25,
        shop_img: require("../../../assets/img/grocery_shop6.jpg"),
        shop_name: "Shoe Collections",
        child: [
          {
            name: "Nike Shoe",
            price: 300,
            original_price: 350,
            discount: 50,
            status: "Estimated Delivery by Sep 20, 2021",
            track: "",
            details: "",
            variants: {
              color: "Red & Black",
              size: "10",
              type: "",
              addon: "",
            },
            rating: "",
            review: "",
            img_path: require("../../../assets/img/shoe.png"),
            addbtn: true,
            addcount: 1,
            qty: "1",
          },
          {
            name: "Nike Shoe",
            price: 300,
            original_price: 350,
            discount: 50,
            status: "Estimated Delivery by Sep 20, 2021",
            track: "",
            details: "",
            variants: {
              color: "Red & Black",
              size: "10",
              type: "",
              addon: "",
            },
            rating: "",
            review: "",
            img_path: require("../../../assets/img/shoe.png"),
            addbtn: true,
            addcount: 1,
            qty: "1",
          },
        ],
      },

      {
        id: 1,
        order_id: "OSG15",
        shipping: "Take Away",
        shippingCharge: 25,
        shop_img: require("../../../assets/img/grocery_shop.jpg"),
        shop_name: "Super Grocery Shop",
        child: [
          {
            name: "Seed Fruits",
            price: 300,
            original_price: 350,
            discount: 50,
            status: "Estimated Delivery by Sep 20, 2021",
            track: "",
            details: "",
            variants: {
              color: "Red & Black",
              size: "10",
              type: "",
              addon: "",
            },
            rating: "",
            review: "",
            img_path: require("../../../assets/img/sub1.jpg"),
            addbtn: true,
            addcount: 1,
            qty: "1",
          },
          {
            name: "Nike Shoe",
            price: 300,
            original_price: 350,
            discount: 50,
            status: "Estimated Delivery by Sep 20, 2021",
            track: "",
            details: "",
            variants: {
              color: "Red & Black",
              size: "10",
              type: "",
              addon: "",
            },
            rating: "",
            review: "",
            img_path: require("../../../assets/img/shoe.png"),
            addbtn: true,
            addcount: 1,
            qty: "1",
          },
        ],
      },

      {
        id: 1,
        order_id: "OSG15",
        shipping: "Take Away",
        shippingCharge: 25,
        shop_img: require("../../../assets/img/grocery_shop.jpg"),
        shop_name: "Super Grocery Shop",
        child: [
          {
            name: "Seed Fruits",
            price: 300,
            original_price: 350,
            discount: 50,
            status: "Estimated Delivery by Sep 20, 2021",
            track: "",
            details: "",
            variants: {
              color: "Red & Black",
              size: "10",
              type: "",
              addon: "",
            },
            rating: "",
            review: "",
            img_path: require("../../../assets/img/sub1.jpg"),
            addbtn: true,
            addcount: 1,
            qty: "1",
          },
          {
            name: "Nike Shoe",
            price: 300,
            original_price: 350,
            discount: 50,
            status: "Estimated Delivery by Sep 20, 2021",
            track: "",
            details: "",
            variants: {
              color: "Red & Black",
              size: "10",
              type: "",
              addon: "",
            },
            rating: "",
            review: "",
            img_path: require("../../../assets/img/shoe.png"),
            addbtn: true,
            addcount: 1,
            qty: "1",
          },
        ],
      },
    ]
  });
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
  const [new_address, SetNewAddress] = useState(true);
  const [map_view, SetMapView] = useState(false);
  const [select_delivery, SetSelectDelivery] = useState(false);
  const [delivery_type, SetDeliveryType] = useState(false);
  const [type_select, SetTypeSelect] = useState(false);
  const popoverRef = useRef();
  const [info_show, SetInfoShow] = useState(false);
  const [notes_open, SetNotesOpen] = useState(false);
  const [apply, SetApply] = useState(false);
  // const [order_data, SetOrderData] = useState({});

  useEffect(() => {
    console.log("OrderSummarySingleAddress On mount :", props);
    console.log("OrderSummarySingleAddress context :", context.app_data.selected_delivery_address);
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      return { ...prevValue };
    });

    if (info_show == false) {
      var popover = new bootstrap.Popover(popoverRef.current, {
        content: "Thank you for your delivery partner, We make a guarantee of the tips will go to your delivery partner",
      })
    }


    setTimeout(() => {
      SetInfoShow(true);
      console.log("Assign timeout called!")
    }, 10000);
    // SetOrderData(context.app_data.checkout_data);
  }, []);

  function typeSelect(index) {
    let select = type;
    if (select[index].checked == false) {
      select[index].checked = !select[index].checked;
      SetType(select);
    } else if (select[index].checked == true) {
      select[index].checked = !select[index].checked;
      SetType(select);
    }
  };

  return (
    <div className="page-main mb-4 px-sm-0 px-md-2 ">
      <div className="">
        <div className="order_summary ">
          <div className="p-3 bg-fff  shadow-bottom">
            <h5 className="p-0">Shipment of products</h5>
            <p className="pt-1 pl-0">Order delivery details</p>
            {/* <p className="pt-1"><b className="text-dark">Delivery type :</b> <b className="text-secondary">Hyperlocal</b></p> */}

            <hr className="cart_shop_border" />
          </div>
          <div className="my-1">
            <div className="row bg-fff pb-3">
              <div className="bg-fff py-3 sticky-sm-60px sticky-md-110px">
                <h6 className="">Individual Products</h6>
              </div>
              {order_data.products && order_data.products.map((data, index) => (
                <div className="mt-2 col-md-6 col-lg-4 px-1" key={index}>
                  <div className="row border px-2 py-3 radius">
                    <div className="col-3 pl-0">
                      <img src={data.img_path} className="sellingProd" />
                    </div>
                    <div className="col-9 p-0 pb-1">
                      <p className="text-dark fw-bold oneline">{data.name}</p>

                      <p className="pt-1">
                        {data.variants.color ? (
                          <small className="pr-1  border-right">
                            Color: {data.variants.color}
                          </small>
                        ) : (
                          ""
                        )}

                        {data.variants.size ? (
                          <small className="pr-1 pl-1 border-right">
                            Size: 10
                          </small>
                        ) : (
                          ""
                        )}
                        {data.variants.type ? (
                          <small className="pr-1 pl-1 border-right">
                            Type: {data.variants.type}
                          </small>
                        ) : (
                          ""
                        )}
                        {data.variants.addon ? (
                          <small className="pr-1 pl-1 border-right">
                            Addon: Onion
                          </small>
                        ) : (
                          ""
                        )}
                      </p>
                      {/* <p className="pt-1">
                  <b className="text-gray">Quantity: {data.qty}</b>
                </p> */}
                      <div className="pt-1">
                        <p className="text-black">Sold by: {data.seller}</p>
                      </div>
                      <div className="pt-2 pb-2 flex w-100 align-center">
                        <p className="text-dark ">₹ {data.price}</p>
                        <div className="ms-auto">
                          <p className=" mb-0"><b className="text-dark pe-1">Qty :</b> {data.qty}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-2 border-top pl-0 pr-0">
                      <div
                        className="col-6 ps-0 pe-1"
                        onClick={() => {
                          SetDeliveryType(true)
                        }}
                      >
                        <div className="d-flex align-items-center cursor">
                          {data.shipping == "Inshop" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/store.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Courier" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/box.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Hyper Local" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/delivery.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Schedule Hyper Local" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/delivery-truck.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Take Away" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/take-away.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <p className="pe-1">{data.shipping}</p>
                          <Entypo name="chevron-down" size={14} color="#bbb" />
                        </div>
                      </div>
                      <div className="col-6 p-0 text-right">
                        <p className="mb-0">Delivery charge: ₹{data.shippingCharge}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-1">
            <div className="row bg-fff pb-3">
              <div className="bg-fff py-3 sticky-sm-60px sticky-md-110px">
                <h6>Vendor Products</h6>
              </div>
              {order_data.vendors && order_data.vendors.map((data, ven_index) => (

                <div className="mt-2 col-md-6 col-lg-4 px-1" key={ven_index}>
                  <div className="border px-2 py-3 radius">
                    <div className="row pb-2 w-100">
                      <div className="col-2 p-0 center">
                        <img src={data.shop_img} className="round-shop" />
                        {/* <img src={"https://cdn.1superapp.com/images/320/" + data.section_image_url} /> */}
                      </div>
                      <div className="pl-1 col-10 pr-0">
                        <p className="mb-0 fw-bold text-dark">{data.shop_name}</p>
                        <p>Erode</p>
                      </div>
                      {/*  <div className="col-1 pr-0 cursor text-right">
                                   <Ionicons name="close" size={18} color="darkgray" />
                                </div>  */}
                    </div>

                    {data.child.map((prod, prodIndex) => (
                      <div key={prodIndex} className="border-bottom py-2">
                        <p className="fw-bold oneline">{prod.name}</p>
                        <div className="pt-2 d-flex align-items-center">
                          <p className="text-dark">₹ {prod.price}</p>
                          <div className="ms-auto ">
                            <p className=""><b className="text-dark pr-1">Qty :</b>{prod.qty}</p>
                          </div>
                        </div>
                        <p className="">
                          {prod.variants.color ? (
                            <small className="pr-1  border-right">
                              Color: {prod.variants.color}
                            </small>
                          ) : (
                            ""
                          )}

                          {prod.variants.size ? (
                            <small className="pr-1 pl-1 border-right">
                              Size: 10
                            </small>
                          ) : (
                            ""
                          )}
                          {prod.variants.type ? (
                            <small className="pr-1 pl-1 border-right">
                              Type: {prod.variants.type}
                            </small>
                          ) : (
                            ""
                          )}
                          {prod.variants.addon ? (
                            <small className="pr-1 pl-1 border-right">
                              Addon: Onion
                            </small>
                          ) : (
                            ""
                          )}
                        </p>

                      </div>
                    ))}
                    {/* <h6 className=" mt-3">Delivery details</h6> */}
                    <div className="row py-2">
                      <div className="col-5 pl-0 pr-1" onClick={() => { SetDeliveryType(true) }}>
                        <div className="d-flex align-items-center cursor">
                          {data.shipping == "Inshop" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/store.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Courier" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/box.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Hyper Local" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/delivery.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Schedule Hyper Local" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/delivery-truck.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          {data.shipping == "Take Away" ? (
                            <div className="pe-1">
                              <img
                                src={require("../../../assets/icon/take-away.png")}
                                className="w-10"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <p className="pe-1">{data.shipping}</p>
                          <Entypo name="chevron-down" size={14} color="#bbb" />
                        </div>
                      </div>
                      <div className="col-7 p-0 text-right">
                        <p>Delivery charge: ₹{data.shippingCharge}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-fff mt-3 radius">
            <h5 className="p-0 mb-0">Order now</h5>
            <p className="py-1 ps-0">Check the below details and then confirm your orders</p>
            {/* <hr className="cart_shop_border" /> */}
           <div className="container">
           <div className="row py-2 px-sm-0 px-md-2">
              <div className="col-md-6 px-sm-0 px-md-2 pt-2">
                <div className="p-1 pt-3 pb-2">
                  <p className="fs-7 fw-bold text-black">Offers & Benefits</p>
                  <div className="border radius mt-3 p-3">
                    <div className="d-flex align-items-center pb-2">
                      <p className="text-black fs-7">Flat 5% Offer for your order</p>
                      <div className="ms-auto cursor px-2" onClick={() => {
                        SetApply(true);
                      }}>
                        {apply ? (
                          <div className="d-flex align-items-center">
                            <MaterialCommunityIcons name="check-decagram" size={16} color="#00ac0b" />
                            <p className="text-green fw-bold ps-1">Applied</p>
                          </div>
                        ) : (
                          <p className="text-red fw-bold">Apply</p>
                        )}
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray v-small">5% Offer coupon used to get discount of this order</p>
                    </div>
                  </div>
                </div>


                <div className="border-bottom p-1 pt-3 pb-2">
                  <div className="d-flex align-items-center pb-2">
                    <p className="fs-7 fw-bold text-black">Delivery Partner Tips</p>
                    <div className="p-2 ms-2 cursor center" ref={popoverRef} >
                      <Ionicons name="information-circle-outline" size={22} color="#555" />
                    </div>
                  </div>
                  <div className=" pb-0">
                    <p className="text-darkgray ">Delivery tips for your delivery partner</p>
                    <div className="pt-3">
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

                <div className="pb-3 border-bottom">
                  <div className="d-flex pt-3 align-items-center cursor"
                    onClick={() => {
                      SetNotesOpen(!notes_open);
                    }}
                  >
                    <div className="pe-1">
                      <MaterialCommunityIcons name="message-text-outline" size={16} color="#666" />
                    </div>
                    <p className=" text-dark">Add Delivery Notes</p>
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
                      <textarea placeholder="Example, Leave orders at the door" rows={2}></textarea>
                    </div>
                  ) : (null)}
                </div>

              </div>
              <div className="col-md-6 px-sm-0 px-md-2 py-2">
                <div className="border-bottom p-1 pb-2">
                  <div className="row pb-3">
                    <div className="col-10 p-0">
                      <h6>Delivery to</h6>
                    </div>
                    <div className="col-2 ps-1 text-right">
                      <Link to="/select_address">
                        <div className="text-primary cursor">
                          <Feather name="edit-3" size={18} color="#333" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  {context.app_data.selected_delivery_address != "" ? (
                    <div>
                      <p>
                        <b className="text-dark fs-7 capitalize">{context.app_data.selected_delivery_address.name}</b>
                      </p>
                      <p className="pt-2 capitalize">
                        {context.app_data.selected_delivery_address.door_no}, {context.app_data.selected_delivery_address.address}, {context.app_data.selected_delivery_address.city}, {context.app_data.selected_delivery_address.state}, {context.app_data.selected_delivery_address.country} - {context.app_data.selected_delivery_address.pincode}
                      </p>
                    </div>
                  ) : (
                    <div className="center py-3">
                      <p >Opps! please select delivery address</p>
                    </div>
                  )}

                </div>
                <div className="p-1 pt-2">
                  <p className="fs-7 fw-bold text-black">Price Details</p>
                  <div className="pt-3">
                    <div className="flex w-100">
                      <div className="w-75">
                        <p className="text-darkgray">Item Total</p>
                      </div>
                      <div className="w-25 justify-end">
                        <p className="text-right text-dark fs-7">₹150</p>
                      </div>
                    </div>
                    <div className="flex w-100 py-3">
                      <div className="w-75">
                        <p>Delivery fee</p>
                      </div>
                      <div className="w-25 justify-end">
                        <p className="text-right text-dark fs-7">₹50</p>
                      </div>
                    </div>
                    <div className="flex w-100 py-2 border-yAxis-dashed">
                      <div className="w-75">
                        <p>Discount Amount</p>
                      </div>
                      <div className="w-25 justify-end">
                        <p className="text-right text-dark fs-7">₹50</p>
                      </div>
                    </div>

                    <div className="flex w-100 pt-3">
                      <div className="w-75">
                        <p>Delivery Tips</p>
                      </div>
                      <div className="w-25 justify-end">
                        <p className="text-right text-dark fs-7">₹50</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex w-100">
                      <div className="w-75">
                        <h5>Total Pay</h5>
                      </div>
                      <div className="w-25 justify-end">
                        <h5 className="text-right">₹{order_data.vendors_total_amount}</h5>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="mt-3 p-2">
                  <div className="center bg-light p-2 radius">
                    <MaterialIcons name="verified-user" size={28} color="gray" />
                    <p className="pl-2 text-secondary">
                      Secure & Safe Payments on your One Super. Easy returns.
                    </p>
                  </div>
                </div>
                <div className="sm-none text-center mt-4">
                  <Link to="/payment">
                    <button className="btn btn-warning w-50">
                      Order Placed & Pay
                    </button>
                  </Link>
                </div>
              </div>
            </div>
           </div>


            {/* <div className="mt-2 border-bottom p-3 pt-2">
            <p>
              <b>Pay with</b>
            </p>
            <p className="pt-2">Phone pay ID ****56@lbi</p>
          </div> */}




          </div>
        </div>
      </div>

      <Link to="/payment">
        <button className="btn bg-warning bottom-fixed w-100 md-none align-center py-3">
          Order Placed & Pay
        </button>
      </Link>

      <Modal
        open={select_delivery}
        onClose={() => { SetSelectDelivery(false) }}
        className="center deliverytype scrolling-card"
      // onClick={() => {
      //   window.scrollTo({
      //     top: document.documentElement.scrollHeight,
      //     behavior: 'auto',
      //   });
      //   console.log("SCroll");
      // }}
      >
        {/* {mapView ? (
              <div className="row" onClick={selectDeliveryClose}>
            <Maps  />
              </div>
            ) : ( */}
        {/* <div className=" bg-white"> */}
        {map_view ? (
          // <Maps
          //   className="w-100"
          //   Getdata={(location) => {
          //     console.log("Location :", location);
          //   }}
          //   mapvalue={(value) => {
          //     console.log("map :", value);
          //     SetMapView(value);
          //     // addnewOpen();
          //   }}
          // />
          <p>Map view</p>
        ) : (
          <div className="scrolling-card card">
            <div className="row center bg-sm-primary p-3">
              <div className="col-9">
                <h5>Delivery Type</h5>
              </div>
              <div
                className="col-3 text-right cursor"
                onClick={() => { SetSelectDelivery(false) }}
              >
                <Ionicons name="ios-close" size={20} color="white" />
              </div>
            </div>
            <div className="row pl-2 pr-2 pb-3 ">
              <div className="col-md-7 col-sm-12 col-lg-7 col-12 ">
                <div>
                  <DeliveryType />
                </div>
              </div>
              <div className="col-md-5 col-sm-12 col-lg-5 col-12">
                <Address
                  onSelect={(data) => {
                    // currentLocation(data);
                    console.log("map", data);
                  }}
                  open={new_address}
                />
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
        {/* )}  */}
      </Modal>

      <Dialog
        open={delivery_type}
        onClose={() => { SetDeliveryType(false) }}
        classes={{ container: classes.root, paper: classes.paper }}
      >
        {/* onChange={() => {
          setState({
            DeliveryType: false,
          }); */}
        <div className="pb-0">
          <div className="p-3 d-flex align-items-center border-bottom">
            <h6 className="mb-0">Select Delivery Type</h6>
            <div className="ms-auto cursor" onClick={() => {
              SetDeliveryType(false);
            }}>
              <Ionicons name="md-close" size={18} color="black" />
            </div>
          </div>
          <div className="p-0 btn-group-sm pt-3">
            {type.map((data, typeindex) => (
              <button
                className={
                  data.checked == true
                    ? "px-3 py-2 other radius m-2 border-nore"
                    : "border px-3 py-2 bg-fff radius m-2 "
                }
                key={typeindex}
                onClick={() => {
                  typeSelect(typeindex);

                }}
              >
                <div className="d-flex align-items-center">
                  <img src={data.img_path} className="w-20" />
                  <p className="pl-1">{data.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="w-100 center my-3">
          <div
            className="bg-prime1 btn py-2 radius cursor"
            onClick={() => {
              SetDeliveryType(false)
            }}
          >
            <p className="fw-bold text-white mb-0 fs-7">Change Delivery Type</p>
          </div>
        </div>

      </Dialog>
    </div>
  );
}
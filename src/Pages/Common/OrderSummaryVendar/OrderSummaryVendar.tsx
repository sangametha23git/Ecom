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
import Address from "../Address/Address";
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

export default function OrderSummaryVendar(props: any) {
  const context = useContext(DataContext);
  const classes = useStyles();
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
      products: [
        {
            id: 1,
            order_id: "OSG15",
            shipping: "Schedule Hyper Local",
            shippingCharge: 25,
            shopname: "Fashion Collections",
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
            shipping: "Hyper Local",
            shopname: "Fresh Grocery",
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
            shop_img: require("../../../assets/img/grocery_shop.jpg"),
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
    ]
    },
    addressType: "",
    selected_delivery_address: "",
    vendors_total_amount: "",
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

  useEffect(() => {
    console.log("OrderSummaryVendar On mount :", props);
    console.log("OrderSummaryVendar On context :", context);
    console.log("OrderSummaryVendar On context :", context.app_data);
    // SetOrderData(context.app_data);
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      return { ...prevValue };
  });
  }, []);

  return (
    <div className="page-main bg-gray-300 mb-4">
      <div className="order_summary p-md-5 row">
        <div className="p-3 pb-0">
          <h4 className="p-0 m-0">Choose address for each shop</h4>
          <p className="p-0">Select delivery address for shipping</p>
        </div>

        <div className="col-md-6 p-0">
          {order_data.checkout_data.vendors.map((data, index) => (
            <div className="mt-3 p-3 bg-fff">
              <div className="pt-2" key={index}>
                <h6 className="p-0">Shipment Products</h6>
                <p className="pt-1 pl-0">Order delivery from OneSuper</p>
              </div>

              <hr className="cart_shop_border" />
              <div className=" pb-3">
                <div className="row pb-2">
                  <div className="round-shop col-2 p-0">
                    {/* <img src={"https://cdn.1superapp.com/images/320/" + data.section_image_url} /> */}
                  </div>
                  <div className="pl-1 col-10 pr-0">
                    <h4 className="mb-0">{data.shop_name}</h4>
                    <p>Erode</p>
                  </div>
                  {/* <div className="col-1 pr-0 cursor text-right">
                    <Ionicons name="close" size={18} color="darkgray" />
                  </div> */}
                </div>

                {/* {data.products.map((prod, prodIndex) => (
                  <div key={prodIndex} className="item-card">
                    <h6>{prod.name}</h6>
                    <div className="flex pt-2">
                      <h6>₹ {prod.price}</h6>
                      <p className="pl-1">
                        <s>
                          <sup>₹ {prod.original_price}</sup>
                        </s>
                      </p>
                      <p className="pl-1 text-green">₹{prod.discount} OFF</p>
                    </div>
                    <div className="row">
                      <div className="col-7 p-0">
                        <p className="pt-1">
                          {child.variants.color ? (
                            <small className="pr-1  border-right">
                              Color: {child.variants.color}
                            </small>
                          ) : (
                            ""
                          )}

                          {child.variants.size ? (
                            <small className="pr-1 pl-1 border-right">
                              Size: 10
                            </small>
                          ) : (
                            ""
                          )}
                          {child.variants.type ? (
                            <small className="pr-1 pl-1 border-right">
                              Type: {child.variants.type}
                            </small>
                          ) : (
                            ""
                          )}
                          {child.variants.addon ? (
                            <small className="pr-1 pl-1 border-right">
                              Addon: Onion
                            </small>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-5 p-0 text-right">
                        <p className="">
                            <b className="text-gray">Qty: {prod.qty}</b>
                          </p>
                        <div className="flex w-100 align-center">
                          <p className="pr-2 w-25"><b className="text-dark">Qty</b></p>
                          {child.addbtn ? (
                            <div className="flex offer center p-1 w-75">
                              <div
                                className="cursor pr-1 w-25 center"
                                onClick={() => {
                                  // minus(index);
                                }}
                              >
                                <Entypo name="minus" size={18} color="#777" />
                              </div>
                              <div className="w-50 center">
                                <p className="text-primary">
                                  <b>{child.addcount}</b>
                                </p>
                              </div>
                              <div
                                className="cursor pl-1 w-25"
                                onClick={() => {
                                  // add(index);
                                }}
                              >
                                <Entypo name="plus" size={18} color="#777" />
                              </div>
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                // addcart(index);
                              }}
                            >
                              <div className="offer center w-100">
                                <p className="cursor p-1 pl-5 pr-5">
                                  <b className="text-red">Add</b>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}

                {data.child.map((prod, prodIndex) => (
                  <div key={prodIndex} className="border-bottom py-2">
                    <p className="fw-bold oneline">{prod.name}</p>
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
                          <p className="">{prod.qty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row pb-1 pt-3">
                  <div className="col-9 p-0">
                    <h6>Delivery details</h6>
                  </div>
                  <div className="col-3 pr-0 text-right">
                    <Link to="/select_address">
                      <div className="text-primary cursor d-flex align-items-center">
                        <Feather name="edit-3" size={16} color="#007dea" />
                        <p className="ps-1 text-prime1">Change</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="p-2">
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

                  <div className="row border-top pb-1 pt-2 align-end">
                    <div className="col-5 pl-0 pr-02" onClick={() => { SetDeliveryType(true) }}>
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
            </div>
          ))}
        </div>
        <div className="col-md-6 p-3 bg-fff mt-3">
          <h4>Order now</h4>
          <div className="border-bottom p-1 pt-3 pb-3">
            <h6 className="text-dark">Delivery to</h6>
            <p className="pt-2">
              Delivery to multiple address details are given above
            </p>
          </div>

          {/* <div className="mt-2 border-bottom p-3 pt-2">
                <p>
                  <b>Pay with</b>
                </p>
                <p className="pt-2">Phone pay ID ****56@lbi</p>
              </div> */}

          <div className="p-1">
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
                  <p className="text-right">₹{order_data.checkout_data.discount_amount}</p>
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
        <button className="btn bg-warning bottom-fixed w-100 md-none align-center py-2">
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
          //    SetMapView(value);
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
                    //   currentLocation(data);
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
          <div className="p-0 btn-group-sm" >
            {type.map((type, typeindex) => (
              <button className={type.checked == true ? " px-3 py-2 other radius m-2" : "border px-3 py-2 bg-fff radius m-2 "} key={typeindex} onClick={() => { typeSelect(typeindex) }}>
                <div className="flex">
                  <img src={type.img_path} className="w-20" />
                  <p className="pl-1">{type.name}</p>
                </div>
              </button>
            ))}
          </div>


        </div>
        <div className=" w-100 p-2">
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
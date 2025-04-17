import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import Modal from "@material-ui/core/Modal";
import Maps from "../Maps/Maps";
import { api } from "../../../utils/Api";


export default function SelectAddress(props: any) {
  const context = useContext(DataContext);
  const [new_address, SetNewAddress] = useState(true);
  const [map_view, SetMapView] = useState(false);
  const [select_delivery, SetSelectDelivery] = useState(false);
  const [order_data, SetOrderData] = useState([
    {
      id: 1,
      order_id: "OSG15",
      shipping: "Hyper Local",
      Product_name: "Fresh Berries Premium brands",
      price: 200,
      original_price: 250,
      discount: 50,
      status: "Estimated Delivery by Sep 20, 2021",
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
      product_img: require("../../../assets/img/sub2.jpg"),
      addbtn: true,
      addcount: 1,
    },
  ]);
  const [address, SetAddress] = useState([]);


  useEffect(() => {
    console.log("SelectAddress On mount :", props);
    get_address();
  }, []);

  async function get_address() {
    let data_res: any;
    let pass_data = {
      get: {

      },
    };
    data_res = await api("/delivery_address", pass_data);
    console.log("res delivery_address :", data_res);
    SetAddress(data_res.response.delivery_address);
  }

  function saveContext(data) {
    context.SetAppData((prevValue) => {
      prevValue.selected_delivery_address = data;
      console.log("selected_delivery_address Data :", prevValue.address);
      return { ...prevValue };
    });
  }

  return (
    <div className="page-main mb-4 px-sm-0 px-md-2">
      <div className="bg-fff center">
        <div className="container p-2 mb-3 w-md-75 ">
          <div className="row center pt-2">
            <div className="col-6">
              <h5>Select Address</h5>
            </div>
            <div
              className="col-6 text-right"
              onClick={() => { SetSelectDelivery(true) }}
            >
              <button className="btn text-primary p-0">Add Address</button>
            </div>
          </div>
          {address.map((address_data, addressIndex) => (
            <div className="row pt-4" key={addressIndex}>
              <label
                className="flex cursor"
                onClick={() => {
                  saveContext(address_data)
                }}
              >
                <input type="radio" name="address" />
                <div className="pl-2">
                  <p className="capitalize fs-7 text-dark pb-2">{address_data.name}</p>
                  <p className="capitalize">{address_data.door_no}, {address_data.address}, {address_data.city}, {address_data.state}, {address_data.country}, {address_data.pincode}</p>
                </div>
              </label>
            </div>
          ))}
          <div className="mt-3 p-3 w-100 text-right  mb-3">
            <button className="btn bg-prime1 text-white p-2" onClick={() => {
              window.history.go(-1);
            }}>
              Change
            </button>
          </div>
        </div>



      </div>

      {/* <div className="bottom-fixed w-100 md-none align-center">
      <div className="row p-3 center">
        <div className="col-8">
          <h5>₹200</h5>
          <p>Continue to payment Details</p>
        </div>
        <div className="col-4 text-right">
          <Link to="/payment">
            <button className="btn btn-warning">Continue</button>
          </Link>
        </div>
      </div>
    </div> */}

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
        <div className=" bg-white">
          {map_view ? (
            <Maps
              className="w-100"
              Getdata={(location) => {
                console.log("Location :", location);
              }}
              mapvalue={(value) => {
                console.log("map :", value);
                SetMapView(value)
                addnewOpen();
              }}
            />
          ) : (
            <div className="">
              <div className="row align-items-center shadow sticky-top bg-fff p-3">
                <div className="col-9 ps-0">
                  <h6 className="mb-0 p-0">Add New Address</h6>
                </div>
                <div
                  className="col-3 text-right cursor p-0"
                  onClick={() => { SetSelectDelivery(false) }}
                >
                  <Ionicons name="ios-close" size={20} color="black" />
                </div>
              </div>
              <div className="p-3 ">
                <div className="">
                  <form className="p-0">
                    <div className="wrapper row">
                      <div className="col-sm-12 col-md-3">
                        <p className="mb-1 text-dark">Address Type</p>
                      </div>
                      {/* checked */}
                      {/* <div className="col-sm-3 col-xs-3  col-md-3"> */}
                      <input type="radio" name="select" id="option-1" />
                      <label
                        htmlFor="option-1"
                        className="option option-1"
                        onClick={() => {
                          console.log("Home address")
                        }}
                      >
                        {/* <div className="dot"></div> */}
                        <Ionicons name="home-outline" size={16} color="#ccc" />
                        <span>Home</span>
                      </label>
                      {/* </div> */}

                      {/* <div className="col-sm-3 col-xs-3  col-md-3"> */}
                      <input type="radio" name="select" id="option-2" />
                      <label
                        htmlFor="option-2"
                        className="option option-2"
                        onClick={() => {
                          console.log("Office address")
                        }}
                      >
                        {/* <div className="dot"></div> */}
                        <FontAwesome5 name="building" size={16} color="#ccc" />
                        <span>Work</span>
                      </label>
                      {/* </div> */}

                      {/* <div className="col-sm-3 col-xs-3  col-md-3"> */}
                      <input type="radio" name="select" id="option-3" />
                      <label
                        htmlFor="option-3"
                        className="option option-3"
                        onClick={() => {
                          console.log("other address")
                        }}
                      >
                        {/* <div className="dot"></div> */}
                        <Ionicons
                          name="md-location-outline"
                          size={16}
                          color="#ccc"
                        />
                        <span>Others</span>
                      </label>
                      {/* </div> */}
                    </div>

                    <div className="p-1">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Name"
                      // required
                      />
                      <input
                        type="tel"
                        className="form-control mb-3"
                        placeholder="Mobile Number"
                      // required
                      />
                      <div className="text-center w-100 pb-3">
                        <button
                          className="btn btn-outline location_pick"
                          onClick={(event) => {
                            console.log("map View:");
                            event.preventDefault();
                            SetMapView(true);
                          }}
                        >
                          <MaterialIcons
                            name="my-location"
                            size={20}
                            color="black"
                            style={{ paddingRight: 5 }}
                          />
                          Pick my Location
                        </button>
                        <p>Or</p>
                      </div>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="House Number / Building Number"
                      // required
                      />
                      <textarea
                        name="address"
                        id=""
                        rows={3}
                        // required
                        placeholder="Address"
                        className=" mb-3"
                      ></textarea>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Landmark"
                      />
                      <div className="row">
                        <div className="col-6 px-1">
                          <input
                            type="text"
                            className="form-control mb-3 mr-1"
                            placeholder="City"
                          // required
                          />
                          <input
                            type="text"
                            className="form-control mb-3 mr-1"
                            placeholder="country"
                          // required
                          />
                        </div>
                        <div className="col-6 px-1">
                          <input
                            type="text"
                            className="form-control mb-3 ml-1"
                            placeholder="State"
                          // required
                          />
                          <input
                            type="text"
                            className="form-control mb-3 ml-1"
                            placeholder="Pincode"
                          // required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="save text-right mt-3">
                      <button
                        className="btn btn-danger w-100"
                        onClick={() => {
                          SetNewAddress(false)
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* )}  */}
      </Modal>

      {/* <Modal
      open={map}
      onClose={mapClose}
      className="center deliverytype"
    >
      <Maps
        className="w-100"
        Getdata={(location) => {
          console.log("Location :", location);
        }}
        mapvalue={(value) => {
          console.log("map :", value);
          setState({ map: value });
          addnewOpen();
        }}
      />
    </Modal> */}
    </div>
  );
}
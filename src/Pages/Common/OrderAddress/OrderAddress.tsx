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

export default function OrderAddress(props: any) {
  const context = useContext(DataContext);
  const [new_address, SetNewAddress] = useState(false);
  const [map, SetMap] = useState({
    open: false,
    data: ""
  });
  const [address_data, SetAddressData] = useState([
    {
      addressActive: false,
      name: "User name",
      address: "Pallipalyam, Namakkal, Tamilnadu - 638008",
    },
    {
      addressActive: false,
      name: "User name",
      address: "Pallipalyam, Namakkal, Tamilnadu - 638008",
    },
    {
      addressActive: false,
      name: "User name",
      address: "Pallipalyam, Namakkal, Tamilnadu - 638008",
    },
  ]);
  const [address, SetAddress] = useState([]);
  const [add_address, SetAddAddress] = useState({
    name: "",
    mobile: "",
    door_no: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    latitude: "",
    longitude: "",
    map_address: "",
    country_id: "",

  });
  const [address_show, SetAddressShow] = useState("");
  const [select_address_type, SetSelectAddressType] = useState("");
  const [selected_address, SetSelectedAddress] = useState("");

  useEffect(() => {
    console.log("OrderAddress On mount :", props);
    console.log("OrderAddress On context :", context);
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

  function back() {
    SetNewAddress(false);
    props.Add && props.Add(false);
  };

  function homeAddress() {
    console.log("Home Clicked");
  };

  function workAddress() {
    console.log("Work Clicked");
  };

  function otherAddress() {
    console.log("Others Clicked");
  };

  async function SaveAddress() {
    let pass_data = {
      post: add_address,
    };
    let data_res = await api("/add_delivery_address", pass_data);
    console.log("res add_delivery_address :", data_res);
    SetAddress((prevValue) => {
      prevValue = data_res.response.delivery_address;
      return [...prevValue];
    });
  }

  function addressType() {
    if (select_address_type == 1) {
      let type = "single_address"
      SaveContext(type);

      console.log("address type:", select_address_type);
    } else {
      let type = "multiple_address"
      SaveContext(type);
      console.log("address type:", select_address_type);
    }


  }

  function SaveContext(data) {
    context.SetAppData((prevValue) => {
      prevValue.address_type = data;
      console.log("address Data :", prevValue.address);
      return { ...prevValue };
    });
  }

  function addressClick(data) {
    console.log("selected address:", data);
    SaveAddressContext(data);
  }

  function SaveAddressContext(data) {
    context.SetAppData((prevValue) => {
      prevValue.selected_delivery_address = data;
      console.log("selected_delivery_address Data :", prevValue.address);
      return { ...prevValue };
    });
  }

  return (
    <div className="page-main mb-4 px-sm-0 px-md-2 bg-fff ">
      {new_address ? (
        <div className="container">
          <div className="bg-white flex border-bottom p-2 sticky-md-110px sticky-sm-60px " onClick={back}>
            <div className="cursor me-2">
              <Ionicons name="arrow-back" size={20} color="black" />
            </div>
            <h6 className="mb-0">Add Delivery Address</h6>
          </div>

          <div className="p-2">
            {/* <Modal open={map} onClose={mapClose}>
                <div className="row">
                  <div className="col-md-4 col-12">
                    Get Current location
                  </div>
                  <div className="col-md-8 col-12">
                  <Map onClick={location}  className="w-25"/>
                  </div>
                </div>
                </Modal> */}

            <form className="p-0">
              <div className="wrapper row container">
                <div className="col-12">
                  <p className="mb-2 text-black fs-7">Address Type</p>
                </div>
                {/* checked */}
                {/* <div className="col-sm-3 col-xs-3  col-md-3"> */}
                <input type="radio" name="select" id="option-1" />
                <label
                  htmlFor="option-1"
                  className="option option-1"
                  onClick={homeAddress}
                >
                  {/* <div className="dot"></div> */}
                  <Ionicons name="home-outline" size={16} color="#ccc" />
                  <span className="ps-1">Home</span>
                </label>
                {/* </div> */}

                {/* <div className="col-sm-3 col-xs-3  col-md-3"> */}
                <input type="radio" name="select" id="option-2" />
                <label
                  htmlFor="option-2"
                  className="option option-2"
                  onClick={workAddress}
                >
                  {/* <div className="dot"></div> */}
                  <FontAwesome5 name="building" size={16} color="#ccc" />
                  <span className="ps-1">Work</span>
                </label>
                {/* </div> */}

                {/* <div className="col-sm-3 col-xs-3  col-md-3"> */}
                <input type="radio" name="select" id="option-3" />
                <label
                  htmlFor="option-3"
                  className="option option-3"
                  onClick={otherAddress}
                >
                  {/* <div className="dot"></div> */}
                  <Ionicons
                    name="md-location-outline"
                    size={16}
                    color="#ccc"
                  />
                  <span className="ps-1">Others</span>
                </label>
                {/* </div> */}
              </div>

              <div className="">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name"
                  onChange={(event) => {
                    console.log("change :", event.target.value);
                    SetAddAddress((prevValue) => {
                      prevValue.name = event.target.value;
                      return { ...prevValue };
                    });
                  }}
                // required
                />
                <input
                  type="tel"
                  className="form-control mb-3"
                  placeholder="Mobile Number"
                  onChange={(event) => {
                    console.log("change :", event.target.value);
                    SetAddAddress((prevValue) => {
                      prevValue.mobile = event.target.value;
                      return { ...prevValue };
                    });
                  }}
                // required
                />

                {address_show == "" ?
                  <div>

                    <div className="text-center w-100 mb-3">
                      <button
                        className="btn btn-outline location_pick"
                        onClick={(event) => {
                          console.log("map View:")
                          event.preventDefault();
                          SetMap({ open: true, data: add_address });
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
                      placeholder="House Number / Building Number" onChange={(event) => {
                        console.log("change :", event.target.value);
                        SetAddAddress((prevValue) => {
                          prevValue.door_no = event.target.value;
                          return { ...prevValue };
                        });
                      }}
                    // required
                    />
                    <textarea
                      name="address"
                      id=""
                      rows={3}
                      // required
                      placeholder="Address"
                      className=" mb-3"
                      onChange={(event) => {
                        console.log("change :", event.target.value);
                        SetAddAddress((prevValue) => {
                          prevValue.address = event.target.value;
                          return { ...prevValue };
                        });
                      }}
                    ></textarea>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Landmark"
                      onChange={(event) => {
                        console.log("change :", event.target.value);
                        SetAddAddress((prevValue) => {
                          prevValue.landmark = event.target.value;
                          return { ...prevValue };
                        });
                      }}
                    />
                    <div className="row">
                      <div className="col-6 px-1">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="City"
                          onChange={(event) => {
                            console.log("change :", event.target.value);
                            SetAddAddress((prevValue) => {
                              prevValue.city = event.target.value;
                              return { ...prevValue };
                            });
                          }}
                        // required
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Country"
                          onChange={(event) => {
                            console.log("change :", event.target.value);
                            SetAddAddress((prevValue) => {
                              prevValue.country = event.target.value;
                              return { ...prevValue };
                            });
                          }}
                        // required
                        />
                      </div>
                      <div className="col-6 px-1">
                        <input
                          type="text"
                          className="form-control mb-3 "
                          placeholder="State"
                          onChange={(event) => {
                            console.log("change :", event.target.value);
                            SetAddAddress((prevValue) => {
                              prevValue.state = event.target.value;
                              return { ...prevValue };
                            });
                          }}
                        // required
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Pincode"
                          onChange={(event) => {
                            console.log("change :", event.target.value);
                            SetAddAddress((prevValue) => {
                              prevValue.pincode = event.target.value;
                              return { ...prevValue };
                            });
                          }}
                        // required
                        />
                      </div>
                    </div>
                  </div>
                  :
                  <div className="p-2">
                    <div className="d-flex align-items-center mb-2">
                      <h6 className="mb-0">Address</h6>
                      <div className="ms-auto cursor"
                        onClick={(event) => {
                          console.log("map View:")
                          event.preventDefault();
                          SetMap({ open: true, data: add_address });
                        }}>
                        <p className="mb-0 text-prime1 fw-bold">Change Address</p>
                      </div>
                    </div>
                    <div className="border radius p-2">
                      <p className="text-dark fw-bold">{address_show}</p>
                    </div>
                  </div>
                }
              </div>

              <div className="save text-right mt-3">
                <button
                  className="btn btn-danger w-100 px-3"
                  onClick={() => {
                    SetNewAddress(false);
                    SaveAddress();
                    console.log("Address saved: ", add_address);
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="order_summary container pt-2">
          <div className="mt-3 pb-4">
            <h5>Choose delivery address</h5>
          </div>
          <div className="border-bottom">
            <div className="row p-0 py-2">
              <div className="col-9 ps-1">
                <label htmlFor="address1" className="flex cursor">
                  <input
                    type="radio"
                    id="address1"
                    name="drone"
                    value="huey"
                    // checked
                    onClick={() => {
                      let index = 1;
                      SetSelectAddressType(index);
                    }}
                  />
                  <p className="pl-1 mb-0 text-black fs-7">Delivery to single address</p>
                </label>
              </div>
              <div className="col-3 p-sm-0 px-md-4 cursor text-right" onClick={() => { SetNewAddress(true); }}>
                <p className="text-prime1 fw-bolder fs-7">Add New</p>
              </div>
            </div>

            {select_address_type == 1 ? (
              <div className="row">
                <p className="pb-2">Select delivery address</p>
                {address.map((data, index) => (
                  <div key={index} className="col-md-6">
                    <div
                      className={
                        selected_address.name == data.name
                          ? "p-2 mb-3 active-border cursor"
                          : "p-2 mb-3 border cursor"
                      }
                      onClick={() => {
                        SetSelectedAddress(data)
                        addressClick(data);
                        console.log("address active");
                      }}
                    >
                      <p>
                        <b className="text-darkgray fs-7 capitalize">{data.name}</b>
                      </p>
                      <p className="capitalize">{data.door_no}, {data.address}, {data.city}, {data.state}, {data.country}, {data.pincode}</p>
                    </div>
                  </div>
                ))}

                {/* <div className={addressActive ? "p-2 mb-3 active-border cursor" :"p-2 mb-3 border cursor"} onClick={addressClick}>
                <p>
                  <b className="text-gray">UserName</b>
                </p>
                <p className="pt-1">Pallipalayam namakkal tamilnadu - 638008</p>
              </div> */}
              </div>
            ) : null}
          </div>


          <div className="mt-3  px-1">
            <label htmlFor="address2" className="flex align-center cursor">
              <input
                type="radio"
                id="address2"
                name="drone"
                value="huey"
                // checked
                onClick={() => {
                  let index = 2;
                  SetSelectAddressType(index)
                }}
              />
              <p className="text-black ps-2 mb-0 fs-7">Delivery to multiple address</p>
            </label>
          </div>
          <div className="sm-none  mt-5">
          <Link to={
            select_address_type == 1  ? "/order_summary_single_address" :
                  select_address_type == 2 ? "/order_summary" : ""}>
              <button className="btn btn-warning " onClick={() => {
                addressType();
              }}>Continue</button>
            </Link>
          </div>

          <Link to={
            select_address_type == 1  ? "/order_summary_single_address" :
            select_address_type == 2 ? "/order_summary" : ""}>
            <div className="bg-warning bottom-fixed w-100 md-none py-3 cursor text-center " onClick={() => {
              addressType();
            }}>
              <p className="text-dark fs-7">Continue</p>
            </div>
          </Link>
        </div>
      )
      }



      <Modal
        open={map.open}
        onClose={() => {
          SetMap({
            open: false,
            data: ""
          });
        }}
        className="center deliverytype"
      >

        <Maps
          data={map.data}
          className="w-100"
          Getdata={(location) => {
            console.log("Location :", location);
          }}
          mapvalue={(value) => {
            console.log("map :", value);
            SetMap(value);
            SetNewAddress(true);
          }}
          onBack={() => {
            console.log("back to address");
            SetMap({
              open: false,
              data: ""
            });
          }}

          onSave={(data) => {
            console.log("on save data :", data);
            SetMap({
              open: false,
              data: ""
            });
            SetAddAddress((prevValue: any) => {
              prevValue.latitude = data.latLng.lat;
              prevValue.longitude = data.latLng.lng;
              prevValue.address = data.address_data;
              return { ...prevValue }
            })
            SetAddressShow(data.address_data);
          }}
        />
      </Modal>
    </div >


  );
}
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Modal from "@material-ui/core/Modal";
import Maps from "../Maps/Maps";
import { api } from "../../../utils/Api";

export default function Address(props: any) {
    const context = useContext(DataContext);
    const [new_address, SetNewAddress] = useState(false);
    const [map, SetMap] = useState({
        open: false,
        data: ""
    });
    const [address, SetAddress] = useState([]);
    const [selected_address, SetSelectedAddress] = useState("");
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
    const [address_show, SetAddressShow] = useState("")

    useEffect(() => {
        console.log("Address On mount :", props);
        SetAddress(props.data);
        SaveContext(props.data)
    }, []);



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

    function SaveContext(data) {
        context.SetAppData((prevValue) => {
            prevValue.address = data;
            console.log("address Data :", prevValue.address);
            return { ...prevValue };
        });
    }


    return (
        <div className="card mt-3 address">
            {new_address ? (
                <div className="">
                    <div className="bg-white flex border-bottom p-2 pt-0" onClick={back}>
                        <div className="cursor me-2">
                            <Ionicons name="arrow-back" size={20} color="black" />
                        </div>
                        <h6 className="mb-0">Add Delivery Address</h6>
                    </div>

                    <div className="p-2 ScrollY80">
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
                            <div className="wrapper row">
                                <div className="col-12">
                                    <p className="mb-1 text-dark">Address Type</p>
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
                                    <span>Home</span>
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
                                    <span>Work</span>
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
                                    <span>Others</span>
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

                                        <div className="text-center w-100">
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
                                            rows={1}
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
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    className="form-control mb-3 mr-1"
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
                                                    className="form-control mb-3 mr-1"
                                                    placeholder="country"
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
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    className="form-control mb-3 ml-1"
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
                                                    className="form-control mb-3 ml-1"
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
                                    className="btn btn-danger w-100"
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
                <div className="p-3 ">
                    <div className="flex">
                        <h6>Select Address</h6>
                        <div className="ml-auto">
                            <p className="text-primary cursor mb-0 fw-bolder" onClick={() => {
                                SetNewAddress(true);
                            }}>
                                Add Address
                            </p>
                        </div>
                    </div>
                    {address.map((data, address_index) => (
                        <label className="d-flex mt-3" key={address_index}>
                            <input type="radio" name="address" />
                            <div className="p-2">
                                <p className="text-dark fw-bold">{data.name}</p>
                                <p>{data.door_no}, {data.address}, {data.city}, {data.state}, {data.country}, {data.pincode}</p>
                            </div>
                        </label>
                    ))}

                    <div className="mt-4 w-100 text-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                SetNewAddress(false);
                            }}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

            <Modal
                open={map.open}
                onClose={() => {
                    SetMap({
                        open: false,
                        data: ""
                    });
                }}
                className="center deliverytype modal-fullscreen-md-down"
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
        </div>

    );
}
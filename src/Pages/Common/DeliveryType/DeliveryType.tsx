import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../utils/Api";
import DataContext from "../../../utils/Context/DataContext";


export default function DeliveryType(props: any) {
    const context = useContext(DataContext);
    const [width, SetWidth] = React.useState(innerWidth);
    const [data, SetData] = useState(true);
    const [selected_type, SetSelectedType] = useState("In Shop")
    const [delivery_type, SetDeliveryType] = useState([
        {
            index: "radioselect-1",
            img: require("../../../assets/icon/store.png"),
            name: "In Shop",
        },
        {
            index: "radioselect-2",
            img: require("../../../assets/icon/delivery.png"),
            name: "Hyper Local",
        },
        {
            index: "radioselect-3",
            img: require("../../../assets/icon/take-away.png"),
            name: "Take Away",
        },
        {
            index: "radioselect-4",
            img: require("../../../assets/icon/delivery-truck.png"),
            name: "Schedule ",
        },
        {
            index: "radioselect-5",
            img: require("../../../assets/icon/box.png"),
            name: "Courier"
        }
    ]);

    useEffect(() => {
        console.log("DeliveryType On mount :", props);
    }, []);

    return (
        <div className="">

            {data ? (
                <div>
                    {width < 720 ? (
                        <div className="pt-3 pb-3 pl-1 pr-1 bg-gray">
                            <h6 className="mb-0">Select Delivery Type</h6>
                            <div className="align-center">
                                <div className="align-center row pt-2">
                                    {delivery_type.map((data, index) => (
                                        <div
                                            className="col-3 p-2 cursor text-center"
                                            key={index}
                                            onClick={() => {
                                                SetSelectedType(data.name)
                                                // checkedType(index);
                                            }}
                                        // onDragStart={handleDragStart}
                                        >
                                            {/* <div className={data.checked ? "bg-gray-500 pt-2 pb-2" : "card pt-2 pb-2"}> */}
                                            <div className={selected_type == data.name ? "card pt-2 pb-2 radius" : "pt-2 pb-2"}>
                                                <img src={data.img} className="typeimg" />
                                                <p className="pt-1">
                                                    <small className="smallfont">{data.name}</small>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-2">
                            <div className="mt-3">
                                <h5>Select Delivery Type</h5>
                                <div className="radio-toolbar p-1 mt-3">
                                    <input
                                        type="radio"
                                        id="radioselect-1"
                                        name="radioFruit"
                                        value="inshop"
                                    />
                                    <label htmlFor="radioselect-1">
                                        <div className="row p-1 align-center">
                                            <div className="col-2">
                                                <img
                                                    src={require("../../../assets/icon/store.png")}
                                                    className="typeimg"
                                                />
                                            </div>
                                            <div className="col-10">
                                                <h6>In Shop</h6>
                                                <p>
                                                    Shopping your products / orders / booking a restaurants
                                                    on the shop
                                                </p>
                                            </div>
                                        </div>
                                    </label>

                                    <input
                                        type="radio"
                                        id="radioselect-2"
                                        name="radioFruit"
                                        value="hyperlocal"
                                    />
                                    <label htmlFor="radioselect-2">
                                        <div className="row p-1 align-center">
                                            <div className="col-2">
                                                <img
                                                    src={require("../../../assets/icon/delivery.png")}
                                                    className="typeimg"
                                                />
                                            </div>
                                            <div className="col-10">
                                                <h6>Hyper Local</h6>
                                                <p>
                                                    Shopping your products / orders / booking a restaurants
                                                    on the shop
                                                </p>
                                            </div>
                                        </div>
                                    </label>

                                    <input
                                        type="radio"
                                        id="radioselect-3"
                                        name="radioFruit"
                                        value="takeaway"
                                    />
                                    <label htmlFor="radioselect-3">
                                        <div className="row p-1 align-center">
                                            <div className="col-2">
                                                <img
                                                    src={require("../../../assets/icon/take-away.png")}
                                                    className="typeimg"
                                                />
                                            </div>
                                            <div className="col-10">
                                                <h6>Take Away</h6>
                                                <p>
                                                    Shopping your products / orders / booking a restaurants
                                                    on the shop
                                                </p>
                                            </div>
                                        </div>
                                    </label>

                                    <input
                                        type="radio"
                                        id="radioselect-4"
                                        name="radioFruit"
                                        value="takeaway"
                                    />
                                    <label htmlFor="radioselect-4">
                                        <div className="row p-1 align-center">
                                            <div className="col-2">
                                                <img src={require("../../../assets/icon/box.png")} className="typeimg" />
                                            </div>
                                            <div className="col-10">
                                                <h6>Courier</h6>
                                                <p>
                                                    Shopping your products / orders / booking a restaurants
                                                    on the shop
                                                </p>
                                            </div>
                                        </div>
                                    </label>

                                    <input
                                        type="radio"
                                        id="radioselect-5"
                                        name="radioFruit"
                                        value="takeaway"
                                    />
                                    <label htmlFor="radioselect-5">
                                        <div className="row p-1 align-center">
                                            <div className="col-2">
                                                <img
                                                    src={require("../../../assets/icon/delivery-truck.png")}
                                                    className="typeimg"
                                                />
                                            </div>
                                            <div className="col-10">
                                                <h6>Schedule Hyper Local</h6>
                                                <p>
                                                    Shopping your products / orders / booking a restaurants
                                                    on the shop
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="empty center pt-5">
                    <div>
                        <img src={require("../../../assets/icon/folder.png")} alt="" />
                        <p>No data found!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
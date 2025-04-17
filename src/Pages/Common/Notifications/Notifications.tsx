import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { Ionicons, } from "@expo/vector-icons";
import ViewNotifications from "./ViewNotification";


export default function Notifications(props: any) {
    const context = useContext(DataContext);
    const [notification, SetNotification] = useState([
        {
            title: "Fashion Week",
            content:
                "Top Brand Collection Upto 30% Off, Don't miss the fashion week!",
            time: "Monday",
            img_path: require("../../../assets/img/sub1.jpg"),
        },
        {
            title: "New Shops Arrivals",
            content: "New Shops are ready to introduce in our platform",
            time: "2 Days ago",
            img_path: require("../../../assets/img/sub1.jpg"),
        },
    ]);
    const [view, SetView] = useState({ open: false, value: "" })

    useEffect(() => {
        console.log("Notifications On mount :", props);
        console.log("Notifications context :", context);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);


    return (
        <div className="bg-fff">
            <div className="sticky-sm-60px sticky-md-110px bg-fff">
                <h5 className="p-3">Notifications</h5>
            </div>
            {view.open ? (
                <div className="pt-2">
                    <ViewNotifications value={view.value} />
                </div>
            ) : (
                <div className="pt-2 row">
                    {notification.map((notify, notify_index) => (
                        <div className="mb-2 col-md-6 px-1" key={notify_index}>
                            <div
                                className="row p-2 cursor border  radius" onClick={() => {
                                    SetView({ open: true, value: notify });
                                }}>
                                <div className="col-3 col-md-2 p-0">
                                    <img src={notify.img_path} className="noti-img" />
                                </div>
                                <div className="col-9 col-md-10 pe-0">
                                    <h6>{notify.title}</h6>
                                    <p className="text-black">{notify.content}</p>
                                    <div className="mt-1 flex align-center">
                                        <Ionicons
                                            name="ios-notifications-outline"
                                            size={15}
                                            color="#555"
                                        />
                                        <p>
                                            <small className="pl-1">{notify.time}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}
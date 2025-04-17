import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { Ionicons, Feather } from "@expo/vector-icons";


export default function ViewNotifications(props: any) {
    const context = useContext(DataContext);
    const [notify_details, SetNotifyDetails] = useState({});

    useEffect(() => {
        console.log("viwe Notifications On mount :", props);
        console.log("view Notifications context :", context);
        SetNotifyDetails(props.value)
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);


    return (
        <div className="">
            <div className="d-flex align-items-center">
                <Link to="/notification" >
                    <div className="ps-2 pe-3 cursor">
                        <Feather name="arrow-left" size={16} color="black" />
                    </div>
                </Link>
                <div className="px-1">
                    <p className="text-dark fw-bold fs-7">{notify_details.title}</p>
                </div>
            </div>

            <div className="p-2">
                <div className="text-center py-2">
                    <img src={notify_details.img_path} className="prods-img" />
                </div>
                <p>{notify_details.content}</p>

            </div>
        </div>
    )
}
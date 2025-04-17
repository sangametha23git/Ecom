import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { Ionicons, } from "@expo/vector-icons";

export default function OrderFilter(props: any) {
    const context = useContext(DataContext);
    const [checkbox_data, SetCheckBoxData] = useState([
        {
            id: 1,
            title: "Order Status",
            childern: [
                { id: 1, value: "On the way" },
                { id: 2, value: "Delivered" },
                { id: 3, value: "Cancelled" },
                { id: 4, value: "Returned" },
            ],
        },
        {
            id: 2,
            title: "Order Time",
            childern: [
                { id: 1, value: "Last 30 days" },
                { id: 2, value: "2020" },
                { id: 2, value: "2019" },
                { id: 2, value: "Older" },
            ],
        }
    ]);
    const [expanded, SetExpanded] = useState(true);
    const [checked, SetChecked] = useState(false);
    const [width, SetWidth] = React.useState(innerWidth);

    useEffect(() => {
        console.log("OrderFilter On mount :", props);
        console.log("OrderFilter context :", context);
    }, []);


    return (
        <div className={width <= 720 ? "vw-100 container" : "w-100"}>
            <div className="px-3">
                {checkbox_data.map((data, index) => (
                    <div className="border-top py-3" key={index}>
                        <p className="text-dark fw-bolder">{data.title}</p>
                        {data.childern.map((child_data, child_index) => (
                            <div className="pt-3 h-30px" key={child_index}>
                                <label className="d-flex align-items-center mb-0">
                                    <input
                                        type="checkbox"
                                        name="brand1"
                                        className="checkbox"
                                    />
                                    <p className="pl-1">{child_data.value}</p>
                                </label>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
                <button className="bottom-fixed py-2 cursor center bg-warning md-none w-100">
                    <p className="mb-0 fw-bolder text-dark">Apply Filters</p>
                </button>
            </div>
        </div>
    );
}
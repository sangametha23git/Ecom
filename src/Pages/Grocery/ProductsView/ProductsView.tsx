import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";



export default function GroceryProductsView(props: any) {
    const context = useContext(DataContext);

    useEffect(() => {
        console.log("GroceryProductsView On mount :", props);
        console.log("GroceryProductsView On context :", context);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);

    return (
        <div className="page-main mb-5 px-sm-0 px-md-2">
            <div className="p-3 bg-fff container">
                <div className="prod-view">
                    <img
                        src={require("../../../assets/img/products/groce6.png")}
                        className="prodview"
                    />
                </div>
                <div className="details pt-3">
                    <h5>Gold Winner oil</h5>
                    <p>
                        <b className="">Refinement Oil</b>
                    </p>
                    <p className="pt-2">
                        Sunflower oil is primarily composed of linoleic acid, a
                        polyunsaturated fat, and oleic acid, a monounsaturated fat.
                        Through selective breeding and manufacturing processes, oils of
                        differing proportions of the fatty acids are produced.The
                        expressed oil has a neutral taste profile. The oil contains a
                        large amount of vitamin E.
                    </p>
                    <ul className="pt-2 grocery_ul">
                        <li>Palmitic acid (saturated): 5%</li>
                        <li>Stearic acid (saturated): 6%</li>
                        <li>Oleic acid (monounsaturated omega-9): 30%</li>
                        <li>Linoleic acid (polyunsaturated omega-6): 59%</li>
                    </ul>

                    <p className="pt-2 ">
                        Four types of sunflower oils with differing concentrations of
                        fatty acids are produced through plant breeding and industrial
                        processing: high-linoleic, high-oleic, mid-oleic, and
                        high-stearic combined with high-oleic.
                    </p>

                    <ul className="pt-2 grocery_ul">
                        <li> High-linoleic, 69% linoleic acid</li>
                        <li>High-oleic, 82% oleic acid</li>
                        <li>Mid-oleic, 65% oleic acid</li>
                        <li>
                            High-stearic with high-oleic, 18% stearic acid and 72% oleic
                            acid
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
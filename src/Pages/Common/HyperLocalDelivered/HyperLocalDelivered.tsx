import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";


export default function HyperLocalDelivered(props: any) {
  const context = useContext(DataContext);

  useEffect(() => {
    console.log("HyperLocalDelivered On mount :", props);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="pb-3 w-100 bg-lightPage">
      <div className="d-flex py-2 px-3 light-shadow bg-fff">
        <div className="">
          <h6 className="pb-1">ORDER #0254</h6>
          <div className="flex">
            <small>06:45 pm | 1 Item,</small>
            <h6 className="pl-1">₹116</h6>
          </div>
        </div>
        <div className="ms-auto">
          <p className="mb-0 cursor align-center">
            <AntDesign name="customerservice" size={17} color="orange" />
            <b className="pl-1 text-warning">HELP</b>
          </p>
        </div>
      </div>

      <div className="row container">
        <div className="col-md-6 p-0">
          <div className="card p-2 mt-2">
            <div className="row mb-2 mt-3 pt-2">
              <div className="col-1">
                <MaterialIcons name="pin-drop" size={20} color="#aaa" />
              </div>
              <div className="col-11">
                <h6>Hotel Name</h6>
                <p>address</p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1">
                <MaterialIcons name="person-pin" size={20} color="#aaa" />
              </div>
              <div className="col-11">
                <h6>Customer Name</h6>
                <p>address</p>
              </div>
            </div>
          </div>
          <div className="card mt-2 p-3">
            <p>Order Deivered on April 12, 07.10 pm</p>
          </div>
        </div>

        <div className="col-md-6 p-0">

          <div className="card p-2 mt-2">
            <h6 className="text-gray pl-1 pt-2">Bill Details</h6>
            <div className="row pt-3">
              <div className="col-9 mb-2">
                <h6>Food name</h6>
              </div>
              <div className="col-3 text-right mb-2">
                <h6 className="pl-1">₹116</h6>
              </div>

              <div className="col-9 mb-2">
                <p>Item Total</p>
              </div>
              <div className="col-3 text-right mb-2">
                <p>₹110.00</p>
              </div>

              <div className="col-9 mb-2">
                <p>GST</p>
              </div>
              <div className="col-3 text-right mb-2">
                <p>₹5.50</p>
              </div>

              <div className="col-9 mb-2">
                <p>Delivery Charge</p>
              </div>
              <div className="col-3 text-right mb-2">
                <p>₹0</p>
              </div>
              <div className="line-border" />
              <div className="col-6 mb-1">
                <p className="pl-2">Paid via Cash</p>
              </div>
              <div className="col-3 text-center mb-1">
                <h6>Total</h6>
              </div>
              <div className="col-3 text-right mb-1">
                <h6>₹116</h6>
              </div>
            </div>
          </div>

          <div className="mt-2 w-100  card">
            <Link to="/" className="text-center">
              <h6 className="text-green">Reorder</h6>
            </Link>
          </div>
        </div>
      </div>

    
    </div>
  );
}
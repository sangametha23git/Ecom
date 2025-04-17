import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OfferPage(props: any) {
    const context = useContext(DataContext);


    useEffect(() => {
        console.log("OfferPage On mount :", props);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }, []);

    return (
        <div className="mt-1">
        <h5 className="p-3">Offers</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 border-bottom">
              <div className="row pt-2">
                <div className="col-3 p-0">
                  <img
                    src={require("../../../assets/img/food.png")}
                    className="offer-img"
                  />
                </div>
                <div className="col-9">
                  <h6>5% Cashback on Foods</h6>
                  <p>Foods for you </p>
                  <div className="flex align-center">
                    <MaterialCommunityIcons
                      name="brightness-percent"
                      size={14}
                      color="rgb(252, 2, 2)"
                    />
                    <p className="pl-1 text-dark">
                      {" "}
                      <small>Dec 5 to 10</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 border-bottom">
              <div className="row pt-2">
                <div className="col-3 p-0">
                  <img
                    src={require("../../../assets/img/western.png")}
                    className="offer-img"
                  />
                </div>
                <div className="col-9">
                  <h6>Deals on western fashions</h6>
                  <p>Western gowns & Tops </p>
                  <div className="flex align-center">
                    <MaterialCommunityIcons
                      name="brightness-percent"
                      size={14}
                      color="rgb(252, 2, 2)"
                    />
                    <p className="pl-1 text-dark">
                      {" "}
                      <small>Dec 5 to 10</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
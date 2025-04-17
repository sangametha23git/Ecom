import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Octicons,
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer, Modal } from "@material-ui/core";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const handleDragStart = (e) => e.preventDefault();


export default function EcommerceMainCategory(props: any) {
  const context = useContext(DataContext);
  const [category_data, SetCategoryData] = useState([
    {
      id: 2,
      src: require("../../../assets/img/category/living.png"),
      name: "Living Room",
      content: "Shop Products in your mobile",

    },
    {
      id: 3,
      src: require("../../../assets/img/category/bedroom.png"),
      name: "Bedroom",
      content: "Shop Products in your mobile",

    },
    {
      id: 4,
      src: require("../../../assets/img/category/work.png"),
      name: "Study & Work",
      content: "Shop Products in your mobile",

    },
    {
      id: 5,
      src: require("../../../assets/img/category/pooja.png"),
      name: "Pooja Room",
      content: "Shop Products in your mobile",

    },
    {
      id: 6,
      src: require("../../../assets/img/category/outdoor.png"),
      name: "Outdoor",
      content: "Shop Products in your mobile"
    },
  ]);
  const [is_loading, SetIsLoading] = useState(true);

  useEffect(() => {
    console.log("EcommerceMainCategory On mount :", props);
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      return { ...prevValue };
    });
    setTimeout(() => {
      SetIsLoading(false);
      console.log("timeout called!")
    }, 5000);
  }, []);




  return (

    <div className="mb-3">


        <div className="p-3">
          {is_loading ? (
            <Skeleton height={12} width={100} />
          ) : (
            <h5>Furniture</h5>
          )}
        </div>
      <div className="row py-2">
        {category_data.map((data, index) => (
          <div key={index} className="col-4 col-md-3 col-lg-2 p-2">
            {is_loading ? (
              <div className="text-center ">
                <Skeleton height={80} width="100%"  />
                <div className="mt-2">
                  <Skeleton height={8} width={60} />
                </div>
              </div>
            ) : (
              <Link to="/ecommerce/ecommerce_sub_category" className=" text-center cursor">
                <div className="main-category-css p-1">
                    <img src={data.src} className="ecomcate" />
                </div>
                <p className="mt-2">{data.name}</p>
              </Link>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
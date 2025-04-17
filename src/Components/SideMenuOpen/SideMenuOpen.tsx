import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Account from "../../Pages/Common/Account/Account";
import Address from "../../Pages/Common/Address/Address";
import Cart from "../../Pages/Common/Cart/Cart";
import Notifications from "../../Pages/Common/Notifications/Notifications";
import OfferPage from "../../Pages/Common/OfferPage/OfferPage";
import OrderPage from "../../Pages/Common/OrderPage/OrderPage";
import WishList from "../../Pages/Common/WishList/WishList";
import EcommerceCategory from "../../Pages/Ecommerce/Categories/Categories";
import GroceryCategory from "../../Pages/Grocery/Categories/Categories";
import RestaurantCategory from "../../Pages/Restaurants/Categories/Categories";
import DataContext from "../../utils/Context/DataContext";
import SideMenu from "../SideMenu/SideMenu";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  Fontisto,
  AntDesign,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

export default function SideMenuOpen(props: any) {
  const context = useContext(DataContext);
  const [type, SetType] = useState("all");
  const [menu_type, SetMenuType] = useState("");


  const [width, SetWidth] = React.useState(innerWidth);

  useEffect(() => {
    console.log("SideMenuOpen On mount :", props);

    let url = window.location.pathname;
    let domain = url.split("/");
    let type_value = domain[domain.length - 1];
    SetMenuType(type_value);
    if (type_value == "sector") {
      SetType("cart");
    } else if (type_value == "restaurant") {
      SetType("food_cat");
    } else if (type_value == "ecommerce") {
      SetType("ecommerce_cat");
    } else if (type_value == "grocery") {
      SetType("fruit_cat");
    } else {
      SetType(type_value);
      console.log("Else on sidemenu open :", type_value);
    }
    console.log("type on sidemenu open : ", type_value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      return { ...prevValue };
  });
  }, []);

  function onSelect(data) {
    SetType(data);
    console.log("type :", type);
  }

  return (
    <div className="page-main ">
      <div className="row">
        <div className="col-md-3 sm-none p-2 pt-0">
          <SideMenu
            onSelect={(data) => {
              console.log("sidemenu open: ", data);
              onSelect(data);
              console.log("menu type: ", data);
            }}
            type={menu_type}
          />
        </div>
        <div className="col-md-9 p-sm-0 px-md-1">
          {menu_type != "sector" ? (
            type == "food_cat" ? (
              <RestaurantCategory />
            ) :
              type == "ecommerce_cat" ? (
                <EcommerceCategory />
              ) :
                type == "fruit_cat" ? (
                  <GroceryCategory />
                )  : null
          ) : null}

          {type == "cart" ? <Cart /> : ""}
          {type == "order" ? <OrderPage /> : ""}
          {type == "notifications" ? <Notifications /> : ""}
          {type == "offer" ? <OfferPage /> : ""}
          {type == "wishlist" ? <WishList /> : ""}
          {type == "address" ? <Address /> : ""}
          {type == "account" ? <Account /> : ""}
        </div>
      </div>
    </div>
  );
}
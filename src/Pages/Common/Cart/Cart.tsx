import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer, Modal, SwipeableDrawer } from "@material-ui/core";
import ImageViewer from "react-simple-image-viewer";
import Headroom from "react-headroom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const handleDragStart = (e) => e.preventDefault();
import CartOptions from "./CartOption";
import { api } from "../../../utils/Api";

const responsive = {
  0: { items: 1 },
  200: { items: 2 },
  300: { items: 2 },
  350: { items: 3 },
  548: { items: 4 },
  720: { items: 5 },
  1024: { items: 6 },
};
export default function Cart(props: any) {
  const context = useContext(DataContext);
  const [width, SetWidth] = React.useState(innerWidth);
  const [delivery_type, selectDeliveryType] = useState([
    {
      index: 0,
      img: require("../../../assets/icon/all.png"),
      name: "All",
      checked: true,
    },
    {
      index: 1,
      img: require("../../../assets/icon/store.png"),
      name: "Inshop",
      checked: false,
    },
    {
      index: 2,
      img: require("../../../assets/icon/delivery.png"),
      name: "Hyper Local",
      checked: false,
    },
    {
      index: 3,
      img: require("../../../assets/icon/take-away.png"),
      name: "Take Away",
      checked: false,
    },
    {
      index: 4,
      img: require("../../../assets/icon/delivery-truck.png"),
      name: "Schedule",
      checked: false,
    },
    {
      index: 5,
      img: require("../../../assets/icon/box.png"),
      name: "Courier",
      checked: false,
    },
  ]);
  const [tabs, SetTabs] = useState([
    { name: "All", value: "All" },
  ]);
  const [all_true, SetAllTrue] = useState(true);
  const [food_true, SetFoodTrue] = useState(true);
  const [grocery_true, SetGroceryTrue] = useState(true);
  const [ecommerce_true, SetEcommerceTrue] = useState(true);
  const [select_delivery_type, SetSelectDeliveryType] = useState("All");
  const [sections_data, SetSectionsData] = useState([]);
  const [Selected_sections, SetSelectedSections] = useState(1);
  const [cart_data, SetCartData] = useState({});

  useEffect(() => {
    console.log("Cart On mount :", props);
    get_init();
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      return { ...prevValue };
    });
  }, []);

  async function get_init() {
    // let pass_data = {
    //   get: {
    //     brand: id_value.brand_id,
    //   },
    // };
    let data_res: any = await api("/cart");
    console.log("get cart response :", data_res.response);
    let sections_data =  data_res.response.sections;
    sections_data.unshift({
      id: "01",
      name: "All",
      order_type: "Products",
      sector_name: "Ecommerce",
      slug: "ecommerce",
      url: "5f4344c6c8214d652c830b884f914bde.png"
    })
    SetSectionsData(sections_data);
    let cart_data = data_res.response.cart;
    if (cart_data.hasOwnProperty("vendors")) {
      cart_data.vendors.map((v_ele: any, v_index: any) => {
        v_ele.products.map((ele: any, index: any) => {
          ele.addcount = 0;
          ele.addbtn = false;
        })
      })
      SetCartData(cart_data);
    }


  }

  return (
    <div className="card bg-gray-300 mb-3" >
      <div className="row">

        <div className="m-0 p-0">
          <div
            // value={value}
            // onChange={tabs}
            // indicatorColor="primary"
            className="row react-tabs "
          // variant="scrollable"
          // scrollButtons="on"
          // aria-label="scrollable auto tabs example"
          >
            <div className="tablist sticky-sm-60px sticky-md-110px p-0">
              <div className="border-bottom shadow-bottom bg-fff ">

                <AliceCarousel
                  mouseTracking
                  touchMoveDefaultEvents={false}
                  paddingRight={20}
                  disableDotsControls
                  responsive={responsive}
                  disableButtonsControls
                  controlsStrategy="alternate"
                >
                  {sections_data.map((tab, index) => (
                    <div onDragStart={handleDragStart} key={index} >
                       
                        <div className="text-center" onClick={() => {
                          SetSelectedSections(tab.id)
                        }}>
                          <p label={tab.value} className={Selected_sections == tab.id || 0 ? "tab-active p-2 pb-3 cursor" : "cursor p-2 pb-3"}>
                            {" "}
                            {tab.name}{" "}
                          </p>
                        </div>
                    </div>

                  ))}


                </AliceCarousel>
              </div>
            </div>

            <div className="p-0">
              <div className="py-3 ">
                <h6 className="pl-2">Select Delivery Type</h6>
                <div className="align-center row p-2">
                  {delivery_type.map((data, index) => (
                    <div
                      className="col-3 col-md-2 p-0 cursor text-center"
                      key={index}
                      onClick={() => {
                        //   checkedType(index);
                        SetSelectDeliveryType(data.name);
                        console.log("selected type: ", selectDeliveryType);
                      }}
                    // onDragStart={handleDragStart}
                    >
                      <div className={select_delivery_type == data.name ? "p-2 bg-fff radius" : "p-2"}>
                        <img src={data.img} className="typeimg" />
                        <p className="pt-1">
                          <small className="smallfont">{data.name}</small>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <CartOptions
                  open={all_true}
                  data={cart_data}
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
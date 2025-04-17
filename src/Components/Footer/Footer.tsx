import React, { useState, useEffect, useContext } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import DataContext from "../../utils/Context/DataContext";
import {
    MaterialIcons,
    FontAwesome5,
    AntDesign,
    Feather,
    Ionicons,
    Entypo,
    Fontisto,
    FontAwesome,
    MaterialCommunityIcons
} from "@expo/vector-icons";
import Modal from "@material-ui/core/Modal";
import SideMenu from "../SideMenu/SideMenu";
import OrderPage from "../../Pages/Common/OrderPage/OrderPage";
import Cart from "../../Pages/Common/Cart/Cart";
import Notifications from "../../Pages/Common/Notifications/Notifications";
import OfferPage from "../../Pages/Common/OfferPage/OfferPage";
import WishList from "../../Pages/Common/WishList/WishList";
import Address from "../../Pages/Common/Address/Address";
import Account from "../../Pages/Common/Account/Account";


export default function Footer(props) {
    const { t } = props;
    const context = useContext(DataContext);
    const [click, SetClick] = useState(false);
    const [side_menu, SetSideMenu] = useState(false);
    const [menu_type, SetMenuType] = useState("");
    const [active_type, SetActiveType] = useState("home")
    const [type, SetType] = useState("all");

    useEffect(() => {
        console.log("Footer On mount :", props);
        console.log("Footer context :", context);

        let url = window.location.pathname;
        let domain = url.split("/");
        let type_value = domain[domain.length - 1];
        if (type_value == "") {
            SetMenuType("sector");
        }
        if (type_value == "restaurant") {
            SetMenuType("food");
        }
        if (type_value == "ecommerce") {
            SetMenuType("ecommerce");
        }
        if (type_value == "grocery") {
            SetMenuType("grocery");
        }
        console.log("header type_value :", type_value);

    }, []);

    function onSelect(type) {
        console.log("sidemenu :", type);
        SetType(type);
        window.location = type;

        // { type == "cart" ? <Cart /> : "" }
        // { type == "order" ? <OrderPage /> : "" }
        // { type == "notifications" ? <Notifications /> : "" }
        // { type == "offer" ? <OfferPage /> : "" }
        // { type == "wishlist" ? <WishList /> : "" }
        // { type == "address" ? <Address /> : "" }
        // { type == "account" ? <Account /> : "" }
    };


    return (
        <div>
            <div className="navfooter">
                <div className="bottom-tabs">
                    <div className="row align-center">
                        <div className="col-2 cursor">
                            {/* <div className="md-none " onClick={sidemenu}>
                <Feather name="menu" size={24} color="black" />
              </div> */}
                            {menu_type == "sector" || "category" ? (
                                <Link
                                    to="/"
                                    onClick={() => {
                                        // active("home");
                                        SetActiveType("home");
                                    }}
                                >
                                    <div className="home-menu">
                                        {active_type == "home" ? (
                                            <AntDesign name="home" size={21} color="#333" />
                                        ) : (
                                            <AntDesign name="home" size={21} color="#333" />
                                        )}
                                    </div>
                                </Link>
                            ) : (
                                <span>
                                    {menu_type == "food" ? (
                                        <Link
                                            to="/restaurant"
                                            onClick={() => {
                                                // active("home");
                                                SetActiveType("home");
                                            }}
                                        >
                                            <div className="home-menu">
                                                {active_type == "home" ? (
                                                    <AntDesign name="home" size={21} color="#333" />
                                                ) : (
                                                    <AntDesign name="home" size={21} color="#333" />
                                                )}
                                            </div>
                                        </Link>
                                    ) : (
                                        ""
                                    )}

                                    {menu_type == "ecommerce" ? (
                                        <Link
                                            to="/ecommerce"
                                            onClick={() => {
                                                // active("home");
                                                SetActiveType("home");

                                            }}
                                        >
                                            <div className="home-menu">
                                                {active_type == "home" ? (
                                                    <AntDesign name="home" size={21} color="#333" />
                                                ) : (
                                                    <AntDesign name="home" size={21} color="#333" />
                                                )}
                                            </div>
                                        </Link>
                                    ) : (
                                        ""
                                    )}

                                    {menu_type == "grocery" ? (
                                        <Link
                                            to="/grocery"
                                            onClick={() => {
                                                SetActiveType("home");

                                            }}
                                        >
                                            <div className="home-menu">
                                                {active_type == "home" ? (
                                                    <AntDesign name="home" size={21} color="#333" />
                                                ) : (
                                                    <AntDesign name="home" size={21} color="#333" />
                                                )}
                                            </div>
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                </span>
                            )}
                        </div>
                        <div className="col-2 cursor">
                            {/* {menu_type != "sector" ? ( */}
                                <div
                                    // to={"/sidemenuopen/" + menu_type}
                                    className="flex border-right cursor"
                                    onClick={() => {
                                        // active("category");
                                        SetActiveType("category");

                                    }}
                                >
                                    <div className="category-menu">
                                        {active_type == "category" ? (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        ) : (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        )}
                                    </div>
                                </div>
                            {/* ) : (
                                null
                            )} */}

                            {menu_type == "grocery" ? (
                                <Link
                                    to="/grocery/grocery_category"
                                    onClick={() => {
                                        SetActiveType("category");

                                    }}
                                >
                                    <div className="category-menu">
                                        {active_type == "category" ? (
                                            <AntDesign name="appstore1" size={21} color="#333" />
                                        ) : (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        )}
                                    </div>
                                </Link>
                            ) : ("")}

                            {menu_type == "food" ? (
                                <Link
                                    to="/grocery/grocery_category"
                                    onClick={() => {
                                        SetActiveType("category");

                                    }}
                                >
                                    <div className="category-menu">
                                        {active_type == "category" ? (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        ) : (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        )}
                                    </div>
                                </Link>
                            ) : ("")}

                            {menu_type == "ecommerce" ? (
                                <Link
                                    to="/grocery/grocery_category"
                                    onClick={() => {
                                        SetActiveType("category");

                                    }}
                                >
                                    <div className="category-menu">
                                        {active_type == "category" ? (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        ) : (
                                            <AntDesign name="appstore-o" size={21} color="#333" />
                                        )}
                                    </div>
                                </Link>
                            ) : ("")}
                        </div>
                        <div className="col-2 cursor">
                            <a href="https://1superapp.com/dashboard">
                                <img
                                    src={require("../../assets/img/logo.png")}
                                    style={{ width: 30, height: 30, margin: 5 }}
                                    className="logo"
                                />
                            </a>
                        </div>
                        <div className="col-2 cursor">
                            <div className="notification-menu">
                                <Link
                                    to="/"
                                    onClick={() => {
                                        // active("search");
                                        SetActiveType("search");
                                    }}
                                >
                                    {active_type == "search" ? (
                                        <Ionicons name="md-notifications-outline" size={21} color="#333" />
                                       ) : (
                                        <Ionicons name="md-notifications-outline" size={21} color="#333" />
                                       )}
                                </Link>
                            </div>
                        </div>
                        <div className="col-2 cursor">
                            <div
                                className="md-none cursor pr-1"
                                onClick={() => { SetSideMenu(true) }}
                            >
                                <Feather name="menu" size={20} color="black" />
                            </div>
                            {/* <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                  <Ionicons name="ios-close" size={24} color="black" />
                ) : (
                  <Ionicons name="menu" size={24} color="black" />
                  // <Entypo name="menu" size={24} color="black" />
                )}
              </div> */}


                        </div>
                    </div>
                </div>

                <Modal
                    open={side_menu}
                    className="menu-scroll"
                // onClose={sidemenuClose}
                >
                    <div className="flex">
                        <div className="w-75">
                            <SideMenu
                                from="mobile_header"
                                onSelect={(data) => {
                                    console.log("footer sidemenu open: ", data);
                                    let path_value = "";
                                    if (data == "all") {
                                        console.log("sidemenu onSelect data: ", data);
                                        path_value = "/sidemenuopen/all";
                                    } else if (data == "cart") {
                                        path_value = "/cart";
                                    } else if (data == "order") {
                                        path_value = "/orderpage";
                                    } else if (data == "notifications") {
                                        path_value = "/notification";
                                    } else if (data == "offer") {
                                        path_value = "/offer";
                                    } else if (data == "wishlist") {
                                        path_value = "/wishlist";
                                    } else if (data == "seller") {
                                        path_value = "/seller";
                                    } else if (data == "service") {
                                        path_value = "/service";
                                    } else if (data == "terms") {
                                        path_value = "/terms";
                                    } else if (data == "sector") {
                                        path_value = "/";
                                    } else if (data == "account") {
                                        path_value = "/account";
                                    } else if (data == "address") {
                                        path_value = "/address";
                                    } else if (data == "login") {
                                        // setState({signup: true});
                                        // console.log("Signup clicked");
                                        // <Modal open={signup}>
                                        //   <Signup />
                                        // </Modal>
                                        path_value = "/signup";
                                    } else if (data == "logout") {
                                        alert("Do you want to Logout!");
                                    }
                                    onSelect(path_value);
                                    SetSideMenu(false);
                                }}
                                type={menu_type}
                            />
                        </div>
                        <div className="text-right cursor p-4 w-25">
                            <Ionicons
                                name="ios-close"
                                size={30}
                                color="white"
                                onClick={() => { SetSideMenu(false) }}
                            />
                        </div>
                    </div>
                </Modal>
            </div>

            <div className="footer sm-none">
                <div className="top pb-3">
                    <div className="row">
                        <div className="col-md-1 col-6 mt-3">
                            <p className="pb-3"><b>ABOUT</b> </p>
                            <p className="cursor hover_line">Contact Us</p>
                            <p className="cursor hover_line">About Us</p>
                        </div>
                        <div className="col-md-2 col-6 mt-3">
                            <p className="pb-3"><b>POLICY</b> </p>
                            <p className="cursor hover_line">Terms & Conditions</p>
                            <p className="cursor hover_line">Security</p>
                            <p className="cursor hover_line">Privacy</p>
                            <p className="cursor hover_line">Return Policy</p>
                        </div>

                        <div className="col-md-1 col-6 mt-3">
                            <p className="pb-3"><b>SOCIAL</b> </p>
                            <p className="cursor hover_line">Facebook</p>
                            <p className="cursor hover_line">Twitter</p>
                            <p className="cursor hover_line">Youtube</p>
                        </div>

                        <div className="col-md-2 col-6 mt-3">
                            <p className="pb-3"><b>HELP</b> </p>
                            <p className="cursor hover_line">FAQ</p>
                            <p className="cursor hover_line">Report</p>
                            <p className="cursor hover_line">Payments</p>
                            <p className="cursor hover_line">Shipping</p>
                            <p className="cursor hover_line">Cancellation & Returns</p>
                        </div>

                        <div className="col-md-3 col-12 mt-3">
                            <p className="pb-3"><b>CONTACT US</b> </p>
                            <p className="pb-2">onesuper@gmail.com</p>
                            <p>One Super Private Limited, Samayasangali, Pallipalayam, Namakkal- 638008, Tamilanadu, India</p>
                        </div>

                        <div className="col-md-3 col-12 mt-3">
                            <p className="pb-3"><b>OFFICE ADDRESS</b> </p>
                            <p className="pb-2">One Super Private Limited, Samayasangali, Pallipalayam, Namakkal- 638008, Tamilanadu, India</p>
                            <p>Phone: <b className="text-primary">1234567890</b></p>
                        </div>
                    </div>
                </div>
                <div className="row border-top pt-3">
                    <div className="col-md-2 mb-2 text-center">
                        <h5 className="text-white">SuperOne</h5>
                    </div>

                    <div className="col-md-2 mb-2">
                        <div className="flex center">
                            <FontAwesome name="question-circle" size={18} color="#007dae" />
                            <p className="pl-1 text-white hover_line cursor">Need Help</p>
                        </div>
                    </div>
                    <div className="col-md-2 mb-2">
                        <div className="flex center">
                            <MaterialIcons name="business-center" size={20} color="#007dae" />
                            <p className="pl-1 text-white hover_line cursor">Sell On OneSuper</p>
                        </div>
                    </div>
                    <div className="col-md-2 mb-2">
                        <div className="flex center">
                            <AntDesign name="notification" size={20} color="#007dae" />
                            <p className="pl-1 text-white hover_line cursor">Advertise</p>
                        </div>
                    </div>
                    <div className="col-md-2 text-center mb-2">
                        <div className="flex center">
                            <MaterialCommunityIcons name="comment-question-outline" size={20} color="#007dae" />
                            <p className="pl-1 text-white hover_line cursor">Enquiry</p>
                        </div>
                    </div>
                    <div className="col-md-2 text-center mb-2">
                        <p className="text-white">
                            <FontAwesome5 name="copyright" size={11} color="white" />
                            OneSuper 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
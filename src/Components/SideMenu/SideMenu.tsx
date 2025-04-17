import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../utils/Context/DataContext";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Modal from "@material-ui/core/Modal";


export default function SideMenu(props: any) {
    const context = useContext(DataContext);
    const [width, SetWidth] = React.useState(innerWidth);
    const [expanded, SetExpanded] = useState(false);
    const [active, SetActive] = useState("all");
    const [selected_type, SetSelectedType] = useState(false);
    const [login, SetLogin] = useState(true);
    const [sector, SetSector] = useState(false);


    useEffect(() => {
        console.log("SideMenu On mount :", props);
    }, []);

    function accordionChange() {
        SetExpanded(!expanded);
    };

    function menutype(type) {
        console.log(type);
        SetActive(type);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        props.onSelect && props.onSelect(type);
    };

    function logout() {
        alert("Do you want to exit!");
    };

    return (
        <div className="sticky-md-110px">
            {sector ? <Link to="/" /> : ""}
        {login ? "" : <Link to="/" />}
            {/* {props.from == "mobile_header" ? ( */}
            {width < 720 ? (
                <div className="mob_sidemenu card p-3 pb-5">
                    {/* <Accordion onChange={()=>{accordionChange()}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            expanded="true"
                        > */}
                            <div className="pt-2 flex align-center">
                                <img
                                    src={require("../../assets/icon/profile.png")}
                                    className="profile-img pr-2"
                                />
                                <div>
                                    <p>Hello</p>
                                    <h5>UserName</h5>
                                </div>
                            </div>
                        {/* </AccordionSummary>
                        <AccordionDetails>
                            <hr />
                            <div className="container">
                                <div className="flex pt-3">
                                    <MaterialCommunityIcons
                                        name="account"
                                        size={18}
                                        color="black"
                                    />
                                    <p className="pl-2">Account Settings</p>
                                </div>
                                <div className="flex pt-3">
                                    <Entypo name="location" size={18} color="black" />
                                    <p className="pl-2">Address Management</p>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion> */}
                    <hr />

                    <div className="p-2 sidemenu">

                        {props.type != "sector" ? (
                            <div
                                className="flex pt-2 cursor"
                                onClick={() => {
                                    if (props.type == "food") {
                                        menutype("food_cat");
                                    }
                                    if (props.type == "ecommerce") {
                                        menutype("ecommerce_cat");
                                    }
                                    if (props.type == "fruit") {
                                        menutype("fruit_cat");
                                    }
                                    SetSelectedType(true);
                                }}
                            >
                                <AntDesign
                                    name="appstore1"
                                    size={18}
                                    color={active === "all" ? "#0073e6" : "black"}
                                />
                                <p
                                    className={
                                        active === "all" ? "active pl-2" : "pl-2"
                                    }
                                >
                                    All Categories
                                </p>
                            </div>
                        ) : null}

                        {/* <div
                className="flex pt-2 cursor"
                onClick={() => {
                  menutype("all");

                  setState({ selected_type: true });
                }}
              >
                <AntDesign
                  name="appstore1"
                  size={18}
                  color={active === "all" ? "#0073e6" : "black"}
                />
                <p
                  className={
                    active === "all" ? "active pl-2" : "pl-2"
                  }
                >
                  All Categories
                </p>
              </div> */}

                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("cart");
                                SetSelectedType(true);
                            }}
                        >
                            <Feather
                                name="shopping-cart"
                                size={18}
                                color={active === "cart" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "cart" ? "active pl-2" : "pl-2"
                                }
                            >
                                My Cart
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("order");
                                SetSelectedType(true);
                            }}
                        >
                            <Fontisto
                                name="shopping-bag"
                                size={18}
                                color={active === "order" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "order" ? "active pl-2" : "pl-2"
                                }
                            >
                                My Orders
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("notifications");
                                SetSelectedType(true);
                            }}
                        >
                            <Ionicons
                                name="notifications"
                                size={18}
                                color={
                                    active === "notifications"
                                        ? "#0073e6"
                                        : "black"
                                }
                            />
                            <p
                                className={
                                    active === "notifications"
                                        ? "active pl-2"
                                        : "pl-2"
                                }
                            >
                                Notifications
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("offer");
                                SetSelectedType(true);
                            }}
                        >
                            <MaterialCommunityIcons
                                name="brightness-percent"
                                size={18}
                                color={active === "offer" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "offer" ? "active pl-2" : "pl-2"
                                }
                            >
                                Offer
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("wishlist");
                                SetSelectedType(true);
                            }}
                        >
                            <Ionicons
                                name="heart"
                                size={18}
                                color={
                                    active === "wishlist" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "wishlist" ? "active pl-2" : "pl-2"
                                }
                            >
                                Wishlist
                            </p>
                        </div>

                        <hr />
                        <h6 className="pt-2">Help & Service</h6>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("seller");
                                SetSelectedType(true);
                            }}
                        >
                            <FontAwesome
                                name="rupee"
                                size={18}
                                color={active === "seller" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "seller" ? "active pl-2" : "pl-2"
                                }
                            >
                                Sell on Onesuper
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("service");
                                SetSelectedType(true);
                            }}
                        >
                            <AntDesign
                                name="customerservice"
                                size={18}
                                color={
                                    active === "service" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "service" ? "active pl-2" : "pl-2"
                                }
                            >
                                Customer Service
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("terms");
                                SetSelectedType(true);
                            }}
                        >
                            <Ionicons
                                name="document-attach-outline"
                                size={18}
                                color={active === "terms" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "terms" ? "active pl-2" : "pl-2"
                                }
                            >
                                Terms & Conditions
                            </p>
                        </div>
                        <hr />
                        <h6 className="pt-2">Settings</h6>

                        <div
                            className="flex cursor pt-4"
                            onClick={() => {
                                menutype("sector");
                                SetSector(true);
                                SetSelectedType(true);
                            }}
                        >
                            <MaterialCommunityIcons
                                name="vector-selection"
                                size={18}
                                color={active === "sector" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "sector" ? "active pl-2" : "pl-2"
                                }
                            >
                                Select Sector
                            </p>
                        </div>

                        <div
                            className="flex cursor pt-4"
                            onClick={() => {
                                menutype("account");
                                SetSelectedType(true);
                            }}
                        >
                            <MaterialCommunityIcons
                                name="account"
                                size={18}
                                color={
                                    active === "account" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "account" ? "active pl-2" : "pl-2"
                                }
                            >
                                Account Settings
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("address_update");
                                SetSelectedType(true);
                            }}
                        >
                            <Entypo
                                name="location"
                                size={18}
                                color={
                                    active === "address" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "address" ? "active pl-2" : "pl-2"
                                }
                            >
                                Your Address{" "}
                            </p>
                        </div>
                        {login ? (
                            <div
                                className="flex pt-4 cursor "
                                onClick={() => {
                                    menutype("login");
                                    //  loginOpen();
                                }}
                            >
                                <MaterialIcons
                                    name="login"
                                    size={18}
                                    color={
                                        active === "login" ? "#0073e6" : "black"
                                    }
                                />
                                <p
                                    className={
                                        active === "login" ? "active pl-2" : "pl-2"
                                    }
                                >
                                    Login & SignUp
                                </p>
                            </div>
                        ) : (
                            <div
                                className="flex pt-4 cursor"
                                onClick={() => {
                                    // menutype("logout");
                                    logout();
                                }}
                            >
                                <MaterialIcons
                                    name="logout"
                                    size={18}
                                    color={
                                        active === "logout" ? "#0073e6" : "black"
                                    }
                                />
                                <p
                                    className={
                                        active === "logout" ? "active pl-2" : "pl-2"
                                    }
                                >
                                    Logout
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="card sidemenu p-3 pb-5 shadow">
                    {/* <Accordion onChange={accordionChange()}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            expanded="true"
                        > */}
                            <div className="pt-2 flex align-center">
                                <img
                                    src={require("../../assets/icon/profile.png")}
                                    className="profile-img pr-2"
                                />
                                <div>
                                    <p>Hello</p>
                                    <h5>UserName</h5>
                                </div>
                            </div>
                        {/* </AccordionSummary>
                        <AccordionDetails>
                            <hr />
                            <div className="container">
                                <div className="flex pt-3">
                                    <MaterialCommunityIcons
                                        name="account"
                                        size={18}
                                        color="black"
                                    />
                                    <p className="pl-2">Account Settings</p>
                                </div>
                                <div className="flex pt-3">
                                    <Entypo name="location" size={18} color="black" />
                                    <p className="pl-2">Address Management</p>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion> */}
                    <hr />

                    <div className="p-2 sidemenu">
                        {props.type != "sector" ? (
                            <div
                                className="flex pt-2 cursor"
                                onClick={() => {
                                    if (props.type == "food") {
                                        menutype("food_cat");
                                    }
                                    if (props.type == "ecommerce") {
                                        menutype("ecommerce_cat");
                                    }
                                    if (props.type == "fruit") {
                                        menutype("fruit_cat");
                                    }
                                }}
                            >
                                <AntDesign
                                    name="appstore1"
                                    size={18}
                                    color={active === "all" ? "#0073e6" : "black"}
                                />
                                <p
                                    className={
                                        active === "all" ? "active pl-2" : "pl-2"
                                    }
                                >
                                    All Categories
                                </p>
                            </div>
                        ) : null}

                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("cart");
                            }}
                        >
                            <Feather
                                name="shopping-cart"
                                size={18}
                                color={active === "cart" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "cart" ? "active pl-2" : "pl-2"
                                }
                            >
                                My Cart
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("order");
                            }}
                        >
                            <Fontisto
                                name="shopping-bag"
                                size={18}
                                color={active === "order" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "order" ? "active pl-2" : "pl-2"
                                }
                            >
                                My Orders
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("notifications");
                            }}
                        >
                            <Ionicons
                                name="notifications"
                                size={18}
                                color={
                                    active === "notifications"
                                        ? "#0073e6"
                                        : "black"
                                }
                            />
                            <p
                                className={
                                    active === "notifications"
                                        ? "active pl-2"
                                        : "pl-2"
                                }
                            >
                                Notifications
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("offer");
                            }}
                        >
                            <MaterialCommunityIcons
                                name="brightness-percent"
                                size={18}
                                color={active === "offer" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "offer" ? "active pl-2" : "pl-2"
                                }
                            >
                                Offer
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("wishlist");
                            }}
                        >
                            <Ionicons
                                name="heart"
                                size={18}
                                color={
                                    active === "wishlist" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "wishlist" ? "active pl-2" : "pl-2"
                                }
                            >
                                Wishlist
                            </p>
                        </div>

                        <hr />
                        <h6 className="pt-2">Help & Service</h6>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("seller");
                            }}
                        >
                            <FontAwesome
                                name="rupee"
                                size={18}
                                color={active === "seller" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "seller" ? "active pl-2" : "pl-2"
                                }
                            >
                                Sell on Onesuper
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("service");
                            }}
                        >
                            <AntDesign
                                name="customerservice"
                                size={18}
                                color={
                                    active === "service" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "service" ? "active pl-2" : "pl-2"
                                }
                            >
                                Customer Service
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("terms");
                            }}
                        >
                            <Ionicons
                                name="document-attach-outline"
                                size={18}
                                color={active === "terms" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "terms" ? "active pl-2" : "pl-2"
                                }
                            >
                                Terms & Conditions
                            </p>
                        </div>
                        <hr />
                        <h6 className="pt-2">Settings</h6>

                        <div
                            className="flex cursor pt-4"
                            onClick={() => {
                                // menutype("sector");
                                SetSector(true);
                                SetSelectedType(false);
                            }}
                        >
                            <MaterialCommunityIcons
                                name="vector-selection"
                                size={18}
                                color={active === "sector" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "sector" ? "active pl-2" : "pl-2"
                                }
                            >
                                Select Sector
                            </p>
                        </div>

                        <div
                            className="flex cursor pt-4"
                            onClick={() => {
                                menutype("account");
                            }}
                        >
                            <MaterialCommunityIcons
                                name="account"
                                size={18}
                                color={
                                    active === "account" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "account" ? "active pl-2" : "pl-2"
                                }
                            >
                                Account Settings
                            </p>
                        </div>
                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("address_update");
                            }}
                        >
                            <Entypo
                                name="location"
                                size={18}
                                color={
                                    active === "address" ? "#0073e6" : "black"
                                }
                            />
                            <p
                                className={
                                    active === "address" ? "active pl-2" : "pl-2"
                                }
                            >
                                Address{" "}
                            </p>
                        </div>

                        <div
                            className="flex pt-4 cursor"
                            onClick={() => {
                                menutype("logout");
                            }}
                        >
                            <MaterialIcons
                                name="logout"
                                size={18}
                                color={active === "logout" ? "#0073e6" : "black"}
                            />
                            <p
                                className={
                                    active === "logout" ? "active pl-2" : "pl-2"
                                }
                            >
                                Logout
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
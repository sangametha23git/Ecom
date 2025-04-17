import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../utils/Context/DataContext";
import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Entypo,
    Fontisto,
} from "@expo/vector-icons";
import { Badge, Button, Modal, MenuItem } from "@material-ui/core";
//   import CurrencySelection from "../CurrencySelection/CurrencySelection";
import Select from "react-select";
import { defaultTheme } from "react-select";
import { OverlayTrigger, Popover, DropdownButton } from "react-bootstrap";
import Address from "../../Pages/Common/Address/Address";
import DeliveryType from "../../Pages/Common/DeliveryType/DeliveryType";
import SideMenu from "../SideMenu/SideMenu";
import Signup from "../../Pages/Common/Signup/Signup";
import { api } from "../../utils/Api";


const country_data = [
    {
        value: "NG",
        label: "Nigeria",
    },
    {
        value: "US",
        label: "United States",
    },
    {
        value: "IL",
        label: "Isreal",
    },
    {
        value: "IN",
        label: "India",
    },
    {
        value: "RO",
        label: "Romania",
    },
    {
        value: "DE",
        label: "Germany",
    },
    {
        value: "BS",
        label: "Bahamas",
    },
    {
        value: "CN",
        label: "China",
    },
    {
        value: "SO",
        label: "Somalia",
    },
];

const currency_data = [
    {
        value: " ₦",
        label: " ₦",
    },
    {
        value: "$",
        label: "$",
    },
    {
        value: "₪",
        label: "₪",
    },
    {
        value: "₹",
        label: "₹",
    },
    {
        value: "lei",
        label: "lei",
    },
    {
        value: "€",
        label: "€",
    },
    {
        value: "$",
        label: "$",
    },
    {
        value: "¥",
        label: "¥",
    },
    {
        value: "SOS",
        label: "SOS",
    },
];

const language_data = [
    { code: "ab", label: "Abkhaz", value: "аҧсуа" },
    { code: "aa", label: "Afar", value: "Afaraf" },
    { code: "af", label: "Afrikaans", value: "Afrikaans" },
    { code: "ak", label: "Akan", value: "Akan" },
    { code: "sq", label: "Albanian", value: "Shqip" },
    { code: "am", label: "Amharic", value: "አማርኛ" },
    { code: "ar", label: "Arabic", value: "العربية" },
    { code: "an", label: "Aragonese", value: "Aragonés" },
    { code: "hy", label: "Armenian", value: "Հայերեն" },
    { code: "as", label: "Assamese", value: "অসমীয়া" },
    { code: "av", label: "Avaric", value: "авар мацӀ, магӀарул мацӀ" },
    { code: "ae", label: "Avestan", value: "avesta" },
    { code: "ay", label: "Aymara", value: "aymar aru" },
    { code: "az", label: "Azerbaijani", value: "azərbaycan dili" },
    { code: "bm", label: "Bambara", value: "bamanankan" },
    { code: "ba", label: "Bashkir", value: "башҡорт теле" },
    { code: "eu", label: "Basque", value: "euskara, euskera" },
];

const { colors } = defaultTheme;

const selectStyles = {
    control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)" }),
};

export default function Header(props) {
    const { t } = props;
    const context = useContext(DataContext);

    const [open, SetOpen] = useState(false);
    const [country_open, SetCountryOpen] = useState(false);
    const [lang_open, SetLangOpen] = useState(false);
    const [currency_open, SetCurrencyOpen] = useState(false);
    const [country, SetCountry] = useState(undefined);
    const [currency, SetCurrency] = useState(undefined);
    const [lang, Setlang] = useState(undefined);
    const [width, SetWidth] = React.useState(innerWidth);
    const [backBtn, SetBackBtn] = useState(false);
    const [side_menu, SetSideMenu] = useState(false);
    const [side_menuOpen, SetSideMenuOpen] = useState(false);
    const [select_delivery_open, SetSelectDeliveryOpen] = useState(false);
    const [menu_type, SetMenuType] = useState("");
    const [new_address, SetNewAddress] = useState(false);
    const [map_view, SetMapView] = useState(false);
    const [path, SetPath] = useState("");
    const [type, SetType] = useState("");
    const [redirect, SetRedirect] = useState(false);
    const [login, SetLogin] = useState(false);
    const [address, SetAddress] = useState([]);
    const [sector_name, SetSectorName] = useState("");

    useEffect(() => {
        console.log("Header On mount :", props);
        console.log("Header context :", context);
        get_address();

        console.log("width header: ", width);
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
            SetMenuType("fruit");

        }
        console.log("header type_value :", type_value)
    }, []);

    useEffect(() => {
        SetBackBtn(context.app_data.backHaves);
        console.log("Context data:", context.app_data);
        SetSectorName(context.app_data.sections.sector_name);
    }, [context.app_data]);

    async function get_address() {
        let data_res: any;
        let pass_data = {
            get: {

            },
        };
        data_res = await api("/delivery_address", pass_data);
        console.log("res delivery_address :", data_res);
        SetAddress(data_res.response.delivery_address);
        SaveContext(data_res.response.delivery_address);
    }

    function SaveContext(data) {
        context.SetAppData((prevValue) => {
            prevValue.delivery_address = data;
            return { ...prevValue };
        })
        console.log("header context:", context);
    }

    function sidemenuClose() {
        SetSideMenu(true);
    };

    function selectClose() {
        SetCountryOpen(false);
        SetLangOpen(false);
        SetCurrencyOpen(false);

        console.log("Sidemeu isOpen: ", country_open);
        console.log("Sidemeu currencyOpen: ", currency_open);
        console.log("Sidemeu langOpen: ", lang_open);
    };

    function selectDeliveryOpen() {
        SetSelectDeliveryOpen(true);
        SetCountryOpen(false);
        SetLangOpen(false);
        SetCurrencyOpen(false);
    };

    function selectDeliveryClose() {
        SetSelectDeliveryOpen(false);
    };

    function toggleOpen() {
        SetCountryOpen(!country_open);
        SetLangOpen(false);
        SetCurrencyOpen(false);

    };

    function toggleOpenLang() {
        SetCountryOpen(false);
        SetLangOpen(!lang_open);
        SetCurrencyOpen(false);

    };

    function toggleOpencurrency() {
        SetCountryOpen(false);
        SetLangOpen(false);
        SetCurrencyOpen(!currency_open);
    };


    return (
        <div>
            <div className={backBtn ? ("header shadow-bottom") :("header")}>
                {/* {redirect ? <Redirect to={path} /> : ""} */}
                <div className="row align-center">
                    <div className="logo-nav col-6 col-md-6">
                        {width < 720 ? (
                            backBtn ? (
                                <div
                                    className="cursor"
                                    onClick={() => {
                                        console.log("Back :", window);
                                        window.history.go(-1);
                                        return false;
                                    }}
                                >
                                    <Ionicons
                                        name="arrow-back-sharp"
                                        size={20}
                                        color="black"
                                    />
                                </div>
                            ) : (
                                <div className="flex align-center">

                                    <div onClick={selectClose}>
                                        <Link to={"/"}
                                        // {sector_name == "Restaurant" ? "/restaurant/restaurant_search/" :
                                        //     sector_name == "Groceries" ? "/grocery/grocery_search/" : "/ecommerce/ecommerce_search/" }
                                         className="logo-container mr-1"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <span className="pe-1 brandCenter w-auto">
                                                <img
                                                    src={require("../../assets/logo/logo.png")}
                                                    className="brand_img"
                                                />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div onClick={selectClose}>
                                <Link
                                    to="/"
                                    className="logo-container mr-1"
                                    style={{ textDecoration: "none" }}
                                >
                                    <span className="pl-1 pr-1 brandCenter w-auto">
                                        <img
                                            src={require("../../assets/logo/logo.png")}
                                            className="brand_img"
                                        />
                                    </span>
                                </Link>
                            </div>
                        )}

                        {/* <div className="input-icons from-group sm-none">
                            <input
                                type="text"
                                className="form-control search-bar"
                                placeholder="Search here"
                            />
                            <div className="cursor p-3">
                                <Ionicons name="md-search" size={18} color="#005d86" />
                            </div>
                        </div> */}
                    </div>

                    <div className="col-6 col-md-6 p-0">
                        <div className="right-data">
                            <div
                                className="align-center flex cursor pr-1"
                                onClick={selectDeliveryOpen}
                            >
                                {/* <MaterialIcons
                      name="delivery-dining"
                      size={35}
                      color="black"
                    /> */}
                                <img
                                    src={require("../../assets/icon/fast-truck.png")}
                                    alt=""
                                />
                                <div className="text-start ml-1 line ">
                                    <p className="text-secondary">
                                        <small>Delivery Near</small>
                                    </p>
                                    <h5>Erode </h5>
                                </div>
                            </div>

                            <div onClick={selectClose}>
                                <Link
                                    to="/sidemenuopen/notifications"
                                    className="sm-none">
                                    <Badge
                                        color="error"
                                        badgeContent={1}
                                        className="cursor mr-3"
                                    >
                                        <img
                                            src={require("../../assets/icon/bell.png")}
                                            alt=""
                                        />
                                    </Badge>
                                </Link>
                            </div>

                            <div onClick={selectClose} className="cursor">
                                <Link
                                    to="/sidemenuopen/cart"
                                >
                                    <Badge
                                        color="error"
                                        badgeContent={1}
                                        className="cursor mr-3"
                                    >
                                        {/* <Ionicons name="ios-cart-outline" size={20} color="black" /> */}
                                        <img
                                            src={require("../../assets/icon/shopping-cart.png")}
                                            alt=""
                                        />
                                    </Badge>
                                </Link>
                            </div>

                            <div
                                className="login sm-none cursor"
                                onClick={() => {
                                    SetLogin(true);
                                    console.log("login :", login);
                                }}
                            >
                                {/* <button className="btn btn-light ml-3">Login</button> */}
                                {/* <FontAwesome5 name="user" size={28} color="#222" /> */}
                                <img src={require("../../assets/icon/user.png")} alt="" />
                                <p className="text-info pl-1">Login</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {backBtn ? (
                    null
                ) : (
                    <Link to={sector_name == "Restaurant" ? "/restaurant/restaurant_search/" :
                        sector_name == "Groceries" ? "/grocery/grocery_search/" : "/ecommerce/ecommerce_search/"} >
                            <div className="row pt-3 md-none">
                                <div className="input-icons form-group">
                                    <input
                                        type="text"
                                        className="form-control search-bar p-0"
                                        placeholder="Search here"
                                    />
                                    <div className="cursor ps-2 border-left">
                                        <Ionicons name="md-search" size={18} color="#005d86" />
                                    </div>
                                </div>
                            </div>
                    </Link>
                )} */}

            <hr className="m-2 sm-none" />

            <div className="sm-none sub-header">
                <div className="row align-center">
                    <div className="col-md-8">
                        <div className="flex">
                            <div onClick={selectClose}>
                                <Link to={"/sidemenuopen/" + menu_type}>
                                    <div className="flex mr-2 cursor">
                                        <Feather name="menu" size={20} color="black" />
                                    </div>
                                </Link>
                            </div>

                            <div onClick={selectClose}>
                                {menu_type != "sector" ? (
                                    <Link
                                        to={"/sidemenuopen/" + menu_type}
                                        className="flex border-right cursor"
                                    >
                                        <p className="pl-1 pr-1">All Catergories</p>
                                    </Link>
                                ) : null}

                            </div>
                            <div className="pl-1 pr-1 border-right cursor">
                                <p>Sell on OneSuper</p>
                            </div>
                            <div className="pl-1 pr-1 border-right cursor">
                                <p>Customer Service</p>
                            </div>
                            <div className="pl-1 pr-1 cursor">
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  ">
                        <div className="flex end align-center">
                            <div className="country_box align-center flex sm-none pl-1 pr-1 m-0 cursor border-right">
                                <Dropdown
                                    is_open={country_open}
                                    onClose={toggleOpen}
                                    target={
                                        <Button
                                            //   iconafter={<ChevronDown />}
                                            onClick={toggleOpen}
                                        // isSelected={langOpen}
                                        >
                                            {country ? (
                                                <p>{country.label}</p>
                                            ) : (
                                                <div className="flex align-center">
                                                    <p>Country</p>
                                                    <MaterialIcons
                                                        name="keyboard-arrow-down"
                                                        size={16}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}
                                        </Button>
                                    }
                                >
                                    <Select
                                        autoFocus
                                        backspaceRemovesValue={false}
                                        components={{
                                            DropdownIndicator,
                                            IndicatorSeparator: null,
                                        }}
                                        controlShouldRenderValue={false}
                                        hideSelectedOptions={false}
                                        isClearable={false}
                                        menuIsOpen
                                        onChange={(e) => {
                                            toggleOpen();
                                            console.log("country: ", e);
                                            SetCountry(e);

                                        }}
                                        options={country_data}
                                        placeholder="Search..."
                                        styles={selectStyles}
                                        tabSelectsValue={false}
                                        value={country}
                                        className="country"
                                    />
                                </Dropdown>
                            </div>
                            <div className="currency_box align-center flex sm-none pl-1 pr-1 m-0 cursor border-right">
                                <Dropdown
                                    is_open={currency_open}
                                    onClose={toggleOpencurrency}
                                    target={
                                        <Button
                                            //   iconafter={<ChevronDown />}
                                            onClick={toggleOpencurrency}
                                        // isSelected={langOpen}
                                        >
                                            {currency ? (
                                                <p>{currency.value}</p>
                                            ) : (
                                                <div className="flex align-center">
                                                    <p>Currency</p>
                                                    <MaterialIcons
                                                        name="keyboard-arrow-down"
                                                        size={16}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}
                                        </Button>
                                    }
                                >
                                    <Select
                                        autoFocus
                                        backspaceRemovesValue={false}
                                        components={{
                                            DropdownIndicator,
                                            IndicatorSeparator: null,
                                        }}
                                        controlShouldRenderValue={false}
                                        hideSelectedOptions={false}
                                        isClearable={false}
                                        menuIsOpen
                                        onChange={(e) => {
                                            toggleOpencurrency();
                                            console.log("currecy: ", e);
                                            SetCurrency(e);
                                        }}
                                        options={currency_data}
                                        placeholder="Search..."
                                        styles={selectStyles}
                                        tabSelectsValue={false}
                                        value={currency}
                                        className="curren"
                                    />
                                </Dropdown>
                            </div>
                            <div className="lang_box align-center flex sm-none pl-1 pr-1 m-0 cursor">
                                <Dropdown
                                    is_open={lang_open}
                                    onClose={toggleOpenLang}
                                    target={
                                        <Button
                                            //   iconafter={<ChevronDown />}
                                            onClick={toggleOpenLang}
                                        // isSelected={isOpen}
                                        >
                                            {lang ? (
                                                <p>{lang.value}</p>
                                            ) : (
                                                <div className="flex align-center">
                                                    <p>Language</p>
                                                    <MaterialIcons
                                                        name="keyboard-arrow-down"
                                                        size={16}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}
                                        </Button>
                                    }
                                >
                                    <Select
                                        autoFocus
                                        backspaceRemovesValue={false}
                                        components={{
                                            DropdownIndicator,
                                            IndicatorSeparator: null,
                                        }}
                                        controlShouldRenderValue={false}
                                        hideSelectedOptions={false}
                                        isClearable={false}
                                        menuIsOpen
                                        onChange={(e) => {
                                            toggleOpenLang();
                                            console.log("Language select:", e);
                                            Setlang(e);
                                        }}
                                        options={language_data}
                                        placeholder="Search..."
                                        styles={selectStyles}
                                        tabSelectsValue={false}
                                        value={lang}
                                        className="lang"
                                    />
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={select_delivery_open}
                onClose={selectDeliveryClose}
                className="center deliverytype"
            >
                {/* {mapView ? (
                        <Maps
                            className="w-100"
                            Getdata={(location) => {
                                console.log("Location :", location);
                            }}
                            mapvalue={(value) => {
                                console.log("map :", value);
                                setState({ mapView: value });
                                addnewOpen();
                            }}
                        />
                    ) : ( */}
                <div className="scrolling-card card">
                    <div className="row center bg-prime1 shadow p-3 sticky">
                        <div className="col-9 p-0">
                            <h5 className="mb-0 text-white">Delivery Type</h5>
                        </div>
                        <div
                            className="col-3 text-right cursor p-0"
                            onClick={selectDeliveryClose}
                        >
                            <Ionicons name="ios-close" size={20} color="#fff" />
                        </div>
                    </div>
                    <div className="row p-0 pb-3">
                        <div className="col-md-6 col-12 p-0">
                            <div>
                                <DeliveryType data={address} />
                            </div>
                        </div>
                        <div className="col-md-6 col-12 p-0">
                            <Address
                                onSelect={(data) => {
                                    console.log("map", data);
                                    SetMapView(data);
                                }}
                                open={new_address}
                                data={address}
                            />
                        </div>
                    </div>
                </div>
                {/* )} */}
            </Modal>

            <Modal
                open={login}
                onClose={() => { SetLogin(false) }}
                className="center  w-100"
            >
                <div>
                    <div className="w-100 text-end">
                        <div className=" cursor close_btn" onClick={() => { SetLogin(false) }}>
                            <Ionicons name="ios-close" size={26} color="#f3f3f3" />
                        </div>
                    </div>
                    <Signup />
                </div>
            </Modal>

            <Modal
                open={side_menu}
                className="menu-scroll"
                onClose={() => { SetSideMenu(false) }}
            >
                <div className="flex">
                    <div className="w-75">
                        <SideMenu
                            from="mobile_header"
                            onSelect={(data) => {
                                console.log("mobile header sidemenu select data :", data)
                                let path_value = "";
                                if (data == "food_cat") {
                                    path_value = "/restaurantCategory";
                                } else if (data == "ecommerce_cat") {
                                    path_value = "/ecommercecategory";
                                } else if (data == "fruit_cat") {
                                    path_value = "/groceryAllCategory";
                                }
                                else if (data == "all") {
                                    path_value = "/groceryAllCategory";
                                }
                                else if (data == "cart") {
                                    path_value = "/cart";
                                } else if (data == "order") {
                                    path_value = "/orderpage";
                                } else if (data == "notifications") {
                                    path_value = "/notifications";
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
                                    // setState({ login: true });
                                    SetLogin(true);
                                    console.log("Signup clicked");
                                    // <Modal open={signup}>
                                    //   <Signup />
                                    // </Modal>
                                    // path_value = "/signup";
                                } else if (data == "logout") {
                                    alert("Do you want to Logout!");
                                }
                                // setState({
                                //     type: data,
                                //     sidemenuOpen: false,
                                //     redirect: true,
                                //     path: path_value,
                                // });
                                SetPath(path_value);
                                SetType(data);
                                SetSideMenuOpen(false);
                                SetRedirect(true);
                            }}
                            type={menu_type}

                        />
                    </div>
                    <div className="text-right cursor p-4 w-25">
                        <div className="close_btn" onClick={sidemenuClose}>
                            <Ionicons name="ios-close" size={26} color="#f3f3f3" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        </div >
    );
}




const Menu = (props) => {
    const shadow = "hsla(218, 50%, 10%, 0.1)";
    return (
        <div
            css={{
                backgroundColor: "white",
                borderRadius: 4,
                boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
                marginTop: 8,
                position: "absolute",
                zIndex: 2,
            }}
            {...props}
        />
    );
};
const Blanket = (props) => (
    <div
        css={{
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            position: "fixed",
            zIndex: 1,
        }}
        {...props}
    />
);
const Dropdown = ({ children, is_open, target, onClose }) => (
    <div css={{ position: "relative" }}>
        {target}
        {is_open ? <Menu>{children}</Menu> : null}
        {is_open ? <Blanket onClick={onClose} /> : null}
    </div>
);

const Svg = (p) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...p}
    />
);
const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
        <Svg>
            <path
                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </Svg>
    </div>
);
const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
        <path
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </Svg>
);

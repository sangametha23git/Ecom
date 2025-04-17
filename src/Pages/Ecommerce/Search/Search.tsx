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
import { Drawer, Modal, makeStyles } from "@material-ui/core";
import Headroom from "react-headroom";

const handleDragStart = (e) => e.preventDefault();


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-end" // push the dialog to bottom
        }
    },
    paper: {
        // make the content full width
        [theme.breakpoints.down("xs")]: {
            margin: 0,
            maxWidth: "100%",
            width: "100%",
            overflow: "scroll",
        },
        overflow: "scroll",

    }
}));

const foodresponsive = {
    0: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    548: { items: 4 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 6 },
};
export default function EcommerceSearch(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [variant, SetVariant] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [products, SetProducts] = useState({
        Living: [
            {
                id: 1,
                img_path: require("../../../assets/img/products/five_seater.png"),
                name: "Five Seater Sofa",
                sub: "Travel Bags",
                offer_price: 7200,
                original_price: 8250,
                discount: "11",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                variant: [{ value: "first", size: "S", color: "#2a2e54" }],
            },
            {
                id: 2,
                img_path: require("../../../assets/img/products/box_type.png"),
                name: "Box Type Sofa",
                sub: "Checked Formal Mens Wear",
                offer_price: 200,
                original_price: 250,
                discount: "5",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                variant: [{ value: "first", size: "S", color: "#b1787c" }],
            },
            {
                id: 3,
                img_path: require("../../../assets/img/products/rocking.png"),
                name: "Rocking Furniture",
                sub: "Classic modal furniture",
                offer_price: 20000,
                original_price: 21500,
                discount: "3",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                qty: "4 Chair",

                // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
            },
            {
                id: 4,
                img_path: require("../../../assets/img/products/floating-furniture.webp"),
                name: "Small Furniture",
                sub: "Student laptops",
                offer_price: 12000,
                original_price: 15090,
                discount: "15",
                rating: 3.9,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                qty: "8Gp RAM",
                // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
            },
            {
                id: 5,
                img_path: require("../../../assets/img/products/royal.webp"),
                name: "Classic Furniture",
                sub: "Formal Mens Wear",
                offer_price: 200,
                original_price: 250,
                discount: "5",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                variant: [{ value: "first", size: "S", color: "#a5a9b5" }],
            },

        ],
        Outdoor: [
            {
                id: 1,
                img_path: require("../../../assets/img/products/five_seater.png"),
                name: "Five Seater Sofa",
                sub: "Travel Bags",
                offer_price: 7200,
                original_price: 8250,
                discount: "11",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                variant: [{ value: "first", size: "S", color: "#2a2e54" }],
            },
            {
                id: 2,
                img_path: require("../../../assets/img/products/box_type.png"),
                name: "Box Type Sofa",
                sub: "Checked Formal Mens Wear",
                offer_price: 200,
                original_price: 250,
                discount: "5",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                variant: [{ value: "first", size: "S", color: "#b1787c" }],
            },
            {
                id: 3,
                img_path: require("../../../assets/img/products/rocking.png"),
                name: "Rocking Furniture",
                sub: "Classic modal furniture",
                offer_price: 20000,
                original_price: 21500,
                discount: "3",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                qty: "4 Chair",

                // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
            },
            {
                id: 4,
                img_path: require("../../../assets/img/products/floating-furniture.webp"),
                name: "Small Furniture",
                sub: "Student laptops",
                offer_price: 12000,
                original_price: 15090,
                discount: "15",
                rating: 3.9,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                qty: "8Gp RAM",
                // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
            },
            {
                id: 5,
                img_path: require("../../../assets/img/products/royal.webp"),
                name: "Classic Furniture",
                sub: "Formal Mens Wear",
                offer_price: 200,
                original_price: 250,
                discount: "5",
                rating: 4.0,
                addcount: 0,
                addbtn: false,
                fav_heart: false,
                variant: [{ value: "first", size: "S", color: "#a5a9b5" }],
            },

        ],
    });
    const [variants_size, SetVariantSize] = useState([
        {
            img: require("../../../assets/img/products/sub10.png"),
            name: "Orange",
            qty: "500g",
            price: 250,
            addcount: 0,
            addbtn: false,
        },
        {
            img: require("../../../assets/img/products/sub10.png"),
            name: "Orange",
            qty: "1kg",
            price: 450,
            addcount: 0,
            addbtn: false,
        },
    ]);
    const [filter, SetFilter] = useState({
        open: false,
        value: ""
    });
    const [width, SetWidth] = React.useState(innerWidth);
    const [best_shop, SetNearShop] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/fashion.webp"),
            offer: 23,
            name: "Fresh Arrivals",
            type: "All type of outfit items",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 2,
            img_path: require("../../../assets/img/cookware.jpg"),
            offer: "",
            name: "Kumar Store",
            type: "Cookware sets showroom",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/cookware2.jpg"),
            offer: 12,
            name: "Anbu cookware wholesalemarket",
            type: "Available all brands cookwares",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 1,
            img_path: require("../../../assets/img/household.jpg"),
            offer: 16,
            name: "VSM Supermarket",
            type: "Kitchen products, household products & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 2,
            img_path: require("../../../assets/img/electronic.jpg"),
            offer: "",
            name: "Sri Electronics Shop",
            type: "All type of electronic things available",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/mobile_shop.jpg"),
            offer: 13,
            name: "Mobile Park",
            type: "Vivo mobile shop",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/shoe_shop.jpg"),
            offer: 13,
            name: "Shree Adithiya Footware",
            type: "School shoes, Formal shoes, Sports shoes & all type of footwares available ",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
    ]);
    const [main, SetMain] = useState([
        {
            img: require("../../../assets/img/fashion.webp"),
            name: "Fresh Arrivals",
            type: "Shop",
        },
        {
            img: require("../../../assets/img/shirt6.jpg"),
            name: "Formal Shirt",
            type: "Product",
        },
        {
            img: require("../../../assets/img/cookware.jpg"),
            name: "Erode cookware shop",
            type: "Shop",
        },
        {
            img: require("../../../assets/img/shoe_shop.jpg"),
            name: "Shree Adithiya Footware",
            type: "Shop",
        },
        {
            img: require("../../../assets/img/leatherShoe.jpg"),
            name: "Leather Shoe",
            type: "Product",
        },
        {
            img: require("../../../assets/img/menSandal.png"),
            name: "menSandal",
            type: "Product",
        },
        {
            img: require("../../../assets/img/laptop.jpeg"),
            name: "Laptops",
            type: "Product",
        },
    ]);

    useEffect(() => {
        console.log("EcommerceSearch On mount :", props);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);

    function toggleDrawer(anchor, open, event) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

    function VariantDrawer(anchor, open, event) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...variant, [anchor]: open });
    }


    return (
        <div className="page-main mb-5 container px-sm-0 px-md-2 bg-fff">

            <div className="mt-2 mb-5 p-3">
                {/* <div className="res-search">
                    <input
                        type="text"
                        className="res-search-input"
                        placeholder="Search for foods"
                    />
                    <div className="ms-auto">
                        <img
                            src={require("../../../assets/icon/search.png")}
                            className=""
                        />
                    </div>
                </div> */}

                <div className="row pb-2 px-0">
                    <div className="input-icons form-group pe-0 search-div w-100">
                        <div className="cursor pe-1 pt-1">
                            <Ionicons name="md-search" size={21} color="#007dae" />
                        </div>
                        <input
                            type="text"
                            className="form-control search-bar p-0"
                            placeholder="Search here"
                        />

                        <div className="search-div-filter cursor" onClick={() => {
                            SetFilter({
                                open: true, value: ""
                            })
                        }}>
                            <div className="pe-1">
                                <Ionicons name="options-outline" size={20} color="#fff" />
                            </div>
                            Filter
                        </div>
                    </div>

                </div>

                <div className="mt-3">
                    <h6>Recently Searched</h6>
                    <div className="over-scroll">
                        <label className="resta-radio-button cursor pb-2" >
                            <input type="radio"
                                name="brand1"
                                className="radio"
                            />
                            <span>Android mobile</span>
                        </label>
                        <label className="resta-radio-button cursor pb-2" >
                            <input type="radio"
                                name="brand1"
                                className="radio"
                            />
                            <span>Hp laptop</span>
                        </label>
                        <label className="resta-radio-button cursor pb-2 " >
                            <input type="radio"
                                name="brand1"
                                className="radio"
                            />
                            <span>pizza cutter</span>
                        </label>
                        <label className="resta-radio-button cursor  pb-2" >
                            <input type="radio"
                                name="brand1"
                                className="radio"
                            />
                            <span>Tshirts</span>
                        </label>
                        <label className="resta-radio-button cursor  pb-2" >
                            <input type="radio"
                                name="brand1"
                                className="radio"
                            />
                            <span>Small dinning table</span>
                        </label>
                    </div>
                </div>


                <div className="mt-3">
                    <h6>Shops near you</h6>

                    <div className="restaurant-list search-alice row px-0">
                        <AliceCarousel
                            mouseTracking
                            touchMoveDefaultEvents={false}
                            // items={productsRestraunt}
                            // paddingLeft={50}
                            paddingRight={20}
                            disableDotsControls
                            responsive={foodresponsive}
                            disableButtonsControls
                            controlsStrategy="alternate"
                        >
                            {best_shop.map((data, index) => (

                                <div
                                    className="ecom-list__item mt-2"
                                    key={index}
                                    onDragStart={handleDragStart}>

                                    <Link to={"/ecommerce/ecommerce_shop_dashboard"} >
                                        <div className=" ecom-list_shop" onClick={() => {
                                            SaveContext(data);
                                        }}>
                                            <div className="p-0">
                                                <div className="container p-0">
                                                    {data.img_path != null ? (
                                                        <img src={data.img_path} className="near-img " />
                                                    ) : (
                                                        <img src={require("../../../assets/img/ecommerce.jpg")} className="near-img " />
                                                    )}

                                                    <div>
                                                        {
                                                            data.offer != "" ? (
                                                                <div className="disc_ecom">
                                                                    <p className="mb-0">

                                                                        <b className="pl-02 text-white fw-bold">
                                                                            {data.offer}% OFF
                                                                        </b>
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )
                                                        }
                                                    </div>

                                                    <div className="img_over_content_ecom d-flex align-items-center">
                                                        <div className="ecom-info end w-100">
                                                            <MaterialIcons name="star" size={12} color="white" />
                                                            <p className="text-white pl-02">{data.rate}</p>

                                                            {/* {data.delivery != "" ? (
                                                            <div className="ms-auto">
                                                                <img src={require("../../../assets/icon/free-shipping.png")} className="free-shipping-icon" />
                                                              </div>
                                                        ) : (
                                                            ""
                                                        )} */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="near-shop-name">
                                                    <p className="oneline text-dark fw-bold">{data.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>



                            ))}
                        </AliceCarousel>
                    </div>
                </div>

                <div className="mt-3">
                    <h6 className="mb-1 pt-2">Search Results</h6>
                    <div className="row">
                        {main.map((data, index) => (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <Link to="/foodpage">
                                    <div className="row pt-3 cursor">
                                        <div className="col-3 px-0">
                                            <img src={data.img} className="search-resta-img" />
                                        </div>
                                        <div className="col-9 pr-0">
                                            <h6 className="oneline">{data.name}</h6>
                                            <p className="oneline">{data.type}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-fff mt-4">
                    <h6 className="mb-1 pt-2">Search Results</h6>

                    <div className="row pt-1 px-0">

                        {products.Living.map((data, index) => (
                            <div
                                className="py-0 px-1 prods mt-2 col-6 col-md-4 col-lg-3"
                                key={index}
                            >
                                <div className="border pb-2">
                                    <div className="card bg-lightblue pt-2 pb-0">
                                        {data.offer != "" ? (
                                            <div className="text-center disc_ecom">
                                                <p>
                                                    <b className="text-white">{data.discount}% Off</b>
                                                </p>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        <div className="img-top-right cursor" onClick={() => {
                                            console.log("Fav Products");
                                            // let product_show_data = product_show;
                                            // product_show_data[index].fav_heart =
                                            //     !product_show_data[index].fav_heart;
                                            // SetProductShow((preState) => ({
                                            //     ...preState,
                                            //     Products: product_show_data,
                                            // }));
                                            // console.log(
                                            //     "Fav Products :",
                                            //     product_show_data[index].fav_heart
                                            // );
                                        }}
                                        >
                                            {data.fav_heart ? (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="ios-heart"
                                                        size={22}
                                                        color="rgb(255, 0, 48)"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="heart-outline"
                                                        size={22}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}</div>
                                        <div className="" onClick={() => {
                                            SetQuick({ open: true, data: data });
                                            console.log("quick data :", data);
                                        }}>
                                            <img src={data.img_path} className="prods-img" />
                                        </div>
                                    </div>

                                    <div className="p-2 pt-1 pe-1">
                                        <p className="oneline text-dark">{data.name}</p>
                                        <p className="oneline">{data.sub}</p>

                                        <div className="d-flex align-center pt-1">

                                            <p className="text-dark pr-1">₹{data.offer_price}</p>
                                            <small className="v-small text-gray text-end">
                                                <s>₹{data.original_price}</s>
                                            </small>
                                            <div className="ms-auto">
                                                <div className="d-flex align-items-center">
                                                    <p className="extra-small fw-500 mb-0 text-orange ">3.5</p>
                                                    <Ionicons name="md-star" size={9} color="#ffa500" />
                                                    <p className="extra-small fw-500 ps-1 mb-0 text-gray-200">(785)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-0 text-center">
                                        {data.addbtn ? (
                                            <div
                                            // className={
                                            //   data.img_path !== "" ? "Grocebottom-offer" : ""
                                            // }
                                            >
                                                <div className="flex Groceoffer center p-2">

                                                    <div
                                                        className="cursor pr-1 w-25 center"
                                                        onClick={() => {
                                                            // minus(index);
                                                        }}
                                                    >
                                                        <Entypo name="minus" size={18} color="#000" />
                                                    </div>
                                                    <div className="w-50 center">
                                                        {/* <div
data-aos="fade-down"
data-aos-easing="linear"
data-aos-duration="1500"
> */}
                                                        <p className="smooth">
                                                            <b>{data.addcount}</b>
                                                        </p>
                                                        {/* </div> */}
                                                    </div>
                                                    <div
                                                        className="cursor pl-1 w-25"
                                                        onClick={() => {
                                                            // minus(index);
                                                        }}
                                                    >
                                                        <Entypo name="plus" size={18} color="#000" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                {/* {data.hasOwnProperty("variant") ? (
                            data.variant.map((data, index) => (
                                // data.value == "first" ? (
                                <div className="ecomoffer" key={index} onClick={(event) => {
                                    width < 720
                                        ? toggleDrawer("bottom", true, event, data)
                                        : toggleDrawer("right", true, event, data)
                                    console.log("open variant1: ", data)
                                    // SetBottomSwipe(true) 
                                }}>
                                    <p className="cursor p-2">
                                        <b className="text-prime1">Add</b>
                                    </p>
                                </div>
                                // ) : ("")

                            ))
                        ) : ( */}
                                                <div className="ecomoffer"
                                                    onClick={(event) => {
                                                        width < 720
                                                            ? toggleDrawer("bottom", true, event)
                                                            : toggleDrawer("right", true, event)
                                                        console.log("open variant2: ", data)
                                                    }}>
                                                    <p className="cursor p-2">
                                                        <b className="text-prime1">Add</b>
                                                    </p>
                                                </div>

                                                {/* )} */}

                                            </div>
                                        )}

                                        {data.variant != "" ? (
                                            <small className="text-black"><u className="underline">3+ more</u></small>
                                        ) : (null)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>




            {["right", "bottom"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        className=""
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={(event) => {
                            VariantDrawer(anchor, false, event);
                        }}
                        onOpen={(event) => {
                            VariantDrawer(anchor, true, event);
                        }}
                    >
                        <div>
                            <div className="p-3 pt-0 pb-0 mb-4">
                                <div className="center sticky_drawer">
                                    <hr className="hr-drawer" />
                                </div>

                                <small>Add to multiple items</small>

                                <div className="mt-3 mb-4 border-bottom">
                                    {variants_size.map((size, sizeIndex) => (
                                        <div className="mt-3" key={sizeIndex}>
                                            <div
                                                className="row pb-3 cursor"
                                                onClick={() => {
                                                    setState({ size: true });
                                                }}
                                            >
                                                <div className="col-4 text-right flex align-center justify-end pr-0">
                                                    <img src={size.img} className="prods-img" />
                                                </div>
                                                <div className="col-5">
                                                    <h5>{size.name}</h5>
                                                    <p className="pt-1">
                                                        <b>{size.qty}</b>
                                                    </p>
                                                    <small className="pt-1">₹{size.price}</small>
                                                </div>
                                                <div className="col-3 p-0">
                                                    {size.addbtn ? (
                                                        <div className="flex Groceoffer center p-2">
                                                            <div
                                                                className="cursor pr-1 w-25 center"
                                                                onClick={() => {
                                                                    // variantminus(sizeIndex);
                                                                }}
                                                            >
                                                                <Entypo name="minus" size={18} color="#e60000" />
                                                            </div>
                                                            <div className="w-50 center">
                                                                <p className="smooth">
                                                                    <b>{size.addcount}</b>
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="cursor pl-1 w-25"
                                                                onClick={() => {
                                                                    // variantadd(sizeIndex);
                                                                }}
                                                            >
                                                                <Entypo name="plus" size={18} color="#e60000" />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            onClick={() => {
                                                                // variantaddcart(sizeIndex);
                                                            }}
                                                        >
                                                            <div className="Groceoffer">
                                                                <p className="cursor p-2">
                                                                    <b className="text-red">Add</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bottom-fixed w-100 p-2">
                                <div className="row align-center  bg-red p-2 ">
                                    <div className="col-6">
                                        <div className="flex align-center">
                                            <h6 className="text-white">Total</h6>
                                            <Entypo name="dot-single" size={18} color="white" />
                                            <h6>
                                                <b className="text-white">₹300</b>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="col-6 justify-end">
                                        <div
                                            className="cursor"
                                        // onClick={toggleBottomSheet.bind(this)}
                                        >
                                            <div className="flex align-center justify-end ">
                                                <h6 className="pr-1 text-white ">Add Item</h6>
                                                <MaterialIcons
                                                    name="keyboard-arrow-right"
                                                    size={18}
                                                    color="white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Drawer>
                </React.Fragment>
            ))}

            <div>
                {["right", "bottom"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Drawer
                            className="shop"
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={(event) => {
                                toggleDrawer(anchor, false, event);
                            }}
                            onOpen={(event) => {
                                toggleDrawer(anchor, true, event);
                            }}
                        >
                            <div className="p-0 pt-4 mb-4">
                                <div>
                                    <div className="p-3 pt-0 pb-0 mb-4">
                                        <div className="center sticky_drawer">
                                            <hr className="hr-drawer" />
                                        </div>

                                        <small>Add to multiple items</small>

                                        <div className="mt-3 mb-4 border-bottom">
                                            {variants_size.map((size, sizeIndex) => (
                                                <div className="mt-3" key={sizeIndex}>
                                                    <div
                                                        className="row pb-3 cursor"
                                                        onClick={() => {
                                                            setState({ size: true });
                                                        }}
                                                    >
                                                        <div className="col-4 text-right flex align-center justify-end pr-0">
                                                            <img src={size.img} className="prods-img" />
                                                        </div>
                                                        <div className="col-5">
                                                            <h5>{size.name}</h5>
                                                            <p className="pt-1">
                                                                <b>{size.qty}</b>
                                                            </p>
                                                            <small className="pt-1">₹{size.price}</small>
                                                        </div>
                                                        <div className="col-3 p-0">
                                                            {size.addbtn ? (
                                                                <div className="flex Groceoffer center p-2">
                                                                    <div
                                                                        className="cursor pr-1 w-25 center"
                                                                        onClick={() => {
                                                                            // variantminus(sizeIndex);
                                                                        }}
                                                                    >
                                                                        <Entypo name="minus" size={18} color="#e60000" />
                                                                    </div>
                                                                    <div className="w-50 center">
                                                                        <p className="smooth">
                                                                            <b>{size.addcount}</b>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        className="cursor pl-1 w-25"
                                                                        onClick={() => {
                                                                            // variantadd(sizeIndex);
                                                                        }}
                                                                    >
                                                                        <Entypo name="plus" size={18} color="#e60000" />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    onClick={() => {
                                                                        // variantaddcart(sizeIndex);
                                                                    }}
                                                                >
                                                                    <div className="Groceoffer">
                                                                        <p className="cursor p-2">
                                                                            <b className="text-red">Add</b>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bottom-fixed w-100 p-2">
                                        <div className="row align-center  bg-red p-2 ">
                                            <div className="col-6">
                                                <div className="flex align-center">
                                                    <h6 className="text-white">Total</h6>
                                                    <Entypo name="dot-single" size={18} color="white" />
                                                    <h6>
                                                        <b className="text-white">₹300</b>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="col-6 justify-end">
                                                <div
                                                    className="cursor"
                                                // onClick={toggleBottomSheet.bind(this)}
                                                >
                                                    <div className="flex align-center justify-end ">
                                                        <h6 className="pr-1 text-white ">Add Item</h6>
                                                        <MaterialIcons
                                                            name="keyboard-arrow-right"
                                                            size={18}
                                                            color="white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
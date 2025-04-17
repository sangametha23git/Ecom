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
import { Drawer, Modal, Dialog, makeStyles } from "@material-ui/core";
import GroceryVariants from "../GroceryVariants/GroceryVariants";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

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
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
        },
        overflow: "scroll",

    }
}));

const groceryresponsive = {
    0: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    548: { items: 4 },
    720: { items: 4 },
    912: { items: 6 },
    1024: { items: 6 },
};

export default function GrocerySearch(props: any) {
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
        fruits: [
            {
                id: 1,
                img_path: require("../../../assets/img/products/sub1.png"),
                name: "Orange",
                offer: 23,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 1",
            },
            {
                id: 2,
                img_path: require("../../../assets/img/products/sub2.png"),
                name: "Grapes",
                offer: 20,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 2",
            },
            {
                id: 3,
                img_path: require("../../../assets/img/products/sub3.png"),
                name: "Apple",
                offer: "",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 3",
            },
            {
                id: 4,
                img_path: require("../../../assets/img/products/sub4.png"),
                name: "Sapota",
                offer: 12,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 3",
            },
            {
                id: 5,
                img_path: require("../../../assets/img/products/sub5.png"),
                name: "Watermelon",
                offer: 16,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 4",
            },
            {
                id: 6,
                img_path: require("../../../assets/img/products/sub6.png"),
                name: "Mango",
                offer: "",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 5",
            },
            {
                id: 7,
                img_path: require("../../../assets/img/products/sub7.png"),
                name: "Banana",
                offer: 18,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 6",
            },
            {
                id: 8,
                img_path: require("../../../assets/img/products/sub8.png"),
                name: "Pomegranate",
                offer: "",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 7",
            },
            {
                id: 9,
                img_path: require("../../../assets/img/products/sub9.png"),
                name: "pineapple",
                offer: 14,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 8",
            },
        ],
        Veg: [
            {
                id: 1,
                img_path: require("../../../assets/img/products/veg1.png"),
                name: "Cabbage",
                offer: "",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 1",
            },
            {
                id: 2,
                img_path: require("../../../assets/img/products/veg2.png"),
                name: "Broccoli",
                offer: 23,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 2",
            },
            {
                id: 3,
                img_path: require("../../../assets/img/products/veg3.webp"),
                name: "Apple",
                offer: 15,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 3",
            },
            {
                id: 4,
                img_path: require("../../../assets/img/products/veg4.png"),
                name: "Sapota",
                offer: 15,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 4",
            },
            {
                id: 5,
                img_path: require("../../../assets/img/products/veg5.png"),
                name: "Watermelon",
                offer: "",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [],
                seller: "Seller 5",
            },
            {
                id: 6,
                img_path: require("../../../assets/img/products/veg6.png"),
                name: "Mango",
                offer: "",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 6",
            },
            {
                id: 6,
                img_path: require("../../../assets/img/products/veg7.png"),
                name: "Broccoli",
                offer: 23,
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "250g",
                addcount: 0,
                addbtn: false,
                variant: [
                    {
                        variant_specifications: [
                            {
                                name: "Capacity",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "500 ml"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "1 l"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "2 l"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "5 l"
                                    }
                                ]
                            },
                            {
                                name: "Colour",
                                items: [
                                    {
                                        id: 1,
                                        checked: true,
                                        name: "Red"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "White"
                                    },
                                    {
                                        id: 1,
                                        checked: false,
                                        name: "Blue"
                                    },
                                    {
                                        id: 2,
                                        checked: false,
                                        name: "Green"
                                    }
                                ]
                            },
                        ]
                    }
                ],
                seller: "Seller 7",
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
    const [filter_option, SetFilterOption] = useState({
        open: true,
        value: ""
    });
    const [quick, SetQuick] = useState({
        open: false,
        data: ""
    });
    const [variant_data, SetVariantData] = useState({});
    const [width, SetWidth] = React.useState(innerWidth);
    const [near_shop, SetNearShop] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/grocery_shop7.webp"),
            offer: 23,
            name: "Fresh Market",
            type: "All type of grocery items",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
        {
            id: 2,
            img_path: require("../../../assets/img/grocery_shop1.jpg"),
            offer: "",
            name: "Kumar Store",
            type: "Biscuits, snacks & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/grocery_shop2.jpeg"),
            offer: 12,
            name: "Anbu Supermarket",
            type: "Grocery items, sweet, snacks & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
        {
            id: 1,
            img_path: require("../../../assets/img/grocery_shop3.jpg"),
            offer: 16,
            name: "VSM Stores",
            type: "Grocery items, household products & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 2,
            img_path: require("../../../assets/img/grocery_shop4.jpg"),
            offer: "",
            name: "Organic Shop",
            type: "Organic medicene, shamboo, soap & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/grocery_shop5.jpeg"),
            offer: 13,
            name: "Cake Park",
            type: "Cakes, pizza, icecream & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/grocery_shop6.jpg"),
            offer: 13,
            name: "Shree Adithiya Bake",
            type: "Icecream, chocolates, cookies, sandwitch & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
        {
            id: 3,
            img_path: require("../../../assets/img/grocery_shop.jpg"),
            offer: 13,
            name: "Shree Adithiya Bake",
            type: "Icecream, chocolates, cookies, sandwitch & more",
            rate: 4.6,
            deliveryTime: "35 mins",
            delivery: "Free Delivery",
        },
    ]);
    const [main, SetMain] = useState([
        {
            img: require("../../../assets/img/grocery_shop.jpg"),
            name: "Fresh Arrivals",
            type: "Shop",
        },
        {
            img: require("../../../assets/img/products/sub1.png"),
            name: "Fruits 1",
            type: "Product",
        },
        {
            img: require("../../../assets/img/grocery_shop5.jpeg"),
            name: "Erode grocery shop",
            type: "Shop",
        },
        {
            img: require("../../../assets/img/grocery_shop7.webp"),
            name: "Shree Adithiya Grocery",
            type: "Shop",
        },
        {
            img: require("../../../assets/img/products/sub5.png"),
            name: "Fruits 2",
            type: "Product",
        },
        {
            img: require("../../../assets/img/products/sub1.png"),
            name: "Fruits 3",
            type: "Product",
        },
        {
            img: require("../../../assets/img/products/sub10.png"),
            name: "Fruits 4",
            type: "Product",
        },
    ]);
    const [is_loading, SetIsLoading] = useState(true);


    useEffect(() => {
        console.log("GrocerySearch On mount :", props);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);


    function variantDrawer(anchor, open, event, value) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
        SetVariantData(value);
        console.log("Variant value :", value);
    }


    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 100) : text}
                <span onClick={toggleReadMore} className="read-or-hide fw-bold text-red">
                    {isReadMore ? " ...read more" : " ...show less"}
                </span>
            </p>
        );
    };
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
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6>Recently Searched</h6>
                    )}

                    {is_loading ? (
                        <div className="d-flex">
                            <Skeleton height={20} width={100} style={{ borderRadius: 20, marginRight: 10 }} />
                            <Skeleton height={20} width={50} style={{ borderRadius: 20, marginRight: 10 }} />
                        </div>
                    ) : (
                        <div className="over-scroll">
                            <label className="resta-radio-button cursor pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Vegitables</span>
                            </label>
                            <label className="resta-radio-button cursor pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Snacks</span>
                            </label>
                            <label className="resta-radio-button cursor pb-2 " >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Juice</span>
                            </label>
                            <label className="resta-radio-button cursor  pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Speices</span>
                            </label>
                            <label className="resta-radio-button cursor  pb-2" >
                                <input type="radio"
                                    name="brand1"
                                    className="radio"
                                />
                                <span>Small Onions</span>
                            </label>
                        </div>
                    )}
                </div>


                <div className="mt-3">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6>Shops near you</h6>
                    )}

                    <div className="restaurant-list search-alice row px-0">
                        <AliceCarousel
                            mouseTracking
                            touchMoveDefaultEvents={false}
                            // items={productsRestraunt}
                            // paddingLeft={50}
                            paddingRight={20}
                            disableDotsControls
                            responsive={groceryresponsive}
                            disableButtonsControls
                            controlsStrategy="alternate"
                        >
                            {near_shop.map((data, index) => (

                                <div
                                    className="ecom-list__item mt-2"
                                    key={index}
                                    onDragStart={handleDragStart}>

                                    {is_loading ? (
                                        <div>
                                            <Skeleton height={100} width="100%" />
                                            <div className="pt-2">
                                                <Skeleton height={8} width={100} />
                                            </div>
                                        </div>
                                    ) : (
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
                                                                    <div className="disc_groce">
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
                                    )}


                                </div>



                            ))
                            }
                        </AliceCarousel >
                    </div >
                </div >

                <div className="mt-3">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6 className="mb-1 pt-2">Search Results</h6>
                    )}
                    <div className="row">
                        {main.map((data, index) => (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                {is_loading ? (
                                    <div className="row pt-3 cursor">
                                        <div className="col-3 px-0">
                                            <Skeleton height={50} width="100%" />
                                        </div>
                                        <div className="col-9 pr-0 pt-1">
                                            <Skeleton height={10} width={100} />
                                            <Skeleton height={8} width={50} />
                                        </div>
                                    </div>
                                ) : (
                                    <Link to="/grocery/grocery_shop_dashboard">
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
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-fff mt-4">
                    {is_loading ? (
                        <Skeleton height={10} width={100} />
                    ) : (
                        <h6 className="mb-1 pt-2">Search Results</h6>
                    )}

                    <div className="row pt-1 px-0">

                        {products.Veg.map((data, index) => (
                            <div
                                // onDragStart={handleDragStart}
                                className="p-1 pt-0 prods mt-1 col-6 col-md-4 col-lg-3"
                                key={index}
                            >
                                {is_loading ? (
                                    <div className="border">
                                        <Skeleton height={130} width="100%" />
                                        <div className="p-2">
                                            <Skeleton height={10} width={100} />
                                            <div className="row align-items-center pt-1">
                                                <div className="col-5 pl-0 ps-1">
                                                    <Skeleton height={10} width={30} />

                                                </div>
                                                <div className="col-7 p-0 text-end">
                                                    <div className="d-flex align-items-center">
                                                        <Skeleton height={10} width={30} style={{ marginRight: 5 }} />
                                                        <Skeleton height={10} width={30} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="border">
                                        <div className="card bg-gray-500 pt-2 pb-2 cursor">
                                            {data.discount != "" ? (
                                                <div className="text-center disc">
                                                    <p>
                                                        <b className="text-white">{data.discount}% Off</b>
                                                    </p>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            <div className="star-rating">
                                                <div className="center">
                                                    <p className="mb-0 text-orange me-1 extra-small">3.5</p>
                                                    <Ionicons name="md-star" size={8} color="orange" />
                                                </div>
                                            </div>
                                            <div className="" onClick={() => {
                                                SetQuick((prevValue: any) => {
                                                    prevValue.open = true;
                                                    prevValue.data = data;
                                                    return { ...prevValue }
                                                });
                                            }}>
                                                {/* <Link to="/grocery/grocery_products_view"> */}
                                                <img src={data.img_path} className="prods-img" />
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                        <div className="pt-2 text-center">
                                            {data.addbtn ? (
                                                <div
                                                    className={
                                                        data.img_path !== "" ? "Grocebottom-offer" : ""
                                                    }
                                                >
                                                    <div className="flex Groceoffer center p-2">
                                                        <div
                                                            className="cursor pr-1 w-25 center"
                                                            onClick={() => {
                                                                // grocminus(prodIndex, index);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="minus"
                                                                size={18}
                                                                color="#e60000"
                                                            />
                                                        </div>
                                                        <div className="w-50 center">
                                                            <p className="smooth">
                                                                <b>{data.addcount}</b>
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="cursor pl-1 w-25"
                                                            onClick={() => {
                                                                // grocadd(prodIndex, index);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="plus"
                                                                size={18}
                                                                color="#e60000"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div
                                                        className={
                                                            data.img_path !== ""
                                                                ? "Grocebottom-offer"
                                                                : ""
                                                        }
                                                        onClick={(event) => {
                                                            if (data.variant.length > 0) {
                                                                if (width < 720) {
                                                                    variantDrawer("bottom", true, event, data)
                                                                } else {
                                                                    variantDrawer("right", true, event, data);
                                                                }
                                                            } else {
                                                                console.log("No variant")
                                                            }
                                                        }}
                                                    >
                                                        <div className="Groceoffer">
                                                            <p className="cursor p-2">
                                                                <b className="text-red">Add</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-2">
                                            <p className="oneline m-0">
                                                <b className="text-dark">{data.name}</b>
                                            </p>

                                            <div className="row align-items-center pt-1">
                                                <div className="col-5 pl-0 ps-1">
                                                    <p className="mb-0 v-small">{data.qty}</p>
                                                </div>
                                                <div className="col-7 p-0 text-end">
                                                    <div className="d-flex pt-1 align-items-center">
                                                        <p className="pr-1 mb-0 text-dark">₹{data.price}</p>
                                                        <p className="mb-0 v-small">
                                                            <s>₹{data.original_price}</s>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div >




            <div>
                {["right", "bottom"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Drawer
                            className="variant-modal"
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={(event) => {
                                variantDrawer(anchor, false, event, variant_data);
                            }}
                            onOpen={(event) => {
                                variantDrawer(anchor, true, event, variant_data);
                            }}
                        >
                            <div className="row">
                                <div className="sticky_drawer bg-fff">

                                    <div className=" d-flex p-2 pt-0 pb-3 p-md-3 align-items-center">
                                        <h5 className="mb-0">Variantions</h5>
                                        <div className="ms-auto ">
                                            <div className="cursor" onClick={(event) => {
                                                variantDrawer(anchor, false, event, variant_data);
                                            }}>
                                                <Ionicons name="close" size={20} color="gray" />
                                                {/* <p className="mb-0 ps-1">Close</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <GroceryVariants value={variant_data} />
                            </div>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>


            <Dialog
                open={quick.open}
                onEntered={console.log("Quick descripttion open: ", quick.data.images)}
                classes={{ container: classes.root, paper: classes.paper }}
                onClose={(data) => {
                    SetQuick((prevValue: any) => {
                        prevValue.open = false;
                        return { ...prevValue }
                    });
                }}
            >
                <div className="bg-fff pt-2">
                    {/* <div className="center d-md-none d-sm-block">
                            <hr className="hr-drawer" />
                        </div> */}

                    <div className="position-absolute center right-10 d-sm-none d-md-block p-2 cursor" onClick={() => {
                        SetQuick((prevValue: any) => {
                            prevValue.open = false;
                            return { ...prevValue }
                        });
                    }}>
                        <Ionicons name="close" size={20} color="black" />
                    </div>

                    <div className="p-2">
                        {/* {quick.data.images.map((img, img_index)=>( */}
                        {/* <img src={"https://cdn.1superapp.com/images/320/" +quick.data.images[0].url} className="w-100 img-cover" /> */}
                        <img src={quick.data.img_path} className="img-cover w-100" />
                        {/* ))} */}
                        <div className="text-center pb-2">
                            <h6 className="oneline">{quick.data.name}</h6>
                            <div className="d-flex align-center justify-content-center">
                                <p className="text-dark pr-1">₹{quick.data.offer_price} </p>
                                {/* {quick.data.max_price - quick.data.min_price != 0 ? (
                                        <p className="text-dark text-end">
                                            ₹{quick.data.max_price}
                                        </p>
                                    ) : (null)} */}

                                {/* <p className="pl-1"><b className="text-green">5% Off</b></p> */}
                                <span className="px-1 text-gray">|</span>
                                <p className="text-orange">4.1★</p>
                            </div>
                        </div>

                        <p className="text-dark fw-bolder mt-1 mb-2">Description</p>
                        <ReadMore>
                            {/* {quick.data.description} */}
                            It contains well written, well thought and well explained
                            computer science, programming articles and quizzes.
                            It provides a variety of services for you to learn, so thrive
                            and also have fun! Free Tutorials, Millions of Articles, Live,
                            Online and Classroom Courses ,Frequent Coding Competitions,
                            Webinars by Industry Experts, Internship opportunities, and Job
                            Opportunities. Knowledge is power!
                        </ReadMore>
                        <div className="mt-3">
                            <p className="fw-bolder text-dark pb-1 mb-0">In Stock</p>
                            <div className="d-flex align-items-center p-0">
                                <p className="prod-name-mob fw-bolder text-gray mb-0">Seller</p>
                                <p className="px-1 text-red mb-0 fw-bolder">Super sellers</p>
                            </div>
                        </div>

                        <div className="d-flex align-center mt-2 pb-2 border-bottom">
                            <p className="m-0 pr-1">Delivery Near</p>
                            <p className="mb-0 text-dark">Erode</p>
                            <div className="ms-auto">
                                <div className="d-flex align-items-center ">
                                    <p className="pr-1 mb-0">30 mins</p>
                                    <span className="text-gray">|</span>
                                    <p className="pl-1 text-red mb-0">₹20</p>
                                </div>
                            </div>
                        </div>
                        <Link to={width < 548 ? "/grocery/grocery_mobile_product_details" : "/grocery/grocery_product_details"}>
                            <div className="d-flex align-items-center pt-2 cursor" onClick={(event) => { SetQuick(false) }}>
                                <p className="mb-0 text-black">See more</p>
                                <div className="ms-auto">
                                    <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                                </div>
                            </div>
                        </Link>


                    </div>

                </div>
            </Dialog>


            <div className="sort_filter">
                <Dialog
                    open={filter.open}
                    onClose={() => {
                        SetFilter({ open: false, value: "" })
                    }}
                    classes={{ container: classes.root, paper: classes.paper }}
                >
                    <div>
                        {/* <div className="center p-2">
                            <hr className="hr-drawer" />
                        </div> */}
                        <div className="shadow-head card p-3">
                            <div className="row align-center">
                                <div className="col-11 p-0">
                                    <h6 className="mb-0">Filters</h6>
                                </div>
                                <div className="col-1 text-end p-0 cursor"
                                    onClick={(event) => {
                                        SetFilter({ open: false, value: "" })
                                    }}
                                >
                                    <Ionicons name="close" size={20} color="gray" />
                                </div>
                            </div>
                        </div>


                        <div className=" px-3 mb-5">
                            <div className="row align-items-center py-2 border-bottom" onClick={() => {
                                SetFilterOption({ open: !filter_option.open, value: "" })
                            }}>
                                <div className="col-6 p-0">
                                    <p className="mb-0 fs-7 text-darkgray">Cost</p>
                                </div>
                                <div className="col-6 p-0 text-end cursor">
                                    {filter_option.open ? (
                                        <MaterialIcons name="keyboard-arrow-up" size={18} color="#555" />
                                    ) : (
                                        <MaterialIcons name="keyboard-arrow-down" size={18} color="#555" />
                                    )}
                                </div>
                            </div>

                            {filter_option.open ? (
                                <div className="py-2">
                                    <p className="v-small"></p>
                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Relavance</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Rating</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Delivery Time</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Low to High Cost</span>
                                    </label>

                                    <label className="filter-radio-button cursor">
                                        <input type="radio"
                                            name="brand1"
                                            className="radio"
                                        />
                                        <span>Hight to Low Cost</span>
                                    </label>

                                </div>
                            ) : (null)}
                        </div>

                        <div className="bottom-fix row align-items-center w-100 bg-fff shadow py-3">
                            <div className="col-6">
                                <button className="btn-outline-danger fw-bold btn w-100" >Clear All</button>
                            </div>
                            <div className="col-6 ">
                                <button className="bg-red text-white fw-bold btn w-100" onClick={() => {
                                    SetFilter({ open: false, value: "" })
                                }}>Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>

        </div >
    );
}
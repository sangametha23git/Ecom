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
    MaterialIcons,
    MaterialCommunityIcons
} from "@expo/vector-icons";
import { Dialog, Drawer, Modal, SwipeableDrawer } from "@material-ui/core";
import Variants from "../Variants/Variants";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../utils/Api";
import Countdown from "react-countdown";
import SwipeableBottomSheet from '@geomatico/react-swipeable-bottom-sheet';

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { classNames } from "react-select/dist/declarations/src/utils";


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
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
        },
        overflow: "scroll",

    }
}));
const handleDragStart = (e) => e.preventDefault();
const bg1 = "#ffc7cc";
const bg2 = "#bfd1ff";

const category = [
    {
        id: 1,
        src: require("../../../assets/icon/categories.png"),
        name: "All",
        background: bg1,
    },
    {
        id: 2,
        src: require("../../../assets/img/partyWear.png"),
        name: "Shoes",
        background: bg2,
    },
    {
        id: 3,
        src: require("../../../assets/img/products/box_type.png"),
        name: "Furniture",
        background: bg1,
    },
    {
        id: 4,
        src: require("../../../assets/img/category/dress.png"),
        name: "Fashion",
        background: bg2,
    },
    {
        id: 5,
        src: require("../../../assets/img/category/bluetooth_device.png"),
        name: "Gadgets",
        background: bg1,
    },
    {
        id: 6,
        src: require("../../../assets/img/category/kitchen_1.png"),
        name: "Kitchen",
        background: bg2,
    },
    {
        id: 7,
        src: require("../../../assets/img/category/toy.png"),
        name: "Toys",
        background: bg1,
    },
    {
        id: 8,
        src: require("../../../assets/img/category/apple.png"),
        name: "Mobile",
        background: bg2,
    },
    {
        id: 9,
        src: require("../../../assets/img/category/sports.png"),
        name: "Sports",
        background: bg1,
    },
    {
        id: 10,
        src: require("../../../assets/img/category/beauty_1.png"),
        name: "Beauty",
        background: bg2,
    },
    {
        id: 11,
        src: require("../../../assets/img/category/baby.png"),
        name: "Baby Products",
        background: bg1,
    },
    {
        id: 12,
        src: require("../../../assets/img/category/pooja.png"),
        name: "Wood Work",
        background: bg2,
    },
];

const step = [
    //   {
    //     imgPath: "../../../assets/img/banner_png.png",
    //   },
    {
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
];

const responsive = {
    0: { items: 1 },
    200: { items: 3 },
    300: { items: 3 },
    350: { items: 4 },
    548: { items: 5 },
    720: { items: 6 },
    1024: { items: 10 },
};

const bestresponsive = {
    0: { items: 1 },
    200: { items: 2 },
    300: { items: 3 },
    350: { items: 3 },
    548: { items: 4 },
    720: { items: 5 },
    1024: { items: 6 },
    1100: { items: 8 },
    1200: { items: 8 },
};

const offerresponsive = {
    0: { items: 1 },
    350: { items: 1 },
    548: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
}

const brandresponsive = {
    0: { items: 1 },
    250: { items: 2 },
    350: { items: 3 },
    548: { items: 4 },
    720: { items: 5 },
    1024: { items: 6 },
    1200: { items: 7 },
}

const slide = {
    0: { items: 1 },
    350: { items: 1 },
    1024: { items: 2 },
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
            <span onClick={toggleReadMore} className="read-or-hide fw-bold">
                {isReadMore ? " ...read more" : " ...show less"}
            </span>
        </p>
    );
};


export default function EcommerceDashboard(props: any) {
    const classes = useStyles();
    const context = useContext(DataContext);
    const [id_value, SetIdValue] = useState(useParams());
    const [width, SetWidth] = React.useState(innerWidth);
    const [short_info, SetShortInfo] = useState(false);
    const [bottom_swipe, SetBottomSwipe] = useState(false);
    const [items, SetItems] = useState([
        {
            img: require("../../../assets/img/banner/banner1.png"),
        },
        { img: require("../../../assets/img/banner/ecomBanner.png") },
        { img: require("../../../assets/img/banner/banner8.png") },
        { img: require("../../../assets/img/banner/banner4.png") },
        { img: require("../../../assets/img/banner/banner5.jpg") },
    ]);
    const [top_brands, SetTopBrands] = useState([
        {
            id: 1,
            src: require("../../../assets/img/brands/raymond1.png"),
            name: "Raymond",
            starting: 203,
        },
        {
            id: 2,
            src: require("../../../assets/img/brands/vkc.png"),
            name: "VKC",
            starting: 265,
        },
        {
            id: 3,
            src: require("../../../assets/img/brands/preethi1.png"),
            name: "Preethi",
            starting: 120,
        },
        {
            id: 4,
            src: require("../../../assets/img/brands/Nestle1.png"),
            name: "Nestle",
            starting: 248,
        },
        {
            id: 5,
            src: require("../../../assets/img/brands/dove.png"),
            name: "Dove",
            starting: 500,
        },
        {
            id: 6,
            src: require("../../../assets/img/brands/samsung1.png"),
            name: "Samsung ",
            starting: 150,
        },
        {
            id: 1,
            src: require("../../../assets/img/brands/raymond1.png"),
            name: "Raymond",
            starting: 203,
        },
        {
            id: 2,
            src: require("../../../assets/img/brands/vkc.png"),
            name: "VKC",
            starting: 265,
        },
        {
            id: 3,
            src: require("../../../assets/img/brands/preethi1.png"),
            name: "Preethi",
            starting: 120,
        },
        {
            id: 4,
            src: require("../../../assets/img/brands/Nestle1.png"),
            name: "Nestle",
            starting: 248,
        },
        {
            id: 5,
            src: require("../../../assets/img/brands/dove.png"),
            name: "Dove",
            starting: 500,
        },
        {
            id: 6,
            src: require("../../../assets/img/brands/samsung1.png"),
            name: "Samsung ",
            starting: 150,
        },
    ]);
    const [deals, SetDeals] = useState([
        {
            id: 1,
            src: require("../../../assets/img/dress.png"),
            name: "Kids wear",
            offer: "25%",
        },
        {
            id: 2,
            src: require("../../../assets/img/category/electronic.png"),
            name: "Electronics",
            offer: "15%",
        },
        {
            id: 3,
            src: require("../../../assets/img/category/household.png"),
            name: "Cleaning products",
            offer: "18%",
        },
        {
            id: 4,
            src: require("../../../assets/img/laptop.png"),
            name: "HP laptop",
            offer: "10%",
        },
        {
            id: 5,
            src: require("../../../assets/img/category/kitchen.png"),
            name: "Cookwares",
            offer: "10%",
        },
        {
            id: 6,
            src: require("../../../assets/img/category/babycare.png"),
            name: "Janshons",
            offer: "5%",
        },
    ]);
    const [products, SetProducts] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/category/luggage.jpg"),
            name: "Skybags",
            sub: "Travel Bags",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 7200,
            original_price: 8250,
            discount: "11",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // variant: [{ value: "first", size: "S", color: "#2a2e54" }],
            variant: [
                {
                    variant_specifications: [
                        {
                            name: "Size",
                            items: [
                                {
                                    id: 1,
                                    name: "s"
                                },
                                {
                                    id: 2,
                                    name: "m"
                                },
                                {
                                    id: 1,
                                    name: "xl"
                                },
                                {
                                    id: 2,
                                    name: "xxl"
                                }
                            ]
                        },
                        {
                            name: "Colour",
                            items: [
                                {
                                    id: 1,
                                    name: "Red"
                                },
                                {
                                    id: 2,
                                    name: "White"
                                },
                                {
                                    id: 1,
                                    name: "Blue"
                                },
                                {
                                    id: 2,
                                    name: "Green"
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            img_path: require("../../../assets/img/formal.jpeg"),
            name: "Classic Polo",
            sub: "Checked Formal Mens Wear",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 200,
            original_price: 250,
            discount: "5",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // variant: [{ value: "first", size: "S", color: "#b1787c" }],
            variant: [
                {
                    variant_specifications: [
                        {
                            name: "Size",
                            items: [
                                {
                                    id: 1,
                                    name: "s"
                                },
                                {
                                    id: 2,
                                    name: "m"
                                },
                                {
                                    id: 1,
                                    name: "xl"
                                },
                                {
                                    id: 2,
                                    name: "xxl"
                                }
                            ]
                        },
                        {
                            name: "Colour",
                            items: [
                                {
                                    id: 1,
                                    name: "Red"
                                },
                                {
                                    id: 2,
                                    name: "White"
                                },
                                {
                                    id: 1,
                                    name: "Blue"
                                },
                                {
                                    id: 2,
                                    name: "Green"
                                }
                            ]
                        },
                    ],
                }
            ]
        },
        {
            id: 3,
            img_path: require("../../../assets/img/category/furniture.png"),
            name: "Wooden Furniture",
            sub: "Classic modal furniture",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 20000,
            original_price: 21500,
            discount: "3",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "4 Chair",
            variant: []
            // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 4,
            img_path: require("../../../assets/img/laptop.png"),
            name: "Hp",
            sub: "Student laptops",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 12000,
            original_price: 15090,
            discount: "15",
            rating: 3.9,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "8Gp RAM",
            variant: []

            // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 5,
            img_path: require("../../../assets/img/shirt4.jpg"),
            name: "Classic Polo",
            sub: "Formal Mens Wear",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 200,
            original_price: 250,
            discount: "5",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // variant: [{ value: "first", size: "S", color: "#a5a9b5" }],
            variant: [
                {
                    variant_specifications: [
                        {
                            name: "Size",
                            items: [
                                {
                                    id: 1,
                                    name: "s"
                                },
                                {
                                    id: 2,
                                    name: "m"
                                },
                                {
                                    id: 1,
                                    name: "xl"
                                },
                                {
                                    id: 2,
                                    name: "xxl"
                                }
                            ]
                        },
                        {
                            name: "Colour",
                            items: [
                                {
                                    id: 1,
                                    name: "Red"
                                },
                                {
                                    id: 2,
                                    name: "White"
                                },
                                {
                                    id: 1,
                                    name: "Blue"
                                },
                                {
                                    id: 2,
                                    name: "Green"
                                }
                            ]
                        },
                    ],
                }
            ]
        },
        {
            id: 6,
            img_path: require("../../../assets/img/category/shoe1.png"),
            name: "Adidas",
            sub: "Sports shoes",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 1200,
            original_price: 1250,
            discount: "5",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // variant: [{ value: "first", size: "S", color: "#222b3e" }],
            variant: [
                {
                    variant_specifications: [
                        {
                            name: "Size",
                            items: [
                                {
                                    id: 1,
                                    name: "s"
                                },
                                {
                                    id: 2,
                                    name: "m"
                                },
                                {
                                    id: 1,
                                    name: "xl"
                                },
                                {
                                    id: 2,
                                    name: "xxl"
                                }
                            ]
                        },
                        {
                            name: "Colour",
                            items: [
                                {
                                    id: 1,
                                    name: "Red"
                                },
                                {
                                    id: 2,
                                    name: "White"
                                },
                                {
                                    id: 1,
                                    name: "Blue"
                                },
                                {
                                    id: 2,
                                    name: "Green"
                                }
                            ]
                        },
                    ],
                }
            ]
        },
        {
            id: 7,
            img_path: require("../../../assets/img/category/fashion.png"),
            name: "Girls Wear",
            sub: "Leghanga party wear",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 2100,
            original_price: 2500,
            discount: "5",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // variant: [{ value: "first", size: "S", color: "#e21f45" }],
            variant: [
                {
                    variant_specifications: [
                        {
                            name: "Size",
                            items: [
                                {
                                    id: 1,
                                    name: "s"
                                },
                                {
                                    id: 2,
                                    name: "m"
                                },
                                {
                                    id: 1,
                                    name: "xl"
                                },
                                {
                                    id: 2,
                                    name: "xxl"
                                }
                            ]
                        },
                        {
                            name: "Colour",
                            items: [
                                {
                                    id: 1,
                                    name: "Red"
                                },
                                {
                                    id: 2,
                                    name: "White"
                                },
                                {
                                    id: 1,
                                    name: "Blue"
                                },
                                {
                                    id: 2,
                                    name: "Green"
                                }
                            ]
                        },
                    ],
                }
            ]
        },
        {
            id: 8,
            img_path: require("../../../assets/img/category/kitchen.png"),
            name: "Preethi ",
            sub: "Kitchen Set(5 Items)",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
            offer_price: 15000,
            original_price: 16050,
            discount: "10",
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "5 Set",
            variant: []

            // variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
    ]);
    const [other_seller, SetOtherSeller] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/Shirt.png"),
            name: "Classic Polo Formal Mens Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 2,
            img_path: require("../../../assets/img/formal.jpeg"),
            name: "Classic Polo Formal Mens Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 3,
            img_path: require("../../../assets/img/shirt2.jpg"),
            name: "Classic Polo Formal Mens Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 4,
            img_path: require("../../../assets/img/shirt1.jpg"),
            name: "Classic Polo Formal Mens Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 5,
            img_path: require("../../../assets/img/shirt4.jpg"),
            name: "Classic Polo Formal Mens Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 6,
            img_path: require("../../../assets/img/fashion.jpg"),
            name: "Girls western outfits",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 7,
            img_path: require("../../../assets/img/shirt5.jpg"),
            name: "Classic Polo Formal Mens Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
        {
            id: 8,
            img_path: require("../../../assets/img/western.png"),
            name: "Girls western outfits",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            variant: [{ value: "first", size: "S", color: "#FF8B00" }],
        },
    ]);
    const [best_products, SetBestProducts] = useState([
        {
            img: require("../../../assets/img/category/fashion.png"),
            name: "Girls Wear",
        },
        {
            img: require("../../../assets/img/handbag.png"),
            name: "Bags",
        },
        {
            img: require("../../../assets/img/mob.png"),
            name: "Samsaung",
        },
        {
            img: require("../../../assets/img/Shirt.png"),
            name: "Classic Polo ",
        },
        {
            img: require("../../../assets/img//category/appliance.png"),
            name: "LG",
        },
        {
            img: require("../../../assets/img/category/fashion.png"),
            name: "Girls Wear",
        },
        {
            img: require("../../../assets/img/handbag.png"),
            name: "Bags",
        },
        {
            img: require("../../../assets/img/mob.png"),
            name: "Samsaung",
        },
        {
            img: require("../../../assets/img/Shirt.png"),
            name: "Classic Polo ",
        },
        {
            img: require("../../../assets/img//category/appliance.png"),
            name: "LG",
        },
        {
            img: require("../../../assets/img/category/fashion.png"),
            name: "Girls Wear",
        },
        {
            img: require("../../../assets/img/handbag.png"),
            name: "Bags",
        },
        {
            img: require("../../../assets/img/mob.png"),
            name: "Samsaung",
        },
        {
            img: require("../../../assets/img/Shirt.png"),
            name: "Classic Polo ",
        },
        {
            img: require("../../../assets/img//category/appliance.png"),
            name: "LG",
        },
    ]);
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
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [quick, SetQuick] = useState({
        open: false,
        data: ""
    });
    const [shop_details, SetShopDetails] = useState({ open: false, value: "" })
    const [vendors, SetVendors] = useState([]);
    const [section_products, SetSectionProducts] = useState([]);
    const [variant_data, SetVariantData] = useState([]);
    const [variant_modal, SetVariantModal] = useState({ open: false, value: {} });
    const [is_loading, SetIsLoading] = useState(true);

    useEffect(() => {
        console.log("EcommerceDashboard On mount :", props);
        // get_init();
        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);

    async function get_init() {

        let data_res: any;
        if (context.app_data.sections.sections_type == "Vendors") {
            let pass_data = {
                get: {
                    slug: context.app_data.sections.sections_slug,
                },
            };
            data_res = await api("/section_vendors", pass_data);
            console.log("res :", data_res);
            SetVendors(data_res.response.vendors);
        } else if (context.app_data.sections.sections_type == "Products") {
            let pass_data = {
                get: {
                    section_slug: context.app_data.sections.sections_slug,
                },
            };
            data_res = await api("/section_products", pass_data);
            console.log("res :", data_res);
            SetSectionProducts(data_res.response.products);
        }

    }

    function SaveContext(data) {
        console.log("ecommerce context:", data);
        context.SetAppData((prevValue) => {
            prevValue.products.id = data.id;
            prevValue.products.slug = data.slug;
            // prevValue.products.variant_slug = data.variants[0].slug;
            // prevValue.products.sellers_slug = data.sellers[0].slug;
            return { ...prevValue };
        });
        console.log("ecommerce context ater:", context);
    }

    function variantDrawer(anchor, open, event, data) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
        console.log("data: ", data);
        SetVariantData(data);
    }
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

    return (
        <div className="page-main mb-4 px-sm-0 px-md-2">
            {/* <Header */}
            <div className="bg-fff p-2 pb-0">
                {is_loading ? (
                    <div>
                        <p><Skeleton width="25%" height="8px" /></p>
                        <p><Skeleton width="45%" height="8px" /></p>
                    </div>
                ) : (
                    <div>
                        <p className="v-small fw-bold ps-1"><b>Hi, Govindaraj</b></p>
                        <p className="extra-small ps-1">Fresh products for you</p>
                    </div>
                )}
            </div>
            <div className="bg-fff p-2 shadow-bottom sticky-sm-60px sticky-md-110px">
                {is_loading ? (
                    <div className="">
                        <Skeleton width="100%" height="25px" />
                    </div>
                ) : (
                    <Link to="/ecommerce/ecommerce_search">
                        <div className="row align-items-center">
                            <div className="input-icons form-group w-100">
                                <input
                                    type="text"
                                    className="form-control search-bar p-0"
                                    placeholder="Search Products"
                                />
                                <div className="cursor ps-2 border-left center">
                                    <Ionicons name="md-search" size={18} color="#007dae" />
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>

            <div className="dashboard-category bg-fff mt-2">

                <div className="cursoual p-2 pb-1">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        paddingRight={50}
                        disableDotsControls
                        responsive={responsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {category.map((data, categoryIndex) => (
                            <div key={categoryIndex} onDragStart={handleDragStart}>
                                {data.id == 1 ? (
                                    is_loading ? (
                                        <div className="">
                                            <Skeleton width={55} height={55} circle={true} />
                                            <div className="p-1">
                                                <Skeleton height={8} width={40} />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to="/ecommerce/ecommerce_category" className="align-center">
                                            <div className="option-round-div  cursor" style={{ backgroundColor: data.background }}>
                                                <div className="">
                                                    <img
                                                        src={data.src}
                                                        className="all_cate_img w-100"
                                                    />

                                                </div>
                                            </div>
                                            {/* <p className="p-1 font">{data.name}</p> */}
                                            <p className="p-1 font"><b className="text-dark">{data.name}</b></p>

                                        </Link>
                                    )
                                ) : (
                                    is_loading ? (
                                        <div className="">
                                            <Skeleton width={55} height={55} circle={true} />
                                            <div className="p-1">
                                                <Skeleton height={8} width={40} />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to="/ecommerce/ecommerce_sub_category" className="align-center">
                                            <div className="option-round-div cursor" style={{ backgroundColor: data.background }}>
                                                <div className="">
                                                    <img
                                                        src={data.src}
                                                        className="img-respone w-100"
                                                    //   src={require(data.src)}
                                                    />
                                                </div>
                                            </div>
                                            <p className="p-1 font"><b className="text-dark">{data.name}</b></p>
                                            {/* <p className="p-1 font">{data.name}</p> */}
                                        </Link>
                                    )
                                )}
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="sectorSlide bg-fff py-2 mt-2">
                <AliceCarousel
                    touchMoveDefaultEvents={false}
                    mouseTracking
                    paddingLeft={20}
                    paddingRight={20}
                    disableButtonsControls
                    controlsStrategy="alternate"
                    autoPlay
                    infinite
                    autoPlayInterval="3000"
                    autoPlayStrategy="default"
                    responsive={slide}
                >
                    {items.map((banner, index) => (
                        <div
                            onDragStart={handleDragStart}
                            className="pe-2"
                            key={index}

                        >
                            {is_loading ? (
                                <Skeleton height={130} width={270} />
                            ) : (
                                <img src={banner.img} className="cursor" />
                            )}
                        </div>
                    ))}
                </AliceCarousel>
            </div>

            <div className="p-2 bg-fff mt-2">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center py-2">
                        <div className="col-8 p-0">
                            <h5 className="mb-0 pb-0">Best Selling Categories</h5>
                            <p className="v-small">Top selling product categories</p>
                        </div>

                        <div className="col-4 text-end pe-0">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="cursoual-row align-center pb-0">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        paddingRight={10}
                        disableDotsControls
                        responsive={bestresponsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {best_products.map((data, index) => (
                            <div className="me-2"
                                key={index}
                                onDragStart={handleDragStart}>
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={135} width={100} />
                                    </div>
                                ) : (
                                    <Link to="/ecommerce/ecommerce_product">

                                        <div className="row center cursor selling_bg p-1">

                                            <div className="pb-2 p-1 bg-fff radius">
                                                <img src={data.img} className="w-100 selling_img" />
                                            </div>
                                            <div className="p-0">
                                                <p className="p-1 text-center oneline text-black ">{data.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                            </div>



                            // <div
                            //   className="m-2 card  text-center "
                            //   key={index}
                            //   onDragStart={handleDragStart}
                            // >
                            //   {/* <input
                            //         type="radio"
                            //         id={data.index}
                            //         name="radioFruit"
                            //         value="inshop"
                            //       /> */}
                            //   <div className="p-2 shadow cursor">
                            //     <img src={data.img} className="sellingProd" />
                            //     <p className="mt-2">
                            //       <small>{data.name}</small>
                            //     </p>
                            //   </div>
                            // </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="bg-fff mt-2 p-2">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center pt-2 pb-3">
                        <div className="col-8 p-0">
                            <div className="d-flex">
                                <h5 className="mb-0 pb-0 pe-2">Flash Sales</h5>
                            </div>
                            <p>Big sales waiting for you</p>
                        </div>

                        <div className="col-4 text-end pe-0">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="row p-0 ">

                    <div className="col-md-3  px-2">
                        {is_loading ? (
                            <div>
                                <Skeleton height={130} width="100%" />
                            </div>
                        ) : (
                            <div className="card bg-leaf-img radius">

                                <div className="d-flex">
                                    <div className="p-2 center">
                                        <div>
                                            <p className="fs-7 text-dark fw-bold mb-1">Flash salses end soon</p>
                                            <p className="text-black mb-2 extra-small fw-500">Shop to top deals</p>
                                            <p className="fw-bold text-green"><Countdown date={Date.now() + 1000000} /></p>

                                            <button className="btn btn-success btn-sm mt-2">
                                                <p className="fw-bold text-white">Shop Now</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ms-auto p-0">
                                        <img src={require("../../../assets/img/leaf2.png")} className="leaf-img" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-9 p-0">
                        <div className="row p-0">
                            <div className="col-12 col-md-3 px-ms-0  pt-sm-2 pt-md-0">
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={130} width="100%" />
                                    </div>
                                ) : (
                                    <div className="flash-big text-center cursor">
                                        <img src={require("../../../assets/img/category/fashion.png")} className="w-100" />
                                        <p className="text-black oneline pt-1">New Brands Products</p>
                                        <div className="center">
                                            <p className="text-black fw-bolder">₹1000</p>
                                            <small className="text-gray ps-1"><s>₹1200</s></small>
                                            <p className="text-green fw-bolder ps-1">20% Off</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-12 col-md-9 p-0 pb-3">
                                <div className="row bg-beige p-0">
                                    <div className="col-md-4 col-6 px-2 ">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={130} width="100%" />
                                            </div>
                                        ) : (
                                            <div className="flash-small cursor">
                                                <div className="">
                                                    <img src={require("../../../assets/img/designSandal.png")} className="w-100" />
                                                </div>
                                                <div className="">
                                                    <p className="text-black oneline text-center pt-1">New Brands Products</p>
                                                    <div className="center">
                                                        <p className="text-black fw-bolder">₹1000</p>
                                                        <small className="ps-1 text-gray"><s>₹1200</s></small>
                                                        <p className="text-green ps-1 fw-bolder">20% Off</p>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-4 col-6 px-2">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={130} width="100%" />
                                            </div>
                                        ) : (
                                            <div className="flash-small  cursor">
                                                <div className="">
                                                    <img src={require("../../../assets/img/handbag.png")} className="w-100" />
                                                </div>
                                                <div className="">
                                                    <p className="text-black oneline text-center pt-1">New Brands Products</p>
                                                    <div className="center">
                                                        <p className="text-black fw-bolder">₹1000</p>
                                                        <small className="ps-1 text-gray"><s>₹1200</s></small>
                                                        <p className="text-green ps-1 fw-bolder">20% Off</p>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-4 col-6 px-2">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={130} width="100%" />
                                            </div>
                                        ) : (
                                            <div className="flash-small  cursor">
                                                <div className="">
                                                    <img src={require("../../../assets/img/handbag.png")} className="w-100" />
                                                </div>
                                                <div className="">
                                                    <p className="text-black oneline text-center pt-1">New Brands Products</p>
                                                    <div className="center">
                                                        <p className="text-black fw-bolder">₹1000</p>
                                                        <small className="ps-1 text-gray"><s>₹1200</s></small>
                                                        <p className="text-green ps-1 fw-bolder">20% Off</p>
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-fff mt-2 brand p-2">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center py-2">
                        <div className="col-8 p-0">
                            <h5 className="mb-0 pb-0">Top Brands</h5>
                            <p>Best brands deals & products</p>
                        </div>

                        <div className="col-4 text-end pe-0">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="py-3">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        paddingLeft={5}
                        paddingRight={60}
                        disableDotsControls
                        responsive={brandresponsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {top_brands.map((data, index) => (
                            <div className="me-2" key={index} onDragStart={handleDragStart}>
                                {is_loading ? (
                                    <div className="p-1 cursor center">
                                        <div>
                                            <Skeleton height={80} width={80} circle={true} />
                                            <div className="text-center pt-2">
                                                <Skeleton height={8} width={50} />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to="/ecommerce/ecommerce_product">
                                        <div className="p-1 cursor center">
                                            <div>
                                                <div className="ecom-brand ">
                                                    <img src={data.src} className="w-100 ecom-brand-img" />
                                                </div>
                                                <div className="text-center pt-2">
                                                    <p className="v-small text-dark text-center">{data.name}</p>
                                                </div>
                                            </div>
                                            {/* <div className="mt-2 text-center">
                        <p className="text-dark">
                        <b>{data.name}</b>
                      </p>
                        <p className="text-dark">
                          <b>Combo at ₹{data.starting}</b>
                        </p>
                      </div> */}
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="p-2 bg-fff mt-2">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center py-2">
                        <div className="col-8 p-0">
                            <h5 className="mb-0 pb-0">Today Deals</h5>
                            <p>Deals on the day products</p>
                        </div>

                        <div className="col-4 text-end pe-0">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="brand">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        paddingLeft={5}
                        paddingRight={60}
                        disableDotsControls
                        responsive={offerresponsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {deals.map((data, index) => (
                            <div className="mt-2 me-2"
                                key={index}
                                onDragStart={handleDragStart}>
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={80} width="100%" />
                                    </div>
                                ) : (
                                    <Link to="/ecommerce/ecommerce_product">
                                        <div className="card p-2 radius deal cursor">
                                            <div className="row p-0 align-items-center">
                                                <div className="col-4 p-0">
                                                    <img src={data.src} className="w-100 img-responsive" />
                                                </div>
                                                <div className="col-8 pe-0 ps-1">
                                                    <p className="text-dark fw-bold fs-7 mb-1">{data.name}</p>
                                                    <div className="d-flex align-items-center">
                                                        <p className="mb-0">Offer upto</p>
                                                        <h6 className="ps-2 fw-bolder mb-0">{data.offer}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                                }

                            </div >
                        ))}
                    </AliceCarousel >
                </div >
            </div >

            <div className="p-2 bg-fff mt-2">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center pt-2 pb-3">
                        <div className="col-8">
                            <h5 className="mb-0 pb-0">Recommended</h5>
                            <p>Most recommended products</p>
                        </div>

                        <div className="col-4 text-end">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="row p-0 ">
                    <div className="col-md-3 mb-2 px-2">
                        {is_loading ? (
                            <div>
                                <Skeleton height={130} width="100%" />
                            </div>
                        ) : (
                            <div className="card bg-red_leaf-img radius">

                                <div className="d-flex">

                                    <div className="p-2 center">
                                        <div>
                                            <p className="fs-7 text-dark fw-bold mb-1">Recently Search Products</p>
                                            <p className="text-black mb-3 extra-small fw-500">Shop to top deals</p>
                                            <button className="btn btn-danger btn-sm ">
                                                <p className="fw-bold text-white">Shop Now</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ms-auto p-0">
                                        <img src={require("../../../assets/img/red_leaf(2).png")} className="red_leaf-img" />
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-9 p-0">
                        <div className="row p-0">
                            <div className="col-md-3 col-6 mb-2 px-2">
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={130} width="100%" />
                                    </div>
                                ) : (
                                    <div className=" p-1 cursor bg-red_leaf">
                                        <div className="bg-fff radius">
                                            <img src={require("../../../assets/img/designSandal.png")} className="w-100 img-responsive" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="oneline text-center fs-7 text-black">New Brands Products</p>
                                            <div className="center">
                                                <small className="text-black fw-bolder">₹1000</small>
                                                <small className="ps-1 text-darkgray"><s>₹1200</s></small>
                                                <small className="text-green ps-1 fw-bold">20% Off</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-md-3 col-6 mb-2 px-2">
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={130} width="100%" />
                                    </div>
                                ) : (
                                    <div className="bg-red_leaf p-1 cursor">
                                        <div className="bg-fff radius">
                                            <img src={require("../../../assets/img/designSandal.png")} className="w-100 img-responsive" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="oneline text-center fs-7 text-black">New Brands Products</p>
                                            <div className="center">
                                                <small className="text-black fw-bolder">₹1000</small>
                                                <small className="ps-1 text-darkgray"><s>₹1200</s></small>
                                                <small className="text-green ps-1 fw-bold">20% Off</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-md-3 col-6  mb-2 px-2">
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={130} width="100%" />
                                    </div>
                                ) : (
                                    <div className="bg-red_leaf p-1 cursor">
                                        <div className="bg-fff radius">
                                            <img src={require("../../../assets/img/handbag.png")} className="w-100 img-responsive" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="oneline text-center fs-7 text-black">New Brands Products</p>
                                            <div className="center">
                                                <small className="text-black fw-bolder">₹1000</small>
                                                <small className="ps-1 text-darkgray"><s>₹1200</s></small>
                                                <small className="text-green ps-1 fw-bold">20% Off</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-md-3 col-6  mb-2 px-2">
                                {is_loading ? (
                                    <div>
                                        <Skeleton height={130} width="100%" />
                                    </div>
                                ) : (
                                    <div className="bg-red_leaf p-1 cursor">
                                        <div className="bg-fff radius">
                                            <img src={require("../../../assets/img/handbag.png")} className="w-100 img-responsive" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="oneline text-center fs-7 text-black">New Brands Products</p>
                                            <div className="center">
                                                <small className="text-black fw-bolder">₹1000</small>
                                                <small className="ps-1 text-darkgray"><s>₹1200</s></small>
                                                <small className="text-green ps-1 fw-bold">20% Off</small>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className="mt-2">
                {is_loading ? (
                    <div className="p-1 bg-fff">
                        <Skeleton height={120} width="100%" />
                    </div>
                ) : (
                    <div className="banner p-2">
                        <div className="row align-items-center">
                            <div className="col-8">
                                <h6>Shop Electronic Gadgets</h6>
                                <p>Best offers for your purchase</p>
                                <div className="mt-2">
                                    <button className="btn btn-prime btn-sm">Shop Now</button>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <img src={require("../../../assets/img/electronic.png")} className="banner-image cursor" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* <div className="p-2 bg-fff mt-1">
          <h5 className="p-2">Collection</h5>
          <div className="row pt-2">
            <div className="col-6 col-md-4 col-lg-3 p-1">
              <div className="border">
                <img src={require("../../../assets/img/category/computer.png")} className="w-100 img-cover" />
              </div>
              <p className="oneline">New one</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3 p-1">
              <div className="border">
                <img src={require("../../../assets/img/category/furniture.png")} className="w-100 img-cover" />
              </div>
              <p className="oneline">Xtreme Collections</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3 p-1">
              <div className="border">
                <img src={require("../../../assets/img/shirt5.jpg")} className="w-100 img-cover" />
              </div>
              <p className="oneline">Xtreme Collections</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3 p-1">
              <div className="border">
                <img src={require("../../../assets/img/Shirt.png")} className="w-100 img-cover" />
              </div>
              <p className="oneline">Xtreme Collections</p>
            </div>
          </div>
        </div> */}




            <div className="products mt-2 bg-fff p-2">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center py-2">
                        <div className="col-8 p-0">
                            <h5 className="mb-0 pb-0">Products</h5>
                            <p>Products for you</p>
                        </div>

                        <div className="col-4 text-end pe-0">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="row pt-2">
                    {products.map((data, index) => (
                        <div
                            className="py-0 px-1 prods mt-2 col-6 col-md-4 col-lg-3"
                            key={index}
                        >
                            {is_loading ? (
                                <div className="border pb-2">
                                    <Skeleton height={140} width="100%" />
                                    <div className="p-2">
                                        <Skeleton height={12} width={90} />
                                        <Skeleton height={9} width={120} />
                                        <div className="d-flex align-center pt-1">
                                            <Skeleton height={10} width={30} style={{ marginRight: 6 }} />
                                            <Skeleton height={9} width={30} />
                                            <div className="ms-auto">
                                                <Skeleton height={9} width={40} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Skeleton height={30} width={120} />
                                        <Skeleton height={8} width={80} style={{ marginTop: 5 }} />
                                    </div>
                                </div>
                            ) : (
                                <div className="border pb-2">
                                    <div className="card bg-lightblue pt-2 pb-0">
                                        {data.discount != "" ? (
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
                                                    <Ionicons name="md-star" size={9} color="orange" />
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

                                            <div className="ecomoffer"
                                                onClick={(event) => {
                                                    console.log("open variant2: ", data);
                                                    if (data.variant.length > 0) {
                                                        if (width < 720) {
                                                            variantDrawer("bottom", true, event, data)
                                                        } else {
                                                            variantDrawer("right", true, event, data);
                                                        }
                                                    } else {
                                                        console.log("No variant")
                                                    }
                                                }}>
                                                <p className="cursor p-2">
                                                    <b className="text-prime1">Add</b>
                                                </p>
                                            </div>

                                        )}
                                        {data.variant != "" ? (
                                            <small className="text-black"><u className="underline">3+ more</u></small>
                                        ) : (null)}

                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                    }
                </div >
            </div >

            <div className="p-2 bg-fff mt-2 ">
                {is_loading ? (
                    <div className="row pt-1">
                        <div className="col-8 p-0">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={8} width={150} />
                        </div>
                        <div className="col-4 pe-0 text-right">
                            <Skeleton height={8} width={50} />
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center py-2">
                        <div className="col-8 p-0">
                            <h5 className="mb-0 pb-0">Sellers Shops</h5>
                            <p className="">Shops near by you</p>
                        </div>
                        <div className="col-4 text-end pe-0">
                            <div className="flex justify-end cursor">
                                <p>View all</p>
                                <img
                                    src={require("../../../assets/icon/next4.png")}
                                    className="next-img"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="cursoual-row align-center pb-5">
                    <div className="row">
                        {best_shop.map((data, index) => (

                            <div className="col-12 col-md-6 col-lg-4 cursor ecom-list__item" key={index}>
                                {is_loading ? (
                                    <div className="row pt-2 ">
                                        <div className="col-5 p-0">
                                            <Skeleton height={100} width="100%" />
                                        </div>
                                        <div className="col-7 pr-0 pt-1">
                                            <Skeleton height={10} width={150} />
                                            <Skeleton height={8} width="100%" count={2} />
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={"/ecommerce/ecommerce_shop_dashboard"} >
                                        <div className="row ecom-list_card" onClick={() => {
                                            SaveContext(data);
                                        }}>
                                            <div className="col-5 p-0">
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


                                            </div>
                                            <div className="col-7 pr-0">
                                                <h6 className="marg">{data.name}</h6>
                                                {/* <div className="pb-2"> */}
                                                <p className="marg ">{data.type}</p>
                                                {/* </div> */}
                                                {/* <div className="border-top">
                                                <p className="p-1 text-orange">{data.rate}★</p>
                                               
                                            </div> */}
                                            </div>
                                        </div>
                                    </Link>
                                )}

                            </div>


                            // <div
                            //   className="m-2 card  text-center "
                            //   key={index}
                            //   onDragStart={handleDragStart}
                            // >
                            //   {/* <input
                            //         type="radio"
                            //         id={data.index}
                            //         name="radioFruit"
                            //         value="inshop"
                            //       /> */}
                            //   <div className="p-2 shadow cursor">
                            //     <img src={data.img} className="sellingProd" />
                            //     <p className="mt-2">
                            //       <small>{data.name}</small>
                            //     </p>
                            //   </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
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

                                    <div className="p-2 px-3 d-flex p-md-3 align-items-center">
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
                                <Variants value={variant_data} />
                            </div>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>


            {/* <SwipeableBottomSheet
                // overflowHeight={64}
                // fullScreen
                // marginTop={50}
                open={filter_modal}
                onChange={() => {
                    setState({
                        filter_modal: false,
                    });
                    // bottomDrawer();
                    // bottomDrawer.bind(this)
                }}
            >
                <div className="row">
                    <div className="sticky_drawer bg-fff border-bottom">
                        <div className=" d-flex p-2 align-items-center">
                            <h6 className="mb-0">Filter</h6>
                            <div className="ms-auto cursor" onClick={() => {
                                setState({
                                    filter_modal: false,
                                });
                            }}>
                                <Ionicons name="close" size={19} color="gray" />
                            </div>
                        </div>
                    </div>
                    <Filter />
                </div>
            </SwipeableBottomSheet>*/}


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
                                <p className="px-1 delivery_time mb-0 fw-bolder">Super sellers</p>
                            </div>
                        </div>

                        <div className="d-flex align-center mt-2 pb-2 border-bottom">
                            <p className="m-0 pr-1">Delivery Near</p>
                            <p className="mb-0 text-dark">Erode</p>
                            <div className="ms-auto">
                                <div className="d-flex align-items-center ">
                                    <p className="pr-1 mb-0">30 mins</p>
                                    <span className="text-gray">|</span>
                                    <p className="pl-1 green mb-0">₹20</p>
                                </div>
                            </div>
                        </div>
                        <Link to={width < 548 ? "/ecommerce/ecommerce_mobile_product_details" : "/ecommerce/ecommerce_product_details"}>
                            <div className="d-flex align-items-center pt-2 cursor" onClick={(event) => {
                                SetQuick((prevValue: any) => {
                                    prevValue.open = false;
                                    return { ...prevValue }
                                });
                            }}>
                                <p className="mb-0 text-black">See more</p>
                                <div className="ms-auto">
                                    <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                                </div>
                            </div>
                        </Link>


                    </div>

                </div>
            </Dialog>
        </div >
    );
}
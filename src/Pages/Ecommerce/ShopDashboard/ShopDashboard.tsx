import React, { useState, useEffect, useContext, useRef, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
    MaterialIcons,
    Ionicons,
    AntDesign,
    Entypo,
    FontAwesome,
    MaterialCommunityIcons,
    FontAwesome5,
} from "@expo/vector-icons";
import { Menu, MenuItem, SwipeableDrawer, Accordion, AccordionDetails, AccordionSummary, Dialog, makeStyles, Drawer } from "@material-ui/core";
import Headroom from "react-headroom";
const handleDragStart = (e) => e.preventDefault();
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import SwipeableBottomSheet from '@geomatico/react-swipeable-bottom-sheet';
import { ProgressBar } from "react-bootstrap";
import Variants from "../Variants/Variants";

const productresponsive = {
    0: { items: 1 },
    200: { items: 1 },
    300: { items: 1 },
    350: { items: 1 },
    548: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
};

const offerpost = {
    0: { items: 1 },
    250: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 3 },
    912: { items: 4 },
    1024: { items: 6 },
};

const shopresponsive = {
    0: { items: 1 },
    300: { items: 1 },
    350: { items: 1 },
    548: { items: 1 },
    720: { items: 2 },
    912: { items: 2 },
    1024: { items: 3 },
};

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

let randomHex = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("background : ", color);
    return color;

};

export default function EcommerceShopDashboard(props: any) {
    const classes = useStyles();
    const context = useContext(DataContext);
    const [width, SetWidth] = React.useState(innerWidth);
    const [category, SetCategory] = useState([
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
    const [shop, SetShop] = useState({
        name: "Furniture",
        type: "All type of furniture items",
        location: "Erode",
        distance: "20Km",
        rating: 4.1,
        img: require("../../../assets/img/grocery_shop.jpg"),
        products: {
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
                    variant: []
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
                    variant: []
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
                    ],
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
                    ],
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
                    ],
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
                    variant: []
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
                    variant: []
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
                    variant: [],
                },

            ],
            Bedroom: [
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
                    ],
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
                    variant: [],
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
                    variant: []
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
                    variant: []
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
                    ],
                },

            ],
            Study: [
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
                    variant: []
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
                    ],
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
                    variant: []
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
                    variant: []
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
                    ],
                },

            ],
        },

        offer: [
            {
                title: "New arrivals",
                sub: "New collections deliver to your home",
                offer: 25,
                img_path: require("../../../assets/img/products/royal.webp"),
            },
            {
                title: "Fashion World",
                sub: "Start with day on your favourite ",
                offer: 5,
                img_path: require("../../../assets/img/products/floating-furniture.webp"),
            },
            {
                title: "Combo Offers",
                sub: "Dining table at combo offers",
                offer: 14,
                img_path: require("../../../assets/img/category/furniture.png"),
            },
        ],
    });
    const [grid, SetGrid] = useState(true);
    const [list, SetList] = useState(false);
    const [fav_heart, SetFavHeart] = useState(false);
    const [bottom_swipe, SetBottomSwipe] = useState(false);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [shop_location, SetShopLocation] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [variants_size, SetVariantsSize] = useState([
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
    const [size, SetSize] = useState(false);
    const [click, SetClick] = useState(false);
    const [another_location, SetAnotherLocation] = useState({ open: false, value: "" });
    const [active_location, SetActiveLocation] = useState({ open: true, value: "" });
    const [shop_details, SetShopDetails] = useState({ open: false, value: "" });
    const [shop_menu, SetShopMenu] = useState({ open: false, value: "" });
    const [current_image, SetCurrentImage] = useState(0);
    const [viewer_open, SetViewerOpen] = useState(false);
    const ratingShow = [
        {
            star: "5",
            rating: "60",
            value: "310",
            variant: "success",
        },
        {
            star: "4",
            rating: "24",
            value: "30",
            variant: "",
        },
        {
            star: "3",
            rating: "30",
            value: "50",
            variant: "info",
        },
        {
            star: "2",
            rating: "10",
            value: "10",
            variant: "warning",
        },
        {
            star: "1",
            rating: "2",
            value: "5",
            variant: "danger",
        },
    ];
    const [review, SetReview] = useState([
        {
            id: 1,
            value: "4.0",
            reviewText:
                " Very good product Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
            review: "Excellent",
            customer: "Customer one",
            buyer: "Certified Buyer",
            date: "2 months ago",
            file: [
                require("../../../assets/img/allWear.webp"),
                require("../../../assets/img/c65.jpg"),
                require("../../../assets/img/designSandal.png"),
                require("../../../assets/img/saree.jpg"),
            ],
            dislikeCount: 10,
            likeCount: 0,
            like: false,
            dislike: false,
        },
        {
            id: 1,
            value: "4.0",
            reviewText:
                " Very good product Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
            review: "Excellent",
            customer: "Customer one",
            buyer: "Certified Buyer",
            date: "2 months ago",
            file: [],
            dislikeCount: 2,
            likeCount: 4,
            like: false,
            dislike: false,
        },
    ]);
    const [menu_open, SetMenuOpen] = useState(false);
    const [sub_menu, SetSubMenu] = useState(false);
    const [variant_data, SetVariantData] = useState({});
    const [quick, SetQuick] = useState({
        open: false, data: ""
    });

    const shareUrl = "https://1superapp.com/";

    const [expanded, setExpanded] = React.useState('panel1');

    useEffect(() => {
        console.log("EcommerceShopDashboard On mount :", props);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    function fav() {
        console.log("fav :", fav_heart);
        if (fav_heart == false) {
            SetFavHeart(true);
        } else {
            SetFavHeart(false);
        }
    };

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

    function ShopLocationSheet(anchor, open, event) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        SetShopLocation({ ...shop_location, [anchor]: open });
    }

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 180) : text}
                <span onClick={toggleReadMore} className="text-prime1 fw-bold ps-1 read-or-hide">
                    {isReadMore ? " ...read more" : "  show less"}
                </span>
            </p>
        );
    };


    function openImageViewer(index) {
        console.log("image viewer");
        SetCurrentImage(index);
        SetViewerOpen(true)
    };

    function closeImageViewer() {
        SetCurrentImage(0);
        SetViewerOpen(false)
    };


    function likeclick(index) {
        let review_data = review;
        if (review_data[index].like == false) {
            review_data[index].like = true;
            review_data[index].likeCount = review_data[index].likeCount + 1;
            SetReview(review_data);
        }

        if (review_data[index].dislike == true) {
            review_data[index].dislike = false;
            review_data[index].dislikeCount = review_data[index].dislikeCount - 1;
            SetReview(review_data);
        }
        console.log("dislike count : ", review_data[index].dislikeCount);
    };

    function dislikeclick(index) {
        let review_data = review;
        if (review_data[index].dislike == false) {
            review_data[index].dislike = true;
            review_data[index].dislikeCount = review_data[index].dislikeCount + 1;
            SetReview(review_data);
        }
        if (review_data[index].like == true) {
            review_data[index].like = false;
            review_data[index].likeCount = review_data[index].likeCount - 1;
            SetReview(review_data);
        }
    };


    return (
        <div className="page-main mb-4 px-sm-0 px-md-2">
            <div className="bg-fff">
                <div className="container px-sm-0 px-md-2 ">
                    <div className="resta_shop_item  ">
                        <div className="shop-menu d-flex align-items-center">
                            <div className="cursor" onClick={() => {
                                SetShopMenu({ open: true, value: "" })
                            }}>
                                <img src={require("../../../assets/icon/menu.png")} className="shop-icon" />
                            </div>
                            <div className={fav_heart ? "wishlist-top cursor p-2" : "wishlist-top-css cursor p-2"}
                                onClick={() => {
                                    SetFavHeart(!fav_heart);
                                }}>
                                {fav_heart ? (
                                    <Ionicons name="ios-heart-sharp" size={22} color="red" />
                                ) : (
                                    <Ionicons name="ios-heart-outline" size={22} color="white" />
                                )}
                            </div>
                        </div>


                        <img src={require("../../../assets/img/fashion.webp")} className="resta_shop_img" />
                        <div className="img_over_content_shop pt-3 p-1">
                            {/* <h4 className="text-white oneline mb-1">
                                <b>{shop.name}</b>
                            </h4> */}



                            <div className="d-flex align-items-center ">
                                {/* {context.app_data.restaurant.location}  */}
                                <div className="d-flex align-items-center cursor" onClick={() => {
                                    SetAnotherLocation({ open: true, value: "" })
                                }}>
                                    <Ionicons name="location-sharp" size={16} color="white" />
                                    <p className="border-right px-1 text-white">
                                        <u className="pb-1">Erode</u>
                                    </p>
                                </div>

                                <p className="border-right px-1 text-white">
                                    {shop.distance}
                                </p>
                                <p className="px-1 text-white">
                                    15mins
                                </p>

                            </div>

                            <div className="d-flex align-items-center py-1 w-100">
                                <div className="d-flex align-items-center px-1">
                                    <p className="pe-1 text-white">4</p>
                                    <FontAwesome name="star" size={10} color="white" />
                                </div>
                                <Entypo name="dot-single" size={9} color="white" />
                                <p className="text-white oneline px-1 ">
                                    <small className="">{shop.type}</small>
                                </p>
                                <Entypo name="dot-single" size={9} color="white" />

                                <div className="px-2 cursor" onClick={() => {
                                    SetShopDetails({ open: true, value: "" })
                                }}>
                                    <Entypo name="info-with-circle" size={20} color="white" />
                                </div>

                                <div className="d-flex align-items-center ms-auto  p-0">
                                    <div className="px-2 border-right cursor">
                                        <img src={require("../../../assets/icon/star(3).png")} className="shop-icon" />
                                    </div>
                                    <div className="px-2 cursor center">
                                        <FontAwesome5 name="directions" size={20} color="#fff" />

                                    </div>

                                </div>
                            </div>

                            <div className="p-2 ">
                                <Link to="/ecommerce/ecommerce_search">
                                    <div className="row align-items-center">
                                        <div className="input-icons form-group w-100">
                                            <input
                                                type="text"
                                                className="form-control search-bar food_search p-0"
                                                placeholder="Search foods"
                                            />
                                            <div className="cursor ps-2 border-left center">
                                                <Ionicons name="md-search" size={18} color="#fff" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className=" pt-3 mb-2 sm-none md-block">



                        <div className="row pb-3">
                            <div className="col-md-4 col-12 border-right-md py-2 ">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        <img src={require("../../../assets/icon/map_location.png")} className="cs-shop_icon_img" />
                                    </div>
                                    <div className="col-10 ps-0">
                                        <p className="fs-7 fw-bold text-black  mb-2">Address</p>
                                        <p >New Cake Shop, RKV road, Near manikundu, Erode-638007</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12 py-2 border-right-md">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        <img src={require("../../../assets/icon/contact.png")} className="cs-shop_icon_img" />
                                    </div>
                                    <div className="col-10 ps-0">
                                        <p className=" fs-7 fw-bold text-black mb-2">Contact Us</p>
                                        <div>
                                            <p><b className="text-dark pe-1">1478529633</b></p>
                                            <p className="mt-1">Opening time: All days (9Am - 10Pm)</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 col-12 py-2 ">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        <img src={require("../../../assets/icon/rating.png")} className="cs-shop_icon_img" />
                                    </div>
                                    <div className="col-10 ps-0">
                                        <p className=" fs-7 fw-bold text-black mb-2">Reviews</p>
                                        <div className="p-0 ">
                                            <h5 className="">3.5 ★</h5>
                                            <div className="mt-1">
                                                <p>
                                                    432 Ratings &  77 Reviews
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-2 mt-2 bg-fff">
                <div className="p-2 pl-2">
                    <h5>Shop by Category</h5>
                    <p className="pt-1">Easy to buy a products on our shops</p>
                </div>
                <div className="pt-1">
                    <div className="row p-0">
                        {category.map((cate, cateindex) => (
                            <div
                                className="col-4 col-md-2 pt-3 text-center px-1"
                                key={cateindex}
                            >
                                <Link to="/ecommerce/ecommerce_shop_products">
                                    <div className="row align-items-center">
                                        <div className=" p-0 cursor">
                                            <div className="px-2">
                                                <img src={cate.src} className="w-100 img-responsive" />
                                            </div>
                                            <p className="pt-2 text-center text-dark oneline">{cate.name}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-fff mt-2">
                <div className="p-2 pt-3">
                    <h5 className="">Offers</h5>
                    <p className="pb-2 oneline">Exclusive offers for you</p>
                    <AliceCarousel
                        touchMoveDefaultEvents={false}
                        mouseTracking
                        paddingRight={20}
                        disableDotsControls
                        responsive={offerpost}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {shop.offer.map((data, offerindex) => (
                            <div
                                className="p-1"
                                onDragStart={handleDragStart}
                                key={offerindex}
                            >
                                <div className="p-2 cursor bg-gray">
                                    <div className="p-0">
                                        <img src={data.img_path} className="w-100 img-responsive" />
                                    </div>
                                    <div className="pt-2 text-center">
                                        <p className="oneline">{data.title}</p>
                                        <p className="mt-2 text-prime1 fw-bolder">{data.offer}% OFF</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="bg-fff mt-2" >
                <div className="pt-4 p-2">
                    <div className="row align-center">
                        <div className="col-8">
                            <h5 className="mb-0">Living Room</h5>
                            <p className=" oneline">Living set furnitures</p>
                        </div>
                        <div className="col-4 text-right">
                            <Link to="/ecommerceProducts">
                                <p className="text-prime1 fw-bold cursor mb-0">View all </p>
                            </Link>
                        </div>
                    </div>

                    <AliceCarousel
                        mouseTracking
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        touchMoveDefaultEvents={false}
                        paddingRight={120}
                        disableDotsControls
                        responsive={productresponsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {shop.products.Living.map((product_data, index) => (
                            <div
                                onDragStart={handleDragStart}
                                className="p-1 mt-3 prods"
                                key={index}
                            >
                                <div className="border cursor">
                                    <div className="container-img">
                                        <div className="img-top-right cursor" onClick={() => {
                                            console.log("Fav Products");
                                            //   let product_show_data = Products;
                                            //   product_show_data[index].fav_heart =
                                            //     !product_show_data[index].fav_heart;
                                            //   setState((preState) => ({
                                            //     ...preState,
                                            //     Products: product_show_data,
                                            //   }));
                                            //   console.log(
                                            //     "Fav Products :",
                                            //     product_show_data[index].fav_heart
                                            //   );
                                        }}
                                        >
                                            {product_data.fav_heart ? (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="ios-heart"
                                                        size={24}
                                                        color="rgb(255, 0, 48)"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="heart-outline"
                                                        size={24}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}</div>
                                        <div className="px-1" onClick={() => {
                                            SetQuick({ open: true, data: product_data });
                                        }}>
                                            <img
                                                src={product_data.img_path}
                                                className="ecom-card-img"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <p className="text-dark oneline">{product_data.name}</p>
                                        <div className="py-1">
                                            <p className="v-small oneline">{product_data.sub}</p>
                                        </div>
                                        <div className="d-flex align-center">

                                            <p className="text-dark pr-1">₹{product_data.offer_price}</p>
                                            <p className="v-small text-gray text-end">
                                                <s>₹{product_data.original_price}</s>
                                            </p>
                                            <p className="pl-1"><b className="text-prime1">{product_data.discount} Off</b></p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-7 p-0">
                                                <small>Free delivery</small>
                                            </div>
                                            <div className="col-5 p-0">
                                                <div className="end align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <small className="mb-0 text-orange me-1">3.5</small>
                                                        <Ionicons name="md-star" size={9} color="gold" />
                                                    </div>
                                                    <small className="ps-1 mb-0 text-gray">(785)</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 text-center">
                                            {product_data.addbtn ? (
                                                <div >
                                                    <div className="flex Groceoffer center p-2">

                                                        <div
                                                            className="cursor pr-1 w-25 center"
                                                            onClick={() => {
                                                                //   minus(index);
                                                            }}
                                                        >
                                                            <Entypo name="minus" size={18} color="#000" />
                                                        </div>
                                                        <div className="w-50 center">
                                                            <p className="smooth">
                                                                <b>{product_data.addcount}</b>
                                                            </p>
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
                                                        if (product_data.variant.length>0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, product_data)
                                                            } else {
                                                                variantDrawer("right", true, event, product_data);
                                                            }
                                                        }else{
                                                            console.log("No variant")
                                                        }
                                                    }}>
                                                    <p className="cursor p-2">
                                                        <b className="text-prime1">Add</b>
                                                    </p>
                                                </div>
                                            )}


                                            {product_data.variant != "" ? (
                                                <small className="text-black"><u className="underline">3+ more</u></small>
                                            ) : (null)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="bg-fff mt-2" >
                <div className="pt-4 p-2">
                    <div className="row  align-center">
                        <div className="col-8">
                            <h5 className="mb-0">Outdoor </h5>
                            <p className=" oneline">Best products for you</p>
                        </div>
                        <div className="col-4 text-right ">
                            <Link to="/ecommerceProducts">
                                <p className="text-prime1 fw-bold cursor mb-0">View all </p>
                            </Link>
                        </div>
                    </div>

                    <AliceCarousel
                        mouseTracking
                        // items={productsRestraunt}
                        touchMoveDefaultEvents={false}
                        // paddingLeft={50}
                        paddingRight={120}
                        disableDotsControls
                        responsive={productresponsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {shop.products.Outdoor.map((product_data, index) => (
                            <div
                                onDragStart={handleDragStart}
                                className="p-1 mt-3 prods"
                                key={index}
                            >
                                <div className="border cursor">

                                    <div className="container-img">
                                        <div className="img-top-right cursor" onClick={() => {
                                            console.log("Fav Products");
                                            //   let product_show_data = Products;
                                            //   product_show_data[index].fav_heart =
                                            //     !product_show_data[index].fav_heart;
                                            //   setState((preState) => ({
                                            //     ...preState,
                                            //     Products: product_show_data,
                                            //   }));
                                            //   console.log(
                                            //     "Fav Products :",
                                            //     product_show_data[index].fav_heart
                                            //   );
                                        }}
                                        >
                                            {product_data.fav_heart ? (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="ios-heart"
                                                        size={24}
                                                        color="rgb(255, 0, 48)"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="heart-outline"
                                                        size={24}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}</div>
                                        <div className="px-1" onClick={() => {
                                            SetQuick({ open: true, data: product_data });
                                        }}>
                                            <img
                                                src={product_data.img_path}
                                                className="ecom-card-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <p className="text-dark oneline">{product_data.name}</p>
                                        <div className="py-1">
                                            <p className="v-small oneline">{product_data.sub}</p>
                                        </div>
                                        <div className="d-flex align-center">

                                            <p className="text-dark pr-1">₹{product_data.offer_price}</p>
                                            <p className="v-small text-gray text-end">
                                                <s>₹{product_data.original_price}</s>
                                            </p>
                                            <p className="pl-1"><b className="text-prime1">{product_data.discount} Off</b></p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-7 p-0">
                                                <small>Free delivery</small>
                                            </div>
                                            <div className="col-5 p-0">
                                                <div className="end align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <small className="mb-0 text-orange me-1">3.5</small>
                                                        <Ionicons name="md-star" size={9} color="gold" />
                                                    </div>
                                                    <small className="ps-1 mb-0 text-gray">(785)</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 text-center">
                                            {product_data.addbtn ? (
                                                <div>
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
                                                            <p className="smooth">
                                                                <b>{product_data.addcount}</b>
                                                            </p>
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
                                                        if (product_data.variant.length>0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, product_data)
                                                            } else {
                                                                variantDrawer("right", true, event, product_data);
                                                            }
                                                        }else{
                                                            console.log("No variant")
                                                        }
                                                    }}>
                                                    <p className="cursor p-2">
                                                        <b className="text-prime1">Add</b>
                                                    </p>
                                                </div>
                                            )}

                                            {product_data.variant != "" ? (
                                                <small className="text-black"><u className="underline">3+ more</u></small>
                                            ) : (null)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="bg-fff mt-2" >
                <div className="pt-4 p-2">
                    <div className="row align-center ">
                        <div className="col-8">
                            <h5 className="mb-0">Bedroom Furniture</h5>
                            <p className="oneline">All type of dressing, wardroom, cots sets</p>
                        </div>
                        <div className="col-4 text-right ">
                            <Link to="/ecommerceProducts">
                                <p className="text-prime1 fw-bold cursor mb-0">View all </p>
                            </Link>
                        </div>
                    </div>

                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        paddingRight={120}
                        disableDotsControls
                        responsive={productresponsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >
                        {shop.products.Bedroom.map((product_data, index) => (
                            <div
                                onDragStart={handleDragStart}
                                className="p-1 mt-3 prods"
                                key={index}
                            >
                                <div className="border cursor">

                                    <div className="container-img">
                                        <div className="img-top-right cursor" onClick={() => {
                                            console.log("Fav Products");
                                            //   let product_show_data = Products;
                                            //   product_show_data[index].fav_heart =
                                            //     !product_show_data[index].fav_heart;
                                            //   setState((preState) => ({
                                            //     ...preState,
                                            //     Products: product_show_data,
                                            //   }));
                                            //   console.log(
                                            //     "Fav Products :",
                                            //     product_show_data[index].fav_heart
                                            //   );
                                        }}
                                        >
                                            {product_data.fav_heart ? (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="ios-heart"
                                                        size={24}
                                                        color="rgb(255, 0, 48)"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="heart-outline"
                                                        size={24}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}</div>
                                        <div className="px-1" onClick={() => {
                                            SetQuick({ open: true, data: product_data });
                                        }}>
                                            <img
                                                src={product_data.img_path}
                                                className="ecom-card-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <p className="text-dark oneline">{product_data.name}</p>
                                        <div className="py-1">
                                            <p className="v-small oneline">{product_data.sub}</p>
                                        </div>
                                        <div className="d-flex align-center">

                                            <p className="text-dark pr-1">₹{product_data.offer_price}</p>
                                            <p className="v-small text-gray text-end">
                                                <s>₹{product_data.original_price}</s>
                                            </p>
                                            <p className="pl-1"><b className="text-prime1">{product_data.discount} Off</b></p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-7 p-0">
                                                <small>Free delivery</small>
                                            </div>
                                            <div className="col-5 p-0">
                                                <div className="end align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <small className="mb-0 text-orange me-1">3.5</small>
                                                        <Ionicons name="md-star" size={9} color="gold" />
                                                    </div>
                                                    <small className="ps-1 mb-0 text-gray">(785)</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 text-center">
                                            {product_data.addbtn ? (
                                                <div>
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
                                                            <p className="smooth">
                                                                <b>{product_data.addcount}</b>
                                                            </p>
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
                                                        if (product_data.variant.length>0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, product_data)
                                                            } else {
                                                                variantDrawer("right", true, event, product_data);
                                                            }
                                                        }else{
                                                            console.log("No variant")
                                                        }
                                                    }}>
                                                    <p className="cursor p-2">
                                                        <b className="text-prime1">Add</b>
                                                    </p>
                                                </div>
                                            )}

                                            {product_data.variant != "" ? (
                                                <small className="text-black"><u className="underline">3+ more</u></small>
                                            ) : (null)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="bg-fff mt-2" >
                <div className="pt-4 p-2">
                    <div className="row align-center ">
                        <div className="col-8 ">
                            <h5 className="mb-0">Study & Work Fruniture</h5>
                            <p className="oneline">Book self, writing table & computer table available for you</p>
                        </div>
                        <div className="col-4 text-right ">
                            <Link to="/ecommerceProducts">
                                <p className="text-prime1 fw-bold cursor mb-0">View all </p>
                            </Link>
                        </div>
                    </div>

                    <AliceCarousel
                        // mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        paddingRight={120}
                        disableDotsControls
                        responsive={productresponsive}
                        disableButtonsControls
                    // controlsStrategy="alternate"
                    >
                        {shop.products.Study.map((product_data, index) => (
                            <div
                                onDragStart={handleDragStart}
                                className="p-1 mt-3 prods"
                                key={index}
                            >
                                <div className="border cursor">

                                    <div className="container-img">
                                        <div className="img-top-right cursor" onClick={() => {
                                            console.log("Fav Products");
                                            //   let product_show_data = Products;
                                            //   product_show_data[index].fav_heart =
                                            //     !product_show_data[index].fav_heart;
                                            //   setState((preState) => ({
                                            //     ...preState,
                                            //     Products: product_show_data,
                                            //   }));
                                            //   console.log(
                                            //     "Fav Products :",
                                            //     product_show_data[index].fav_heart
                                            //   );
                                        }}
                                        >
                                            {product_data.fav_heart ? (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="ios-heart"
                                                        size={24}
                                                        color="rgb(255, 0, 48)"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="wishlist-heart">
                                                    <Ionicons
                                                        name="heart-outline"
                                                        size={24}
                                                        color="gray"
                                                    />
                                                </div>
                                            )}</div>
                                        <div className="px-1" onClick={() => {
                                            SetQuick({ open: true, data: product_data });
                                        }}>
                                            <img
                                                src={product_data.img_path}
                                                className="ecom-card-img"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <p className="text-dark oneline">{product_data.name}</p>
                                        <div className="py-1">
                                            <p className="v-small oneline">{product_data.sub}</p>
                                        </div>
                                        <div className="d-flex align-center">

                                            <p className="text-dark pr-1">₹{product_data.offer_price}</p>
                                            <p className="v-small text-gray text-end">
                                                <s>₹{product_data.original_price}</s>
                                            </p>
                                            <p className="pl-1"><b className="text-prime1">{product_data.discount} Off</b></p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-7 p-0">
                                                <small>Free delivery</small>
                                            </div>
                                            <div className="col-5 p-0">
                                                <div className="end align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <small className="mb-0 text-orange me-1">3.5</small>
                                                        <Ionicons name="md-star" size={9} color="gold" />
                                                    </div>
                                                    <small className="ps-1 mb-0 text-gray">(785)</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 text-center">
                                            {product_data.addbtn ? (
                                                <div >
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

                                                            <p className="smooth">
                                                                <b>{product_data.addcount}</b>
                                                            </p>
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
                                                        if (product_data.variant.length>0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, product_data)
                                                            } else {
                                                                variantDrawer("right", true, event, product_data);
                                                            }
                                                        }else{
                                                            console.log("No variant")
                                                        }
                                                    }}>
                                                    <p className="cursor p-2">
                                                        <b className="text-prime1">Add</b>
                                                    </p>
                                                </div>
                                            )}

                                            {product_data.variant != "" ? (
                                                <small className="text-black"><u className="underline">3+ more</u></small>
                                            ) : (null)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>


            <div className="p-2 bg-fff mt-2">
                <div className="p-2 pb-3">
                    <h5>Recommended Products </h5>
                    <p className="pt-1 oneline">Enjoy to shop your daily needs</p>
                </div>
                <div >
                    {grid ? (
                        <div className="row p-0">
                            {shop.products.Living.map((data, index) => (
                                <div
                                    className="py-0 px-1 prods mt-2 col-6 col-md-4 col-lg-3"
                                    key={index}
                                >
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
                                                        <Ionicons name="md-star" size={9} color="#ffa500" />
                                                        <p className="extra-small fw-500 ps-1 mb-0 text-gray-200">(785)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-0 text-center">
                                            {data.addbtn ? (
                                                <div>
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
                                                            <p className="smooth">
                                                                <b>{data.addcount}</b>
                                                            </p>
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
                                                        if (data.variant.length>0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, data)
                                                            } else {
                                                                variantDrawer("right", true, event, data);
                                                            }
                                                        }else{
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
                                </div>
                            ))}

                            {shop.products.Outdoor.map((data, index) => (
                                <div
                                    className="py-0 px-1 prods mt-2 col-6 col-md-4 col-lg-3"
                                    key={index}
                                >
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
                                                        <Ionicons name="md-star" size={9} color="#ffa500" />
                                                        <p className="extra-small fw-500 ps-1 mb-0 text-gray-200">(785)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-0 text-center">
                                            {data.addbtn ? (
                                                <div>
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
                                                            <p className="smooth">
                                                                <b>{data.addcount}</b>
                                                            </p>
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
                                                               ? variantDrawer("bottom", true, event, data)
                                                               : variantDrawer("right", true, event, data)
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
                                                          console.log("open variant: ", data);
                                                          if (data.variant.length>0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, data)
                                                            } else {
                                                                variantDrawer("right", true, event, data);
                                                            }
                                                        }else{
                                                            console.log("No variant")
                                                        }
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
                    ) : (
                        ""
                    )}

                    {list ? (
                        <div className="row">
                            {shop.products.Bedroom.map((data, index) => (
                                <div className="col-12 col-md-6 col-lg-4 p-1" key={index}>
                                    <div className="row border">
                                        <div className="col-4 p-0 bg-lightblue">
                                            <div className="card  cursor ">
                                                {data.discount != "" ? (
                                                    <div className="text-center disc_ecom">
                                                        <p>
                                                            <b className="text-white">{data.discount}% Off </b>
                                                        </p>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}

                                                <div className="p-1 center bg-lightblue" onClick={() => {
                                                    SetQuick({ open: true, data: data });
                                                }}>
                                                    <img
                                                        src={data.img_path}
                                                        className="ecom-list-img"
                                                    />
                                                </div>
                                            </div>




                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="row align-items-center p-0">
                                                <div className="col-11 p-0">
                                                    <p className="oneline fw-bold text-dark">{data.name}</p>
                                                    <p className="oneline py-1">{data.sub}</p>
                                                </div>
                                                <div className="col-1 p-0 text-end cursor" onClick={() => {
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
                                                                size={24}
                                                                color="rgb(255, 0, 48)"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="wishlist-heart">
                                                            <Ionicons
                                                                name="heart-outline"
                                                                size={24}
                                                                color="gray"
                                                            />
                                                        </div>
                                                    )}</div>
                                            </div>
                                            <div className="row p-0 pt-1 align-center">
                                                <div className="col-10 p-0 d-flex align-items-center">
                                                    <p className="text-dark pr-1 pb-0">₹{data.offer_price}</p>
                                                    <p className="v-small text-gray text-end pb-0">
                                                        <s>₹{data.original_price}</s>
                                                    </p>
                                                </div>
                                                <div className="col-2 p-0 text-end">
                                                    <div className="d-flex align-items-center">
                                                        <small className="mb-0 text-orange me-1">3.5</small>
                                                        <Ionicons name="md-star" size={9} color="orange" />
                                                    </div>
                                                    <small className="ps-1 mb-0 text-gray">(785)</small>
                                                </div>
                                            </div>
                                            <div className="pt-2 text-center">
                                                {data.addbtn ? (
                                                    <div>
                                                        <div className=" shadow center p-2">

                                                            <div
                                                                className="cursor pr-1 w-25 center"
                                                                onClick={() => {
                                                                    // minus(index);
                                                                }}
                                                            >
                                                                <Entypo name="minus" size={18} color="#000" />
                                                            </div>
                                                            <div className="w-50 center">
                                                                <p className="smooth">
                                                                    <b>{data.addcount}</b>
                                                                </p>
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

                                                    <div className="shadow bg-fff"
                                                        onClick={(event) => {
                                                            if (data.variant.length>0) {
                                                                if (width < 720) {
                                                                    variantDrawer("bottom", true, event, data)
                                                                } else {
                                                                    variantDrawer("right", true, event, data);
                                                                }
                                                            }else{
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
                                    </div>
                                </div>
                            ))}

                            {shop.products.Study.map((data, index) => (
                                <div className="col-12 col-md-6 col-lg-4 p-1" key={index}>
                                    <div className="row border">
                                        <div className="col-4 p-0 bg-lightblue">
                                            <div className="card  cursor ">
                                                {data.discount != "" ? (
                                                    <div className="text-center disc_ecom">
                                                        <p>
                                                            <b className="text-white">{data.discount}% Off </b>
                                                        </p>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}

                                                <div className="p-1 center bg-lightblue" onClick={() => {
                                                    SetQuick({ open: true, data: data });
                                                }}>
                                                    <img
                                                        src={data.img_path}
                                                        className="ecom-list-img"
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-8 p-2">
                                            <div className="row align-items-center p-0">
                                                <div className="col-11 p-0">
                                                    <p className="oneline fw-bold text-dark">{data.name}</p>
                                                    <p className="oneline py-1">{data.sub}</p>
                                                </div>
                                                <div className="col-1 p-0 text-end cursor" onClick={() => {
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
                                                                size={24}
                                                                color="rgb(255, 0, 48)"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="wishlist-heart">
                                                            <Ionicons
                                                                name="heart-outline"
                                                                size={24}
                                                                color="gray"
                                                            />
                                                        </div>
                                                    )}</div>
                                            </div>
                                            <div className="row p-0 pt-1 align-center">
                                                <div className="col-10 p-0 d-flex align-items-center">
                                                    <p className="text-dark pr-1 pb-0">₹{data.offer_price}</p>
                                                    <p className="v-small text-gray text-end pb-0">
                                                        <s>₹{data.original_price}</s>
                                                    </p>
                                                </div>
                                                <div className="col-2 p-0 text-end">
                                                    <div className="d-flex align-items-center">
                                                        <small className="mb-0 text-orange me-1">3.5</small>
                                                        <Ionicons name="md-star" size={9} color="orange" />
                                                    </div>
                                                    <small className="ps-1 mb-0 text-gray">(785)</small>
                                                </div>
                                            </div>
                                            <div className="pt-2 text-center">
                                                {data.addbtn ? (
                                                    <div>
                                                        <div className=" shadow center p-2">

                                                            <div
                                                                className="cursor pr-1 w-25 center"
                                                                onClick={() => {
                                                                    // minus(index);
                                                                }}
                                                            >
                                                                <Entypo name="minus" size={18} color="#000" />
                                                            </div>
                                                            <div className="w-50 center">

                                                                <p className="smooth">
                                                                    <b>{data.addcount}</b>
                                                                </p>
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

                                                    <div className="shadow bg-fff"
                                                        onClick={(event) => {
                                                            if (data.variant.length>0) {
                                                                if (width < 720) {
                                                                    variantDrawer("bottom", true, event, data)
                                                                } else {
                                                                    variantDrawer("right", true, event, data);
                                                                }
                                                            }else{
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                </div>

            </div >

            <Dialog open={another_location.open} onClose={() => { SetAnotherLocation({ open: false, value: "" }); }} classes={{ container: classes.root, paper: classes.paper }}>
                <div className="bg-fff">
                    <div className="row px-2 py-3 align-items-center shadow-bottom sticky-top">
                        <div className="col-11">
                            <p className="text-dark fw-bold mb-0 fs-7">Do you want to change our another shop location?</p>
                        </div>
                        <div className="col-1 text-end">
                            <div className="cursor p-0" onClick={() => { SetAnotherLocation({ open: false, value: "" }) }}>
                                <Ionicons name="close" size={20} color="#333" />
                            </div>
                        </div>

                    </div>
                    <div className="p-3 mb-5 overflowY">
                        <div className={active_location.open ? "active-ecomshop-border p-2 radius " : "p-2"} onClick={() => {
                            SetActiveLocation({ open: true, value: "" });
                        }}>
                            <p className={active_location.open ? "active-ecomshop-name mb-1" : "text-black mb-1"}>Zomato, Chennai 1</p>

                            <div className="">
                                <p>10, Adaiyar road, Chennai - 638001</p>
                            </div>
                        </div>

                        <div className="p-2">
                            <p className="text-black mb-1">Zomato, Chennai 1</p>

                            <div className="">
                                <p>10, Adaiyar road, Chennai - 638001</p>
                            </div>
                        </div>

                        <div className="p-2">
                            <p className="text-black mb-1">Zomato, Chennai 1</p>

                            <div className="">
                                <p>10, Adaiyar road, Chennai - 638001</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-fix w-100 row bg-fff py-3" >

                        <div className="col-6">
                            <button className="btn-outline-prime1 fw-bold btn w-100" onClick={(event) => {
                                SetAnotherLocation({ open: false, value: "" });
                            }}
                            >Cancel</button>
                        </div>
                        <div className="col-6">
                            <button className="bg-prime1 text-white fw-bold btn w-100" onClick={() => {
                                SetAnotherLocation({ open: false, value: "" });
                            }}>Change</button>
                        </div>
                    </div>
                </div>
            </Dialog>

            {
                width < 540 ? (
                    <SwipeableBottomSheet overflowHeight={0} style={{ zIndex: 1300 }} open={shop_details.open} onClose={() => { SetShopDetails({ open: false, value: "" }); }}
                        onChange={() => {
                            SetShopDetails({ open: false, value: "" })
                        }} >
                        <div className="bg-fff radius-top" style={{ minHeight: "500px", maxHeight: "auto" }}>


                            <div className="center drawer-fixed">
                                <hr className="hr-drawer" />
                            </div>

                            <div className="p-2 pt-5 overflowY">
                                <div className="today" >
                                    <AliceCarousel
                                        mouseTracking
                                        touchMoveDefaultEvents={false}
                                        // items={productsRestraunt}
                                        // paddingLeft={50}
                                        paddingRight={70}
                                        // disableDotsControls
                                        responsive={shopresponsive}
                                        disableButtonsControls
                                        controlsStrategy="alternate"
                                    >
                                        {/* {restaurant_img.map((data, index) => (
                                        <div
                                            className="mr-1 radius"
                                            style={{ backgroundColor: data.background }}
                                            key={index}
                                            onDragStart={handleDragStart}
                                        >
                                            <div className="">
                                                <img src={data.img_path} className="resta_imgs radius" />
                                            </div>

                                        </div>
                                    ))} */}
                                    </AliceCarousel>
                                </div>
                                <h6 className="mt-2">New Cake Shop</h6>
                                <p className="pt-2">
                                    <ReadMore>
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                        demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                        Lorem ipsum may be used as a placeholder before final copy is available.
                                    </ReadMore>
                                </p>

                                <div className="row align-items-center pt-3">
                                    <div className="col-4 mb-2 ps-0">
                                        <p><b>Cusine</b></p>

                                    </div>
                                    <div className="col-8 text-end mb-2 pe-0">
                                        <p>South Indian, North Indian, Chinnese</p>
                                    </div>
                                    <div className="col-4 mb-2 ps-0">
                                        <p><b>Price Range</b></p>

                                    </div>
                                    <div className="col-8 text-end mb-2 pe-0">
                                        <p>₹50 - ₹150</p>
                                    </div>
                                    <div className="col-4 mb-2 ps-0">
                                        <p><b>Reviews</b></p>

                                    </div>
                                    <div className="col-8 text-end mb-2 pe-0">
                                        <p>21 Reviews</p>
                                    </div>
                                </div>

                                <div className="row align-items-center pt-4 px-0">
                                    <div className="d-flex align-items-center mb-4 px-0">
                                        <h6 className="mb-0">Ratings & Reviwes</h6>
                                        <div className="ms-auto cursor">
                                            <p className="fw-bold fs-7 text-prime1">Rate Now</p>
                                        </div>
                                    </div>
                                    <div className="p-0 col-3 text-center non-flex-center">
                                        <h4 className="mb-0">3.5</h4>
                                        <p>
                                            432 Ratings & <br />
                                            77 Reviews
                                        </p>
                                    </div>
                                    <div className="col-9 p-0 ms-auto ">
                                        {ratingShow.map((data) => (
                                            <div className="center">
                                                {data.star == "5" ? (
                                                    <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;	&#9733;</p>
                                                ) : (
                                                    data.star == "4" ? (
                                                        <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;</p>
                                                    ) : (
                                                        data.star == "3" ? (
                                                            <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; </p>

                                                        ) : (
                                                            data.star == "2" ? (
                                                                <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; </p>

                                                            ) : (
                                                                <p className="col-3 pe-1 end p-0 d-flex">	&#9733; </p>

                                                            )
                                                        )
                                                    )
                                                )}
                                                <div className="col-6">
                                                    <ProgressBar now={data.rating} variant={data.variant} />
                                                </div>
                                                <small className="col-3 ps-2 text-left p-0">{data.value}</small>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className="mt-4 pb-2">
                                    {review.map((reviewdata, index) => (
                                        <div className="my-2 border-bottom py-2">
                                            <div key={index} className="flex box ">
                                                <div>
                                                    <p className="rating_star">{reviewdata.value}★</p>
                                                </div>
                                                <div className="pl-1">
                                                    <p className="fs-7 text-dark fw-bold mb-1">{reviewdata.review}</p>
                                                </div>
                                            </div>
                                            <div >
                                                <ReadMore>
                                                    {/* <p>{reviewdata.reviewText}</p> */}
                                                    GeeksforGeeks: A Computer Science portal for geeks.
                                                    It contains well written, well thought and well explained
                                                    computer science, programming articles and quizzes.
                                                    It provides a variety of services for you to learn, so thrive
                                                    and also have fun! Free Tutorials, Millions of Articles, Live,
                                                    oneline and Classroom Courses ,Frequent Coding Competitions,
                                                    Webinars by Industry Experts, Internship opportunities, and Job
                                                    Opportunities. Knowledge is power!
                                                </ReadMore>
                                                <div className="row pt-2">
                                                    {reviewdata.file.map((data, i) => (
                                                        <div className="col-2 px-1">
                                                            <img
                                                                src={data}
                                                                className="preview"
                                                                key={i}
                                                                onClick={() => {
                                                                    openImageViewer(i);
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                    {viewer_open && (
                                                        <ImageViewer
                                                            src={reviewdata.file}
                                                            currentIndex={current_image}
                                                            backgroundStyle={{
                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                            }}
                                                            closeOnClickOutside={true}
                                                            onClose={closeImageViewer}
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="row align-center pt-2">
                                                <div className="col-md-4 col-6 pl-0">
                                                    <p className="pl-1 oneline text-black mb-0">{reviewdata.customer}</p>
                                                </div>
                                                <div className="col-md-4 col-6 end ">
                                                    <div
                                                        className="cursor"
                                                        onClick={() => {
                                                            likeclick(index);
                                                        }}
                                                    >
                                                        <Entypo
                                                            name="thumbs-up"
                                                            size={16}
                                                            color={reviewdata.like ? "darkblue" : "gray"}
                                                        />
                                                    </div>
                                                    <p className="pl-1 mb-0">{reviewdata.likeCount}</p>
                                                    <div className="d-flex align-items-center w-auto pl-2">
                                                        <div
                                                            className="cursor"
                                                            onClick={() => {
                                                                dislikeclick(index);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="thumbs-down"
                                                                size={16}
                                                                color={reviewdata.dislike ? "brown" : "gray"}
                                                            />
                                                        </div>
                                                        <p className="pl-1 mb-0">{reviewdata.dislikeCount}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex alifn-items-center col-12 pt-1 pr-0 pl-1">
                                                    <MaterialIcons
                                                        name="check-circle"
                                                        size={13}
                                                        color="gray"
                                                    />
                                                    <p className="mb-0 p-1 py-0">{reviewdata.buyer}, {reviewdata.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>



                            <div className="text-center pt-2 pb-3">
                                <div className="">
                                    <h6>Follow Us</h6>
                                </div>
                                <div className="center mt-3">
                                    <div className="me-3 cursor">
                                        <img src={require("../../../assets/icon/fb.png")} className="free-shipping-icon " />
                                    </div>
                                    <div className="cursor">
                                        <img src={require("../../../assets/icon/insta.png")} className="free-shipping-icon " />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="bottom-fix w-100 row bg-fff py-3" >

                            <div className="col-6">
                                <button className="btn-outline-green fw-bold btn w-100" onClick={(event) => {
                                    SetShopDetails({ open: false, value: "" });
                                }}
                                >Cancel</button>
                            </div>
                            <div className="col-6">
                                <button className="bg-green text-white fw-bold btn w-100" onClick={() => {
                                    SetShopDetails({ open: false, value: "" });
                                }}>Change</button>
                            </div>
                        </div> */}
                        </div>
                    </SwipeableBottomSheet>
                ) : (
                    <Dialog open={shop_details.open} onClose={() => { SetShopDetails({ open: false, value: "" }); }} classes={{ container: classes.root, paper: classes.paper }}>
                        <div className="bg-fff radius-top">
                            <div className="row px-2 py-3 align-items-center shadow sticky-top">
                                <div className="col-11">
                                    <h6 className="mb-0">New Cake Shop</h6>
                                </div>
                                <div className="col-1 text-end">
                                    <div className="cursor p-0" onClick={() => { SetShopDetails({ open: false, value: "" }) }}>
                                        <Ionicons name="close" size={20} color="#333" />
                                    </div>
                                </div>

                            </div>
                            <div className="p-2 overflowY">
                                <div className="today" >
                                    <AliceCarousel
                                        mouseTracking
                                        touchMoveDefaultEvents={false}
                                        // items={productsRestraunt}
                                        // paddingLeft={50}
                                        paddingRight={70}
                                        // disableDotsControls
                                        responsive={shopresponsive}
                                        disableButtonsControls
                                        controlsStrategy="alternate"
                                    >
                                        {/* {restaurant_img.map((data, index) => (
                                        <div
                                            className="mr-1 radius"
                                            style={{ backgroundColor: data.background }}
                                            key={index}
                                            onDragStart={handleDragStart}
                                        >
                                            <div className="">
                                                <img src={data.img_path} className="resta_imgs radius" />
                                            </div>

                                        </div>
                                    ))} */}
                                    </AliceCarousel>
                                </div>
                                <h6 className="mt-2">New Cake Shop</h6>
                                <p className="pt-2">
                                    <ReadMore>
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                        demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                        Lorem ipsum may be used as a placeholder before final copy is available.
                                    </ReadMore>
                                </p>

                                <div className="row align-items-center pt-3">
                                    <div className="col-4 mb-2 ps-0">
                                        <p><b>Cusine</b></p>

                                    </div>
                                    <div className="col-8 text-end mb-2 pe-0">
                                        <p>South Indian, North Indian, Chinnese</p>
                                    </div>
                                    <div className="col-4 mb-2 ps-0">
                                        <p><b>Price Range</b></p>

                                    </div>
                                    <div className="col-8 text-end mb-2 pe-0">
                                        <p>₹50 - ₹150</p>
                                    </div>
                                    <div className="col-4 mb-2 ps-0">
                                        <p><b>Reviews</b></p>

                                    </div>
                                    <div className="col-8 text-end mb-2 pe-0">
                                        <p>21 Reviews</p>
                                    </div>
                                </div>

                                <div className="row align-items-center pt-4 px-0">
                                    <div className="d-flex align-items-center mb-4 px-0">
                                        <h6 className="mb-0">Ratings & Reviwes</h6>
                                        <div className="ms-auto cursor">
                                            <p className="fw-bold fs-7 text-prime1">Rate Now</p>
                                        </div>
                                    </div>
                                    <div className="p-0 col-3 text-center non-flex-center">
                                        <h4 className="mb-0">3.5 ★</h4>
                                        <p>
                                            432 Ratings & <br />
                                            77 Reviews
                                        </p>
                                    </div>
                                    <div className="col-9 p-0 ms-auto ">
                                        {ratingShow.map((data) => (
                                            <div className="center">
                                                {data.star == "5" ? (
                                                    <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;	&#9733;</p>
                                                ) : (
                                                    data.star == "4" ? (
                                                        <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;</p>
                                                    ) : (
                                                        data.star == "3" ? (
                                                            <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; </p>

                                                        ) : (
                                                            data.star == "2" ? (
                                                                <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; </p>

                                                            ) : (
                                                                <p className="col-3 pe-1 end p-0 d-flex">	&#9733; </p>

                                                            )
                                                        )
                                                    )
                                                )}
                                                <div className="col-6">
                                                    <ProgressBar now={data.rating} variant={data.variant} />
                                                </div>
                                                <small className="col-3 ps-2 text-left p-0">{data.value}</small>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className="mt-4 pb-2">
                                    {review.slice(0, 2).map((reviewdata, index) => (
                                        <div className="my-2 border-bottom py-2">
                                            <div key={index} className="flex box ">
                                                <div>
                                                    <p className="rating_star">{reviewdata.value}★</p>
                                                </div>
                                                <div className="pl-1">
                                                    <p className="fs-7 text-dark fw-bold mb-1">{reviewdata.review}</p>
                                                </div>
                                            </div>
                                            <div >
                                                <ReadMore>
                                                    {/* <p>{reviewdata.reviewText}</p> */}
                                                    GeeksforGeeks: A Computer Science portal for geeks.
                                                    It contains well written, well thought and well explained
                                                    computer science, programming articles and quizzes.
                                                    It provides a variety of services for you to learn, so thrive
                                                    and also have fun! Free Tutorials, Millions of Articles, Live,
                                                    oneline and Classroom Courses ,Frequent Coding Competitions,
                                                    Webinars by Industry Experts, Internship opportunities, and Job
                                                    Opportunities. Knowledge is power!
                                                </ReadMore>
                                                <div className="row pt-2">
                                                    {reviewdata.file.map((data, i) => (
                                                        <div className="col-2 px-1">
                                                            <img
                                                                src={data}
                                                                className="preview"
                                                                key={i}
                                                                onClick={() => {
                                                                    openImageViewer(i);
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                    {viewer_open && (
                                                        <ImageViewer
                                                            src={reviewdata.file}
                                                            currentIndex={current_image}
                                                            backgroundStyle={{
                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                            }}
                                                            closeOnClickOutside={true}
                                                            onClose={closeImageViewer}
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="row align-center pt-2">
                                                <div className="col-md-4 col-6 pl-0">
                                                    <p className="pl-1 oneline text-black mb-0">{reviewdata.customer}</p>
                                                </div>
                                                <div className="col-md-4 col-6 end ">
                                                    <div
                                                        className="cursor"
                                                        onClick={() => {
                                                            likeclick(index);
                                                        }}
                                                    >
                                                        <Entypo
                                                            name="thumbs-up"
                                                            size={16}
                                                            color={reviewdata.like ? "darkblue" : "gray"}
                                                        />
                                                    </div>
                                                    <p className="pl-1 mb-0">{reviewdata.likeCount}</p>
                                                    <div className="d-flex align-items-center w-auto pl-2">
                                                        <div
                                                            className="cursor"
                                                            onClick={() => {
                                                                dislikeclick(index);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="thumbs-down"
                                                                size={16}
                                                                color={reviewdata.dislike ? "brown" : "gray"}
                                                            />
                                                        </div>
                                                        <p className="pl-1 mb-0">{reviewdata.dislikeCount}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex alifn-items-center col-12 pt-1 pr-0 pl-1">
                                                    <MaterialIcons
                                                        name="check-circle"
                                                        size={13}
                                                        color="gray"
                                                    />
                                                    <p className="mb-0 p-1 py-0">{reviewdata.buyer}, {reviewdata.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>



                            <div className="text-center pt-2 pb-3">
                                <div className="">
                                    <h6>Follow Us</h6>
                                </div>
                                <div className="center mt-3">
                                    <div className="me-3 cursor">
                                        <img src={require("../../../assets/icon/fb.png")} className="free-shipping-icon " />
                                    </div>
                                    <div className="cursor">
                                        <img src={require("../../../assets/icon/insta.png")} className="free-shipping-icon " />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Dialog>
                )
            }

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


            {
                width < 540 ? (
                    <SwipeableBottomSheet overflowHeight={0} style={{ zIndex: 1300 }} open={shop_menu.open} onClose={() => { SetShopMenu({ open: false, value: "" }); }}
                        onChange={() => {
                            SetShopMenu({ open: false, value: "" })
                        }} >
                        <div className="bg-fff radius-top" style={{ minHeight: "500px", maxHeight: "auto" }}>
                            <div className="center drawer-fixed">
                                <hr className="hr-drawer" />
                            </div>

                            <div className="p-2 pt-5 overflowY">
                                <h6>Furniture mart products</h6>
                                <p className="mb-2">Menu for our products</p>
                                <p className="fs-7 text-black mb-2">View our menu items to shop easy and convionent</p>

                                <div className="px-2">
                                    <div className="row align-items-center border-bottom py-2" onClick={() => {
                                        SetMenuOpen(!menu_open);
                                    }}>
                                        <div className="col-11 ps-0">
                                            <p className="darkgray fs-7">Menu 1</p>
                                        </div>
                                        <div className="col-1 p-0">
                                            <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
                                        </div>
                                    </div>

                                    {menu_open == true ? (
                                        <div className="">
                                            <div className="py-2 ps-3 row align-items-center border-bottom" onClick={() => { SetSubMenu(!sub_menu) }}>
                                                <div className="col-11 ps-0">
                                                    <p className="fs-7 text-darkgray">Sub-Menu 1</p>
                                                </div>
                                                <div className="col-1 p-0">
                                                    <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
                                                </div>
                                            </div>
                                            {sub_menu == true ? (
                                                <div className="">
                                                    <div className="py-2 ps-5 row align-items-center border-bottom" >
                                                        <div className="col-11 ps-0">
                                                            <p className="fs-7 text-darkgray">Sub-Menu Data</p>
                                                        </div>
                                                        <div className="col-1 p-0">
                                                            {/* <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" /> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            ) : (null)}
                                        </div>
                                    ) : (null)}

                                </div>
                            </div>

                        </div>
                    </SwipeableBottomSheet>

                ) : (
                    <Dialog open={shop_menu.open} onClose={() => { SetShopMenu({ open: false, value: "" }); }} classes={{ container: classes.root, paper: classes.paper }}>
                        <div className="bg-fff radius-top">
                            <div className="d-flex p-3 align-items-center shadow ">
                                <h6 className="mb-0">Menu</h6>
                                <div className="ms-auto">
                                    <div className="cursor p-0" onClick={() => { SetShopMenu({ open: false, value: "" }) }}>
                                        <Ionicons name="close" size={20} color="#333" />
                                    </div>
                                </div>

                            </div>
                            <div className="p-3 pb-4 overflowY">
                                <h6>Furniture mart products</h6>
                                <p className="mb-2">Menu for our products</p>
                                <p className="fs-7 text-black mb-2">View our menu items to shop easy and convionent</p>




                                <div>
                                    <div className="row align-items-center border-bottom py-2" onClick={() => {
                                        SetMenuOpen(!menu_open);
                                    }}>
                                        <div className="col-11 ps-0">
                                            <p className="darkgray fs-7">Menu 1</p>
                                        </div>
                                        <div className="col-1 p-0">
                                            <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
                                        </div>
                                    </div>

                                    {menu_open == true ? (
                                        <div className="">
                                            <div className="py-2 ps-3 row align-items-center border-bottom" onClick={() => { SetSubMenu(!sub_menu) }}>
                                                <div className="col-11 ps-0">
                                                    <p className="fs-7 text-darkgray">Sub-Menu 1</p>
                                                </div>
                                                <div className="col-1 p-0">
                                                    <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
                                                </div>
                                            </div>
                                            {sub_menu == true ? (
                                                <div className="">
                                                    <div className="py-2 ps-5 row align-items-center border-bottom" >
                                                        <div className="col-11 ps-0">
                                                            <p className="fs-7 text-darkgray">Sub-Menu Data</p>
                                                        </div>
                                                        <div className="col-1 p-0">
                                                            {/* <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" /> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            ) : (null)}
                                        </div>
                                    ) : (null)}

                                </div>
                            </div>
                        </div>
                    </Dialog>
                )
            }


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
                                <Variants value={variant_data} />
                            </div>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div >
    );
}
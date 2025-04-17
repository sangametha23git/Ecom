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
import { Dialog, Drawer, makeStyles, Modal } from "@material-ui/core";
import GroceryVariants from "../GroceryVariants/GroceryVariants";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    200: { items: 1 },
    300: { items: 1 },
    350: { items: 1 },
    548: { items: 2 },
    720: { items: 3 },
    1024: { items: 3 },
};

const productresponsive = {
    0: { items: 1 },
    200: { items: 1 },
    300: { items: 2 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 4 },
    1024: { items: 6 },
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

export default function GroceryDashboard(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [index, SetIndex] = useState(0);
    const [open, SetOpen] = useState(false);
    const [top_brands, SetTopBrands] = useState([
        {
            id: 1,
            src: require("../../../assets/img/brands/aashirvaad.png"),
            name: "Aashirvaad",
            starting: 203,
        },
        {
            id: 8,
            src: require("../../../assets/img/brands/bournvitta.png"),
            name: "Bournvitta",
            starting: 150,
        },
        {
            id: 2,
            src: require("../../../assets/img/brands/amul.png"),
            name: "Amul",
            starting: 265,
        },
        {
            id: 3,
            src: require("../../../assets/img/brands/britannia.png"),
            name: "Britannia",
            starting: 120,
        },

        {
            id: 4,
            src: require("../../../assets/img/brands/Nestle.png"),
            name: "Nestle",
            starting: 248,
        }, {
            id: 8,
            src: require("../../../assets/img/brands/rin.png"),
            name: "Rin",
            starting: 150,
        },
        {
            id: 7,
            src: require("../../../assets/img/brands/dove.png"),
            name: "Dove",
            starting: 150,
        },
        {
            id: 5,
            src: require("../../../assets/img/brands/sakthi.png"),
            name: "Sakthi",
            starting: 200,
        },


        {
            id: 6,
            src: require("../../../assets/img/brands/maggi.png"),
            name: "Maggi",
            starting: 150,
        },
    ]);
    const [category, SetCategory] = useState([
        {
            id: 1,
            src: require("../../../assets/img/category/cat4.png"),
            name: "Fruits & Vegitable",
        },
        {
            id: 2,
            src: require("../../../assets/img/category/cat2.png"),
            name: "Grocery & Stable",
        },
        {
            id: 3,
            src: require("../../../assets/img/category/cat3.png"),
            name: "Bekary & Biscuits",
        },
        {
            id: 4,
            src: require("../../../assets/img/category/cat1.png"),
            name: "Juices & Snacks",
        },
        {
            id: 5,
            src: require("../../../assets/img/category/cat5.png"),
            name: "Tea,Coffee & Helath drinks",
        },

        {
            id: 6,
            src: require("../../../assets/img/category/cat7.png"),
            name: "Dairy & Breakfast",
        },
        {
            id: 7,
            src: require("../../../assets/img/category/cat6.png"),
            name: "Household Items",
        },

        {
            id: 8,
            src: require("../../../assets/img/category/cat8.png"),
            name: "Masala Products",
        },

        {
            id: 9,
            src: require("../../../assets/img/category/cat9.png"),
            name: "Personal Cares",
        },
        {
            id: 10,
            src: require("../../../assets/img/category/cat10.png"),
            name: "Icecream & Chocolates",
        },
    ]);
    const [products, SetProducts] = useState([
        {
            fruitVeg: [
                {
                    id: 1,
                    img_path: require("../../../assets/img/products/veg1.png"),
                    name: "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands",
                    offer: 23,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "250g",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 1",
                },
                {
                    id: 2,
                    img_path: require("../../../assets/img/products/veg2.png"),
                    name: "Fresh Berries Premium Brands",
                    offer: 20,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "500g",
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
                    seller: "Seller 2",
                },
                {
                    id: 3,
                    img_path: require("../../../assets/img/products/veg3.webp"),
                    name: "Fresh Berries Premium Brands",
                    offer: 12,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "1kg",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 3",
                },
                {
                    id: 1,
                    img_path: require("../../../assets/img/products/veg4.png"),
                    name: "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands",
                    offer: 16,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "2kg",
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
                    seller: "Seller 4",
                },
                {
                    id: 2,
                    img_path: require("../../../assets/img/products/veg4.webp"),
                    name: "Fresh Berries Premium Brands",
                    offer: 18,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "3kg",
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
                    id: 3,
                    img_path: require("../../../assets/img/products/veg5.png"),
                    name: "Fresh Berries Premium Brands",
                    offer: 13,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "5kg",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 6",
                },
                {
                    id: 3,
                    img_path: require("../../../assets/img/products/veg6.png"),
                    name: "Fresh Berries Premium Brands",
                    offer: 13,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "5kg",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 6",
                },
            ],
            groce: [
                {
                    id: 1,
                    img_path: require("../../../assets/img/products/groce1.jpg"),
                    name: "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands",
                    offer: 23,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "250g",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 1",
                },
                {
                    id: 2,
                    img_path: require("../../../assets/img/products/groce2.png"),
                    name: "Fresh Berries Premium Brands",
                    offer: 20,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "500g",
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
                    seller: "Seller 2",
                },
                {
                    id: 3,
                    img_path: require("../../../assets/img/products/groce3.png"),
                    name: "Fresh Berries Premium Brands",
                    offer: 12,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "1kg",
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
                    id: 1,
                    img_path: require("../../../assets/img/products/groce4.png"),
                    name: "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands",
                    offer: 16,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "2kg",
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
                    seller: "Seller 4",
                },
                {
                    id: 2,
                    img_path: require("../../../assets/img/products/groce5.jpg"),
                    name: "Fresh Berries Premium Brands",
                    offer: 18,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "3kg",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 5",
                },
                {
                    id: 3,
                    img_path: require("../../../assets/img/products/groce5.png"),
                    name: "Fresh Berries Premium Brands",
                    offer: 13,
                    price: 200,
                    original_price: 250,
                    discount_price: 50,
                    qty: "5kg",
                    addcount: 0,
                    addbtn: false,
                    variant: [],
                    seller: "Seller 6",
                },
            ],
        },
    ]);
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
    const [offer_banner, SetOfferBanner] = useState([
        {
            img: require("../../../assets/img/banner/grocery.png"),
        },
        { img: require("../../../assets/img/banner/grocery1.png") },
        { img: require("../../../assets/img/banner/grocery4.png") },
        { img: require("../../../assets/img/banner/grocery2.png") },
        { img: require("../../../assets/img/banner/grocery3.png") },
        { img: require("../../../assets/img/banner/grocery5.png") },

    ]);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [add_variant, SetAddVariant] = useState(false);
    const [quick, SetQuick] = useState({
        open: false,
        data: ""
    });
    const [variant_data, SetVariantData] = useState({});
    const [is_loading, SetIsLoading] = useState(true);

    useEffect(() => {
        console.log("GroceryDashboard On mount :", props);
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

    return (
        <div className="page-main mb-5 px-sm-0 px-md-2">
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
                    <Link to="/grocery/grocery_search">
                        <div className="row align-items-center">
                            <div className="input-icons form-group w-100">
                                <input
                                    type="text"
                                    className="form-control search-bar p-0"
                                    placeholder="Fresh products for you"
                                />
                                <div className="cursor ps-2 border-left center">
                                    <Ionicons name="md-search" size={18} color="#e60000" />
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            <div className="bg-fff mt-2">


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
                    {offer_banner.map((banner, index) => (
                        <div
                            onDragStart={handleDragStart}
                            className="p-2"
                            key={index}
                        >
                            {is_loading ? (
                                <Skeleton height={100} width="100%" />
                            ) : (
                                <img src={banner.img} className="freeBanner cursor" />
                            )}
                        </div>
                    ))}

                </AliceCarousel>
            </div>

            <div className="mt-2 bg-fff p-2">
                {is_loading ? (
                    <div>
                        <Skeleton height={10} width={100} />
                        <Skeleton height={8} width={150} />
                    </div>
                ) : (
                    <div>
                        <h5 className="mb-0 pb-0 pl-1">Shop by category</h5>
                        <p className="pl-1">Your favourite items for you</p>
                    </div>
                )}
                <div className="row pt-3">
                    {category.slice(0, 8).map((cat, index) => (
                        <div
                            className="col-4 col-md-3 col-lg-2 pt-3 p-1 cursor"
                            key={index}
                        >
                            {is_loading ? (
                                <div>
                                    <Skeleton height={80} width="100%" />
                                    <div className="pt-1 text-center">
                                        <Skeleton height={8} width={100} />
                                    </div>
                                </div>
                            ) : (
                                <Link to="/grocery/grocery_main_category">
                                    <img src={cat.src} className="category" />
                                    <div className="pt-1 cat">
                                        <p className="text-center">{cat.name}</p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                    <div
                        className="col-4 col-md-3 col-lg-2 pt-3 p-1 cursor "
                    >
                        <div className="pt-1 cat text-center ">
                            {is_loading ? (
                                <div>
                                    <Skeleton height={80} width="100%" />
                                    <div className="pt-1 text-center">
                                        <Skeleton height={8} width={100} />
                                    </div>
                                </div>
                            ) : (
                                <Link to="/grocery/grocery_category">
                                    <div className="category center">
                                        <img
                                            src={require("../../../assets/icon/more.png")}
                                            className="seemore"
                                        />
                                    </div>
                                    <p className="text-center text-green">See more</p>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-2 bg-fff p-2">
                {is_loading ? (
                    <div>
                        <Skeleton height={10} width={100} />
                        <Skeleton height={8} width={150} />
                    </div>
                ) : (
                    <div>
                        <h5 className="mb-0 pb-0 ps-1 pt-1">Top Brands</h5>
                        <p className="pl-1">Premium brand products for you</p>
                    </div>
                )}
                <div className="row pt-3 ">
                    {top_brands.map((top, brandIndex) => (
                        <div className="col-4 col-md-3 col-lg-2 pt-3 p-1" key={brandIndex}>
                            {is_loading ? (
                                <div className="text-center">
                                    <Skeleton height={80} width={80} circle={true} />
                                    <div className="p-2">
                                        <Skeleton height={8} width={80} />
                                    </div>
                                </div>
                            ) : (
                                <Link to="/grocery/grocery_products">
                                    <div className="text-center cursor">
                                        <div className="round-div m-auto p-0">
                                            <img src={top.src} className="round-brand" />
                                        </div>
                                        <div className="p-0 center w-100 pt-1">
                                            {/* <div className="shadow w-50"> */}
                                            <p className="p-2"><b className="text-dark">{top.name}</b></p>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {products.map((prod, prodIndex) => (
                <div key={prodIndex}>
                    <div className="mt-2 bg-fff p-2">
                        {is_loading ? (
                            <div className="row pt-1">
                                <div className="col-8 p-0">
                                    <Skeleton height={10} width={100} />
                                    <Skeleton height={8} width={150} />
                                </div>
                                <div className="col-4 pt-3 text-right">
                                    <Skeleton height={8} width={50} />
                                </div>
                            </div>
                        ) : (
                            <div className="row pt-1">
                                <div className="col-8 p-0">
                                    <h5 className="mb-0 pb-0 pl-1">Fruits & Vegetables</h5>
                                    <p className="pl-1">Fresh groceries near you</p>
                                </div>
                                <div className="col-4 pt-3 text-right">
                                    <div className="flex justify-end cursor">
                                        <p>
                                            <b className="text-dark">SEE ALL </b>
                                        </p>
                                        <img
                                            src={require("../../../assets/icon/next1.png")}
                                            className="next-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <AliceCarousel
                            mouseTracking
                            touchMoveDefaultEvents={false}
                            // items={productsRestraunt}
                            // paddingLeft={50}
                            paddingRight={20}
                            disableDotsControls
                            responsive={productresponsive}
                            disableButtonsControls
                            controlsStrategy="alternate"
                        >
                            {prod.fruitVeg.map((data, index) => (
                                <div
                                    onDragStart={handleDragStart}
                                    className="p-2 mt-3 prods"
                                    key={index}
                                >
                                    {is_loading ? (
                                        <div>
                                            <Skeleton height={150} width="100%" />
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
                                        <div>
                                            <div className="card border pt-2 pb-2 cursor bg-gray-500">
                                                <div className="text-center disc">
                                                    <p>
                                                        <b className="text-white">{data.offer}% Off</b>
                                                    </p>
                                                </div>
                                                <div className="star-rating">
                                                    <div className="center">
                                                        <p className="mb-0 text-orange me-1 extra-small">3.5</p>
                                                        <Ionicons name="md-star" size={8} color="orange" />
                                                    </div>
                                                </div>
                                                <div className="px-1" onClick={() => {
                                                    SetQuick((prevValue: any) => {
                                                        prevValue.open = true;
                                                        prevValue.data = data;
                                                        console.log("quick data :", data)
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
                                                                    // minus(prodIndex, index);
                                                                }}
                                                            >
                                                                <Entypo name="minus" size={18} color="#e60000" />
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
                                                                    // add(prodIndex, index);
                                                                }}
                                                            >
                                                                <Entypo name="plus" size={18} color="#e60000" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div
                                                            className={
                                                                data.img_path !== "" ? "Grocebottom-offer" : ""
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
                                                        <p className="mb-0">{data.qty}</p>
                                                    </div>
                                                    <div className="col-7 p-0 text-end">
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="pr-1 mb-0">₹{data.price}</h6>
                                                            <p className="pr-1 mb-0 v-small">
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
                        </AliceCarousel>
                    </div>

                    <div className="mt-2 bg-fff p-2">
                        {is_loading ? (
                            <div className="row pt-1">
                                <div className="col-8 p-0">
                                    <Skeleton height={10} width={100} />
                                    <Skeleton height={8} width={150} />
                                </div>
                                <div className="col-4 pt-3 text-right">
                                    <Skeleton height={8} width={50} />
                                </div>
                            </div>
                        ) : (
                            <div className="row pt-1">
                                <div className="col-8 p-0">
                                    <h5 className="mb-0 pb-0 pl-1">Grocery & Staples</h5>
                                    <p className="pl-1">Best products for you</p>
                                </div>
                                <div className="col-4 pt-3 text-right ">
                                    <div className="flex justify-end cursor">
                                        <p>
                                            <b className="text-dark">SEE ALL </b>
                                        </p>
                                        <img
                                            src={require("../../../assets/icon/next1.png")}
                                            className="next-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <AliceCarousel
                            mouseTracking
                            touchMoveDefaultEvents={false}
                            // items={productsRestraunt}
                            // paddingLeft={50}
                            paddingRight={20}
                            disableDotsControls
                            responsive={productresponsive}
                            disableButtonsControls
                            controlsStrategy="alternate"
                        >
                            {prod.groce.map((data, index) => (
                                <div
                                    onDragStart={handleDragStart}
                                    className="p-2 mt-3  prods"
                                    key={index}
                                >
                                    {is_loading ? (
                                        <div>
                                            <Skeleton height={150} width="100%" />
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
                                        <div>
                                            <div className="card border pt-2 pb-2 cursor bg-gray-500">
                                                <div className="text-center disc">
                                                    <p>
                                                        <b className="text-white">{data.offer}% Off</b>
                                                    </p>
                                                </div>
                                                <div className="star-rating">
                                                    <div className="center">
                                                        <p className="mb-0 text-orange me-1 extra-small">3.5</p>
                                                        <Ionicons name="md-star" size={8} color="orange" />
                                                    </div>
                                                </div>
                                                <div className="px-1" onClick={() => {
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
                                                                <Entypo name="minus" size={18} color="#e60000" />
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
                                                                    // grocadd(prodIndex, index);
                                                                }}
                                                            >
                                                                <Entypo name="plus" size={18} color="#e60000" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div
                                                            className={
                                                                data.img_path !== "" ? "Grocebottom-offer" : ""
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
                                                        <p className="mb-0">{data.qty}</p>
                                                    </div>
                                                    <div className="col-7 p-0 text-end">
                                                        <div className="d-flex pt-1 align-items-center">
                                                            <h6 className="pr-1 mb-0">₹{data.price}</h6>
                                                            <p className="pr-1 mb-0 v-small">
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
                        </AliceCarousel>
                    </div>
                </div>
            ))}

            <div className="mt-2 bg-fff p-2">
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
                    {offer_banner.map((banner, index) => (
                        <div onDragStart={handleDragStart} className="p-2" key={index}>
                            {is_loading ? (
                                <Skeleton height={100} width="100%" />
                            ) : (
                                <img src={banner.img} className="freeBanner" />
                            )}
                        </div>
                    ))}
                </AliceCarousel>
            </div>

            {/* <div className="bg-gray-500 card radius">
                            <div className="row">
                                <div className="col-8 p-3 center">
                                   <div>
                                   <h6 className="text-red">Super Grocery Sale</h6>
                                    <p className="text-black">Falsh sales start now</p>
                                    <p><small>Shop now & more details visit our super grocery shop</small></p>
                                    <div className="mt-2">
                                        <button className="btn btn-danger btn-sm">Shop Now</button>
                                    </div>
                                   </div>
                                </div>
                                <div className="col-4 p-0 text-end pt-3 pe-3">
                                <img src={require("../../../assets/img/groce_del.png")} className="w-100" />
                                </div>
                            </div>
                        </div> */}



            <div className="mt-2 bg-fff p-2">
                {is_loading ? (
                    <div className="">
                        <Skeleton height={10} width={100} />
                        <Skeleton height={8} width={150} />
                    </div>
                ) : (
                    <div>
                        <h5 className="mb-0 pb-0 pl-1">Near by Shops</h5>
                        <p className="pl-1">Available grocery to best price</p>
                    </div>
                )}
                <div className="pt-2 row">
                    {near_shop.map((data, index) => (

                        <div className="col-12 col-md-6 col-lg-4 cursor ecom-list__item" key={index}>
                            {is_loading ? (
                                <div className="row pt-3 ecom-list_card">
                                    <div className="col-5 p-0">
                                        <Skeleton height={100} width="100%" />
                                    </div>
                                    <div className="col-7 pr-0">
                                        <Skeleton height={10} width={100} />
                                        <Skeleton height={8} width={150} count={2} />
                                    </div>
                                </div>
                            ) : (
                                <Link to={"/grocery/grocery_shop_dashboard"} >
                                    <div className="row pt-3 ecom-list_card" onClick={
                                        () => {
                                            SaveContext(data);
                                        }
                                    }>
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
                                                            <div className="disc">
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
                            )
                            }

                        </div >
                    ))}
                </div >
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
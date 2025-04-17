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
} from "@expo/vector-icons";
import { Drawer, Modal, SwipeableDrawer, Dialog, DialogContent } from "@material-ui/core";
import Variants from "../Variants/Variants";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "../../Common/Filter/Filter";
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
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? " ...read more" : " ...show less"}
            </span>
        </p>
    );
};

export default function EcommerceSubCategory(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
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
                    ],
                    variants: [
                        {
                            variants_link: [
                                {
                                    url: require("../../../assets/img/shirt1.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt2.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt3.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt4.jpg"),
                                    name: "Formal shirts"
                                },
                            ]
                        }
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
                    variants: [
                        {
                            variants_link: [
                                {
                                    url: require("../../../assets/img/shirt1.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt2.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt3.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt4.jpg"),
                                    name: "Formal shirts"
                                },
                            ]
                        }
                    ]
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
                    variants: [
                        {
                            variants_link: [
                                {
                                    url: require("../../../assets/img/shirt1.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt2.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt3.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt4.jpg"),
                                    name: "Formal shirts"
                                },
                            ]
                        }
                    ]
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
                    variants: [
                        {
                            variants_link: [
                                {
                                    url: require("../../../assets/img/shirt1.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt2.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt3.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt4.jpg"),
                                    name: "Formal shirts"
                                },
                            ]
                        }
                    ]
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
                    variants: [
                        {
                            variants_link: [
                                {
                                    url: require("../../../assets/img/shirt1.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt2.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt3.jpg"),
                                    name: "Formal shirts"
                                },
                                {
                                    url: require("../../../assets/img/shirt4.jpg"),
                                    name: "Formal shirts"
                                },
                            ]
                        }
                    ]
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
    const [other_sellers, SetOtherSellers] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/designSandal.png"),
            name: "Ladies Designed Dress Shoes",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#9a414f" }],

        },
        {
            id: 2,
            img_path: require("../../../assets/img/partyWear.png"),
            name: "Men's Velvet loafer",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#0f1219" }],

        },
        {
            id: 3,
            img_path: require("../../../assets/img/crystalSandal.png"),
            name: "Ladies Open Toe",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#1f1412" }],

        },
        {
            id: 4,
            img_path: require("../../../assets/img/sandal.webp"),
            name: "Laddies Open Toe Footwear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#f76de1" }],

        },
        {
            id: 5,
            img_path: require("../../../assets/img/menSandal.png"),
            name: "Casual Men's Sandal",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#41414d" }],

        },
        {
            id: 6,
            img_path: require("../../../assets/img/sandal.png"),
            name: "Casual Men's Wear",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#4a4542" }],

        },
        {
            id: 7,
            img_path: require("../../../assets/img/shoe.png"),
            name: "Classic Shoe for all Genders",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#f2f2f2" }],

        },
        {
            id: 8,
            img_path: require("../../../assets/img/leather.png"),
            name: "Men's Leather Shoes",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#ab7247" }],

        },

        {
            id: 9,
            img_path: require("../../../assets/img/leatherShoe.jpg"),
            name: "Men's Casual Leather Shoes",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#132332" }],

        },

        {
            id: 10,
            img_path: require("../../../assets/img/footwear.png"),
            name: "Men's Chappals",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            // qty: "250g"
            variant: [{ value: "first", size: "S", color: "#412f2d" }],

        },
    ]);
    const [category_data, SetCategoryData] = useState([
        {
            id: 1,
            src: require("../../../assets/img/sandal.png"),
            name: "Chappal Shoes",
        },
        {
            id: 2,
            src: require("../../../assets/img/footwear.png"),
            name: "Men's Sandal",
        },
        {
            id: 3,
            src: require("../../../assets/img/designSandal.png"),
            name: "Girl's Sandal",
        },
        {
            id: 4,
            src: require("../../../assets/img/crystalSandal.png"),
            name: "Open Toe",
        },
        {
            id: 5,
            src: require("../../../assets/img/partyWear.png"),
            name: "Velvet loafer",
        },
        {
            id: 6,
            src: require("../../../assets/img/leather.png"),
            name: "Leather Shoes",
        },
        {
            id: 7,
            src: require("../../../assets/img/shoe1.png"),
            name: "Lace Shoes",
        },
        {
            id: 8,
            src: require("../../../assets/img/menSandal.png"),
            name: "Formal Sandal",
        },
        {
            id: 9,
            src: require("../../../assets/img/shoe.png"),
            name: "Casual Shoes",
        },
    ]);
    const [top_brands, SetTopBrands] = useState([
        {
            id: 1,
            src: require("../../../assets/img/brands/adidas2.png"),
            name: "Adidas",
            starting: 203,
        },
        {
            id: 2,
            src: require("../../../assets/img/brands/nike.png"),
            name: "Nike",
            starting: 265,
        },
        {
            id: 3,
            src: require("../../../assets/img/brands/bata.png"),
            name: "Bata",
            starting: 120,
        },
        {
            id: 4,
            src: require("../../../assets/img/brands/vkc.png"),
            name: "vKC",
            starting: 248,
        },
        {
            id: 5,
            src: require("../../../assets/img/brands/walkaroo.png"),
            name: "Walkaroo",
            starting: 200,
        },
        {
            id: 6,
            src: require("../../../assets/img/brands/paragon.png"),
            name: "Paragon",
            starting: 150,
        },
    ]);
    const [variant, SetVariant] = useState(false);
    const [quick, SetQuick] = useState({ open: false, data: "" });
    const [variant_data, SetVariantData] = useState({});
    const [filter_modal, SetFilterModal] = useState(false);
    const [is_loading, SetIsLoading] = useState(true);

    useEffect(() => {
        console.log("EcommerceSubCategory On mount :", props);
        window.scrollTo(0, 0);
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

    return (
        <div className="page-main">

            <div className="bg-fff">
                <div className="p-3">
                    {is_loading ? (
                        <Skeleton height={12} width={100} />
                    ) : (
                        <h5 className="">Categories</h5>
                    )}
                </div>

                <div className="row align-center pb-3">

                    {category_data.map((data, categoryIndex) => (
                        <div
                            onDragStart={handleDragStart}
                            key={categoryIndex}
                            className="col-4 col-md-3 col-lg-2 p-2"
                        >
                            {is_loading ? (
                                <div className="text-center ">
                                    <Skeleton height={80} width="100%" />
                                    <div className="mt-2">
                                        <Skeleton height={8} width={60} />
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center w-100">
                                    <Link to="/ecommerce/ecommerce_product">
                                        <div className="main-category-css p-1">
                                            <img
                                                src={data.src}
                                                className="ecomcate"
                                            //   src={require(data.src)}
                                            />
                                        </div>
                                        <p className="pt-2" >{data.name}</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            <div className="bg-fff mt-2 p-2">
                {is_loading ? (
                    <Skeleton height={10} width={100} />
                ) : (
                    <h5 className="">Top Brands</h5>
                )}

                <div className="row p-2 mb-2 ">
                    {top_brands.map((data, index) => (
                        <div className="col-3 col-md-2 p-2" key={index} onDragStart={handleDragStart}>
                            {is_loading ? (
                                <div className="text-center">
                                    <Skeleton height={80} width="100%" />
                                    <div className="pt-2">
                                        <Skeleton height={8} width={60} />
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
                                    </div>
                                </Link>
                            )}

                        </div>
                    ))}
                </div>
            </div>

            <div className="products mt-2 bg-fff mb-5">
                <div className="row pt-2">
                    <div className="col-md-3 col-lg-2  md-d-block sm-d-none p-0 border-right sticky-110px">
                        {is_loading ? (
                            <div>
                                <Skeleton height={18} width={100} style={{ marginBottom: 30 }} />
                                <Skeleton height={12} width={100} style={{ marginBottom: 20 }} />
                                <Skeleton height={12} width={150} style={{ marginBottom: 20 }} />
                                <Skeleton height={12} width={180} style={{ marginBottom: 20 }} />
                                <Skeleton height={12} width={150} style={{ marginBottom: 20 }} />
                            </div>
                        ) : (
                            <Filter />
                        )}
                    </div>
                    <div className="col-md-9 col-lg-10 px-sm-0 px-md-2 ">
                        <div className="d-flex align-items-center">
                            {is_loading ? (
                                <Skeleton height={10} width={100} />
                            ) : (
                                <h5 className="mb-0 p-0 p-3">Deals on Products</h5>
                            )}
                            <div className="ms-auto d-flex align-items-center">
                                {is_loading ? (
                                    <Skeleton height={10} width={50} />
                                ) : (
                                    <div className="flex align-center cursor pr-2 d-sm-block d-md-none" onClick={() => {
                                        SetFilterModal(true);
                                    }}>
                                        <Ionicons name="filter" size={20} color="gray" />
                                        <h6 className="pl-1 mb-0">Filter</h6>
                                    </div>
                                )}

                                <div className="px-2 cursor">
                                    {is_loading ? (
                                        <Skeleton height={10} width={30} />
                                    ) : (
                                        <Link to="/ecommerce/ecommerce_search">
                                            <Ionicons
                                                name="search"
                                                size={18}
                                                color="gray"
                                            />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
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
                                            <div className="card bg-lightblue pt-2 pb-0 ">
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
                                                            console.log("variant data: ", data);
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
                        </div>
                    </div>
                </div>

                {/* {Products.map((product_data, index) => (
              <div className="col-md-4 col-lg-3 col-6 bg-white p-0" key={index}>
                <div className="border">

                  <div className="bg-white_card pb-3 pt-2">
                  {width <720 ? (
                    <Link to="/productdetailmobile">
                    <img
                      src={product_data.img_path}
                      className="card-img mb-1"
                    />
                  </Link>
                 ): (
                  <Link to="/productdetails">
                  <img
                    src={product_data.img_path}
                    className="card-img mb-1"
                  />
                </Link>
                 )}

                    <div className="row pl-1 pr-1">
                      <div className="col-10 p-0">
                        <p className="marg">{product_data.name}</p>
                      </div>
                      <div className="col-2 pl-0">
                        <div
                          className="cursor text-right mt-2"
                          onClick={() => {
                            console.log("Fav Products");
                            let product_show_data = Products;
                            product_show_data[index].fav_heart =
                              !product_show_data[index].fav_heart;
                            setState((preState) => ({
                              ...preState,
                              Products: product_show_data,
                            }));
                            console.log(
                              "Fav Products :",
                              product_show_data[index].fav_heart
                            );
                          }}
                        >
                          {product_data.fav_heart ? (
                            <Ionicons
                              name="ios-heart"
                              size={24}
                              color="rgb(255, 0, 48)"
                            />
                          ) : (
                            <Ionicons
                              name="heart-outline"
                              size={24}
                              color="gray"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pl-1 pr-1">
                      <div className="flex mt-1">
                        <h6>₹{product_data.offer_price}</h6>
                        <p className="pl-1">
                          <s>₹{product_data.original_price}</s>
                        </p>
                      </div>
                      <p className="save mt-1">
                        You have saves ₹{product_data.discount}
                      </p>
                    </div>
                    <div className="row add center">
                      <div className="col-6 p-0">
                        {product_data.hasOwnProperty("variant") ? (
                          product_data.variant.map((data, index) => (
                            <div key={index} className="w-100 cursor">
                              {data.value == "first" ? (
                                <div
                                  className="flex variant-box"
                                  onClick={bottomDrawer}
                                >
                                  <div className="w-100 flex center">
                                    <div
                                      className="variants_clr"
                                      style={{
                                        backgroundColor: data.color,
                                      }}
                                    // style={{backgroundColor: value.color}}
                                    ></div>

                                    <p className="">
                                      <b>-{data.size}</b>
                                    </p>
                                  </div>
                                  <MaterialIcons
                                    name="keyboard-arrow-down"
                                    size={15}
                                    color="black"
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          ))
                        ) : (
                          <div
                            className="variant-box cursor text-center flex mt-0"
                            onClick={
                              width < 720
                                ? toggleDrawer("bottom", true)
                                : toggleDrawer("right", true)
                            }
                          >
                            <p className="w-100">{product_data.qty}</p>
                            <MaterialIcons
                              name="keyboard-arrow-down"
                              size={15}
                              color="black"
                            />
                          </div>
                        )}
                      </div>
                      <div className="col-6 p-0">
                        <div className="text-center">
                          {product_data.addbtn ? (
                             <div className="flex variant-box center">
                             <div
                               className="cursor pr-1"
                               onClick={() => {
                                 minus(index);
                               }}
                             >
                               <AntDesign
                                 name="minus"
                                 size={18}
                                 color="#000"
                               />
                             </div>
                             <div className="">
                               <p className="w-100">
                                 <b>{product_data.addcount}</b>
                               </p>
                             </div>
                             <div
                               className="cursor pl-1 "
                               onClick={() => {
                                 add(index);
                               }}
                             >
                               <AntDesign
                                 name="plus"
                                 size={14}
                                 color="#000"
                               />
                             </div>
                           </div>
                          ) : (
                            <div
                              className="variant-box cursor text-center "
                              onClick={() => {
                                addcart(index);
                              }}
                            >
                              <p className="w-100">Add</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
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

            <Dialog
                open={quick.open}
                onEntered={console.log("Hey.")}
                classes={{ container: classes.root, paper: classes.paper }}
                onClose={() => {
                    SetQuick((prevValue: any) => {
                        prevValue.open = false;
                        return { ...prevValue }
                    });
                }}
            >
                <div className="row ">
                    <div className="sticky_drawer bg-fff">
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

                            <p className="text-dark fw-bolder my-1">Description</p>
                            <ReadMore>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text
                            </ReadMore>
                            <div className="mt-2">
                                <p className="fw-bolder text-dark pb-1 mb-0">In Stock</p>
                                <div className="d-flex align-items-center p-0">
                                    <p className="prod-name-mob fw-bolder text-gray mb-0">Seller</p>
                                    <p className="px-1 delivery_time mb-0 fw-bolder">Super Sellers</p>
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
                </div>

            </Dialog>


            <Modal
                open={filter_modal}
                // onEntered={console.log("filter_modal.")}
                // classes={{ container: classes.root, paper: classes.paper }}
                onClose={() => { SetFilterModal(false) }}
            >
                <div className="row">
                    <div className="sticky_drawer bg-fff border-bottom">
                        <div className=" d-flex p-2 align-items-center">
                            <h6 className="mb-0">Filter</h6>
                            <div className="ms-auto cursor" onClick={() => {
                                SetFilterModal(false);
                            }}>
                                <Ionicons name="close" size={19} color="gray" />
                            </div>
                        </div>
                    </div>
                    <Filter />
                </div>

            </Modal>

            {/* </div> */}
        </div>
    );
}
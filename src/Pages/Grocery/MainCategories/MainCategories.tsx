import React, { Component, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
    MaterialIcons,
    Ionicons,
    Entypo,
    AntDesign,
    FontAwesome5,
} from "@expo/vector-icons";
import { Dialog, Drawer, makeStyles } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import GroceryVariants from "../GroceryVariants/GroceryVariants";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

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

export default function GroceryMainCategory(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [category, SetCategory] = useState({
        fruits: [
            {
                img_path: require("../../../assets/img/category/fruit1.png"),
                name: "Citrus fruits",
            },
            {
                img_path: require("../../../assets/img/category/fruit2.png"),
                name: "Seeded fruits",
            },
            {
                img_path: require("../../../assets/img/category/fruit3.png"),
                name: "Grapes & Berries",
            },
        ],
        veg: [
            {
                img_path: require("../../../assets/img/category/veg1.png"),
                name: "Green vegetables",
            },
            {
                img_path: require("../../../assets/img/category/veg2.png"),
                name: "Seeded Vegetables",
            },
            {
                img_path: require("../../../assets/img/category/veg3.png"),
                name: "Grounded vegetables ",
            },
        ],
    });
    const [fruits, SetFruits] = useState([
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
            addbtn: true,
            variant: [],
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
            img_path: require("../../../assets/img/products/sub3.png"),
            name: "Apple",
            offer: "",
            price: 200,
            original_price: 250,
            discount_price: 50,
            qty: "250g",
            addcount: 0,
            addbtn: true,
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
            img_path: require("../../../assets/img/products/sub4.png"),
            name: "Sapota",
            offer: 12,
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
            variant: [],
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
            variant: [],
            seller: "Seller 8",
        },
    ]);
    const [veg, SetVeg] = useState([
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
            name: "Apple",
            offer: 15,
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
    ]);
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
    const [size, SetSize] = useState(false);
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
    const [variant_data, SetVariantData] = useState({});
    const [is_loading, SetIsLoading] = useState(true);


    useEffect(() => {
        console.log("GroceryCategory On mount :", props);
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
        <div className="page-main mb-5 px-sm-0 px-md-2 ">
            {is_loading ? (
                <div className="bg-fff py-2 ">
                    <div className="ps-2">
                        <Skeleton height={10} width={100} />
                        <Skeleton height={8} width={150} />
                    </div>

                    <div className="row pt-2">
                        {category.fruits.map((data, index) => (
                            <div className="col-4 col-md-3 col-lg-2" key={index}>
                                <Skeleton height={100} width="100%" />
                                <div className="text-center">
                                    <Skeleton height={8} width={100} />
                                </div>
                            </div>
                        ))}
                        {category.veg.map((data, index) => (
                            <div className="col-4 col-md-3 col-lg-2" key={index}>
                                <Skeleton height={100} width="100%" />
                                <div className="text-center">
                                    <Skeleton height={8} width={100} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="bg-red-500 pb-2">
                    <h5 className="pt-2 pl-2 mb-1">Categories</h5>
                    <p className="pl-2">What you like to buy today</p>

                    <div className="row pt-2">
                        {category.fruits.map((data, index) => (
                            <div className="col-4 col-md-3 col-lg-2" key={index}>
                                <Link to="/grocery/grocery_subcategory">
                                    <img src={data.img_path} className="catimg" />
                                    <p className="text-center marg">
                                        <b className="text-dark">{data.name}</b>
                                    </p>
                                </Link>
                            </div>
                        ))}
                        {category.veg.map((data, index) => (
                            <div className="col-4 col-md-3 col-lg-2" key={index}>
                                <Link to="/grocery/grocery_subcategory">
                                    <img src={data.img_path} className="catimg" />
                                    <p className="text-center marg">
                                        <b className="text-dark">{data.name}</b>
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-2 bg-fff p-2">
                {is_loading ? (
                    <div>
                        <Skeleton height={10} width={100} />
                        <Skeleton height={8} width={150} />
                    </div>
                ) : (
                    <div>
                        <h5 className="py-2 ps-2">Recommended Products</h5>
                        <p className="ps-2">Fresh products and items</p>
                    </div>
                )}


                < div className="row pt-3">
                    {/* <div className="row align-center">
                <div className="col-8 p-0">
                </div>
                <div className="col-4 text-right ">
                  <div className="flex justify-end cursor">
                    <p>
                      <b className="text-dark">SEE ALL </b>
                    </p>
                    <img
                      src={require("../../../assets/icon/next.png")}
                      className="next-img"
                    />
                  </div>
                </div>
              </div> */}

                    {fruits.map((data, index) => (
                        <div
                            // onDragStart={handleDragStart}
                            className="p-1 pt-0 prods mt-1 col-6 col-md-3 col-lg-2"
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
                                        {data.offer != "" ? (
                                            <div className="text-center disc">
                                                <p>
                                                    <b className="text-white">{data.offer}% Off</b>
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
                                                        console.log("data :", data)
                                                        if (data.variant.length > 0) {
                                                            if (width < 720) {
                                                                variantDrawer("bottom", true, event, data)
                                                            } else {
                                                                variantDrawer("right", true, event, data);
                                                            }
                                                        } else {
                                                            console.log("No variants")
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
                                        <p className="oneline mt-1">{data.name}</p>
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

                    {veg.map((data, index) => (
                        <div
                            // onDragStart={handleDragStart}
                            className="p-1 pt-0 prods mt-1 col-6 col-md-3 col-lg-2"
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
                                    {data.offer != "" ? (
                                        <div className="text-center disc">
                                            <p>
                                                <b className="text-white">{data.offer}% Off</b>
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
                                    <p className="oneline mt-1">{data.name}</p>
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
                </div>
            </div>

            {/* <SwipeableBottomSheet
                // overflowHeight={64}
                // fullScreen
                marginTop={130}
                open={bottomDrawerOpen}
                onChange={() => {
                    setState({
                        bottomDrawerOpen: false,
                    });
                    // bottomDrawer();
                    // bottomDrawer.bind(this)
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
                                            SetSize(true);
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
                                    onClick={toggleBottomSheet.bind(this)}
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
            </SwipeableBottomSheet> */}

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
        </div >
    );
}
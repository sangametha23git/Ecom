import React, { useState, useEffect, useContext, useRef, createRef } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();
import {
    FontAwesome,
    Entypo,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    AntDesign,
    FontAwesome5,
} from "@expo/vector-icons";
import Switch from "react-switch";
import { Menu, MenuItem, SwipeableDrawer, Accordion, AccordionDetails, AccordionSummary, Dialog, makeStyles, Drawer } from "@material-ui/core";
import Headroom from "react-headroom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { api } from "../../../utils/Api";
import SwipeableBottomSheet from '@geomatico/react-swipeable-bottom-sheet';
import { ProgressBar } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ReviewModal from "../../Common/Review/ReviewModal";


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

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
};

const discountresponsive = {
    0: { items: 1 },
    300: { items: 1 },
    350: { items: 1 },
    548: { items: 1 },
    720: { items: 2 },
    912: { items: 2 },
    1024: { items: 4 },
};
const restaurantresponsive = {
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
        [theme.breakpoints.up("md")]: {
            overflow: "scroll",
            maxWidth: "50%",
            width: "100%",
        },
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

export default function RestaurantShop(props: any) {
    const context = useContext(DataContext);
    const [id_value, SetIdValue] = useState(useParams());
    const classes = useStyles();
    const [fav_heart, SetFavHeart] = useState(false);
    const [checked, SetCheked] = useState(true);
    const [anchor_menu, SetAnchorMenu] = React.useState(null);
    const [expanded, SetExpanded] = useState(false);
    const [view_cart, SetViewCart] = useState(false);
    const [selected_index, SetSelectedIndex] = useState(1);
    const ref = React.createRef(null);
    const [width, SetWidth] = React.useState(innerWidth);
    const [selected_items_list, SetSelectedItemsList] = useState([]);
    const [selected_items_id, SetSelectedItemsId] = useState([]);
    const [background_color, SetBackgroundColor] = randomHex();
    const [shop, Setshop] = useState({
        name: "Erode Restaurant",
        type: "South Indian, North Indian ",
        foodType: "Veg & Non Veg",
        location: "Erode",
        distance: "20Km",
        rating: 4.1,
        deliveryTime: "41 mins",
        discountOffer: [
            {
                img: require("../../../assets/logo/master.png"),
                title: "Get 20% OFF Upto ₹150",
                sub: "Use Mastrocard get 150",
                above: 400,
                background: "#fdeacc",
            },
            {
                img: require("../../../assets/icon/offer.png"),
                title: "Get 15% OFF Upto ₹50",
                sub: "Use Coupon Code get 50",
                above: 200,
                background: "#ffcfc3",
            },
            {
                img: require("../../../assets/logo/sbi.png"),
                title: "Get 20% OFF Upto ₹170",
                sub: "Use SBIcard get 170",
                above: 500,
                background: "#c4deff",
            },
        ],
        menu: [
            {
                item: "Recommended",
                count: 25,
                to: "home",
                foodList: [
                    {
                        img_path: require("../../../assets/img/dhosa.jpg"),
                        name: "Dosa",
                        description:
                            "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 30,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        snackopen: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food4.jpg"),
                        name: "Biryani",
                        description:
                            "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.",
                        type: "Nonveg",
                        price: 350,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addons: "",
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food5.jpg"),
                        name: "Chicken Gravy",
                        description:
                            "Chicken chettinad gravy recipe - One of the most popular dishes from the chettinad cuisine.",
                        type: "Nonveg",
                        price: 150,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food6.jpg"),
                        name: "Samosa (2 Pieces)",
                        description:
                            "A samosa is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions.",
                        type: "Veg",
                        price: 40,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/category/pizza.png"),
                        name: "Pizza",
                        description:
                            "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients.",
                        type: "Veg",
                        price: 140,
                        addcount: 0,
                        addbtn: false,
                        variants: [
                            {
                                item: "Small",
                                price: 250,
                                variant_specifications: [
                                    {
                                        name: "Small",
                                        price: 100
                                    },
                                ],
                                variants_link: true,
                                addon: [
                                    {
                                        name: "Toppings",
                                        items: [
                                            {
                                                name: "Onion",
                                                price: 50,
                                            },
                                            {
                                                name: "Cheese",
                                                price: 50,
                                            },
                                        ]
                                    },
                                    {
                                        name: "Soda",
                                        items: [
                                            {
                                                name: "Ginger Soda",
                                                price: 50,
                                            },
                                            {
                                                name: "Pepsi",
                                                price: 50,
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                item: "Medium",
                                price: 300,
                                variant_specifications: [
                                    {
                                        name: "Large",
                                        price: 100
                                    },
                                ],
                                variants_link: true,
                                addon: [
                                    {
                                        name: "Toppings",
                                        items: [
                                            {
                                                name: "Onion",
                                                price: 50,
                                            },
                                            {
                                                name: "Cheese",
                                                price: 50,
                                            },
                                        ]
                                    },
                                    {
                                        name: "Soda",
                                        items: [
                                            {
                                                name: "Ginger Soda",
                                                price: 50,
                                            },
                                            {
                                                name: "Pepsi",
                                                price: 50,
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],

                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/images.jpeg"),
                        name: "Masala Dosa",
                        description:
                            " Masala dosa is a variation of the popular South Indian Food, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 50,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                ],
            },
            {
                item: "Nonveg",
                count: 10,
                to: "nonveg",
                foodList: [
                    {
                        img_path: require("../../../assets/img/food4.jpg"),
                        name: "Biryani",
                        description:
                            "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.",
                        type: "Nonveg",
                        price: 350,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food5.jpg"),
                        name: "Chicken Gravy",
                        description:
                            "Chicken chettinad gravy recipe - One of the most popular dishes from the chettinad cuisine.",
                        type: "Nonveg",
                        price: 150,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                ],
            },
            {
                item: "Top Deals",
                count: 5,
                to: "topdeal",
                foodList: [
                    {
                        img_path: require("../../../assets/img/dhosa.jpg"),
                        name: "Dosa",
                        description:
                            "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 30,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        snackopen: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food4.jpg"),
                        name: "Biryani",
                        description:
                            "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.",
                        type: "Nonveg",
                        price: 350,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food5.jpg"),
                        name: "Chicken Gravy",
                        description:
                            "Chicken chettinad gravy recipe - One of the most popular dishes from the chettinad cuisine.",
                        type: "Nonveg",
                        price: 150,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food6.jpg"),
                        name: "Samosa (2 Pieces)",
                        description:
                            "A samosa is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions.",
                        type: "Veg",
                        price: 40,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/category/pizza.png"),
                        name: "Pizza",
                        description:
                            "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients.",
                        type: "Veg",
                        price: 140,
                        addcount: 0,
                        addbtn: false,
                        variants: [
                            {
                                item: "Small",
                                price: 250,
                                variant_specifications: [
                                    {
                                        name: "Small",
                                        price: 100
                                    },
                                ],
                                variants_link: true,
                                addon: [
                                    {
                                        name: "Toppings",
                                        items: [
                                            {
                                                name: "Onion",
                                                price: 50,
                                            },
                                            {
                                                name: "Cheese",
                                                price: 50,
                                            },
                                        ]
                                    },
                                    {
                                        name: "Soda",
                                        items: [
                                            {
                                                name: "Ginger Soda",
                                                price: 50,
                                            },
                                            {
                                                name: "Pepsi",
                                                price: 50,
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                item: "Medium",
                                price: 300,
                                variant_specifications: [
                                    {
                                        name: "Large",
                                        price: 100
                                    },
                                ],
                                variants_link: true,
                                addon: [
                                    {
                                        name: "Toppings",
                                        items: [
                                            {
                                                name: "Onion",
                                                price: 50,
                                            },
                                            {
                                                name: "Cheese",
                                                price: 50,
                                            },
                                        ]
                                    },
                                    {
                                        name: "Soda",
                                        items: [
                                            {
                                                name: "Ginger Soda",
                                                price: 50,
                                            },
                                            {
                                                name: "Pepsi",
                                                price: 50,
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],

                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/images.jpeg"),
                        name: "Masala Dosa",
                        description:
                            " Masala dosa is a variation of the popular South Indian Food, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 50,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                ],
            },
            {
                item: "Veg",
                count: 10,
                to: "veg",
                foodList: [
                    {
                        img_path: require("../../../assets/img/dhosa.jpg"),
                        name: "Dosa",
                        description:
                            "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 30,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        snackopen: false,
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/food6.jpg"),
                        name: "Samosa (2 Pieces)",
                        description:
                            "A samosa is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions.",
                        type: "Veg",
                        price: 40,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/category/pizza.png"),
                        name: "Pizza",
                        description:
                            "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients.",
                        type: "Veg",
                        price: 140,
                        addcount: 0,
                        addbtn: false,
                        variants: [
                            {
                                item: "Small",
                                price: 250,
                                variant_specifications: [
                                    {
                                        name: "Small",
                                        price: 100
                                    },
                                ],
                                variants_link: true,
                                addon: [
                                    {
                                        name: "Toppings",
                                        items: [
                                            {
                                                name: "Onion",
                                                price: 50,
                                            },
                                            {
                                                name: "Cheese",
                                                price: 50,
                                            },
                                        ]
                                    },
                                    {
                                        name: "Soda",
                                        items: [
                                            {
                                                name: "Ginger Soda",
                                                price: 50,
                                            },
                                            {
                                                name: "Pepsi",
                                                price: 50,
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                item: "Medium",
                                price: 300,
                                variant_specifications: [
                                    {
                                        name: "Large",
                                        price: 100
                                    },
                                ],
                                variants_link: true,
                                addon: [
                                    {
                                        name: "Toppings",
                                        items: [
                                            {
                                                name: "Onion",
                                                price: 50,
                                            },
                                            {
                                                name: "Cheese",
                                                price: 50,
                                            },
                                        ]
                                    },
                                    {
                                        name: "Soda",
                                        items: [
                                            {
                                                name: "Ginger Soda",
                                                price: 50,
                                            },
                                            {
                                                name: "Pepsi",
                                                price: 50,
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],

                        addCount: 0,
                    },
                    {
                        img_path: require("../../../assets/img/images.jpeg"),
                        name: "Masala Dosa",
                        description:
                            " Masala dosa is a variation of the popular South Indian Food, made from a fermented batter predominantly consisting of lentils and rice.",
                        type: "Veg",
                        price: 50,
                        addcount: 0,
                        addbtn: false,
                        variants: [],
                        addCount: 0,
                    },
                ],
            },
        ],
    });
    const [cart, SetCart] = useState([
        {
            img_path: require("../../../assets/img/dhosa.jpg"),
            name: "Dosa",
            description:
                "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
            type: "Veg",
            price: 30,
            addbtn: false,
            variants: false,
            snackopen: false,
            addbtn: true,
            addcount: 1,
        },
        {
            img_path: require("../../../assets/img/food4.jpg"),
            name: "Biryani",
            description:
                "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.",
            type: "Nonveg",
            price: 350,
            addbtn: false,
            variants: false,
            addons: "",
            addbtn: true,
            addcount: 1,
        },
        {
            img_path: require("../../../assets/img/dhosa.jpg"),
            name: "Dosa",
            description:
                "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
            type: "Veg",
            price: 30,
            addbtn: false,
            variants: false,
            snackopen: false,
            addbtn: true,
            addcount: 1,
        },
        {
            img_path: require("../../../assets/img/dhosa.jpg"),
            name: "Dosa",
            description:
                "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
            type: "Veg",
            price: 30,
            addbtn: false,
            variants: false,
            snackopen: false,
            addbtn: true,
            addcount: 1,
        },
    ]);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [same_variants, SetSameVariants] = useState({
        open: false,
        value: false
    });
    const [products, SetProducts] = useState([]);
    const [selected_products, SetSelectedProducts] = useState({});
    const [selected_product_index, SetSelectedProductIndex] = useState("");
    const [quick_view, SetQuickView] = useState({
        open: false,
        value: false
    });
    const [another_location, SetAnotherLocation] = useState({ open: false, value: "" });
    const [active_location, SetActiveLocation] = useState({ open: true, value: "" });
    const [shop_details, SetShopDetails] = useState({ open: false, value: "" });
    const [restaurant_img, SetRestaurantImg] = useState([
        {
            img_path: require("../../../assets/img/sub/1.jpeg"),
        },
        {
            img_path: require("../../../assets/img/sub/2.jpg"),
        },
        {
            img_path: require("../../../assets/img/sub/3.jpg"),
        },
        {
            img_path: require("../../../assets/img/sub/4.jpg"),
        },
        {
            img_path: require("../../../assets/img/sub/5.jpg"),
        },
    ]);
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
    const [page, SetPage] = useState(1);
    const [viewer_open, SetViewerOpen] = useState(false);
    const [user_open, SetUserOpen] = useState(false);
    const [current_image, SetCurrentImage] = useState(0);
    const [user_image, SetUserImage] = useState(0);
    const [shop_menu, SetShopMenu] = useState({ open: false, value: "" });
    const [menu_open, SetMenuOpen] = useState(false);
    const [sub_menu, SetSubMenu] = useState(false);
    const [is_loading, SetIsLoading] = useState(true);
    const [bottom_swipe, SetBottomSwipe] = useState({ open: false, value: "" });
    const [rate_product, SetRateProduct] = useState(false);

    useEffect(() => {
        console.log("RestaurantDashboard On mount :", props);
        console.log("RestaurantDashboard On context :", context);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        // get_products();
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });

        // window.addEventListener("scroll", () => {
        //     if (window.scrollY > 100) {
        //         setFixedMenu(true);
        //     }
        //     else {
        //         setFixedMenu(false);
        //     }
        // });

        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);

    async function get_products() {
        let pass_data = {
            get: {
                seller_slug: context.app_data.restaurant.slug,
                section_slug: context.app_data.sections.sections_slug,
            },
        };
        let data_res = await api("/section_products", pass_data);
        console.log("res section_products :", data_res);
        let product_data = data_res.response.products;
        product_data.map((ele: any, index: any) => {
            ele.addcount = 0;
            ele.addbtn = false;
        })
        SetProducts(product_data);
    }

    function menuOpen(event) {
        SetAnchorMenu(event.currentTarget)
    }

    function menuClose() {
        SetAnchorMenu(null);
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

    async function addCart() {
        console.log("res selected_products :", selected_products);

        let pass_data = {
            get: {
                // section_slug: "zomoto",
            },
            post: {
                seller_id: context.app_data.restaurant.id,
                section_slug: context.app_data.sections.sections_slug,
                product_id: selected_products.id,
                variant_id: selected_products.variants[0].id,
                quantity: "1",
                addons: [
                    // {
                    //     id: selected_products.variants[0].addon[0].id,
                    //     items: [
                    //         {
                    //             id: selected_products.variants[0].addon[0].items[0].id,
                    //             quantity: "1",
                    //             checked: true,
                    //         }
                    //     ]
                    // }
                ],
            },
        };
        console.log("res pass_data :", pass_data);
        let data_res = await api("/add_to_cart", pass_data);
        console.log("res add_to_cart :", data_res);

        SetSelectedItemsList([]);
        SetSelectedItemsId([]);
    }

    function check_available(check_array: any) {

        const containsAll = selected_items_id.every(element => {
            return check_array.includes(element);
        });
        return containsAll

    }

    const accordionChange = (panel) => (event, expanded) => {
        SetExpanded(expanded ? panel : false);
    };

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 180) : text}
                <span onClick={toggleReadMore} className="text-green fw-bold ps-1 read-or-hide">
                    {isReadMore ? " ...read more" : "  show less"}
                </span>
            </p>
        );
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

    function handleChange(event, value) {
        SetPage(value);
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

    function openImageUser(index) {
        console.log("image viewer");
        SetUserImage(index);
        SetUserOpen(true);
    };

    function closeImageUser() {
        SetUserImage(0);
        SetUserOpen(false);
    };

    // const itemRefs = shop.menu.reduce((acc, value) => {
    //     acc[value.id] = React.createRef();
    //     return acc;
    // }, {});
    // const menuClick = (index) => {
    //     itemRefs[index].current.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start',
    //     });
    // }

    return (
        <div className="page-main food-page mb-5">
            <div className="bg-fff">
                <div className="container px-sm-0 px-md-2 ">
                    {is_loading ? (
                        <div className="">
                            <Skeleton height={230} width="100%" />
                        </div>
                    ) : (
                        <div className="resta_shop_item  ">
                            <div className="shop-menu">
                                <div className="row align-items-center">
                                    <div className="text-left col-10 px-2">
                                        <div className="cursor " onClick={() => {
                                            SetShopMenu({ open: true, value: "" })
                                        }} >
                                            <img src={require("../../../assets/icon/menu.png")} className="shop-icon" />
                                        </div>
                                    </div>


                                    <div className="col-2 px-2 text-end">
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

                                    <div className="text-left col-11 px-2 d-flex align-items-end mt-4">

                                        <h5 className="text-white oneline pe-1">
                                            <b>{shop.name}</b>
                                        </h5>
                                        <Entypo name="dot-single" size={9} color="white" />
                                        <div className="d-flex align-items-center px-1">
                                            <p className="pe-1 text-white">4</p>
                                            <FontAwesome name="star" size={10} color="white" />
                                        </div>
                                    </div>


                                    <div className="col-1 px-2 text-end">


                                        <div className="px-2 cursor mt-4" onClick={() => {
                                            SetShopDetails({ open: true, value: "" })
                                        }}>
                                            <Entypo name="info-with-circle" size={20} color="white" />
                                        </div>
                                    </div>                            </div>
                            </div>


                            <img src={require("../../../assets/img/food8.jpg")} className="resta_shop_img" />
                            <div className="img_over_content_shop pb-3 p-1">

                                <div className="d-flex align-items-end pb-2">
                                    {/* {context.app_data.restaurant.location}  */}
                                    <div className="d-flex align-items-center cursor" onClick={() => {
                                        SetAnotherLocation({ open: true, value: "" })
                                    }}>
                                        <Ionicons name="location-sharp" size={16} color="white" />
                                        <p className="border-right px-1 text-white">
                                            <u>Erode</u>
                                        </p>
                                    </div>

                                    <p className="border-right px-1 text-white">
                                        {shop.distance}
                                    </p>
                                    <p className="px-1 text-white">
                                        15mins
                                    </p>
                                    <div className="ms-auto ps-2 pe-1">
                                        <div className="px-2 cursor " onClick={() => {
                                            SetRateProduct(true);
                                        }}>
                                            <img src={require("../../../assets/icon/star(3).png")} className="shop-icon" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-top pb-1 pt-2 w-100">
                                    {/* <div className="d-flex align-items-center px-1">
                                        <p className="pe-1 text-white">4</p>
                                        <FontAwesome name="star" size={10} color="white" />
                                    </div>
                                    <Entypo name="dot-single" size={9} color="white" /> */}
                                    <p className="text-white oneline px-1 fw-bold">
                                        <small className="text-white">{shop.type}</small>
                                    </p>

                                    {/* <Entypo name="dot-single" size={9} color="white" /> */}


                                    <div className="ms-auto px-2">

                                        <div className="px-2 cursor">
                                            <FontAwesome5 name="directions" size={20} color="#fff" />

                                        </div>

                                    </div>
                                </div>

                                <div className="px-2  pb-3">
                                    <Link to="/restaurant/restaurant_search">
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
                    )}

                    <div className=" pt-3 mb-2 sm-none md-block">
                        <div className="row pb-3">
                            <div className="col-md-4 col-12 border-right-md py-2 ">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        {is_loading ? (
                                            <Skeleton height={32} width={32} circle={true} />
                                        ) : (
                                            <img src={require("../../../assets/icon/map_location.png")} className="cs-shop_icon_img" />
                                        )}
                                    </div>
                                    <div className="col-10 ps-0">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={10} width={50} />
                                                <Skeleton height={8} width={100} count={2} />
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="fs-7 fw-bold text-black  mb-2">Address</p>
                                                <p >New Cake Shop, RKV road, Near manikundu, Erode-638007</p>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12 py-2 border-right-md">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        {is_loading ? (
                                            <Skeleton height={32} width={32} circle={true} />
                                        ) : (
                                            <img src={require("../../../assets/icon/contact.png")} className="cs-shop_icon_img" />
                                        )}
                                    </div>
                                    <div className="col-10 ps-0">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={10} width={50} />
                                                <Skeleton height={10} width={80} />
                                                <Skeleton height={8} width={100} />
                                            </div>
                                        ) : (
                                            <div>
                                                <p className=" fs-7 fw-bold text-black mb-2">Contact Us</p>
                                                <p><b className="text-dark pe-1">1478529633</b></p>
                                                <p className="mt-1">Opening time: All days (9Am - 10Pm)</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 col-12 py-2 ">
                                <div className="row align-items-center">
                                    <div className="col-2 p-0">
                                        {is_loading ? (
                                            <Skeleton height={32} width={32} circle={true} />
                                        ) : (
                                            <img src={require("../../../assets/icon/rating.png")} className="cs-shop_icon_img" />
                                        )}
                                    </div>
                                    <div className="col-10 ps-0">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={10} width={80} />
                                                <Skeleton height={15} width={30} />
                                                <Skeleton height={8} width={100} />
                                            </div>
                                        ) : (
                                            <div>
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
                                        )}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-top pb-3 bg-fff w-100 sm-shop-item" >
                <div className=" container px-sm-0 px-md-2" >
                    <div className="row">
                        <div className="col-md-2 sm-none text-right  ps-0">
                            <div className="sticky-md-110px py-2 ">
                                <section
                                    ref={ref}
                                // className={state.isSticky ? 'sticky-wrapper sticky' : 'sticky-wrapper'}
                                >
                                    <ul className="ps-0">
                                        {shop.menu.map((menu, menuIndex) => (
                                            <li key={menuIndex} className="pt-2 pb-3">
                                                {is_loading ? (
                                                    <div>
                                                        <Skeleton height={10} width={80} />
                                                    </div>

                                                ) : (
                                                    <div
                                                        activeclass="active"
                                                        // to={menu.to}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-120}
                                                        duration={500}
                                                        className="fs-7 text-dark"
                                                        onClick={() => {
                                                            // menuClick(menuIndex)
                                                        }}
                                                    >
                                                        {menu.item}
                                                    </div>
                                                )}

                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 px-sm-0 pb-5 border-left-md border-right-md">
                            {shop.menu.map((menu, menu_index) => (
                                <div className="shop_accrodion" key={menu_index} >
                                    <div className="p-2">
                                        <Accordion
                                            defaultExpanded
                                            className="border-bottom"
                                        >
                                            <AccordionSummary
                                                className="my-0 "
                                                expandIcon={is_loading ? "" : <ExpandMoreIcon />}
                                                aria-controls="panel1d-content"
                                            // id={menu.to}
                                            >
                                                {is_loading ? (
                                                    <Skeleton height={12} width={120} />
                                                ) : (
                                                    <h5 className="pb-2 pt-2 m-0 ">{menu.item}</h5>
                                                )}
                                            </AccordionSummary>
                                            {/* {products.map((product, pIndex) => ( */}

                                            {menu.foodList.map((data, index) => (
                                                <AccordionDetails key={index}
                                                // ref={itemRefs[data.id]}
                                                >
                                                    <div className="row align-center border-bottom pb-3 pt-3 w-100" key={index}>
                                                        <div className="col-8 p-0  cursor" onClick={() => {
                                                            SetQuickView({ open: true, value: data });
                                                        }}>
                                                            {is_loading ? (
                                                                <div className="pe-1">
                                                                    <div className="d-flex align-items-center w-100">
                                                                        <Skeleton height={14} width={14} />

                                                                        <div className="ps-2">
                                                                            <Skeleton width={40} height={8} />
                                                                        </div>
                                                                    </div>

                                                                    <Skeleton width="80%" />
                                                                    <Skeleton count={2} />
                                                                    <Skeleton height={10} width={40} />
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <div className="d-flex align-items-center w-100">

                                                                        {data.type == "Veg" ? (
                                                                            <img
                                                                                src={require("../../../assets/icon/veg.png")}
                                                                                className="type-img"
                                                                            />
                                                                        ) : (
                                                                            <img
                                                                                src={require("../../../assets/icon/nonveg.png")}
                                                                                className="type-img"
                                                                            />
                                                                        )}

                                                                        <div className="d-flex align-items-center ms-2 b_seller">
                                                                            <FontAwesome name="star" size={10} color="orange" />
                                                                            <p className="px-1">
                                                                                <small className="text-orange fw-bold">Best Seller</small>
                                                                            </p>
                                                                        </div>

                                                                    </div>

                                                                    <h6 className="pt-1 oneline">{data.name}</h6>
                                                                    <p className="marg">{data.description}</p>
                                                                    <p className="pt-2 ">
                                                                        <b className="text-dark fs-7">₹{data.price}</b>
                                                                    </p>
                                                                </div>
                                                            )}


                                                        </div>
                                                        <div className="col-4 p-0">
                                                            {is_loading ? (
                                                                <Skeleton height={100} width="100%" />
                                                            ) : (
                                                                <div>
                                                                    <div className="cursor" onClick={() => {
                                                                        SetQuickView({ open: true, value: data });
                                                                    }}>
                                                                        {data.img_path != "" ? (
                                                                            <img src={data.img_path} className="near-img" />
                                                                        ) : null}
                                                                    </div>


                                                                    {data.addbtn ? (
                                                                        <div
                                                                            className={data.img_path !== "" ? "bottom-offer" : ""}
                                                                        >
                                                                            <div className="flex offer center p-2">
                                                                                <div
                                                                                    className="cursor pr-1 w-25 center"
                                                                                    onClick={() => {
                                                                                        SetProducts((prevValue) => {
                                                                                            prevValue[selected_product_index].addcount = prevValue[selected_product_index].addcount - 1;
                                                                                            return [...prevValue];
                                                                                        });
                                                                                    }}
                                                                                >
                                                                                    <Entypo name="minus" size={18} color="#00ac0b" />
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
                                                                                        console.log("check variants1")
                                                                                        SetSameVariants({ open: true, value: same_variants.value });
                                                                                    }}
                                                                                >
                                                                                    <Entypo name="plus" size={18} color="#00ac0b" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            {data.variants != [] ? (
                                                                                <div
                                                                                    className={
                                                                                        data.img_path !== "" ? "bottom-offer" : ""
                                                                                    }
                                                                                    onClick={(event) => {
                                                                                        console.log("selected product before:", data);
                                                                                        if (width < 720) {
                                                                                            console.log("check variants2.1")
                                                                                            SetBottomSwipe({ open: true, value: event })
                                                                                            console.log("check variants2.1 open: ", bottom_swipe.open)
                                                                                        } else {
                                                                                            console.log("check variants2.2")
                                                                                            toggleDrawer("right", true, event);
                                                                                        }
                                                                                        SetSelectedProducts(data);
                                                                                        SetSelectedProductIndex(index);
                                                                                        console.log("selected product:", data);
                                                                                    }}
                                                                                >
                                                                                    <div className="offer">
                                                                                        <p className="cursor p-2">
                                                                                            <b>Add</b>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <div
                                                                                    className={
                                                                                        data.img_path !== "" ? "bottom-offer" : ""
                                                                                    }
                                                                                    onClick={() => {
                                                                                        // addcart(menuIndex, index);
                                                                                        if (data.addcount > 0) {
                                                                                            SetSameVariants({ open: true, value: data });
                                                                                            console.log("variants:", data.variants);

                                                                                        }
                                                                                        console.log("variants outside:", data.variants);
                                                                                    }}
                                                                                >
                                                                                    <div className="offer">
                                                                                        <p className="cursor p-2">
                                                                                            <b>Add</b>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </AccordionDetails>
                                            ))}
                                        </Accordion>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="col-md-4 sm-none ">
                            <div className="sticky-md-110px p-2 ">
                                {is_loading ? (
                                    <Skeleton height={10} width={80} />
                                ) : (
                                    <h5 className="pb-4 pt-3">Ready to order</h5>
                                )}
                                {cart.map((cartData, cardIndex) => (
                                    <div className="row pb-4 align-center" key={cardIndex}>
                                        <div className="col-5">
                                            {is_loading ? (
                                                <div className="flex align-center">
                                                    <Skeleton height={16} width={16} />
                                                    <div className="ps-1">
                                                        <Skeleton height={10} width={80} />

                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex align-center">
                                                    {cartData.type == "Veg" ? (
                                                        <img
                                                            src={require("../../../assets/icon/veg.png")}
                                                            className="type-img"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={require("../../../assets/icon/nonveg.png")}
                                                            className="type-img"
                                                        />
                                                    )}
                                                    <p className="text-dark pl-1 oneline">{cartData.name}</p>
                                                </div>
                                            )}

                                        </div>
                                        <div className="col-4 p-0">
                                            {is_loading ? (
                                                <Skeleton height={25} width={80} />
                                            ) : (
                                                <div>
                                                    {cartData.addbtn ? (
                                                        <div className="flex offer center px-2 py-1">
                                                            <div
                                                                className="cursor pr-1 w-25 center"
                                                                onClick={() => {
                                                                    // cartminus(cardIndex);
                                                                }}
                                                            >
                                                                <Entypo name="minus" size={18} color="#00ac0b" />
                                                            </div>
                                                            <div className="w-50 center">
                                                                {/* <div
                                       data-aos="fade-down"
                                       data-aos-easing="linear"
                                       data-aos-duration="1500"
                                     > */}
                                                                <p className="smooth">
                                                                    <b>{cartData.addcount}</b>
                                                                </p>
                                                                {/* </div> */}
                                                            </div>
                                                            <div
                                                                className="cursor pl-1 w-25"
                                                                onClick={() => {
                                                                    // cartadd(cardIndex);
                                                                }}
                                                            >
                                                                <Entypo name="plus" size={18} color="#00ac0b" />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            )}

                                        </div>

                                        <div className="col-3 text-right">
                                            {is_loading ? (
                                                <Skeleton height={8} width={60} />
                                            ) : (
                                                <p>₹{cartData.price}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                <div className="row p-2">
                                    <div className="col-9 p-0">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={12} width={100} />
                                                <Skeleton height={8} width={100} />
                                            </div>
                                        ) : (
                                            <div>
                                                <h6 className="mb-1">Sub Total (4 Item)</h6>
                                                <p>
                                                    <small>Extra charges may be apply</small>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-3 p-0 text-right">
                                        {is_loading ? (
                                            <Skeleton height={12} width={60} />
                                        ) : (
                                            <h6>₹650</h6>
                                        )}
                                    </div>
                                </div>

                                <div className="p-3">
                                    {is_loading ? (
                                        <div className="text-center">
                                            <Skeleton height={30} width={200} />
                                        </div>
                                    ) : (
                                        <div className="bg-green py-2 center cursor">

                                            <div className="flex align-center">
                                                <h6 className="text-white pr-1 mb-0">View Cart</h6>
                                                <FontAwesome
                                                    name="long-arrow-right"
                                                    size={20}
                                                    color="white"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className={view_cart ? "bottom_data_viewcart" : "bottom_data"}>
                <div className="md-none center">
                    <div className="center">
                        <button
                            className="btn flex bg-dark align-center"
                            onClick={(e) => {
                                menuOpen(e);
                            }}
                        >
                            <MaterialCommunityIcons
                                name="silverware-fork-knife"
                                size={18}
                                color="white"
                            />
                            <h6 className="pl-2 mb-0">
                                <b>Menu</b>
                            </h6>
                        </button>
                    </div>

                    {view_cart ? (
                        <div className="w-100 bg-darkgreen md-none p-2">
                            <div className="row">
                                <div className="col-6">
                                    <h6 className="mb-0 pb-1">
                                        <b>₹150</b>
                                    </h6>
                                    <p className="text-white">Total Price Amount </p>
                                </div>
                                <div className="col-6 align-center justify-end flex cursor">
                                    <Link
                                        to="/cart"
                                        onClick={() => {
                                            console.log("Cart Click");
                                        }}
                                    >
                                        <div className="flex align-items-center">
                                            <FontAwesome name="opencart" size={15} color="white" />
                                            <h6 className="pl-1 mb-0 text-white">View Cart  </h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            {
                width < 720 ? (
                    <SwipeableBottomSheet overflowHeight={0} style={{ zIndex: 1300 }} open={bottom_swipe.open} onClose={() => { SetBottomSwipe({ open: false, value: "" }); }}
                        onChange={() => {
                            SetBottomSwipe({ open: false, value: "" })
                        }} >
                        <div >
                            <div className="p-3 pt-0 pb-5 mb-5 ScrollY80">
                                <div className="center sticky_drawer">
                                    <hr className="hr-drawer" />
                                </div>

                                <div className="py-3">
                                    <h5>{selected_products.name}</h5>
                                    <p className="marg mt-1">{selected_products.description}</p>
                                </div>

                                {
                                    selected_products.hasOwnProperty("variant_specifications") ? (

                                        selected_products.variant_specifications.map((specify, specifyIndex) => (
                                            <div className="my-3 border-bottom" key={specifyIndex}>
                                                <h6>
                                                    <b>{specify.name}</b>
                                                </h6>
                                                <p>
                                                    <small>Please Select One Option</small>
                                                </p>
                                                {specify.items.map((item, item_index) => (
                                                    <div className="mt-3" key={item_index}>
                                                        <label
                                                            className="pb-2 cursor form-label d-flex"

                                                        >
                                                            <input type="radio" name={specify.name} className="ml-2"
                                                                onChange={() => {
                                                                    console.log("selected_products.variant_specifications", selected_products.variant_specifications.length);


                                                                    let selected_list = {
                                                                        id: specify.id,
                                                                        name: specify.name,
                                                                        spec_id: specify.spec_id,
                                                                        items: [item],
                                                                    }
                                                                    SetSelectedItemsList((preValue: any) => {
                                                                        console.log("pre.length :", preValue.length);
                                                                        console.log("pre :", preValue);
                                                                        if (preValue.length == 0) {
                                                                            console.log("preValue.length == 0) push");

                                                                            preValue.push(selected_list);
                                                                            SetSelectedItemsId((preValue2: any) => {
                                                                                preValue2.push(item.id);
                                                                                return [...preValue2];
                                                                            })
                                                                            console.log("SetSelectedItemsList preValue :", preValue);
                                                                            return [...preValue];
                                                                        } else {
                                                                            console.log("preValue.length != 0) map");
                                                                            preValue.map((list) => {
                                                                                console.log("list :", list);

                                                                                if (list.id == selected_list.id) {
                                                                                    console.log("have match")
                                                                                    console.log("list id:", list.id);
                                                                                    console.log("selected_list id:", selected_list.id);
                                                                                    let old_id = list.items[0].id;
                                                                                    list.items = selected_list.items;
                                                                                    let new_id = selected_list.items[0].id;
                                                                                    console.log("old_id :", old_id);
                                                                                    console.log("new_id :", new_id);

                                                                                    SetSelectedItemsId((preValue1: any) => {
                                                                                        let index_value = preValue1.indexOf(old_id);
                                                                                        console.log("preValue1:", preValue1);
                                                                                        console.log("index_value:", index_value);
                                                                                        console.log("old_id:", old_id);
                                                                                        console.log("new_id:", new_id);
                                                                                        preValue1[index_value] = new_id;

                                                                                        // console.log("preValue1 slice:", preValue1.slice(0, selected_products.variant_specifications.length));
                                                                                        // preValue1.slice(0, selected_products.variant_specifications.length);
                                                                                        // preValue1.splice(index_value,1); 
                                                                                        console.log("preValue1 after:", preValue1);
                                                                                        return [...preValue1];
                                                                                    })


                                                                                } else {
                                                                                    console.log("no match:");
                                                                                    preValue.push(selected_list);
                                                                                    SetSelectedItemsId((preValue3: any) => {
                                                                                        preValue3.push(item.id);
                                                                                        return [...preValue3];
                                                                                    })
                                                                                }
                                                                            })

                                                                        }
                                                                        console.log("item selected :", preValue);

                                                                        return [...preValue];
                                                                    });

                                                                    console.log("item selected compare item:", selected_items_id);
                                                                    console.log("end");
                                                                }}

                                                            />
                                                            <p className="ps-2">
                                                                <b>{item.name}</b>
                                                            </p>
                                                            {/* <div className="col-4 text-right flex align-center justify-end pr-0">
                                                                 <p className="text-dark">₹{size.price}</p>
                                                                 <input type="radio" name="size" className="ml-2" />
                                                             </div>   */}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))

                                    ) : null}

                                {/* {selected_items_id != [] ? ( */}
                                <div className="mb-5">
                                    {
                                        selected_products.hasOwnProperty("variants") ? (
                                            selected_products.variants.map((data, index) => (
                                                <div key={index} className="">
                                                    {/* <button className="btn btn-primary mb-3" onClick={() => {
                                                            console.log("selected_items_id :", selected_items_id.toString());
                                                            console.log("variants_link :", data.variants_link.toString());
                                                            let result = data.variants_link.filter(o1 => selected_items_id.some(o2 => o1.id === o2.id));
                                                            console.log("compare :", result);
                                                            SetCompareResult(result);
                                                            if (compare_result == data.variants_link) {
                                                                console.log("result :", data.addon);
                                                                console.log("result1 :", compare_result == data.variants_link);
                                                            } else {
                                                                console.log("result 2:", compare_result == data.variants_link);
                                                            }
                                                        }}>Checkin</button> */}
                                                    {check_available(data.variants_link) ? (
                                                        data.addon.map((addon_products, addon_index) => (
                                                            <div className="py-3 border-bottom" key={addon_index}>
                                                                <p className="fw-bold pb-2">{addon_products.name}</p>
                                                                {addon_products.items.map((item, it_index) => (
                                                                    <label className="d-flex align-items-center py-2" key={it_index}>
                                                                        <div className="me-2">
                                                                            <input type="checkbox" />
                                                                        </div>
                                                                        <p>
                                                                            <b className="pr-1 text-dark">{item.name}</b>
                                                                        </p>
                                                                        <div className="ms-auto">
                                                                            <small className="text-gray">
                                                                                ₹{item.price}
                                                                            </small>
                                                                        </div>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        ))
                                                    ) : (null)}
                                                </div>
                                            ))
                                        ) : null}
                                </div>
                                {/* ) : (
                                        ""
                                     )} */}

                            </div>

                            <div className="bottom-fixed w-100 row center p-0 mt-3">
                                <div className="col-6 bg-fff p-2">
                                    <h6 className="mb-0">₹300</h6>
                                    <p className="mb-0">
                                        <small>Total Product Price</small>
                                    </p>
                                </div>
                                <div className="col-6 text-center bg-green">
                                    <div
                                        className="cursor  p-3"
                                        onClick={(event) => {
                                            addCart();
                                            SetBottomSwipe({ open: false, value: "" })
                                            SetProducts((prevValue) => {
                                                prevValue[selected_product_index].addbtn = true;
                                                prevValue[selected_product_index].addcount = prevValue[selected_product_index].addcount + 1;
                                                return [...prevValue];
                                            });
                                        }}
                                    >
                                        <p className="text-white mb-0 text-dark">Add to Cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwipeableBottomSheet>
                ) : (
                    <div>
                        {["right", "bottom"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Drawer
                                    className="variant pb-0"
                                    anchor={anchor}
                                    open={state[anchor]}
                                    // onClose={toggleDrawer(anchor, false)}
                                    // onOpen={toggleDrawer(anchor, true)}
                                    onClose={(event) => {
                                        toggleDrawer(anchor, false, event);
                                        SetSelectedItemsList([]);
                                        SetSelectedItemsId([]);
                                    }}
                                    onOpen={(event) => {
                                        toggleDrawer(anchor, true, event);
                                    }}
                                >
                                    <div >
                                        <div className="p-3 pt-0 pb-5 mb-5 ScrollY80">
                                            <div className="center sticky_drawer">
                                                <hr className="hr-drawer" />
                                            </div>

                                            <div className="py-3">
                                                <h5>{selected_products.name}</h5>
                                                <p className="marg mt-1">{selected_products.description}</p>
                                            </div>

                                            {
                                                selected_products.hasOwnProperty("variant_specifications") ? (

                                                    selected_products.variant_specifications.map((specify, specifyIndex) => (
                                                        <div className="my-3 border-bottom" key={specifyIndex}>
                                                            <h6>
                                                                <b>{specify.name}</b>
                                                            </h6>
                                                            <p>
                                                                <small>Please Select One Option</small>
                                                            </p>
                                                            {specify.items.map((item, item_index) => (
                                                                <div className="mt-3" key={item_index}>
                                                                    <label
                                                                        className="pb-2 cursor form-label d-flex"

                                                                    >
                                                                        <input type="radio" name={specify.name} className="ml-2"
                                                                            onChange={() => {
                                                                                console.log("selected_products.variant_specifications", selected_products.variant_specifications.length);


                                                                                let selected_list = {
                                                                                    id: specify.id,
                                                                                    name: specify.name,
                                                                                    spec_id: specify.spec_id,
                                                                                    items: [item],
                                                                                }
                                                                                SetSelectedItemsList((preValue: any) => {
                                                                                    console.log("pre.length :", preValue.length);
                                                                                    console.log("pre :", preValue);
                                                                                    if (preValue.length == 0) {
                                                                                        console.log("preValue.length == 0) push");

                                                                                        preValue.push(selected_list);
                                                                                        SetSelectedItemsId((preValue2: any) => {
                                                                                            preValue2.push(item.id);
                                                                                            return [...preValue2];
                                                                                        })
                                                                                        console.log("SetSelectedItemsList preValue :", preValue);
                                                                                        return [...preValue];
                                                                                    } else {
                                                                                        console.log("preValue.length != 0) map");
                                                                                        preValue.map((list) => {
                                                                                            console.log("list :", list);

                                                                                            if (list.id == selected_list.id) {
                                                                                                console.log("have match")
                                                                                                console.log("list id:", list.id);
                                                                                                console.log("selected_list id:", selected_list.id);
                                                                                                let old_id = list.items[0].id;
                                                                                                list.items = selected_list.items;
                                                                                                let new_id = selected_list.items[0].id;
                                                                                                console.log("old_id :", old_id);
                                                                                                console.log("new_id :", new_id);

                                                                                                SetSelectedItemsId((preValue1: any) => {
                                                                                                    let index_value = preValue1.indexOf(old_id);
                                                                                                    console.log("preValue1:", preValue1);
                                                                                                    console.log("index_value:", index_value);
                                                                                                    console.log("old_id:", old_id);
                                                                                                    console.log("new_id:", new_id);
                                                                                                    preValue1[index_value] = new_id;

                                                                                                    // console.log("preValue1 slice:", preValue1.slice(0, selected_products.variant_specifications.length));
                                                                                                    // preValue1.slice(0, selected_products.variant_specifications.length);
                                                                                                    // preValue1.splice(index_value,1); 
                                                                                                    console.log("preValue1 after:", preValue1);
                                                                                                    return [...preValue1];
                                                                                                })


                                                                                            } else {
                                                                                                console.log("no match:");
                                                                                                preValue.push(selected_list);
                                                                                                SetSelectedItemsId((preValue3: any) => {
                                                                                                    preValue3.push(item.id);
                                                                                                    return [...preValue3];
                                                                                                })
                                                                                            }
                                                                                        })

                                                                                    }
                                                                                    console.log("item selected :", preValue);

                                                                                    return [...preValue];
                                                                                });

                                                                                console.log("item selected compare item:", selected_items_id);
                                                                                console.log("end");
                                                                            }}

                                                                        />
                                                                        <p className="ps-2">
                                                                            <b>{item.name}</b>
                                                                        </p>
                                                                        {/* <div className="col-4 text-right flex align-center justify-end pr-0">
                                                                 <p className="text-dark">₹{size.price}</p>
                                                                 <input type="radio" name="size" className="ml-2" />
                                                             </div>   */}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))

                                                ) : null}

                                            {/* {selected_items_id != [] ? ( */}
                                            <div className="mb-5">
                                                {
                                                    selected_products.hasOwnProperty("variants") ? (
                                                        selected_products.variants.map((data, index) => (
                                                            <div key={index} className="">
                                                                {/* <button className="btn btn-primary mb-3" onClick={() => {
                                                            console.log("selected_items_id :", selected_items_id.toString());
                                                            console.log("variants_link :", data.variants_link.toString());
                                                            let result = data.variants_link.filter(o1 => selected_items_id.some(o2 => o1.id === o2.id));
                                                            console.log("compare :", result);
                                                            SetCompareResult(result);
                                                            if (compare_result == data.variants_link) {
                                                                console.log("result :", data.addon);
                                                                console.log("result1 :", compare_result == data.variants_link);
                                                            } else {
                                                                console.log("result 2:", compare_result == data.variants_link);
                                                            }
                                                        }}>Checkin</button> */}
                                                                {check_available(data.variants_link) ? (
                                                                    data.addon.map((addon_products, addon_index) => (
                                                                        <div className="py-3 border-bottom" key={addon_index}>
                                                                            <p className="fw-bold pb-2">{addon_products.name}</p>
                                                                            {addon_products.items.map((item, it_index) => (
                                                                                <label className="d-flex align-items-center py-2" key={it_index}>
                                                                                    <div className="me-2">
                                                                                        <input type="checkbox" />
                                                                                    </div>
                                                                                    <p>
                                                                                        <b className="pr-1 text-dark">{item.name}</b>
                                                                                    </p>
                                                                                    <div className="ms-auto">
                                                                                        <small className="text-gray">
                                                                                            ₹{item.price}
                                                                                        </small>
                                                                                    </div>
                                                                                </label>
                                                                            ))}
                                                                        </div>
                                                                    ))
                                                                ) : (null)}
                                                            </div>
                                                        ))
                                                    ) : null}
                                            </div>
                                            {/* ) : (
                                        ""
                                     )} */}

                                        </div>

                                        <div className="bottom-fixed w-100 row center p-0 mt-3">
                                            <div className="col-6 bg-fff p-2">
                                                <h6 className="mb-0">₹300</h6>
                                                <p className="mb-0">
                                                    <small>Total Product Price</small>
                                                </p>
                                            </div>
                                            <div className="col-6 text-center bg-green">
                                                <div
                                                    className="cursor  p-3"
                                                    onClick={(event) => {
                                                        addCart();
                                                        toggleDrawer(anchor, false, event);
                                                        SetProducts((prevValue) => {
                                                            prevValue[selected_product_index].addbtn = true;
                                                            prevValue[selected_product_index].addcount = prevValue[selected_product_index].addcount + 1;
                                                            return [...prevValue];
                                                        });
                                                    }}
                                                >
                                                    <p className="text-white mb-0 text-dark">Add to Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                )
            }

            <Menu

                anchorEl={anchor_menu}
                keepMounted
                open={Boolean(anchor_menu)}
                onClose={menuClose}
            >
                {" "}
                {shop.menu.map((items, index) => (
                    <MenuItem key={index} selected={index === selected_index}>
                        <div
                            className="flex"
                            to={items.to}
                            offset={-60}
                            duration={500}
                            onClick={(event) => {
                                // handleMenuItemClick(event, index);
                                // console.log("menu click: ", event);
                                // menuClick(selected_index)
                                menuClose();
                            }}
                        >
                            <div className="w-75">{items.item}</div>
                            <div className="text-right w-25">{items.count}</div>
                        </div>
                    </MenuItem>
                ))}
            </Menu>

            {width < 720 ? (
                <SwipeableBottomSheet overflowHeight={0} style={{ zIndex: 1300 }} open={quick_view.open} onClose={() => { SetQuickView({ open: false, value: "" }); }} onChange={() => {
                    SetQuickView({ open: false, value: "" })
                }} >
                    <div className="bg-fff px-2 py-3 radius-top">
                        <div className="center">
                            <hr className="hr-drawer" />
                        </div>
                        <div className="p-2">
                            <div className="d-flex align-items-center mb-2">
                                {quick_view.value.type == "Veg" ? (
                                    <img
                                        src={require("../../../assets/icon/veg.png")}
                                        className="type-img"
                                    />
                                ) : (
                                    <img
                                        src={require("../../../assets/icon/nonveg.png")}
                                        className="type-img"
                                    />
                                )}
                                <h6 className="oneline ps-1 mb-0">{quick_view.value.name}</h6>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4 ps-0 pe-1">
                                    <img src={quick_view.value.img_path} className="near-img" />
                                    {/* <img src={"https://cdn.1superapp.com/images/320/" + quick_view.value.images[0].url} className="near-img" /> */}
                                </div>
                                <div className="col-8">
                                    <p>{quick_view.value.description}</p>
                                    <p className="pt-1">
                                        <b className="text-dark">₹{quick_view.value.price} </b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwipeableBottomSheet>
            ) : (
                <Dialog open={quick_view.open} onClose={() => { SetQuickView({ open: false, value: "" }); }} classes={{ container: classes.root, paper: classes.paper }}>
                    <div className="bg-fff px-2 py-3 radius-top">
                        <div className="p-2">
                            <div className="row align-items-center pb-3">
                                <div className="col-11 p-0">
                                    <div className="d-flex align-items-center mb-2">
                                        {quick_view.value.type == "Veg" ? (
                                            <img
                                                src={require("../../../assets/icon/veg.png")}
                                                className="type-img"
                                            />
                                        ) : (
                                            <img
                                                src={require("../../../assets/icon/nonveg.png")}
                                                className="type-img"
                                            />
                                        )}
                                        <h6 className="oneline ps-1 mb-0">{quick_view.value.name}</h6>
                                    </div>
                                </div>
                                <div className="col-1 ps-1 pe-0 text-end">
                                    <div className="cursor p-0" onClick={() => { SetSameVariants({ open: false, value: "" }) }}>
                                        <Ionicons name="close" size={20} color="#333" />
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-4 ps-0 pe-1">
                                    <img src={quick_view.value.img_path} className="near-img" />
                                    {/* <img src={"https://cdn.1superapp.com/images/320/" + quick_view.value.images[0].url} className="near-img" /> */}
                                </div>
                                <div className="col-8">
                                    <p>{quick_view.value.description}</p>
                                    <p className="pt-1">
                                        <b className="text-dark">₹{quick_view.value.price} </b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}

            <Dialog open={same_variants.open} onClose={() => { SetSameVariants({ open: false, value: "" }); }} classes={{ container: classes.root, paper: classes.paper }}>
                <div className="bg-fff px-2 py-3 radius-top">
                    <div className="row pb-2 align-items-center sticky-top">
                        <div className="col-11">
                            <p className="text-dark fw-bold mb-0">Do you want repect some addons  ?</p>
                        </div>
                        <div className="col-1 text-end">
                            <div className="cursor p-0" onClick={() => { SetSameVariants({ open: false, value: "" }) }}>
                                <Ionicons name="close" size={20} color="#333" />
                            </div>
                        </div>

                    </div>
                    <div className="p-3">
                        <p className="text-black mb-1">{same_variants.value.name}</p>

                        <div className="mb-2">
                            <p>Toppings, small onion, mushroom, pepper, jinger</p>
                        </div>
                    </div>

                    <div className="bottom-fix w-100 row bg-fff pb-3" >

                        <div className="col-6">
                            <button className="btn-outline-green fw-bold btn w-100" onClick={(event) => {
                                SetSameVariants({ open: false, value: false });
                                toggleDrawer("bottom", true, event);
                            }}
                            >Choose Addons</button>
                        </div>
                        <div className="col-6">
                            <button className="bg-green text-white fw-bold btn w-100" onClick={() => {
                                SetSameVariants({ open: false, value: true });
                                // if(same_variants.value == true){
                                SetProducts((prevValue) => {
                                    prevValue[selected_product_index].addcount = prevValue[selected_product_index].addcount + 1;
                                    return [...prevValue];
                                });
                                // }
                            }}>Same Addons</button>
                        </div>
                    </div>
                </div>
            </Dialog>

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
                        <div className={active_location.open ? "active-shop-border p-2 radius " : "p-2"} onClick={() => {
                            SetActiveLocation({ open: true, value: "" });
                        }}>
                            <p className={active_location.open ? "active-shop-name mb-1" : "text-black mb-1"}>Zomato, Chennai 1</p>

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
                            <button className="btn-outline-green fw-bold btn w-100" onClick={(event) => {
                                SetAnotherLocation({ open: false, value: "" });
                            }}
                            >Cancel</button>
                        </div>
                        <div className="col-6">
                            <button className="bg-green text-white fw-bold btn w-100" onClick={() => {
                                SetAnotherLocation({ open: false, value: "" });
                            }}>Change</button>
                        </div>
                    </div>
                </div>
            </Dialog>

            {
                width < 720 ? (
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
                                        responsive={restaurantresponsive}
                                        disableButtonsControls
                                        controlsStrategy="alternate"
                                    >
                                        {restaurant_img.map((data, index) => (
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
                                        ))}
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
                                        {/* <div className="ms-auto cursor">
                                            <p className="fw-bold fs-7 text-green">Rate Now</p>
                                        </div> */}
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
                                                    Online and Classroom Courses ,Frequent Coding Competitions,
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
                                        responsive={restaurantresponsive}
                                        disableButtonsControls
                                        controlsStrategy="alternate"
                                    >
                                        {restaurant_img.map((data, index) => (
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
                                        ))}
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
                                            <p className="fw-bold fs-7 text-green">Rate Now</p>
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
                                                    Online and Classroom Courses ,Frequent Coding Competitions,
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

            {
                width < 720 ? (
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

            <Dialog
                classes={{ container: classes.root, paper: classes.paper }}
                open={rate_product}
                onClose={() => { SetRateProduct(false); }}
                className="center"
            >
                <div className="bg-fff">
                    <div className="row pt-3">
                        <div className="col-10 text-white">
                            <h5>Rating & Reviews</h5>
                        </div>
                        <div
                            className="col-2 text-right cursor"
                            onClick={() => { SetRateProduct(false); }}
                        >
                            <Ionicons
                                name="ios-close"
                                size={20}
                                color="gray"
                            />
                        </div>
                    </div>
                    <ReviewModal
                        onSubmit={(data) => {
                            console.log("review on submit on product detail : ", data);
                            SetRateProduct(false);
                        }}
                    />
                </div>
            </Dialog>

        </div >
    );
}
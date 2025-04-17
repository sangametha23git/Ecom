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
import { Dialog, Drawer, Modal, SwipeableDrawer } from "@material-ui/core";
import ImageViewer from "react-simple-image-viewer";
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { Tabs, Tab, } from "react-tabs";
import { ProgressBar } from "react-bootstrap";
import ReviewModal from "../../Common/Review/ReviewModal";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../utils/Api";
// import Lightbox from "yet-another-react-lightbox";
// import Captions from "yet-another-react-lightbox/dist/plugins/captions";
// import Inline from "yet-another-react-lightbox/dist/plugins/Inline";
// import "yet-another-react-lightbox/dist/styles.css";
// import "yet-another-react-lightbox/dist/plugins/captions/captions.css";
// import Video from "yet-another-react-lightbox/dist/plugins/video";
import GroceryVariants from "../GroceryVariants/GroceryVariants";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const handleDragStart = (e) => e.preventDefault();

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide  text-red">
                {isReadMore ? " ...read more" : "  show less"}
            </span>
        </p>
    );
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

const ReviewReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text text-white">
            {isReadMore ? text.slice(0, 200) : text}
            <span onClick={toggleReadMore} className="read-or-hide text-orange fw-bold ps-1">
                {isReadMore ? " ...read more" : "  show less"}
            </span>
        </p>
    );
};

const descrip = () => {
    return (
        <div className="descrip-text">
            <ReviewReadMore>
                GeeksforGeeks: A Computer Science portal for geeks.
                It contains well written, well thought and well explained
                computer science, programming articles and quizzes.
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live,
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!

                GeeksforGeeks: A Computer Science portal for geeks.
                It contains well written, well thought and well explained
                computer science, programming articles and quizzes.
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live,
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!
            </ReviewReadMore>
        </div>
    )
}

const reviw_title = () => {
    return (
        <div className="">
            <div className="d-flex align-items-center">
                <img src={require("../../../assets/img/prof.jpg")} className="review-user" />
                <div className="ps-2">
                    <h6 className="text-white mb-1">User name</h6>
                    <p><small className="text-white v-small">Verified</small></p>
                </div>
            </div>
            <div className="flex box mt-2">
                <div>
                    <p className="rating_star mb-0">4.0★</p>
                </div>
                <div className="pl-1">
                    <h6 className="text-white mb-0">Nature Images</h6>
                </div>
            </div>
        </div>
    )
}

const responsive = {
    0: { items: 1 },
    200: { items: 1 },
    350: { items: 2 },
    548: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
    1100: { items: 6 },
    1200: { items: 6 },
};

const thumbresponsive = {
    0: { items: 1 },
    200: { items: 1 },
    350: { items: 2 },
    548: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
    1100: { items: 6 },
    1200: { items: 6 },
};


const preview_responsive = {
    0: { items: 1 },
    200: { items: 1 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 4 },
    1024: { items: 5 },
};

const video_responsive = {
    0: { items: 1 },
    200: { items: 1 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 4 },
    1024: { items: 5 },
};


export default function GroceryProductDetails(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [other_seller_state, setOtherSellerState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    // const [items, SetItems] = useState([]);

    const [items, SetItems] = useState([
        <img
            src={require("../../../assets/img/products/bis6.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/products/bis2.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/products/bis3.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/products/bis4.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/products/bis7.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/products/bis8.png")}
            onDragStart={handleDragStart}
        />,
    ]);
    const [similiar, SetSimiliar] = useState([
        {
            id: 1,
            img_path: require("../../../assets/img/mob.jpg"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
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
        },
        {
            id: 2,
            img_path: require("../../../assets/img/category/Dairy_bakery.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
            variant: []
        },
        {
            id: 3,
            img_path: require("../../../assets/img/category/Drinks_snacks.jpg"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
            variant: []
        },
        {
            id: 4,
            img_path: require("../../../assets/img/category/kitchen.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
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
        },
        {
            id: 5,
            img_path: require("../../../assets/img/category/packed.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
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
        },
        {
            id: 6,
            img_path: require("../../../assets/img/category/household.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            qty: "250g",
            fav_heart: false,
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
        },
        {
            id: 7,
            img_path: require("../../../assets/img/category/babycare.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
            variant: []
        },
        {
            id: 5,
            img_path: require("../../../assets/img/category/packed.png"),
            name: "Freash Fruits Organic Fruits Premium Brands",
            offer_price: 200,
            original_price: 250,
            discount: 50,
            rating: 4.0,
            addcount: 0,
            addbtn: false,
            fav_heart: false,
            qty: "250g",
            variant: []

        },
    ]);
    const [other_sellers, SetOtherSellers] = useState([
        {
            id: 1,
            price: "250",
            offer_detail: "10% Off for ICICI Credit cards",
            seller: "Seller 1",
            rating: 4,
            delivery_price: 50,
            delivery_status: "Mon, Dec 21"
        },
        {
            id: 2,
            price: "250",
            offer_detail: "10% Off for ICICI Credit cards",
            seller: "Seller 2",
            rating: 4,
            delivery_price: 50,
            delivery_status: "Mon, Dec 21"
        },
        {
            id: 3,
            price: "250",
            offer_detail: "10% Off for ICICI Credit cards",
            seller: "Seller 3",
            rating: 4,
            delivery_price: 50,
            delivery_status: "Mon, Dec 21"
        },
        {
            id: 4,
            price: "250",
            offer_detail: "10% Off for ICICI Credit cards",
            seller: "Seller 4",
            rating: 4,
            delivery_price: 50,
            delivery_status: "Mon, Dec 21"
        },
        {
            id: 5,
            price: "250",
            offer_detail: "10% Off for ICICI Credit cards",
            seller: "Seller 5",
            rating: 4,
            delivery_price: 50,
            delivery_status: "Mon, Dec 21"
        },
        {
            id: 6,
            price: "250",
            offer_detail: "10% Off for ICICI Credit cards",
            seller: "Seller 6",
            rating: 4,
            delivery_price: 50,
            delivery_status: "Mon, Dec 21"
        },
    ]);
    // const [details, SetDetails] = useState([]);
    const [details, SetDetails] = useState(
        [
            {
                name:
                    "Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands (Multicolor) Fresh Berries Premium",
                star_rating: 4.0,
                rating_members: 24,
                review_members: 10,
                min_price: 200,
                max_price: 250,
                discount: 5,
                fav_heart: false,
                share: false,
                sellers: [
                    {
                        name: "Super Grocery"
                    },
                ],
                shareOpen: false,

                product_show: [
                    {
                        addcount: 0,
                        addbtn: false,
                    },
                ],
                description: " A flash sales is one that offer some sort of savings but only for a short time.",

                specification: [
                    {
                        position: "specification",
                        title: "Specifications",
                        items: [
                            {
                                subtitle: "Product Information",
                                data: [
                                    {
                                        id: 1,
                                        heading: "Pack of product",
                                        content: "1",
                                    },
                                    {
                                        id: 2,
                                        heading: "Brand Name",
                                        content: "One Super Grocery",
                                    },
                                    {
                                        id: 3,
                                        heading: "Base Ingredient",
                                        content: "Fresh Berries",
                                    },
                                    {
                                        id: 4,
                                        heading: "Quantity",
                                        content: "500Kg, 1Kg, 2Kg",
                                    },
                                    {
                                        id: 5,
                                        heading: "Type",
                                        content: "Fruits",
                                    },
                                    {
                                        id: 6,
                                        heading: "Organic",
                                        content: "Yes",
                                    },
                                    {
                                        id: 7,
                                        heading: "Maximum product life",
                                        content: "One week",
                                    },
                                ],
                            },
                        ],
                    },
                ],
                ratingShow: [
                    {
                        star: 5,
                        rating: "60",
                        value: "310",
                        variant: "success",
                    },
                    {
                        star: 4,
                        rating: "24",
                        value: "30",
                        variant: "",
                    },
                    {
                        star: 3,
                        rating: "30",
                        value: "50",
                        variant: "info",
                    },
                    {
                        star: 2,
                        rating: "10",
                        value: "10",
                        variant: "warning",
                    },
                    {
                        star: 1,
                        rating: "2",
                        value: "5",
                        variant: "danger",
                    },
                ],
                review: [
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
                ],
                highlight: [
                    {
                        position: "highlights",
                        title: "Highlights",

                        items: [
                            { data: "500g Products Details" },
                            { data: "500g Products Details" },
                        ],
                    },
                ],
                offer: [
                    {
                        position: "offer",
                        title: "Offer",

                        value: [
                            { data: "500g Products Details" },
                            { data: "500g Products Details" },
                        ],
                    },
                ],
                // variant: [{ value: "first", size: "S", color: "#2a2e54" }],

                variant_specifications: [
                    {
                        name: "Colour",
                        items: [
                            { name: "dark red", code: "#f44336", checked: true },
                            { name: "pink", code: "#e91e63", checked: false },
                            { name: "strong pink", code: "#9c27b0", checked: false },
                            { name: "Purple", code: "#673ab7", checked: false },
                            { name: "Ocean Blue Pearl", code: "#3f51b5", checked: false },
                            { name: "blue", code: "#0000FF", checked: false },
                            { name: "cyan-blue", code: "#2196f3", checked: false },
                            { name: "vivid blue", code: "#03a9f4", checked: false },
                            { name: "vivid cyan", code: "#00bcd4", checked: false },
                            { name: "strong cyan", code: "#009688", checked: false },
                            { name: "green", code: "#4caf50", checked: false },
                            { name: "Dollar Bill", code: "#8bc34a", checked: false },
                            { name: "Black", code: "#000", checked: false },
                            { name: "white", code: "#fff", checked: false },
                        ],
                    },
                    {
                        name: "Units",
                        items: [
                            { name: "500g", checked: true },
                            { name: "1kg", checked: false },
                            { name: "2kg", checked: false },
                        ],
                    }
                ],
                // mainIndex: 0,
                // mainAnimation: false,
                // thumbIndex: 0,
                // thumbAnimation: false,
                // thumbs:
            }
        ]
    );
    const [color_active, SetColorActive] = useState(false);
    const [unit_active, SetUnitActive] = useState(false);
    const [rate_product, SetRateProduct] = useState(false);
    const [view_is_open, SetViewIsOpen] = useState(false);
    const [current_image, SetCurrentImage] = useState(0);
    const [select_delivery, SetSelectDelivery] = useState(false);
    const [snack_open, SetSnackOpen] = useState(false);
    const [map_view, SetMapView] = useState(false);
    const [new_address, SetNewAddress] = useState(false);
    const [variant_swipe, SetVariantSwipe] = useState(false);
    const [social_swipe, SetSocialSwipe] = useState(false);
    const [other_Swipe, SetOtherSwipe] = useState(false);
    const [main_index, SetMainIndex] = useState(0);
    const [main_animation, SetMainAnimation] = useState(false);
    const [thumb_index, SetThumbIndex] = useState(0);
    const [thumb_animation, SetThumbAnimation] = useState(false);
    const [thumbs, SetThumbs] = useState(thumbItems(items));
    const [viewer_open, SetViewerOpen] = useState(false);
    const [open_image, SetOpenImage] = useState(false);

    const [user_img, SetUserImg] = useState([
        {
            img_path: require("../../../assets/img/leatherShoe.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/ecommerce.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/mens_wear.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/handbag.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/fill.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/ecom.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/designSandal.png"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/saree.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/allWear.webp"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/c65.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/designSandal.png"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/saree.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
    ]);
    const [user_video, SetUserVideo] = useState([
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
        {
            link: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
            title: "USER VIDEO",
            description: "Video description",
        },
    ]);
    const [finite, SetFinite] = React.useState(true);
    const [open_video, SetOpenVideo] = useState(false);
    const [disablePictureInPicture, setDisablePictureInPicture] = React.useState(
        true
    );
    const [disableRemotePlayback, setDisableRemotePlayback] = React.useState(
        true
    );
    const [controlsList, setControlsList] = React.useState([]);
    const [quick, SetQuick] = useState({
        open: false,
        data: ""
    });
    const [variant_data, SetVariantData] = useState({});
    const [is_loading, SetIsLoading] = useState(true);
    const shareUrl = "https://1superapp.com/";

    useEffect(() => {
        console.log("EcommerceProductDetails On mount :", props);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
        // get_init();

        setTimeout(() => {
            SetIsLoading(false);
            console.log("timeout called!")
        }, 5000);
    }, []);

    async function get_init() {
        let pass_data = {
            get: {
                section_slug: context.app_data.sections.sections_slug,
                product_slug: context.app_data.products.slug,
                variant_slug: context.app_data.products.variant_slug,
                seller_slug: context.app_data.products.seller_slug,
                pincode: context.app_data.delivery_address[0].pincode,
            },
        };
        let data_res = await api("/product_details", pass_data);
        console.log("product_details res :", data_res.response.products);
        SetDetails(data_res.response.products);
        SetItems((preValue) => {
            {
                data_res.response.products[0].images.map((img) => {
                    preValue.push(<img src={"https://cdn.1superapp.com/images/320/" + img.url} onDragStart={handleDragStart} />)
                })
            }
            return ([...preValue]);
        });

    }

    // function fix_decimal(data) {
    //     let value = data;
    //     return value.toFixed(1);
    // }

    function otherSellerDrawer(anchor, open, event) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOtherSellerState({ ...other_seller_state, [anchor]: open });
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

    function thumbItems(items) {
        console.log("images :", items);
        return items.map((data, i) => (
            <div
                className="thumb"
                onClick={() => {
                    SetThumbIndex(i);
                    SetThumbAnimation(true);
                }}
            >
                {data}
            </div>
        ));
    };

    function slidePrev() {
        if (!thumb_animation && thumb_index > 0) {
            SetThumbAnimation(true);
            SetThumbIndex(thumb_index - 1);
        }
    };

    function slideNext() {
        if (!thumb_animation && thumb_index < thumbs.length - 1) {
            SetThumbAnimation(true);
            SetThumbIndex(thumb_index + 1);
        }
    };

    function syncMainBeforeChange(e) {
        SetMainAnimation(true);
    };

    function syncMainAfterChange(e) {
        SetMainAnimation(false);

        if (e.type === "action") {
            SetThumbIndex(e.item);
            SetThumbAnimation(false);
        } else {
            SetMainIndex(thumb_index);
        }
    };

    function syncThumbs(e) {
        SetThumbIndex(e.item);
        SetMainAnimation(false);

        if (!main_animation) {
            SetMainIndex(e.item);
        }
    };


    function colorChecked(index, main_index) {
        // colorData[index].checked = true;
        SetDetails((pre) => {
            pre[0].variant_specifications[main_index].items.map((element, key) => {
                console.log("element", element);
                console.log("key", key);
                console.log("index", index);
                if (key == index) {
                    element.checked = true;
                } else {
                    element.checked = false;
                }
            });
            return [...pre];
        })

        SetColorActive(!color_active);
        console.log("Color Active:", details);

    };

    function unitChecked(index, main_index) {
        SetDetails((pre) => {
            pre[0].variant_specifications[main_index].items.map((element, key) => {
                console.log("element", element);
                console.log("key", key);
                console.log("index", index);
                if (key == index) {
                    element.checked = true;
                } else {
                    element.checked = false;
                }
            });
            return [...pre];
        });
        SetUnitActive(!unit_active);
        console.log("units Active:", details);
    };


    function likeclick(index) {
        let review_data = details;
        if (review_data.review[index].like == false) {
            review_data.review[index].like = true;
            review_data.review[index].likeCount = review_data.review[index].likeCount + 1;
            SetDetails(review_data);
        }

        if (review_data.review[index].dislike == true) {
            review_data.review[index].dislike = false;
            review_data.review[index].dislikeCount = review_data.review[index].dislikeCount - 1;
            SetDetails(review_data);
        }
        console.log("dislike count : ", review_data.review[index].dislikeCount);
    };

    function dislikeclick(index) {
        let review_data = details;
        if (review_data.review[index].dislike == false) {
            review_data.review[index].dislike = true;
            review_data.review[index].dislikeCount = review_data.review[index].dislikeCount + 1;
            SetDetails(review_data);
        }
        if (review_data.review[index].like == true) {
            review_data.review[index].like = false;
            review_data.review[index].likeCount = review_data.review[index].likeCount - 1;
            SetDetails(review_data);
        }
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

    return (
        <div className="page-main mb-4 px-sm-0 px-md-2">

            {details.map((data, index) => (
                <div key={index}>
                    <div className="bg-white">

                        <div className="row pt-4">
                            <div className="col-md-5 prod pb-2">
                                <div className="md-none">
                                    <div className="row">
                                        <div className="col-11 p-0">
                                            {is_loading ? (
                                                <Skeleton height={10} width="100%" count={2} />
                                            ) : (
                                                <h6 className="prod-name mb-2">{data.name}</h6>
                                            )}

                                        </div>
                                        <div className="col-1 p-0">
                                            {is_loading ? (
                                                <Skeleton height={20} width={20} count={2} style={{ marginBottom: 10 }} />
                                            ) : (
                                                <div>
                                                    <div className="cursor" onClick={() => {
                                                        SetSocialSwipe(true);
                                                    }}>
                                                        <Ionicons
                                                            name="ios-share-social"
                                                            size={20}
                                                            color="black"
                                                        />
                                                    </div>


                                                    <div
                                                        className="cursor mt-2"
                                                        onClick={() => {
                                                            console.log("Fav Clicked");
                                                            // fav;
                                                            // let product_show_data = data;
                                                            // product_show_data.fav_heart =
                                                            //     !product_show_data.fav_heart;
                                                            // SetDetails((preState) => ({
                                                            //     ...preState,
                                                            //     product_show_data,
                                                            // }));
                                                        }}
                                                    >
                                                        {data.fav_heart ? (
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
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="sectorSlide">
                                    {/* <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: items,
                                            },
                                            largeImage: {
                                                src: items,
                                                width: 1200,
                                                height: 1800
                                            }
                                    }} /> */}
                                    {is_loading ? (
                                        <Skeleton height={330} width="100%" />
                                    ) : (
                                        <AliceCarousel
                                            activeIndex={main_index}
                                            touchMoveDefaultEvents={false}
                                            paddingLeft={0}
                                            animationType="fadeout"
                                            animationDuration={800}
                                            disableDotsControls
                                            disableButtonsControls
                                            infinite
                                            // autoPlay
                                            items={items}
                                            mouseTracking={!thumb_animation}
                                            onSlideChange={syncMainBeforeChange}
                                            onSlideChanged={syncMainAfterChange}
                                            touchTracking={!thumb_animation}
                                        />
                                    )}

                                </div>
                                {is_loading ? (
                                    <div className="d-flex align-item-center">
                                        <Skeleton height={80} width={100} style={{ marginRight: 5 }} />
                                        <Skeleton height={80} width={100} style={{ marginRight: 5 }} />
                                        <Skeleton height={80} width={100} style={{ marginRight: 5 }} />
                                        <Skeleton height={80} width={100} style={{ marginRight: 5 }} />
                                    </div>
                                ) : (
                                    <div className="thumbs">

                                        <AliceCarousel
                                            activeIndex={thumb_index}
                                            touchMoveDefaultEvents={false}
                                            autoWidth
                                            disableDotsControls
                                            disableButtonsControls
                                            infinite
                                            items={thumbs}
                                            paddingRight={50}
                                            responsive={thumbresponsive}
                                            mouseTracking
                                            onSlideChanged={syncThumbs}
                                            touchTracking={!main_animation}
                                        />

                                    </div>
                                )}

                                {/* <SliderImage
            data={details.images}
            width="100%"
            height="500px"
            showDescription={false}
            direction="right"
    /> */}
                                <div className="row align-items-center py-2">
                                    <div className="col-6 pl-0">
                                        {/* {data.product_show.map((data, index) => (
                                            <div key={index}> */}
                                        {/* {data.addbtn ? (
                            <div className="flex center mt-2">
                            <div
                                className="cursor"
                                onClick={() => {
                                product_minus(index);
                                }}
                            >
                                <AntDesign
                                name="minussquare"
                                size={30}
                                color="#005d86"
                                />
                            </div>
                            <div className="">
                                <p className="w-100 pl-3 pr-3 text-dark">
                                <b>{data.addcount}</b>
                                </p>
                            </div>
                            <div
                                className="cursor"
                                onClick={() => {
                                product_add(index);
                                }}
                            >
                                <AntDesign
                                name="plussquare"
                                size={30}
                                color="#005d86"
                                />
                            </div>
                            </div>
                            ) : ( */}
                                        {is_loading ? (
                                            <Skeleton height={30} width="100%" />
                                        ) : (
                                            <Link to="/cart">
                                                <button
                                                    className="btn text-red border shadow w-100 m-0 py-2 "
                                                // onClick={() => {
                                                //   product_addcart(index);
                                                // }}
                                                >Add Cart
                                                </button>
                                            </Link>
                                        )}

                                        {/* )} */}
                                        {/* </div>
                                        ))} */}
                                    </div>
                                    <div className="col-6 align-bottom pl-0">
                                        {is_loading ? (
                                            <Skeleton height={30} width="100%" />
                                        ) : (
                                            <Link to="/ordersummary">
                                                <button className="btn btn-danger shadow w-100 py-2">Buy Now</button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row sm-none ">
                                    <div className="col-10">
                                        {is_loading ? (
                                            <Skeleton height={10} width="100%" count={2} />
                                        ) : (
                                            <h6 className="prod-name">{data.name}</h6>
                                        )}
                                    </div>
                                    <div className="col-2 text-right">
                                        {is_loading ? (
                                            <Skeleton height={20} width={20} count={2} style={{ marginBottom: 10 }} />
                                        ) : (
                                            <div>
                                                <div className="cursor">

                                                    <div className="cursor" onClick={() => {
                                                        SetSocialSwipe(true);
                                                    }}>
                                                        {/* onClick={share} */}
                                                        <Ionicons
                                                            name="ios-share-social"
                                                            size={20}
                                                            color="black"
                                                        />
                                                    </div>
                                                </div>

                                                <div
                                                    className="cursor mt-2"
                                                    onClick={() => {
                                                        console.log("Fav Clicked");
                                                        //   fav;
                                                        let product_show_data = data;
                                                        product_show_data.fav_heart =
                                                            !product_show_data.fav_heart;
                                                        SetDetails((preState) => ({
                                                            ...preState,
                                                            product_show_data,
                                                        }));
                                                    }}
                                                >
                                                    {data.fav_heart ? (
                                                        <Ionicons
                                                            name="ios-heart"
                                                            size={24}
                                                            color="rgb(255, 0, 48)"
                                                        />
                                                    ) : (
                                                        <Ionicons name="heart-outline" size={24} color="gray" />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="p-2">
                                    {is_loading ? (
                                        <div className="flex mt-1 align-items-center">
                                            <Skeleton height={16} width={40} style={{ marginRight: 10 }} />
                                            <Skeleton height={8} width={180} style={{ marginRight: 10 }} />

                                        </div>
                                    ) : (
                                        <div className="flex mt-1 align-items-center">
                                            <p className="rating_star center">
                                                {(data.star_rating).toFixed(1)}★
                                            </p>
                                            <p className="pl-2">
                                                <b>
                                                    {" "}
                                                    {data.rating_members} Rating | {data.review_members} Reviews
                                                </b>
                                            </p>
                                        </div>
                                    )}

                                    {is_loading ? (
                                        <div className="flex mt-2 align-items-center">
                                            <Skeleton height={12} width={40} style={{ marginRight: 10 }} />
                                            <Skeleton height={10} width={40} style={{ marginRight: 10 }} />
                                            <Skeleton height={10} width={40} style={{ marginRight: 10 }} />

                                        </div>
                                    ) : (
                                        <div className="flex mt-2 align-items-center">
                                            <h5 className="pe-1 fw-bolder">₹{data.min_price}</h5>
                                            <p className="ps-1 mb-0"><s >₹{data.max_price}</s></p>
                                            <p className="green pl-1">{data.discount}% Off</p>
                                        </div>
                                    )}
                                    <div className="mt-3  border-top pt-2">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={10} width={100} />
                                                <div className="mt-2">
                                                    <Skeleton height={8} width="100%" count={2} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <h5>Description</h5>
                                                <div className="mt-2">
                                                    <p>{data.details}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="variants mt-3 pt-2 border-top">
                                        {is_loading ? (
                                            <Skeleton height={10} width={100} />
                                        ) : (
                                            <h5>Variants</h5>
                                        )}
                                        {data.variant_specifications.map((v_spec, v_index) => (
                                            <div className="row pt-3" key={v_index}>
                                                <div className="col-md-2 col-12 pb-2">
                                                    {is_loading ? (
                                                        <Skeleton height={8} width={40} />
                                                    ) : (
                                                        <p className="fs-7 text-black">{v_spec.name}</p>
                                                    )}
                                                </div>
                                                <div className="col-md-10 col-12">
                                                    {v_spec.name == "Colour" ? (
                                                        is_loading ? (
                                                            <Skeleton height={16} width={200} />
                                                        ) : (
                                                            <div className="row">
                                                                {v_spec.items.map((item, i) => (

                                                                    <div
                                                                        key={i}
                                                                        className={
                                                                            v_spec.items[i].checked
                                                                                ? "activeCss"
                                                                                : "color-box"
                                                                        }
                                                                        onClick={() => {
                                                                            colorChecked(i, v_index);
                                                                        }}
                                                                        style={{ backgroundColor: item.code }}
                                                                    ></div>
                                                                ))}
                                                            </div>
                                                        )
                                                    ) : (
                                                        is_loading ? (
                                                            <Skeleton height={16} width={200} />
                                                        ) : (
                                                            <div className="row">
                                                                {v_spec.items.map((item, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={
                                                                            v_spec.items[i].checked
                                                                                ? "groc_activeunits"
                                                                                : "unit-box"
                                                                        }
                                                                        onClick={() => {
                                                                            unitChecked(i, v_index);
                                                                        }}
                                                                    > <p>{item.name}</p></div>
                                                                ))}
                                                            </div>
                                                        )

                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="delivery mt-3 pt-2 border-top">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={10} width={60} />
                                                <div className="row pt-2 p-0">
                                                    <div className="col-md-6 p-0">
                                                        <Skeleton height={10} width={80} />

                                                    </div>
                                                    <div className="col-md-6 end align-items-center p-0">
                                                        <Skeleton height={8} width={100} />

                                                    </div>

                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <h5>In Stock</h5>
                                                <div className="row pt-2 p-0">
                                                    <div className="col-md-6 p-0">
                                                        <h6 className="mt-2 text-gray">
                                                            Seller
                                                            <span className="pl-1 text-red">
                                                                {data.sellers[0].name}
                                                            </span>{" "}
                                                        </h6>
                                                    </div>
                                                    <div className="col-md-6 end align-items-center p-0">

                                                        <div className="mt-2 d-flex ms-auto cursor" onClick={(event) => {

                                                            if (width < 720) {
                                                                otherSellerDrawer("bottom", true, event);
                                                            } else {
                                                                otherSellerDrawer("right", true, event);
                                                            }
                                                        }}>
                                                            <MaterialIcons
                                                                name="verified-user"
                                                                size={16}
                                                                color="#bbb"
                                                            />
                                                            <div
                                                                className="cursor end align-items-center"
                                                            >
                                                                <p className="m-0">Other available seller</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {is_loading ? (
                                            <div>
                                                <div className="flex mt-3 align-items-center ">
                                                    <Skeleton height={10} width={200} />

                                                    <div className="ms-auto">
                                                        <Skeleton height={10} width={80} />

                                                    </div>
                                                </div>
                                                <hr />
                                                <Skeleton height={10} width={250} />
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="flex mt-3 align-items-center ">
                                                    <div className="flex align-end">
                                                        <img
                                                            src={require("../../../assets/icon/fast-truck.png")}
                                                            alt=""
                                                        />
                                                        <div className="flex">
                                                            <p className="m-0 pl-1 pr-1">Delivery Near</p>
                                                            <h6 className="mb-0"><b>Erode</b> </h6>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className=" ml-2 flex align-end ml-auto cursor"
                                                        onClick={() => { SetSelectDelivery(true); }}
                                                    >
                                                        <MaterialIcons
                                                            name="location-on"
                                                            size={20}
                                                            color="#e60000"
                                                        />
                                                        <h6 className="text-red mb-0">Change</h6>

                                                    </div>

                                                    <Modal
                                                        open={select_delivery}
                                                        onClose={() => { SetSelectDelivery(false); }}
                                                        className="center deliverytype"
                                                    // onClick={() => {
                                                    //   window.scrollTo({
                                                    //     top: document.documentElement.scrollHeight,
                                                    //     behavior: 'auto',
                                                    //   });
                                                    //   console.log("SCroll");
                                                    // }}
                                                    >
                                                        {/* {mapView ? (
                        <div className="row" onClick={selectDeliveryClose}>
                        <Maps  />
                        </div>
                        ) : ( */}
                                                        {/* <div className=" bg-white"> */}
                                                        {map_view ? (
                                                            // <Maps
                                                            //     className="w-100"
                                                            //     Getdata={(location) => {
                                                            //         console.log("Location :", location);
                                                            //     }}
                                                            //     mapvalue={(value) => {
                                                            //         console.log("map :", value);
                                                            //         SetMapView(value);
                                                            //         addnewOpen();
                                                            //     }}
                                                            // />
                                                            <p>map</p>
                                                        ) : (
                                                            <div className="scrolling-card card">
                                                                <div className="row center bg-sm-primary p-3">
                                                                    <div className="col-9">
                                                                        <h5>Delivery Type</h5>
                                                                    </div>
                                                                    <div
                                                                        className="col-3 text-right cursor p-0"
                                                                        onClick={() => { SetSelectDelivery(false); }}
                                                                    >
                                                                        <Ionicons
                                                                            name="ios-close"
                                                                            size={20}
                                                                            color="white"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="row pl-2 pr-2 pb-3">
                                                                    <div className="col-md-7 col-sm-12 col-lg-7 col-12 p-0">
                                                                        <div>
                                                                            {/* <DeliveryType /> */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5 col-sm-12 col-lg-5 col-12 p-0">
                                                                        {/* <Address
                            onSelect={(data) => {
                                currentLocation(data);
                                console.log("map", data);
                            }}
                            open={new_address}
                        /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* </div> */}
                                                        {/* )}  */}
                                                    </Modal>
                                                </div>
                                                <hr />
                                                <div className="flex">
                                                    <p className="delivery_para">
                                                        Estimated Delivery by{" "}
                                                        <span className="pr-1 text-red">30 Minutes</span>
                                                    </p>
                                                    <p className="pl-1 text-black">₹20</p>
                                                </div>
                                            </div>
                                        )}



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="row border p-2 bg-fff">
                            <div className="col-md-8 ">
                                <div className="desc p-2 pe-3 border-right">
                                    {data.specification.map((value, valueIndex) => (
                                        <div key={valueIndex}>
                                            {/* <h6>{value.title}</h6> */}
                                            {value.items.map((child, Index) => (
                                                <div key={Index}>
                                                    {is_loading ? (
                                                        <div>
                                                            <Skeleton height={12} width={100} />
                                                            <div className="mt-2">
                                                                <Skeleton height={20} width="100%" count={4} />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <h6 className="mb-3">{child.subtitle}</h6>

                                                            {child.data.map((itemvalue, itemIndex) => (
                                                                <div key={itemIndex} className="">
                                                                    <div className="row align-items-center border-top">
                                                                        <div className="col-4 bg-gray d-flex align-items-center p-2">
                                                                            <p>{itemvalue.heading}</p>
                                                                        </div>
                                                                        <div className="col-8 p-2">
                                                                            <p className="text-black">{itemvalue.content}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-4">

                                <div className="desc p-3 border-bottom">
                                    {data.highlight.map((value, valueIndex) => (
                                        <div key={valueIndex}>
                                            {is_loading ? (
                                                <div>
                                                    <Skeleton height={12} width={100} />
                                                    <div className="mt-2">
                                                        <Skeleton height={8} width={200} count={2} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h6>{value.title}</h6>
                                                    {/* <h6 className="mb-1">Highlight on products</h6> */}
                                                    <ul className="mb-0 p-0">
                                                        {value.items.map((child, valueIndex) => (
                                                            <li className="py-1 d-flex align-items-ceter" key={valueIndex}>
                                                                <MaterialIcons
                                                                    name="local-offer"
                                                                    size={13}
                                                                    color="#777"
                                                                />
                                                                <p className="mb-0 ps-2 text-darkgray">{child.data}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="desc p-3 ">
                                    {data.offer.map((data, offerIndex) => (
                                        <div key={offerIndex}>
                                            {is_loading ? (
                                                <div>
                                                    <Skeleton height={10} width={100} />
                                                    <div className="mt-2">
                                                        <Skeleton height={8} width={200} count={2} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h6>{data.title}</h6>
                                                    {/* <h6 className="mb-1">Offer on products</h6> */}
                                                    <ul className="mb-0 p-0">
                                                        {data.value.map((child, index) => (
                                                            <li className="py-1 d-flex align-items-ceter" key={index}>
                                                                <MaterialIcons
                                                                    name="local-offer"
                                                                    size={13}
                                                                    color="#777"
                                                                />
                                                                <p className="mb-0 ps-2 text-darkgray">{child.data}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-fff p-2 mt-2 ">
                        <div className="row align-center pt-2">
                            <div className="col-9">
                                {is_loading ? (
                                    <Skeleton height={12} width={100} />
                                ) : (
                                    <h6>Review & Ratings</h6>
                                )}
                            </div>
                            <div className="col-3 text-end">
                                {is_loading ? (
                                    <Skeleton height={8} width={60} />
                                ) : (
                                    <p
                                        className="mb-0 text-red fw-bold fs-7 cursor"
                                        onClick={() => { SetRateProduct(true); }}
                                    >
                                        Rate Product
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 px-0 pb-3 pt-4">
                                <div className="row p-0 sticky-md-110px">
                                    <div className="col-12 pt-2 pb-3 px-0 text-center">
                                        {is_loading ? (
                                            <div>
                                                <Skeleton height={30} width={80} style={{ marginBottom: 10 }} />
                                                <Skeleton height={10} width={100} style={{ marginBottom: 10 }} />
                                            </div>
                                        ) : (
                                            <div>
                                                <h2 className="text-dark">
                                                    {(4.65).toFixed(1)} ★
                                                </h2>
                                                <p>
                                                    15 Ratings & 15 Reviews
                                                </p>
                                            </div>
                                        )}


                                    </div>
                                    <div className="col-12 pt-2 p-0">
                                        {is_loading ? (
                                            <div className="center">
                                                <Skeleton height={10} width={200} style={{ marginBottom: 10 }} count={5} />
                                            </div>
                                        ) : (
                                            <div >

                                                {data.ratingShow.map((data, ratingIndex) => (

                                                    <div className="row align-items-center" key={ratingIndex}>
                                                        {/* {.toFixed(1)} * */}
                                                        {data.star == 5 ? (
                                                            <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;	&#9733;</p>
                                                        ) : (
                                                            data.star == 4 ? (
                                                                <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;</p>
                                                            ) : (
                                                                data.star == 3 ? (
                                                                    <p className="col-3 pe-1 end p-0 d-flex">	&#9733; &#9733; &#9733; </p>

                                                                ) : (
                                                                    data.star == 2 ? (
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
                                                        <small className="col-3 ps-1 text-left p-0">{data.value}</small>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-2 mt-3 text-center">
                                        {is_loading ? (
                                            <Skeleton height={8} width={100} />
                                        ) : (
                                            <Link className="cursor" to="/ecommerce/all_reviews">
                                                <p className="fw-bolder text-red mb-0">View all reviews</p>
                                            </Link>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-8 border-left">
                                <div className="m-2">
                                    {is_loading ? (
                                        <Skeleton height={10} width={100} />
                                    ) : (
                                        <h6>Reviews with video</h6>
                                    )}
                                    <AliceCarousel
                                        mouseTracking
                                        touchMoveDefaultEvents={false}
                                        // items={productsRestraunt}
                                        // paddingLeft={50}
                                        paddingRight={30}
                                        disableDotsControls
                                        responsive={video_responsive}
                                        disableButtonsControls
                                        controlsStrategy="alternate"
                                    >
                                        {user_video.slice(0, 11).map((data, i) => (
                                            <div className="p-0 " key={i} onDragStart={handleDragStart}>
                                                {is_loading ? (
                                                    <div className="px-1">
                                                        <Skeleton height={230} width="100%" />
                                                    </div>
                                                ) : (
                                                    <div className="px-1">

                                                        {i == 10 ? (
                                                            <Link to={"/review_gallery"}>
                                                                <div className="p-0 img_over_container"
                                                                // onClick={() => {
                                                                //     // openImageUser(6);
                                                                //     // SetOpenVideo(!open_video)
                                                                // }}
                                                                >
                                                                    <div className="img_over_see px-1">
                                                                        <video style={{ width: '100%' }} className="main-video-preview" muted >
                                                                            <source src={data.link} />
                                                                            {/* <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" /> */}
                                                                        </video>
                                                                    </div>
                                                                    <p className="fs-7 centered text-white">See All</p>
                                                                </div>
                                                            </Link>

                                                        ) : (
                                                            <div onClick={() => { SetOpenVideo(!open_video) }}>
                                                                <div className="">
                                                                    <video style={{ width: '100%' }} className="main-video-preview" muted >
                                                                        <source src={data.link} />
                                                                        {/* <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" /> */}
                                                                    </video>
                                                                </div>
                                                                <div className="video_over_content pt-2">
                                                                    <div className="d-flex align-items-center preview_responsive">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="pe-1">
                                                                                <MaterialIcons name="star" size={10} color="orange" />
                                                                            </div>
                                                                            <div className="pe-1">
                                                                                <MaterialIcons name="star" size={10} color="orange" />
                                                                            </div>
                                                                            <div className="pe-1">
                                                                                <MaterialIcons name="star" size={10} color="orange" />
                                                                            </div>
                                                                            <div className="pe-1">
                                                                                <MaterialIcons name="star" size={10} color="orange" />
                                                                            </div>
                                                                            <div className="pe-1">
                                                                                <MaterialIcons name="star-border" size={10} color="orange" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-auto">
                                                                            <div className="d-flex align-items-center">

                                                                                <Ionicons name="md-play" size={10} color="white" />
                                                                                <div className="ps-1">
                                                                                    <p className="mb-0 text-white v-small">0.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                    </AliceCarousel>

                                </div>
                                <div className="my-2">
                                    {is_loading ? (
                                        <Skeleton height={10} width={100} />
                                    ) : (
                                        <h6>Reviews with images</h6>
                                    )}
                                    <AliceCarousel
                                        mouseTracking
                                        touchMoveDefaultEvents={false}
                                        // items={productsRestraunt}
                                        // paddingLeft={50}
                                        paddingRight={50}
                                        disableDotsControls
                                        responsive={preview_responsive}
                                        disableButtonsControls
                                        controlsStrategy="alternate"
                                    >
                                        {user_img.slice(0, 11).map((data, i) => (
                                            <div className="p-0 " key={i} onDragStart={handleDragStart}>
                                                {is_loading ? (
                                                    <div className="px-1">
                                                        <Skeleton height={150} width="100%" />
                                                    </div>
                                                ) : (
                                                    <div className="px-1">
                                                        {/* {i == 10 ? (
                                                   <div>
                                                     <img
                                                        src={data.img_path}
                                                        className="main-50-preview"
                                                        key={i}
                                                        onClick={() => {
                                                            // openImageUser(i);
                                                            SetOpenImage(!open_image)
                                                        }}
                                                    />
                                                   </div>
                                                ) : (
                                                    <div>
                                                        <img
                                                            src={data.img_path}
                                                            className="main-preview"
                                                            key={i}
                                                            onClick={() => {
                                                                // openImageUser(i);
                                                                SetOpenImage(!open_image)
                                                            }}
                                                        />
                                                    </div>
                                                )} */}
                                                        {i == 10 ? (
                                                            <Link to={"/review_gallery"}>

                                                                <div className="p-0 img_over_container"
                                                                // onClick={() => {
                                                                //     // openImageUser(6);
                                                                //     SetOpenImage(!open_image)
                                                                // }}
                                                                >
                                                                    <div className="img_over_see px-1">
                                                                        <img
                                                                            src={data.img_path}
                                                                            className="main-preview"
                                                                            key={10}

                                                                        />
                                                                    </div>
                                                                    <p className="fs-7 centered text-white">See All</p>
                                                                </div>
                                                            </Link>
                                                        ) : (
                                                            <img
                                                                src={data.img_path}
                                                                className="main-preview"
                                                                key={i}
                                                                onClick={() => {
                                                                    // openImageUser(i);
                                                                    SetOpenImage(!open_image)
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                    </AliceCarousel>

                                </div>
                                <div className="">
                                    {data.review.slice(0, 2).map((reviewdata, index) => (
                                        <div className="my-2 border-bottom py-2" key={index}>
                                            {is_loading ? (
                                                <div className="d-flex">
                                                    <Skeleton height={20} width={40} />
                                                    <div className="ps-1">
                                                        <Skeleton height={10} width={150} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="d-flex">
                                                    <p className="rating_star">{reviewdata.value}★</p>
                                                    <div className="ps-1">
                                                        <h6 className="mb-1">{reviewdata.review}</h6>
                                                    </div>
                                                </div>
                                            )}

                                            <div >
                                                {is_loading ? (
                                                    <Skeleton height={8} width="100%" count={3} />
                                                ) : (
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
                                                )}
                                                {is_loading ? (
                                                    <div className="d-flex align-items-center pt-2">
                                                        <Skeleton height={70} width={90} style={{ marginRight: 10 }} />
                                                        <Skeleton height={70} width={90} style={{ marginRight: 10 }} />
                                                        <Skeleton height={70} width={90} style={{ marginRight: 10 }} />
                                                    </div>
                                                ) : (
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
                                                )}
                                            </div>

                                            {is_loading ? (
                                                <div className="row align-center pt-2">
                                                    <div className="col-6 ps-0">
                                                        <Skeleton height={10} width={100} />
                                                    </div>
                                                    <div className="col-6 text-end">
                                                        <Skeleton height={18} width={50} />
                                                    </div>
                                                    <div className="col-12 ps-0">
                                                        <Skeleton height={10} width={150} />
                                                    </div>
                                                </div>
                                            ) : (
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
                                            )}


                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}

            <div className="bg-fff pb-3 mt-2 p-2">
                {is_loading ? (
                    <Skeleton height={10} width={100} />
                ) : (
                    <h6 className="pt-2 pl-2">Similiar Products</h6>
                )}

                <div className="similiar">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        // paddingRight={50}
                        disableDotsControls
                        responsive={responsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >


                        {similiar.map((data, index) => (
                            <div
                                className="py-0 px-1 prods my-2"
                                key={index}
                                onDragStart={handleDragStart}
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
                                    <div className="border" >
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
                                                                grocminus(prodIndex, index);
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
                                                                grocadd(prodIndex, index);
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
                    </AliceCarousel>
                </div>
            </div>


            <Dialog
                classes={{ container: classes.root, paper: classes.paper }}
                open={rate_product}
                onClose={() => { SetRateProduct(false); }}
                className="center"
            >
                <div className={width < 720 ? "scrolling-card" : "bg-white"}>
                    <div
                        className={
                            width < 720
                                ? "bg-sm-primary row p-3  align-center"
                                : "row p-3  align-center"
                        }
                    >
                        <div className="col-10 text-white">
                            <h5>Rating & Reviews</h5>
                        </div>
                        <div
                            className="col-2 text-right cursor p-0"
                            onClick={() => { SetRateProduct(false); }}
                        >
                            <Ionicons
                                name="ios-close"
                                size={20}
                                color={width < 720 ? "white" : "black"}
                            />
                        </div>
                    </div>
                    <ReviewModal
                        onSubmit={(data) => {
                            console.log("review on submit on product detail : ", data);
                            SetRateProduct(false);
                            details.review.push(data);
                            // review.push(data);
                        }}
                    />
                </div>
            </Dialog>
            <div>
                {["right", "bottom"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button onClick={toggleDrawer(anchor, true)}>
                  {anchor}
                </Button> */}
                        <Drawer
                            anchor={anchor}
                            open={other_seller_state[anchor]}
                            onClose={(event) => { otherSellerDrawer(anchor, false, event); }}
                            onOpen={(event) => { otherSellerDrawer(anchor, true, event); }}
                        >
                            <div className="pb-5 mb-5">
                                <div className="sticky-top">
                                <div className="row p-2 border-bottom align-items-center">
                                    <div className="col-10 ps-0">
                                        <h6 className="mb-0">More seller options</h6>
                                    </div>
                                    <div
                                        className="col-2 text-right cursor pe-0"
                                        onClick={(event) => { otherSellerDrawer(anchor, false, event); }}
                                    >
                                        <Ionicons name="close" size={24} color="gray" />
                                    </div>
                                </div>
                                <div className="row align-items-center py-2">
                                    <div className="col-3">
                                        <img src={require("../../../assets/img/vege.png")} className="other-seller-img" />
                                    </div>
                                    <div className="col-9 ps-0 pe-1">
                                        <p className="text-black fs-7 marg">Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh Berries Premium Brands (Multicolor) Fresh Berries Premium</p>
                                    </div>
                                </div>
                                </div>
                                <div className=" ">
                                    <p className="text-gray small px-2">Other sellers details</p>
                                    <div className="pt-2 pb-5 mb-5">
                                        {other_sellers.map((data, index) => (
                                            <div className="p-2 " key={index}>
                                                <div className="border-bottom">
                                                    <div className="row align-items-center pb-2 p-0 ">
                                                        <div className="col-9 ps-0">
                                                            <h6><b>₹ {data.price}</b></h6>
                                                            <p className="pb-2">{data.offer_detail}</p>
                                                        </div>
                                                        <div className="col-3 ps-0">
                                                            <div className="Groceoffer m-0 w-100"
                                                                onClick={(event) => {
                                                                    // width < 720
                                                                    //     ? toggleDrawer("bottom", true, event, data)
                                                                    //     : toggleDrawer("right", true, event, data)
                                                                    console.log("open variant2: ", data)
                                                                }}>
                                                                <p className="cursor p-2">
                                                                    <b className="text-red">Add</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center pb-1">
                                                        <p className="fs-7 fw-bold text-dark ">Sold by {data.seller}</p>
                                                        {/* <p className="fs-7 fw-bold px-2">|</p> */}

                                                        <div className="d-flex align-items-center ms-auto ps-2">
                                                            {/* <MaterialIcons name="star-half" size={12} color="#ffa500" /> */}
                                                            <p className="extra-small fw-500 mb-0 text-orange fs-7 pe-1">3.5</p>
                                                            <Ionicons name="md-star" size={12} color="#ffa500" />
                                                            <p className="extra-small fw-500 ps-1 mb-0 text-gray-200 fs-7">(785)</p>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center pb-2">
                                                        <p className="text-black">Arrives by {data.delivery_status}</p>
                                                        <p className="px-2">|</p>
                                                        <p className="text-black pt-1">Delivery Charge ₹ {data.delivery_price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

            <Dialog
                open={social_swipe}
                classes={{ container: classes.root, paper: classes.paper }}
                onClose={() => { SetSocialSwipe(false) }}
            >
                <div className="">
                    <div className="d-flex align-items-center p-3 shadow">
                        <p className="text-dark fs-7 fw-bold">Share via Social Media</p>
                        <div className="position-absolute center right-10 d-sm-none d-md-block p-2 cursor" onClick={() => {
                            SetSocialSwipe(false)
                        }}>
                            <Ionicons name="close" size={20} color="black" />
                        </div>
                    </div>
                    <div className=" px-2 py-4 pt-3">

                        {/* <p className="fs-7 text-black prod-name marg">
                        Fresh Berries Premium BrandsFresh Berries Premium
                        Brands Fresh Berries Premium Brands (Multicolor)
                        Fresh Berries Premium Brands (Multicolor)
                    </p> */}
                        <div className="row">
                            <div className="col-3 col-md-2 mt-3 text-center">
                                <div
                                    className="text-center cursor"
                                // onClick={copyToClipboard}
                                >
                                    <img
                                        src={require("../../../assets/logo/link.png")}
                                        className="social_icon"
                                    />
                                    <p className="text-center pt-2 text-black">Copy Link</p>
                                </div>
                            </div>

                            <div className="col-3 col-md-2 mt-3 text-center">
                                <FacebookShareButton
                                    url={shareUrl}
                                    className="Demo__some-network__share-button"
                                >
                                    <img
                                        src={require("../../../assets/logo/facebook.png")}
                                        className="social_icon"
                                    />
                                </FacebookShareButton>
                                <p className="text-center pt-2 text-black">Facebook</p>
                            </div>
                            <div className="col-3 col-md-2 mt-3 text-center">
                                <TwitterShareButton
                                    url={shareUrl}
                                    className="Demo__some-network__share-button"
                                >
                                    <img
                                        src={require("../../../assets/logo/twitter.png")}
                                        className="social_icon"
                                    />
                                </TwitterShareButton>
                                <p className="text-center pt-2 text-black">Twiiter</p>
                            </div>
                            <div className="col-3 col-md-2 mt-3 text-center">
                                <WhatsappShareButton
                                    url={shareUrl}
                                    separator=":: "
                                    className="Demo__some-network__share-button"
                                >
                                    <img
                                        src={require("../../../assets/logo/whatsapp.png")}
                                        className="social_icon"
                                    />
                                </WhatsappShareButton>
                                <p className="text-center pt-2 text-black">Whatsapp</p>
                            </div>
                            <div className="col-3 col-md-2 mt-3 text-center">
                                <TelegramShareButton
                                    url={shareUrl}
                                    className="Demo__some-network__share-button"
                                >
                                    <img
                                        src={require("../../../assets/logo/telegram.png")}
                                        className="social_icon"
                                    />
                                </TelegramShareButton>
                                <p className="text-center pt-2 text-black">Telegram</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Dialog>

            {/* <Lightbox
                open={open_image}
                close={() => SetOpenImage(false)}
                inline={{ style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" } }}
                carousel={{
                    finite
                }}
                slides={
                    [
                        {
                            src: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80",
                            title: reviw_title(), description: descrip()
                        },
                        {
                            src: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
                            title: reviw_title(), description: descrip()
                        },
                    ]
                }

                // plugins={[Captions]}
            /> */}

            {/* <Lightbox
                open={open_video}
                close={() => SetOpenVideo(false)}
                inline={{ style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" } }}
                carousel={{
                    finite
                }}
                slides={
                    [
                        {
                            type: "video",
                            width: "100%",
                            height: 500,
                            disablePictureInPicture,
                            disableRemotePlayback,
                            controlsList: controlsList.join(" "),
                            poster: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                            sources: [
                                {
                                    src: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                                    type: "video/mp4"
                                }
                            ],
                            title: reviw_title(), description: descrip()
                        }
                    ]
                }

                // plugins={[Captions, Video]}
            /> */}

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

                                {/* <p className="pl-1"><b className="text-red">5% Off</b></p> */}
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
        </div >
    );
}
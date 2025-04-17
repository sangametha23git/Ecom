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
import { ProgressBar } from "react-bootstrap";
import ReviewModal from "../../Common/Review/ReviewModal";
import DeliveryType from "../../Common/DeliveryType/DeliveryType";
import Address from "../../Common/Address/Address";
import { makeStyles } from "@material-ui/core/styles";
import Variants from "../Variants/Variants";
import { api } from "../../../utils/Api";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Video from "yet-another-react-lightbox/plugins/video";

// import Captions from "yet-another-react-lightbox/dist/plugins/captions";
// import Inline from "yet-another-react-lightbox/dist/plugins/Inline";
// import "yet-another-react-lightbox/dist/plugins/captions/captions.css";
// import Video from "yet-another-react-lightbox/dist/plugins/video";
import { Height } from "@material-ui/icons";

const handleDragStart = (e) => e.preventDefault();

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

const preview_responsive = {
    0: { items: 1 },
    200: { items: 1 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 4 },
    1024: { items: 5 },
    1100: { items: 6 },
    1200: { items: 6 },
};

const video_responsive = {
    0: { items: 1 },
    200: { items: 1 },
    350: { items: 2 },
    548: { items: 3 },
    720: { items: 4 },
    1024: { items: 5 },
};

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
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

export default function EcommerceMobileProductDetails(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [width, SetWidth] = React.useState(innerWidth);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [seller_state, setSellerState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    // const [items, SetItems] = useState([]);
    const [items, SetItems] = useState([
        <img
            src={require("../../../assets/img/mob.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/laptop.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/fashion.jpg")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/sub3.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/sub5.png")}
            onDragStart={handleDragStart}
        />,
        <img
            src={require("../../../assets/img/berries.png")}
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
            variant: [],
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
            variant: []
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
    const shareUrl = "https://1superapp.com/";
    const [copyText, SetCopyText] = useState("");
    const [viewer_open, SetViewerOpen] = useState(false);
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
            img_path: require("../../../assets/img/leatherShoe.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/allWear.webp"),
            title: "USER IMAGE",
            description: "Image description",
        },
        {
            img_path: require("../../../assets/img/leatherShoe.jpg"),
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
            img_path: require("../../../assets/img/leatherShoe.jpg"),
            title: "USER IMAGE",
            description: "Image description",
        },

        {
            img_path: require("../../../assets/img/leatherShoe.jpg"),
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
    const [open_image, SetOpenImage] = useState(false);
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



    useEffect(() => {
        console.log("EcommerceMobileProductDetails On mount :", props);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
        // get_init();
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


    function fix_decimal(data) {
        // let value = data;
        // return value.toFixed(1);
        console.log("fix decimal data:", data);
    }

    function copyToClipboard(e) {
        //Not showing any text link it's temporary copy function
        SetCopyText(e.target.baseURI);
        SetSocialSwipe(false);
        alert(`You have copied "${e.target.baseURI}"`);
        console.log("copy text: ", e.target.baseURI);
    }

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

    function SaveContext(data) {
        console.log("save context: ", data);
        context.app_data.reviews_data = data;
    }

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

    function is_even(value: any) {
        if (value % 2 == 0 && (2 * value) + 1 % 2 != 0) {
            return true;
        }
        return false;
    }

    function otherSellerDrawer(anchor, open, event) {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setSellerState({ ...seller_state, [anchor]: open });
    }


    return (
        <div className="page-main mb-4 px-sm-0 px-md-2">
            {details.map((data, index) => (
                <div key={index}>
                    <div className="">
                        <div className="prod p-2 shadow bg-fff ">
                            <div
                                className="cursor pr-3 text-right share"
                                onClick={() => {
                                    SetSocialSwipe(true);
                                }}
                            >

                                <Ionicons name="ios-share-social" size={20} color="#8c8c8c" />
                            </div>

                            <div className="sectorSlide productdots">
                                <AliceCarousel
                                    mouseTracking
                                    touchMoveDefaultEvents={false}
                                    items={items}
                                    infinite
                                    disableButtonsControls
                                />
                            </div>
                        </div>

                        <div className="p-2 mt-2 shadow bg-fff ">
                            <div className="row center">
                                <div className="col-12 p-0">
                                    <p className="prod-name-mob mb-2 pb-0">{data.name}</p>
                                </div>
                                <div className="col-10 p-0">
                                    <div className="d-flex align-items-center mt-1">
                                        <p className="rating_star center">
                                            {(data.star_rating).toFixed(1)}★
                                        </p>
                                        <p className="pl-1 extra-small">237 Ratings | 12 Reviews
                                            {/* {data.rating_members} Ratings | {data.review_members} Reviews */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div
                                        className="cursor text-right"
                                        onClick={() => {
                                            console.log("Fav Clicked");
                                            // let product_show_data = data;
                                            // product_show_data.fav_heart = !product_show_data.fav_heart;
                                            // SetDetails((preState) => ({
                                            //     ...preState,
                                            //     product_show_data,
                                            // }));
                                        }}
                                    >
                                        {/* {details.fav_heart ? ( */}
                                        <Ionicons
                                            name="ios-heart"
                                            size={24}
                                            color="rgb(255, 0, 48)"
                                        />
                                        {/* ) : (
                                            <Ionicons name="heart-outline" size={24} color="gray" />
                                        )} */}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                                <h6 className="m-0">₹{data.min_price} -</h6>
                                <h6 className="ml-1 mb-0">₹{data.max_price}</h6>
                                <p className="green pl-1">{data.discount}% Off</p>
                            </div>
                            <p>
                                <small>(Inclusive of all taxes)</small>
                            </p>
                        </div>

                        <div className="variants mt-2 py-2 bg-fff ">
                            <h5 className="px-2">Variants</h5>
                            {data.variant_specifications.map((v_spec, v_index) => (
                                <div className="row pt-3" key={v_index}>
                                    <div className="col-md-2 col-12 pb-2">
                                        <p className="fs-7 text-black">{v_spec.name}</p>
                                    </div>
                                    <div className="col-md-10 col-12">
                                        {v_spec.name == "Colour" ? (
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
                                        ) : (
                                            <div className="row">
                                                {v_spec.items.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className={
                                                            v_spec.items[i].checked
                                                                ? "activeunits"
                                                                : "unit-box"
                                                        }
                                                        onClick={() => {
                                                            unitChecked(i, v_index);
                                                        }}
                                                    > <p>{item.name}</p></div>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* {data.variant ? (
                            <div className="mt-2 p-3 flex ml-auto cursor shadow align-center" onClick={() => {
                                SetVariantSwipe(true);
                            }}>
                                <MaterialCommunityIcons
                                    name="selection-multiple"
                                    size={20}
                                    color="#bbb"
                                />
                                <p className="pl-1 m-0">Select Multiple Variants</p>
                            </div>
                        ) : (
                            ""
                        )} */}

                        <div className="delivery mt-2 p-3 shadow bg-fff ">
                            <h3 className="text-brown">
                                <b>In Stock</b>
                            </h3>
                            <div className="d-flex align-items-center p-0">
                                <p className="prod-name-mob fw-bolder text-gray mb-0">Seller</p>
                                <h6 className="px-1 delivery_time mb-0 ">{data.sellers[0].name}</h6>
                            </div>
                        </div>

                        <div className="delivery mt-2 px-3 pt-1 pb-3 shadow bg-fff ">
                            <div className="d-flex align-end">
                                <div className="flex align-end">
                                    <img src={require("../../../assets/icon/fast-truck.png")} alt="" />
                                    <div className="flex">
                                        <p className="m-0 pl-1 pr-1">Delivery Near</p>
                                        <h6 className="mb-0"><b>Erode</b></h6>
                                    </div>
                                </div>

                                <div
                                    className=" ml-2 flex align-end ml-auto cursor"
                                    onClick={() => {
                                        SetSelectDelivery(true);
                                    }}
                                >
                                    <MaterialIcons name="location-on" size={20} color="#007dae" />
                                    <p className="text-prime1 ">Change</p>
                                </div>

                                <Modal
                                    open={select_delivery}
                                    onClose={() => {
                                        SetSelectDelivery(false);
                                    }}
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
                                        //         // addnewOpen();
                                        //     }}
                                        // />
                                        <p>map view</p>
                                    ) : (
                                        <div className="scrolling-card card">
                                            <div className="row center bg-sm-primary p-3">
                                                <div className="col-9">
                                                    <h5>Delivery Type</h5>
                                                </div>
                                                <div
                                                    className="col-3 text-right cursor p-0"
                                                    onClick={() => {
                                                        SetSelectDelivery(false);
                                                    }}
                                                >
                                                    <Ionicons name="ios-close" size={20} color="white" />
                                                </div>
                                            </div>
                                            <div className="row pb-3">
                                                <div className="col-md-7 col-sm-12 col-lg-7 col-12 p-0">
                                                    <div className="bg-gray-300">
                                                        <DeliveryType />
                                                    </div>
                                                </div>
                                                <div className="col-md-5 col-sm-12 col-lg-5 col-12 p-0">
                                                    <Address
                                                        onSelect={(data) => {
                                                            SetMapView(data);
                                                            console.log("map", data);
                                                        }}
                                                        open={new_address}
                                                    />
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
                                    <span className="pr-1 text-prime1">30 Minutes</span>
                                </p>
                                <p className="pl-1 green">₹20</p>
                            </div>
                        </div>

                        <div className="mt-2 p-3 flex ml-auto cursor shadow bg-fff " onClick={(event) => {
                            if (width < 720) {
                                otherSellerDrawer("bottom", true, event);
                            } else {
                                otherSellerDrawer("right", true, event);
                            }
                        }}>
                            <MaterialIcons name="verified-user" size={18} color="#bbb" />
                            <div
                                className="cursor align-center flex"

                            >
                                <p className="pl-1 m-0">Other available seller</p>
                            </div>
                        </div>

                        <div className="mt-2 m-0 w-100 p-3 shadow bg-fff ">
                            <h5>Product Details</h5>
                            <div className="mt-3">
                                <p>{data.description}</p>
                            </div>
                        </div>

                        <div className="mt-2 m-0 w-100 p-3 shadow bg-fff ">
                            <div className="desc">
                                {data.specification.map((value, valueIndex) => (
                                    <div key={valueIndex}>
                                        {/* <h6>{value.title}</h6> */}
                                        {value.items.map((child, Index) => (
                                            <div key={Index}>
                                                <h5 className="mb-3">{child.subtitle}</h5>

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
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="desc pt-3">
                                {data.highlight.map((value, valueIndex) => (
                                    <div>
                                        <h5>{value.title}</h5>
                                        {/* <h6 className="mb-1">Highlight on products</h6> */}
                                        <ul className="mb-0 p-0 mt-2">
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
                                ))}
                            </div>

                            <div className="desc pt-3">
                                {data.offer.map((data, offerIndex) => (
                                    <div key={offerIndex}>
                                        <h5>{data.title}</h5>
                                        {/* <h6 className="mb-1">Offer on products</h6> */}
                                        <ul className="mb-0 p-0 mt-2">
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
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*<div className="bg-white mt-2">
                        <div className="container">

                            <div className="desc mt-2 p-3 shadow">
                                {details.highlight.map((value, valueIndex) => (
                            <div>
                                <h6>{value.title}</h6>
                                {/* <h6 className="mb-1">Highlight on products</h6> *
                                <ul className="mb-0">
                                    {value.items.map((child, valueIndex) => (
                                        <li className="p-1" key={valueIndex}>
                                            <p>{child.data}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                            </div>

                            <div className="desc mt-2 p-3 shadow">
                                {details.offer.map((data, detailsIndex) => (
                            <div>
                                <h6>{data.title}</h6>
                                {/* <h6 className="mb-1">Offer on products</h6> *
                                <ul className="mb-0">
                                    {data.value.map((child, index) => (
                                        <li className="p-1" key={index}>
                                            <p>{child.data}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))} 
                            </div>
                        </div>
                    </div>*/}

                    <div className="bg-fff mt-2 p-2 pt-3">
                        <div className="row align-center">
                            <div className="col-7">
                                <h5>Review & Ratings</h5>
                            </div>
                            <div className="col-5 text-right">
                                <p
                                    className="mb-0 text-prime1 fw-bold fs-7 cursor"
                                    onClick={() => { SetRateProduct(true); console.log("rate products: ", rate_product) }}
                                >
                                    Rate Product
                                </p>
                            </div>

                        </div>

                        <div className="pt-4 align-center">
                            <div className="row">
                                <div className="col-md-4 col-4 pt-2 pb-3 px-0 text-center">
                                    {/* <h2>{details.star_rating} ★</h2> */}
                                    <h2 className="text-dark">
                                        {(data.star_rating).toFixed(1)} ★
                                    </h2>

                                    <p>
                                        {data.rating_members} Ratings & <br />
                                        {data.review_members} Reviews
                                    </p>
                                </div>
                                <div className="col-md-8 col-8 pt-2 px-0">
                                    {data.ratingShow.map((data, detailsIndex) => (
                                        <div className="row align-items-center" key={detailsIndex}>
                                            {data.star == 5 ? (
                                                <p className="w-35 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;	&#9733;</p>
                                            ) : (
                                                data.star == 4 ? (
                                                    <p className="w-35 end p-0 d-flex">	&#9733; &#9733; &#9733; &#9733;</p>
                                                ) : (
                                                    data.star == 3 ? (
                                                        <p className="w-35 end p-0 d-flex">	&#9733; &#9733; &#9733; </p>

                                                    ) : (
                                                        data.star == 2 ? (
                                                            <p className="w-35 end p-0 d-flex">	&#9733; &#9733; </p>

                                                        ) : (
                                                            <p className="w-35 end p-0 d-flex">	&#9733; </p>

                                                        )
                                                    )
                                                )
                                            )}
                                            <div className="w-50">
                                                <ProgressBar now={data.rating} variant={data.variant} />
                                            </div>
                                            <small className="w-15per text-left p-0">{data.value}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-2">
                                <h6>Reviews with video</h6>
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
                                            <div className="px-1">

                                                {i == 10 ? (
                                                    <Link to={"/review_gallery"}>
                                                        <div className="p-0 img_over_container"
                                                            onClick={() => {
                                                                // openImageUser(6);
                                                                // SetOpenVideo(!open_video)
                                                            }}>
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
                                                            <div className="d-flex align-items-center">
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
                                        </div>
                                    ))}

                                </AliceCarousel>

                            </div>
                            <div className="my-2">
                                <h6>Reviews with images</h6>
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
                                                            onClick={() => {
                                                                // openImageUser(6);
                                                                // SetOpenImage(!open_image)
                                                            }}>
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
                                        </div>
                                    ))}

                                </AliceCarousel>

                            </div>
                            <div className="review ">
                                {data.review.map((reviewdata, index) => (
                                    <div className="my-2 border-bottom py-2">
                                        <div key={index} className="flex box ">
                                            <div>
                                                <p className="rating_star">{reviewdata.value}★</p>
                                            </div>
                                            <div className="pl-1">
                                                <h6 className="mb-1">{reviewdata.review}</h6>
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

                            <div className="p-2" onClick={() => {
                                SaveContext(details[0]);
                            }}>
                                <Link className="cursor" to="/ecommerce/all_reviews">
                                    <p className="fw-bolder text-prime1 mb-0">View all reviews</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="bg-white pb-5 mt-2 p-2">
                <h6 className="pt-2 pl-0">Similiar Products</h6>

                <div className="similiar">
                    <AliceCarousel
                        mouseTracking
                        touchMoveDefaultEvents={false}
                        // items={productsRestraunt}
                        // paddingLeft={50}
                        paddingRight={20}
                        disableDotsControls
                        responsive={responsive}
                        disableButtonsControls
                        controlsStrategy="alternate"
                    >


                        {similiar.map((data, index) => (
                            <div
                                className="py-0 px-1 prods mt-2"
                                key={index}
                                onDragStart={handleDragStart}
                            >
                                <div className="border pb-2" >
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
                                            SetQuick((prevValue: any) => {
                                                prevValue.open = true;
                                                prevValue.data = data;
                                                return { ...prevValue }
                                            });
                                        }}>
                                            <img src={data.img_path} className="prods-img" />
                                        </div>
                                    </div>

                                    <div className="bg-fff">
                                        <div className="p-2 pt-1 pe-1">
                                            <p className="oneline text-dark">{data.name}</p>

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

                                                <div className="ecomoffer"
                                                    onClick={(event) => {
                                                        console.log("open variant: ", data);
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
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>

            <div className="bottom-fixed w-100">
                <div className="row center ">
                    <div className="col-6 p-0">
                        <Link to="/cart">
                            <div
                                className="bg-white w-100 center p-3 inset-border"
                            //   onClick={() => {
                            //     product_addcart(index);
                            //   }}
                            >
                                <h6 className="text-primary mb-0">Add Cart</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 align-bottom p-0">
                        <Link to="/ordersummary">
                            <div className="bg-primary w-100 center p-3 inset-border">
                                <h6 className="text-white mb-0">Buy Now</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="social-icons">
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
            </div>
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
                            details.review.push(data);
                            // review.push(data);
                        }}
                    />
                </div>
            </Dialog>

            <Lightbox
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

                plugins={[Captions]}
            />

            <Lightbox
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

                plugins={[Captions, Video]}
            />

            <div>
                {["right", "bottom"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button onClick={toggleDrawer(anchor, true)}>
                  {anchor}
                </Button> */}
                        <Drawer
                            anchor={anchor}
                            open={seller_state[anchor]}
                            onClose={(event) => { otherSellerDrawer(anchor, false, event); }}
                            onOpen={(event) => { otherSellerDrawer(anchor, true, event); }}
                        >
                            <div className="pb-5">
                                <div className="row p-md-3 pb-sm-2 border-bottom align-items-center">
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
                                <div className="overflowYScroll pb-5">
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
                                                        <div className="col-3 p-0">
                                                            <div className="ecomoffer m-0 w-100"
                                                                onClick={(event) => {
                                                                    // width < 720
                                                                    //     ? toggleDrawer("bottom", true, event, data)
                                                                    //     : toggleDrawer("right", true, event, data)
                                                                    console.log("open variant2: ", data)
                                                                }}>
                                                                <p className="cursor p-2">
                                                                    <b className="text-prime1">Add</b>
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

            <div className="variant">
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

        </div>
    );
}
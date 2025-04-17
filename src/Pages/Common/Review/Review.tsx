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
import { Drawer, Modal, SwipeableDrawer } from "@material-ui/core";
import ImageViewer from "react-simple-image-viewer";
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { Tabs, Tab } from "react-tabs";
import { ProgressBar } from "react-bootstrap";
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
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? " ...read more" : "  show less"}
            </span>
        </p>
    );
};


export default function Review(props: any) {
    const context = useContext(DataContext);
    const [current_image, SetCurrentImage] = useState(0);
    const [user_is_open, SetUserIsOpen] = useState(false);
    const [user_image, SetUserImage] = useState(0);
    const [viewer_is_open, SetViewerIsOpen] = useState(false);
    const [rating_show, SetRatingShow] = useState([
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
    const [user_img, SetUserImg] = useState([
        require("../../../assets/img/allWear.webp"),
        require("../../../assets/img/c65.jpg"),
        require("../../../assets/img/designSandal.png"),
        require("../../../assets/img/saree.jpg"),
    ]);

    useEffect(() => {
        console.log("Review On mount :", props);
    }, []);

    return (
        <div className="page-main bg-white">
            <div className="container-fulid">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <img
                            src={require("../../../assets/img/mob.jpg")}
                            className="product_image"
                        />
                        <p className="mt-3  prod-name md-none">
                            Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh
                            Berries Premium Brands (Multicolor) Fresh Berries Premium Brands
                            (Multicolor)
                        </p>
                        <div className="d-flex align-items-center p-3 pb-2">
                            <p className="rating_star center">
                                4.0★
                            </p>
                            <p className="pl-2">
                                20 Rating | 14 Reviews
                            </p>
                        </div>
                        <div className="d-flex align-items-center pt-2 px-3">
                            <h4 className="m-0">₹200</h4>
                            <s className="ml-1">₹250</s>
                            <p className="green pl-1">5% Off</p>
                        </div>
                        <hr className="m-2" />

                        <div className="text-center">
                            <div className="p-0 text-center non-flex-center">
                                <h2 className="mb-0">3.5</h2>
                                <p>
                                    432 Ratings & <br />
                                    77 Reviews
                                </p>
                            </div>
                            <div className=" pt-2 text-center ">
                                {rating_show.map((data) => (
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
                        <hr className="m-2" />
                        <h6 className="p-2">User Images</h6>
                        <div className="row p-0">
                            {user_img.map((data, i) => (
                                <div className="col-2 px-1">
                                    <img
                                        src={data}
                                        className="preview"
                                        key={i}
                                        onClick={() => {
                                            // openImageUser(i);
                                        }}
                                    />
                                </div>
                            ))}
                            {user_is_open && (
                                <ImageViewer
                                    src={user_img}
                                    currentIndex={user_image}
                                    backgroundStyle={{
                                        backgroundColor: "rgba(0,0,0,0.9)",
                                    }}
                                    closeOnClickOutside={true}
                                    onClose={()=>{
                                        SetUserImage(0);
                                        SetUserIsOpen(false);
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <div className="col-md-8 p-3">
                        <h6 className="p-2 mt-2 sm-none">
                            Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh
                            Berries Premium Brands (Multicolor) Fresh Berries Premium Brands
                            (Multicolor)
                        </h6>
                        <hr className="m-2 sm" />
                        <p className="mt-3 text-black fs-6">Reviews</p>

                        <div className="mt-4 pb-2">
                            {review.map((reviewdata, index) => (
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
                                                            // openImageViewer(i);
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                            {viewer_is_open && (
                                                <ImageViewer
                                                    src={reviewdata.file}
                                                    currentIndex={current_image}
                                                    backgroundStyle={{
                                                        backgroundColor: "rgba(0,0,0,0.5)",
                                                    }}
                                                    closeOnClickOutside={true}
                                                    onClose={()=>{
                                                        SetCurrentImage(0);
                                                        SetViewerIsOpen(false);
                                                    }}
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
                                                    // likeclick(index);
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
                                                        // dislikeclick(index);
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

                        {/* <div className="row align-center pl-1">
                  <div className="col-md-3 col-12 text-center">
                    <p>Page: {page} of 10</p>
                  </div>
                  <div className="col-md-9 col-12 text-center p-0">
                    <Pagination
                      count={10}
                      page={page}
                      onChange={handleChange}
                    />
                </div>
              </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
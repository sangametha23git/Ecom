import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { ProgressBar } from "react-bootstrap";
import Pagination from "@material-ui/lab/Pagination";
import ImageViewer from "react-simple-image-viewer";
import {
    Entypo,
    MaterialIcons,
    Ionicons
} from "@expo/vector-icons";

// import Lightbox from "yet-another-react-lightbox";
// import Captions from "yet-another-react-lightbox/dist/plugins/captions";
// import Inline from "yet-another-react-lightbox/dist/plugins/Inline";
// import "yet-another-react-lightbox/dist/styles.css";
// import "yet-another-react-lightbox/dist/plugins/captions/captions.css";
import { Data } from "@react-google-maps/api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Video from "yet-another-react-lightbox/dist/plugins/video";
const handleDragStart = (e) => e.preventDefault();

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


export default function EcommerceAllReview(props: any) {
    const context = useContext(DataContext);
    const [page, SetPage] = useState(1);
    const [viewer_open, SetViewerOpen] = useState(false);
    const [user_open, SetUserOpen] = useState(false);
    const [current_image, SetCurrentImage] = useState(0);
    const [user_image, SetUserImage] = useState(0);
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
    const [open_image, SetOpenImage] = useState(false);
    const [open_video, SetOpenVideo] = useState(false);
    const [disablePictureInPicture, setDisablePictureInPicture] = React.useState(
        true
    );
    const [disableRemotePlayback, setDisableRemotePlayback] = React.useState(
        true
    );
    const [controlsList, setControlsList] = React.useState([]);

    const product_details = "product_details"

    useEffect(() => {
        console.log("EcommerceAllReview On mount :", props);
        console.log("EcommerceAllReview context :", context);
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });
    }, []);

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



    return (
        <div className="page-main bg-fff pt-2">
            <div className="container-fulid pb-5">
                <div className="row">
                    <div className="col-md-4 border-right">
                        <img
                            // src={"https://cdn.1superapp.com/images/320/" +context.app_data.reviews_data.images[0].url}
                            src={require("../../../assets/img/nike.png")}
                            className="product_image"
                        />
                        <p className="mt-3  prod-name md-none">
                            {/* {context.app_data.reviews_data.name} */}

                        </p>
                        <div className="d-flex align-items-center pt-3 pb-1">
                            <p className="rating_star center">
                                4.0★
                            </p>
                            <p className="pl-2">
                                20 Rating | 14 Reviews
                            </p>
                        </div>
                        <div className="d-flex align-items-center pt-2 pb-2">
                            <h6 className="m-0">₹200</h6>
                            <p className="ml-1 mb-0"><s>₹250</s></p>
                            <p className="green pl-1">5% Off</p>
                        </div>
                        <div className="d-md-none d-sm-block">
                            <p className="fs-7 text-dark ">Casual Nike shoe for men 9 Size black & merron colour</p>
                        </div>
                        <hr className="m-2" />

                        <div className="p-0 row sticky-md-110px">
                            <div className="p-0 text-center non-flex-center">
                                <h2 className="mb-0">3.5 ★</h2>
                                <p>
                                    432 Ratings & <br />
                                    77 Reviews
                                </p>
                            </div>
                            <div className=" pt-2 text-center ">
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

                    </div>

                    <div className="col-md-8 p-3">
                        <h6 className="p-2 mt-2 sm-none">
                            Fresh Berries Premium BrandsFresh Berries Premium Brands Fresh
                            Berries Premium Brands (Multicolor) Fresh Berries Premium Brands
                            (Multicolor)
                        </h6>
                        <hr className="m-2 sm" />
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
                                                            SetOpenImage(!open_image)
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                            {/* {viewer_open && (
                                                <ImageViewer
                                                    src={reviewdata.file}
                                                    currentIndex={current_image}
                                                    backgroundStyle={{
                                                        backgroundColor: "rgba(0,0,0,0.5)",
                                                    }}
                                                    closeOnClickOutside={true}
                                                    onClose={closeImageViewer}
                                                />
                                            )} */}
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

{/* 
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
            /> */}
        </div>
    );
}
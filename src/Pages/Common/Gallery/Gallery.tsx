import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import {
    MaterialIcons,
    Ionicons,
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ImageList, ImageListItem, makeStyles } from '@material-ui/core';
// import Lightbox from "yet-another-react-lightbox";
// import Video from "yet-another-react-lightbox/dist/plugins/video";
// import Captions from "yet-another-react-lightbox/dist/plugins/captions";
// import "yet-another-react-lightbox/dist/styles.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function ReviewGallery(props: any) {
    const context = useContext(DataContext);
    const [width, SetWidth] = React.useState(innerWidth);
    const [video_active, SetVideoActive] = useState(true);
    const [image_active, SetImageActive] = useState(false);
    const [index, setIndex] = useState(-1);
    const [v_index, setVIndex] = useState(-1);
    const [disablePictureInPicture, setDisablePictureInPicture] = React.useState(
        true
    );
    const [disableRemotePlayback, setDisableRemotePlayback] = React.useState(
        true
    );
    const [open_image, SetOpenImage] = useState(false);
    const [open_video, SetOpenVideo] = useState(false);

    const [user_img, SetUserImg] = useState([
        {
            src: require("../../../assets/img/leatherShoe.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/ecommerce.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/mens_wear.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/handbag.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/fill.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/ecom.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/grocery_shop3.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/hd-wallpaper.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/allWear.webp"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/grocery_shop1.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },

        {
            src: require("../../../assets/img/grocery_shop5.jpeg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/shirt2.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/shirt5.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },

        {
            src: require("../../../assets/img/shirt6.jpg"),
            title: "USER IMAGE",
            description: "Image description",

        },
        {
            src: require("../../../assets/img/prof.jpg"),
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
    const [controlsList, setControlsList] = React.useState([]);


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

    return (
        <div className="page-main mb-4 px-sm-0 px-md-2">
            <div className="bg-fff p-3">
                <div className="d-flex align-items-center">
                    <div className="me-3" onClick={() => {
                        SetVideoActive(true);
                        SetImageActive(false);
                    }}>
                        <div className={video_active ? "gallery-tab-active" : "gallery-tab"} >
                            <Ionicons name="videocam" size={16} color={video_active ? "#007dae" : "#aaa"} />
                            <div className="ps-2">
                                <p className={video_active ? "text-prime1" : "text-darkgray"}>Videos</p>
                            </div>
                        </div>
                    </div>
                    <div className="me-3" onClick={() => {
                        SetVideoActive(false);
                        SetImageActive(true);
                    }}>
                        <div className={image_active ? "gallery-tab-active" : "gallery-tab"}>
                            <Ionicons name="images" size={16} color={image_active ? "#007dae" : "#aaa"} />
                            <div className="ps-2">
                                <p className={image_active ? "text-prime1" : "text-darkgray"}>Images</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="bg-fff py-2 ">
                    {image_active ? (
                        <div className="row p-0">

                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 350: 2, 700: 3, 900: 4, 1200: 5 }}
                            >
                                <Masonry gutter="5px">
                                    {user_img.map((img, i) => (
                                        <div key={i} onClick={() => {
                                            SetOpenImage(true)
                                        }}>
                                            <img

                                                src={img.src}
                                                style={{ width: "100%", display: "block", height: "auto", borderRadius: "6px" }}
                                            />
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>



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
                        </div>
                    ) : (
                        <div className="row p-0">

                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 350: 2, 700: 3, 900: 4, 1200: 5 }}
                            >
                                <Masonry gutter="5px">
                                    {user_video.map((data, index) => (
                                        <div key={index} className="" onClick={() => {
                                            SetOpenVideo(true);
                                        }}>
                                            <video style={{ width: '100%', display: "block", height: "auto", borderRadius: "6px" }} muted >
                                                <source src={data.link} />
                                                {/* <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" /> */}
                                            </video>
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>


                            <div className="video-lightbox">
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
                                                        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
                                                        type: "video/mp4"
                                                    },
                                                ],
                                                title: reviw_title(), description: descrip()
                                            },
                                            {
                                                type: "video",
                                                width: "100%",
                                                height: 500,
                                                disablePictureInPicture,
                                                disableRemotePlayback,
                                                controlsList: controlsList.join(" "),
                                                poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                                                sources: [

                                                    {
                                                        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                                                        type: "video/mp4"
                                                    }
                                                ],
                                                title: reviw_title(), description: descrip()
                                            },
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
                                                        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                                                        type: "video/mp4"
                                                    }
                                                ],
                                                title: reviw_title(), description: descrip()
                                            },
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
                                                        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                                                        type: "video/mp4"
                                                    }
                                                ],
                                                title: reviw_title(), description: descrip()
                                            },
                                        ]
                                    }

                                    plugins={[Captions, Video]}
                                />
                            </div>
                        </div>
                    )}
                </div>
        </div >
    )
}
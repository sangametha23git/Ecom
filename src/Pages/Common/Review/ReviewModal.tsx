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
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer, Modal } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
    previewChip: {
        minWidth: 160,
        maxWidth: 210
    },
}));
import { DropzoneAreaBase } from 'material-ui-dropzone'
const handleDragStart = (e) => e.preventDefault();


export default function ReviewModal(props: any) {
    const context = useContext(DataContext);
    const classes = useStyles();
    const [value, SetValue] = useState(0);
    const [hover, SetHover] = useState("-1");
    const [review_text, SetReviewText] = useState("");
    const [file, SetFile] = React.useState([]);
    const [dislike_count, SetDisLikeCount] = useState(0);
    const [like_count, SetLikeCount] = useState(0);
    const [like, SetLike] = useState(false);
    const [dislike, SetDisLike] = useState(false);

    const [labels, SetLabels] = useState({
        1: "Poor",
        2: "Not bad",
        3: "Ok",
        4: "Good",
        5: "Excellent",
    });
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    useEffect(() => {
        console.log("ReviewModal On mount :", props);
    }, []);


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

    function upload(event) {
        let images = [];

        for (let i = 0; i < event.target.files.length; i++) {
            images.push(URL.createObjectURL(event.target.files[i]))
        }
        SetFile(images);
        console.log("Previews :", images);
    }



    return (
        <div className="mt-2 p-3 " >
            <p>Rate Product</p>
            <div className="">
                <div className="flex p-2 text-center">
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        onChange={(event, newValue) => {
                            SetValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            SetHover(newHover);
                        }}
                    />
                    <div className="ms-auto">
                        <p className="text-black fs-7">
                            {value !== null && labels[hover !== -1 ? hover : value]}
                        </p>
                    </div>
                </div>

                <textarea
                    name="review"
                    id=""
                    cols={30}
                    rows={2}
                    placeholder="Say any compliments or your complaints"
                    onChange={(event) => { SetReviewText(event.target.value) }}
                ></textarea>

                <div className=" py-3">
                    <input
                        accept="image/*, video/*"
                        className="d-none"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={upload}
                    />
                    <label htmlFor="contained-button-file">
                        <Button component="span" color="primary" >
                            <MaterialCommunityIcons name="camera-plus-outline" size={26} color="#222" />
                        </Button>
                    </label>
                </div>


                {/* <DropzoneAreaBase
                        fileObjects={file}
                        onSave={() => { console.log('Files:', file); SetFile(file); }}
                        // showPreviews={true}
                        showPreviewsInDropzone={false}
                        maxFileSize={300000000}
                        filesLimit={10}
                        showAlerts={false}
                        // useChipsForPreview
                        // previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                        // previewChipProps={{ classes: { root: classes.previewChip } }}
                        // previewText=""
                        onAdd={(addFile) => {
                            console.log('onAdd', addFile);
                            SetFile([].concat(file, addFile));
                        }}
                        onDelete={deleteFile => {
                            console.log('onDelete', deleteFile);
                        }}

                        onChange={(files) => { console.log('Files:', files) }}
                    /> */}


                <div className="row pt-2">
                    {file.map((img, index) => (
                        <div className="col-4 col-md-3 px-1 mb-2 position-relative" key={index}>
                            <img src={img.data} key={index} className="preview " />
                            <div className="cursor text-center over-img" onClick={() => {
                                console.log("Delete");
                                //x
                                SetFile([].slice(0, 1));
                            }}>

                                <Ionicons name="ios-close" size={12} color="#333" />
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center p-3">
                    <button
                        className="btn bg-prime1 text-white"
                        type="submit"
                    // onClick={reviewSubmit}
                    >
                        Submit Review
                    </button>
                </div>
            </div>

        </div >
    );
}
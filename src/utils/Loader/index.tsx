import React from "react";
import PropTypes from "prop-types";
import ScaleLoader from "react-spinners/ScaleLoader";
import FadeLoader from "react-spinners/FadeLoader";

const defaultLoaderStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1300,
  background: "rgba(50,50,85,.5)",
  backfaceVisibility: "hidden",
};

const defaultSpinnerStyle = {
  position: "fixed",
  left: "50%",
  top: "50%",
  width: 100,
  height: 100,
};

const Loader = (props) => {
  const { promiseInProgress } = props.promiseTracker
    ? props.promiseTracker()
    : false;

  const loaderStyle = {
    ...defaultLoaderStyle,
  };

  const color = "#ffffff";

  return promiseInProgress ? (
    <div className=""></div>
    // <div style={loaderStyle}>
    //   <div style={defaultSpinnerStyle}>
    //     <FadeLoader color={color} height={10} width={5} radius={0} margin={0} />
    //     {/* <ScaleLoader
    //       color={color}
    //       height={35}
    //       width={5}
    //       radius={10}
    //       margin={2}
    //     /> */}
    //   </div>
    // </div>
  ) : null;
};

Loader.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  background: PropTypes.string,
  promiseTracker: PropTypes.any,
};

Loader.defaultProps = {
  color: "#000",
  loading: false,
  background: "rgba(255,255,255,.5)",
  promiseTracker: false,
};

export default Loader;

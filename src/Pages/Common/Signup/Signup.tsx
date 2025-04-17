import React, { useState, useEffect, useContext } from "react";
import DataContext from "../../../utils/Context/DataContext";

export default function Signup(props: any) {
    const context = useContext(DataContext);
    const [sign, SetSign] = useState(false);

    useEffect(() => {
        console.log("Signup On mount :", props);
        console.log("Signup context :", context);
    }, []);

    function signup() {
        console.log("sign up before: ", sign);
        SetSign(!sign);
        console.log("sign up: ", sign);
    };
    function signin() {
        console.log("sign in before: ", sign);
        SetSign(false);
        console.log("sign in: ", sign);
    };

    return (

        <div>
            {sign ? (
                <div className="bg-clr">
                    <div className="modalcontainer">
                        <div className="forms-container">
                            <div className={sign ? "container sign-up-mode" : "container"}>
                                <div className="signin-signup">
                                    <form action="#" className="sign-up-form">
                                        <h2 className="title">Sign up</h2>
                                        <div className="input-field">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-envelope"></i>
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <input
                                            type="submit"
                                            className="btn"
                                            value="Sign up"
                                        />
                                        <p className="social-text">
                                            Or Sign up with social platforms
                                        </p>
                                        <div className="social-media">
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-google"></i>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="panels-container">
                            <div className="panel right-panel">
                                <div className="content">
                                    <h3>One of us ?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nostrum laboriosam ad deleniti.
                                    </p>
                                    <button
                                        className="btn transparent"
                                        id="sign-in-btn"
                                        onClick={
                                            () => {
                                                console.log("Signin");
                                                signup();
                                            }
                                            //   ()=>{
                                            //   this.setState({sign: false});
                                            //   console.log("sign in click")
                                            // }
                                        }
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <img
                                    src="https://www.pngkey.com/png/full/444-4444270_ia-press-play-website.png"
                                    className="image imagesign-in"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-clr">
                    <div className="modalcontainer">
                        <div className="forms-container">
                            <div className={sign ? "container sign-up-mode" : "container"}>
                                <div className="signin-signup">
                                    <form action="#" className="sign-in-form">
                                        <h2 className="title">Sign in</h2>
                                        <div className="input-field">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn solid"
                                        />
                                        <p className="social-text">
                                            Or Sign in with social platforms
                                        </p>
                                        <div className="social-media">
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-google"></i>
                                            </a>
                                            <a href="#" className="social-icon">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="panels-container">
                            <div className="panel left-panel">
                                <div className="content">
                                    <h3>New here ?</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing
                                        elit. Debitis, ex ratione. Aliquid!
                                    </p>
                                    <button
                                        className="btn transparent"
                                        id="sign-up-btn"
                                        onClick={signup}
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <img
                                    src="https://stories.freepiklabs.com/storage/11588/market-launch-amico-2628.png"
                                    className="image imagesign-up"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
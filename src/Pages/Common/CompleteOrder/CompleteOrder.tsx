import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { api } from "../../../utils/Api";


export default function CompleteOrder(props: any) {
    const context = useContext(DataContext);
    const [search_params, SetSearchParams] = useSearchParams();
    const [status, SetStatus] = useState("")
    const [animation, SetAnimation] = useState(true);

    useEffect(() => {
        console.log("CompleteOrder On mount :", props);
        console.log("CompleteOrder On mount search_params :", search_params.get("s"));
        SetStatus(search_params.get("s"));
        // get_address();
        context.SetAppData((prevValue) => {
            prevValue.backHaves = props.backHaves;
            return { ...prevValue };
        });

        setTimeout(() => {
            SetAnimation(false);
            console.log("Animation timeout called!")
        }, 5000);
    }, []);


    return (
        <div className="">
            {status == "success" ? (
                animation ? (
                    <div className="main-container">
                        <div className="check-container">
                            <div className="check-background">
                                <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="check-shadow"></div>
                        </div>
                    </div>
                ) : (
                    <div className=" py-3">
                        
                        <div className="pay_success center w-100">
                            <img src={require("../../../assets/icon/check-mark.png")} />
                        </div>

                        <p className="mt-1 text-green fw-bold fs-7 text-center">Payment Successful</p>
                        <h4 className="mt-2 mb-4 text-center">₹ 450.00</h4>
                        <div className="px-2 py-3">
                            <div className="center">
                                <img src={require("../../../assets/img/food8.jpg")} className="detail-img" />

                            </div>
                            <div className="price_details">
                                <p className="text-center text-dark pt-4 fs-7">
                                    Vendor Name
                                </p>
                                <div className="pt-3 row align-items-center">
                                    <div className="col-9 px-2 text-left">
                                        <p className="text-darkgray mb-2">Item Total</p>
                                        <p className="text-darkgray mb-2">Delivery Fee</p>
                                        <p className="text-darkgray mb-2">Delivery Tips</p>
                                    </div>
                                    <div className="col-3 px-2 text-right">
                                        <p className="text-darkgray mb-2">₹ 350</p>
                                        <p className="text-darkgray mb-2">₹ 30</p>
                                        <p className="text-darkgray mb-2">₹ 30</p>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <div className="p-1 bg-light-color d-flex align-items-center radius">
                                        <div className="p-1 center">
                                            <img src={require("../../../assets/icon/present1.png")} className="truck" />
                                        </div>
                                        <div className="px-1">
                                            <p className="text-prime1 fw-bold v-small">Get voucher to ₹20 of these order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 py-3">
                            <h6 className="mb-3">Details of Transactions</h6>
                            <div className="d-flex align-items-center">
                                <p className="text-darkgray mb-3">Payment type</p>
                                <div className="ms-auto mb-3">
                                    <p className="text-black v-small fw-bold">UPI</p>
                                </div>
                            </div>
                            <div className="d-flex laign-items-center">
                                <p className="text-darkgray mb-3">Status</p>
                                <div className="ms-auto mb-3">
                                    <p className="text-green v-small fw-bold">Paid</p>
                                </div>
                            </div>

                            <div className="d-flex laign-items-center">
                                <p className="text-darkgray mb-3">Date & Time</p>
                                <div className="ms-auto mb-3">
                                    <p className="text-black v-small fw-bold">Dec 05, 2022 & 02.45 pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="d-flex align-items-center">
                                <p className="text-black fw-bold">Total Amount</p>
                                <div className="ms-auto">
                                    <p className="fs-7 fw-bold text-black">₹ 450.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-fixed w-100 center py-2 shadow-none">
                            <Link to={"/orderpage"}>
                                <button className="btn bg-green text-white px-5 btn-radius">Done</button>
                            </Link>
                        </div>
                    </div>
                )
            ) : (
                <div className="py-3">
                    <div className="pay_success text-center">
                        <img src={require("../../../assets/icon/warning.png")} />
                    </div>
                    {/* <div className="ms-auto p-2" onClick={() => { props.onClose() }}>
                            <Ionicons name="close" size={20} color="white" />
                        </div> */}

                    <p className="mt-1 text-red fw-bold fs-7 text-center">Payment Unsuccessful</p>
                    <p className="mt-1 text-center mb-3">Something went wrong! please try again to make successful payment</p>

                    <div className="px-2 py-4">
                        <div className="center">
                            <img src={require("../../../assets/img/food8.jpg")} className="detail-img" />

                        </div>
                        <div className="price_details">
                            <p className="text-center text-dark pt-4 fs-7">
                                Vendor Name
                            </p>
                            <div className="pt-3 row align-items-center">
                                <div className="col-9 px-2 text-left">
                                    <p className="text-darkgray mb-2">Item Total</p>
                                    <p className="text-darkgray mb-2">Delivery Fee</p>
                                    <p className="text-darkgray mb-2">Delivery Tips</p>
                                </div>
                                <div className="col-3 px-2 text-right">
                                    <p className="text-darkgray mb-2">₹ 350</p>
                                    <p className="text-darkgray mb-2">₹ 30</p>
                                    <p className="text-darkgray mb-2">₹ 30</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-2">
                        <div className="d-flex align-items-center">
                            <p className="text-black fw-bold">Total Amount</p>
                            <div className="ms-auto">
                                <p className="fs-7 fw-bold text-black">₹ 450.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-fixed w-100 center py-2 shadow-none">
                        <button className="btn btn-danger text-white px-5 btn-radius" onClick={() => {
                            SetStatus("success");
                        }}>Try again</button>
                    </div>
                </div>
            )}

        </div>
    )
}
import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../../../assets/js/gsap";
import { api } from "../../../utils/Api";
import { Modal } from "@material-ui/core";
import CompleteOrder from "../CompleteOrder/CompleteOrder";


export default function Payment(props: any) {
    const context = useContext(DataContext);
    const [month_value, SetMonthValue] = useState("");
    const [bank_value, SetBankValue] = useState("");
    const [year_value, SetYearValue] = useState("");
    const [success, SetSuccess] = useState(false);
    const [pay_select, SetPaySelect] = useState(false);
    const [form, SetForm] = useState({
        form_data: {
            payment: ""
        },
        pg_form_url: ""
    });
    const [pay_select_index, SetPaySelectIndex] = React.useState(null);
    const paymentRef = useRef();

    // const paymentRef = 

    useEffect(() => {
        console.log("Payment On mount :", props);
        console.log("Payment On context :", context);
    }, []);

    async function Payment() {
        console.log("Payment :", context.app_data.checkout_data);

        let pass_data = {
            post: {
                data: context.app_data.checkout_data,
                payment_type: pay_select_index,
            },
        };
        let data_res: any = await api("/place_order", pass_data);
        console.log("post Payment response :", data_res.response);
        SetForm(data_res.response);
        console.log("paymentRef :", paymentRef);
        if (pay_select_index == 1) {
            paymentRef.current && paymentRef.current.submit();
        }
        // refs['payment'].submit();
        // const refs.paymentRef.getDOMNode().dispatchEvent(new Event("submit"));
    }
    // const { handleSubmit } = useForm();
    const onSubmit = data => {
        console.log("submit data: ", data);
    };

    return (
        <div className="page-main mb-4 px-sm-0 px-md-2">
            <div className="bg-fff center w-100">
                <div className="w-md-50 p-3">
                    <div className="">
                        <h6>Payment Details</h6>
                        <div className="mt-4 cursor pb-3 pt-3">
                            <label
                                className="flex mb-0"
                                onClick={() => {
                                    let index = 1;
                                    SetPaySelectIndex(index);
                                }}
                            >
                                <input type="radio" name="address" />
                                <div className="pl-2">
                                    <p className="text-dark">
                                        <b>Online Payment</b>
                                    </p>
                                </div>
                            </label>
                        </div>

                        <div className="cursor pb-3 pt-3">
                            <label
                                className="flex mb-0"
                                onClick={() => {
                                    let index = 2;
                                    SetPaySelectIndex(index);
                                }}
                            >
                                <input type="radio" name="address" />
                                <div className="pl-2">
                                    <p className="text-dark">
                                        <b>Pay on Delivery</b>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="mt-3 mb-sm-5 p-0 ">
                        <div className="flex align-center bg-light radius p-2">
                            <MaterialIcons name="verified-user" size={28} color="gray" />
                            <p className="pl-2 text-secondary">
                                Secure & Safe Payments on your One Super. Easy returns.
                            </p>
                        </div>
                        <div className="sm-none align-center mt-4 w-100 text-center">
                        <Link to="/complete_order?s=success">
                                <button className="btn btn-warning w-50 p-3">Continue</button>
                            </Link>
                        </div>
                    </div>
                    <Link to="/complete_order?s=success">
                    <div className="bg-warning bottom-fixed w-100 text-center md-none sm-block py-3 " form="payment-form" onClick={() => {
                        Payment();
                        // SetSuccess(true)
                    }}>Continue</div>
                    </Link>
                    <form method="post" action={form.pg_form_url} onSubmit={onSubmit(form)} ref={paymentRef}>
                        <input type="text" name="payment" className="d-none" value={form.form_data.payment} />
                    </form>
                </div>
            </div>

            <Modal open={success} onClose={() => { SetSuccess(false) }} className="center">
                <div className="">
                    <CompleteOrder onClose={() => { SetSuccess(false) }}  />
                </div>
            </Modal>

        </div>
    );
}


import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
    MaterialIcons,
    Ionicons,
    Entypo,
    AntDesign,
    Feather,
    FontAwesome,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import DataContext from "../../../utils/Context/DataContext";
import { api } from "../../../utils/Api";


export default function CartOptions(props: any) {
    const context = useContext(DataContext);
    const [addcart, SetAddCart] = useState({
        grocery: [
            {
                id: 1,
                shopname: "Super Grocery Shop",
                place: "Salem",
                item: 2,
                total: 250,
                checked: true,
                deliveryType: {
                    type: "Courier",
                    // type: "Hyper Local",
                    //  type: "Schedule Hyper Local",
                    //  type: "Take away",
                },
                shop_img: require("../../../assets/img/fill.jpg"),
                child: [
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.png"),
                            name: "Seed fruits",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },

                        variants: [
                            {
                                img_path: require("../../../assets/img/category/Drinks_snacks.jpg"),
                                name: "Amul Dairy ",
                                price: 50,
                                original_price: 50,
                                discount_price: 0,
                                qty: "250g",
                                addcount: 0,
                                addbtn: false,
                            },
                            {
                                img_path: require("../../../assets/img/category/Dairy_bakery.png"),
                                name: "Amul Dairy ",
                                price: 50,
                                original_price: 50,
                                discount_price: 0,
                                qty: "250g",
                                addcount: 0,
                                addbtn: false,
                            },
                        ],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.jpg"),
                            name: "Apple",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        variants: [
                            {
                                img_path: require("../../../assets/img/sub2.jpg"),
                                name: "Fresh fruits ",
                                price: 290,
                                original_price: 300,
                                discount_price: 10,
                                qty: "500g",
                                addcount: 0,
                                addbtn: false,
                            },
                            {
                                img_path: require("../../../assets/img/sub4.png"),
                                name: "Fruits ",
                                price: 310,
                                original_price: 350,
                                discount_price: 40,
                                qty: "1kg",
                                addcount: 0,
                                addbtn: false,
                            },
                        ],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.jpg"),
                            name: "Berries",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        variants: [],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.png"),
                            name: "Britania Biscuits",
                            price: 20,
                            original_price: 25,
                            discount_price: 5,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        variants: [],
                    },
                ],
            },
            {
                id: 2,
                shopname: "Fresh fruits",
                place: "Erode",
                item: 2,
                total: 250,
                checked: false,
                deliveryType: {
                    // type: "Hyper Local",
                    //  type: "hyper Local",
                    type: "Schedule Hyper Local",
                    //  type: "Take away",
                },
                // shop_img: require("../../../assets/img/fruits_bg.jpg"),
                child: [
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub2.png"),
                            name: "Grapes",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },

                        variants: [
                            {
                                img_path: require("../../../assets/img/category/Drinks_snacks.jpg"),
                                name: "Amul Dairy ",
                                price: 50,
                                original_price: 50,
                                discount_price: 0,
                                qty: "250g",
                                addcount: 0,
                                addbtn: false,
                            },
                            {
                                img_path: require("../../../assets/img/category/Dairy_bakery.png"),
                                name: "Amul Dairy ",
                                price: 50,
                                original_price: 50,
                                discount_price: 0,
                                qty: "250g",
                                addcount: 0,
                                addbtn: false,
                            },
                        ],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.jpg"),
                            name: "Pinnapple",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        variants: [
                            {
                                img_path: require("../../../assets/img/sub2.jpg"),
                                name: "Fresh fruits ",
                                price: 290,
                                original_price: 300,
                                discount_price: 10,
                                qty: "500g",
                                addcount: 0,
                                addbtn: false,
                            },
                            {
                                img_path: require("../../../assets/img/sub4.png"),
                                name: "Fruits ",
                                price: 310,
                                original_price: 350,
                                discount_price: 40,
                                qty: "1kg",
                                addcount: 0,
                                addbtn: false,
                            },
                        ],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.jpg"),
                            name: "Mango",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        variants: [],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.jpg"),
                            name: "Orange",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        variants: [],
                    },
                ],
            },
            {
                id: 3,
                shopname: "Grocery ",
                place: "Erode",
                item: 1,
                total: 250,
                checked: true,
                deliveryType: {
                    // type: "Inshop",
                    //  type: "hyper Local",
                    //  type: "Schedule Hyper Local",
                    type: "Take Away",
                },
                shop_img: require("../../../assets/img/category/Drinks_snacks.jpg"),
                child: [
                    {
                        selected: {
                            img_path: require("../../../assets/img/sub1.jpg"),
                            name: "Britania biscuits",
                            price: 200,
                            original_price: 250,
                            discount_price: 50,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },

                        variants: [
                            {
                                img_path: require("../../../assets/img/category/Drinks_snacks.jpg"),
                                name: "Amul Dairy ",
                                price: 50,
                                original_price: 50,
                                discount_price: 0,
                                qty: "250g",
                                addcount: 0,
                                addbtn: false,
                            },
                            {
                                img_path: require("../../../assets/img/category/Dairy_bakery.png"),
                                name: "Amul Dairy ",
                                price: 50,
                                original_price: 50,
                                discount_price: 0,
                                qty: "250g",
                                addcount: 0,
                                addbtn: false,
                            },
                        ],
                    },
                ],
            },
        ],
        food: [
            {
                id: 1,
                shopname: "Food corner",
                place: "Pallipalayam",
                item: 2,
                total: 100,
                checked: true,
                deliveryType: {
                    type: "Inshop",
                },
                shop_img: require("../../../assets/img/food3.png"),
                child: [
                    {
                        selected: {
                            img_path: require("../../../assets/img/food.png"),
                            name: "Burger",
                            price: 50,
                            original_price: 50,
                            discount_price: 0,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        addon: [
                            {
                                size: [
                                    { item: "Normal Size 150g" },
                                    { item: "Medium Size 320g" },
                                ],
                                add: [
                                    {
                                        add_products: "cheese 1Pic",
                                        cost: 20,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                    {
                                        add_products: "chicken 50g",
                                        cost: 50,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/food.png"),
                            name: "Burger",
                            price: 50,
                            original_price: 50,
                            discount_price: 0,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        addon: [
                            {
                                size: [
                                    { item: "Normal Size 150g" },
                                    { item: "Medium Size 320g" },
                                ],
                                add: [
                                    {
                                        add_products: "cheese 1Pic",
                                        cost: 20,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                    {
                                        add_products: "chicken 50g",
                                        cost: 50,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                shopname: "Special treat",
                place: "Pallipalayam",
                item: 2,
                total: 100,
                checked: false,
                deliveryType: {
                    type: "Hyper Local",
                },
                shop_img: require("../../../assets/img/images.jpeg"),
                child: [
                    {
                        selected: {
                            img_path: require("../../../assets/img/food.png"),
                            name: "Burger",
                            price: 50,
                            original_price: 50,
                            discount_price: 0,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        addon: [
                            {
                                size: [
                                    { item: "Normal Size 150g" },
                                    { item: "Medium Size 320g" },
                                ],
                                add: [
                                    {
                                        add_products: "cheese 1Pic",
                                        cost: 20,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                    {
                                        add_products: "chicken 50g",
                                        cost: 50,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        selected: {
                            img_path: require("../../../assets/img/food.png"),
                            name: "Burger",
                            price: 50,
                            original_price: 50,
                            discount_price: 0,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        addon: [
                            {
                                size: [
                                    { item: "Normal Size 150g" },
                                    { item: "Medium Size 320g" },
                                ],
                                add: [
                                    {
                                        add_products: "cheese 1Pic",
                                        cost: 20,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                    {
                                        add_products: "chicken 50g",
                                        cost: 50,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                shopname: "Fooddiee",
                place: "Erode",
                item: 1,
                total: 100,
                checked: false,
                deliveryType: {
                    type: "Schedule Hyper Local",
                },
                shop_img: require("../../../assets/img/food4.jpg"),
                child: [
                    {
                        selected: {
                            img_path: require("../../../assets/img/food.png"),
                            name: "Burger",
                            price: 50,
                            original_price: 50,
                            discount_price: 0,
                            qty: "250g",
                            addcount: 1,
                            addbtn: true,
                        },
                        addon: [
                            {
                                size: [
                                    { item: "Normal Size 150g" },
                                    { item: "Medium Size 320g" },
                                ],
                                add: [
                                    {
                                        add_products: "cheese 1Pic",
                                        cost: 20,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                    {
                                        add_products: "chicken 50g",
                                        cost: 50,
                                        addonCount: 0,
                                        addonbtn: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
        ecommerce: [
            {
                id: 1,
                img_path: require("../../../assets/img/nike.png"),
                name: "Nike Men's Collection Shoe brand",
                price: 300,
                original_price: 350,
                discount_price: 50,
                qty: "1",
                addcount: 1,
                addbtn: true,
                shopname: "Shoe Collections",
                checked: true,
                deliveryType: {
                    type: "Inshop",
                    // type: "Courier",
                    //  type: "hyper Local",
                    //  type: "Schedule Hyper Local",
                    //  type: "Take away",
                },
                variants: {
                    color: "Red & Black",
                    size: "10",
                    type: "",
                    addon: "",
                },
            },
            {
                id: 2,
                img_path: require("../../../assets/img/handbag.jpg"),
                name: "Leather Handbag Premium look collection",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "1",
                addcount: 1,
                addbtn: true,
                shopname: "Shoppy World",
                checked: false,
                deliveryType: {
                    // type: "Courier",
                    type: "Hyper Local",
                    //  type: "Schedule Hyper Local",
                    //  type: "Take away",
                },
                variants: {
                    color: "Light Maroon",
                    size: "Medium",
                    type: "",
                    addon: "",
                },
            },
            {
                id: 3,
                img_path: require("../../../assets/img/shirt1.jpg"),
                name: "Classic polo men's wear formal Shirts",
                price: 250,
                original_price: 250,
                discount_price: 0,
                qty: "1",
                addcount: 1,
                addbtn: true,
                shopname: "Shoppy world",
                checked: true,
                deliveryType: {
                    type: "Courier",
                    //  type: "hyper Local",
                    //  type: "Schedule Hyper Local",
                    //  type: "Take away",
                },
                variants: {
                    color: "Light gray",
                    size: "38 / M",
                    type: "",
                    addon: "",
                },
            },
            {
                id: 4,
                img_path: require("../../../assets/img/mob.png"),
                name: "Apple i7 New Modal mobile phone",
                price: 40000,
                original_price: 41200,
                discount_price: 1200,
                qty: "1",
                addcount: 1,
                addbtn: true,
                shopname: "i Market",
                checked: false,
                deliveryType: {
                    // type: "Courier",
                    //  type: "hyper Local",
                    //  type: "Schedule Hyper Local",
                    type: "Take Away",
                },
                variants: {
                    color: "red",
                    type: "touch",
                    size: "",
                    addon: "",
                },
            },
            {
                id: 5,
                img_path: require("../../../assets/img/sub1.jpg"),
                name: "Fresh Berries 3type berries",
                price: 200,
                original_price: 250,
                discount_price: 50,
                qty: "150g",
                addcount: 1,
                addbtn: true,
                shopname: "Super Grocery Shop",
                checked: false,
                deliveryType: {
                    // type: "Courier",
                    //  type: "hyper Local",
                    type: "Schedule Hyper Local",
                    //  type: "Take away",
                },
                variants: {
                    type: "3Berries",
                    color: "",
                    size: "",
                    addon: "",
                },
            },
            {
                id: 6,
                img_path: require("../../../assets/img/images.jpeg"),
                name: "Dhosa set",
                price: 50,
                original_price: 50,
                discount_price: 0,
                qty: "1",
                addcount: 1,
                addbtn: true,
                shopname: "Erode Restaurant",
                checked: false,
                deliveryType: {
                    // type: "Courier",
                    //  type: "hyper Local",
                    //  type: "Schedule Hyper Local",
                    type: "Take Away",
                },
                variants: {
                    addon: "Mushrooms",
                    size: "Medium",
                    type: "",
                    color: "",
                },
            },
        ],
    });
    const [select_delivery, SetSelectDelivery] = useState(false);
    const [width, SetWidth] = React.useState(innerWidth);
    const [expanded, SetExpanded] = useState(true);
    const [selected_type, SetSelectedType] = useState("");
    const [cart_data, SetCartData] = useState({});
    const [checked, SetChecked] = useState(false);


    useEffect(() => {
        console.log("Cartoptions On mount :", props);
        SetCartData(props.data)
    }, []);

    useEffect(() => {
        console.log("props On change :", props);
        SetCartData(props.data)
    }, [props]);

    const totalPrice = addcart.grocery.reduce(
        (total, item) =>
            total +
            item.child.reduce(
                (totalPrice, addon) => totalPrice + addon.selected.price,
                0
            ),

        0
    );

    async function updateQuantity(id: any, quantity: any) {
        if (quantity == 0) {
            console.log("prod remove data :", id, quantity);
            let pass_data = {
                post: {
                    cart_product_id: id,
                },
            };
            let data_res: any = await api("/remove_cart", pass_data);
            console.log("post remove_cart response :", data_res.response);
            SetCartData(data_res.response.cart);
        } else {
            console.log("prod update data :", id, quantity);
            let pass_data = {
                post: {
                    cart_product_id: id,
                    quantity: quantity
                },
            };
            let data_res: any = await api("/update_cart_quantity", pass_data);
            console.log("post updateQuantity response :", data_res.response);
            SetCartData(data_res.response.cart);
        }
    }

    function check(index) {
        console.log("Checked :", addcart.ecommerce[index].checked);
        // let check = this.state.addcart.ecommerce;
        // if (check[index].checked == false) {
        //   check[index].checked = true;
        //   this.setState({ addcart: check });
        // } else if (check[index].checked == true) {
        //     check[index].checked = false;
        //     this.setState({ addcart: check });
        // }
    };

    async function checkOut(data) {
        console.log("checkOut data :", data);

        let pass_data = {
            post: {
                data: {
                    vendors: [
                    ],
                    products: [
                    ]
                }
            },
        };
        data.vendors.map((ven) => {
            let vendor_object = {
                id: ven.id,
                section_id: ven.section_id,
                products: [],
                delivery: {
                    type: ven.delivery_type,
                    address: 1
                },
                section_image_url: ven.section_image_url,
                name: ven.name,
                variant_name: ven.variant_name,
            };
            ven.products.map((pro) => {

                vendor_object.products.push({ id: pro.id })
            })

            pass_data.post.data.vendors.push(vendor_object);
        })
        console.log("post checkout pass_data :", pass_data);

        let data_res: any = await api("/checkout", pass_data);
        console.log("post checkout response :", data_res);
        // SaveContext(data_res.response.data);
        context.SetAppData((prevValue) => {
            prevValue.checkout_data = data_res.response.data;
            prevValue.checkout_data.vendors_total_amount = data.vendors_total_amount;
            return { ...prevValue };
        });
    }

    function SaveContext(data) {
        context.SetAppData((prevValue) => {
            prevValue.checkout_data = data;
            // prevValue.checkout_data.section_image_url = 

            return { ...prevValue };
        });
        console.log("Data :", data);
    }



    return (
        <div className="page-main mb-4 px-0 w-100">
            <div className="row">
                <div className="col-md-8 p-0">

                    <div className="bg-fff p-2 pt-3 pt-md-4 mb-2">
                        <div className="form-check p-0">
                            <div className="row">
                                <div className="d-flex col-md-3 col-4 p-0">
                                    <div className="col-2 p-0">
                                        <label className="form-check-label m-0" >
                                            <input className={checked ? "form-check-input bg-prime1  m-0" : "form-check-input m-0"} type="checkbox" onChange={() => {
                                                // console.log("Check data:", vendor_data.total_amount);
                                                SetChecked(!checked);
                                            }} />
                                        </label>
                                    </div>

                                    <div className="cart_img ps-2 col-10 p-0">
                                        <Link to="/restaurant/restaurant_shop">
                                            {/* <img src={"https://cdn.1superapp.com/images/320/" + vendor_data.section_image_url} className="prod_img w-100" /> */}
                                            <img src={require("../../../assets/img/hd-wallpaper.jpg")} className="w-100 radius" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-md-9 col-8 pr-0">
                                    <p className="mb-0 text-dark">
                                        Cakes Shop (2)
                                    </p>
                                    <div className="row">
                                        <div className="col-10 pl-0">
                                            {/* <p>{data.place}</p> */}
                                            <p>Erode</p>
                                        </div>
                                        <div className="col-2 p-0 text-right cursor">
                                            <MaterialCommunityIcons
                                                name="delete-outline"
                                                size={18}
                                                color="gray"
                                            />
                                        </div>
                                    </div>

                                    <hr className="cart_shop_border" />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="row w-100 align-items-center pb-3">
                                {/* <div className="col-3 pl-0">
                                                            <img
                                                            src={value.selected.img_path}
                                                            className="w-100"
                                                            />
                                                        </div> */}
                                <div className="col-6 col-md-7">
                                    <div className="d-flex align-items-center">
                                        <Entypo name="dot-single" size={24} color="#555" />
                                        <p className="oneline ps-1">Black Forest Cake Piece</p>
                                    </div>
                                    {/* <p className="oneline">{prod.product_name}</p> */}
                                </div>
                                <div className="col-6 col-md-5">
                                    <div className="d-flex align-items-center">
                                        {/* {prod.quantity != 0 ? (
                                                    <div className="border offer center radius pl-2 pr-2 w-100">
                                                        <div
                                                            className="cursor w-25"
                                                            onClick={() => {
                                                                updateQuantity(prod.id, parseInt(prod.quantity) - 1);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="minus"
                                                                size={18}
                                                                color="#000"
                                                            />
                                                        </div>
                                                        <div className="w-50 text-center">
                                                            <p className="w-100 mb-0 text-dark fw-bold">
                                                                {prod.quantity}
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="cursor w-25 text-right"
                                                            onClick={() => {
                                                                updateQuantity(prod.id, parseInt(prod.quantity) + 1);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="plus"
                                                                size={18}
                                                                color="#000"
                                                            />
                                                        </div>
                                                    </div>
                                                ) : ( */}
                                        <div
                                            className="offer w-50 cursor text-center p-2"
                                            onClick={() => {
                                                // addcart(index, child_index);
                                            }}
                                        >
                                            <p className="text-prime1">Add</p>
                                        </div>
                                        {/* )} */}

                                        <div className="ps-2">
                                            {/* {value.selected.price ==
                                                value.selected.original_price ? (
                                                ""
                                            ) : (
                                                <p className="pl-1">
                                                    <s>
                                                        <sub>
                                                            ₹ {prod.price}
                                                        </sub>
                                                    </s>
                                                </p>
                                            )} */}

                                            <p className="text-right text-dark fw-bold">
                                                ₹ 200
                                                {/* ₹ {prod.price} */}
                                            </p>
                                        </div>
                                    </div>


                                </div>


                            </div>

                            <div className="row w-100 align-items-center pb-3">
                                {/* <div className="col-3 pl-0">
                                                            <img
                                                            src={value.selected.img_path}
                                                            className="w-100"
                                                            />
                                                        </div> */}
                                <div className="col-6 col-md-7">
                                    <div className="d-flex align-items-center">
                                        <Entypo name="dot-single" size={24} color="#555" />
                                        <p className="oneline ps-1">Black Forest Cake Piece</p>
                                    </div>
                                    {/* <p className="oneline">{prod.product_name}</p> */}
                                </div>
                                <div className="col-6 col-md-5">
                                    <div className="d-flex align-items-center">
                                        {/* {prod.quantity != 0 ? (
                                                    <div className="border offer center radius pl-2 pr-2 w-100">
                                                        <div
                                                            className="cursor w-25"
                                                            onClick={() => {
                                                                updateQuantity(prod.id, parseInt(prod.quantity) - 1);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="minus"
                                                                size={18}
                                                                color="#000"
                                                            />
                                                        </div>
                                                        <div className="w-50 text-center">
                                                            <p className="w-100 mb-0 text-dark fw-bold">
                                                                {prod.quantity}
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="cursor w-25 text-right"
                                                            onClick={() => {
                                                                updateQuantity(prod.id, parseInt(prod.quantity) + 1);
                                                            }}
                                                        >
                                                            <Entypo
                                                                name="plus"
                                                                size={18}
                                                                color="#000"
                                                            />
                                                        </div>
                                                    </div>
                                                ) : ( */}
                                        <div
                                            className="offer w-50 cursor text-center p-2"
                                            onClick={() => {
                                                // addcart(index, child_index);
                                            }}
                                        >
                                            <p className="text-prime1">Add</p>
                                        </div>
                                        {/* )} */}

                                        <div className="ps-2">
                                            {/* {value.selected.price ==
                                                value.selected.original_price ? (
                                                ""
                                            ) : (
                                                <p className="pl-1">
                                                    <s>
                                                        <sub>
                                                            ₹ {prod.price}
                                                        </sub>
                                                    </s>
                                                </p>
                                            )} */}

                                            <p className="text-right text-dark fw-bold">
                                                ₹ 200
                                                {/* ₹ {prod.price} */}
                                            </p>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>

                        <div>
                            <div className="row pb-3 pt-2">
                                <h6 className="mb-2 mt-2 pl-0">Payment Details</h6>
                                <div className="col-6">
                                    <p>
                                        Subtotal <small>(1 Items)</small>
                                        {/* Subtotal <small>({vendor_data.products.length} Items)</small> */}
                                    </p>
                                </div>
                                <div className="col-6 text-right">
                                    <p>₹ 200</p>
                                    {/* <p>₹ {vendor_data.total_amount}</p> */}
                                </div>
                                <div className="col-6 py-2">
                                    <p>Discount Price</p>
                                </div>
                                <div className="col-6 text-right py-2">
                                    <p>- ₹20</p>
                                </div>
                                {/* <hr className="m-2 ml-0" /> */}

                                <div className="row border-top pt-2 pl-0 pr-0">
                                    <div className="col-6 p-0">
                                        <h5>Total</h5>
                                    </div>
                                    <div className="col-6 text-right p-0">
                                        <h5>₹ 220</h5>
                                        {/* <h5>₹ {vendor_data.total_amount}</h5> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row align-center bg-light-color p-2 radius">
                                <div className="col-5 p-0 sm-small-col">
                                    <small className="sm-small-text">Delivery types</small>
                                </div>
                                <div className="col-7 p-0">
                                    <div className="flex  justify-end">
                                        {/* {vendor_data.delivery_type.courier_order == true ? (
                                                <div className="pr-3">
                                                    <img
                                                        src={require("../../../assets/icon/box.png")}
                                                        className="w-10"
                                                    />
                                                </div>
                                            ) : ( */}
                                        <div className="pr-3">
                                            <img
                                                src={require("../../../assets/icon/box1.png")}
                                                className="w-10"
                                            />
                                        </div>
                                        {/* )} */}

                                        {/* {vendor_data.delivery_type.hyperlocal_order == true ? (
                                                <div className="pr-3">
                                                    <img
                                                        src={require("../../../assets/icon/delivery.png")}
                                                        className="w-10"
                                                    />
                                                </div>
                                            ) : ( */}
                                        <div className="pr-3">
                                            <img
                                                src={require("../../../assets/icon/delivery1.png")}
                                                className="w-10"
                                            />
                                        </div>
                                        {/* )} */}

                                        {/* {vendor_data.delivery_type.inshop_order == true ? (
                                                <div className="pr-3">
                                                    <img
                                                        src={require("../../../assets/icon/store.png")}
                                                        className="w-10"
                                                    />
                                                </div>
                                            ) : ( */}
                                        <div className="pr-3">
                                            <img
                                                src={require("../../../assets/icon/store1.png")}
                                                className="w-10"
                                            />
                                        </div>
                                        {/* )} */}

                                        {/* {vendor_data.delivery_type.takeaway_order == true ? (
                                                <div className="pr-3">
                                                    <img
                                                        src={require("../../../assets/icon/take-away.png")}
                                                        className="w-10"
                                                    />
                                                </div>
                                            ) : ( */}
                                        <div className="pr-3">
                                            <img
                                                src={require("../../../assets/icon/take-away1.png")}
                                                className="w-10"
                                            />
                                        </div>
                                        {/* )} */}

                                        {/* {vendor_data.delivery_type.Schedule == true ? (
                                                <div className="">
                                                    <img
                                                        src={require("../../../assets/icon/delivery-truck.png")}
                                                        className="w-10"
                                                    />
                                                </div>
                                            ) : ( */}
                                        <div className="">
                                            <img
                                                src={require("../../../assets/icon/delivery-truck1.png")}
                                                className="w-10"
                                            />
                                        </div>
                                        {/* )} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        {addcart.ecommerce.map((data, index) => (
                            <div key={index} className="">
                                <div className="bg-fff p-2 pb-3 pt-3 mb-2">
                                    <label className="label d-flex">
                                        <input className={data.checked ? "form-check-input bg-prime1" : "form-check-input"} type="checkbox" checked={data.checked} />
                                        <p className="pl-1 text-dark">
                                            {data.name} ({data.qty})
                                        </p>
                                    </label>
                                    <div className="row">
                                        <div className="col-3 p-0 cursor">
                                            <Link to={width < 720 ? "/ecommerce/ecommerce_mobile_product_details" : "/ecommerce/ecommerce_product_details"}>
                                                <div className="productimg">
                                                    <img src={data.img_path} className="w-100" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-9 pr-0 ps-2">

                                            <p className="">
                                                {data.variants.color ? (
                                                    <small className="px-1 border-right">
                                                        Color: {data.variants.color}
                                                    </small>
                                                ) : (
                                                    ""
                                                )}

                                                {data.variants.size ? (
                                                    <small className="px-1 border-right">
                                                        Size: 10
                                                    </small>
                                                ) : (
                                                    ""
                                                )}
                                                {data.variants.type ? (
                                                    <small className="px-1 border-right">
                                                        Type: {data.variants.type}
                                                    </small>
                                                ) : (
                                                    ""
                                                )}
                                                {data.variants.addon ? (
                                                    <small className="px-1 border-right">
                                                        Addon: Onion
                                                    </small>
                                                ) : (
                                                    ""
                                                )}
                                            </p>
                                            <div className="pt-1">
                                                <p className="text-black">
                                                    Sold by {data.shopname}
                                                </p>
                                            </div>

                                                <div className="row align-items-center pt-2">
                                                    <div className="col-6 p-0">
                                                        <div className="flex align-center">
                                                            <p className="mb-0 fs-7 text-dark">₹ {data.price}</p>
                                                            <p className="pl-1 extra-small">
                                                                <s>
                                                                    ₹ {data.original_price}
                                                                </s>
                                                            </p>
                                                            {/* {data.discount_price != 0 ? (
                                                                <p className="pl-1 text-green">
                                                                    ₹{data.discount_price} OFF
                                                                </p>
                                                            ) : (
                                                                ""
                                                            )} */}
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pe-0">
                                                        {data.addbtn ? (
                                                            <div className="flex offer center p-1">
                                                                <div
                                                                    className="cursor w-25"
                                                                    onClick={() => {
                                                                        prodminus(index);
                                                                    }}
                                                                >
                                                                    <Entypo
                                                                        name="minus"
                                                                        size={18}
                                                                        color="#0058b0"
                                                                    />
                                                                </div>
                                                                <div className="w-50">
                                                                    <p className="w-100">
                                                                        <b className="text-primary">
                                                                            {data.addcount}
                                                                        </b>
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="cursor w-25"
                                                                    onClick={() => {
                                                                        prodadd(index);
                                                                    }}
                                                                >
                                                                    <Entypo name="plus" size={18} color="#0058b0" />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div
                                                                className="offer p-2 cursor text-center "
                                                                onClick={() => {
                                                                    prodaddcart(index);
                                                                }}
                                                            >
                                                                <p className="w-100 text-primary">Add</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                            {/* <hr className="cart_shop_border" /> */}
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <div className="row align-items-center bg-light-color p-2 radius">
                                            <div className="col-5 p-0 sm-small-col">
                                                <small className="sm-small-text">Delivery types</small>
                                            </div>
                                            <div className="col-7 p-0">
                                                <div className="flex  justify-end">
                                                    <div className="pr-3">
                                                        <img
                                                            src={require("../../../assets/icon/store.png")}
                                                            className="w-10"
                                                        />
                                                    </div>
                                                    <div className="pr-3">
                                                        <img
                                                            src={require("../../../assets/icon/box.png")}
                                                            className="w-10"
                                                        />
                                                    </div>
                                                    <div className="pr-3">
                                                        <img
                                                            src={require("../../../assets/icon/delivery1.png")}
                                                            className="w-10"
                                                        />
                                                    </div>
                                                    <div className="pr-3">
                                                        <img
                                                            src={require("../../../assets/icon/delivery-truck2.png")}
                                                            className="w-10"
                                                        />
                                                    </div>
                                                    <div className="">
                                                        <img
                                                            src={require("../../../assets/icon/take-away1.png")}
                                                            className="w-10"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}


                    </div>
                </div>
                <div className="col-4 px-1 md-d-block sm-d-none">
                    <div className="sticky-150px">
                        <div className="pt-4 p-3 bg-fff border-left">
                            <div className="row">
                                <h6 className="mb-3 pl-0">Payment Details</h6>
                                <div className="col-6 pb-2">
                                    <p>
                                        Products Subtotal <small>(6 Items)</small>
                                    </p>
                                </div>
                                <div className="col-6 text-right pb-2">
                                    <p>₹ {totalPrice}</p>
                                </div>
                                <div className="col-6 pb-2">
                                    <p>
                                        Vendors1 Subtotal <small>(6 Items)</small>
                                    </p>
                                </div>
                                <div className="col-6 text-right pb-2">
                                    <p>₹ 200</p>
                                </div>
                                {/* <hr className="m-2" /> */}
                                <div className="col-6 pb-2">
                                    <p>Discount Price</p>
                                </div>
                                <div className="col-6 text-right pb-2">
                                    <p>- ₹0</p>
                                </div>
                                <hr className="my-2 ml-0" />

                                <div className="col-6">
                                    <h6>Total</h6>
                                </div>
                                <div className="col-6 text-right">
                                    <h6>₹ {totalPrice}</h6>
                                </div>
                            </div>
                            <div className="py-3">

                                <Link to="/order_address">
                                    <div className="center shadow w-100  p-3 bg-prime1 radius">
                                        <h6 className=" text-white mb-0">Proceed to Checkout</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="d-sm-block d-md-none">
                <div className="mt-3 pb-3">
                    <div className="row p-3 bg-fff border-top-radius">
                        <h6 className="mb-3 pl-0">Payment Details</h6>
                        <div className="col-6">
                            <p>
                                Subtotal <small>(6 Items)</small>
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <p>₹ {totalPrice}</p>
                        </div>
                        {/* <hr className="m-2" /> */}
                        <div className="col-6 pt-2">
                            <p>Discount Price</p>
                        </div>
                        <div className="col-6 text-right pt-2">
                            <p>- ₹0</p>
                        </div>
                        <hr className="my-2 ml-0" />

                        <div className="col-6">
                            <h6>Total</h6>
                        </div>
                        <div className="col-6 text-right">
                            <h6>₹ {totalPrice}</h6>
                        </div>
                    </div>
                </div>

                <Link to="/order_address">
                    <div className="bottom-fixed shadow d-flex align-center px-2 py-3 bg-prime1 md-none w-100" onClick={() => {
                        // checkOut(cart_data);
                    }}>
                        <div className="col-7 p-0">
                            <h6 className="text-white mb-0">Proceed to Checkout</h6>
                            <p className="pr-1 text-white mb-0 extra-small">(1 Item)</p>
                        </div>
                        <div className="col-5 pr-0 text-end">
                            <h6 className="pl-1 text-white mb-0">₹ 220</h6>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    );
}
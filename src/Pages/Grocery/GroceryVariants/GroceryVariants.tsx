import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { Compare } from "@material-ui/icons";
import { NavItem } from "react-bootstrap";
import { api } from "../../../utils/Api";
const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  200: { items: 2 },
  300: { items: 3 },
  350: { items: 3 },
  548: { items: 4 },
  720: { items: 6 },
  1024: { items: 10 },
};
export default function GroceryVariants(props: any) {
  const context = useContext(DataContext);
  const [width, SetWidth] = React.useState(innerWidth);
  const [selected_value, SetSelectedValue] = useState({});
  const [selected_index, SetSelectedIndex] = useState();
  const [product_data, SetProductData] = useState([
    {
      capacity: "500 MLit",
      child: [
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Gray",
          color_code: "gray",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: true,
          addcount: 1,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light blue",
          color_code: "#a9b7d2",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light gray",
          color_code: "#a2a4b1",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light blue",
          color_code: "#a9b7d2",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light gray",
          color_code: "#a2a4b1",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Gray",
          color_code: "gray",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
      ],
    },
    {
      capacity: "1 Lit",
      child: [
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Gray",
          color_code: "gray",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: true,
          addcount: 1,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light blue",
          color_code: "#a9b7d2",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light gray",
          color_code: "#a2a4b1",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light blue",
          color_code: "#a9b7d2",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Light gray",
          color_code: "#a2a4b1",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
        {
          img: require("../../../assets/img/products/groce3.png"),
          product_clr: "Gray",
          color_code: "gray",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
      ],
    },
    {
      capacity: "L",
      child: [
        {
          img: require("../../../assets/img/products/groce4.png"),
          product_clr: "Light Pink",
          color_code: "#d9bea8",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
      ],
    },
    {
      capacity: "XL",
      child: [
        {
          img: require("../../../assets/img/products/groce5.png"),
          product_clr: "Light Maroon",
          color_code: "#a98d77",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
      ],
    },
    {
      capacity: "2XL",
      child: [
        {
          img: require("../../../assets/img/products/groce6.png"),
          product_clr: "Light gray",
          color_code: "#a2a4b1",
          price: 339,
          offer: 60,
          org_price: 399,
          seller: "Super Fashion",
          estimate: "3days",
          shipping: 30,
          addbtn: false,
          addcount: 0,
          rating: 4.0,
        },
      ],
    },
  ]);
  const [variant_data, SetVariantData] = useState({});
  const [item_active, SetItemActive] = useState(false);


  function fix_decimal(data) {
    let value = data;
    return value.toFixed(1);
  }

  useEffect(() => {
    console.log("GroceryVariants On mount :", props);
    SetVariantData(props.value);
    console.log("variant data", variant_data);
    // console.log("variants", variant_data.variants);
    // VariantsFilter(props.value);
    context.SetAppData((prevValue) => {
      prevValue.backHaves = props.backHaves;
      // prevValue.sections.sections_slug = props.value.sellers[0].name;
      return { ...prevValue };
    });
  }, [props.value]);


  async function addCart(variant) {
    console.log("res selected_products :", variant);

    let pass_data = {
      get: {
        // section_slug: "zomoto",
      },
      post: {
        seller_id: variant.sellers[0].id,
        section_slug: context.app_data.sections.sections_slug,
        product_id: context.app_data.products.id,
        variant_id: variant.variants[0].id,
        quantity: "1",
        addons: [
          {
            id: variant.variants[0].addon[0].id,
            items: [
              {
                id: variant.variants[0].addon[0].items[0].id,
                quantity: "1",
                checked: true,
              }
            ]
          }
        ],
      },
    };
    console.log("res pass_data :", pass_data);
    let data_res = await api("/add_to_cart", pass_data);
    console.log("res add_to_cart :", data_res);
  }


  function VariantsFilter(data) {
    const specif = data.variant_specifications.map((veriant_spec, index) =>
      <li key={index}>{veriant_spec.name}</li>
    );
    return <div>{specif}</div>
  }

  // function addcart(i, c_i) {
  //   console.log("add card :", i, c_i);
  //   let cart_open = product_data;
  //   if (cart_open[i].child[c_i].addcount == 0) {
  //     if (cart_open[i].child[c_i].addbtn == false) {
  //       cart_open[i].child[c_i].addbtn = true;
  //       cart_open[i].child[c_i].addcount = cart_open[i].child[c_i].addcount + 1;
  //       SetProductData(cart_open);
  //     }
  //   }
  //   // cart_open.push();
  //   console.log("new product data push: ", product_data[i].child[c_i]);
  // }

  // function add(i, c_i) {
  //   let cart_add = product_data;
  //   if (cart_add[i].child[c_i].addbtn == true) {
  //     cart_add[i].child[c_i].addcount = cart_add[i].child[c_i].addcount + 1;
  //     SetProductData(cart_add);
  //   }
  //   console.log("add product data : ", product_data[i].child[c_i]);
  // }

  // function minus(i, c_i) {
  //   let cart_minus = product_data;
  //   let count = cart_minus[i].child[c_i].addcount - 1;
  //   console.log("count :", count);
  //   if (count == 0) {
  //     cart_minus[i].child[c_i].addbtn = false;
  //     cart_minus[i].child[c_i].addcount = 0;
  //   } else {
  //     cart_minus[i].child[c_i].addcount = count;
  //   }
  //   SetProductData(cart_minus);
  //   console.log("minus product data: ", product_data[i].child[c_i]);
  // }


  function ItemChecked(index, main_index) {
    SetVariantData((pre) => {
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
    SetItemActive(!item_active);
    console.log("units Active:", variant_data);
};

  return (
    <div className="page-main mb-5 p-0 bg-fff pt-2">

      <div className="mb-5 mt-2 overflowX-hidden">
        <div className="row react-tabs pb-5" >

          {variant_data.variant && variant_data.variant.map((value, index) => (

            <div key={index} className="ps-0 ">
              {value.variant_specifications && value.variant_specifications.map((spec, vs_index) => (
                <div className="border-top mb-0" key={vs_index}>
                  <div className="d-flex align-items-center text-center ">
                    <div className="w-80px bg-gray-200 pb-2">
                      <p className="text-dark fw-bold w-80px mb-0 px-3 py-2">{spec.name}</p>
                    </div>
                    <AliceCarousel
                      mouseTracking
                      touchMoveDefaultEvents={false}
                      // items={productsRestraunt}
                      disableDotsControls
                      responsive={responsive}
                      disableButtonsControls
                      controlsStrategy="alternate"
                    >
                      {spec.items.map((item, item_index) => (

                        <label className={item.id == selected_value.id ? "tab-hidden text-center text-prime1 form-label cursor mb-0 py-2" : "py-2 tab-hidden text-center text-gray form-label cursor mb-0"}
                          label={item.id} key={item_index} onClick={() => {
                            // ItemChecked(item_index, vs_index)
                            SetItemActive(!item_active);
                            // console.log("Click value: ", selected_value.id);
                            // console.log("Click value: ", item.id);
                            // console.log("Click value: ", item_index);
                            // itemChecked(i, v_index);
                          }}>
                          <input type="radio" />
                          <p className="">{item.name}</p>
                        </label>
                      ))}
                    </AliceCarousel>
                  </div>
                </div>
              ))}

              <div className="mb-5 p-0 pb-5 scroll">
                <h6 className="p-3 pb-0 mb-0">Products</h6>
                  <div
                    className="row pt-3 center pb-3 border-bottom"
                  >
                    <div className="col-4 ps-sm-0 ps-md-1 ">
                      {/* <img src={"https://cdn.1superapp.com/images/320/" + variant_data.images[0].url} className="variant-img" /> */}
                      <div className="bg-gray-500">
                        <img src={variant_data.img_path} className="prods-img" />
                      </div>
                    </div>
                    <div className="col-8 ps-0">

                      <p className="text-dark fw-bold oneline">{variant_data.name}</p>
                      <div className="d-flex align-items-center mt-1">
                        <h6 className="m-0">₹750</h6>
                        <p className="ps-2 m-0 v-small">
                          <s>₹790</s>
                        </p>
                        <p className="green pl-1 v-small fw-bold">5% Off</p>
                        <div className="ms-auto">
                          <p className="pe-1 text-orange">
                            {(4.26).toFixed(1)}★
                          </p>
                        </div>
                      </div>
                      <div className="estimate mt-1">
                        <p className="v-small">Estimated delivery by <span className="text-dark fw-bold">Tuesday</span> | <span className="fw-bold text-green">₹20</span></p>
                      </div>
                      <p className="estimate flex mb-0 extra-small mt-1">
                        Seller
                        <span className="ps-1 text-red fw-bold">Freash Arrivals</span>
                      </p>

                      <div className="pt-2 w-50">
                        {/* {selected_value.id == link ? (
                        <div className="flex variant-box center">
                          <div
                            className="cursor pr-1"
                            onClick={() => {
                              // minus(v_index, link_index);
                              // console.log("minus data:", variant);
                            }}
                          >
                            <AntDesign
                              name="minus"
                              size={18}
                              color="#000"
                            />
                          </div>
                          <div className="w-25">
                            <p className="w-100">
                              {/* <b>{data.addcount}</b> *}
                            </p>
                          </div>
                          <div
                            className="cursor pl-1 "
                            onClick={() => {
                              // add(v_index, link_index);
                              // console.log("add data:", variant);
                            }}
                          >
                            <AntDesign
                              name="plus"
                              size={14}
                              color="#000"
                            />
                          </div>
                        </div>

                        ) : ( */}
                        <div
                          className="px-3 py-2 shadow cursor text-center "
                          onClick={() => {
                            // addcart(v_index, link_index);
                            // console.log("add items:", variant);
                          }}
                        >
                          <p className="w-100 text-red">Add</p>
                        </div>
                        {/* )} */}
                      </div>
                    </div>

                  </div>


                  <div className="bottom-fixed w-100 mt-3">
                    <div className="row center ">
                      <div className="col-6 p-0">
                        <Link to="/sidemenuopen/cart">
                          <div
                            className="bg-white w-100 center py-2 inset-border text-red"
                            onClick={() => {
                              console.log("Add cart: ", variant_data);
                              addCart(variant_data);
                            }}
                          >
                            {/* <h6 className="text-primary mb-0"></h6> */}
                            Add Cart
                          </div>
                        </Link>
                      </div>
                      <div className="col-6 align-bottom p-0">
                        <Link to="/order_address">
                          <div className="bg-danger w-100 center py-2 inset-border text-white">
                            {/* <h6 className="text-white mb-0"></h6> */}
                            Buy Now
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

          ))}

        </div>
      </div>



      {/* {variant_data.map((value, index) => (


      <div className="mb-5 bg-fff ">
         <div className="row react-tabs pb-5" >


          {variant_data.variant_specifications && variant_data.variant_specifications.map((spec, vs_index) => (
            <div className="border-bottom mb-0" key={vs_index}>
              <div className="d-flex align-items-center text-center w-100 py-1">
                <p className="text-dark fw-bold width-20 mb-0">{spec.name}</p>
                <AliceCarousel
                  mouseTracking
                    touchMoveDefaultEvents={false}
                  // items={productsRestraunt}
                  disableDotsControls
                  responsive={responsive}
                  disableButtonsControls
                  controlsStrategy="alternate"
                  className="w-80 text-center"
                >
                  {spec.items.map((item, item_index) => (

                    <label className={item.id == selected_value.id ? "tab-hidden text-center text-prime1 form-label cursor mb-0" : "tab-hidden text-center text-gray form-label cursor mb-0"}
                      label={item.id} key={item_index} onChange={() => {
                        SetSelectedValue(item);
                        console.log("Click value: ", selected_value.id);
                        console.log("Click value: ", item.id);
                        console.log("Click value: ", item_index);
                      }}>
                      <input type="radio" />
                      <p className="pb-2">{item.name}</p>
                    </label>
                  ))}
                </AliceCarousel>
              </div>
            </div>
          ))}

          <div className="mb-5 p-0 pb-5 scroll">
             <h6 className="p-3 pb-0 mb-0">Color</h6> 
            {variant_data.variants && variant_data.variants.map((variant, v_index) => (
              // {product_data.map((value, index) => (
              <div key={v_index} className="md-d-block">
                {variant.variants_link.map((link, link_index) => (
                  // selected_value.id == link ? (
                  <div
                    className="row pt-3 center pb-3 border-bottom" key={link_index}
                  >
                    <div className="col-3 pl-1">
                      <img src={"https://cdn.1superapp.com/images/320/" + variant.images[0].url} className="variant-img" />
                    </div>
                    <div className="col-6 p-0">

                      <div className="flex align-center" onClick={() => {
                        console.log("Link :", link);
                        console.log("selected_value id :", selected_value.id);
                      }}>
                        <div
                          className="variants_clr"
                          style={{ backgroundColor: selected_value.name }}
                        ></div>
                        <p className="pr-1">{selected_value.name}</p>
                        <p className="pr-2 golden center">
                           {fix_decimal(data.rating)}★ 
                          {fix_decimal(4.0)}★
                        </p>
                      </div>

                      <div className="flex align-center">
                        <div
                          className="variants_clr"
                          style={{ backgroundColor: data.color_code }}
                        ></div>
                        <p className="pr-1">{data.product_clr}</p>
                        <p className="pr-2 golden center">
                          {fix_decimal(data.rating)}★
                        </p>
                      </div> 
                      <p className="text-dark fw-bold">{variant.name}</p>
                      {/* <div className="flex mt-1">
                        <h6 className="m-0">₹{data.price}</h6>
                        <s>
                          <small className="ml-1">₹{data.org_price}</small>
                        </s>
                        <p className="green pl-1">
                          <small>₹{data.offer} Off</small>
                        </p>
                      </div> 
                      {/* <div className="estimate">
                        Estimated delivery by {data.estimate} | ₹
                        {data.shipping}
                      </div>
                      <div className="estimate flex">
                        Seller
                        <div className="pl-1 text-primary">
                          <b>{data.seller}</b>
                        </div>
                    </div> *
                    </div>

                    <div className="col-3 pl-0 pr-1">
                      <div className="text-center">
                        {/* {data.addbtn == true ? ( *
                        {selected_value.id == link ? (
                          <div className="flex variant-box center">
                            <div
                              className="cursor pr-1"
                              onClick={() => {
                                // minus(v_index, link_index);
                                console.log("minus data:", variant);
                              }}
                            >
                              <AntDesign
                                name="minus"
                                size={18}
                                color="#000"
                              />
                            </div>
                            <div className="w-25">
                              <p className="w-100">
                                {/* <b>{data.addcount}</b> *
    </p>
                            </div >
    <div
      className="cursor pl-1 "
      onClick={() => {
        // add(v_index, link_index);
        console.log("add data:", variant);
      }}
    >
      <AntDesign
        name="plus"
        size={14}
        color="#000"
      />
    </div>
                          </div >

                        ) : (
    <div
      className="variant-box cursor text-center "
      onClick={() => {
        // addcart(v_index, link_index);
        console.log("add items:", variant);
      }}
    >
      <p className="w-100">Add</p>
    </div>
  )
}
                      </div >
                    </div >

                  </div >
                  // ) : (null)
                ))}

<div className="bottom w-100 mt-3">
  <div className="row center ">
    <div className="col-6 p-0">
      <Link to="/sidemenuopen/cart">
        <div
          className="bg-white w-100 center py-2 inset-border text-primary"
          onClick={() => {
            console.log("Add cart: ", variant_data);
            addCart(variant_data);
          }}
        >
          {/* <h6 className="text-primary mb-0"></h6> *
                          Add Cart
                        </div>
                      </Link>
                    </div>
                    <div className="col-6 align-bottom p-0">
                      <Link to="/order_address">
                        <div className="bg-primary w-100 center py-2 inset-border text-white">
                          {/* <h6 className="text-white mb-0"></h6> *
                          Buy Now
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       ))}  */}


    </div>


  );
}
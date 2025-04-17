import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  List,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Slider,
  Badge,
} from "@material-ui/core";
import Select, { components } from "react-select";
import createClass from "create-react-class";
import { Ionicons } from "@expo/vector-icons";

// const Option = createClass({
//         return (
//             <div className="w-100 ">
//                 <components.Option {...props}>
//                     <input
//                         type="checkbox"
//                         checked={props.isSelected}
//                         onChange={(e) => null}
//                     />{" "}
//                     <label>{props.value} </label>
//                 </components.Option>
//             </div>
//         );
// });

// const MultiValue = (props) => {
//     return (
//         <components.MultiValue {...props}>
//             <List height={140}>
//                 <span>{props.data.label}</span>
//             </List>
//         </components.MultiValue>
//     );
// };

const brand_data = [
  { id: 1, value: "Dell", label: "dell" },
  { id: 2, value: "Apple Mac", label: "Apple Mac" },
  { id: 3, value: "Microsoft", label: "Microsoft" },
  { id: 4, value: "Hp", label: "hp" },
  { id: 5, value: "Acer", label: "acer" },
  { id: 6, value: "Lenovo", label: "lenovo" },
];
const checkbox_data = [
  {
    id: 1,
    title: "Rating",
    childern: [
      { id: 1, value: "4 ★ above" },
      { id: 2, value: "3 ★ above" },
      { id: 3, value: "2 ★ above" },
      { id: 4, value: "1 ★ above" },
      { id: 5, value: "1 ★ below" },
    ],
  },
  {
    id: 2,
    title: "Offer",
    childern: [
      { id: 1, value: "Buy More, Save More" },
      { id: 2, value: "Special Offer" },
    ],
  },
  {
    id: 3,
    title: "Discount",
    childern: [
      { id: 1, value: "30% or more" },
      { id: 2, value: "20% or more" },
      { id: 3, value: "10% or more" },
      { id: 4, value: "10% or below" },
    ],
  },
  {
    id: 4,
    title: "Availability",
    childern: [{ id: 1, value: "Include Out of Stock" }],
  },

  {
    id: 5,
    title: "Sort by",
    childern: [
      { id: 1, value: "Low to High Price" },
      { id: 2, value: "High to Low Price" },
      { id: 3, value: "Best selling" },
    ],
  },
];
const category_data = [
  {
    id: 1,
    src: require("../../../assets/img/sandal.png"),
    name: "Chappal Shoes",
  },
  {
    id: 2,
    src: require("../../../assets/img/footwear.png"),
    name: "Men's Sandal",
  },
  {
    id: 3,
    src: require("../../../assets/img/designSandal.png"),
    name: "Girl's Sandal",
  },
  {
    id: 4,
    src: require("../../../assets/img/crystalSandal.png"),
    name: "Open Toe",
  },
  {
    id: 5,
    src: require("../../../assets/img/partyWear.png"),
    name: "Velvet loafer",
  },
  {
    id: 6,
    src: require("../../../assets/img/leather.png"),
    name: "Leather Shoes",
  },
  {
    id: 7,
    src: require("../../../assets/img/shoe1.png"),
    name: "Lace Shoes",
  },
  {
    id: 8,
    src: require("../../../assets/img/menSandal.png"),
    name: "Formal Sandal",
  },
  {
    id: 9,
    src: require("../../../assets/img/shoe.png"),
    name: "Casual Shoes",
  },
];
const sellers = [
  {
    id: 1,
    name: "Online market",
  },
  {
    id: 2,
    name: "Ecom",
  },
  {
    id: 3,
    name: "Baby store",
  },
  {
    id: 4,
    name: "New fashions",
  },
  {
    id: 5,
    name: "First selling",
  },
];

export default function Filter(props: any) {
  const context = useContext(DataContext);

  const [width, SetWidth] = React.useState(innerWidth);
  const [expanded, SetExpanded] = useState("panel1");
  const [checked, SetChecked] = useState(false);
  const [brand_checked, SetBrandChecked] = useState(true);
  const [rate_checked, SetRateChecked] = useState(false);
  const [offer_checked, SetOfferChecked] = useState(false);
  const [discount_checked, SetDiscountChecked] = useState(false);
  const [avail_checked, SetAvailChecked] = useState(false);
  const [category_checked, SetCategoryChecked] = useState(false);
  const [price_checked, SetPriceChecked] = useState(false);
  const [sort_checked, SetSortChecked] = useState(false);
  const [seller_checked, SetSellerChecked] = useState(false);
  const [menu_type, SetMenuType] = useState("");
  const [price_value, SetPriceValue] = useState([100, 500]);

  function valuetext(value) {
    return `${value}°C`;
  }
  useEffect(() => {
    console.log("Filter On mount :", props);
    // this.setState({ backBtn: props.backHaves });
  }, []);

  function apply() {
    console.log("Applied filters");
    // if (menuType == "ecommerce") {
    //   <EcommerceProductShow />
    // }

    // if (menuType == "productshow") {
    //   <ProductShow />
    // }
  }

  function brand() {
    SetBrandChecked(true);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(false);
  }

  function rate() {
    SetBrandChecked(false);
    SetRateChecked(true);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(false);
  }

  function offer() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(true);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(false);
  }

  function discount() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(true);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(false);
  }
  function availability() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(true);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(false);
  }
  function category() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(true);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(false);
  }

  function price() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(true);
    SetSortChecked(false);
    SetSellerChecked(false);
  }

  function sort() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(true);
    SetSellerChecked(false);
  }

  function seller() {
    SetBrandChecked(false);
    SetRateChecked(false);
    SetOfferChecked(false);
    SetDiscountChecked(false);
    SetAvailChecked(false);
    SetCategoryChecked(false);
    SetPriceChecked(false);
    SetSortChecked(false);
    SetSellerChecked(true);
  }

  return (
    <div className="p-0">
      {width < 720 ? (
        <div className="vw-100 container p-0">
          <div>
            <div className="row">
              <div className="col-4 bg-halfwhite h100 p-0">
                <div onClick={category}>
                  <div
                    className={
                      category_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Categories
                      {category_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <div onClick={brand}>
                  <div
                    className={
                      brand_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Brand
                      {brand_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <div onClick={seller}>
                  <div
                    className={
                      seller_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Sellers
                      {seller_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <div onClick={price}>
                  <div
                    className={
                      price_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Price Range
                      {price_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
                <div onClick={rate}>
                  <div
                    className={
                      rate_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Rating
                      {rate_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
                <div onClick={offer}>
                  <div
                    className={
                      offer_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Offer
                      {offer_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
                <div onClick={discount}>
                  <div
                    className={
                      discount_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Discount
                      {discount_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <div onClick={availability}>
                  <div
                    className={
                      avail_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Availability
                      {avail_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <div onClick={sort}>
                  <div
                    className={
                      sort_checked ? "activeTitle cursor" : "title cursor"
                    }
                  >
                    <p className="position-relative">
                      Sort by
                      {sort_checked ? (
                        <span className="position-absolute m-1 translate-middle p-1 bg-primary border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-8 pt-2 bg-fff">
                {category_checked ? (
                  <div className="over-scroll">
                    <div className=" my-2">
                      <h6 className="mb-2">Categories</h6>
                    </div>
                    {category_data.map((data, index) => (
                      <label className="resta-radio-button cursor" key={index}>
                        <input
                          type="checkbox"
                          name="brand1"
                          className="checkbox"
                        />
                        <span>{data.name}</span>
                      </label>
                    ))}
                  </div>
                ) : null}
                {brand_checked ? (
                  <div className="over-scroll">
                    <div className=" my-2">
                      <h6 className="mb-2">Brand</h6>
                    </div>
                    {brand_data.map((data, checkboxIndex) => (
                      <label
                        className="resta-radio-button cursor"
                        key={checkboxIndex}
                      >
                        <input
                          type="checkbox"
                          name="brand1"
                          className="checkbox"
                          // onChange={()=>{(!invisible)}}
                        />
                        <span>{data.value}</span>
                      </label>
                    ))}

                    {/* <Select
                        maxMenuHeight={250}
                        isMulti
                        components={{ Option, MultiValue }}
                        // defaultValue={brand[1]}
                        options={brand}
                        menuIsOpen
                        hideSelectedOptions={false}
                        backspaceRemovesValue={false}
                        onChange={(e) => console.log(e)}
                        className="basic-multi-select w-100"
                        classNamePrefix="select"
                      /> */}
                  </div>
                ) : null}

                {seller_checked ? (
                  <div className="over-scroll">
                    <div className=" my-2">
                      <h6 className="mb-2">Sellers</h6>
                    </div>
                    {sellers.map((data, index) => (
                      <label className="resta-radio-button cursor" key={index}>
                        <input
                          type="checkbox"
                          name="brand1"
                          className="checkbox"
                        />
                        <span>{data.name}</span>
                      </label>
                    ))}
                  </div>
                ) : null}

                {price_checked ? (
                  <div className="over-scroll">
                    <div className=" my-2">
                      <h6 className="mb-2">Price range</h6>
                    </div>

                    <div className="d-flex align-items-center py-3 price">
                      <input
                        type="number"
                        className="border radius px-2 p-1 w-50"
                        defaultValue={price_value[0]}
                        placeholder="Min price"
                      />
                      <span className="px-2">-</span>
                      <input
                        type="number"
                        className="border radius px-2 p-1 w-50"
                        defaultValue={price_value[1]}
                        placeholder="Max price"
                      />
                    </div>

                    {/* <div className="d-flex align-items-center mt-2">
                        <small className="pe-3">0</small> */}
                    <div className="mt-3">
                      <Slider
                        // value={price_value}
                        defaultValue={[price_value[0], price_value[1]]}
                        min={0}
                        max={5000}
                        onChange={(e) => {
                          // handleChange(e);
                          console.log("value", e);
                        }}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                      />
                    </div>
                    {/* <small className="ps-3 ms-auto">5000</small>
                      </div> */}
                  </div>
                ) : null}
                {checkbox_data.map((data, checkboxIndex) => (
                  <div key={checkboxIndex}>
                    <div>
                      {rate_checked && data.id == 1 ? (
                        <div className="over-scroll">
                          <div className="my-2">
                            <h6 className="mb-0">Rating</h6>
                          </div>
                          <div>
                            {data.childern.map((child_data, childIndex) => (
                              <label
                                className="resta-radio-button cursor"
                                key={childIndex}
                              >
                                <input
                                  type="checkbox"
                                  name="brand1"
                                  className="checkbox"
                                  onChange={(e) => {
                                    console.log("rating:", e.target);
                                    console.log("rating index:", childIndex);
                                    console.log(
                                      "rating value:",
                                      child_data.value
                                    );
                                  }}
                                />
                                <span>{child_data.value}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {offer_checked && data.id == 2 ? (
                        <div className="over-scroll">
                          <div className="my-2">
                            <h6 className="mb-2">Offer</h6>
                          </div>
                          <div>
                            {data.childern.map((child_data, childIndex) => (
                              <label
                                className="resta-radio-button cursor"
                                key={childIndex}
                              >
                                <input
                                  type="checkbox"
                                  name="brand1"
                                  className="checkbox"
                                />
                                <span>{child_data.value}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {discount_checked && data.id == 3 ? (
                        <div className="over-scroll">
                          <div className=" my-2">
                            <h6 className="mb-2">Discount</h6>
                          </div>
                          <div>
                            {data.childern.map((child_data, childIndex) => (
                              <label
                                className="resta-radio-button cursor"
                                key={childIndex}
                              >
                                <input
                                  type="checkbox"
                                  name="brand1"
                                  className="checkbox"
                                />
                                <span>{child_data.value}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {avail_checked && data.id == 4 ? (
                        <div className="over-scroll">
                          <div className="my-2">
                            <h6 className="mb-2">Availabilty</h6>
                          </div>
                          <div>
                            {data.childern.map((child_data, childIndex) => (
                              <label
                                className="resta-radio-button cursor"
                                key={childIndex}
                              >
                                <input
                                  type="checkbox"
                                  name="brand1"
                                  className="checkbox"
                                />
                                <span>{child_data.value}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {sort_checked && data.id == 5 ? (
                        <div className="over-scroll">
                          <div className="my-2">
                            <h6 className="mb-0 pb-2">{data.title}</h6>
                          </div>
                          <div>
                            {data.childern.map((child_data, childIndex) => (
                              <label
                                className="resta-radio-button cursor"
                                key={childIndex}
                              >
                                <input
                                  type="checkbox"
                                  name="brand1"
                                  className="checkbox"
                                />
                                <span>{child_data.value}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bottom-fixed w-100 shadow px-2 py-3">
            <div className="row align-items-center w-100">
              <div className="col-6">
                <button className="btn text-black ">Reset all</button>
              </div>
              <div className="col-6 text-end">
                <Link to={menu_type}>
                  <button className="btn btn-primary">Show 4 results</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-100 ">
          <div className="card-bg p-2 ">
            <div className="row pb-3 pt-2">
              <div className="col-6 p-0">
                <h5>Filter</h5>
              </div>
              <Link className="col-6 text-right md-none" to="/productshow">
                <Ionicons name="close" size={24} color="gray" />
              </Link>
            </div>

            <div className="filter_scroll">
              <Accordion
                onChange={() => {
                  SetExpanded(!expanded);
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  // expanded={expanded == "panel1"}
                >
                  <p className="title">Brand</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="over-select border-bottom">
                    <Select
                      maxMenuHeight={250}
                      isMulti
                      // components={{ Option, MultiValue }}
                      // defaultValue={brand[1]}
                      options={brand_data}
                      menuIsOpen
                      hideSelectedOptions={false}
                      backspaceRemovesValue={false}
                      onChange={(e) => console.log(e)}
                      className="basic-multi-select w-100"
                      classNamePrefix="select"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>

              {checkbox_data.map((data, checkboxIndex) => (
                <Accordion key={checkboxIndex}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    // expanded={expanded == "panel1"}
                  >
                    <div className="title">{data.title}</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="over-scroll border-bottom">
                      {data.childern.map((child_data, childIndex) => (
                        <div key={childIndex} className="">
                          <label className="d-flex mb-0">
                            <input
                              type="checkbox"
                              name="brand1"
                              className="checkbox mb-0"
                            />
                            <span className="filter-text">
                              {child_data.value}
                            </span>
                          </label>
                          <br />
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
              <div className="flex pt-4 md-none w-100 text-center ">
                <Link to="/productshow">
                  <button className="btn btn-outline-light mr-5">Cancel</button>
                </Link>
                <button
                  className="btn btn-outline-primary ml-5"
                  onClick={apply}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

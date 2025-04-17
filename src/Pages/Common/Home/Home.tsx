import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import DataContext from "../../../utils/Context/DataContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { api } from "../../../utils/Api";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src={require("../../../assets/img/banner/banner1.png")}
    onDragStart={handleDragStart}
    className="pe-2"
  />,
  <img
    src={require("../../../assets/img/banner/banner4.png")}
    onDragStart={handleDragStart}
    className="pe-2"
  />,
  <img
    src={require("../../../assets/img/banner/banner2.jpg")}
    onDragStart={handleDragStart}
    className="pe-2"
  />,
  <img
    src={require("../../../assets/img/banner/banner5.jpg")}
    onDragStart={handleDragStart}
    className="pe-2"
  />,
];

const productsRestraunt = [

  {
    src: require("../../../assets/img/c65.jpg"),
    name: "Chicken Fry",
    rate: 156,
  },
  {
    src: require("../../../assets/img/images.jpeg"),
    name: "South Indian",
    rate: 50,
  },
  {
    src: require("../../../assets/img/north.jpeg"),
    name: "North Indian Foods",
    rate: 200,
  }, {
    src: require("../../../assets/img/category/pizza.png"),
    name: "Pizza",
    rate: 250,
  },
  {
    src: require("../../../assets/img/fried.webp"),
    name: "Fried Chicken",
    rate: 170,
  },
  {
    src: require("../../../assets/img/noodle.webp"),
    name: "Noodles",
    rate: 250,
  },
  {
    src: require("../../../assets/img/food8.jpg"),
    name: "Biriyani",
    rate: 200,
  },
  {
    src: require("../../../assets/img/food2.jpeg"),
    name: "Chicken Curry",
    rate: 200,
  },
];

const productsEcommerce = [

  {
    src: require("../../../assets/img/category/furniture.png"),
    name: "Wooden Furniture",
    rate: 20000,
  },
  {
    src: require("../../../assets/img/category/computer.png"),
    name: "LG Computer",
    rate: 200,
  },
  {
    src: require("../../../assets/img/allWear.webp"),
    name: "Shoe",
    rate: 250,
  },
  {
    src: require("../../../assets/img/handbag.jpg"),
    name: "Handbags",
    rate: 156,
  },
  {
    src: require("../../../assets/img/ecommerce.jpg"),
    name: "Matching Sets",
    rate: 200,
  },
  {
    src: require("../../../assets/img/shirt6.jpg"),
    name: "Men's Wear",
    rate: 170,
  },
  {
    src: require("../../../assets/img/mens_wear.jpg"),
    name: "Function Wear",
    rate: 50,
  },
  {
    src: require("../../../assets/img/mob.jpg"),
    name: "Samsung S17",
    rate: 16000,
  },
];

const productsGroceries = [

  {
    src: require("../../../assets/img/offer/knorr.jpg"),
    name: "Knorr Soup",
    rate: 120,
  },
  {
    src: require("../../../assets/img/offer/helath_drinks.png"),
    name: "Helath Drinks",
    rate: 250,
  },
  {
    src: require("../../../assets/img/offer/household.jpg"),
    name: "Household Products",
    rate: 200,
  },
  {
    src: require("../../../assets/img/category/packed.png"),
    name: "Masala Products",
    rate: 250,
  },
  {
    src: require("../../../assets/img/offer/nestle.jpg"),
    name: "Nestle Products",
    rate: 156,
  },
  {
    src: require("../../../assets/img/category/fruits_vegetables.jpg"),
    name: "Fruits & Vegitables",
    rate: 200,
  },
  {
    src: require("../../../assets/img/category/household.png"),
    name: "Household Product",
    rate: 170,
  },
  {
    src: require("../../../assets/img/category/Dairy_bakery.png"),
    name: "Dairy & Bakery",
    rate: 50,
  },
  {
    src: require("../../../assets/img/grocery.png"),
    name: "Groceries",
    rate: 250,
  },
];

const responsive = {
  0: { items: 1 },
  200: { items: 2 },
  300: { items: 2 },
  350: { items: 2 },
  548: { items: 3 },
  720: { items: 5 },
  1024: { items: 6 },
};

const slide = {
  0: { items: 1 },
  350: { items: 1 },
  1024: { items: 2 },
}

export default function Home(props: any) {
  const context = useContext(DataContext);
  const [index, SetIndex] = useState(0);
  const [sections_data, SetSectionsData] = useState([
    {
      sector_name: "Restaurant",
      url:"",

    },
    {
      sector_name: "Groceries",
      url:"",

    },
    {
      sector_name: "Ecommerce",
      url:"",

    },
  ]);
  // const[grocery_redirect,SetGroceryRedirect] = useState(false);
  // const[ecommerce_redirect,SetEcommerceRedirect] = useState(false);
  // const[restaurant_redirect,SetRestaurantRedirect] = useState(false);

  // const[ref, SetRef] = React.createRef(null);
  // const[fashionref , SetFashionRef] = React.createRef(null);
  // const[groceref,SetGroceryRef] = React.createRef(null);

  useEffect(() => {
    console.log("Home On mount :", props);
    get_init();
  }, []);


  async function get_init() {
    // let pass_data = {
    //   get: {
    //     brand: id_value.brand_id,
    //   },
    // };
    let data_res: any = await api("/sections");
    console.log("get sections response :", data_res.response);
    SetSectionsData(data_res.response.data);
  }

  // async function SectionOrderType(data: any) {
  //   console.log("Section Order Type click data:", data);
  //   let data_res: any;
  //   if (data.order_type == "Products") {
  //     data_res = await api("/section_vendors");
  //   } else if (data.order_type == "Vendors") {
  //     data_res = await api("/section_products");

  //   }

  // }

  function SaveContext(data) {
    context.SetAppData((prevValue) => {
        prevValue.sections.sector_name = data.sector_name;
        prevValue.sections.sections_type = data.order_type;
        prevValue.sections.sections_id = data.id;
        prevValue.sections.sections_slug = data.slug;
        return { ...prevValue };
    });
    console.log("Home Data :", data);
  }

  return (
    <div className="page-main sector_page pb-5 bg-fff h-100vh">
      {/* <div className="sectorSlide">
          <AliceCarousel
            mouseTracking
                    touchMoveDefaultEvents={false}
            items={items}
            autoPlay
            autoPlayInterval="5000"
            autoPlayStrategy="default"
            infinite
            disableButtonsControls
            disableDotsControls
            responsive={slide}
            paddingLeft={20}
            paddingRight={20}
          />
        </div> */}

      <div className="sector ">

        <div className="row py-3">
          {sections_data.map((sections, s_index) => (
            <div className="col-4 col-md-3 col-lg-2 mb-2 cursor" key={s_index}>
              <Link to={sections.sector_name == "Restaurant" ? "/restaurant/": sections.sector_name == "Groceries" ? "/grocery/"  : "/ecommerce/" }>
                <div className="card"
                onClick={() => {
                  SaveContext(sections);
                  console.log("sections sector_name :", sections.sector_name);
                }}
                >
                  {sections.url != null ? (
                    <img src={"https://cdn.1superapp.com/images/320/" + sections.url} className="sector-img" />
                  ) : (
                    <img src={require("../../../assets/icon/new/shopping.png")} className="sector-img" />
                  )}
                </div>
                <p className="text-center text-dark mt-1">{sections.sector_name}</p>
              </Link>
            </div>
          ))}



          {/* <div className="col-3 col-lg-2 pr-1 pl-1">
              <Link to={"/ecommerce"}>
              <div className="card cursor" 
            //   onClick={sectorPushFashions}
              >
                <img src={require("../../../assets/icon/new/shopping.png")} className="sector-img" />
               </div>
              <p className="text-center">Ecommerce</p>
              </Link>
            </div>

            <div className="col-3 col-lg-2 pr-1 pl-1">
              <Link to={"/grocery"}>
              <div className="card cursor" 
            //   onClick={sectorPush}
              >
                <img src={require("../../../assets/icon/new/grocery.png")} className="sector-img" />
                </div>
              <p className="text-center">Grocery</p>
              </Link>
            </div> */}
        </div>

      </div>

      {/* <div className="bg-white border-bottom">
          <div className="row pt-2 align-center">
            <div className="col-8">
              <h6 className="pb-0 mb-0">Food Restraunt</h6>
              <p className="p-0">Recommendate items</p>
            </div>
            <div className="col-4 text-right cursor ">
              <div className="flex align center justify-end">
                <p className="text-dark pr-1">View all</p>
                <MaterialCommunityIcons name="arrow-right-drop-circle" size={19} color="gray" />
              </div>
            </div>
          </div>

          <div className="cursoual-row align-center">
            <AliceCarousel
              mouseTracking
                    touchMoveDefaultEvents={false}
              // items={productsRestraunt}
              // paddingLeft={10}
              paddingRight={50}

              disableDotsControls
              responsive={responsive}
              disableButtonsControls
              controlsStrategy="alternate"
            >
              {productsRestraunt.map((value, index) => (
                <div
                  className="card text-center m-2 cursor"
                  onDragStart={handleDragStart}
                  key={index}
                >
                  <img src={value.src} alt="" />
                  <div className="bottom-offer">
                    <div className="offer">
                      <p className="text-dark oneline ">{value.name}
                      </p>
                      <p className=" pt-1">
                        From ₹{value.rate}
                      </p>
                    </div>
                  </div>


                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>

        <div className="bg-white border-bottom">
          <div className="row pt-2 align-center">
            <div className="col-8">
              <h6 className="pb-0 mb-0">Ecommerce</h6>
              <p className="p-0">Recommendate items</p>
            </div>
            <div className="col-4 text-right cursor ">
              <div className="flex align-center justify-end">
                <p className="text-dark pr-1">View all</p>
                <MaterialCommunityIcons name="arrow-right-drop-circle" size={19} color="gray" />
              </div>
            </div>
          </div>

          <div className="cursoual-row align-center">
            <AliceCarousel
              mouseTracking
                    touchMoveDefaultEvents={false}
              // items={productsRestraunt}
              paddingRight={70}
              disableDotsControls
              // paddingLeft={50}
              responsive={responsive}
              disableButtonsControls
              controlsStrategy="alternate"
            >
              {productsEcommerce.map((value, index) => (
                <div
                  onDragStart={handleDragStart}
                  key={index}
                  className="card cursor m-2 text-center"
                >
                  <img src={value.src} alt="" />
                  <div className="bottom-offer">
                    <div className="offer">
                      <p className="text-dark oneline ">{value.name}
                      </p>
                      <p className=" pt-1">
                        From ₹{value.rate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AliceCarousel>
          </div>

        </div>

        <div className="bg-white border-bottom">
          <div className="row pt-2 align-center">
            <div className="col-8">
              <h6 className="pb-0 mb-0">Groceries</h6>
              <p className="p-0">Recommendate items</p>
            </div>
            <div className="col-4 text-right cursor ">
              <div className="flex align-center justify-end">
                <p className="text-dark pr-1">View all</p>
                <MaterialCommunityIcons name="arrow-right-drop-circle" size={19} color="gray" />
              </div>
            </div>
          </div>

          <div className="cursoual-row align-center">
            <AliceCarousel
              mouseTracking
                    touchMoveDefaultEvents={false}
              // items={productsRestraunt}
              // paddingLeft={50}
              paddingRight={70}
              disableDotsControls
              responsive={responsive}
              disableButtonsControls
              controlsStrategy="alternate"
            >
              {productsGroceries.map((value, index) => (
                <div
                  onDragStart={handleDragStart}
                  key={index}
                  className="cursor card m-2 text-center"
                >
                  <img src={value.src} alt="" />
                  <div className="bottom-offer">
                    <div className="offer">
                      <p className="text-dark oneline ">{value.name}
                      </p>
                      <p className=" pt-1">
                        Offer Upto ₹{value.rate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div> */}
    </div>
  );
}
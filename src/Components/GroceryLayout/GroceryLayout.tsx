import React, { useState, useEffect, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import DataContext from "../../utils/Context/DataContext";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "../../utils/Loader";
import { api } from "../../utils/Api";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function GroceryLayout(props) {
  const context = useContext(DataContext);
  const location = useLocation();
  const [is_menu_open, SetIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("GroceryLayout onmount context :", context);
    // get_init();
  }, []);

  //   async function get_init() {
  //     let response = await api("/init");
  //     console.log("app_init :", response);
  //     if (response.status_code == 200) {
  //       if (response.response.hasOwnProperty("user_details")) {
  //         localStorage.setItem(
  //           "user_data",
  //           JSON.stringify(response.response.user_details)
  //         );
  //       }
  //     }
  //   }

  // useEffect(() => {
  //   context.SetSampleData("hai");
  // }, [location]);

  function on_menu_click(data) {
    console.log("GroceryLayout on menu/back click :", data);
    SetIsMenuOpen(data);
  }

  return (
    <>
      {/* <Loader promiseTracker={usePromiseTracker} /> */}
      <div className="page-body">
      <div className="page-content">
          <Header />
          <Outlet />
          {/* <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #171546",
                padding: "10px",
              },
              duration: 1500,
            }}
          /> */}
        </div>
      </div>
      <Footer
        menu_click={(data) => {
          on_menu_click(data);
        }}
        from="brand"
      />
    </>
  );
}

import React, { useState, useEffect } from "react";

const DataContext = React.createContext();

function DataProvider(props) {
  const [sample_data, SetSampleData] = useState("");
  const [app_data, SetAppData] = useState({
    sections: {
      sector_name: "",
      sections_type: "",
      sections_id: "",
      sections_slug: "",
    },
    restaurant: {
      type: "",
      id: "",
      slug: "",
      subCategory_id: "",
      subCategory: [],
      brand_name: "",
      location: "",
      name: "",
    },
    products: {
      id: "",
      slug: "",
      variant_slug: "",
      sellers_slug: "",
    },
    delivery_address: [],
    checkout_data: {},
    addressType: "",
    selected_delivery_address: "",
    backHaves: false,
    reviews_data: {},
  });

  useEffect(() => {
    console.log("DataProvider On mount :");
  }, []);

  useEffect(() => {
    if (props.selected_language != {} && props.language_data != {}) {
      console.log("DataProvider On props change :");
      SetAppData((prevValue) => {
        prevValue.selected_language = props.selected_language;
        prevValue.language_data = props.language_data;
        prevValue.language_list = props.language_list;
        return { ...prevValue };
      });
    }
  }, [props]);

  function t(value) {
    if (app_data.language_data.hasOwnProperty(value)) {
      return app_data.language_data[value];
    } else {
      return value;
    }
  }

  return (
    <DataContext.Provider
      value={{
        app_data,
        SetAppData,
        t,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export { DataProvider };

// export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

export default DataContext;







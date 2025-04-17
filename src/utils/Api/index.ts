import { AppConfig } from "../../config";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

let origin = window.location.origin;
let Environment: any;
Environment = "Development";

// //Nirmal Bro Account
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbiI6IjA3MjE5NTkyNWNjZDQ4MzM3ZjRjMjkwYTllZmZkYzc3IiwidXNlcm5hbWUiOiJHb3ZpbmRhcmFqIiwibmFtZSI6IkdvdmluZGFyYWoifQ.k-ux_lpRMoCJOvBsiwPvLuBQmjzBV6zlvVzPnwSaMFwVPwpDuKWdzR_0qyqUfauXZIqBbUHT7M07PPiZy41Ybstn8LTQGIPjutY9AcdgW4wypYaZ63xXSLvaDG303xeCrcNJX892La136PAHInT5HQCUDKomlU7Jl0uiAd_WvKSho2CJnpmjGQhl9I0OZjm8QH0NWFoya92kBxiXrJ9eFFftVzegpBMVvE5ZohDtvMfEKchT86wU1sxcwROpNS3JSyd2oTP6GhGD6dWC421dZVk0bBLP2Z8r78OrzbmrVfC4xkEAz6_hAVo5omJLUHLDqAfBB-zL1oouKVykG4LSyA";

if (origin == "http://localhost:19006") {
  origin = "https://demostore.1superapp.com";
}

export async function api(
  url: any,
  pass_data = {},
  blob_value = false,
  image = false,
  type = "form_data"
) {
  let request_method = "GET";
  let formData;

  if (pass_data.hasOwnProperty("get")) {
    url = url + append_url(pass_data.get, "all");
  }
  if (pass_data.hasOwnProperty("post")) {
    request_method = "POST";
    if (!pass_data.hasOwnProperty("get")) {
      // url = url + append_url(pass_data.get, "all");
      url = url + append_url(pass_data.post, "token_only");
    }

    if (type == "form_data") {
      formData = append_data(pass_data.post, image);
    }

    if (type == "raw_data") {
      formData = pass_data.post;
    }
  }

  if (Object.keys(pass_data).length == 0) {
    url = url + append_url(pass_data, "all");
  }

  url = AppConfig.base_url.api + url;

  const dataPromise = await trackPromise(
    make_request(request_method, url, formData, blob_value, type)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      })
  );

  return dataPromise;
}

function make_request(
  request_method: any,
  url: any,
  formData: any,
  blob_value: any,
  type: any
) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open(request_method, url);
    if (blob_value) {
      // xhr.responseType("blob");
    }
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve({
          status: true,
          status_code: xhr.status,
          status_text: xhr.statusText,
          // response: JSON.parse(xhr.response),
          response: xhr.response ? JSON.parse(xhr.response) : "No Data",
        });
      } else {
        reject({
          status: false,
          status_code: xhr.status,
          statusText: xhr.statusText,
          response: error_handler(xhr),
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: false,
        status_code: xhr.status,
        statusText: xhr.statusText,
        response: error_handler(xhr),
      });
    };
    console.log("type :", type);
    if (type == "form_data") {
      if (formData) {
        xhr.send(formData);
      } else {
        xhr.send();
      }
    }
    if (type == "raw_data") {
      // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

      xhr.send(JSON.stringify(formData));
    }
  });
}

function append_url(data: any, type: any) {
  if (type == "all") {
    let pass_string = "";
    if (Object.keys(data).length > 0) {
      Object.entries(data).forEach(([key, value], index) => {
        if (index == 0) {
          let join_data;
          if (Environment == "Development") {
            join_data = "?" + key + "=" + value + "&1id_token=" + token; //Development
            // join_data = "?" + key + "=" + value; //Live

          } else {
            join_data = "?" + key + "=" + value; //Live
          }

          pass_string = pass_string + join_data;
        } else {
          let join_data = "&" + key + "=" + value;
          pass_string = pass_string + join_data;
        }
      });
    } else {
      let join_data;
      if (Environment == "Development") {
        join_data = "?1id_token=" + token; //Development
        // join_data = ""; //Live

      } else {
        join_data = ""; //Live
      }

      pass_string = pass_string + join_data;
    }
    return pass_string;
  } else {
    let pass_string = "";

    let join_data;
    if (Environment == "Development") {
      join_data = "?1id_token=" + token; //Development
      // join_data = ""; //Live

    } else {
      join_data = ""; //Live
    }

    pass_string = pass_string + join_data;

    return pass_string;
  }
}

function append_data(data: any, image: any) {
  // console.log("append_data data :", data);
  const postdata = new FormData();
  for (const items in data) {
    // console.log("append_data items :", items);
    // console.log("append_data data[items] :", data[items]);

    if (image) {
      postdata.append(items, data[items]);
    } else {
      if (data[items].isArray || isObject(data[items])) {
        postdata.append(items, JSON.stringify(data[items]));
      } else {
        postdata.append(items, data[items]);
      }
    }
  }
  return postdata;
}

function isObject(data: any) {
  return data instanceof Object;
}

function error_handler(error: any) {
  if (error.response == undefined) {
    // console.log("Network Error");
    return "Network Error";
  } else if (error.status === 401) {
    // console.log("Unauthorized Error");
    let redirect_value;
    if (Environment == "Development") {
      redirect_value = origin + "/app_dev/login?r=" + window.location.href;
    } else {
      redirect_value = origin + "/app/login?r=" + window.location.href;
    }
    console.log("redirect_value :", redirect_value);
    window.location = redirect_value;
    return "Unauthorized Error";
  }
}

// old

// export async function api(
//   url: any,
//   pass_data: any = {},
//   blob_value = false,
//   image = false
// ) {
//   let request_method = "GET";
//   let formData;

//   if (pass_data.hasOwnProperty("get")) {
//     url = url + append_url(pass_data.get);
//   }
//   if (pass_data.hasOwnProperty("post")) {
//     request_method = "POST";
//     formData = append_data(pass_data.post, image);
//   }
//   // 1id=; location=Alampalayam, Tamil Nadu, India; locationtime=1628062197; lt=11.3836032; ln=77.7715712; _ga_ZQQRQQ9BE5=GS1.1.1631787864.13.0.1631787871.0; _gid=GA1.2.1193715456.1642404178; _ga_B03KHMKBKM=GS1.1.1642410655.59.0.1642410655.0; _ga=GA1.2.763220466.1620112169; 1id_web=0489b11aac69f9ac726534956c894bea339923f7; _gat_gtag_UA_212833236_1=1

//   let option: any = {
//     // withCredentials: true,
//     method: request_method,
//     url: AppConfig.base_url.api + url,
//     headers: { "1id": token },
//   };

//   if (blob_value) {
//     option.responseType = "blob";
//   }

//   if (formData) {
//     option.data = formData;
//   }

//   const dataPromise = await trackPromise(
//     // axios(option, { headers: { Authorization: "Bearer " + token } })
//     axios(option)
//       .then((res) => {
//         let res_pass = {
//           status: true,
//           status_code: res.status,
//           status_text: res.statusText,
//           response: res.data,
//         };
//         return res_pass;
//       })
//       .catch((err) => {
//         let res_pass = {
//           status: false,
//           // status_code: err.response.status,
//           // status_text: err.response.statusText,
//           response: error_handler(err),
//           // response: "error",
//         };
//         return res_pass;
//       })
//   );

//   return dataPromise;
// }

// function append_url(data: any) {
//   let pass_string = "";
//   Object.entries(data).forEach(([key, value], index) => {
//     if (index == 0) {
//       let join_data = "?" + key + "=" + value;
//       pass_string = pass_string + join_data;
//     } else {
//       let join_data = "&" + key + "=" + value;
//       pass_string = pass_string + join_data;
//     }
//   });
//   return pass_string;
// }

// function append_data(data: any, image: any) {
//   const postdata = new FormData();
//   for (const items in data) {
//     if (image) {
//       postdata.append(items, data[items]);
//     } else {
//       if (data[items].isArray || isObject(data[items])) {
//         postdata.append(items, JSON.stringify(data[items]));
//       } else {
//         postdata.append(items, data[items]);
//       }
//     }
//   }
//   return postdata;
// }

// function isObject(data: any) {
//   return data instanceof Object;
// }

// function error_handler(error: any) {
//   // if (error.request) {
//   //   console.log("error.request", error.request);
//   // }
//   // if (error.response) {
//   //   console.log("error.response.data", error.response.data);
//   //   console.log("error.response.status", error.response.status);
//   //   console.log("error.response.headers", error.response.headers);
//   // }
//   // if (error.message) {
//   //   console.log("error.message", error.message);
//   // }
//   // console.log("error.config", error.config);

//   if (error.response == undefined) {
//     // console.log("Network Error");
//     return "Network Error";
//   } else if (error.response.status === 401) {
//     console.log("Unauthorized Error");
//     // return "Unauthorized Error";
//     window.location = origin + "/app/login?r=" + window.location.href;
//   }
// }
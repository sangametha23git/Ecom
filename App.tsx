import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

// locations

import { QueryParamProvider } from "use-query-params";
import { DataProvider } from "./src/utils/Context/DataContext";
import Loader from "./src/utils/Loader";
import { usePromiseTracker } from "react-promise-tracker";

//css
import "./src/assets/libraries/bootstrap/css/bootstrap.min.css";
import "./src/assets/libraries/fontawesome/css/all.min.css";
import "./src/assets/css/style.css";

// page locations
import CommonLayout from "./src/Components/CommonLayout/CommonLayout";
import Home from "./src/Pages/Common/Home/Home";
import RestaurantLayout from "./src/Components/RestaurantLayout/RestaurantLayout";
import RestaurantDashboard from "./src/Pages/Restaurants/Dashboard/Dashboard";
import RestaurantShop from "./src/Pages/Restaurants/Shop/Shop";
import RestaurantSubCategory from "./src/Pages/Restaurants/SubCategory/SubCategory";
import RestaurantCategory from "./src/Pages/Restaurants/Categories/Categories";
import RestaurantSearch from "./src/Pages/Restaurants/Search/Search";
import GroceryDashboard from "./src/Pages/Grocery/Dashboard/Dashboard";
import GroceryLayout from "./src/Components/GroceryLayout/GroceryLayout";
import GroceryCategory from "./src/Pages/Grocery/Categories/Categories";
import GroceryMainCategory from "./src/Pages/Grocery/MainCategories/MainCategories";
import GrocerySubCategory from "./src/Pages/Grocery/SubCategory/SubCategory";
import GroceryProducts from "./src/Pages/Grocery/Products/Products";
import GroceryProductsView from "./src/Pages/Grocery/ProductsView/ProductsView";
import GroceryShopDashboard from "./src/Pages/Grocery/ShopDashboard/ShopDashboard";
import GroceryShopProducts from "./src/Pages/Grocery/ShopProducts/ShopProducts";
import GrocerySearch from "./src/Pages/Grocery/GrocerySearch/GrocerySearch";
import EcommerceLayout from "./src/Components/EcommerceLayout/EcommerceLayout";
import EcommerceDashboard from "./src/Pages/Ecommerce/Dashboard/Dashboard";
import EcommerceCategory from "./src/Pages/Ecommerce/Categories/Categories";
import EcommerceMainCategory from "./src/Pages/Ecommerce/MainCategory/MainCategory";
import EcommerceSubCategory from "./src/Pages/Ecommerce/SubCategory/SubCategory";
import EcommerceMobileProductDetails from "./src/Pages/Ecommerce/ProductsDetailsMobile/ProductsDetailsMobile";
import EcommerceProductDetails from "./src/Pages/Ecommerce/ProductsDetails/ProductsDetails";
import Review from "./src/Pages/Common/Review/Review";
import ReviewModal from "./src/Pages/Common/Review/ReviewModal";
import Cart from "./src/Pages/Common/Cart/Cart";
import OrderAddress from "./src/Pages/Common/OrderAddress/OrderAddress";
import EcommerceProducts from "./src/Pages/Ecommerce/Products/Products";
import EcommerceShopDashboard from "./src/Pages/Ecommerce/ShopDashboard/ShopDashboard";
import EcommerceShopProducts from "./src/Pages/Ecommerce/ShopProducts/ShopProducts";
import EcommerceSearch from "./src/Pages/Ecommerce/Search/Search";
import EcommerceAllReview from "./src/Pages/Ecommerce/AllReviews/AllReviews";
import OrderSummarySingleAddress from "./src/Pages/Common/OrderSummarySingle/OrderSummarySingleAddress";
import SelectAddress from "./src/Pages/Common/SelectAddress/SelectAddress";
import OrderSummary from "./src/Pages/Common/OrderSummary/OrderSummary";
import OrderSummaryVendar from "./src/Pages/Common/OrderSummaryVendar/OrderSummaryVendar";
import OrderSummaryVendarSingle from "./src/Pages/Common/OrderSummaryVendarSingle/OrderSummaryVendarSingle";
import Maps from "./src/Pages/Common/Maps/Maps";
import OfferPage from "./src/Pages/Common/OfferPage/OfferPage";
import OrderDetails from "./src/Pages/Common/OrderDetails/OrderDetails";
import HyperLocalDelivered from "./src/Pages/Common/HyperLocalDelivered/HyperLocalDelivered";
import HyperLocalTracking from "./src/Pages/Common/HyperLocalTracking/HyperLocalTracking";
import SideMenu from "./src/Components/SideMenu/SideMenu";
import OrderPage from "./src/Pages/Common/OrderPage/OrderPage";
import Notifications from "./src/Pages/Common/Notifications/Notifications";
import WishList from "./src/Pages/Common/WishList/WishList";
import OrderFilter from "./src/Pages/Common/OrderFilter/OrderFilter";
import Account from "./src/Pages/Common/Account/Account";
import SideMenuOpen from "./src/Components/SideMenuOpen/SideMenuOpen";
import Payment from "./src/Pages/Common/Payment/Payment";
import Signup from "./src/Pages/Common/Signup/Signup";
import Address from "./src/Pages/Common/Address/Address";
import AddressUpdate from "./src/Pages/Common/AddressUpdate/AddressUpdate";
import CompleteOrder from "./src/Pages/Common/CompleteOrder/CompleteOrder";
import Filter from "./src/Pages/Common/Filter/Filter";
import ChatPage from "./src/Pages/Common/Chat/Chat";
import ReviewGallery from "./src/Pages/Common/Gallery/Gallery";
import GroceryProductDetails from "./src/Pages/Grocery/ProductsDetails/ProductsDetails";
import GroceryMobileProductDetails from "./src/Pages/Grocery/ProductsDetailsMobile/ProductsDetailsMobile";


export default
  function App() {
  console.log("App before mount :");

  useEffect(() => {
    console.log("App On mount :");
    if (localStorage.getItem("language_data") == undefined) {
      // localStorage.setItem("language_data", JSON.stringify(en));
    }
  }, []);
  return (

    // /complete_order?s=success


    <DataProvider>
      <Loader promiseTracker={usePromiseTracker} />
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          {/* ((((((((((((((((((((((((((((((((1))))))))))))))))))))))))))))))))---------> Brand */}
          <Routes>
            <Route path="/" element={<CommonLayout />}>
              <Route index element={<Home />} />
              <Route path="all_reviews" element={<Review />} />
              <Route path="maps" element={<Maps />} />
              <Route path="review_modal" element={<ReviewModal />} />
              <Route path="cart" element={<Cart backHaves={true}/>} />
              <Route path="address_update" element={<AddressUpdate  />} />
              <Route path="order_address" element={<OrderAddress />} />
              <Route path="select_address" element={<SelectAddress backHaves={true} />} />
              <Route path="order_summary" element={<OrderSummary backHaves={true} />} />
              <Route path="order_summary_single_address" element={<OrderSummarySingleAddress backHaves={true} />} />
              <Route path="order_summary_vendor" element={<OrderSummaryVendar backHaves={true} />} />
              <Route path="order_summary_vendor_single" element={<OrderSummaryVendarSingle backHaves={true} />} />

              <Route path="offer" element={<OfferPage backHaves={true} />} />
              <Route path="account" element={<Account backHaves={true} />} />
              <Route path="payment" element={<Payment  backHaves={true}/>} />
              <Route path="notification" element={<Notifications backHaves={true} />} />
              <Route path="wishlist" element={<WishList backHaves={true} />} />
              <Route path="orderpage" element={<OrderPage backHaves={true} />} />
              <Route path="orderfilter" element={<OrderFilter />} />
              <Route path="order_details" element={<OrderDetails backHaves={true} />} />
              <Route path="hyperlocaldelivered" element={<HyperLocalDelivered />} />
              <Route path="hyperlocaltracking" element={<HyperLocalTracking />} />
              <Route path="signup" element={<Signup />} />
              <Route path="filter" element={<Filter />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="review_gallery" element={<ReviewGallery />} />


              <Route path="sidemenu" element={<SideMenu />} />
              <Route path="sidemenuopen/:menuview_id" element={<SideMenuOpen backHaves={true} />} />
              <Route path="complete_order" element={<CompleteOrder />} />

            </Route>

            <Route path="/restaurant" element={<RestaurantLayout />}>
              <Route index element={<RestaurantDashboard />} />
              <Route path="restaurant_shop" element={<RestaurantShop backHaves={true} />} />
              <Route path="restaurant_subcategory" element={<RestaurantSubCategory backHaves={true} />} />
              <Route path="restaurant_category" element={<RestaurantCategory backHaves={true} />} />
              <Route path="restaurant_search" element={<RestaurantSearch  backHaves={true} />} />
            </Route>

            <Route path="/grocery" element={<GroceryLayout />}>
              <Route index element={<GroceryDashboard />} />
              <Route path="grocery_category" element={<GroceryCategory backHaves={true} />} />
              <Route path="grocery_main_category" element={<GroceryMainCategory backHaves={true} />} />
              <Route path="grocery_subcategory" element={<GrocerySubCategory backHaves={true} />} />
              <Route path="grocery_products" element={<GroceryProducts backHaves={true} />} />
              <Route path="grocery_products_view" element={<GroceryProductsView  backHaves={true}/>} />
              <Route path="grocery_shop_dashboard" element={<GroceryShopDashboard  backHaves={true} />} />
              <Route path="grocery_shop_products" element={<GroceryShopProducts backHaves={true} />} />
              <Route path="grocery_search" element={<GrocerySearch backHaves={true} />} />
              <Route path="grocery_mobile_product_details" element={<GroceryMobileProductDetails backHaves={true} />} />
              <Route path="grocery_product_details" element={<GroceryProductDetails   backHaves={true}/>} />
            </Route>

            <Route path="/ecommerce" element={<EcommerceLayout />}>
              <Route index element={<EcommerceDashboard />} />
              <Route path="ecommerce_category" element={<EcommerceCategory backHaves={true} />} />
              <Route path="ecommerce_main_category" element={<EcommerceMainCategory backHaves={true} />} />
              <Route path="ecommerce_sub_category" element={<EcommerceSubCategory backHaves={true} />} />
              <Route path="ecommerce_mobile_product_details" element={<EcommerceMobileProductDetails backHaves={true} />} />
              <Route path="ecommerce_product" element={<EcommerceProducts backHaves={true} />} />
              <Route path="ecommerce_product_details" element={<EcommerceProductDetails   backHaves={true}/>} />
              <Route path="ecommerce_shop_dashboard" element={<EcommerceShopDashboard backHaves={true} />} />
              <Route path="ecommerce_shop_products" element={<EcommerceShopProducts backHaves={true} />} />
              <Route path="ecommerce_search" element={<EcommerceSearch backHaves={true} />} />
              <Route path="all_reviews" element={<EcommerceAllReview backHaves={true} />} />

            </Route>

            </Routes>
        </QueryParamProvider>
      </BrowserRouter>
    </DataProvider>
  );
}


function RouteAdapter({ children }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location: any) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location: any) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
}
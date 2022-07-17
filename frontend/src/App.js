import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SearchScreen from "./screens/SearchScreen";
import MapScreen from "./screens/MapScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/seller/:id" element={<SellerScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/cart/:id" element={<CartScreen />}></Route>
          <Route path="/product/:id" element={<ProductScreen />} exact></Route>
          <Route
            path="/product/:id/edit"
            element={<ProductEditScreen/>}
            exact
          ></Route>
          <Route path="/signin" element={<SigninScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
          <Route path="/payment" element={<PaymentMethodScreen />}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
          <Route path="/order/:id" element={<OrderScreen />}></Route>
          <Route path="/orderhistory" element={<OrderHistoryScreen />}></Route>
          <Route path="/search/name" element={<SearchScreen />} exact></Route>
          <Route
            path="/search/name/:name"
            element={<SearchScreen />}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            element={<SearchScreen />}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            element={<SearchScreen />}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            element={<SearchScreen />}
            exact
          ></Route>

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfileScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/map"
            element={
              <PrivateRoute>
                <MapScreen />
              </PrivateRoute>
            }
          />

          <Route
            path="/productlist"
            element={
              <AdminRoute>
                <ProductListScreen />
              </AdminRoute>
            }
          />

          <Route
            path="/productlist/pageNumber/:pageNumber"
            element={
              <AdminRoute>
                <ProductListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/orderlist"
            element={
              <AdminRoute>
                <OrderListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/userlist"
            element={
              <AdminRoute>
                <UserListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/user/:id/edit"
            element={
              <AdminRoute>
                <UserEditScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <DashboardScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/support"
            element={
              <AdminRoute>
                <SupportScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/productlist/seller"
            element={
              <SellerRoute>
                <ProductListScreen />
              </SellerRoute>
            }
          />
          <Route
            path="/orderlist/seller"
            element={
              <SellerRoute>
                <OrderListScreen />
              </SellerRoute>
            }
          />

          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

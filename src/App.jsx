import React, { lazy, Suspense, useMemo } from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // تم التعديل هنا
import Layout from "./Components/Layout";
import AuthContextProvider from "./Contexts/AuthContext";
import ProductsContextProvider from "./Contexts/ProductsContext";
import CartContextProvider from "./Contexts/CartContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Loading from "./Components/Loading";

import Brands from "./Pages/Brands";
import WishlistContextProvider from "./Contexts/WishlistContext";
import BrandContextProvider from "./Contexts/BrandContext";
import CategoriesContextProvider from "./Contexts/CategoriesContext";

const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const Wishlist = lazy(() => import("./Pages/Wishlist"));
const SpecificProduct = lazy(() => import("./Components/specificProduct"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Categories = lazy(() => import("./Pages/Categories"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const OrderDetails = lazy(() => import("./Pages/OrderDetails"));

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <BrandContextProvider>
              <CategoriesContextProvider>
                <HashRouter>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route
                        index
                        element={
                          <Suspense fallback={<Loading />}>
                            <Home />
                          </Suspense>
                        }
                      />
                      <Route
                        path="Cart"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <Cart />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="Checkout"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <Checkout />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="Wishlist"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <Wishlist />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="Brands"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <Brands />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="Categories"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <Categories />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/Product/:id"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <SpecificProduct />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/Login"
                        element={
                          <ProtectedRoute isAuthPage={true}>
                            <Suspense fallback={<Loading />}>
                              <Login />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/Register"
                        element={
                          <ProtectedRoute isAuthPage={true}>
                            <Suspense fallback={<Loading />}>
                              <Register />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/allOrders"
                        element={
                          <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                              <OrderDetails />
                            </Suspense>
                          </ProtectedRoute>
                        }
                      />
                    </Route>
                  </Routes>
                </HashRouter>{" "}
              </CategoriesContextProvider>
            </BrandContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;

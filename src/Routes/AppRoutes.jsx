import {
  Home_screen,
  Store_screen,
  Calculator_weight_screen,
  Forgot_password_screen,
  Reset_password_screen,
  Login_screen,
  Register_screen,
  Product_detail,
  Shopping_cart,
  Checkout,
  Order_confirmed,
} from "../Screens/Public_Layout";

export const AppRoutes = [
  { path: "/", element: <Home_screen /> },
  { path: "/store", element: <Store_screen /> },
  { path: "/store/product/:id", element: <Product_detail /> },
  { path: "/store/cart", element: <Shopping_cart /> },
  { path: "/store/checkout", element: <Checkout /> },
  { path: "/store/order-confirmed", element: <Order_confirmed /> },
  { path: "/calc-weight", element: <Calculator_weight_screen /> },
  { path: "/forgot-password", element: <Forgot_password_screen /> },
  { path: "/reset-password", element: <Reset_password_screen /> },
  { path: "/login", element: <Login_screen /> },
  { path: "/register", element: <Register_screen /> },
];

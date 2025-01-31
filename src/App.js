import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserContextProvider from "./utilis/UserContextProvider";
import BottomNavBar from "./components/BottomNavBar";

//React lazy loading implementation
const Grocery = lazy(() => import("./components/Grocery"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const App = () => {
  return (
    <Provider store={appStore}>
      <UserContextProvider>
        <div className="app-container overflow-x-clip">
          <Header />
          <Outlet />
          <BottomNavBar/>
        </div>
      </UserContextProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  { path: "/signin", element: <SignIn /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);

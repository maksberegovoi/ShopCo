import AdminPage from "../pages/AdminPage/AdminPage.jsx";
import {
  PROFILE_ROUTE,
  ADMIN_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE, DETAILS_ROUTE, FAQ_ROUTE, HOME_ROUTE, REVIEWS_ROUTE,
} from "../utils/consts.js";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import DetailsPage from "../pages/DetailsPage/DetailsPage.jsx";
import ProductCharacteristics
  from "../components/ProductCharacteristics/ProductCharacteristics.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import Faq from "../components/Faq/Faq.jsx";
import AccountPage from "../pages/AccountPage/AccountPage.jsx";


export const publicRoutes = [
  {path: HOME_ROUTE, Component: HomePage},
  {path: CATALOG_ROUTE, Component: CatalogPage},
  {path: CART_ROUTE, Component: CartPage},
  {
    path: DETAILS_ROUTE,
    Component: DetailsPage,
    children: [
      { index: true, Component: ProductCharacteristics },
      { path: REVIEWS_ROUTE, Component: Reviews },
      { path: FAQ_ROUTE, Component: Faq },
    ],
  },

  { path: "*", Component: NotFoundPage },
]

export const privateRoutes = [
  {path: ADMIN_ROUTE, Component: AdminPage},
  {path: PROFILE_ROUTE, Component: AccountPage},
]
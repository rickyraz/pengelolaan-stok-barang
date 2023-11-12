import { Router, Route, RootRoute, redirect } from "@tanstack/react-router";
import useAuth from "@/store/useAuth";
import Landing from "@/pages/LandingPage/app";
import ClientArea from "@/pages/clientarea/ClientArea";
import Root from "./RootRouterWrapper";
import PricingPage from "@/pages/LandingPage/pricing/Pricing";
import Login from "@/pages/auth/Login";
import Order from "@/pages/LandingPage/order/Order";
import ThxOrder from "@/pages/LandingPage/order/ThxOrder";

import InvoiceDetail from "@/components/clientarea/InvoiceDetail";
import SubsApp from "@/components/clientarea/SubsApp";

// Root
const rootRoute = new RootRoute({
  component: Root,
});

// Index (App.tsx) route : Route
// const indexRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: Landing,
// });

// About (pricing-page.tsx) route
// const pricingPage = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/pricing",
//   component: PricingPage,
// });

// const orderPage = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/order",
//   component: Order,
// });

// const ThxPage = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/thanks-order",
//   component: ThxOrder,
// });

const loginPage = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const clientAreaRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/clientarea",
  component: ClientArea,
});

const invoiceClient = new Route({
  getParentRoute: () => clientAreaRoute,
  path: "/my-invoice",
  component: InvoiceDetail,
});

const SubsClient = new Route({
  getParentRoute: () => clientAreaRoute,
  path: "/my-apps-and-subs",
  component: SubsApp,
});

const privateLayout = new Route({
  getParentRoute: () => rootRoute,
  id: "private",
  beforeLoad: async () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
      throw redirect({
        to: "/login",
      });
    }

    return {
      isLoggedIn,
    };
  },
});

// Create the router using your route tree
export const router = new Router({
  routeTree: rootRoute.addChildren([
    // indexRoute,
    // pricingPage,
    // orderPage,
    // ThxPage,
    loginPage,
    privateLayout.addChildren([
      clientAreaRoute.addChildren([invoiceClient, SubsClient]),
    ]),
  ]),
});

// defaultPendingComponent: () => (
//   <div className={`p-2 text-2xl`}>
//     <p>Loading...</p>
//   </div>
// ),
// defaultErrorComponent: ({ error }) => <div>error :{error}</div>,

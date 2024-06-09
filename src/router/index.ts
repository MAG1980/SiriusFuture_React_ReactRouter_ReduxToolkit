import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/routes/root.layout.tsx";
import {ErrorPage} from "@/error.page.tsx";
import { LoginPage, MainPage, SchedulePage } from "@/pages";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout ,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        Component: MainPage,
      },
      {
        path: "/schedule",
        Component: SchedulePage,
      },
    ],
  },
  {
    path: "/login",
    Component:LoginPage ,
  }
]);
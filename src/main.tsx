import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import PressOneView from "./views/PressOneView.tsx";
import PressTwoView from "./views/PressTwoView.tsx";
import PressThreeView from "./views/PressThreeView.tsx";
import PressFourView from "./views/PressFourView.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/csp/scoreboard/1",
        element: <PressOneView />,
      },
      {
        path: "/csp/scoreboard/2",
        element: <PressTwoView />,
      },
      {
        path: "/csp/scoreboard/3",
        element: <PressThreeView />,
      },
      {
        path: "/csp/scoreboard/4",
        element: <PressFourView />,
      },
    ],
  },
]);

//Query Client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <RouterProvider router={router} />
      </HeroUIProvider>
    </QueryClientProvider>
  </StrictMode>,
);

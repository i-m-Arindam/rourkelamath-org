import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.js";
import SriRamakrishna from "./Pages/SriRamakrishna.js";
import SriSaradaDevi from "./Pages/SriSaradaDevi.js";
import SwamiVivekananda from "./Pages/SwamiVivekananda.js";
import OurMotto from "./Pages/OurMotto.js";
import History from "./Pages/History.js";
import Emblem from "./Pages/Emblem.js";
import Events from "./Pages/Events.js";
import Monk from "./Pages/Monk.js";
import Computer from "./Pages/Computer.js";
import Projects from "./Pages/Projects.js";
import Donate from "./Pages/Donate.js";
import ReligiousActivities from "./Pages/ReligiousActivities.js";
import RegCertificate from "./Pages/RegCertificate.js";
import Legal from "./Pages/Legal.js";
import Charter from "./Pages/Charter.js";
import Gst from "./Pages/Gst.js";
import PanRkm from "./Pages/PanRkm.js";
import Land from "./Pages/Land.js";
import RMR from "./Pages/RMR.js";
import Appeal from "./Pages/Appeal.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Not Found</p>
  },
  {
    path: "/sri-ramakrishna",
    element: <SriRamakrishna />,
  },
  {
    path: "/sri-sarada-devi",
    element: <SriSaradaDevi />,
  },
  {
    path: "/swami-vivekananda",
    element: <SwamiVivekananda />,
  },
  {
    path: "/our-motto",
    element: <OurMotto />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/emblem",
    element: <Emblem />,
  },
  {
    path: "/monk",
    element: <Monk />,
  },
  {
    path: "/computer",
    element: <Computer />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/spiritual-activities",
    element: <ReligiousActivities />,
  },
  {
    path: "/reg-certificate",
    element: <RegCertificate />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/charter-of-mc",
    element: <Charter />,
  },
  {
    path: "/gst",
    element: <Gst />,
  },
  {
    path: "/pan-rkm",
    element: <PanRkm />,
  },
  {
    path: "/land-record",
    element: <Land />,
  },
  {
    path: "/legal",
    element: <Legal />,
  },
  {
    path: "/rmr",
    element: <RMR />,
  },
  {
    path: "/appeal",
    element: <Appeal />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

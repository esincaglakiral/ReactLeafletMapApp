import "antd/dist/antd";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LocationProvider } from "./context/LocationContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css"; // tema dosyası
import "primereact/resources/primereact.min.css"; // PrimeReact bileşenleri için genel stil dosyası
import "primeicons/primeicons.css"; // PrimeIcons simge kütüphanesi için stil dosyası
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import AddMarkerForm from "./components/forms/createForm/AddMarkerForm";
import UpdateMarkerForm from "./components/forms/updateForm/UpdateMarkerForm";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-marker-form" element={<AddMarkerForm />}></Route>
        <Route
          path="/update-marker-form/:id"
          element={<UpdateMarkerForm />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "../../map/Map.css";
import "../../spinner/spinner.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import "./AddMarkerForm.css";
import { useLocationContext } from "../../../context/LocationContext";

function AddMarker({ setVisible }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setMarkers } = useLocationContext();
  const [isEdit] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    latitude: "",
    longitude: "",
    description: "",
    isActive: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/api/markers", {
        id: formData.id,
        latitude: formData.latitude,
        longitude: formData.longitude,
        description: formData.description,
        isActive: formData.isActive,
      });

      const newMarker = response.data;
      setMarkers((prev) => [...prev, newMarker]);
    } catch (error) {
    } finally {
      setIsLoading(false);
      setVisible(false);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleIsActiveChange = (event) => {
    setFormData({ ...formData, isActive: event.target.checked });
  }; // isActive durumunu güncelleyen fonksiyon

  useEffect(() => {
    async function fetchMarkers() {
      try {
        const response = await axios.get("http://localhost:3001/api/markers");
        setMarkers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMarkers();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-column gap-2">
      <br></br>

      <span className="p-float-label">
        <InputText
          type="text"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
        />
        <label htmlFor="latitude">Latitude</label>
      </span>

      <br></br>

      <span className="p-float-label">
        <InputText
          type="text"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
        />
        <label htmlFor="longitude">Longitude</label>
      </span>

      <br></br>

      <span className="p-float-label">
        <InputTextarea
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          cols={20}
        />
        <label htmlFor="description">Description</label>
      </span>

      <br></br>

      <div>
        <Checkbox
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleIsActiveChange}
        ></Checkbox>
      </div>

      <br></br>
      <div className="addButton">
        <Button
          type="submit"
          loading={isLoading}
          label="Add"
          icon="pi pi-check"
        />{" "}
      </div>
    </form>
  );
}
export default AddMarker;

import React, { useState } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "../../map/Map.css";
import "../../spinner/spinner.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import "../createForm/AddMarkerForm.css";
import { useLocationContext } from "../../../context/LocationContext";

function UpdateMarker({ setVisible }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit] = useState(false);
  const { marker, markers, setMarker, setMarkers } = useLocationContext();

  const handleSave = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:3001/api/markers/${marker.id}`,
        {
          id: marker.id,
          latitude: marker.latitude,
          longitude: marker.longitude,
          description: marker.description,
          isActive: marker.isActive,
        }
      );

      const updatedMarker = response.data;

      const index = markers.findIndex((m) => m.id === updatedMarker.id);

      const newMarkers = markers;
      markers[index] = updatedMarker;

      setMarkers(newMarkers);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setVisible(false);
    }
  };

  const handleChange = (event) => {
    setMarker({ ...marker, [event.target.name]: event.target.value });
  };

  const handleIsActiveChange = (event) => {
    setMarker({ ...marker, isActive: event.target.checked });
  }; // isActive durumunu güncelleyen fonksiyon

  return (
    <div>
      <form className="flex flex-column gap-2">
        <span className="p-float-label">
          <InputText
            type="text"
            name="id"
            value={marker.id}
            onChange={handleChange}
            disabled={isEdit}
          />
          <label htmlFor="id">ID</label>
        </span>

        <br></br>

        <span className="p-float-label">
          <InputText
            type="text"
            name="latitude"
            value={marker.latitude}
            onChange={handleChange}
          />
          <label htmlFor="latitude">Latitude</label>
        </span>
        <br></br>

        <span className="p-float-label">
          <InputText
            type="text"
            name="longitude"
            value={marker.longitude}
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
            value={marker.description}
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
            checked={marker.isActive}
            onChange={handleIsActiveChange}
          ></Checkbox>
        </div>
        <br></br>
        <div className="addButton">
          <Button
            type="submit"
            loading={isLoading}
            onClick={handleSave}
            label="Save"
            icon="pi pi-check"
          />{" "}
        </div>
      </form>
    </div>
  );
}
export default UpdateMarker;

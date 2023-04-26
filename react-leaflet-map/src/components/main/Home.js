import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import "../spinner/spinner.css";
import { Button } from "primereact/button";
import "./Home.css";
import { useLocationContext } from "../../context/LocationContext";
import LocationMap from "../map/LocationMap";
import LocationTable from "../LocationTable/LocationTable";
import AddMarker from "../forms/createForm/AddMarkerForm";

function Home() {
  const [isLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setMarkers } = useLocationContext();
  const [selectedMarker, setSelectedMarker] = useState({
    id: 0,
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    async function fetchMarkers() {
      try {
        const response = await axios.get("http://localhost:3001/api/markers");
        console.log(response);
        setMarkers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "gray",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 30,
            zIndex: 100,
          }}
        >
          <div className="card flex flex-wrap justify-content-center gap-3">
            <Button
              label="Create"
              icon="pi pi-plus"
              loading={isLoading}
              onClick={() => setVisible(true)}
            />
          </div>{" "}
        </div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "white",
            borderRight: "solid 2px blue",
            flex: 1,
            overflow: "auto",
          }}
        >
          <LocationTable setSelectedMarker={setSelectedMarker} />
        </div>
        <div
          style={{
            width: "100%",
            background: "green",
            flex: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          <LocationMap selectedMarker={selectedMarker} />
        </div>
        <Dialog visible={visible} onHide={() => setVisible(false)}>
          <AddMarker setVisible={setVisible} />
        </Dialog>
      </div>
    </div>
  );
}
export default Home;

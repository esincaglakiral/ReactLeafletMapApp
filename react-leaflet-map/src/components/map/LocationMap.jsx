import { Button } from "primereact/button";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import "./Map.css";
import axios from "axios";
import { useLocationContext } from "../../context/LocationContext";
import { Dialog } from "primereact/dialog";
import UpdateMarker from "../forms/updateForm/UpdateMarkerForm";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet/dist/images/";
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LocationMap({ selectedMarker }) {
  const [visible, setVisible] = useState(false);
  const { markers, setMarkers, setMarker,filteredMarkers } = useLocationContext();
  const mapRef = useRef(null);
console.log(filteredMarkers)
  const greenIcon = new Leaflet.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const redIcon = new Leaflet.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const handleDelete = async (id) => {

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/markers/${id}`
      );

      const deletedId = response.data;

      setMarkers((prev) => prev.filter((x) => x.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    if (mapRef.current && selectedMarker) {
      const { latitude, longitude } = selectedMarker;
      mapRef.current.flyTo([latitude, longitude], 13, mapRef.current.getZoom());
    }
  }, [selectedMarker, mapRef]);

  return (
    <div className="map-container">
      <MapContainer
        ref={mapRef}
        center={[41.0082376, 28.9783589]}
        zoom={8}
        scrollWheelZoom={true}
        maxWidth="50%"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {filteredMarkers.length > 0 ? (
          filteredMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.latitude, marker.longitude]}
              icon={marker.isActive ? greenIcon : redIcon}
            >
              <Popup maxWidth="100%" className="popup">
                <div>
                  <div className="description">{marker.description}</div>
                  <div className="p-d-flex p-flex-row buttons">
                    <Button
                      label=""
                      icon="pi pi-pencil"
                      onClick={() => {
                        const selectedMarker = markers.find(
                          (x) => x.id === marker.id
                        );
                        setMarker(selectedMarker);
                        setVisible(true);
                      }}
                    />
                    <span style={{ width: "10px", padding: "5px" }}></span>
                    <Button
                      label=""
                      onClick={() => handleDelete(marker.id)}
                      icon="pi pi-trash"
                      className="p-button-danger"
                    />{" "}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))
        ) : (
          markers.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.latitude, marker.longitude]}
              icon={marker.isActive ? greenIcon : redIcon}
            >
              <Popup maxWidth="100%" className="popup">
                <div>
                  <div className="description">{marker.description}</div>
                  <div className="p-d-flex p-flex-row buttons">
                    <Button
                      label=""
                      icon="pi pi-pencil"
                      onClick={() => {
                        const selectedMarker = markers.find(
                          (x) => x.id === marker.id
                        );
                        setMarker(selectedMarker);
                        setVisible(true);
                      }}
                    />
                    <span style={{ width: "10px", padding: "5px" }}></span>
                    <Button
                      label=""
                      onClick={() => handleDelete(marker.id)}
                      icon="pi pi-trash"
                      className="p-button-danger"
                    />{" "}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
      <Dialog
        visible={visible}
        key={visible.toString()}
        onHide={() => setVisible(false)}
      >
        <UpdateMarker setVisible={setVisible} />
      </Dialog>
    </div>
  );
  
}

export default LocationMap;

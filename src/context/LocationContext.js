import React, { createContext, useContext, useState } from "react";

const initialValue = {
  markers: [],
  marker: {},
  setMarkers: () => {},
  setMarker: () => {},
  filteredMarkers: [],
  setFilteredMarkers: () => {},
};

const LocationContext = createContext(initialValue);

export const LocationProvider = (props) => {
  const [markers, setMarkers] = useState([]);
  const [marker, setMarker] = useState({});
  const [filteredMarkers, setFilteredMarkers] = useState([]);

  const value = {
    markers,
    setMarkers,
    marker,
    setMarker,
    filteredMarkers,
    setFilteredMarkers,
  };

  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext);
};

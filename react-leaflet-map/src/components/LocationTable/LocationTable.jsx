import Column from "antd/es/table/Column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useLocationContext } from "../../context/LocationContext";
import { Button } from "react-bootstrap";
import "./LocationTable.css";
import { classNames } from "primereact/utils";

export default function LocationTable({ setSelectedMarker }) {
  const { markers, setFilteredMarkers } = useLocationContext();
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size] = useState(sizeOptions[0].value);
  const [globalFilter, setGlobalFilter] = useState("");

  const filterByValue = () => {
    const filteredArray = markers.filter((marker) => {
      const markerDescription = marker?.description?.toLowerCase();
      const markerLat = marker?.latitude?.toString();
      const markerLng = marker?.longitude?.toString();
      const filterValue = globalFilter.toLowerCase();

      if (filterValue === "true" || filterValue === "false") {
        return marker.isActive === (filterValue === "true");
      }

      return (
        markerDescription.includes(filterValue) ||
        markerLat.includes(filterValue) ||
        markerLng.includes(filterValue)
      );
    });

    setFilteredMarkers(filteredArray);
  };

  const clearGlobalFilter = () => {
    setGlobalFilter("");
    setFilteredMarkers([]);
  };

  const getActiveIcon = (rowData) => {
    const isActive = rowData.isActive;
    const iconClassName = classNames("pi", {
      "pi-check": isActive,
      "pi-times": !isActive,
    });
    const iconColor = isActive ? "green" : "red";
    return <i className={iconClassName} style={{ color: iconColor }} />;
  };

  const getRowClassName = (rowData) => {
    return `location-table-row-${rowData.id}`;
  };

  return (
    <>
      <div
        className="p-input-icon-left"
        style={{
          marginTop: "5px",
          marginLeft: "10px",
          backgroundColor: "Window",
        }}
      >
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search"
        />
        <div style={{ float: "right" }}>
          <Button style={{ marginLeft: "5px" }} onClick={filterByValue}>
            Filter
          </Button>
          <Button style={{ marginLeft: "10px" }} onClick={clearGlobalFilter}>
            Clear
          </Button>
        </div>
      </div>

      <DataTable
        size={size}
        value={markers}
        paginator
        rows={9}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "20rem" }}
        globalFilter={globalFilter}
        rowClassName={getRowClassName}
      >
        <Column field="latitude" header="Latitude" />
        <Column field="longitude" header="Longitude" />
        <Column
          field="description"
          header="Description"
          style={{ maxWidth: "5rem" }}
        />
        <Column field="isActive" header="Active" body={getActiveIcon} />
        <Column
          field="name"
          header="Map"
          body={(rowData) => (
            <div
              onClick={(e) => {
                setSelectedMarker({
                  id: rowData.id,
                  latitude: rowData.latitude,
                  longitude: rowData.longitude,
                });
              }}
            >
              {rowData.name}
              <i className="pi pi-map" style={{ color: "blue" }} />
            </div>
          )}
        />
      </DataTable>
    </>
  );
}

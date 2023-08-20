import React, { useState, useEffect } from "react";
import "./Map.css";

import L from "leaflet";

function Map() {
  let map;

  const coordinates = [51.96245, 19.2935];
  const zoom = 17;

  useEffect(() => {
    map = L.map("map", {
      scrollWheelZoom: false,
    });
    map.setView(coordinates, zoom);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    L.marker(coordinates, {
      title: "Majesty Barber",
    }).addTo(map);
  }, []);

  return <div id="map"></div>;
}

export default Map;

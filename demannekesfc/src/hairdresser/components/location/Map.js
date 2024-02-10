import React, { useState, useEffect } from "react";
import "./Map.css";

import L from "leaflet";

function Map() {
  let map;

  const coordinates = [50.85045, 4.34878];
  const zoom = 17;

  const name = "Majesty Barber";
  const address = "123 Oak Street, Prague";
  const popupContent = `
    <div class="p-1 flex flex-col justify-center items-center">
      <h2 class="text-temp-accent text-xl font-semibold">${name}</h2>
      <p class="text-temp-gray">${address}</p>
    </div>
  `;

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
    })
      .bindPopup(popupContent)
      .addTo(map);
  }, []);

  return <div id="map"></div>;
}

export default Map;

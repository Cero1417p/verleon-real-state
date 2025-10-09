"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";

// Fix para el ícono de marcador en SSR
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface PropertyMapProps {
  position: LatLngExpression;
  title: string;
  location: string;
}

const PropertyMap = ({ position, title, location }: PropertyMapProps) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <strong>{title}</strong>
          <br />
          {location}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// Envolver en dynamic para evitar errores de SSR
export default dynamic(() => Promise.resolve(PropertyMap), {
  ssr: false,
});

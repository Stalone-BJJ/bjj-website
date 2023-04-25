import "leaflet/dist/leaflet.css";
import { Icon, type LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MarkerIcon = new Icon({
  iconAnchor: [12.5, 41],
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

export const Map = () => {
  const chorleyCoords: LatLngTuple = [53.6541306, -2.6261];

  return (
    <div id="leaflet-map">
      <MapContainer center={chorleyCoords} scrollWheelZoom={true} zoom={14.5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={MarkerIcon} position={chorleyCoords}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

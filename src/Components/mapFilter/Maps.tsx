import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const HomeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const createPoiIcon = (color: string) =>
    new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

const poiIcons = {
    restaurant: createPoiIcon('orange'),
    hotel: createPoiIcon('blue'),
    tourist: createPoiIcon('violet'),
};

export interface POI {
    lat: number;
    lng: number;
    name: string;
    type: keyof typeof poiIcons;
}

interface MapViewProps {
    latitude?: number;
    longitude?: number;
    address?: string;
    pois?: POI[];
    homeLocation?: { latitude: number; longitude: number };
}

const Maps: React.FC<MapViewProps> = ({
    latitude = 0,
    longitude = 0,
    address,
    pois = [],
    homeLocation
}) => {

    const safeLat = Number(latitude);
    const safeLng = Number(longitude);

    const position: L.LatLngExpression = [
        isNaN(safeLat) ? 0 : safeLat,
        isNaN(safeLng) ? 0 : safeLng
    ];

    return (
        <MapContainer
            key={`${safeLat}-${safeLng}`}
            center={position} zoom={13} scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            <Marker position={position}>
                <Popup>
                    {address
                        ? address
                        : `Latitude: ${!isNaN(safeLat) ? safeLat.toFixed(4) : "N/A"}, 
                               Longitude: ${!isNaN(safeLng) ? safeLng.toFixed(4) : "N/A"}`
                    }
                </Popup>
            </Marker>

            {homeLocation && (
                <Marker
                    position={[homeLocation.latitude, homeLocation.longitude]}
                    icon={HomeIcon}
                >
                    <Popup>Your Home</Popup>
                </Marker>
            )}

            {pois.map((poi, index) => (
                <Marker
                    key={`poi-${index}`}
                    position={[poi.lat, poi.lng]}
                    icon={poiIcons[poi.type]}
                >
                    <Popup>{poi.name}</Popup>
                </Marker>
            ))}

        </MapContainer>
    );
};

export default Maps;

import React from 'react'
import { MapContainer, TileLayer, useMap, Popup,Marker } from 'react-leaflet'

export default function LocationMap() {
  return (
    
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
              )
}

// import React from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// const Map = () => {
//   return (
//     <div className='leaflet-container'>
//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
//         integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
//         crossorigin=""
//       />

//       <MapContainer center={[51.505, -0.09]} zoom={16} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <i className="fa-solid fa-location-dot"></i>
//         </Marker>
//       </MapContainer> 
//     </div>
//   );
// }
// export default Map;
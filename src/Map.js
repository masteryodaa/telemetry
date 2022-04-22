// import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, LayersControl, Tooltip, Polygon, Polyline } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";

import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import icon from './sailingBig.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    // iconSize: [25, 41],
    iconAnchor: [24, 48],
    // shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({ g12 }) {

    // const center = [25.58341413206471, 85.09624567435982];

    // console.log(g12);

    const coordinates = g12.coordinates;
    // console.log('coordinates', coordinates);

    const coordinates_data = g12.coordinates_data;
    // console.log('coordinates data', coordinates_data);

    console.log(coordinates[0])

    const center = [coordinates[0][0], coordinates[0][1]];



    return (
        <div className='mapBody'>

            <MapContainer id='map' center={center} zoom={4} scrollWheelZoom={true}>

                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="GMap">
                        <TileLayer
                            attribution='google'
                            url="http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.Overlay name="Filled Line">
                        <Polygon color='red' weight={1} fillColor="blue" positions={coordinates} fillOpacity={0.1} />
                    </LayersControl.Overlay>

                </LayersControl>


                {coordinates.map((coordinate, index) => {
                    return (
                        <Marker key={index} position={coordinate} center={center} >
                            <Tooltip>
                                <div>Average Speed : {String(coordinates_data[index][0]).slice(0, 5)} </div>
                                <div>Average Torque : {String(coordinates_data[index][1]).slice(0, 5)} </div>
                                <div>ME Power : {String(coordinates_data[index][2])
                                .slice(0, 8)
                                } </div>
                            </Tooltip>
                        </Marker>
                    )
                })}

                <Polyline color='red' weight={1} positions={coordinates} />


            </MapContainer>


        </div>
    )
}

export default Map
// import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, LayersControl, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

// import {icon} from './Icon'

function Map() {

    const center = [25.58341413206471, 85.09624567435982];
    const points = [
        [25.58341413206471, 90.09624567435982, 'A'],
        [30.58341413206471, 95.09624567435982, 'B'],
        [35.58341413206471, 100.09624567435982, 'C'],
        [40.58341413206471, 105.09624567435982, 'D'],
    ];


    return (
        <div className='mapBody'>

            <MapContainer id='map' center={center} zoom={13} scrollWheelZoom={true}>

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

                </LayersControl>


                <Marker position={center}
                    
                >
                    <Tooltip>Tooltip for Marker</Tooltip>
                </Marker>

              
                {points.map((point, index) => {
                    return (
                        <Marker position={[point[0],point[1]]} key={index}>
                            <Tooltip>{point[2]}</Tooltip>
                        </Marker>
                    )
                })}
            </MapContainer>


        </div>
    )
}

export default Map
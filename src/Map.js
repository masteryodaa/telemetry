import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'

function Map() {

    const center = [25.58341413206471, 85.09624567435982]

    return (
        <div className='mapBody' style={{
            // 'width': '50%',
            // 'display': 'flex',
            // 'flexDirection': 'column',
            // 'justifyContent': 'center',
            // 'alignItems': 'center', 
        }}>

            <div className='coordinates'>
                Plots Coordinates
            </div>

            <MapContainer id='map' center={center} zoom={13} scrollWheelZoom={true}>
                {/* <TileLayer
                    attribution='google'
                    url="http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                /> */}


                <LayersControl position="topright">
                    <LayersControl.BaseLayer name="OpenStreetMap">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked name="GMap">
                        <TileLayer
                            attribution='google'
                            url="http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                        />
                    </LayersControl.BaseLayer>
                    {/* <LayersControl.Overlay name="Marker with popup">
                        <Marker position={center}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </LayersControl.Overlay> */}

                </LayersControl>


                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default Map
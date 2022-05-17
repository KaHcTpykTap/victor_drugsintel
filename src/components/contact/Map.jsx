import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 32.08,
            lng: 34.78
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={32.085300}
                    lng={34.781769}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}


export default Map;
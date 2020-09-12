import React from 'react'
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';


class _GoogleMap extends React.Component {

    state = {
        lat: 32.0853,
        lng: 34.7818
    }
    onMarkerClick = (props, marker, event) => {
        console.log('props:', props, ' marker:', marker, 'event', event);
    }

    onMapClicked = (mapProps, map, ev) => {
        console.log('mapProps:', mapProps);
        console.log('map:', map);
        console.log('clickEvent:', ev);
        this.setState({ lat: ev.latLng.lat(), lng: ev.latLng.lng() })
    }

    render() {
        return (
            <Map initialCenter={this.state} center={this.state} onClick={this.onMapClicked} google={this.props.google} zoom={14}>

                <Marker position={this.state}
                    name={'Current location'} />

                <InfoWindow position={this.state} visible={true}  >
                    <div>
                        <h1>INFO WINDOW</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export const GoogleMap = GoogleApiWrapper({
    apiKey: ('AIzaSyA7wFxeGayDFtxLfft53sDr7sMu9cj7Vio')
})(_GoogleMap)
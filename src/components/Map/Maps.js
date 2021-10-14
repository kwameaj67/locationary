import React from 'react'
import { GoogleMap,useLoadScript } from '@react-google-maps/api';
import { MAPS_API } from '../../utils/config'
import './maps.css'
import { mapStyles } from './mapStyles'


const Maps = (props) => {
    const containerStyle = {
        width: '50vw',
        height: '50vh'
    };
    // const center = {
    //     lat: -3.745,
    //     lng: -38.523
    //   };
    const options = {
        styles : mapStyles,
        zoomControl:true,
        disableDefaultUI:true
    }
    const { isLoaded,loadError } = useLoadScript({
        googleMapsApiKey:MAPS_API,

    })
    if (loadError) return <div className="loading_text">Error loading Google Maps🥶</div>
    if (!isLoaded) return <div className="loading_text">Loading maps.. Please wait</div>
    return (
        // <LoadScript googleMapsApiKey={MAPS_API}>
            <GoogleMap
                className="maps"
                mapContainerStyle={containerStyle}
                zoom={10}
                center={props.center}
                options={options}
                onClick={props.onClickAddress}
                >
                  {props.children}
            </GoogleMap>
        // </LoadScript>
    )
}

export default Maps

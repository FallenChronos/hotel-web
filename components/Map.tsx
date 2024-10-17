import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px', // Adjust height as needed
};

const center = {
    lat: 19.808131051620165,  // Replace with your hotel's latitude
    lng: 85.82272640814625 // Replace with your hotel's longitude
};

const GoogleMapComponent: React.FC = () => {
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [isLoaded, setIsLoaded] = useState(false);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    // Check to ensure client-side rendering only
    useEffect(() => {
        setIsLoaded(typeof window !== 'undefined');
    }, []);

    // Handle missing API key
    if (!googleMapsApiKey) {
        console.error('Google Maps API key is missing!');
        return <div>Google Maps cannot be loaded at this time.</div>;
    }

    // Prevent rendering the map on the server side
    if (!isLoaded) return null;

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15} // Adjust zoom level as needed
            >
                {/* Marker for the hotel location */}
                <Marker title="Hotel Agrawal Pride" position={center} onClick={() => setShowInfoWindow(true)} />

                {/* InfoWindow with the location name */}
                {showInfoWindow && (
                    <InfoWindow position={center} onCloseClick={() => setShowInfoWindow(false)}>
                        <div>
                            <h3 className="font-bold">Hotel Agrawal Pride</h3> {/* Replace with your hotel name */}
                            <p>Marchikote Square, Puri, Odisha 752001</p> {/* Add additional details if needed */}
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;

import { React, useState, useEffect } from 'react';

export default function Geolocation() {
    const [geolocation, setGeolocation] = useState({});

    useEffect(() => {
       const watchID =  navigator.geolocation.watchPosition(handlePositionReceived)
        
       return () => navigator.geolocation.clearWatch(watchID);
    }, []);

    function handlePositionReceived({coords}) {
        const { latitude, longitude } = coords
    
        setGeolocation({ latitude, longitude });
    }

    return (
        <>
            <h1>Geolocation</h1>
            Latitude: { geolocation.latitude } <br />
            Longitude: { geolocation.longitude }
        </>

    )

}
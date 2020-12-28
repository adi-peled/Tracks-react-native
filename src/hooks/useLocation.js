import React, { useContext, useEffect, useState } from 'react'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'


export default (callback) => {

    const [err, setErr] = useState(null)

    useEffect(() => {
        startWatching()
    }, [])

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            )
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    }
    return [err]

}
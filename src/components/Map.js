import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'


const Map = () => {

    const { state: { currLocation } } = useContext(LocationContext)
    if (!currLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    return <MapView style={styles.map}
        initialRegion={{
            ...currLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        <Circle
            center={currLocation.coords}
            radius={30}
            strokeColor="rgba(158,158,255,1)"
            fillColor="rgba(158,158,255,.3)"
        />
        {/* <Polyline coordinates={points} /> */}
    </MapView>

}


const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map
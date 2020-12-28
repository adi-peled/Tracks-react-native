import React, { useContext } from 'react'
import useLocation from '../hooks/useLocation'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocations'
const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    const [err] = useLocation(addLocation)

    return (
        <    SafeAreaView >
            <Text> create track</Text>
            <Map />
            {err ? <Text> pls enable location services</Text> : null}
        </    SafeAreaView >
    )
}


const styles = StyleSheet.create({

})

export default TrackCreateScreen
import React, { useContext, useCallback } from 'react'
import useLocation from '../hooks/useLocation'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocations'
import { FontAwesome } from '@expo/vector-icons'
const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <    SafeAreaView >
            <Text> cre ate track</Text>
            <Map />
            <TrackForm />
            {err ? <Text> pls enable location services</Text> : null}
        </    SafeAreaView >
    )
}


TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />,
}


const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen) 
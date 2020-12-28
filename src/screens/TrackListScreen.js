import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>TrackListScreen </Text>
            <Button title="go to track detail" onPress={() => navigation.navigate('/TrackDetail')} />

        </>
    )
}


const styles = StyleSheet.create({

})

export default TrackListScreen
import React, { useContext } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Text, ListItem, Icon } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    // console.log({ state });
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text style={{ fontSize: 48 }}>TrackListScreen </Text>
            <FlatList
                style={styles.list}
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    console.log('item', item.name);
                    return (
                        <TouchableOpacity style={styles.item} onPress={() =>
                            navigation.navigate('TrackDetail', { _id: item._id })}>

                            <ListItem key={item._id} bottomDivider>


                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <Icon name='chevron-right' />


                            </ListItem>


                        </TouchableOpacity>
                    )
                }}
            />

        </>
    )
}


TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks'
    }
}

const styles = StyleSheet.create({
    list: {
    },
    item: {
        color: 'red',
    }
})

export default TrackListScreen
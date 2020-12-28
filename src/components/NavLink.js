import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            {/* <Spacer> */}
            <Text style={styles.link}>{text}</Text>
            {/* </Spacer> */}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default withNavigation(NavLink)
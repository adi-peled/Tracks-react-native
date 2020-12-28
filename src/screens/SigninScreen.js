import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
const SigninScreen = () => {

    const { state, signin, clearErrorMsg } = useContext(Context)
    return (
        <View style={styles.container}>
            <NavigationEvents
               onWillFocus={clearErrorMsg}
            />
            <AuthForm headerText="Sign In to your account"
                errMsg={state.errMsg}
                submitBtnText="Sign In"
                onSubmit={signin} />
            <NavLink
                routeName="Signup"
                text='Dont have an account? Signup instead'
            />
        </View>
    )
}


SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
})

export default SigninScreen
import React, { useContext ,useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMsg } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMsg}
            />
            <AuthForm headerText="Sign up to Tracker  "
                errMsg={state.errMsg}
                submitBtnText="Sign Up"
                onSubmit={signup} />
            <NavLink
                routeName="Signin"
                text='Already have an account? Sign in instead'
            />
        </View>
    )
}


SignupScreen.navigationOptions = () => {
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

export default SignupScreen
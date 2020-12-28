import React, { useState } from 'react'
import {  StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'



const AuthForm = ({ headerText, errMsg, onSubmit, submitBtnText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            {/* <Spacer> */}
            <Text h3> {headerText}</Text>
            {/* </Spacer> */}
            <Input autoCapitalize='none'
                autoCorrect={false}
                label="email"
                value={email}
                onChangeText={setEmail} />
            {/* <Spacer /> */}
            <Input secureTextEntry
                autoCapitalize='none'
                autoCorrect={false}
                label="password"
                value={password}
                onChangeText={setPassword} />
            {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
            {/* <Spacer> */}
            <Button title={submitBtnText} onPress={() => onSubmit({ email, password })} />
            {/* </Spacer> */}
        </>
    )

}

const styles = StyleSheet.create({
    errMsg: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
})

export default AuthForm
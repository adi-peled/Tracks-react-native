import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errMsg: action.payload }
        case 'signin':
            return { errMsg: '', token: action.payload }
        case 'clear_error_msg':
            return { ...state, errMsg: '' }
        case 'signout':
            return { token: null, errMsg: '' }

        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}



const clearErrorMsg = dispatch => () => {
    dispatch({ type: 'clear_error_msg' })
}


const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        console.log('err:', err.message);
        dispatch({ type: 'add_error', payload: 'something went wrong with signup' })
    }
}


const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signinp', payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'something went wrong with signin' })

    }

}




const signout = dispatch =>async () => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'signout' })
        navigate('loginFlow')
}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMsg, tryLocalSignin },
    { token: null, errMsg: '' }
)



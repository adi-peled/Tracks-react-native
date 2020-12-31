import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const instance = axios.create({
    baseURL: 'http://379fdc6d7730.ngrok.io'
})


//this functions rn every time sent request to  the api
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        console.log(err);
        return Promise.reject(err)
    }
)


export default instance
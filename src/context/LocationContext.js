import createDataContext from './createDataContext'


const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_curr_location':
            return { ...state, currLocation: action.payload };
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        case 'change_name':
            return { ...state, name: action.payload };
        case 'reset':
            return { ...state, name: '', locations: [] }
        default:

            return state
    }
}

const reset = disptach => () => {
    disptach({ type: 'reset' })
}

const changeName = disptach => (name) => {
    disptach({ type: 'change_name', payload: name })
}

const startRecording = disptach => () => {
    disptach({ type: 'start_recording' })
}
const stopRecording = disptach => () => {
    disptach({ type: 'stop_recording' })
}
const addLocation = disptach => (location, recording) => {
    disptach({ type: 'add_curr_location', payload: location })
    if (recording) {
        disptach({ type: 'add_location', payload: location })
    }
}



export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, changeName, addLocation,reset },
    { recording: false, locations: [], currLocation: null, name: '' }
)
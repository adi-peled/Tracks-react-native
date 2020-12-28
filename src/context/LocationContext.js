import createDataContext from './createDataContext'


const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_curr_location':
            return { ...state, currLocation: action.payload }
        default:
            return state
    }
}

const startRecording = disptach => { }
const stopRecording = disptach => { }
const addLocation = disptach => (location) => {
    disptach({ type: 'add_curr_location', payload: location })
}



export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { redcoring: false, locations: [], currLocation: null }
)
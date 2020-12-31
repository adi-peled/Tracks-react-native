import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
const TrackForm = () => {

    const { state: { name, recording, locations }
        , startRecording, stopRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

    return (
        <>
            <Input placeholder="enter name" onChangeText={changeName} value={name} />
            {recording ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="start recording" onPress={startRecording} />
            }


            {
                !recording && locations.length ? <Button title="save recording" onPress={saveTrack} /> : null
            }
        </>
    )
}


export default TrackForm
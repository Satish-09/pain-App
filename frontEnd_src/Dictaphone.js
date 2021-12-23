import React, { Fragment } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
//import Speechonown from '../Speech/SpeechText/Speechonown'
  import Speechonown from './Speechonown.jsx'
      const Dictaphone = () => {
      const { transcript, resetTranscript } = useSpeechRecognition()




    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log("Browser not supporting")
        return null
    }



    return (

        <Fragment>
            <div><textarea type="text" style={{ width: "450px",height:"126px", cols: "10", rows: "20",marginRight: "10px",paddingRight:"15px", paddingLeft: "15px"  }}   onSelect={SpeechRecognition.startListening} defaultValue={transcript} />
            </div>
        </Fragment>
    )
}
export default Dictaphone

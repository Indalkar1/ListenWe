
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useState} from "react";
import useClipboard from "react-use-clipboard";

const App = () => {
  const { transcript, resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(transcript);
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>Just clik on start listening and 🔊🔊🔊🔊 then click on copy button to copy text</p>

                <div className="main-content">
                    {transcript}
                </div>

                <div className="btn-style">
                    <button onClick={setCopied}>
                       {isCopied ? "Copied" : "Copy"}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onClick={resetTranscript}>Reset</button>


                </div>

            </div>

        </>
    );
};

export default App;

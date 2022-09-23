import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 600,
    height: 400,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const [takePic,setTakePic]=useState(false);
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? 
                takePic? <>
                <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> <br/>
                <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                </>
               : ""
                : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setTakePic(false)
                        setImage("")
                    }}
                        className="webcam-btn">
                        Cancel</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        setTakePic(true);
                        capture();
                    }}
                        className="webcam-btn">Take Picture</button>
                }
            </div>
        </div>
    );
};
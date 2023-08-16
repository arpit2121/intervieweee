import React from "react";

const RecordView = () => {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({
        video: true,
        facingMode: { exact: "environment" }
    });

    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
    );
};
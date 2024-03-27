"use client";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "../utils/render-predictions";


const ObjectDetection = () => {
  let detectInterval;
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const cocoRun = async () => {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 100);
  };

  async function runObjectDetection(net) {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const detectedObjects = await net.detect(
        webcamRef.current.video,
        undefined,
        0.6
      );
      console.log(detectedObjects);
      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);
    }
  }

  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };
  useEffect(() => {
    cocoRun();
    showmyVideo();
  }, []);
  return (
    <div className="mt-8">
      {isLoading ? (
        <h1 className="gradient-title">Loading AI Model</h1>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          {/* WEBCAM */}
          <Webcam
            ref={webcamRef}
            className="lg:h-[480px] rounded-md w-full"
            muted
          />
          {/* CANVAS */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-9999 w-full lg:h-[480px]"
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;

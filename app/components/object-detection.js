"use client"
import React from "react";
import Webcam from "react-webcam";

const ObjectDetection = () => {
  return (
    <div className="mt-8">
      <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
        {/* WEBCAM */}
        <Webcam className="lg:h-[720px] rounded-md w-full" muted/>
      </div>
    </div>
  );
};

export default ObjectDetection;

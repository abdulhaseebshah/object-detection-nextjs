import Image from "next/image";
import ObjectDetection from "./components/object-detection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tighter md:px-6 text-center gradient-title">Object Detection</h1>
      <ObjectDetection />
    </main>
  );
}

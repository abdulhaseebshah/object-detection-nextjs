import AboutUs from "./components/about-us";
import ObjectDetection from "./components/object-detection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-8 py-6">
      <header className="flex justify-between items-center w-full">
        <div class="text-3xl pl-3 flex group cursor-pointer items-center">
          <span class=" -translate-x-3  group-hover:-translate-x-1 group-hover:text-green-500 transition-all font-light">
            {String.fromCharCode(123)}
          </span>
          <span class="font-medium text-4xl tracking-tighter text-center text-white">
            ObjectLens
          </span>
          <span class="translate-x-3 group-hover:translate-x-1 transition-all group-hover:text-green-500 font-light">
            {String.fromCharCode(125)}
          </span>
        </div>
        <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 flex items-center gap-2 border border-[#222] hover:bg-[#222]">
          About Us
        </button>
      </header>
      {/* <AboutUs /> */}
      <ObjectDetection />
      <p className="text-[#444] mt-2">Developed By: Abdul Haseeb</p>
    </main>
  );
}

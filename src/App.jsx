import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-[#555555] rounded-lg w-11/12 text-center text-teal-500 mt-[40px]
       px-10 py-2 text-3xl xl:text-4xl font-bold border-b-2 border-teal-500 ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}

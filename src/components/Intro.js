import "./Intro.css";
import IntroC from "../intro components/IntroC"
import data from "./dataIntro"
function Intro() {

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className=" text-center">
          <h1 className=" font-bold heading">DL91 Artist</h1>
          <div className=" h-[4px] w-1/5 mt-1 mx-auto" style={{ backgroundColor: 'rgb(212, 206, 206)' }}></div>
          <IntroC data={data}></IntroC>
        </div>
    </div>
  );
}

export default Intro;
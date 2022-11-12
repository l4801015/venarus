import { useEffect } from "react";
import { useAppState } from "../AppContext";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Nav from "./nav";
import Header from "./header";
import Marquee from "./marquee";
import Features from "./features";
import ComplexAction from "./complexAction";
import AboutProdaction from "./aboutProduction";
import ExpertOpinion from "./expertOpinion";
import UsefulInformation from "./usefulInformation";
import WhereBuy from "./whereBuy";
import Footer from "./footer";


const App = () => {
  const { state, dispatch } = useAppState();
  const { height, width } = useWindowDimensions();

  useEffect(
    () =>
      dispatch({
        type: "set dimensions",
        payload: { width: width, height: height },
      }),
    [height, width]
  );

  const fadeOut = (isOpen: boolean) => {
    return {
      opacity: `${isOpen ? 1 : 0}`,
      transition: "opacity 0.5s",
    };
  };

  return (
    <>
      <Nav />
      <div style={fadeOut(state.app.initialLoad)}>
        <Header />
        <Marquee />
        <Features />
        <ComplexAction />
        <AboutProdaction />
        <ExpertOpinion />
        <UsefulInformation />
        <WhereBuy />
        <Footer />
      </div>
    </>
  );
};

export default App;
//    <>
//      {/* Slider controls and buy button */}
//      <div className="relative">
//        <Nav />
//        <Waves />
//        <div className="font-[700] text-[47px] mt-[10px] mx-[16px] font-Merriweather leading-[43px]">
//          <span>Надежный помощник</span>{" "}
//          <span className="inline-block">в лечении варикоза</span>
//        </div>
//        <div className="relative top-[-20px]">
//          <Slider />
//          <div className="flex justify-center">
//            {/* button */}
//            <div className="flex justify-center items-center mt-[16px] w-[132px] h-[34px] border-pink-500 border rounded-full border-[#5B0E58]">
//              <span className="font-normal text-sm text-[#5B0E58]">
//                Где купить &gt;
//              </span>
//            </div>
//          </div>
//        </div>
//      </div>
//    </>

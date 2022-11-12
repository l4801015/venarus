import { useEffect } from "react";
import { useAppState } from "../AppContext";
import { setHeight } from "../utils";
import { shapes } from "../data/shapes";
import anime from "animejs";

const ShapeUp = () => {
  useEffect(() => {
    anime({
      targets: ".morph-path1",
      d: [{ value: shapes[2].d }, { value: shapes[1].d }],
      duration: 10000,
      direction: "alternate",
      autoplay: true,
      easing: "linear",
      elasticity: 100,
      loop: true,
    });
  }, []);

  return (
    <svg
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d={shapes[0].d} fill="#fff" className="morph-path1" />
    </svg>
  );
};
const ShapeDown = () => {
  useEffect(() => {
    anime({
      targets: ".morph-path1",
      d: [{ value: shapes[5].d }, { value: shapes[4].d }, { value: shapes[6].d }],
      duration: 13000,
      direction: "alternate",
      autoplay: true,
      easing: "linear",
      elasticity: 100,
      loop: true,
    });
  }, []);

  return (
    <svg
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d={shapes[3].d} fill="#fff" className="morph-path1" />
    </svg>
  );
};

const Wave = () => {
  const { width, height } = useAppState().state.app;

  const dimensions = {
    width: width,
    height: setHeight(width, height),
  };

  return (
    <div
      style={dimensions}
      className="relative bg-gradient-to-r to-[#590D56] from-[#8C1688]"
    >
      <div style={dimensions} className="absolute inset-0 rotate-180 translate-y-[-.4em]">
        <ShapeUp />
      </div>
      <div style={dimensions} className="absolute inset-0 translate-y-[.4em]">
        <ShapeDown />
      </div>
    </div>
  );
};

export default Wave;

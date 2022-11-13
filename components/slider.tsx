import { useState } from "react";
import { useAppState } from "../AppContext";
import {
  toRad,
  toDeg,
  mapFromSystemToSystem,
  vector,
  sin,
  cos,
  matrixProd,
  isLess,
  less600,
  less850,
  less1100,
} from "../utils";
import Image from "next/image";

const Slider = () => {
  const { state } = useAppState();
  const { width } = state.app;
  const mapX = mapFromSystemToSystem(
    -1,
    1,
    less600(width) ? -1000 : -220,
    less600(width) ? 1000 : 220
  );
  const mapY = mapFromSystemToSystem(
    -1,
    1,
    less600(width) ? 0 : -90,
    less600(width) ? 0 : 30
  );
  const del = 360 / 3;
  const [theta, setTheta] = useState<number>(0);
  const triangle = [
    vector(cos(toRad(0)), sin(toRad(0))),
    vector(cos(toRad(120)), sin(toRad(120))),
    vector(cos(toRad(240)), sin(toRad(240))),
  ];
  const rotationMatrix = [
    [cos(toRad(theta)), sin(toRad(theta))],
    [-sin(toRad(theta)), cos(toRad(theta))],
  ];

  const rotatedTriangle = matrixProd(triangle, rotationMatrix);

  const vertex1 = rotatedTriangle[0];
  const vertex2 = rotatedTriangle[1];
  const vertex3 = rotatedTriangle[2];

  const translate = (vertex: number[]) => {
    const x = mapX(vertex[1]);
    const y = mapY(vertex[0]);
    const c = vertex[0] > 0 ? true : false; // detection center element
    return {
      zIndex: `${c ? 100 : 10}`,
      transform: `translate(${x}px, ${y}px) scale(${
        less600(width) ? 1 : c ? 1 : 0.8
      })`,
      opacity: `${less600(width) ? (c ? 1 : 0) : 1}`,
      transition: "all 1.2s",
    };
  };

  return (
    <>
      <div className="relative l-96 w-full h-[400px]">
        <div className="w-[400px] m-auto">
          <div
            className="absolute w-[400px] h-[400px]"
            style={translate(vertex1)}
          >
            <Image src="/venarus/1.png" layout="fill" />
          </div>
          <div
            className="absolute w-[400px] h-[400px]"
            style={translate(vertex2)}
          >
            <Image src="/venarus/2.png" layout="fill" />
          </div>
          <div
            className="absolute w-[400px] h-[400px]"
            style={translate(vertex3)}
          >
            <Image src="/venarus/3.png" layout="fill" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[30px]">
        {/* Arrows */}
        <div className="flex gap-[30px]">
          {/* Arrow left */}
          <div
            onClick={(e) => {
              e.preventDefault();
              setTheta(theta === -240 ? 0 : theta - del);
            }}
            className="relative w-[67px] h-[67px] border border-[#5B0E58] rounded-full"
          >
            <div className="absolute w-[18px] h-[18px] border-l border-b border-[#5B0E58] rotate-45 bottom-1/2 right-[45%] translate-x-1/2 translate-y-1/2"></div>
          </div>
          {/* Arrow right */}
          <div
            onClick={(e) => {
              e.preventDefault();
              setTheta(theta === 240 ? 0 : theta + del);
            }}
            className="relative w-[67px] h-[67px] border border-[#5B0E58] rounded-full"
          >
            <div className="absolute w-[18px] h-[18px] border-r border-t border-[#5B0E58] rotate-45 bottom-1/2 right-[55%] translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <div className="relative w-[263px] h-[67px] border-[1px] border-[#5B0E58] rounded-full">
          <span className="absolute top-2/4 left-2/4 translate-x-[-50%] text-[#5B0E58] translate-y-[-50%] font-[RobotoRegular] text-[18px] leading-[21px]">
            Подробнее &#62;
          </span>
        </div>
      </div>
    </>
  );
};

export default Slider;

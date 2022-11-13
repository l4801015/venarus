import Image from "next/image";
import { useState, useEffect } from "react";
import { mapFromSystemToSystem, matrixProd } from "../utils";
import { PlayButton } from "./utilsComponents";
import Wave from "./wave";

const WithInfo = () => (
  <>
    <div className="font-[MerriweatherBold] text-[30px] leading-[30px]">
      <span>О производстве</span>
      <span className="block">Венарус</span>
    </div>
  </>
);
const t = 1;
const pM = [
  [1, 0, 0],
  [0, 1, 0],
  [t, t, 1],
];
const nM = [
  [1, 0, 0],
  [0, 1, 0],
  [-t, -t, 1],
];
const v2 = (x: number, y: number) => [x, y, 1];
const matrix = [v2(-2, 0), v2(-1, 0), v2(0, 0), v2(1, 0), v2(2, 0)];

const Slider2 = () => {
  const [pos, setPos] = useState(matrix);
  // get all xs
  const xs = pos.map((arr: number[]) => arr[0]);
  // get index of view
  const index = xs.findIndex((i: number) => i === 0);
  // check if index in range of xs
  const isInRange = (i: number) => i !== -1;
  // check if index on the left side of xs
  const isOnLeft = (i: number) => i === 0;
  // check if index on the right side of xs
  const isOnRight = (i: number) => i === xs.length - 1;

  useEffect(() => {}, [pos]);

  const map = mapFromSystemToSystem(-1, 1, -400, 400);
  const translate = (n: number) => {
    const x = map(n);
    const isIndex = (i: number) => i === 0;
    const isFromLeft = (i: number) => i === -1;

    return {
      opacity: `${isIndex(n) || isFromLeft(n) ? 1 : 0}`,
      transform: `translateX(${x}px) scale(${x === 0 ? 1 : 0.6})`,
      transition: "all 1s",
    };
  };

  return (
    <div className="flex flex-col gap-[30px] items-center laptop:flex-row laptop:justify-end">
      <div className="relative w-[390px] h-[230px] mobile:w-[458px] mobile:h-[270px]">
        {/* image 1 */}
        <div className="absolute w-[100%] h-[100%]" style={translate(xs[0])}>
          <Image src="/venarus/slider2_image1.png" layout="fill" />
          {xs[0] === 0 ? <PlayButton /> : <></>}
        </div>
        {/* image 2 */}
        <div className="absolute w-[100%] h-[100%]" style={translate(xs[1])}>
          <Image src="/venarus/slider2_image2.png" layout="fill" />
          {xs[1] === 0 ? <PlayButton /> : <></>}
        </div>
        {/* image 3 */}
        <div className="absolute w-[100%] h-[100%]" style={translate(xs[2])}>
          <Image src="/venarus/slider2_image1.png" layout="fill" />
          {xs[2] === 0 ? <PlayButton /> : <></>}
        </div>
        {/* image 4 */}
        <div className="absolute w-[100%] h-[100%]" style={translate(xs[3])}>
          <Image src="/venarus/slider2_image2.png" layout="fill" />
          {xs[3] === 0 ? <PlayButton /> : <></>}
        </div>
        {/* image 5 */}
        <div className="absolute w-[100%] h-[100%]" style={translate(xs[4])}>
          <Image src="/venarus/slider2_image1.png" layout="fill" />
          {xs[4] === 0 ? <PlayButton /> : <></>}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex gap-[28px] flex-row justify-center laptop:flex-col">
        {/* Left arrow */}
        {isOnLeft(index) ? (
          <div className="relative w-[68px] h-[68px] border border-[#777] rounded-full">
            <div className="absolute w-[18px] h-[18px] border-l border-b border-[#777] rotate-45 bottom-1/2 right-[45%] translate-x-1/2 translate-y-1/2"></div>
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              setPos(matrixProd(pos, pM));
            }}
            className="relative w-[68px] h-[68px] border border-[#fff] rounded-full"
          >
            <div className="absolute w-[18px] h-[18px] border-l border-b border-[#fff] rotate-45 bottom-1/2 right-[45%] translate-x-1/2 translate-y-1/2"></div>
          </div>
        )}

        {/* Right arrow */}
        {isOnRight(index) ? (
          <div className="relative w-[68px] h-[68px] border border-[#777] rounded-full">
            <div className="absolute w-[18px] h-[18px] border-r border-t border-[#777] rotate-45 bottom-1/2 right-[55%] translate-x-1/2 translate-y-1/2"></div>
          </div>
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              setPos(matrixProd(pos, nM));
            }}
            className="relative w-[68px] h-[68px] border border-[#fff] rounded-full"
          >
            <div className="absolute w-[18px] h-[18px] border-r border-t border-[#fff] rotate-45 bottom-1/2 right-[55%] translate-x-1/2 translate-y-1/2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutProduction = () => {
  return (
    <section className="relative h-[858px] overflow-hidden mb-[0px]">
      <div className="absolute overflow-hidden inset-0 bg-gradient-to-r to-[#590D56] from-[#8C1688]">
        <div className="absolute top-0 w-screen h-[300px]">
          <Image src="/venarus/wave-up.svg" layout="fill" />
        </div>
        <div className="absolute bottom-0 w-screen h-[300px]">
          <Image src="/wave-down.svg" layout="fill" />
        </div>
      </div>
      <div className="relative z-20 flex gap-[30px] flex-col translate-y-[20%] laptop:translate-y-[100%] laptop:gap-[50px] laptop:flex-row laptop:max-w-[1160px] laptop:m-auto">
        <div className="flex flex-col gap-[26px] mobile:flex-row laptop:flex-[1_1_auto] laptop:!flex-col p-[16px]">
          <WithInfo />
        </div>
        <div className="laptop:flex-[200_1_auto]">
          <Slider2 />
        </div>
      </div>

      <div className="relative z-20 flex justify-center translate-y-[130%] laptop:translate-y-[400%] my-[35px] laptop:max-w-[1160px] laptop:mx-auto laptop:justify-end">
        <div className="relative w-[263px] h-[67px] border-[1px] border-white rounded-full">
          <span className="absolute top-2/4 left-2/4 translate-x-[-50%] text-[#fff] translate-y-[-50%] font-[RobotoRegular] text-[18px] leading-[21px]">
            Подробнее &#62;
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutProduction;

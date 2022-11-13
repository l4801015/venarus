import Image from "next/image";
import { useState, useEffect } from "react";
import { mapFromSystemToSystem, matrixProd } from "../utils";
import { useAppState } from "../AppContext";
import { PlayButton } from "./utilsComponents";

const WithInfo = () => (
  <>
    <div className="font-[MerriweatherBold] text-[30px] leading-[30px]">
      <span>Мнение</span>
      <span className="block">специалистов</span>
    </div>

    <div className="font-[RobotoRegular] text-[16px] leading-[24px] text-[#777777]">
      <span className="block whitespace-nowrap">Фармакотерапия —</span>
      <span className="block whitespace-nowrap">неотъемлемый компонент</span>
      <span className="block whitespace-nowrap">современного лечения</span>
      <span className="block whitespace-nowrap">хронического заболевания вен.</span>
    </div>
  </>
);

const v2 = (x: number, y: number) => [x, y, 1];
const matrix = [v2(0, 0), v2(1, 0), v2(2, 0)];

const Slider3 = () => {
  const [pos, setPos] = useState(matrix);
  const [active, setActive] = useState(pos[0][0]);
  // get all xs
  const xs = pos.map((arr: number[]) => arr[0]);

  useEffect(() => {}, [xs]);

  const styles = (i: number) => {
    return {
      opacity: `${i === active ? 1 : 0}`,
      transition: "opacity 2s",
    };
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[30px]">
        <div className="relative w-[370px] h-[248px] mobile:w-[600px] mobile:h-[403px] tablet:!w-[848px] tablet:!h-[570px]">
          {xs.map((n: number, i: number) => {
            return (
              <div key={i} className="absolute w-full h-full" style={styles(i)}>
                <Image src="/venarus/slider3_image1.png" layout="fill" />
              </div>
            );
          })}
        </div>
        <div className="flex gap-[16px] justify-center mobile:justify-start">
          {xs.map((n: number, i: number) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setActive(i);
                }}
                key={i}
                className="w-[16px] h-[16px] rounded-full border border-black"
                style={{
                  backgroundColor: `${i === active ? "black" : "white"}`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ExpertOpinion = () => {
  return (
    <section className="overflow-hidden mb-[0px]">
      <div className="flex gap-[30px] flex-col laptop:gap-[50px] laptop:flex-row laptop:max-w-[1160px] laptop:m-auto">
        <div className="flex flex-col gap-[26px] mobile:flex-row laptop:flex-[1_1_auto] laptop:!flex-col p-[16px]">
          <WithInfo />
        </div>
        <div className="laptop:flex-[200_1_auto]">
          <Slider3 />
        </div>
      </div>
    </section>
  );
};

export default ExpertOpinion;

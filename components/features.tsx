import Image from "next/image";
import { useState, useEffect } from "react";
import { not } from "../utils";
const PE = () => (
  <div className="relative w-[263px] h-[67px]">
    <div className="absolute w-[67px] h-[67px]">
      <Image src="/venarus/provenEffectiveness.svg" layout="fill" />
    </div>
    <div className="absolute w-[165px] h-[50px] right-0 top-2/4 translate-y-[-50%]">
      <span className="font-Merriweather text-[#242424] leading-[25px] text-[16px]">
        Доказанная эффективность
      </span>
    </div>
  </div>
);
const ND = () => (
  <div className="relative w-[263px] h-[57px]">
    <div className="absolute w-[67px] h-[57px]">
      <Image src="/venarus/newDosage.svg" layout="fill" />
    </div>
    <div className="absolute w-[165px] h-[50px] right-0 top-2/4 translate-y-[-50%]">
      <span className="font-Merriweather text-[#242424] leading-[25px] text-[16px]">
        Новая дозировка 100 мг + 900 мг
      </span>
    </div>
  </div>
);
const CR = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {



  }, [isOpen]);

  const fade = (isOpen: boolean) => {
    return {
      opacity: `${isOpen ? 1 : 0}`,
      transition: "opacity .5s"
    };
  };
  return (
    <div className="relative w-[360px] h-[57px]">
      <div className="absolute w-[67px] h-[57px]">
        <Image src="/venarus/comfortableReception.svg" layout="fill" />
      </div>
      <div className="absolute w-[263px] h-[50px] right-0 top-2/4 translate-y-[-50%]">
        <span className="font-Merriweather text-[#242424] leading-[25px] text-[16px]">
          Удобный прием.
        </span>
        <span className="block font-Merriweather text-[#242424] leading-[25px] text-[16px]">
          Одна таблетка в сутки*
        </span>
        <div onClick={(e) => {
          e.preventDefault();
          setIsOpen(not(isOpen));

          }} className="absolute w-[30px] h-[30px] bottom-0 right-[20px]">
          <Image src="/venarus/info.svg" layout="fill" />
        </div>
      </div>
      <div style={fade(isOpen)} className="absolute right-[60px] bottom-[25px] w-[200px] h-[100px] bg-[#590D56] text-[#fff] flex justify-center items-center rounded-lg drop-shadow-md">
        Мини всплывашка
      </div>
    </div>
  );
};

const FeaturesHead = () => (
  <section>
    <div className="relative flex flex-wrap justify-center laptop:justify-between max-w-[1140px] m-auto items-center gap-[64px] w-full pt-[115px] pb-[132px]">
      <PE />
      <ND />
      <CR />
    </div>
  </section>
);

export default FeaturesHead;

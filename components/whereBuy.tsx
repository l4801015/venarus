import Image from "next/image";
import { useEffect } from "react";

const WithInfo = () => (
  <>
    <div className="font-[MerriweatherBold] text-[30px] leading-[30px]">
      <span>Где </span>
      <span className="block">купить</span>
    </div>
    <div className="font-[RobotoRegular] text-[16px] leading-[24px] text-[#777777]">
      <span className="block whitespace-nowrap">Ветонизирующее средство</span>
      <span className="block whitespace-nowrap">ВЕНАРУС вы можете приобрести в</span>
      <span className="block whitespace-nowrap">аптеках вашего города</span>
    </div>
  </>
);

const WithContent = () => (
  <div className="flex justify-center items-center">
    <div className="relative w-[304px] h-[304px]">
      <div className="hidden tablet:block tablet:absolute w-[304px] h-[304px] tablet:translate-x-[29%] tablet:translate-y-[-11%]">
        <Image src="/1.png" layout="fill" />
      </div>
      <div className="tablet:absolute w-[304px] h-[304px] tablet:translate-x-[-29%] tablet:translate-y-[12%]">
        <Image src="/3.png" layout="fill" />
      </div>
    </div>
  </div>
);

const WhereBuy = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex gap-[30px] flex-col laptop:gap-[50px] laptop:flex-row laptop:max-w-[1160px] laptop:m-auto">
        <div className="flex flex-col gap-[26px] mobile:flex-row laptop:flex-[1_1_auto] laptop:!flex-col p-[16px]">
          <WithInfo />
        </div>
        <div className="laptop:flex-[200_1_auto] pt-[16px]">
          <WithContent />
        </div>
      </div>
      <div className="flex gap-[30px] flex-col items-center tablet:flex-row tablet:justify-center mt-[60px] laptop:max-w-[1160px] laptop:mx-auto laptop:!justify-end">
        <div className="relative w-[263px] h-[67px] border-[1px] border-black rounded-full">
          <span className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] font-[RobotoRegular] text-[18px] leading-[21px]">
            apteka.ru
          </span>
        </div>
        <div className="relative w-[263px] h-[67px] border-[1px] border-black rounded-full">
          <span className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] font-[RobotoRegular] text-[18px] leading-[21px]">
            366.ru
          </span>
        </div>
        <div className="relative w-[263px] h-[67px] border-[1px] border-black rounded-full">
          <span className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] font-[RobotoRegular] text-[18px] leading-[21px]">
            stolichki.ru
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhereBuy;

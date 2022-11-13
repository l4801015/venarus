import Image from "next/image";
import { useEffect } from "react";

const WithInfo = () => (
  <>
    <div className="font-[MerriweatherBold] text-[30px] leading-[30px]">
      <span>Полезная </span>
      <span className="block">информация</span>
    </div>

    <div className="font-[RobotoRegular] text-[16px] leading-[24px] text-white">
      <span className="block whitespace-nowrap">
        ВЕНАРУС — надежный помощник
      </span>
      <span className="block whitespace-nowrap">
        в лечении варикоза, хранитель
      </span>
      <span className="block whitespace-nowrap">женских ног на пути</span>
      <span className="block whitespace-nowrap">к ее мечте!</span>
    </div>
  </>
);

const WithContent = () => (
  <div className="mb-[100px] laptop:mb-[0px] relative grid mobile:grid-cols-2 justify-items-center tablet:!grid-cols-3 tablet:grid-row-2 gap-[30px] tablet:!w-[848px] mobile:w-[600px] mx-auto">
    {/* block 1 */}
    <div className="relative w-[263px] h-[457px] tablet:row-span-2">
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-[#47093E]"></div>
      <div className="z-20 absolute inset-0 font-[RobotoLight] text-[24px] leading-[24px] text-[#FFF] p-[24px] laptop:text-[36px] leading-[36px]">
        Профилак - тические упражнения
      </div>
      <div className="absolute w-full h-full">
        <Image src="/venarus/useful_image2.png" layout="fill" />
      </div>
    </div>
    {/* block 2 */}
    <div className="relative w-[263px] h-[263px]">
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-[#47093E]"></div>
      <div className="z-20 absolute inset-0 font-[RobotoLight] text-[24px] leading-[24px] text-[#FFF] p-[24px] laptop:text-[36px] leading-[36px]">
        Диагностика и способы лечения
      </div>
      <div className="absolute w-full h-full">
        <Image src="/venarus/useful_image1.png" layout="fill" />
      </div>
    </div>
    {/* block 3 */}
    <div className="relative w-[263px] h-[263px]">
      <div className="z-10 absolute inset-0 bg-gradient-to-b from-[#47093E]"></div>
      <div className="z-20 absolute inset-0 font-[RobotoLight] text-[24px] leading-[24px] text-[#FFF] p-[24px] laptop:text-[36px] leading-[36px]">
        Рекомен - дации по питанию
      </div>
      <div className="absolute w-full h-full">
        <Image src="/useful_image3.png" layout="fill" />
      </div>
    </div>
    {/* block 4 */}
    <div className="relative w-[263px] h-[263px] mobile:h-[457px] mobile:col-start-2 mobile:row-start-1 tablet:w-[556px] tablet:!h-[165px] tablet:col-span-2 tablet:!row-start-2">
      <div className="z-10 absolute inset-0 bg-[#47093E]"></div>
      <div className="z-20 absolute inset-0 font-[RobotoLight] text-[24px] leading-[24px] text-[#FFF] p-[24px] laptop:text-[36px] leading-[36px]">
        Профилак - тические упражнения
      </div>
    </div>
  </div>
);

const UsefulInformation = () => {
  return (
    <section className="overflow-hidden relative laptop:h-[1100px] mb-[90px] laptop:mb-[0px]">
      <div className="z-10 absolute overflow-hidden inset-0 bg-gradient-to-r to-[#590D56] from-[#8C1688]">
        <div className="absolute top-0 w-screen h-[300px]">
          <Image src="/venarus/wave-up.svg" layout="fill" />
        </div>
        <div className="absolute bottom-0 w-screen h-[300px]">
          <Image src="/venarus/wave-down.svg" layout="fill" />
        </div>
      </div>
      <div className="relative z-20 translate-y-[10%] mobile:translate-y-[20%] laptop:!translate-y-[50%] flex gap-[30px] flex-col laptop:gap-[50px] laptop:flex-row laptop:max-w-[1160px] laptop:m-auto">
        <div className="flex flex-col gap-[26px] mobile:flex-row laptop:flex-[1_1_auto] laptop:!flex-col p-[16px]">
          <WithInfo />
        </div>
        <div className="laptop:flex-[200_1_auto] pt-[16px]">
          <WithContent />
        </div>
      </div>
      <div className="relative translate-y-[300%] laptop:translate-y-[350%] z-20 flex justify-center my-[35px] laptop:max-w-[1160px] laptop:mx-auto laptop:justify-end">
        <div className="relative w-[263px] h-[67px] border-[1px] border-white rounded-full">
          <span className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-white font-[RobotoRegular] text-[18px] leading-[21px]">
            Подробнее &#62;
          </span>
        </div>
      </div>
    </section>
  );
};

export default UsefulInformation;

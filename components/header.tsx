import Image from "next/image";
import Slider from "./slider";

const Header = () => {
  return (
    <section className="overflow-hidden relativ mt-[151px] mobile:mt-[140px] laptop:h-[760px]">

      <div className="absolute overflow-hidden inset-0 bg-gradient-to-r to-[#590D56] from-[#8C1688]">
        <div className="absolute top-0 w-screen h-[300px]">
          <Image src="/wave-up.svg" layout="fill" />
        </div>
        <div className="absolute bottom-0 w-screen h-[300px]">
          <Image src="/wave-down.svg" layout="fill" />
        </div>
      </div>

      <div className="laptop:max-w-[1160px] h-full laptop:mx-auto">
        <div className="flex flex-col items-center laptop:flex-row laptop:items-stretch h-full">
          <div className="z-20 flex flex-col gap-[30px] laptop:gap-[200px] flex-[1_1_auto]">
            <div className="font-[MerriweatherBold] text-[55px] leading-[55px] mt-[30px] laptop:mt-[0px]">
              <span>Надежный</span>
              <span className="block">помощник</span>
              <span className="block">в лечении</span>
              <span className="block">варикоза</span>
            </div>
            <div className="hidden laptop:flex flex-col gap-[30px] font-[RobotoRegular] text-[18px] text-[#590D56] leading-[21px]">
              <div className="flex gap-[30px] items-center">
                <div className="relative w-[67px] h-[67px]">
                  <Image src="/header_play.svg" layout="fill" />
                </div>
                <div className="underline">Схема приема</div>
              </div>
              <div className="flex gap-[30px] items-center">
                <div className="relative w-[68px] h-[67px]">
                  <Image src="/header_download.svg" layout="fill" />
                </div>
                <div className="underline">Инструкция</div>
              </div>
              <div className="flex gap-[30px] items-center">
                <div className="relative w-[67px] h-[80px]">
                  <Image src="/header_location.svg" layout="fill" />
                </div>
                <div className="underline">Где купить</div>
              </div>
            </div>
          </div>
          <div className="z-20 flex-[1_1_auto]">
            <div className="relative translate-x-[-2%] laptop:translate-x-[-10%] laptop:translate-y-[14%]">
              <Slider />
            </div>
          </div>
          <div className="block laptop:hidden mt-[60px] flex flex-col gap-[30px] font-[RobotoRegular] text-[18px] text-[#590D56] leading-[21px]">
            <div className="flex gap-[30px] items-center">
              <div className="relative w-[67px] h-[67px]">
                <Image src="/header_play.svg" layout="fill" />
              </div>
              <div className="underline">Схема приема</div>
            </div>
            <div className="flex gap-[30px] items-center">
              <div className="relative w-[68px] h-[67px]">
                <Image src="/header_download.svg" layout="fill" />
              </div>
              <div className="underline">Инструкция</div>
            </div>
            <div className="flex gap-[30px] items-center">
              <div className="relative w-[67px] h-[80px]">
                <Image src="/header_location.svg" layout="fill" />
              </div>
              <div className="underline">Где купить</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

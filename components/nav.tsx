import Image from "next/image";
import { not } from "../utils";
import { Logo, Search, Icon } from "./utilsComponents";
import { useState, useEffect } from "react";
import { useAppState } from "../AppContext";

const BasePath = "/venrus";

const Nav = () => {
  const { state, dispatch } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const w = state.app.width;

  useEffect(() => {}, [w]);

  const translate = (p: string, b: boolean) => {
    const isUpper = (p: string, b: boolean) => p === "upper" && b;
    const isLower = (p: string, b: boolean) => p === "lower" && b;
    return {
      transform: `translateY(${
        isUpper(p, b) ? 100 : isLower(p, b) ? -100 : 0
      }%)`,
      opacity: `${isUpper(p, b) ? 0 : isLower(p, b) ? 0 : 1}`,
      transition: "all 0.5s",
    };
  };
  const fadeIn = (isOpen: boolean) => {
    return {
      opacity: `${isOpen ? 1 : 0}`,
      transition: "opacity 0.5s",
    };
  };

  const proportion = (w: number) => (h: number) => {
    return {
      height: w > 1440 ? (h * w) / 1440 : h,
    };
  };
  const height = proportion(w);

  return (
    <>
      {/* Menu */}
      <div className="fixed top-0 w-full bg-[#fff] z-50">
        <div className="relative laptop:max-w-[1160px] laptop:mx-auto">
          <div className="flex flex-col gap-[30px] items-center mobile:flex-row px-[15px] py-[20px] ">
            <div className="flex items-center flex-[1_1_auto]">
              <Logo />
            </div>
            <div className="flex items-center gap-x-[44px]">
              <div style={fadeIn(!isOpen)}><Search /></div>
              <div style={fadeIn(!isOpen)}><Icon /></div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(not(isOpen));
                  dispatch({
                    type: "set menu state",
                    payload: { isMenuOpen: isOpen },
                  });
                }}
              >
                <div className="relative w-[71px] h-[40px]">
                  <div
                    className="relative w-[71px] h-[13px]"
                    style={translate("upper", isOpen)}
                  >
                    <Image src="/closed.svg" layout="fill" />
                  </div>
                  <div className="relative w-[71px] h-[13px]">
                    <Image src="/closed.svg" layout="fill" />
                  </div>
                  <div
                    className="relative w-[71px] h-[13px]"
                    style={translate("lower", isOpen)}
                  >
                    <Image src="/closed.svg" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navigation items  */}
      <div
        className={
          isOpen ? "fixed top-[151px] mobile:top-[89px] w-full z-50" : ""
        }
        style={fadeIn(isOpen)}
      >
        <div className="absolute w-full h-screen bg-white">
          <div className="relative">
            {/* Curve 1 231 */}
            <div className="absolute w-full translate-y-[-10%]" style={height(233)}>
              <Image src={BasePath + "/Mcurve1.svg"} layout="fill" />
            </div>
            {/* Curve 2 124 */}
            <div className="absolute w-full translate-y-[180%]" style={height(126)}>
              <Image src="/Mcurve2.svg" layout="fill" />
            </div>
            {/* Curve 3 68 */}
            <div className="absolute w-full translate-y-[590%]" style={height(71)}>
              <Image src="/Mcurve3.svg" layout="fill" />
            </div>
            {/* Curve 4 156 */}
            <div className="absolute w-full translate-y-[130%]" style={height(156)}>
              <Image src="/Mcurve4.svg" layout="fill" />
            </div>
            {/* Curve 5 68 */}
            <div className="absolute w-full translate-y-[590%]" style={height(68)}>
              <Image src="/Mcurve4.svg" layout="fill" />
            </div>
          </div>
          <div
            className="relative laptop:max-w-[1104px] laptop:m-auto laptop:p-[0px] p-[30px] mobile:pt-[60px] laptop:!pt-[154px] flex flex-col gap-[55px] font-[MerriweatherBold] text-[16px] text-[#771373] leading-[16px]
          "
          >
            <a className="block">Где купить</a>
            <a className="block text-[#000]">О препарате</a>
            <a className="block text-[#000]">О варикозе</a>
            <a className="block text-[#000]">Решение</a>
            <a className="block text-[#000]">Специалистам</a>
            <a className="block text-[#000]">Геморрой</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

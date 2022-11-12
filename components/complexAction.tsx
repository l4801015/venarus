import { E1, E2, E3, E4, E5 } from "./utilsComponents";

const WithInfo = () => (
  <>
    <div className="font-[MerriweatherBold] text-[30px] leading-[30px]">
      <span>Комплексное</span>
      <span className="block">действие</span>
    </div>
    <div className="font-[RobotoRegular] text-[16px] leading-[24px] text-[#777777]">
      <span className="block">Венарус показан для терапии</span>
      <span className="block">симптомов хронических</span>
      <span className="block">заболеваний вен (устранения</span>
      <span className="block">и облегчения симптомов).</span>
    </div>
  </>
);

const WithContent = () => (
  <div>
    {/* Block 1 */}
    <div className="relative tablet:mx-auto tablet:max-w-[848px] border-[#47093E] border-t-[1px]">

      <div
        className="z-10 absolute right-[0px] translate-x-[50%] top-2/4 translate-y-[-50%]
        tablet:left-0 tablet:top-0 tablet:translate-x-[118px] tablet:translate-y-[13px]"
      >
        <E1 />
      </div>
      <div className="relative z-20 flex flex-col gap-[30px] p-[16px] tablet:p-[0px] tablet:flex-row tablet:gap-[170px] h-[194px]">
        <div className="flex tablet:items-end tablet:pb-[30px] order-2 tablet:order-1">
          <a className="whitespace-nowrap block font-[RobotoRegular] text-[18px] leading-[21px] text-[#590D56] underline">
            Подробнее &#62;
          </a>
        </div>
        <div className="order-1 tablet:order-2">
          <div className="font-[RobotoLight] text-[30px] leading-[30px] ">
            <span>Помогает</span>
            <span className="block">предотвратить судороги</span>
          </div>
        </div>
      </div>
    </div>
    {/* Block 2 */}
    <div className="relative tablet:mx-auto tablet:max-w-[848px] border-[#47093E] border-t-[1px]">
      <div
        className="z-10 absolute right-[0px] translate-x-[50%] top-2/4 translate-y-[-50%]
        tablet:right-0 tablet:top-0 tablet:translate-x-[0px] tablet:translate-y-[35px]"
      >
        <E2 />
      </div>
      <div className="z-20 relative flex flex-col gap-[30px] p-[16px] tablet:p-[0px] tablet:flex-row tablet:gap-[170px] h-[194px]">
        <div className="flex tablet:items-end tablet:pb-[30px] order-2 tablet:order-1">
          <a className="whitespace-nowrap block font-[RobotoRegular] text-[18px] leading-[21px] text-[#590D56] underline">
            Подробнее &#62;
          </a>
        </div>
        <div className="order-1 tablet:order-2">
          <div className="font-[RobotoLight] text-[30px] leading-[30px] ">
            <span>Способствует</span>
            <span className="block">снижению тяжести</span>
            <span className="block">в ногах</span>
          </div>
        </div>
      </div>
    </div>
    {/* Block 3 */}
    <div className="relative tablet:mx-auto tablet:max-w-[848px] border-[#47093E] border-t-[1px]">
      <div
        className="z-10 absolute right-[0px] translate-x-[50%] top-2/4 translate-y-[-50%]
        tablet:left-0 tablet:top-0 tablet:translate-x-[51px] tablet:translate-y-[-21px]"
      >
        <E3 />
      </div>
      <div className="z-20 relative flex flex-col gap-[30px] p-[16px] tablet:p-[0px] tablet:flex-row tablet:gap-[170px] h-[194px]">
        <div className="flex tablet:items-end tablet:pb-[30px] order-2 tablet:order-1">
          <a className="whitespace-nowrap block font-[RobotoRegular] text-[18px] leading-[21px] text-[#590D56] underline">
            Подробнее &#62;
          </a>
        </div>
        <div className="order-1 tablet:order-2">
          <div className="font-[RobotoLight] text-[30px] leading-[30px] ">
            <span>Способствует снижению</span>
            <span className="block">болевых ощущений</span>
          </div>
        </div>
      </div>
    </div>
    {/* Block 4 */}
    <div className="relative tablet:mx-auto tablet:max-w-[848px] border-[#47093E] border-t-[1px]">
      <div
        className="z-10 absolute right-[0px] translate-x-[50%] top-2/4 translate-y-[-50%]
        tablet:right-0 tablet:top-0 tablet:translate-x-[-42px] tablet:translate-y-[82px]"
      >
        <E4 />
      </div>
      <div className="z-20 relative flex flex-col gap-[30px] p-[16px] tablet:p-[0px] tablet:flex-row tablet:gap-[170px] h-[194px]">
        <div className="flex tablet:items-end tablet:pb-[30px] order-2 tablet:order-1">
          <a className="whitespace-nowrap block font-[RobotoRegular] text-[18px] leading-[21px] text-[#590D56] underline">
            Подробнее &#62;
          </a>
        </div>
        <div className="order-1 tablet:order-2">
          <div className="font-[RobotoLight] text-[30px] leading-[30px] ">
            <span>Помогает</span>
            <span className="block">уменьшить отеки</span>
          </div>
        </div>
      </div>
    </div>
    {/* Block 5 */}
    <div className="mb-[30px] relative tablet:mx-auto tablet:max-w-[848px] border-[#47093E] border-y-[1px]">
      <div
        className="z-10 absolute right-[0px] translate-x-[50%] top-2/4 translate-y-[-50%]
        tablet:left-0 tablet:bottom-0 tablet:translate-x-[125px] tablet:translate-y-[0px]"
      >
        <E5 />
      </div>
      <div className="z-20 relative flex flex-col gap-[30px] p-[16px] tablet:p-[0px] tablet:flex-row tablet:gap-[170px] h-[194px]">
        <div className="flex tablet:items-end tablet:pb-[30px] order-2 tablet:order-1">
          <a className="whitespace-nowrap block font-[RobotoRegular] text-[18px] leading-[21px] text-[#590D56] underline">
            Подробнее &#62;
          </a>
        </div>
        <div className="order-1 tablet:order-2">
          <div className="font-[RobotoLight] text-[30px] leading-[30px] ">
            <span>Оказывает</span>
            <span className="block whitespace-nowrap">ангиопротекторное</span>
            <span className="block whitespace-nowrap">и венотонизурующее</span>
            <span className="block whitespace-nowrap">действие</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ComplexAction = () => {
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
    </section>
  );
};

export default ComplexAction;

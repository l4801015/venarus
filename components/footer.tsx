import { PharmSturio, O, T, F, V } from "./utilsComponents";

const Footer = () => {
  return (
    <section className="mt-[30px]">
      {/* gradient line */}
      <div className="opacity-50 h-[61px] bg-gradient-to-b to-[#47093E] from-white"></div>
      {/* big purple line of text */}
      <div className="overflow-hidden pl-[8px] laptop:pl-[0px] laptop:max-w-[1160px] laptop:mx-auto laptop:mt-[30px] font-[RobotoRegular] relative mt-[30px] text-[31px] leading-[31px] text-[#540C50]">
        <div>БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ</div>
      </div>
      {/* footer info block */}
      <div className="overflow-hidden flex flex-col items-start pl-[16px] tablet:pl-[0px] tablet:flex-row tablet:justify-between tablet:items-start laptop:max-w-[1160px] laptop:mx-auto mt-[56px] mb-[26px]">
        {/* feedback massage */}
        <span className="block font-[RobotoLight] text-[#828282] text-[12px] leading-[12px]">
          Сообщить о нежелательном явлении
        </span>
        {/* location information and and law staff */}
        <div className="flex flex-col gap-[42px]">
          <span className="font-[RobotoLight] text-[#828282] text-[12px] leading-[12px]">
            Условия пользования сайтом и файлами Cookies
          </span>
          <div className="font-[RobotoRegular] text-[#828282] text-[14px] leading-[18px]">
            <span>г. Москва, ул. Шаболовка, д. 31, стр. 11, 4 этаж</span>
            <span className="block">Телефон: +7 (495) 555-55-55</span>
          </div>
        </div>
        {/* social media icons and parm studio logo */}
        <div className="flex  flex-col gap-[40px]">
          <div className="relative translate-x-[-4px] flex gap-[40px]">
            <O />
            <T />
            <F />
            <V />
          </div>
          <div className="flex gap-[16px] items-baseline">
            <div>
              <PharmSturio />
            </div>
            <div className="font-[RobotoRegular] text-[#828282] text-[16px] leading-[20px]">
              <span>Создание сайтов</span>
              <span className="block">Фарм-студия №1 в Рунете</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
// <div className="laptop:max-w-[1160px] laptop:m-auto">
//   <div>БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ</div>
// </div>

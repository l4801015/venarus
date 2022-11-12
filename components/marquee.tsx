const Marquee = () => {
  return (
    <section className="mt-[151px] mobile:mt-[89px]">
      <div className="relative h-[94px] border-[#47093E] border-y-[1px] overflow-hidden">
        <h1 className="absolute top-2/4 uppercase text-[#47093E] font-[RobotoLight] text-[48px] leading-[56px] whitespace-nowrap animate-marquee">
          получить скидку 10% &#62;&#62;&#62; получить скидку 10%
          &#62;&#62;&#62; получить скидку 10% \\\\\ &nbsp;
        </h1>
        <h1 className="absolute top-2/4 uppercase text-[#47093E] font-[RobotoLight] text-[48px] leading-[56px] whitespace-nowrap animate-marquee2">
          получить скидку 10% &#62;&#62;&#62; получить скидку 10%
          &#62;&#62;&#62; получить скидку 10% \\\\\ &nbsp;
        </h1>
      </div>
    </section>
  );
};

export default Marquee;
//
//
//    <div className="relative flex overflow-x-hidden">
//      <div className="py-12 animate-marquee whitespace-nowrap">
//        <span className="text-4xl mx-4">получить скидку 10% &#62;&#62;&#62; получить скидку 10% &#62;&#62;&#62; получить скидку 10% \\\\\</span>
//      </div>
//
//      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
//        <span className="text-4xl mx-4">получить скидку 10% &#62;&#62;&#62; получить скидку 10% &#62;&#62;&#62; получить скидку 10% \\\\\</span>
//      </div>
//    </div>

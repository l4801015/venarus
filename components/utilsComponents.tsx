import Image from "next/image";



export const Search = () => (
  <div className="relative w-[48px] h-[47px]">
    <Image src="/venarus/search.svg" layout="fill" />
  </div>
);

export const Icon = () => (
  <div className="relative w-[41px] h-[49px]">
    <Image src="/venarus/location.svg" layout="fill" />
  </div>
);

export const Logo = () => (
  <div className="relative w-[195px] h-[32px]">
    <Image src="/venarus/logo.svg" layout="fill" />
  </div>
);

export const O = () => (
  <div className="relative w-[32px] h-[24px]">
    <Image src="/venarus/o.svg" layout="fill" />
  </div>
);
export const T = () => (
  <div className="relative w-[25px] h-[24px]">
    <Image src="/venarus/t.svg" layout="fill" />
  </div>
);
export const F = () => (
  <div className="relative w-[28px] h-[24px]">
    <Image src="/venarus/f.svg" layout="fill" />
  </div>
);
export const V = () => (
  <div className="relative w-[25px] h-[24px]">
    <Image src="/venarus/v.svg" layout="fill" />
  </div>
);

export const PharmSturio = () => (
  <div className="relative">
    <div>
      <div className="relative inline-block w-[14px] h-[17px]">
        <Image src="/venarus/pharmStudio/p.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[12px] h-[16px]">
        <Image src="/venarus/pharmStudio/h.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[12px] h-[13px]">
        <Image src="/venarus/pharmStudio/a.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[9px] h-[12px]">
        <Image src="/venarus/pharmStudio/r.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[20px] h-[12px]">
        <Image src="/venarus/pharmStudio/m.svg" layout="fill" />
      </div>
      <div className="relative inline-block translate-y-[-1px]">
        <div className="relative inline-block w-[8px] h-[8px] top-[-4px]">
          <Image src="/venarus/pharmStudio/plusUp.svg" layout="fill" />
        </div>
        <div className="relative inline-block w-[8px] h-[8px] left-[-4px]">
          <Image src="/venarus/pharmStudio/plusDown.svg" layout="fill" />
        </div>
      </div>
    </div>
    <div>
      <div className="relative inline-block w-[10px] h-[13px]">
        <Image src="/venarus/pharmStudio/s.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[10px] h-[15px]">
        <Image src="/venarus/pharmStudio/t.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[12px] h-[12px]">
        <Image src="/venarus/pharmStudio/u.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[13px] h-[17px]">
        <Image src="/venarus/pharmStudio/d.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[4px] h-[18px] ml-[2px]">
        <Image src="/venarus/pharmStudio/i.svg" layout="fill" />
      </div>
      <div className="relative inline-block w-[13px] h-[13px]">
        <Image src="/venarus/pharmStudio/o.svg" layout="fill" />
      </div>
    </div>
  </div>
);

export const PlayButton = () => (
  <div>
    <div className="absolute left-2/4 translate-y-[-50%] top-2/4 translate-x-[-50%] z-20">
      <div className="relative w-[68px] h-[68px] border border-[#5B0E58] rounded-full">
        <div className="absolute w-[32px] h-[32px] left-2/4 translate-y-[-50%] top-2/4 translate-x-[-40%]">
          <Image src="/venarus/triangle.svg" layout="fill" />
        </div>
      </div>
    </div>
    <div className="absolute left-2/4 translate-y-[-50%] top-2/4 translate-x-[-50%]">
      <div className="relative w-[68px] h-[68px] bg-white opacity-30 rounded-full z-10"></div>
    </div>
  </div>
);

export const Ellipse = () => (
  <div className="absolute w-[124px] h-[124px]">
    <Image src="/venarus/ellipse.svg" layout="fill" />
  </div>
);

export const E1 = () => (
  <div className="relative w-[124px] h-[124px]">
    <Ellipse />
    <div className="absolute w-[114px] h-[114px] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-50%]">
      <Image src="/venarus/star.svg" layout="fill" />
    </div>
  </div>
);
export const E2 = () => (
  <div className="relative w-[124px] h-[124px]">
    <Ellipse />
    <div className="absolute w-[124px] h-[124px] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-50%]">
      <Image src="/venarus/curve1.svg" layout="fill" />
    </div>
    <div className="absolute w-[124px] h-[124px] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-50%]">
      <Image src="/venarus/curve2.svg" layout="fill" />
    </div>
  </div>
);
export const E3 = () => (
  <div className="relative w-[124px] h-[124px]">
    <Ellipse />
    <div className="absolute w-[48px] h-[48px] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-50%]">
      <Image src="/venarus/outer.svg" layout="fill" />
    </div>
    <div className="absolute w-[10px] h-[10px] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-50%]">
      <Image src="/venarus/inner.svg" layout="fill" />
    </div>
  </div>
);
export const E4 = () => (
  <div className="relative w-[124px] h-[124px]">
    <Ellipse />
    <div className="absolute w-[124px] h-[124px] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-85%]">
      <Image src="/venarus/semicircle.svg" layout="fill" />
    </div>
    <div className="absolute w-[124px] h-[124px] rotate-[180deg] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-15%]">
      <Image src="/venarus/semicircle.svg" layout="fill" />
    </div>
  </div>
);
export const E5 = () => (
  <div className="relative w-[124px] h-[124px]">
    <Ellipse />
    <div className="absolute w-[124px] h-[67px] rotate-[180deg] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-87%]">
      <Image src="/venarus/arrow.svg" layout="fill" />
    </div>
    <div className="absolute w-[124px] h-[67px]  top-2/4 translate-y-[-50%] left-2/4 translate-x-[-13%]">
      <Image src="/venarus/arrow.svg" layout="fill" />
    </div>
    <div className="absolute w-[78px] h-[67px] rotate-[180deg] top-2/4 translate-y-[-50%] left-2/4 translate-x-[-100%]">
      <Image src="/venarus/line.svg" layout="fill" />
    </div>
    <div className="absolute w-[78px] h-[67px]  top-2/4 translate-y-[-50%] left-2/4 translate-x-[-0%]">
      <Image src="/venarus/line.svg" layout="fill" />
    </div>
  </div>
);

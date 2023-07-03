import { Vector1, Vector4, smallRight } from "../assets";

function Hero() {
  return (
    <div className="pl-[84px] space-y-10 max-sm:pl-[20px] ">
      <div>
        <h1 className="text-[46px] font-primaryfont  text-white ">
          <span className=" font-primaryfont bg-clip-text text-transparent bg-gradient-to-r  from-[#C0B7E8] to-[#8176AF]">
            Dive
          </span>{" "}
          Into The Depths
        </h1>
        <h1 className="text-[46px] font-primaryfont  text-white ">
          Of
          <span className=" text-[46px] font-primaryfont bg-clip-text text-transparent bg-gradient-to-r  from-[#C0B7E8] to-[#8176AF] ">
            {" "}
            Virtual Reality
          </span>
        </h1>
      </div>
      <p className=" font-primaryfont text-[15px] font-medium  text-white w-[450px] h-[72px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris
        eros in vitae .
      </p>
      <div className="flex items-center relative">
        <button className="static transition-all font-primaryfont duration-500  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-12 py-4 text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
          BUILD YOUR WORLD
        </button>
        <img src={smallRight} className=" shrink-0" alt="smallright" />
      </div>
      <div className="" id="vector4">
        <img src={Vector4} alt="Vector 4 " className="" />
      </div>
    </div>
  );
}

export default Hero;

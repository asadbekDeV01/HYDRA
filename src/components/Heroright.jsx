import { HeroImage, Vector1, Vector2, Vector3 } from "../assets";
import "./index.css";
import { motion } from "framer-motion";

function HeroRight() {
  return (
    <div className="mr-[84px] max-sm:mx-4 ">
      <div
        id="rounded"
        className="shrink-0 p-[12px] max-sm:w-[340px] max-sm:h-[296px] max-sm:p-0 max-sm:hidden "
      >
        {/* Vector line \/ */}
        <img
          id="vector1"
          src={Vector1}
          alt="Vector 1 "
          className="max-sm:hidden"
        />
        <img
          id="vector2"
          src={Vector2}
          alt="Vector 2 "
          className="max-sm:hidden "
        />
        <img
          id="vector3"
          src={Vector3}
          alt="Vector 3 "
          className="max-sm:hidden"
        />
        {/* Vector line /\ */}
        <img
          className="mr-2 max-sm:mr-0 relative max-sm:w-[360px] max-sm:p-0 max-sm: max-sm:hidden "
          src={HeroImage}
          alt="vfsafv"
        />
      </div>
      <div className="lg:hidden  max-sm:p-1 max-sm:w-full h-full relative">
        <img
          className="mr-2 max-sm:mr-0  max-sm:w-[360px] max-sm:p-0   "
          src={HeroImage}
          alt="vfsafv"
        />
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="pl-[84px] space-y-10 flex justify-center items-center flex-col "
        >
          <div>
            <h1 className="text-[36px] font-primaryfont  text-white  ">
              <span className=" font-primaryfont bg-clip-text text-transparent bg-gradient-to-r  from-[#C0B7E8] to-[#8176AF]">
                Dive
              </span>{" "}
              Into The Depths
            </h1>
            <h1 className="text-[36px] font-primaryfont  text-white ">
              Of
              <span className=" text-[36px] font-primaryfont bg-clip-text text-transparent bg-gradient-to-r  from-[#C0B7E8] to-[#8176AF] ">
                {" "}
                Virtual Reality
              </span>
            </h1>
          </div>
          
          <div className="flex justify-center items-center relative ">
            <button className=" hover:shadow-md hover:shadow-slate-50 hover:scale-105 hover:duration-150 hover:ease-in-out hover:transition-all hover:-translate-y-2 hover:delay-100 static transition-all font-primaryfont duration-500  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-12 py-4 text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              BUILD YOUR WORLD
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroRight;

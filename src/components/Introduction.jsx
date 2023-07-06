import { Vector11, smallRight } from "../assets";
import { motion } from "framer-motion";

function Introduction(props) {
  return (
    <motion.div className="grid grid-cols-2 max-sm:grid-cols-1">
      <div className=" flex justify-center flex-col">
        <h1 className="font-primaryfont text-[36px] text-white">
          {props.h1text}
        </h1>
        <div className="flex items-center space-x-36 max-sm:space-x-2 ">
          <h2 className="text-[36px] font-light text-white ">{props.h2text}</h2>
          <img
            src={Vector11}
            alt="vector 11 "
            className="absolute left-[14%] max-sm:hidden"
          />
          <img
            src={smallRight}
            alt="small right"
            className="pl-[4%] max-sm:hidden"
          />
        </div>
      </div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="text-[16px] font-light  text-white  pl-6 leading-loose tracking-wide not-italic max-sm:pl-0 max-sm:hidden">
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
        sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna
        fringilla urna porttitor rhoncus vitae.
      </p>
      </motion.div>
    </motion.div>
  );
}

export default Introduction;

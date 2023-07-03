import { Vector11, smallRight } from "../assets";

function Introductiontwo() {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <h1 className="font-primaryfont text-[36px] text-white">
        HOW WE BUILD
        </h1>
        <div className="flex items-center space-x-36  ">
          <h2 className="text-[36px] font-light text-white">WITH HYDRA VR?</h2>
          <img
            src={Vector11}
            alt="vector 11 "
            className="absolute left-[16%]"
          />
          <img src={smallRight} alt="small right" className="pl-[1%]" />
        </div>
      </div>
      <p className="text-[16px] font-light  text-white  pl-6 leading-loose tracking-wider not-italic">
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
        sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna
        fringilla urna porttitor rhoncus vitae.
      </p>
    </div>
  );
}

export default Introductiontwo;

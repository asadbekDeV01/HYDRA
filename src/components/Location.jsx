import { LocationIcon, MailIcon, PhoneCall, Vector5, Vector6 } from "../assets";
import "./index.css";

function Location() {
  return (
    <div className="flex  justify-between  mx-4 shrink-0 ">
      <div className="flex items-center space-x-8">
        <img
          src={LocationIcon}
          className="text-[#C0B7E8] shrink-0 w-[70px] h-[70px] animate-pulse  hover:cursor-pointer"
          alt="Location icon"
        />
        <div className="space-y-[10px]">
          <h1 className="font-primaryfont text-white text-[24px] ">
            Pay Us a Visit
          </h1>
          <p className="text-[14px]  font-medium text-white">
            Union St, Seattle, WA 98101, United States
          </p>
        </div>
      </div>
      <img src={Vector5} alt="vector 5  " className=" shrink-0 h-[116px] " />
      <div className="flex items-center space-x-8">
        <img
          src={PhoneCall}
          alt="Phone icon"
          className="text-[#C0B7E8]  shrink-0 w-[70px] cursor-pointer h-[70px] animate-pulse"
        />

        <div className="space-y-[10px]">
          <h1 className="font-primaryfont text-white text-[24px]">
            Give Us a Call
          </h1>
          <p className="text-[14px]  font-medium text-white">(110) 1111-1010</p>
        </div>
      </div>
      <img src={Vector6} alt="vector 6  " />
      <div className="flex items-center space-x-8 cursor-pointer">
        <img
          src={MailIcon}
          alt="mail icon"
          className="text-[#C0B7E8]  shrink-0 w-[70px] h-[70px] animate-pulse"
        />
        <div className="space-y-[10px]">
          <h1 className="font-primaryfont text-white text-[24px]">
            Send Us a Message
          </h1>
          <p className="font-medium text-[14px]   text-white">
            Contact@HydraVTech.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location;

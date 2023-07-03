import { Right } from "../vector";

function NumberInfo(props) {
  return (
    <div className="flex justify-self-start m-0 pr-4 ">
      <img src={Right} alt="right" className="pb-4" />
      <div className="flex flex-col">
        <h1 className="text-[24px]  font-primaryfont text-white">
          {props.NumberInfotext}
        </h1>
        <h2 className="text-white text-[24px] font-primaryfont ">{props.infotext2}</h2>
      </div>
    </div>
  );
}

export default NumberInfo;

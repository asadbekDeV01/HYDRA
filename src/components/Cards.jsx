import { Vector10, Vector14 } from "../assets";
import "./index.css";
function Cards(props) {
  return (
    <div
      id="cardbg"
      className="flex justify-center flex-col items-center px-[2%] py-[3%] space-y-6 hover:shadow-dimWhite hover:shadow-lg   hover:ease-in-out hover:duration-100 hover:transition hover:scale-110 hover:-translate-y-2"
    >
      <div id="Card" className="p-3 rounded-full  hover:scale-105 hover:duration-100 hover:transition hover:ease-in-out">
        <img src={props.img} alt="cards" className="rounded-full hover:scale-105" />
      </div>
      <h1 className="text-white font-primaryfont text-[24px]">{props.name}</h1>
      <img src={Vector10} alt="vector" />
      <p className="text-[12px] font-light text-white tracking-widest">
        Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor
        rhoncus libero justo laoreet sit amet vitae.
      </p>
      <button className="hover:shadow-md hover:shadow-slate-50 hover:scale-110 hover:duration-150 hover:ease-in-out hover:transition-all hover:-translate-y-2 hover:delay-100 transition-all duration-500  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-12 py-4 text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
        TRY IT NOW
      </button>
    </div>
  );
}

export default Cards;

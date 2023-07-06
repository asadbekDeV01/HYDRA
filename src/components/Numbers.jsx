import "./index.css";
function Numbers(props) {
  return (
    <div
      id="numbershadow"
      className="p-5 hover:ring-2 hover:text-white hover:ring-gray-100  hover:transition hover:duration-300 hover:ease-in-out hover:opacity-90 hover:-translate-y-2 hover:shadow-md hover:shadow-slate-100 "
    >
      <div
        id="number"
        className="w-[159px]  h-[159px] flex justify-center items-center relative cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out  hover:scale-110 hover:opacity-100 hover:text-slate-100 "
      >
        <h1 className="text-[64px] font-primaryfont text-[#343045] hover:text-white ">
          0{props.number}
        </h1>
      </div>
    </div>
  );
}

export default Numbers;

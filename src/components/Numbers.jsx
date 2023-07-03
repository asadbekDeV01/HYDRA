import "./index.css";
function Numbers(props) {
  return (
    <div id="numbershadow" className="p-5">
      <div
        id="number"
        className="w-[159px]  h-[159px] flex justify-center items-center relative"
      >
        <h1 className="text-[64px] font-primaryfont text-[#343045] animate-pulse">
          0{props.number}
        </h1>
      </div>
    </div>
  );
}

export default Numbers;

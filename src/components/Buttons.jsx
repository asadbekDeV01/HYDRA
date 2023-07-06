function NavbarBorderbtn() {
  return (
    <div className="max-sm:flex max-sm:justify-center max-sm:items-center">
      <div className="space-x-4 font-primaryfont relative max-sm:space-x-3 max-sm:flex  ">
        <button className="text-white max-sm:text-[8px] cursor-pointer border-2 text-xs font-bold rounded-full px-10 py-4 max-sm:px-2 max-sm:py-1 max-sm:hover:bg-[#8176AF] hover:scale-110 hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-100 hover:text-[#3a3744]">
          CONTACT US
        </button>
        <a href="#form">
          <button className=" transition-all duration-500 max-sm:text-[8px]  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-10 py-4 text-[#343045] max-sm:px-2 max-sm:py-1  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:duration-150 hover:ease-in-out hover:transition-all hover:-translate-y-2 hover:delay-100 hover:shadow-md hover:shadow-slate-100 hover:scale-110">
            JOIN HYDRA
          </button>
        </a>
      </div>
    </div>
  );
}
export default NavbarBorderbtn;

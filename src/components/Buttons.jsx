function NavbarBorderbtn() {
  return (
    <div className="max-sm:flex max-sm:justify-center max-sm:items-center">
      <div className="space-x-4 font-primaryfont relative max-sm:space-x-2  ">
        <button className="text-white max-sm:text-[8px] cursor-pointer border-2 text-xs font-bold rounded-full px-10 py-4 max-sm:px-2 max-sm:py-1">
          CONTACT US
        </button>
        <a href="#form">
          <button className=" transition-all duration-500 max-sm:text-[8px]  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-10 py-4 text-[#343045] max-sm:px-2 max-sm:py-1  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            JOIN HYDRA
          </button>
        </a>
      </div>
    </div>
  );
}
export default NavbarBorderbtn;

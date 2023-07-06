import { Vector16 } from "../vector";

function Form() {
  return (
    <form className="flex justify-center items-center flex-col p-[7%] space-y-10 relative max-sm:space-y-1 max-sm:flex">
      <div className="flex flex-col justify-center items-center space-y-6 mb-5 max-sm:space-y-1 max-sm:mb-0">
        <h1 className="text-[36px] max-sm:text-[24px] font-primaryfont text-white">JOIN HYDRA </h1>
        <img src={Vector16} alt="vectorr" />
        <h2 className="text-[36px] max-sm:text-[24px] text-white font-light">
          Let’s Build Your VR Experience
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 max-sm:flex max-sm:flex-col  max-sm:justify-center max-sm:items-center">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First Name"
          className="focus:scale-105 focus:-translate-y-2 focus:duration-150 placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3 max-sm:px-1 max-sm:py-1  w-[524px] h-[72px] bg-transparent focus:shadow-md focus:border-2 focus:shadow-slate-50 outline-none focus:border-gray-200 caret-white text-white text-[18px] max-sm:w-[300px] max-sm:h-[53px]  "
        />
        <input
          type="text"
          name="Lname"
          id="Lname"
          placeholder="Last Name"
          className="focus:scale-105 focus:-translate-y-2 focus:duration-150 max-sm:col-span-2 placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-md focus:border-2 focus:shadow-slate-50 outline-none focus:border-gray-200 caret-white text-white text-[18px]"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="focus:scale-105 focus:-translate-y-2 focus:duration-150 placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-md focus:border-2 focus:shadow-slate-50 outline-none focus:border-gray-200 caret-white text-white text-[18px]"
        />
        <input
          type="text"
          name="number"
          id="number2"
          placeholder="Phone Number"
          className="focus:scale-105 focus:-translate-y-2 focus:duration-150 placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-md focus:border-2 focus:shadow-slate-50 outline-none focus:border-gray-200 caret-white text-white text-[18px]  "
        />
        <input
          className="focus:scale-105 focus:-translate-y-2 focus:duration-150 col-span-2  placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[1058px] mx-auto h-[72px] bg-transparent focus:shadow-md focus:border-2 focus:shadow-slate-50 outline-none focus:border-gray-200 caret-white text-white text-[18px]"
          type="text"
          placeholder="Subject"
          name="Subject"
          id="subject"
        />
        <textarea
          className="focus:scale-105 focus:-translate-y-2 focus:duration-150 col-span-2 placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-6  w-[1058px] mx-auto bg-transparent focus:shadow-md focus:border-2 focus:shadow-slate-50 outline-none focus:border-gray-200 caret-white text-white text-[18px] max-sm:px-4 max-sm:py-6 max-sm:w-xl"
          name="Something"
          placeholder="Tell us Something..."
          id="Something"
          cols="20 "
          rows="6"
        ></textarea>
      </div>
      <div className="">
        <button className="hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-105 hover:ease-in-out hover:transition-all hover:-translate-y-2  hover:delay-75 transition-all duration-500   hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom text-xs font-bold rounded-full px-16 py-6  text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
          SEND TO HYDRA
        </button>
      </div>
    </form>
  );
}

export default Form;

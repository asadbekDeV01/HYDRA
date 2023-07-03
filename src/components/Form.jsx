import { Vector16 } from "../vector";

function Form() {
  return (
    <form className="flex justify-center items-center flex-col p-[7%] space-y-10 relative">
      <div className="flex flex-col items-center space-y-6 mb-5">
        <h1 className="text-[36px] font-primaryfont text-white">JOIN HYDRA </h1>
        <img src={Vector16} alt="vectorr" />
        <h2 className="text-[36px] text-white font-light">
          Let’s Build Your VR Experience
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First Name"
          className=" placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-lg focus:border-2 focus:shadow-[#8176af] outline-none focus:border-gray-200 caret-white text-white text-[18px]"
        />
        <input
          type="text"
          name="Lname"
          id="Lname"
          placeholder="Last Name"
          className=" placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-lg focus:border-2 focus:shadow-[#8176af] outline-none focus:border-gray-200 caret-white text-white text-[18px]'+"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className=" placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-lg focus:border-2 focus:shadow-[#8176af] outline-none focus:border-gray-200 caret-white text-white text-[18px]"
        />
        <input
          type="text"
          name="number"
          id="number2"
          placeholder="Phone Number"
          className=" placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[524px] h-[72px] bg-transparent focus:shadow-lg focus:border-2 focus:shadow-[#8176af] outline-none focus:border-gray-200 caret-white text-white text-[18px]  "
        />
        <input
          className="col-span-2  placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-3  w-[1058px] mx-auto h-[72px] bg-transparent focus:shadow-lg focus:border-2 focus:shadow-[#8176af] outline-none focus:border-gray-200 caret-white text-white text-[18px]"
          type="text"
          placeholder="Subject"
          name="Subject"
          id="subject"
        />
        <textarea
          className="col-span-2 placeholder:text-white placeholder:text-[14px] placeholder:font-normal border-2 rounded-[40px] px-10 py-6  w-[1058px] mx-auto bg-transparent focus:shadow-lg focus:border-2 focus:shadow-[#8176af] outline-none focus:border-gray-200 caret-white text-white text-[18px]"
          name="Something"
          placeholder="Tell us Something..."
          id="Something"
          cols="20"
          rows="6"
        ></textarea>
      </div>
      <div className="">
      <button className=" transition-all duration-500   hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom text-xs font-bold rounded-full px-16 py-6  text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
        SEND TO HYDRA
      </button>
      </div>
    </form>
  );
}

export default Form;

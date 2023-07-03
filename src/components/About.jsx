import { AboutImage, Vector7, Vector8 } from "../assets";

function About() {
  return (
    <div className="mx-[84px] grid grid-cols-2 ">
      <div>
        <img
          src={Vector7}
          alt="vector 7 "
          className="absolute w-[90%] top-[182%]  "
        />
        <img
          src={Vector8}
          alt="Vector 8 "
          className="absolute  w-[93%] top-[220%]"
        />
        <img
          id="AboutImage"
          src={AboutImage}
          alt="About image "
          className="absolute"
        />
      </div>
      <div className="space-y-6 py-10">
        <div>
          <h1 className="text-[36px] text-white font-primaryfont leading-normal not-italic ">
            ABOUT
          </h1>
          <h2
            id="abouth2"
            className="text-[36px]  font-light leading-normal not-italic"
          >
            HYDRA VR
          </h2>
        </div>
        <p className="text-[16px] tracking-widest  text-white font-light  leading-loose  not-italic ">
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </p>
        <button className="transition-all relative duration-500 hover:text-white hover:bg-gradient-to-rl  hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-14 py-4 text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] font-primaryfont ">
          LET’S GET IN TOUCH
        </button>
      </div>
    </div>
  );
}

export default About;

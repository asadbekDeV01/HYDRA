import { useState } from "react";
import {
  CardsImg1,
  CardsImg2,
  CardsImg3,
  CardsImg4,
  HYDRAtech1,
  HYDRAtech2,
  HYDRAtech3,
  HYDRAtech4,
  Vector14,
  smalldown,
} from "./assets";
import {
  About,
  Cards,
  Hero,
  HeroRight,
  Hydratech,
  Introduction,
  Introductiontwo,
  Location,
  NumberInfo,
  Numbers,
  Technologies,
} from "./components";
import Form from "./components/Form";
import Layout from "./components/Layout";
import "./components/index.css";
import { Vector15, Vector18, Vector19 } from "./vector";

function App(props) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const [bgColor, setbgColor] = useState('none');
 
  
  return (
    <Layout>
      <div className="w-full overflow-hidden max-sm:grid max-sm:grid-cols-1">
        {/*         HERO  */}
        <div className="flex justify-between mt-12 max-sm:flex max-sm:flex-col">
          <div className="max-sm:hidden">
            <Hero />
          </div>

          <HeroRight />
          <div className=" lg:hidden ">
            <Hero />
          </div>
        </div>
        {/* HERO FINISHED  */}

        {/* LOCATION SECTION  */}
        <section className=" flex justify-center mt-[157px]  items-center mx-[84px] hover:transition-all hover:ease-out transition hover:duration-300 cursor-pointer hover:scale-110 hover:-translate-y-2  ">
          <div
            id="LocationSection"
            className="py-4 px-6 hover:shadow-md hover:shadow-slate-100"
          >
            <Location />
          </div>
        </section>
        {/* LOCATION SECTION FINISHED  */}

        {/*     Introduction section */}
        <section className="mx-[84px] mt-[194px]  max-sm:mx-[20px]">
          <Introduction h1text={"INTRODUCTION"} h2text={"TO HYDRA VR"} />
        </section>
        {/* Introduction section finished */}

        {/* About */}
        <section id="about" className="mt-[8%] w-full">
          <About />
        </section>
        {/* About finished */}

        {/*     Introduction section */}
        <section className="mx-[84px] mt-[5%] ">
          <Introduction h1text={"WHY BUILD"} h2text={"WITH HYDRA?"} />
        </section>
        {/* Introduction section finished */}

        {/* Cards section welcome */}
        <div className="">
          {" "}
          <img
            src={Vector14}
            alt="vector 14"
            className="absolute top-[300%] "
          />
        </div>
        <div id="services" className="relative">
          <section className=" flex justify-between mx-[84px] space-x-3 mt-[5%] mb-36">
            <Cards img={CardsImg1} name={"SIMULATION"} />
            <Cards img={CardsImg2} name={"EDUCATION"} />
            <Cards img={CardsImg3} name={"SELF-CARE"} />
            <Cards img={CardsImg4} name={"OUTDOOR"} />
          </section>
        </div>
        {/* card section finished */}

        <section className=" mx-[84px] relative  p-4 max-sm:p-2 space-y-8 mb-3 max-sm:mx-0px max-sm:space-y-1 max-sm:flex">
          <div className="-space-y-8 max-sm:-space-y-0">
            <Technologies />

            <a
              href="#hydratechlink"
              className="flex justify-center fill-black "
            >
              <div
                id="shadow"
                className="p-4 max-sm:hidden hover:duration-300 hover:transition hover:ease-in hover:shadow-md hover:shadow-slate-100"
              >
                <div onClick={( ) => setbgColor("#401275")} id="smalldowndv" className="hover:scale-125 ">
                  <img src={smalldown} alt="small down" />
                </div>
              </div>
            </a>
          </div>

          <div
            id="hydratechlink"
            style={{ backgroundColor: bgColor}}
            className="flex justify-between mx-[84px] items-center mt-[6%] rounded-full px-10 opacity- "
          >
            <Hydratech
              image={HYDRAtech1}
              link={"https://www.unrealengine.com"}
            />
            <Hydratech image={HYDRAtech3} link={"https://www.unity.com"} />
            <Hydratech image={HYDRAtech2} link={"https://www.uculus.com"} />
            <Hydratech image={HYDRAtech4} link={"https://www.vive.com"} />
          </div>
        </section>

        {/* hydra tech  */}

        {/* Hydratech finished */}

        <section id="how to" className="mx-[84px] mt-[5%] ">
          <Introductiontwo />
        </section>

        {/* Numbers section  */}
        <section className="flex  justify-around items-center mx-[84px] mt-[5%] ">
          <img src={Vector15} alt="vector15" className=" absolute w-full" />
          <Numbers number={"1"} />
          <Numbers number={"2"} />
          <Numbers number={"3"} />
          <Numbers number={"4"} />
        </section>
        <section className="flex justify-around items-center mx-[84px] mt-[2%] mr-[6%] space-x-6 ">
          <NumberInfo
            NumberInfotext={"3D Conception "}
            infotext2={" & Design"}
          />
          <NumberInfo NumberInfotext={"Interaction "} infotext2={" & Design"} />
          <NumberInfo NumberInfotext={"VR World"} infotext2={" User Testing"} />
          <NumberInfo NumberInfotext={"Hydra VR"} infotext2={"Deploy"} />
        </section>
        {/* Numbers section finished  */}
        <div className="absolute top-[657%] -space-y-16">
          <img src={Vector19} alt="vectoooor" className="m-0 p-0 " />
          <img src={Vector18} alt="vectoooor" className="m-0 p-0" />
        </div>
        {/* form  */}
        <section
          id="form"
          className="form mx-[84px] flex justify-center items-center mt-[3%] relative max-sm:mx-[20px]"
        >
          <Form />
        </section>
        {/* form  */}
      </div>
    </Layout>
  );
}

export default App;

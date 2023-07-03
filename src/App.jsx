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
  Footer,
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
import Navbar from "./components/Navbar";
import "./components/index.css";
import { Right, Vector15, Vector18, Vector19 } from "./vector";

function App(props) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <Layout>
      <div className="w-full overflow-hidden max-sm:grid max-sm:grid-cols-1">
        {/*         HERO  */}
        <div className="flex justify-between mt-12 max-sm:flex max-sm:flex-col">
          <div className="max-sm:hidden">
            <Hero />
          </div>

          <HeroRight />
          <div className=" hidden max-sm:hidden">
            <Hero />
          </div>
        </div>
        {/* HERO FINISHED  */}

        {/* LOCATION SECTION  */}
        <section className=" flex justify-center mt-[157px]  items-center mx-[84px] hover:transition-all hover:ease-out transition duration-300 cursor-pointer hover:scale-110 hover:-translate-1 ">
          <div id="LocationSection" className="py-4 px-6">
            <Location />
          </div>
        </section>
        {/* LOCATION SECTION FINISHED  */}

        {/*     Introduction section */}
        <section className="mx-[84px] mt-[194px] ">
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

        <section
          className=" mx-[84px] relative rounded-full p-4 space-y-8 mb-3 "
          id="technobg"
        >
          <Technologies />
        </section>
        <div className="absolute  top-[405%] left-[48%] ">
          <a
            href="#hydratechlink"
          >
            <div id="shadow" className="p-4">
              <div id="smalldowndv" className="flex items-center ">
                <img src={smalldown} alt="small right" />
              </div>
            </div>
          </a>
          
        </div>

        {/* hydra tech  */}
        <section
          id="hydratechlink"
          className="flex justify-between mx-[84px] items-center mt-[4%] hover:opacity-100 opacity-95 hover:bg-[#353557] hover:rounded-full hover:px-2 hover:animate-none transition-all hover:shadow-lg hover:shadow-slate-200"
        >
          <Hydratech image={HYDRAtech1} />
          <Hydratech image={HYDRAtech3} />
          <Hydratech image={HYDRAtech2} />
          <Hydratech image={HYDRAtech4} />
        </section>
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
          className="form mx-[84px] flex justify-center items-center mt-[3%] relative "
        >
          <Form />
        </section>
        {/* form  */}
      </div>
    </Layout>
  );
}

export default App;

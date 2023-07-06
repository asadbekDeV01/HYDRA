import {
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  Twitter,
  Youtube,
} from "../Logotips";
import { logo } from "../assets";
import { Vector17, Vector18, Vector19, Vector20 } from "../vector";
import "./index.css";

function Footer() {
  return (
    <footer className=" mb-1">
      <div className="flex justify-around items-center relative max-sm:flex max-sm:justify-start max-sm:items-center max-sm:flex-col">
        <a href="/">
          <img
            src={logo}
            id="footerlogo"
            alt="Logo"
            className="w-[185px] h-[187px]"
          />
        </a>
        <div className="grid grid-cols-2 max-sm:hidden">
          <img src={Vector20} alt="VECTORRR" />
          <ul className="text-[16px] text-white font-primaryfont space-y-5">
            <li className="hover:border-b-1 hover:border-slate-100/95 hover:-translate-y-1 hover:scale-105 hover:transition hover:duration-150">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hover:border-b-1 hover:border-slate-100/95 hover:-translate-y-1 hover:scale-105 hover:transition hover:duration-150">
              <a href=" #services">SERVICES</a>
            </li>
            <li className="hover:border-b-1 hover:border-slate-100/95 hover:-translate-y-1 hover:scale-105 hover:transition hover:duration-150">
              <a href="#technobg">TECHNOLOGIES</a>
            </li>
            <li className="hover:border-b-1 hover:border-slate-100/95 hover:-translate-y-1 hover:scale-105 hover:transition-all hover:duration-150">
              <a href=" #how to">HOW TO </a>
            </li>
            <li className="hover:border-b-1 hover:border-slate-100/95 hover:-translate-y-1 hover:scale-105 hover:transition hover:duration-150">
              <a href="#form">JOIN HYDRA</a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 max-sm:hidden">
          <img src={Vector20} alt="VECTORRR" />
          <ul className="text-[16px] text-white font-primaryfont space-y-5">
            <li className=" hover:border-slate-100/95 hover:-translate-y-2 hover:scale-105 hover:transition hover:duration-150">
              <a href="#">F.A.Q</a>
            </li>
            <li className=" hover:border-slate-100/95 hover:-translate-y-2 hover:scale-105 hover:transition hover:duration-150">
              <a href=" #">SITEMAP</a>
            </li>
            <li className=" hover:border-slate-100/95 hover:-translate-y-2 hover:scale-105 hover:transition hover:duration-150">
              <a href=" #">CONDITIONS</a>
            </li>
            <li className=" hover:border-slate-100/95 hover:-translate-y-2 hover:scale-105 hover:transition hover:duration-150">
              <a href=" #">LICENSES</a>
            </li>
          </ul>
        </div>

        <img src={Vector20} alt="VECTORRR" className="max-sm:hidden" />
        <div className="space-y-10">
          <h1 className="text-[16px] text-white font-primaryfont font-bold">
            SOCIALIZE WITH HYDRA
          </h1>
          <div className="flex justify-around items-start space-x-4 ">
            <a
              href="https://www.facebook.com/"
              className="hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-150 hover:rounded-full"
            >
              <img src={Facebook} alt="facebook" />{" "}
            </a>
            <a
              href="https://www.twitter.com/"
              className="hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-150 hover:rounded-full"
            >
              {" "}
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-150 hover:rounded-full"
            >
              {" "}
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://www.youtube.com"
              className="hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-150 hover:rounded-full"
            >
              {" "}
              <img src={Youtube} alt="Youtube" />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-150 hover:rounded-full"
            >
              <img src={Instagram} alt="instagram " />{" "}
            </a>
            <a
              href="https://www.pinterest.com"
              className="hover:-translate-y-2 hover:transition hover:duration-150 hover:shadow-md hover:shadow-slate-50 hover:scale-150 hover:rounded-full"
            >
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </div>
          <button className=" hover:shadow-md hover:shadow-slate-50 hover:duration-150 hover:scale-105 hover:ease-in-out hover:transition-all hover:-translate-y-2 delay-100 transition-all duration-500  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-14 py-4 text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            BUILD YOUR WORLD
          </button>
        </div>
      </div>
      <div className="mt-[10%] mb-[5%] flex justify-center items-center flex-col space-y-11 ">
        <img src={Vector17} alt="vectooor" />
        <h1 className="text-[14px] text-white font-primaryfont tracking-wide max-sm:items-center max-sm:space-y-4 max-sm:leading-loose ">
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
        </h1>
      </div>
    </footer>
  );
}

export default Footer;

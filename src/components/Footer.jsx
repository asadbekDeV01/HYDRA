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
      

      <div className="flex justify-around items-center relative">
        <a href="/">
        <img
          src={logo}
          id="footerlogo"
          alt="Logo"
          className="w-[185px] h-[187px]"
        />
        </a>
        <div className="grid grid-cols-2">
          <img src={Vector20} alt="VECTORRR" />
          <ul className="text-[16px] text-white font-primaryfont space-y-5">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href=" #services">SERVICES</a>
            </li>
            <li>
              <a href="#technobg">TECHNOLOGIES</a>
            </li>
            <li>
              <a href=" #how to">HOW TO </a>
            </li>
            <li>
              <a href="#form">JOIN HYDRA</a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2">
          <img src={Vector20} alt="VECTORRR" />
          <ul className="text-[16px] text-white font-primaryfont space-y-5">
            <li>
              <a href="#">F.A.Q</a>
            </li>
            <li>
              <a href=" #">SITEMAP</a>
            </li>
            <li>
              <a href=" #">CONDITIONS</a>
            </li>
            <li>
              <a href=" #">LICENSES</a>
            </li>
          </ul>
        </div>

        <img src={Vector20} alt="VECTORRR" />
        <div className="space-y-10">
          <h1 className="text-[16px] text-white font-primaryfont font-bold">
            SOCIALIZE WITH HYDRA
          </h1>
          <div className="flex justify-around items-start space-x-4 ">
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="facebook" />{" "}
            </a>
            <a href="https://www.twitter.com/">
              {" "}
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/">
              {" "}
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="https://www.youtube.com">
              {" "}
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="https://www.instagram.com">
              <img src={Instagram} alt="instagram " />{" "}
            </a>
            <a href="https://www.pinterest.com">
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </div>
          <button className="transition-all duration-500  hover:bg-gradient-to-rl hover:text-white hover:to-[#8176AF]  hover:from-[#343045] bg-size-200 hover:bg-right-bottom    text-xs font-bold rounded-full px-14 py-4 text-[#343045]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            BUILD YOUR WORLD
          </button>
        </div>
      </div>
      <div className="mt-[10%] mb-[5%] flex justify-center items-center flex-col space-y-11 ">
        <img src={Vector17} alt="vectooor" />
        <h1 className="text-[14px] text-white font-primaryfont tracking-wider">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h1>
      </div>
    </footer>
  );
}

export default Footer;

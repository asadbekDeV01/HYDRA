import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="">
      <div className="bg-primary px-[84px] max-sm:px-[20px]">
        <Navbar />
      </div>
      <main className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:center">
        {children}
      </main>
      <div className="mt-[10%] mx-[84px] max-sm:mx-[20px] ">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

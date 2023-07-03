import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <div className="bg-primary px-[84px] max-sm:px-[20px]">
        <Navbar />
      </div>
      <main>{children}</main>
      <div className="mt-[10%] mx-[84px]">
      <Footer />
      </div>
    </div>
  );
}

export default Layout;

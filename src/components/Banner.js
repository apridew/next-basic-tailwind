import Image from "next/image";
import banner from "@/assets/img/banner.png";

const Banner = ({ closeNav }) => {
  return (
    <div
      onClick={closeNav}
      className="z-20 flex px-4 justify-between items-center max-w-screen-xl m-auto pt-12 flex-wrap sm:flex-nowrap"
    >
      <div className="basis-full sm:basis-2/5 flex flex-col gap-8 max-w-lg pb-8 ">
        <h1 className="sm:text-5xl text-4xl font-bold leading-tight">
          Increase Your Customers Loyalty and Satisfaction
        </h1>
        <p className="sm:text-xl text-lg font-medium">
          We help businesses like yours earn more customers, standout from
          competitors, make more money
        </p>
        <button className="text-white bg-green-500 p-4 rounded-xl w-32 hover:opacity-80">
          Get Started
        </button>
      </div>
      <div className="px-5 basis-full sm:basis-3/5 max-w-screen-sm">
        <Image src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;

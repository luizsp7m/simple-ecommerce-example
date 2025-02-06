import Image from "next/image";
import SectionContainer from "../../../components/shared-components/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer>
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight tracking-tight sm:w-3/4">
            Grab up to <span className="text-lama">60% off</span> on
            <br /> Selected Products
          </h1>

          <button className="rounded-full bg-lama text-white py-3 px-8 text-base font-semibold shadow-lg hover:bg-lama-dark transition-all duration-300 ease-in-out">
            Buy Now
          </button>
        </div>

        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;

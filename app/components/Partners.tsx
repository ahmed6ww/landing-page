import Image from "next/image";

const Partners = () => {
  return (
    <div className=" max-w-full ">
      <div className=" text-5xl md:text-7xl text-center      font-bold md:gap-5 gap-0 md:min-w-[949px] flex items-center justify-center md:mt-32 mt-28 ">
        <h1 className="text-white ">
          Our <span className="text-primary">Partners</span>
        </h1>
      </div>

      <ul className=" xs:timeline xs:timeline-middle md:text-3xl lg:text-4xl text-lg sm:text-xl w-64 xs:text-lg xs:w-auto   font-semibold  mt-60 h-[600px]  xs:timeline-vertical ">
        <li>
          <div className="timeline-start xs:bg-transparent xs:h-20   md:h-36 md:w-96 p-5 xs:timeline-box flex items-center">
            <Image
              src="/token.png"
              height={195}
              width={195}
              alt="company-logo"
              className="w-12 sm:w-20 md:w-28"
            />
            BscScan
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end p-4 xs:bg-transparent xs:h-20  md:h-36 md:w-96 xs:timeline-box flex items-center">
            <Image
              src="/token.png"
              height={95}
              width={95}
              alt="company-logo"
              className="w-12 sm:w-20 md:w-28"
            />
            CuberScope
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start p-5 xs:bg-transparent xs:h-20  md:h-36 md:w-96 xs:timeline-box flex items-center">
            <Image
              src="/token.png"
              height={95}
              width={95}
              alt="company-logo"
              className="w-12 sm:w-20 md:w-28"
            />
            TradingView
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end p-5 xs:bg-transparent xs:h-20 md:h-36 md:w-96 xs:timeline-box flex items-center">
            <Image
              src="/token.png"
              height={95}
              width={95}
              alt="company-logo"
              className="w-12 sm:w-20 md:w-28"
            />
            BLOCKLIZ
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Partners;

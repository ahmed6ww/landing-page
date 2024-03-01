import Image from "next/image";

const Partners = () => {
  return (
    <div className=" max-w-full">
      <div className=" text-5xl md:text-7xl     font-bold md:gap-5 gap-0 md:min-w-[949px] flex items-center justify-center md:mt-32 mt-28 ">
        <h1 className="text-white ">
          Our <span className="text-primary">Partners</span>
        </h1>
      </div>

      <ul className="timeline timeline-middle md:text-4xl  font-semibold  mt-40 h-[600px]  timeline-vertical ">
        <li>
          <div className="timeline-start bg-transparent   p-5 timeline-box flex items-center">
            <Image src="/token.png" height={195} width={195} alt="company-logo" className="w-14 md:w-28"/>
            BscScan
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end p-4 bg-base-300 bg-transparent  timeline-box flex items-center">
            <Image src="/token.png" height={95} width={95} alt="company-logo" className="w-14 md:w-28" />
            Cuberscope
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start p-5 bg-transparent timeline-box flex items-center">
            <Image src="/token.png" height={95} width={95} alt="company-logo" className="w-14 md:w-28"/>
            TradingView
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end p-5 bg-transparent timeline-box flex items-center">
            <Image src="/token.png" height={95} width={95} alt="company-logo" className="w-14 md:w-28"/>
            BLOCKLIZ
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Partners;

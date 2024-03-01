import Image from "next/image";
import { platfrom } from "../Data";

function Platform() {
  return (
    <div className="min-h-screen mx-10">
      <div className=" text-[33px] md:text-[65px]  font-bold md:gap-5 gap-0 md:min-w-[949px] text-center justify-center md:mt-32 mt-28 ">
        <h1 className="text-white">
          Platform <span className="text-[#F89B1F]">Offerings</span>
        </h1>
      </div>
      <div className="mt-10 mb-20">
        <h1 className="text-[#EBEBEB] text-4xl font-bold">
          Discover the power of our TestNet
        </h1>
        <p className="mt-4 text-[#EBEBEB]  w-[50%]">
          Your opportunity to shape the future of crypto trading. Explore our
          platform, provide{" "}
          <strong className="text-[#F89B1F]"> valuable feedback,</strong> and be
          part of the revolution. Join us now and experience the{" "}
          <strong className="text-[#F89B1F]">innovation firsthand.</strong>
        </p>
        <button className="btn mt-4 border-black bg-[#f89b1f] text-black hover:text-[#EBEBEB] w-[159px] hover:bg-black hover:border-[#f89b1f] rounded-full h-[32px]">
          Join Now
        </button>
      </div>
      {platfrom.map((cont, index) => {
        
        return (
          <div
            key={index}
            className=" lg:w-[50%]  lg:grid-cols-4 "
          >
            <div className="flex flex-col w-full lg:flex-row lg:  ">
              <div className="grid lg:grid-cols-2 p-8 flex-grow  mb-5 w-[350px] lg:divider-start lg:divider-end  card bg-base-300 rounded-box place-items-center">
                <div>
                  <Image
                    src={cont.image}
                    height={255}
                    width={255}
                    alt="Image"
                    className="w-[400px] "
                  />
                </div>
                
                <div className="flex text-center flex-col  justify-center items-center ">
                  <h1 className=" text-[#EBEBEB] text-4xl font-bold">
                    {cont.label}
                  </h1>
                  <p className="mt-4 text-[#EBEBEB] lg:w-[50%]  w-[100%]">
                    {cont.content}
                  </p>
                  <button className="btn mt-4  border-black bg-[#f89b1f] text-black hover:text-[#EBEBEB] w-[200px] hover:bg-black hover:border-[#f89b1f] rounded-full h-[32px]">
                    {cont.button}
                  </button>
                </div>
                
              </div>
              


            </div>
            
          </div>
        );
      })}
    </div>
  );
}

export default Platform;

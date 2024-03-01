"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";


export default function Card({ one }: any) {
  return (
    <div className=" flex items-center rounded-xl justify-center p-8">
      <PinContainer
        title={one.href}
        href={one.href}
      >
        <div className="card w-[16em] h-[17em] rounded-xl shadow-xl border border-primary">
          {/* Other card content */}
          <div className="card-body items-center text-center justify-center">
            <h2 className="card-title text-[1.5rem]">{one.title}</h2>
            <p className="text-[13px] w-[17em] mt-3">{one.para}</p>
            <div className="card-actions">
              <button className="btn bg-primary text-black border-black hover:text-white w-[12em] font-sans font-medium hover:bg-black hover:border-[#f89b1f] rounded-full h-[32px]">
                {one.button}
              </button>
      
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

// import React from 'react';

// export default function Card({ one }: any) {
//   return (
//     <div className="card w-[264px] h-[250px] shadow-xl border border-[#f89b1f]">
//       {/* Other card content */}
//       <div className="card-body items-center text-center justify-center">
//         <h2 className="card-title text-[22px]">{one.title}</h2>
//         <p className="text-[13px] mt-3">{one.para}</p>
//         <div className="card-actions">
//           <button className="btn bg-[#f89b1f] text-black hover:text-white w-[159px] hover:bg-black hover:border-[#f89b1f] rounded-full h-[32px]">
//             {one.button}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
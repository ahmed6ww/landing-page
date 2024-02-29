import React from 'react';

export default function Card({ one }: any) {
  return (
    <div className="card w-[264px] h-[250px] shadow-xl border border-[#f89b1f]">
      {/* Other card content */}
      <div className="card-body items-center text-center justify-center">
        <h2 className="card-title text-[22px]">{one.title}</h2>
        <p className="text-[13px] mt-3">{one.para}</p>
        <div className="card-actions">
          <button className="btn bg-[#f89b1f] text-black hover:text-white w-[159px] rounded-full h-[32px]">
            {one.button}
          </button>
        </div>
      </div>
    </div>
  );
}

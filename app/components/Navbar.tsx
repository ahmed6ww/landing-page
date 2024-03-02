import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-400 drop-shadaow p-5 text-secondary">
        <div className="navbar-start bg-black">
          <div className="dropdown bg-black">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" bg-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <a>Start</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Platform Offering</a>
              </li>
              <li>
                <a>How ir works</a>
              </li>
              <li>
                <a>Security</a>
              </li>
              <li>
                <a>Roadmap</a>
              </li>
              <li>
                <a>FAQ's</a>
              </li>

              <li>
                <details>
                  <summary>Other Links</summary>
                  <ul className="p-2">
                    <li>
                      <a>Team</a>
                    </li>
                    <li>
                      <a>View White Paper</a>
                    </li>
                    <li>
                      <a>Twittter</a>
                    </li>
                    <li>
                      <a>Discord</a>
                    </li>
                    <li>
                      <a>Instagram</a>
                    </li>
                    <li>
                      <a>Telegram</a>
                    </li>
                  </ul>
                </details>
              </li>
              {/* <li>
                <a
                  className="btn mt-4 border-primary bg-transparent text-primary hover:bg-secondary
                hover:text-black"
                >
                  Sign Up
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <Image src="/logo.png" width={220} height={40} alt="Benefit Mine" />
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Start</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Platform Offering</a>
            </li>
            <li>
              <a>How it works</a>
            </li>
            <li>
              <a>Security</a>
            </li>
            <li>
              <a>Roadmap</a>
            </li>
            <li>
              <a>FAQ's</a>
            </li>

            <li>
              <details className="">
                <summary>Other Links</summary>
                <ul className="p-2 bg-black ">
                  <li>
                    <a>Team</a>
                  </li>
                  <li>
                    <a>View White Paper</a>
                  </li>
                  <li>
                    <a>Twittter</a>
                  </li>
                  <li>
                    <a>Discord</a>
                  </li>
                  <li>
                    <a>Instagram</a>
                  </li>
                  <li>
                    <a>Telegram</a>
                  </li>
                  <li>
                    <a className="btn xl:hidden">Sign Up</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffcc00_0%,#EBECF0_50%,#f89b1f_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-[0.8rem] font-light text-white backdrop-blur-3xl">
              BUY $BFM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-[0.25rem] w-5 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
          {/* <a className="btn ">Sign Up</a> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Start</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Benefit Mine</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Start</a></li>
      <li><a>About</a></li>
      <li><a>Platform Offering</a></li>
      <li><a>How ir works</a></li>
      <li><a>Security</a></li>
      <li><a>Roadmap</a></li>
      <li><a>FAQ's</a></li>
      <li>
        <details>
          <summary>Other Links</summary>
          <ul className="p-2">
            <li><a>Team</a></li>
            <li><a>View White Paper</a></li>
            <li><a>Twittter</a></li>
            <li><a>Discord</a></li>
            <li><a>Instagram</a></li>
            <li><a>Telegram</a></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Buy BFM</a>
  </div>
</div>
    </>
  );
};

export default Navbar;

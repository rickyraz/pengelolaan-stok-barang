import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header className="text-sm py-8 bg-[#161D27]">
      <div className="flex justify-between max-w-5xl mx-auto items-center">
        <Link to="/">
          <img
            src="/logo/logo-light.png"
            alt="logo"
            className="max-w-[185px]"
          />
        </Link>

        <ul className="flex space-x-8 text-white">
          <li>Feature</li>

          <Link to="/pricing">
            <li>Pricing</li>
          </Link>

          <Link to="/order">
            <li>Order</li>
          </Link>

          <li>How to order</li>
          <li>Guide</li>
        </ul>
        <div className="flex space-x-6">
          {/* <button className="text-[#EDC997]">Register</button> */}
          <button className="text-center px-6 py-2 border transition-all duration-300  border-[#EDC997] hover:bg-white hover:text-[#1F2732] rounded-md text-white font-medium">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

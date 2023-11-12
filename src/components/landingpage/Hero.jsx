import Home from "./images/home.png";

function Hero() {
  return (
    <section className=" pt-24 bg-[#161D27] ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center font-bold text-4xl text-[#4C90FF]">
          ISP Billing & Network Management System
        </h1>
        <p className="text-center  text-sm mt-4 text-white">
          We help local ISPs succeed in a competitive market and build a
          profitable, fast-growing business
        </p>
        <div className="relative -bottom-14 ">
          <img
            className="object-cover w-full max-h-[500px] rounded-2xl shadow-sm  shadow-[#232b42]/10"
            // src="./images/home.png"
            src={Home}
            alt="Volcano"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

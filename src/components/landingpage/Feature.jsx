import React from "react";

function Feature() {
  const featureItems = [
    {
      title: "CRM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, quasi nulla saepe quos repellendus sunt! Sunt iusto in itaque!",
    },
    {
      title: "Network Monitoring",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, quasi nulla saepe quos repellendus sunt! Sunt iusto in itaque!",
    },
    {
      title: "Inventory Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, quasi nulla saepe quos repellendus sunt! Sunt iusto in itaque!",
    },
    {
      title: "Network Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, quasi nulla saepe quos repellendus sunt! Sunt iusto in itaque!",
    },
    {
      title: "HRM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, quasi nulla saepe quos repellendus sunt! Sunt iusto in itaque!",
    },
    // {
    //   title: "CRM",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, quasi nulla saepe quos repellendus sunt! Sunt iusto in itaque!",
    // },
  ];

  return (
    <section className="max-w-5xl mx-auto pt-36 pb-10">
      <h2 className="text-center font-bold text-2xl ">
        Zenradius <span className="text-blue-700">simplifies the process</span>{" "}
        of selling internet services, connecting customers, handling billing,
        and providing customer support.
      </h2>
      <p className="text-center pt-3">
        Improve results in each aspect of your business
      </p>
      <div className="grid grid-cols-3 gap-4">
        {featureItems.map((item, index) => (
          <FeatureItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ title, description }) {
  return (
    <>
      <div className="relative  p-[1px] mt-4 shadow-md  shadow-[#eaf0f9] group hover:scale-105 transition-all   grid overflow-hidden rounded-md  duration-300">
        <span>
          <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(#4C90FF,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#4C90FF_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        {/* <span className="backdrop absolute inset-[1px] bg-white transition-colors duration-200 group-hover:bg-slate-200" /> */}
        <div className="relative z-50  p-8 bg-white rounded-md ">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Feature;

import { useCart, useAddItem } from "@/store/useCart";
import { useEffect } from "react";
import { useNavigate, Router } from "@tanstack/react-router";

const Pricing = () => {
  const addProduct = useAddItem((state) => state.addProductID);

  return (
    <section className=" pb-12 pt-16 bg-[#1c2431]">
      {/* <button onClick={addProduct} className="bg-slate-300">
        add
      </button> */}

      <div className="max-w-5xl mx-auto">
        <div className=" mb-[60px] max-w-3xl mx-auto  lg:mb-20">
          <h2 className="mb-4 text-3xl font-bold text-center  sm:text-4xl md:text-[40px] text-[#EDC997]">
            Plans & Pricing
          </h2>
          <p className="text-white  text-center ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex space-x-4">
          <PricingCard
            name={"Personal Plan"}
            type="Personal"
            price="RP 250.000"
            subscription="month"
            description="Perfect for using in a personal website or a client project."
            buttonText="Subscribe Basic Plan"
            productId={1}
          >
            <List>1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Use on 1 (one) project</List>
            <List>3 Months support</List>
          </PricingCard>
          <PricingCard
            name={"Business Plan"}
            type="Business"
            price="RP 550.000"
            subscription="month"
            description="Perfect for using in a personal website or a client project."
            buttonText="Subscribe Business Plan"
            productId={2}
            active
          >
            <List>5 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Use on31 (Three) project</List>
            <List>4 Months support</List>
          </PricingCard>
          <PricingCard
            name={"Enterprise Plan"}
            type="Enterprise"
            price="RP 1.150.000"
            subscription="month"
            description="Perfect for using in a personal website or a client project."
            buttonText="Subscribe Enterprise Plan"
            productId={3}
          >
            <List>Unlimited User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Unlimited project</List>
            <List>12 Months support</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
  productId,
}) => {
  const navigate = useNavigate({ from: "/pricing" });

  const addToCart = useCart((state) => state.addToCart);
  const productsInCart = useCart((state) => state.products);
  const isProductInCart = productsInCart.includes(productId);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const handleButtonClick = () => {
    if (isProductInCart) {
      removeFromCart(productId);
    } else {
      // Check if the cart is empty before adding a product
      if (productsInCart.length === 0) {
        addToCart(productId);
        navigate({ to: "/order" });
      } else {
        // Display a message or handle the case where a product is already in the cart
      }
    }
  };

  // useEffect(() => {
  //   if (isProductInCart) {
  //     // Use useEffect to navigate when a product is in the cart
  //     navigate({ to: "/order" });
  //   }
  // }, [isProductInCart]);

  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="relative z-10 px-8 py-10 mb-10 overflow-hidden bg-white border rounded-xl  border-opacity-20 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-8">
          <span className="block mb-4 text-lg font-semibold text-primary">
            {type}
          </span>
          <h2 className="mb-2 text-[42px] text-3xl font-bold ">{price}</h2>
          <span className="mb-5 text-base font-medium text-body-color">
            / {subscription}
          </span>
          <p className="mb-8 mt-5 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
            {description}
          </p>
          <ul className="mb-7">
            <p className="mb-1 text-base leading-loose text-body-color">
              {children}
            </p>
          </ul>
          <a
            onClick={handleButtonClick}
            className={`hover:cursor-pointer ${
              active
                ? `w-full block text-base font-semibold text-white ${
                    isProductInCart ? "bg-[#EDC997]" : "bg-blue-600"
                  } border border-primary rounded-md text-center p-4 hover:bg-blue-700 transition`
                : `block w-full rounded-md border border-[#c5d1f8] bg-transparent p-4 text-center text-base font-semibold ${
                    isProductInCart
                      ? "bg-[#EDC997] text-white"
                      : "text-blue-950 hover:bg-blue-700"
                  }  transition hover:border-blue-600 hover-bg-[#EDC997] `
            }`}
          >
            {isProductInCart ? "Remove from Cart" : buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <>
      <p className="mb-1 text-base leading-loose text-body-color">{children}</p>
    </>
  );
};

export default Pricing;

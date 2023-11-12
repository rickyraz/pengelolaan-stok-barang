import { useCart, useAddItem } from "@/store/useCart";
import { Link } from "@tanstack/react-router";
import { useNavigate, Router } from "@tanstack/react-router";

function Cart() {
  const selectedProduct = useCart((state) => state.products);

  console.log("product yang di select", selectedProduct);
  console.log("IDproduk", selectedProduct[0]);

  // const product = useAddItem((state) => state.product);
  // console.log("jumlah product", product);

  return (
    <div>
      <Stepper />
      {/* <p>jumlah product {product}</p>
      <p>dibawah ada mapping</p> */}

      <div className="h-screen bg-white">
        <div className="py-12">
          <div className="max-w-5xl mx-auto bg-slate-50 shadow-md rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-3xl font-semibold ">Review</h1>

                    <div className="flex justify-between  mt-6 pt-6">
                      <div className="flex  items-center">
                        {/* <img
                          src="https://i.imgur.com/EEguU02.jpg"
                          width="60"
                          className="rounded-full "
                        /> */}

                        <div className="flex flex-col ">
                          <select value={selectedProduct[0]}>
                            <option value="1">Personal Plan</option>
                            <option value="2">Business Plan</option>
                            <option value="3">Enterprise Plan</option>
                          </select>
                          {/* <span className="md:text-md font-medium">
                            {selectedProduct?.name}
                          </span> */}
                          {/* <span className="text-xs font-light text-gray-400">
                            #41551
                          </span> */}
                        </div>
                      </div>

                      <div className="flex-col justify-end items-end text-end text-xs">
                        {/* <span className=" font-medium">RP.210.000</span> */}
                        <span className=" font-medium">
                          {selectedProduct?.price}
                        </span>

                        <div>
                          <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-1 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xs"
                          >
                            {/* <option selected>Choose a country</option> */}
                            <option value="US">1 Month</option>
                            {/* <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option> */}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-16 pt-6 border-t">
                      <div className="flex items-center">
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <Link to="/pricing">
                          <span className="text-md  font-medium text-blue-400">
                            Back to pricing
                          </span>
                        </Link>
                      </div>

                      {/* <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>
                        <span className="text-lg font-bold text-gray-800 ">
                          {" "}
                          $24.90
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <div className=" p-5 bg-slate-800 rounded overflow-visible">
                    <div className="flex">
                      <span className="text-xl font-medium text-gray-100 block pb-3">
                        Order Price
                      </span>
                      {/* <div className="text-xs">Hapus</div> */}
                    </div>
                    <div className="flex justify-between  pt-4 border-b pb-2">
                      <h3 className="text-xs text-slate-300 ">Subtotal</h3>
                      <p className="text-xs text-slate-300 ">Rp. 210,000</p>
                    </div>
                    <div className="flex justify-between  pt-4 border-b pb-2">
                      <h3 className="text-xs text-slate-300 ">PPN@ 11.00%</h3>
                      <p className="text-xs text-slate-300 ">Rp. 23,100</p>
                    </div>

                    <div className="flex-col justify-end items-end text-end my-5 pt-4 py-6 bg-slate-500/20 pr-4 ">
                      <h3 className="text-2xl font-bold text-[#EDC997]">
                        Rp. 233.100
                      </h3>
                      <p className="text-xs text-slate-300 ">
                        Amount Due Today
                      </p>
                    </div>

                    <a href="/order/company-profile-2">
                      <button className="h-12 w-full bg-blue-600 rounded focus:outline-none text-white hover:bg-blue-700 flex justify-center items-center">
                        <span>Next</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stepper() {
  return (
    <div className="max-w-5xl mx-auto pt-8">
      <ol className="flex w-full justify-center">
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        </li>

        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        </li>
        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
          </span>
        </li>
      </ol>
    </div>
  );
}

export default Cart;

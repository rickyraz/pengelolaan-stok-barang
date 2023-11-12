import { useCart } from "@/store/useCart";

function PricingDetail() {
  return (
    <section className="max-w-5xl mx-auto py-14">
      {/* <div>
        <button onClick={addProductQuantity} className="bg-slate-400 p-4">
          Buy
        </button>
        <button onClick={removeProductQuantity} className="bg-blue-100 p-4">
          Remove
        </button>
      </div> */}
      <table className="rounded ">
        <THead />
        <tbody>
          <HeadTableRow>
            <HeadTableCell>Support</HeadTableCell>
          </HeadTableRow>

          <TableRow>
            <TableCell isHeader>Web & email support</TableCell>
            <TableCell>Standard support</TableCell>
            <TableCell>Priority support</TableCell>
            <TableCell isLast>Priority support with dedicated CSM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell isHeader>Phone & video support</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell isLast>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title (too many to add)
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell isHeader>Phone & video support</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell isLast>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title (too many to add)
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </TableCell>
          </TableRow>

          <HeadTableRow>
            <HeadTableCell>Security & Administration</HeadTableCell>
          </HeadTableRow>

          <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 bg-slate-100 border border-r-0  border-slate-300 font-normal flex items-center border-b-0 sm:border-b"
            >
              API
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 flex items-center justify-center">
              Read
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 flex items-center justify-center">
              Read / Write
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border flex items-center justify-center text-center">
              Read / Write
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 bg-slate-100 p-4 border-slate-300 border border-r-0  border-t-0 font-normal"
            >
              Analytics
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal"
            >
              Reporting dashboard
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal"
            >
              Single-team permissions
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border  border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal "
            >
              Multi-team permission
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal "
            >
              Single sign-on (SSO)
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 text-center">
              SAML
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0 text-center">
              SAML, AD
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal "
            >
              Invoicing
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>

          <HeadTableRow>
            <HeadTableCell>Hosting Options</HeadTableCell>
          </HeadTableRow>

          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 bg-slate-100 p-4 border-slate-300 border border-r-0  font-normal border-b-0 sm:border-b"
            >
              Hosted on stackoverflow.com
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border "></td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal"
            >
              Our managed cloud
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal"
            >
              Your cloud
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border  border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal "
            >
              Your servers
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <HeadTableRow>
            <HeadTableCell> Customization</HeadTableCell>
          </HeadTableRow>

          <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 bg-slate-100 p-4 border-slate-300 border border-r-0 border-b-0 sm:border-b font-normal"
            >
              Logo and colour
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal"
            >
              Tags
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal"
            >
              Theme
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border  border-t-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal "
            >
              Privileges
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
          <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
            <th
              scope="col"
              className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0 bg-slate-100 font-normal "
            >
              User help
            </th>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-r-0 border-t-0"></td>
            <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className="text-slate-700 m-auto"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title id="catTitle">
                  Relevant package title ( too many to add )
                </title>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </td>
          </tr>
        </tbody>

        {/* <tfoot>
            <tr className="flex text-left text-sm">
              <td className="w-1/4 hidden sm:block p-4 border-slate-300 border border-t-0 text-center bg-slate-100 border-r-0"></td>
              <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0 text-center border-r-0">
                <a
                  href=""
                  className=" mt-auto block text-white bg-slate-500 text-xs py-2 text-center rounded font-normal"
                  title=""
                >
                  Get Started
                </a>
              </td>
              <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0 text-center border-r-0">
                <a
                  href=""
                  className=" mt-auto block text-white bg-slate-500 text-xs py-2 text-center rounded font-normal"
                  title=""
                >
                  subscribe
                </a>
              </td>
              <td className="w-1/3 sm:w-1/4 p-4 border-slate-300 border border-t-0 text-center">
                <a
                  href=""
                  className=" mt-auto block text-white bg-slate-500 text-xs py-2 text-center rounded font-normal rounded-bt"
                  title=""
                >
                  Request a demo
                </a>
              </td>
            </tr>
          </tfoot> */}
      </table>
    </section>
  );
}

export default PricingDetail;
// -----------------

const THead = () => {
  const pricingData = [
    {
      title: "Basic",
      description: "For small team",
      price: "RP 250.000",
      price_description: "/month or billed annually",
      buttonLabel: "Subscribe Basic Plan",
    },
    {
      title: "Business",
      description: "For medium team",
      price: "RP 550.000",
      price_description: "/month or billed annually",
      buttonLabel: "Subscribe Business Plan",
    },
    {
      title: "Enterprise",
      description: "For big team",
      price: "RP 1.150.000",
      price_description: "/month or billed annually",
      buttonLabel: "Subscribe Enterprise Plan",
    },
  ];
  return (
    <thead className="sticky block top-0" scope="col">
      <tr className="flex text-left">
        <th scope="row" className=" hidden sm:block w-1/4 p-4 rounded-tl "></th>
        {pricingData.map((item, index) => (
          <th
            key={index}
            scope="col"
            className={`w-1/${pricingData.length} sm:w-1/4 p-4   ${
              index === 0 ? "rounded-tl" : ""
            } ${
              index === pricingData.length - 1 ? "rounded-tr" : ""
            }  font-normal bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-slate-100`}
          >
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm hidden sm:block">{item.description}</p>
            <div className="flex items-center mb-4 flex-wrap sm:no-wrap justify-center sm:justify-start">
              <p className="text-3xl font-bold">{item.price}</p>
              <div className="font-normal text-xs ml-2">
                <p>{item.price_description}</p>
              </div>
            </div>
            {index === 0 || index === 2 ? ( // Menambahkan kondisi untuk Basic dan Enterprise Plan
              <a
                href=""
                className="mt-auto block text-blue-600 border border-[#c5d1f8] hover:bg-blue-600 hover:text-white text-xs py-3 text-center rounded font-semibold"
                title=""
              >
                {item.buttonLabel}
              </a>
            ) : (
              <a
                href=""
                className="mt-auto block text-white bg-blue-600 hover:bg-blue-700 text-xs py-3 text-center rounded font-semibold"
                title=""
              >
                {item.buttonLabel}
              </a>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableCell = ({ children, isHeader = false, isLast = false }) => {
  const cellClasses = `w-1/3 sm:w-1/4 p-4 border-slate-300 border  ${
    isHeader ? "bg-slate-100 font-normal" : ""
  }`;

  return <td className={cellClasses}>{children}</td>;
};

const TableRow = ({ children, header = false }) => {
  const rowClasses = `flex text-left text-sm flex-wrap sm:no-wrap ${
    header ? "sm:border-t" : ""
  }`;

  return <tr className={rowClasses}>{children}</tr>;
};

const HeadTableRow = ({ children }) => {
  return <tr className="flex text-left">{children}</tr>;
};

const HeadTableCell = ({ children }) => {
  const cellClasses = `p-4 bg-slate-100 border  border-slate-300 min-w-full border-b-0 text-blue-600`;
  return <td className={cellClasses}>{children}</td>;
};

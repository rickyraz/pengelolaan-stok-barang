import React, { useState } from "react";
import {
  ChevronDown,
  LogOut,
  AppWindow,
  Package,
  FileText,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Logo from "@/components/main/logo/logo-dark.png";
import { Link } from "@tanstack/react-router";

// type MenuStates = {
//   dashboard: boolean;
//   invoice: boolean;
//   my_apps: boolean;
//   subs: boolean;
//   login: boolean;
//   olt: {
//     host: boolean | string | unknown;
//     onu: boolean | string | unknown;
//   };
//   dasa: {
//     sasa: boolean | string | unknown;
//     sasaBB: boolean | string | unknown;
//   };
// };

// type MenuItem = {
//   key: keyof MenuStates;
//   label: string;
//   icon: React.ReactNode;
//   subMenu?: SubMenuItem[];
//   search?: Record<string, unknown>;
//   activeOptions?: ActiveOptions;
//   divider?: boolean; // Tambahkan properti divider
//   menuTitle?: string; // Tambahkan properti menuTitle
// };

// interface ActiveOptions {
//   exact?: boolean;
//   includeHash?: boolean;
//   includeSearch?: boolean;
// }

// type SubMenuItem = {
//   key: string;
//   label: string;
//   to?: string;
//   search?: Record<string, unknown>;
//   activeOptions?: ActiveOptions;
//   subMenuV2?: SubMenuItemV2[];
// };

// type SubMenuItemV2 = {
//   key: string,
//   label: string,
//   to: string,
//   search?: Record<string, unknown>,
//   activeOptions?: ActiveOptions,
// };

function SideNavHorz() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    // {
    //   key: "subs",
    //   label: "Subscription",
    //   icon: <Package />,
    //   to: "/my-invoice",
    // },
    {
      key: "my_apps",
      label: "My App & Subscription",
      icon: <AppWindow />,
      to: "/my-apps-and-subs",
    },
    {
      key: "invoice",
      label: "Invoice",
      icon: <FileText />,
      to: "/my-invoice",
    },
  ];

  return (
    <div className="bg-[#011402] text-white">
      <div className="flex justify-start max-w-5xl mx-auto py-1 ">
        <ul className="space-y-1  flex items-center space-x-4">
          {menuItems.map(({ key, label, icon, to }) => {
            return (
              <div key={key}>
                <div className="cursor-pointer mb-0">
                  <li className="relative">
                    {/* <Link to="/clientarea/my-invoice"> */}
                    <Link to={`/clientarea${to}`}>
                      <Button
                        variant={"ghost"}
                        className={`${
                          open === false ? "px-2 py-2" : "w-full px-3 py-6"
                        } flex justify-between`}
                      >
                        <div className="flex">
                          {/* Icon SVG */}
                          {icon}
                          <span
                            className={`${
                              !open && "hidden"
                            } pl-3 origin-left duration-200`}
                          >
                            {label}
                          </span>
                        </div>
                      </Button>
                    </Link>
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideNavHorz;

{
  /* <div className="relative  cursor-pointer text-sky-950/40">
<Button
  variant={"ghost"}
  className={`${
    open === false ? "px-2 py-2" : "w-full px-3 py-6"
  } flex justify-between`}
>
  <div className="flex">

    <LogOut />
    <span
      className={`${!open && "hidden"} pl-3 origin-left duration-200`}
    >
      {"Logout"}
    </span>
  </div>
</Button>
</div> */
}

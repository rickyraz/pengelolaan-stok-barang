// import SideNav from "@/components/Nav/SideNav";

import SideNav from "@/components/sidenav/SideNav";

import TableContainer from "@/components/Table/y-shadcn-table";
// import { Button } from "@/components/ui/button";

import { Outlet } from "@tanstack/react-router";

function Dashboard() {
  return (
    <div className="flex ">
      {/* <SimpleTable /> */}
      {/* <SideNav /> */}
      <SideNav />
      <section>
        <TableContainer />
        <Outlet />
      </section>
    </div>
  );
}

export default Dashboard;

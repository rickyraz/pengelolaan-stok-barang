import Layout from "@/components/Layout";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState, useMemo } from "react";
import supabase from "@/config/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import V8TableContainer from "@/components/Table/V8TableContainer";
import SearchAndFiltering from "@/components/aikyong_pages/Search";

function Vendor() {
  // Searching
  const [searching, setSearching] = useState("");
  const handleSearchChange = (value) => {
    setSearching(value);
  };
  // Tim
  const fetchTim = async () => {
    const { data, error } = await supabase.from("vendor").select("*");
    if (error) {
      throw new Error("Could not fetch vendor");
    }
    return data;
  };
  const { data: dataVendor, error: fetchError } = useQuery({
    queryKey: ["vendor"],
    queryFn: fetchTim,
  });
  // Column Tim
  const columns = useMemo(
    () => [
      {
        id: "nama_vendor",
        header: "Nama Vendor",
        accessorKey: "nama_vendor", // accessor adalah "key" dalam data
      },
      {
        id: "alamat",
        header: "Alamat",
        accessorKey: "alamat", // accessor adalah "key" dalam data
      },
      {
        id: "action",
        header: "Action",
        cell: (cellProps) => {
          const idEachRow = cellProps.row.original.id;
          return <DropdownAction ids={idEachRow} />;
        },
      },
      // {
      //   id: "role",
      //   header: "Role",
      //   accessorKey: "role",
      //   cell: (roles) => {
      //     const rolesz = roles.row.original.role;

      //     if (rolesz === 3) {
      //       return <p>Super Admin</p>;
      //     } else if (rolesz === 2) {
      //       return <p>Admin</p>;
      //     } else if (rolesz === 1) {
      //       return <p>Sales</p>;
      //     }
      //     return <>{rolesz}</>;
      //   },
      // },
    ],
    []
  );

  console.log("supabase", supabase);
  console.log("dataVendor", dataVendor);
  return (
    <Layout>
      <p>{fetchError && `${fetchError}`}</p>
      {dataVendor && (
        <div className="max-w-5xl mx-auto">
          <HeaderPageAndAddProduct
            data={dataVendor}
            namaHalaman="Vendor"
            desc="Berikut adalah daftar vendor untuk perusahaan ini."
          />
          <SearchAndFiltering
            searching={searching}
            setSearching={handleSearchChange}
            placeholder="Cari Vendor"
          />
          <V8TableContainer
            data={dataVendor}
            columns={columns}
            searching={searching}
            setSearching={handleSearchChange}
          />
        </div>
      )}
    </Layout>
  );
}

export default Vendor;

const DropdownAction = ({ data }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button> */}
          <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
          {/* <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(payment.id)}
          >
            Lihat
          </DropdownMenuItem> */}

          <DropdownMenuItem>Hapus </DropdownMenuItem>
          {/* <DropdownMenuItem>Update </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

// HEADER + POPUP SETOR / TAMBAH

const HeaderPageAndAddProduct = ({ data, namaHalaman, desc }) => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between mt-12">
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white capitalize">
            {namaHalaman}
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {data.length} pengguna
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{desc}</p>
      </div>

      <div className="flex items-center mt-4 gap-x-3">
        {/* <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3098_154395)">
              <path
                d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                stroke="currentColor"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3098_154395">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Import</span>
        </button> */}

        <PopUpAddProduct namaHalaman={namaHalaman} />
      </div>
    </div>
  );
};

function PopUpAddProduct({ namaHalaman, fungsi }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>Tambah {namaHalaman}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Barang</DialogTitle>
          <DialogDescription>
            Tambah Barang yang sudah ada sebelumnya
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Kode Produk
            </Label>
            <Input
              id="name"
              // defaultValue="Pedro Duarte"
              className="col-span-3"
              type="text"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Nama Produk
            </Label>
            <Input
              id="username"
              // defaultValue="@peduarte"
              className="col-span-3"
              type="text"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Stok Produk
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              type="number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Harga Jual
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              type="number"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Tambah Barang</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SelectProductAdd({ data }) {
  return (
    <Select>
      <SelectTrigger className="min-w-[425px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function Footer() {
  return (
    <footer className="text-sm py-8 bg-[#161D27] text-white">
      <div className="max-w-5xl mx-auto space-y-3">
        <img src="/logo/logo-light.png" alt="logo" className="max-w-[135px]" />
        <div className="w-1/3">
          <p className="font-semibold ">Address :</p>
          <p className="text-xs">
            Jl. Raya Pd. Gede No.48B, RT.3/RW.8, Lubang Buaya, Kec. Cipayung,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13810
          </p>
        </div>
        <ul className="flex">
          <li>X</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

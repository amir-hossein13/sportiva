function SideBarLogo() {
  return (
    <div className="container mx-auto flex justify-around p-8 sm:p-6 items-center">
      <div >
        <img src="/public/img/sidlogo.png" alt="" />
      </div>
      <div>
        <h4 className="font-farsi text-liteBule-100 text-4xl font-bold">اسپرتیو</h4>
        <h5 className="font-farsi text-liteBule-100 text-4xl font-bold">پنل کاربری</h5>
      </div>
    </div>
  );
}

export default SideBarLogo;

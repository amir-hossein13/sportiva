import { Link } from 'react-router-dom';

function SideBarLogo() {
  return (
    <Link to="/" className="container mx-auto flex items-center justify-around p-8 sm:p-6">
      <div>
        <img src="/public/img/sidlogo.png" alt="" />
      </div>
      <div>
        <h4 className="font-farsi text-liteBule-100 text-4xl font-bold">اسپرتیو</h4>
        <h5 className="font-farsi text-liteBule-100 text-4xl font-bold">پنل کاربری</h5>
      </div>
    </Link>
  );
}

export default SideBarLogo;

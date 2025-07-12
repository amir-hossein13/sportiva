import { Outlet } from 'react-router-dom';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

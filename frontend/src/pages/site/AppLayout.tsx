import { Outlet } from 'react-router-dom';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;

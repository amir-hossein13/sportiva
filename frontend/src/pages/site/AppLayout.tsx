import { Outlet } from "react-router-dom"
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

function AppLayout() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
}

export default AppLayout

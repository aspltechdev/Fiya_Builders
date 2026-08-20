import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./PublicLayout.css";
import Footer from "../../components/Footer/Footer";




const PublicLayout = () => {
  return (
    <div className="public-layout">

      <Header />

      <main>
        <Outlet />
      </main>

    <Footer/>

    </div>
  );
};

export default PublicLayout;
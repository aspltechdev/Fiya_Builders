// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import "./PublicLayout.css";
// import Footer from "../../components/Footer/Footer";




// const PublicLayout = () => {
//   return (
//     <div className="public-layout">

//       <Header />

//       <main>
//         <Outlet />
//       </main>

//     <Footer/>

//     </div>
//   );
// };

// export default PublicLayout;

// src/layouts/PublicLayout/PublicLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PublicLayout.css";

const PublicLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  // Check if current route is home
  const isHome = location.pathname === "/";

  return (
    <div className="fya-public-layout">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main 
        className={`fya-public-layout__main ${isHome ? 'fya-public-layout__main--home' : ''}`}
        role="main"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
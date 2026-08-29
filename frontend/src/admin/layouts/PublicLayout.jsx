// // import { Outlet } from "react-router-dom";
// // import Header from "../../components/Header/Header";
// // import "./PublicLayout.css";
// // import Footer from "../../components/Footer/Footer";




// // const PublicLayout = () => {
// //   return (
// //     <div className="public-layout">

// //       <Header />

// //       <main>
// //         <Outlet />
// //       </main>

// //     <Footer/>

// //     </div>
// //   );
// // };

// // export default PublicLayout;

// // src/layouts/PublicLayout/PublicLayout.jsx
// import { Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import "./PublicLayout.css";

// const PublicLayout = () => {
//   const location = useLocation();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }, [location.pathname]);

//   // Check if current route is home
//   const isHome = location.pathname === "/";

//   return (
//     <div className="fya-public-layout">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main 
//         className={`fya-public-layout__main ${isHome ? 'fya-public-layout__main--home' : ''}`}
//         role="main"
//       >
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default PublicLayout;

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
      behavior: "smooth",
    });
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  const whatsappNumber = "918807755674";

  const whatsappMessage =
    "Hello FIYA Builders, I would like to discuss a project.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fya-public-layout">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        className={`fya-public-layout__main ${
          isHome
            ? "fya-public-layout__main--home"
            : ""
        }`}
        role="main"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />


      {/* ==========================================
          FLOATING WHATSAPP
      ========================================== */}

      <a
        href={whatsappUrl}
        className="fya-whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FIYA Builders on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M16 3.2C9 3.2 3.3 8.8 3.3 15.8c0 2.2.6 4.3 1.7 6.1L3.1 28.8l7-1.8c1.8 1 3.8 1.5 5.9 1.5 7 0 12.7-5.7 12.7-12.7S23 3.2 16 3.2Zm0 22.9c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1-1.6-1.5-3.4-1.5-5.3C5.4 10.1 10.1 5.4 16 5.4s10.6 4.7 10.6 10.6S21.9 26.1 16 26.1Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z"
          />
        </svg>

        <span className="fya-whatsapp-tooltip">
          Chat with us
        </span>
      </a>

    </div>
  );
};

export default PublicLayout;
import {
  Routes,
  Route,
} from "react-router-dom";

/*
|--------------------------------------------------------------------------
| Public Pages
|--------------------------------------------------------------------------
*/



/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/






/*
|--------------------------------------------------------------------------
| Admin Components
|--------------------------------------------------------------------------
*/

import Home from "../pages/Home.jsx";
import Login from "../admin/pages/Login.jsx";
import Dashboard from "../admin/pages/Dashboard.jsx";
import About from "../components/About/About.jsx";
import Services from "../admin/pages/ServicesManagement.jsx";
import Projects from "../admin/pages/ProjectsManagement.jsx";
import Gallery from "../admin/pages/GalleryManagement.jsx";
import Testimonials from "../admin/pages/TestimonialsManagement.jsx";
import Enquiries from "../admin/pages/EnquiriesManagement.jsx";
import AdminLayout from "../admin/layouts/AdminLayout.jsx";
import ProtectedRoute from "../admin/components/ProtectedRoute.jsx";
import Hero from "../admin/pages/HeroManagement.jsx";
import PublicLayout from "../admin/layouts/PublicLayout.jsx";
import AboutPage from "../pages/About.jsx";
import ServicesPage from "../pages/Services.jsx";
import ProjectsPage from "../pages/Projects.jsx";
import GalleryPage from "../pages/Gallery.jsx";
import ContactPage from "../pages/Contact.jsx";
import TestimonialForm from "../admin/pages/TestimonialForm.jsx";
import SocialMediaManagement from "../admin/pages/SocialMediaManagement.jsx";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ======================================
          PUBLIC WEBSITE
      ====================================== */}
<Route
  path="/testimonialform"
  element={<TestimonialForm />}
/>

 <Route element={<PublicLayout />}>
      <Route
        path="/"
        element={<Home />}


      />

<Route
  path="/about"
  element={<AboutPage />}
/>



<Route
  path="/services"
  element={<ServicesPage />}
/>

<Route
  path="/projects"
  element={<ProjectsPage />}
/>
<Route
  path="/gallery"
  element={<GalleryPage />}
/>


<Route
  path="/contact"
  element={<ContactPage />}
/>


</Route>

      {/* ======================================
          ADMIN LOGIN
      ====================================== */}

      <Route
        path="/admin/login"
        element={<Login />}
      />


      {/* ======================================
          PROTECTED ADMIN
      ====================================== */}

      <Route
        element={
          <ProtectedRoute />
        }
      >

        <Route
          path="/admin"
          element={
            <AdminLayout />
          }
        >

          {/* Dashboard */}

          <Route
            index
            element={
              <Dashboard />
            }
          />

          {/* Hero */}

          <Route
            path="hero"
            element={
              <Hero />
            }
          />

          {/* About */}

          <Route
            path="about"
            element={
              <About />
            }
          />

          {/* Services */}

          <Route
            path="services"
            element={
              <Services />
            }
          />

          {/* Projects */}

          <Route
            path="projects"
            element={
              <Projects />
            }
          />

          {/* Gallery */}

          <Route
            path="gallery"
            element={
              <Gallery />
            }
          />

          {/* Testimonials */}

          <Route
            path="testimonials"
            element={
              <Testimonials />
            }
          />

          {/* Enquiries */}

          <Route
            path="enquiries"
            element={
              <Enquiries />
            }
          />

          <Route
            path="socialMedia"
            element={
              <SocialMediaManagement />
            }
          />

          {/* Settings */}

         

        </Route>

      </Route>


      {/* ======================================
          404
      ====================================== */}

     
    </Routes>
  );
};

export default AppRoutes;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';

// // Page Imports
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import ServiceDetail from './pages/ServiceDetail';
// import Gallery from './pages/Gallery'; // Import Gallery Page
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
//         <Navbar />
        
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/:id" element={<ServiceDetail />} />
            
//             {/* Added Gallery Route */}
//             <Route path="/gallery" element={<Gallery />} />
            
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Clients from './pages/Clients';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Admin Imports
import { AdminAuthProvider } from './context/AdminAuthContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminContacts from './pages/admin/AdminContacts';
import AdminCareers from './pages/admin/AdminCareers';
import AdminClients from './pages/admin/AdminClients';
import AdminGallery from './pages/admin/AdminGallery';
import AdminMembers from './pages/admin/AdminMembers';

function PublicSite() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="careers" element={<AdminCareers />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="members" element={<AdminMembers />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<PublicSite />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AdminAuthProvider>
        <Router>
          <ScrollToTop />
          <AppRoutes />
        </Router>
      </AdminAuthProvider>
    </ThemeProvider>
  );
}

export default App;

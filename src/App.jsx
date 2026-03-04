


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



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* 1. Navbar is placed at the absolute root to prevent ANY parent flex/overflow conflicts */}
      <Navbar />
      
      {/* 2. Global theme updated to bg-black text-white to match our cinematic design perfectly */}
      <div className="flex flex-col min-h-screen bg-black text-white font-sans">
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

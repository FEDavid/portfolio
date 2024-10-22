// App.js
// Main imports
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/home.js';
import Blog from './pages/blog.js';
import Sitemap from './pages/sitemap.js';

// Import components
import ScrollToTop from './ScrollToTop.js';
import Navbar from './components/navbarComponent.js';
import Footer from './components/footerComponent.js';
import PostDetail from './components/PostDetailComponent.js';

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-full">
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts/:filename" element={<PostDetail />} /> {/* Route for post detail */}
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

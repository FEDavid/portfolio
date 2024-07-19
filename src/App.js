// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Blog from './pages/blog.js';
import ScrollToTop from './ScrollToTop.js';
import Navbar from './components/navbarComponent.js';
import Footer from './components/footerComponent.js';
import PostDetail from './components/PostDetailComponent.js';

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-full overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts/:filename" element={<PostDetail />} /> {/* Route for post detail */}
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

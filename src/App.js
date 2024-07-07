// Other imports
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js';
import Blog from './pages/blog.js';

// Components
import Navbar from './components/navbarComponent.js';
import Footer from './components/footerComponent.js';
import PostDetail from './components/PostDetailComponent.js';

function App() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:filename" element={<PostDetail />} /> {/* Route for post detail */}
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

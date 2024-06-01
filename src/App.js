// Other imports
import './App.css';

// Importing the components
import PortfolioComponent from './components/portfolioComponent'; // Importing the PortfolioComponent component
import PostComponent from './components/postComponent'; // Importing the PostComponent component
import NavbarComponent from './components/navbarComponent'; // Importing the NavbarComponent component
import FooterComponent from './components/footerComponent'; // Importing the FooterComponent component

function App() {
  return (
    <div className="App w-full h-screen grid grid-rows-[auto,8fr,1fr,auto]">
      <NavbarComponent /> {/* Using the NavbarComponent component */}
      <PortfolioComponent /> {/* Using the PortfolioComponent component */}
      <FooterComponent /> {/* Using the FooterComponent component */}
    </div>
  );
}

export default App;

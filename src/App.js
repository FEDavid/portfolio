// Other imports
import './App.css';

// Importing the components
import MainComponent from './components/mainComponent'; // Importing the PortfolioComponent component
import NavbarComponent from './components/navbarComponent'; // Importing the NavbarComponent component
import FooterComponent from './components/footerComponent'; // Importing the FooterComponent component

function App() {
  return (
    <div className="App w-full h-screen grid grid-rows-[auto,8fr,1fr,auto]">
      <NavbarComponent /> {/* Using the NavbarComponent component */}
      <MainComponent /> {/* Using the MainComponent component */}
      <FooterComponent /> {/* Using the FooterComponent component */}
    </div>
  );
}

export default App;

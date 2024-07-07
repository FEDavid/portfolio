import React from 'react';

// Importing the components
import MainComponent from '../components/mainComponent'; // Importing the PortfolioComponent component

function Home() {
    return (
        <div className="App w-full grid grid-rows-[auto,8fr,1fr,auto]">
            <MainComponent /> {/* Using the MainComponent component */}
        </div>
    );
}

export default Home;



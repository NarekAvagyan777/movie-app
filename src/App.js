import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import { MainFeatured } from "./components";
import featuredCoverImage from "./assets/FeaturedCoverImage.png";
import featuredTitleImage from "./assets/FeaturedTitleImage.png";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Sort the data and set the state
    setSortedData(
      [...data.TendingNow].sort((a, b) => new Date(b.Date) - new Date(a.Date))
    );
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <>
      <div className="container">
        <MainFeatured
          data={sortedData}
          featured={data.Featured}
          coverImage={featuredCoverImage}
          titleImage={featuredTitleImage}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </>
  );
}

export default App;

import ImageSlider from "../ImageSlider/ImageSlider";
import "./Trending.scss";

export default function Trending({data, setSelectedMovie, selectedMovie}) {
    console.log('dataaaa', data)
  return (
    <div className="trending-container">
       <ImageSlider setSelectedMovie={setSelectedMovie} images={data} />
    </div>
  );
}

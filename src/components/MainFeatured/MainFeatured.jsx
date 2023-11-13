import { useState } from "react";
import { convertSeconds } from "../../utils/convertSeconds";
import Navbar from "../Navbar/Navbar";
import Trending from "../Trending/Trending";
import "./MainFeatured.scss";

export default function MainFeatured({
  coverImage,
  titleImage,
  featured,
  data,
  selectedMovie,
  setSelectedMovie,
}) {
  console.log("selectedMovie", selectedMovie);
  console.log('datasasasasasasa', data);
  return (
    <div className="mainfeatured-container">
      <div className="mainfeatured-container__content">
        <div className="mainfeatured-container__content__absolute">
          <img src={coverImage} alt="" />
        </div>

        <div className="mainfeatured-container__content__about">
          {selectedMovie ? (
            <>
              <p className="mainfeatured-container__content__about__category">
                {selectedMovie.Category}
              </p>
              <img
                src={titleImage}
                className="mainfeatured-container__content__about__title-image"
              />
              <div className="mainfeatured-container__content__about__release-mpa-duration">
                <span>{selectedMovie.ReleaseYear}</span>
                <span>{selectedMovie.MpaRating}</span>
                <span>{convertSeconds(selectedMovie.Duration)}</span>
              </div>
              <p className="mainfeatured-container__content__about__description">
                {selectedMovie.Description}
              </p>
            </>
          ) : (
            <>
              <p className="mainfeatured-container__content__about__category">
                {featured.Category}
              </p>
              <img
                src={titleImage}
                className="mainfeatured-container__content__about__title-image"
              />
              <div className="mainfeatured-container__content__about__release-mpa-duration">
                <span>{featured.ReleaseYear}</span>
                <span>{featured.MpaRating}</span>
                <span>{convertSeconds(featured.Duration)}</span>
              </div>
              <p className="mainfeatured-container__content__about__description">
                {featured.Description}
              </p>
            </>
          )}
          <div className="mainfeatured-container__content__about__btns">
            <button>Play</button>
            <button>More Info</button>
          </div>
        </div>
      </div>
      <Trending
        data={data}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
      />
      <Navbar />
    </div>
  );
}
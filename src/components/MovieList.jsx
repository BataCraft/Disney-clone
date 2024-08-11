import React, { useState, useEffect } from 'react';
import { getMovieByGenreId } from '../components/Services/GlobalAPI';
import MovieCard from './MovieCard';
import Flickity from 'react-flickity-component';

const MovieList = ({ genereId }) => {
  const [movieLists, setMovieLists] = useState([]); 

  const getMovies = () => {
    getMovieByGenreId(genereId)
      .then(res => {
        setMovieLists(res.data.results); 
      })
      .catch(error => {
        console.error("Error fetching movies by genre:", error);
      });
  };

  useEffect(() => {
    if (genereId) {
      getMovies(); 
    }
  }, [genereId]);

  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true, 
    // autoPlay: 3000,
    // pauseAutoPlayOnHover: true,
    // pageDots: false,
  };

  return (
    <div className='pt-2 md:pt-4'>
      <Flickity
        className={'carousel overflow-x-auto scrollbar-none cursor-pointer '}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded
        reloadOnUpdate
        static
      >
        {movieLists.map((item) => (
         <div className='carousel-cell mx-2 md:mx-4 '> <MovieCard key={item.id} movie={item}  /></div>
        ))}
      </Flickity>
    </div>
  );
};

export default MovieList;

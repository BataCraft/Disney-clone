import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from './Services/GlobalAPI';
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Flickity from 'react-flickity-component'

const Slider = () => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const Flickity = require('react-flickity-component');


  const [movieList, setMovieList] = useState([]);


  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      //   console.log(data.results);  
      const limitedMovies = data.results.slice(0, 5); // Limit to 5 movies
    setMovieList(limitedMovies);
      // setMovieList(data.results)
    } catch (error) {
      console.error("Error in fetching trending movies:", error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const flickityOptions = {
    initialIndex: 1,
    autoPlay: 3000,
    wrapAround: true, // Enables infinite looping
    pauseAutoPlayOnHover: true

  }


  return (
    <>

      {/* <HiChevronLeft className='hidden md:block text-white absolute text-[30px] mt-[200px] cursor-pointer'/>
    <HiChevronRight  className='hidden md:block text-white absolute text-[30px] mt-[200px] right-0 cursor-pointer'/>

    
          <div className='flex flex-row w-full overflow-x-auto py-2 px-4 md:px-8 lg:px-10 scrollbar-none'>


     */}


      <div className='w-full py-4 md:px-8 lg:px-10'>
        <Flickity
          className={'carousel overflow-x-auto scrollbar-none cursor-pointer '}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded
          reloadOnUpdate
          static
        >
          {movieList.map((item, key) => {
            return (

              <img src={imgPath + item.backdrop_path} alt="" className='min-w-full md:h-[500px] object-left-top object-cover rounded-lg focus:outline-none' />


            )
          })}
        </Flickity>
      </div>

      {/* </div> */}


    </>
  );
};

export default Slider;

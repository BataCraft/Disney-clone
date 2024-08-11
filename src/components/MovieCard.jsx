import React from 'react'

const MovieCard = ({movie}) => {
    const imgPath = "https://image.tmdb.org/t/p/original";
  return (
  <>
  
  <img src={imgPath + movie.poster_path} alt="" className='w-[110px] md:w-[200px] rounded-md hover:border-[4px] border-gray-500
  hover:scale-110 transition-all duration-300 ease-in-out'/>
  
  
  </>
  )
}

export default MovieCard
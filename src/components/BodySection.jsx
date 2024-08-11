import genere from '../components/Constant/GenereList';
import MovieList from './MovieList';

const BodySection = () => {
  return (
    <>
      {genere.map((item, index) =>  {
        return index < 5 &&(
         <div className='py-8 px-2 md:px-8 lg:px-10'>
              <h2 className='text-2xl font-bold text-white' key={item.id}>
                {item.name}
              </h2>

              <MovieList genereId={item.id}/>
         </div>
        );
      })}
    </>
  );
};

export default BodySection;

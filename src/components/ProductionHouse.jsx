import Disney from '../assets/images/viewers-disney.png'
import Marvel from '../assets/images/viewers-marvel.png'
import Nationalgeo from '../assets/images/viewers-national.png'
import Pixar from '../assets/images/viewers-pixar.png'
import Starwar from '../assets/images/viewers-starwars.png'
import Disneyvid from '../assets/videos/disney.mp4'
import Marvelv from '../assets/videos/marvel.mp4'
import Pixarv from '../assets/videos/pixar.mp4'
import NationalV from '../assets/videos/nationgeo.mp4'
import Starwarv from '../assets/videos/starwar.mp4'


const ProductionHouse = () => {
    const ProductionHouseList = [
        {
            id: 1,
            image: Disney,
            video: Disneyvid
        },
        {
            id: 2,
            image: Marvel,
            video: Marvelv
        },
        {
            id: 3,
            image: Nationalgeo,
            video: Pixarv
        },
        {
            id: 4,
            image: Pixar,
            video: NationalV
        },
        {
            id: 5,
            image: Starwar,
            video: Starwarv
        }
    ]
    return (
        <div className='flex gap-2 md:gap-5 px-2 md:px-6 lg:px-10'>

            {ProductionHouseList.map((items) => {
                return (
                    <div className='border-[2px] border-gray-600 rounded-md hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center relative shadow-xl shadow-gray-800'>
                        <video src={items.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md  z-0  opacity-0 hover:opacity-50 w-full' />
                        
                         <img src={items.image} alt="" srcset="" className='w-full ' />

                    </div>
                )
            })}

        </div>
    )
}

export default ProductionHouse
import "../index.css"
import "../components/Style/Style.css"
import Navbar from '../components/Navbar'


const Login = () => {

  return (
    <>
      <Navbar />
      <div className="w-full h-3 flex items-center justify-center flex-col px-2 md:px-[5rem] " id="warpper">

        <div id="container" className="w-full lg:w-[50rem]  flex items-center justify-center p-10 flex-col bg-red-" >
          <div className="" id="brand"></div>
          <div className="py-4 px-16 lg:px-20 bg-blue-600 md:mt-2 lg:mt-4 border-none rounded-md hover:bg-blue-500 cursor-pointer w-full text-center " id="signup">
            <h5 className="font-bold text-[10px] tracking-[0.1em] lg:text-xl sm:text-[16px]">GET ALL THERE</h5>
          </div>
            <p className="w-full text-center pt-6 text-yellow-50 tracking-[0.1em]">Get Premier Access to Raya and the Last Dragon for
              an additional fee with a Disney+ subscription. As of
              03/26/21, the price of Disney+ and The Disney Bundle
              will increase by $1.</p>

              <div className="mt-6" id="brand-second"></div>
        </div>



      </div>
    </>
  )
}



export default Login
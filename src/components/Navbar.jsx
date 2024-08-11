import Logo from '../assets/images/logo.svg'
import {HiHome,  HiSearch, HiStar, HiPlus, HiDotsVertical    } from "react-icons/hi";
import { HiPlayCircle, HiTv  } from "react-icons/hi2";
import NavItem from './NavItem';
import { useState } from 'react';

const Navbar = () => {
  const menu =[
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiSearch
    },
    {
      name: 'WATCHLIST',
      icon: HiPlus
    },
    {
      name: 'ORGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },

    {
      name: 'SERIES',
      icon: HiTv
    }


  ]
  const[toogle, setToogle] = useState(false);
  return (
    <>
    
    <div className='flex items-center justify-between px-2 md:px-10 py-4'>
     <div className='flex items-center gap-9'>
        
          <img src={Logo} alt='' className='w-[70px] object-cover md:w-[90px]' />
  
         <div className='hidden lg:flex gap-8'> {menu.map((item)=>(<NavItem name={item.name} Icon={item.icon}/>))}</div>

         <div className='flex lg:hidden gap-4 md:gap-8'> {menu.map((item, index)=> index<3 &&(<NavItem name={''} Icon={item.icon}/>))}


         <div onClick={()=>setToogle(!toogle)}>
          <NavItem name={''} Icon={HiDotsVertical}/>

          {
            toogle ?
            <div className='flex lg:hidden gap-2 mt-2 flex-col absolute font-normal text-[10px]'> {menu.map((item, index)=> index>=3 &&(<NavItem name={item.name} Icon={item.icon}/>))} </div> : null
          }
          

          </div>
         
         </div>
     </div>

     <div>
      <img src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='rounded-full size-[20px] md:size-[50px]  object-center'/>
     </div>
    </div>
    
    
    </>
  )
}

export default Navbar
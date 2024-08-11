import React from 'react'

const NavItem = ({name, Icon}) => {
  return (
   <div className='flex items-center gap-1 lg:gap-3 cursor-pointer font-semibold hover:underline underline-offset-8 '>
   <Icon/>
   <h2 className=''>{name}</h2>
   
   
   </div>
  )
}

export default NavItem
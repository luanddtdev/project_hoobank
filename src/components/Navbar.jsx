import React, { useState } from 'react'
import { styles } from '../sass'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`${styles.paddingX} py-6`}>
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        <img 
          src={logo}
          alt='hoobank'
          className='w-[124px] h-8 object-contain'
        />

        <ul className='md:flex hidden gap-14'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a 
                href={`#${nav.id}`}
                className={`font-normal text-[16px] leading-[20.8px] ${nav.title === active ? 'text-white' : 'text-dimWhite'} capitalize`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex'>
          <img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-7 h-7 object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient p-6 absolute top-20 right-6 rounded-xl min-w-[140px] sidebar`}>
            <ul className='flex flex-col flex-1 items-center gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a 
                    href={`#${nav.id}`}
                    className={`font-normal text-[16px] leading-[20.8px] ${nav.title === active ? 'text-white' : 'text-dimWhite'} capitalize`}
                    onClick={() => setActive(nav.title)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
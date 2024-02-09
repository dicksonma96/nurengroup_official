"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '../../assets/img/logo.png'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import './style.scss'
import { motion, AnimatePresence } from "framer-motion";


function Header() {
  const [isOpen,setIsOpen] = useState(false);
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(()=>{
    setIsOpen(false);
  },[pathname, searchParams])

  return (
    <>
        <header className='navbar rowc'>
            <Image className='logo' src={Logo} alt='Nuren group' />

            <div className={`navbtn col ${isOpen ? 'active':''}`} onClick={()=>setIsOpen(prevState=>!prevState)}>
                <span></span>
                <span></span>
                <span></span>
            </div>            
        </header>
        <AnimatePresence>
        {           
          isOpen && <Menu />
        }
        </AnimatePresence>
    </>
  )
}

function Menu(){

  const menu = [
    {
      label:"About",
      path:"/about",
      subMenu:[
        {
          label:"Snapshot of Nuren Group",
          path:"/"
        },
        {
          label:"Founder and Chairman",
          path:"/"
        },
        {
          label:"Board of Directors",
          path:"/board-of-directors"
        }, 
      ]
    },
    {
      label:"Brands",
      path:"/",      
    },
    {
      label:"Investors",
      path:"/"
    },
    {
      label:"Media Hub",
      path:"/"
    },
    {
      label:"Jobs",
      path:"/"
    },
    {
      label:"Enquire",
      path:"/"
    }
  ]

 return <motion.div 
 className='popup_menu' 
 initial={{ opacity: 0, scale:1.1 }} 
 animate={{ opacity: 100, scale:1 }}   
 exit={{ opacity: 0, scale: 1.1 }}>
    <nav className='col'>
       {
        menu.map((item,index)=>{
          return (
            <div key={index} className="nav_item col">
          <Link href={item.path} className='mainlink row'>{item.label}</Link>
          <div className="sublinks">
            <div className="sublinks_content col">
              {
                item.subMenu?.map((sub,index)=><Link key={index} href={item.path + sub.path} >{sub.label}</Link>)
              }
            </div>           
          </div>
        </div>
          )
        })
       }      
    </nav>
 </motion.div>
}

export default Header
import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import HomeIcon from "@mui/icons-material/Home"
import CodeIcon from "@mui/icons-material/Code"
import GridViewIcon from "@mui/icons-material/GridView"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Header = ({value, onChange}) => {
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  let scrollTop = 0

  // For Mobile view Header
  useEffect(()=>{
    const handleScroll = () =>{
      const currentScrollTop = window.scrollY

      if(currentScrollTop > scrollTop){
        setIsNavVisible(false)
      }
      else{
        setIsNavVisible(true)
      }
      clearTimeout(window.hideNavTimmeout)
      window.hideNavTimmeout = setTimeout(()=>{
        setIsNavVisible(true)
      }, 100)
    }

    window.addEventListener('scroll', handleScroll)

    return()=>{
      window.addEventListener('remove', handleScroll)
    }
  },[])

  
  return (
    <div>
      <div className=" hidden md:block lg:block xl:block 2xl:block">
        {/* <ul className='flex gap-16 my-4'>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
            </ul> */}
        <div className={`flex justify-center items-center border border-gray-300 my-5 h-16 rounded-full transition-all duration-100 ease-in ${
          isScrolled
            ? " fixed top-0 w-full bg-black shadow-2xl rounded-full border border-gray-300 my-0"
            : "bg-transparent"
        }`}>
        <Box sx={{ width: 400, color: "white"}} className='sticky top-0'>
          <BottomNavigation
            showLabels
            sx={{ backgroundColor: 'black'}}
          >
            <BottomNavigationAction
              label="About"   
              value="home"
              sx={{ color: "#ffff" }}
              href="#home"
              
            />
            <BottomNavigationAction
              label="Skills"
              value='skill'
              sx={{ color: "#ffff" }}
              className="text-xl"
              href='#skill'
            />
            <BottomNavigationAction
              label="Projects"
              sx={{ color: "#ffff" }}
              value='projects'
              href='#projects'
            />
            <BottomNavigationAction
              label="Contact Me"
              sx={{ color: "#ffff" }}
              value='education'
              href='#contact'
            />
          </BottomNavigation>
        </Box>
        </div>
        
        
      </div>

      {/* <div className='fixed bottom-0 w-full lg:hidden '> 
          <ul className='flex justify-evenly space-x-32 bg-chose-30  h-10 p-2'>
            <li className='' >
              <IoMdHome className='h-6 w-6'/>
            </li>
              <li className=''>
                <FaCode className='h-6 w-6'/>
              </li>
              <li className='pt-1'>
                <GrProjects className='h-4 w-4'/>
              </li>
          </ul>
        </div> */}
      
  {/* Mobile view Navigation */}


  

      <div className={`fixed bottom-0 w-full lg:hidden text-white transition-transform transform ${isNavVisible ? 'block' : 'hidden'}`} id="bottomNav">
        <Box sx={{ color: "white"}}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={onChange}
            sx={{ backgroundColor: "#000000" }}
          >
          
            <BottomNavigationAction
              label="Home"
              value="home"
              icon={<HomeIcon />}
              sx={{ backgroundColor: "#000000", color: "#ffff" }}
              href="#home"
            />
            <BottomNavigationAction
              label="Projects"
              value='projects'
              icon={<GridViewIcon />}
              sx={{ backgroundColor: "#000000", color: "#ffff" }}
              href="#projects"
            />
            <BottomNavigationAction
              label="Contact"
              value="contact"
              icon={<AlternateEmailIcon/>}
              sx={{ backgroundColor: "#000000", color: "#ffff" }}
              href='#contact'
            />   
          </BottomNavigation>
        </Box>
        
        
      </div>
    </div>
  )
}

export default Header;

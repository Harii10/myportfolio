import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Header = ({value, onChange}) => {

  const [isNavVisible, setIsNavVisible] = useState(true)
  let scrollTop = 0



  useEffect(()=>{
    const handleScroll = () =>{
      const currentScrollTop = window.scrollY

      if(currentScrollTop > scrollTop){
        setIsNavVisible(false)
      }
      else{
        setIsNavVisible(true)
      }

      lastScrollTop = currentScrollTop
      
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
      <div className=" hidden md:block lg:flex justify-center items-center sticky top-0 border my-5 h-16 rounded-full">
        {/* <ul className='flex gap-16 my-4'>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
            </ul> */}
        <Box sx={{ width: 400, color: "white"}} className='sticky top-0'>
          <BottomNavigation
            showLabels
            sx={{ backgroundColor: '#1E242B'}}
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
              label="Education"
              sx={{ color: "#ffff" }}
              value='education'
              href='#education'
            />
          </BottomNavigation>
        </Box>
        
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
        <Box sx={{ color: "white" }}>
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

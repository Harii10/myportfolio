import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import HomeIcon from "@mui/icons-material/Home"
import CodeIcon from "@mui/icons-material/Code"
import GridViewIcon from "@mui/icons-material/GridView"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Header = ({value, onChange}) => {
  
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolling down, show when scrolling up or stopped
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // Hide nav on scroll down
      } else {
        setShowNav(true); // Show nav when scroll stops
      }
      lastScrollY = window.scrollY;
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div>
      <div className=" hidden md:block lg:block xl:block 2xl:block">
        <div className={`flex justify-center items-center fixed inset-x-0 top-0 w-full text-white h-16 bg-black shadow-lg z-[100] transition-transform duration-300 p-5 border border-gray-500 rounded-full`}>
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


  

  <div
      className={`fixed inset-x-0 bottom-0 w-full text-white h-11 bg-black shadow-lg z-[100] transition-transform duration-300 lg:hidden ${
        showNav ? "translate-y-0" : "translate-y-full"
      }`}
    >
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

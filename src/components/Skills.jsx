import React from 'react'
import { FaHtml5, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
// import { SiBootstrap } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
function Skills() {
  // const skillsets = [
  //   {
  //     id: '1',
  //     icon: <FaHtml5/>,
  //     name: 'HTML'
  //   },
  //   {
  //     id: '2',
  //     icon: <IoLogoCss3/>,
  //     name: 'CSS'
  //   },
  //   {
  //     id: '3',
  //     icon: <IoLogoJavascript/>,
  //     name: 'JavaScript'
  //   },
  //   {
  //     id: '4',
  //     icon: <TbBrandReact/>,
  //     name: 'Raact'
  //   },
  //   {
  //     id: '5',
  //     icon: <SiTailwindcss/>,
  //     name: 'Tailwindcss'
  //   },
  //   {
  //     id: '6',
  //     icon: <FaPython/>,
  //     name: 'Python'
  //   },
  //   {
  //     id: '7',
  //     icon: <BiLogoDjango/>,
  //     name: 'Django'
  //   },
  //   {
  //     id: '8',
  //     icon: <BiLogoDjango/>,
  //     name: 'Django'
  //   },
  //   {
  //     id: '9',
  //     icon: <GrMysql/>,
  //     name: 'MySQL'
  //   }
    
  // ]
  return (
    <div>
        <div className="mt-6 -ml-2 p-4 w-96  border border-chose-10 rounded-sm shadow-black shadow-2xl sm:w-full md:w-full md:m-2 lg:w-full lg:p-16">
              <ul className="grid grid-rows-2 grid-flow-col gap-1 -ml-5 md:gap-3 lg:gap-0">
              {/* {skillsets.map((skill)=>{ */}
              <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <FaHtml5 className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                
              {/* })} */}
                
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <SiTailwindcss className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 rounded-lg lg:gap-5 md:gap-3 lg:text-2xl">
                  <span>
                    <IoLogoCss3 className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <FaPython className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 rounded-lg lg:gap-5 md:gap-3 lg:text-2xl">
                  <span>
                    <IoLogoJavascript className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <GrMysql className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-2 rounded-lg md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <TbBrandReact className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-2 rounded-lg md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <BiLogoDjango className="lg:w-7 h-7" />
                  </span>
                  <p></p>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Skills
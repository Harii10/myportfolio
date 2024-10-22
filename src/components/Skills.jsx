import React from "react";
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
      <div className="relative flex h-full transform items-end border border-chose-10 bg-transparent p-2">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <ul className="grid grid-rows-2 grid-flow-col gap-x-7 -ml-5 md:gap-x-28 lg:gap-x-28 xl:gap-x-44 2xl:gap-x-14">
            {/* {skillsets.map((skill)=>{ */}
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 w-12 md:w-20 lg:gap-2 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <FaHtml5 className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">HTML</p>
            </li>

            {/* })} */}

            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 w-12 md:w-20 lg:gap-2 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <SiTailwindcss className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">Tailwind</p>
            </li>
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 rounded-lg lg:gap-5 w-12 md:w-20 lg:text-2xl lg:w-32 xl:w-44 2xl:w-72">
              <span>
                <IoLogoCss3 className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">CSS</p>
            </li>
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 w-12 md:w-20 lg:gap-5 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <FaPython className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">Python</p>
            </li>
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 rounded-lg lg:gap-5 w-12 md:w-20 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <IoLogoJavascript className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">JS</p>
            </li>
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 w-12 md:w-20 lg:gap-5 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <GrMysql className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">SQL</p>
            </li>
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-2 rounded-lg w-12  md:w-20 lg:gap-5 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <TbBrandReact className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">React</p>
            </li>
            <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-2 rounded-lg w-12 md:w-20 lg:gap-5 lg:w-32 lg:text-2xl xl:w-44 2xl:w-72">
              <span>
                <BiLogoDjango className="lg:w-7 h-7" />
              </span>
              <p className="hidden lg:block xl:block 2xl:block">Django</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

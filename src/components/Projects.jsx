import React from 'react'

function Projects({img, tech1, tech2, tech3, heading, about, link}) {
  return (
    <div>
        <a href={link}>
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-1000 lg:hover:shadow-black lg:hover:shadow-2xl lg:hover:border-chose-10 xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-1000 xl:hover:border-chose-10 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-1000 sm:m-3 2xl:hover:border-chose-10 md:m-3">
                <img src={img}/>
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">{tech1}</li>
                  <li className="text-chose-10 p-1 px-3">{tech2}</li>
                  <li className="text-chose-10 p-1 px-3">{tech3}</li>
                </ul>
                <h4 className="my-2 font-semibold">{heading}</h4>
                <p className="text-chose-50 ">
                  {about}
                </p>
              </div>
            </a>
    </div>
  )
}

export default Projects
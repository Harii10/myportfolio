import React from "react";
import { useState, useEffect, useRef } from "react";
import ScrollTop from "./ScroolTop"
import { forwardRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiBootstrap } from "react-icons/si";
import Snackbar from "@mui/material/Snackbar";

const main = forwardRef(({ onRef }) => {
  const [erAlert, setErAlert] = useState(false);
  const [sucess, setSucess] = useState(false);

  const formP = (e) => {
    e.preventDefault();
  };

  function Erroralerts() {
    setErAlert(true);
    setTimeout(() => setErAlert(false), 5000);
  }

  function successalert() {
    setSucess(true);
    setTimeout(() => setSucess(false), 5000);
  }

  const formValidation = (e) => {
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const subject = document.getElementById("subject");
    const textarea = document.getElementById("textarea");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (email.value === "" || name.value === "" || subject.value === "") {
      Erroralerts();
    }
    if (!emailRegex.test(email.value)) {
      Erroralerts();
    }
    if (textarea.value === "") {
      Erroralerts();
    } else {
      successalert();
    }
    email.value = "";
    name.value = "";
    subject.value = "";
    textarea.value = "";
  };
  return (
    <div>
    <div>
        <ScrollTop/>
      </div>
      <section id="home" className="section">
        <div className="flex flex-col-reverse mt-8 lg:flex lg:flex-row justify-between lg:mt-28 ">
          <div className="p-7 lg:text-2xl lg:pl-24">
            <h3 className="font-bold tracking-wider text-3xl">Hi, I am</h3>
            <h1 className="font-extrabold tracking-wider text-2xl lg:text-4xl">
              Hariharachandru V
            </h1>
            <p className="font-thin tracking-tighter leading-relaxed mt-5 text-chose-50 lg:mt-8">
              A skilled Front End Developer with a passion for crafting visually
              stunning and highly responsive user interfaces, passionate about
              staying updated on frontend tech. I am actively seeking new
              opportunities to apply my technical expertise and creativity to
              contribute creativity and bring innovative ideas to life.
            </p>
          </div>

          <div className="flex justify-center items-center w-lvw">
            <img
              src="images/hari.png"
              className="h-52 w-52 ml-11 border-chose-10 border-4 lg:h-80 lg:w-80 mr-14 rounded-full bg-chose-60"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center lg:flex lg:justify-start p-3 lg:p-10 lg:pl-24 lg:-mt-9">
        <button className="bg-chose-10 text-chose-20 rounded-lg font-bold text-xl p-3 lg:hover:bg-chose-20 hover:border border-chose-10 lg:hover:text-white xl:hover:bg-chose-20 xl:hover:border xl:border-chose-10 xl:hover:text-white 2xl:hover:bg-chose-20 2xl:hover:border 2xl:border-chose-10 2xl:hover:text-white">
          Check Resume
        </button>
      </div>

      <section className="section" id="skill">
        <div className=" section mt-24 lg:mt-32 lg:p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold tracking-wider text-4xl">Skills</h1>
            <p className="font-light m-3 mt-5 text-chose-50 lg:text-xl">
              Here are some of my skills which I have Learnt
            </p>
          </div>
          <div>
            <div className="ml-1 w-full border border-chose-10 rounded-sm shadow-black shadow-2xl sm:w-full md:w-full md:m-2 lg:w-full m-6 lg:p-16">
              <ul className="grid grid-rows-2 grid-flow-col gap-1 p-3 md:gap-3 lg:gap-0">
                <li className="flex justify-center items-center gap-1 border border-gray-500 my-3 rounded-lg md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <FaHtml5 className="lg:w-7 h-7" />
                  </span>
                  <p>HTML</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <SiTailwindcss className="lg:w-7 h-7" />
                  </span>
                  <p>Tailwind</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 rounded-lg lg:gap-5 md:gap-3 lg:text-2xl">
                  <span>
                    <IoLogoCss3 className="lg:w-7 h-7" />
                  </span>
                  <p>CSS</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <SiTailwindcss className="lg:w-7 h-7" />
                  </span>
                  <p>Python</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 rounded-lg lg:gap-5 md:gap-3 lg:text-2xl">
                  <span>
                    <IoLogoJavascript className="lg:w-7 h-7" />
                  </span>
                  <p>JS</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-1 rounded-lg ml-2 md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <GrMysql className="lg:w-7 h-7" />
                  </span>
                  <p>SQL</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-2 rounded-lg md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <TbBrandReact className="lg:w-7 h-7" />
                  </span>
                  <p>React</p>
                </li>
                <li className="flex justify-center items-center gap-1 border border-gray-500 mx-1 my-3 p-2 rounded-lg md:gap-3 lg:gap-5 lg:text-2xl">
                  <span>
                    <SiBootstrap className="lg:w-7 h-7" />
                  </span>
                  <p>Strap</p>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="section">
        <div className="mt-24 lg:mt-32 lg:p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold tracking-wider text-4xl">Projects</h1>
            <p className="flex font-light m-3 mt-5 text-chose-50 lg:text-xl">
              <span className="hidden md:block lg:block xl:block 2xl:block">
                I Worked on a wide range of projects,
              </span>{" "}
              Here are some of my projects.
            </p>
          </div>
          <div className="mt-5 sm:grid grid-rows-3 grid-flow-col w-full p-0 md:gap-5">
            <a href="https://harii10.github.io/landing-page/">
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-700 lg:hover:shadow-black lg:hover:shadow-2xl xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-700 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-700 sm:m-3 md:m-3">
                <img src="images/landing.png" className="" />
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">HTML</li>
                  <li className="text-chose-10 p-1 px-3">CSS</li>
                </ul>
                <h4 className="my-2 font-semibold">Music Intruments</h4>
                <p className="text-chose-50">
                  This is a responsive instrument landing page. I created as a
                  beginner front end developer.
                </p>
              </div>
            </a>

            <a href="https://chandru070.github.io/task-3/">
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-700 lg:hover:shadow-black lg:hover:shadow-2xl xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-700 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-700 sm:m-3 md:m-3">
                <img src="images/task.png" className="" />
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">HTML</li>
                  <li className="text-chose-10 p-1 px-3">CSS</li>
                  <li className="text-chose-10 p-1 px-3">JavaScript</li>
                </ul>
                <h4 className="my-2 font-semibold">To DO List</h4>
                <p className="text-chose-50">
                  This is a responsive instrument landing page. I created as a
                  beginner front end developer.
                </p>
              </div>
            </a>

            <a href="https://hberlin07.github.io/Text-Speaker/">
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-700 lg:hover:shadow-black lg:hover:shadow-2xl xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-700 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-700 sm:m-3 md:m-3">
                <img src="images/text-speaker.png" className="" />
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">HTML</li>
                  <li className="text-chose-10 p-1 px-3">CSS</li>
                </ul>
                <h4 className="my-2 font-semibold">Text Speaker</h4>
                <p className="text-chose-50">
                  This is a responsive instrument landing page. I created as a
                  beginner front end developer.
                </p>
              </div>
            </a>

            <a href="https://harii10.github.io/weather-app/">
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-700 lg:hover:shadow-black lg:hover:shadow-2xl xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-700 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-700 sm:m-3 md:m-3">
                <img src="images/weather-i.png" className="" />
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">React</li>
                  <li className="text-chose-10 p-1 px-3">Tailwindcss</li>
                  <li className="text-chose-10 p-1 px-3">API</li>
                  {/* <li className='border p-1 px-3'>Material UI</li> */}
                </ul>
                <h4 className="my-2 font-semibold">Weather Application</h4>
                <p className="text-chose-50">
                  This is a responsive Weather Application is a modern,
                  responsive web app designed to provide users with up-to-date
                  weather information.
                </p>
              </div>
            </a>

            <a href="https://chandru070.github.io/task-2/">
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-700 lg:hover:shadow-black lg:hover:shadow-2xl xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-700 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-700 sm:m-3 md:m-3">
                <img src="images/head.png" className="" />
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">React</li>
                  <li className="text-chose-10 p-1 px-3">Tailwindcss</li>
                  <li className="text-chose-10 p-1 px-3">API</li>
                  {/* <li className='border p-1 px-3'>Material UI</li> */}
                </ul>
                <h4 className="my-2 font-semibold">Headphones</h4>
                <p className="text-chose-50">
                  This is a responsive Weather Application is a modern,
                  responsive web app designed to provide users with up-to-date
                  weather information.
                </p>
              </div>
            </a>

            <a href="https://denay.netlify.app/">
              <div className="w-fit p-5 border border-gray-700 m-5 rounded-xl bg-chose-30 lg:hover:scale-105 duration-700 lg:hover:shadow-black lg:hover:shadow-2xl xl:hover:shadow-black xl:hover:shadow-2xl xl:hover:scale-105 xl:duration-700 2xl:hover:shadow-black 2xl:hover:shadow-2xl 2xl:hover:scale-105 2xl:duration-700 sm:m-3 md:m-3">
                <img src="images/weather-2.png" className="" />
                <ul className="flex gap-5 my-3">
                  <li className="text-chose-10 p-1 px-3">React</li>
                  <li className="text-chose-10 p-1 px-3">Tailwindcss</li>
                  <li className="text-chose-10 p-1 px-3">API</li>
                </ul>
                <h4 className="my-2 font-semibold">Weather </h4>
                <p className="text-chose-50">
                  This is a responsive instrument landing page. I created as a
                  beginner front end developer.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* <section id="education" className="mt-24 lg:mt-32 lg:p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold tracking-wider text-4xl">Education</h1>
          <p className="flex font-light text-chose-50 m-8 mt-8 lg:text-xl">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows
          </p>
        </div>
        <div class="mx-auto p-3">
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-3 rounded-lg border border-chose-10 sm:w-full">
            <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              <ul className="my-1">
                <li className="font-extrabold text-lg">
                  SKR Engineering College
                </li>
                <li className="text-xs text-chose-50">
                  BTech - Information Technology
                </li>
                <li className="text-xs text-chose-50">2018- 2022</li>
                <li className="text-xs text-chose-50 mt-2">
                  <span className="font-semibold">Grade</span> : 7.46 CGPA
                </li>
              </ul>
            </summary>
            <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                As an IT graduate, I possess strong problem-solving and
                precision skills. My academic journey has equipped me with a
                diverse skill set in programming. My college experience has
                equipped me to bridge the worlds of engineering and IT, applying
                efficiency and innovation to both realms, making me a versatile
                professional.
              </p>
            </div>
          </details>
        </div>

        <div class="mx-auto p-3">
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-3 rounded-lg border border-chose-10 sm:w-full">
            <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              <ul className="my-1">
                <li className=" font-extrabold text-lg">
                  Jaya Matric Higher Secondary School
                </li>
                <li className=" text-xs text-chose-50">
                  HSC - XII(std) (Computer Science)
                </li>
                <li className=" text-xs text-chose-50">2016 - 2017</li>
                <li className=" text-xs text-chose-50 mt-1">
                  <span className="font-semibold">Grade</span> :60%
                </li>
              </ul>
            </summary>
            <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p className="text-sm">
                I've embraced a dynamic academic journey. Through my dedication
                and adaptability, I've knowledge and practical skills in
                computing, preparing me for future challenges and opportunities.
              </p>
            </div>
          </details>
        </div>

        <div class="mx-auto p-3">
          <details class="open:bg-white dark:open:bg-slate-900 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-3 rounded-lg border border-chose-10 sm:w-full">
            <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              <ul className="my-1">
                <li className="font-extrabold text-lg">
                  Jaigopal Garodia Vivekananda Vidyalaya (CBSE)
                </li>
                <li className="text-xs text-chose-50">SSLC - Xth(std)</li>
                <li className="text-xs text-chose-50">2014 - 2015</li>
                <li className="text-xs text-chose-50 mt-2">
                  <span className="font-semibold">Grade</span> 68%
                </li>
              </ul>
            </summary>
            <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
            </div>
          </details>
        </div>
      </section> */}
      <section className="mt-20 lg:mt-32 lg:p-10" id="contact">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold tracking-wider text-4xl">Contact Me</h1>
        </div>
        <div className="m-5 p-7 bg-chose-20 shadow-black shadow-2xl  rounded-md sm:m-11 md:mx-36 mt-8 2xl:mx-72 2xl:p-9">
          <h3 className="font-medium text-lg">Email Me</h3>
          <form onSubmit={formP}>
            <div>
              {erAlert && (
                <Snackbar
                  open={erAlert}
                  autoHideDuration={2000}
                  onClose={Erroralerts}
                  message="Error"
                />
              )}
              {sucess && (
                <Snackbar
                  open={sucess}
                  autoHideDuration={2000}
                  onClose={Erroralerts}
                  message="Message Sent!"
                />
              )}
            </div>

            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Your Email"
              id="email"
            />
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Your Name"
              id="name"
            />
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Subject"
              id="subject"
            />
            <textarea
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Message"
              id="textarea"
            />
            <button
              className=" bg-chose-10 text-chose-20 rounded-lg font-bold text-xl p-3 w-full mt-3 lg:hover:bg-chose-20 hover:border border-chose-10 lg:hover:text-white xl:hover:bg-chose-20 xl:hover:border xl:border-chose-10 xl:hover:text-white 2xl:hover:bg-chose-20 2xl:hover:border 2xl:border-chose-10 2xl:hover:text-white"
              onClick={formValidation}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
});

export default main;

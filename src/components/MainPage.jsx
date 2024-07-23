import React from "react";
import { useState, useEffect, useRef } from "react";
import ScrollTop from "./ScroolTop";
import { forwardRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiBootstrap } from "react-icons/si";
import Snackbar from "@mui/material/Snackbar";
import emailjs from "@emailjs/browser";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Projects from "./Projects";

const main = forwardRef(() => {
  const [sucess, setSucess] = useState(false);
  const form = useRef();

  function successalert() {
    setSucess(true);
    setTimeout(() => setSucess(false), 5000);
  }

  const projectsInfos = [
    {
      id: 1,
      S1 : 'HTML',
      S2 : 'CSS',
      image : 'images/landing.png',
      Title : 'Grooves',
      Description : 'This is a ultimate destination for audiophiles and music enthusiasts. Combining sleek design with exceptional soundquality.',
      url : 'https://harii10.github.io/landing-page/'

    },
    {
      id: 2,
      S1 : 'HTML',
      S2 : 'CSS',
      S3 : 'JavaScript',
      image : 'images/task.png',
      Title : 'To Do List',
      Description : 'This app provides a clean and user-friendly interface for organizing your daily activities. It help you manage your tasks efficiently.',
      url : 'https://harii10.github.io/todo/'

    },
    {
      id: 3,
      S1 : 'HTML',
      S2 : 'CSS',
      image : 'images/text-speaker.png',
      Title : 'Text Speaker',
      Description : 'The converts the written text into spoken words. Offers asimple yet powerful interface for text-to-speech functionality.',
      url : 'https://hberlin07.github.io/Text-Speaker/'

    },
    {
      id: 4,
      S1 : 'React',
      S2 : 'Tailwindcss',
      S3 : 'API',
      image : 'images/weather-i.png',
      Title : 'Weather Application',
      Description : 'This shows the weather information and forecast of the current location. Designed to provide users with up-to-date weather information with.',
      url : "https://harii10.github.io/weather-app/"

    },
    {
      id: 5,
      S1 : 'HTML',
      S2 : 'CSS',
      image : 'images/head.png',
      Title : 'Headphones',
      Description : 'Our Headphones Landing Page showcases the latest in audio technology, combining sleek design with exceptional sound quality.',
      url: "https://harii10.github.io/headphone/"
    },
    {
      id: 6,
      S1 : 'React',
      S2 : 'Tailwindcss',
      S3: 'API',
      image : 'images/weather-2.png',
      Title : 'Weather',
      Description : 'Users can search for weather information by city name. Auto-suggestions and autocomplete functionality enhance the search experience.',
      url: "https://denay.netlify.app/"
    },
    {
      id: 7,
      S1 : 'HTML',
      S2 : 'CSS',
      S3: 'JavaScript',
      image : 'images/fyle.png',
      Title : 'Productshowcase',
      Description : 'This is a product landing page, it showcases the products infos and the growths.',
      url: 'https://harii10.github.io/webdeveloper/'
    }





  ]
  

  const formP = (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const subject = document.getElementById("subject");
    const textarea = document.getElementById("textarea");

    emailjs
      .sendForm("service_72v1hmm", "template_s161b47", form.current, {
        publicKey: "yaAlYmVN6AUTSRpM3",
      })
      .then(() => {
        setSucess(true);
      })
      .catch((error) => {
        console.log("Error", error.txt);
      });

    email.value = "";
    name.value = "";
    subject.value = "";
    textarea.value = "";
  };

  return (
    <div>
      <div>
        <ScrollTop />
      </div>
      <section id="home" className="section">
        <div className="flex flex-col-reverse -mt-8 lg:flex lg:flex-row justify-between lg:mt-6 ">
          <div className="p-7 lg:text-2xl lg:pl-24">
            <h3 className="font-bold tracking-wider text-2xl">Hi, I am</h3>
            <h1 className="font-extrabold tracking-wider text-2xl mt-1 lg:text-4xl">
              Hariharachandru
            </h1>
            <p className="font-extrabold tracking-wider text-2xl mt-4 lg:text-3xl">
              & I'm a{" "}
              <span className="text-chose-10 text-2xl lg:text-3xl">
                <Typewriter
                  words={[
                    "Front End Developer",
                    "Web Developer",
                    "React Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
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
        <a href="https://drive.google.com/file/d/1CPB05dZCL16T4--JJqF8WySClGt88jO2/view?usp=sharing">
          <button className="bg-chose-10 text-chose-20 rounded-lg font-bold text-xl p-3 lg:hover:bg-chose-20 hover:border border-chose-10 lg:hover:text-white xl:hover:bg-chose-20 xl:hover:border xl:border-chose-10 xl:hover:text-white 2xl:hover:bg-chose-20 2xl:hover:border 2xl:border-chose-10 2xl:hover:text-white">
            Check Resume
          </button>
        </a>
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
            {projectsInfos.map((infos)=>(
              <Projects
                img={infos.image}
                tech1={infos.S1}
                tech2={infos.S2}
                tech3={infos.S3}
                heading={infos.Title}
                about ={infos.Description}
                link={infos.url}
                key={infos.id}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20 lg:mt-32 lg:p-10" id="contact">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold tracking-wider text-4xl">Contact Me</h1>
        </div>
        <div className="m-5 p-7 bg-chose-20 shadow-black shadow-2xl  rounded-md sm:m-11 md:mx-36 mt-8 2xl:mx-72 2xl:p-9">
          <h3 className="font-medium text-lg">Email Me</h3>
          <form ref={form} onSubmit={formP}>
            <div>
              {sucess && (
                <Snackbar
                  open={sucess}
                  autoHideDuration={2000}
                  onClose={successalert}
                  message="Message Sent!"
                />
              )}
            </div>

            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Your Email"
              id="email"
              required
            />
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Your Name"
              id="name"
              required
            />
            <input
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Subject"
              id="subject"
              required
            />
            <textarea
              className="w-full p-3 mt-3 rounded-md bg-transparent border border-chose-60 outline-none lg:p-5"
              placeholder="Message"
              id="textarea"
              required
            />
            <button className=" bg-chose-10 text-chose-20 rounded-lg font-bold text-xl p-3 w-full mt-3 lg:hover:bg-chose-20 hover:border border-chose-10 lg:hover:text-white xl:hover:bg-chose-20 xl:hover:border xl:border-chose-10 xl:hover:text-white 2xl:hover:bg-chose-20 2xl:hover:border 2xl:border-chose-10 2xl:hover:text-white">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
});

export default main;

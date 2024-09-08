import React from "react";
import { useState, useEffect, useRef } from "react"
import ScrollTop from "./ScroolTop"
import { forwardRef } from "react"
import Snackbar from "@mui/material/Snackbar"
import emailjs from "@emailjs/browser"
import { Typewriter, Cursor } from "react-simple-typewriter"
import Projects from "./Projects"
import Skills from "./Skills"
import AOS from 'aos'
import 'aos/dist/aos.css'

const main = forwardRef(() => {
  const [sucess, setSucess] = useState(false);
  const form = useRef()

  useEffect(()=>{
    AOS.init()
  }, [])
  function successalert() {
    setSucess(true);
    setTimeout(() => setSucess(false), 5000);
  }

  const projectsInfos = [
    {
      id: 1,
      S1 : 'React',
      S2 : 'Django',
      S3: 'MySQL',
      image : 'images/data-visualization.png',
      Title : 'Data Visualization',
      Description : 'The project showcases various charts and graphs to represent complex data insights. Visually engaging dashboard, with data dynamically fetched from a MySQL database.',
      url: 'https://harii10.github.io/data-visualization/'
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
      image : 'images/landing.png',
      Title : 'Grooves',
      Description : 'This is a ultimate destination for audiophiles and music enthusiasts. Combining sleek design with exceptional soundquality.',
      url : 'https://harii10.github.io/landing-page/'

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
    },
    
    {
      id: 8,
      S1 : 'HTML',
      S2 : 'CSS',
      image : 'images/text-speaker.png',
      Title : 'Text Speaker',
      Description : 'The converts the written text into spoken words. Offers asimple yet powerful interface for text-to-speech functionality.',
      url : 'https://hberlin07.github.io/Text-Speaker/'

    },




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
  }

  return (
    <div>
      <div>
        <ScrollTop />
      </div>
      <section id="home" className="section" >
        <div className="flex flex-col-reverse -mt-8 lg:flex lg:flex-row justify-between lg:mt-6 ">
          <div className="p-7 lg:text-2xl lg:pl-24" data-aos="fade-down" data-aos-duration="1000">
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
                    "Full Stack Developer",
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
            I am a dedicated and passionate IT graduate with a BTech in Information Technology, equipped with hands-on experience in diverse tech projects. My academic journey and project work have given me a strong foundation in web development. I've developed multiple projects, including responsive web applications, data visualization tools. I've developed multiple projects, including responsive web applications, data visualization tools.
            </p>
          </div>

          <div className="flex justify-center items-center w-lvw" >
            <img
            data-aos="fade-up"
            data-aos-duration="1000"
              src="images/hari.png"
              className="h-52 w-52 ml-11 border-chose-10 border-4 lg:h-72 lg:w-80 mr-14 rounded-full bg-chose-60"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center lg:flex lg:justify-start p-3 lg:p-10 lg:pl-24 lg:-mt-9" >
        <a href="https://drive.google.com/file/d/1N8dLc7WXEE59q2YxAa1MPRn5193a23u2/view?usp=sharing">
          <button className="bg-chose-10 text-chose-20 rounded-lg font-bold text-xl p-3 lg:hover:bg-chose-20 hover:border border-chose-10 lg:hover:text-white xl:hover:bg-chose-20 xl:hover:border xl:border-chose-10 xl:hover:text-white 2xl:hover:bg-chose-20 2xl:hover:border 2xl:border-chose-10 2xl:hover:text-white" data-aos="fade-left" data-aos-duration="1000">
            Check Resume
          </button>
        </a>
      </div>

      <section className="section" id="skill">
        <div className=" section mt-24 lg:mt-32 lg:p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold tracking-wider text-4xl" data-aos="fade-up" data-aos-duration="1000">Skills</h1>
            <p className="font-light m-3 mt-5 text-chose-50 lg:text-xl" data-aos="fade-down" data-aos-duration="1000">
              Here are some of my skills which I have Learnt
            </p>
          </div>
          <div className="m-2 p-2" data-aos="fade-down-right" data-aos-duration="1000">
            <Skills/>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="mt-24 lg:mt-32 lg:p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold tracking-wider text-4xl" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
            <p className="flex font-light m-3 mt-5 text-chose-50 lg:text-xl" data-aos="fade-down" data-aos-duration="1000">
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
        <div className="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-semibold tracking-wider text-4xl">Contact Me</h1>
        </div>
        <div className="m-5 p-7 bg-chose-20 shadow-black shadow-2xl  rounded-md sm:m-11 md:mx-36 mt-8 2xl:mx-72 2xl:p-9" data-aos="zoom-in-left" data-aos-duration="1000">
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

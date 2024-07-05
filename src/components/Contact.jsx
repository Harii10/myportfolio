import React from 'react'
import Snackbar from "@mui/material/Snackbar";

function Contact() {
  return (
    <div>
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
    </div>
  )
}

export default Contact
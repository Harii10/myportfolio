import React from "react";
import { FaPhoneAlt, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SocialIcons() {
  return (
    <div>
      <div className="flex h-72 w-12 flex-col justify-between bg-transparent">
        <div>
          <div className="">
            <div className="px-2">
              <ul className="space-y-7 pt-4">
              <li>
                  <a
                    href="mailto:hariharachandru30@gmail.com"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-chose-10 hover:text-gray-900"
                  >
                    <MdEmail />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Mail
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hariharachandru-front-end-developer/"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-chose-10 hover:text-gray-900"
                  >
                    <FaLinkedin />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Linkedin
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="6379940593"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-chose-10 hover:text-gray-900"
                  >
                    <FaPhoneAlt />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Call
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Harii10"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-chose-10 hover:text-gray-900"
                  >
                    <FaGithub />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Github
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.link/9ikyi4/"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-chose-10 hover:text-gray-900"
                  >
                    <FaWhatsapp />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      WhatsApp
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SocialIcons;

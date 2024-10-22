import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Avatar from "@mui/material/Avatar";
import accenture from "../assets/Accenture-Emblem.png";
import freecode from "../assets/freecodejpeg.jpeg";
function Certifiactions() {
  return (
    <>
      <div>
        <div>
          <ul className="flex flex-col justify-center items-center gap-y-7">
            <li className="border border-chose-10 bg-transparent text-gray-300 rounded-lg p-2 md:w-81">
              <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_tMRoxd8FCGaexXcLq_1728578962993_completion_certificate.pdf">
                <div className="flex gap-3">
                  <span className="mt-2">
                    <Avatar
                      alt="Remy Sharp"
                      src={accenture}
                      className="bg-white p-2"
                    />
                  </span>
                  <p className="md:mt-3">Accenture UK - Developer and Technology Job Simulation</p>
                </div>
                <div className="flex gap-2 ml-14 mt-1">
                  <p>Forage</p>
                </div>
              </a>
            </li>
            <li className="border border-chose-10 bg-transparent rounded-lg p-2 md:w-81">
              <a href="https://freecodecamp.org/certification/Hariharachandru/javascript-algorithms-and-data-structures">
                <div className="flex gap-3">
                  <span className="mt-2">
                    <Avatar
                      alt="Remy Sharp"
                      src={freecode}
                      className="bg-black p-2"
                    />
                  </span>
                  <p className="md:mt-3">JavaScript Algorithms and Data Structures</p>
                </div>
                <div className="flex gap-2 ml-14 mt-1">
                  <p>freeCodeCamp</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Certifiactions;

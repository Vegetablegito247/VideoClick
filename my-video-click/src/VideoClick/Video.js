import React from "react";
import "./Video.css";
import ImageONE from "../Asset/IMG/TestimonieOne.png";
import ImageTWO from "../Asset/IMG/TestimoniesTwo.png";
import ImageTHREE from "../Asset/IMG/TestimonieThree.png";
import ImageFOUR from "../Asset/IMG/TestimoniesFour.png";
import Click from "../Asset/IMG/PlayClick.png";

export default function Video() {
  return (
  <div className="container-fluid background">
      <div className="container">
    <div className="d-flex flex-column  text-center">
      <div className="headingSpan">
        <h2>Testimonies from <span className="spanText"> our online trainees </span></h2>
      </div>
      <div className="Paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
      </div>
      <div className="d-flex flex-row p-4 ">
        <div className="facilitatorCard">
        <div className="imgBtns">
            <img src={ImageONE} alt="" className="imgBack" />
            {/* <div className="backgrpcolor"></div> */}
            <div className="ButtonClick">
              <img src={Click} alt="" />
            </div>
            {/* <PopupText  trigger={true}>
              <h3>My Video display not yet available</h3>
            </PopupText> */}
            </div>
            <h2>Freedon Fighter</h2>
            <span>SQl Trainee</span>
        </div>
        <div className="facilitatorCard">
        <div className="imgBtns">
            <img src={ImageTWO} alt="" className="imgBack" />
            <div className="ButtonClick">
              <img src={Click} alt="" />
            </div>
            </div>
            <h2>Elijah Mikelson</h2>
            <span>SQl Trainee</span>
            

        </div>
        <div className="facilitatorCard">
        <div className="imgBtns">
            <img src={ImageTHREE} alt="" className="imgBack" />
            <div className="ButtonClick">
              <img src={Click} alt="" />
            </div>
            </div>
            <h2>Thomas Shelby</h2>
            <span>SQl Trainee</span>
        </div>
        <div className="facilitatorCard">
        <div className="imgBtns">
            <img src={ImageFOUR} alt="" className="imgBack" />
            <div className="ButtonClick">
              <img src={Click} alt="" />
            </div>
            </div>
            <h2>Gwen Gaius</h2>
            <span>SQl Trainee</span>
        </div>
        </div>
    </div>
    </div>
    </div>
    
  )
};

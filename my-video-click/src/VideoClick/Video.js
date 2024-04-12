import React, { useState } from "react";
import "./Video.css";
import ImageONE from "../Asset/IMG/TestimonieOne.png";
import ImageTWO from "../Asset/IMG/TestimoniesTwo.png";
import ImageTHREE from "../Asset/IMG/TestimonieThree.png";
import ImageFOUR from "../Asset/IMG/TestimoniesFour.png";
import Click from "../Asset/IMG/PlayClick.png";

export default function Video() {
  // If videos are coming in, add them to where they belong in the array of objects.
  const facilitatorCards = [
    {
      id: 1,
      image: ImageONE,
      name: 'Freedon Fighter',
      role: 'SQl Trainee'
    },
    {
      id: 2,
      image: ImageTWO,
      name: 'Elijah Mikelson',
      role: 'SQl Trainee'
    },
    {
      id: 3,
      image: ImageTHREE,
      name: 'Thomas Shelby',
      role: 'SQl Trainee'
    },
    {
      id: 4,
      image: ImageFOUR,
      name: 'Gwen Gaius',
      role: 'SQl Trainee'
    }
  ];

  const [openVideo, setOpenVideo] = useState(null);
  const vidDisplay = (ind) => {
    if (openVideo === ind) {
      return setOpenVideo(null);
    }
    else {
      setOpenVideo(ind);
    }
  };

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
            {facilitatorCards.map((card, index) => (
              <div className="facilitatorCard" key={card.id} onClick={() => vidDisplay(index)}>
                  {
                    openVideo !== index ? (
                      <div className="imgBtns">
                        <img src={card.image} alt="" className="imgBack" />
                      </div>
                    ) : (
                      <div className={openVideo === index ? "video active" : "video"}>
                        {/* Change the image tag to a video tag, and replace the src with the video link */}
                        <img src={openVideo === index ? card.image : ""} alt="" className="vidDisplay" />
                      </div>
                    )
                  }
                <h2>{card.name}</h2>
                <span>{card.role}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

  )
};

import { useState } from "react";
import { ModalUpload } from "../components";
import { arrowRight } from "../assets/icons";
import CheckMarkIcon from "../assets/icons/check-mark.svg";
// Import videos
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";

const ShowResult = () => {
  const [showModal, setShowModal] = useState(false);

  const videoFiles = [video1, video2, video3, video4, video5, video5, video5];

  return (
    <section className='w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container'>
      <div className='relative w-full flex flex-col justify-center items-center p-8 bg-white shadow-lg'>
        <h2 className='text-xl font-montserrat text-primary-text mb-6'>
          Select a Video
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-8'>
          {videoFiles.map((video, index) => (
            <div key={index} className='relative w-96 h-64 overflow-hidden'>
              <img
                src={CheckMarkIcon}
                alt='Check Mark'
                className='absolute top-2 left-2 w-8 h-8'
              />
              <video
                width='100%'
                height='100%'
                controls
                className='object-cover w-full h-full rounded-lg'
              >
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <button
          className="flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none bg-primary-text text-white border-coral-red rounded-full"
          onClick={() => setShowModal(true)}
          style={{ marginTop: "20px" }}
        >
          Next
          <img
            src={arrowRight}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        </button>
        <ModalUpload isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section>
  );
};

export default ShowResult;

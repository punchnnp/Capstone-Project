import React, { useState } from 'react';
import video from "../assets/videos/video1.mp4";
import { arrowRight } from "../assets/icons";

const VideoExport = () => {
  const [selectedFilter, setSelectedFilter] = useState("none"); // Initial filter

  const handleExportClick = () => {
    const videoLink = document.createElement('a');
    videoLink.href = video;
    videoLink.download = "video1.mp4"; 
    videoLink.click();
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <section className="w-full flex flex-col items-center gap-10 bg-blur max-container">
      <div className="relative w-full flex flex-col justify-center items-center p-8 bg-white shadow-lg">
        <h2 className="text-xl font-montserrat text-primary-text mb-6">
          Edit a Video
        </h2>
        <div className="relative w-96 h-64 overflow-hidden">
          {/* Video with filter applied based on state */}
          <video
            src={video}
            width="100%"
            height="100%"
            controls
            className={`object-cover w-full h-full rounded-lg filter ${selectedFilter}`} // Add selected filter class
          />
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-4 text-base font-montserrat text-primary-text">
            Filter:
          </span>
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-coral-red"
          >
            <option value="none">None</option>
            <option value="grayscale">Grayscale</option>
            <option value="sepia">Sepia</option>
            {/* Add more filters here (e.g., blur, brightness, contrast) */}
          </select>
        </div>
        <button
          className="flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none bg-primary-text text-white border-coral-red rounded-full"
          onClick={handleExportClick}
          style={{ marginTop: "20px" }}
        >
          Export Video
          <img
            src={arrowRight}
            alt="arrow right icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
          />
        </button>
      </div>
    </section>
  );
};

export default VideoExport;

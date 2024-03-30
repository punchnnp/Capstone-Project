import { useState } from "react";
import { useLocation } from "react-router-dom";
import { arrowRight, arrowLeft, arrowRightNext, arrowLeftColor } from "../assets/icons";
import { RecordNotFound } from "../components";
import { useNavigate } from "react-router-dom";

const Result2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("state", location.state)
    const videoFiles = location.state.videoFiles.Videos.map((id) => ({ id: id, src: `http://localhost/api/video/${id}` }));
    console.log(videoFiles)

    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleCheckboxChange = (videoId) => {
        console.log(videoId)
        setSelectedVideo(videoId === selectedVideo ? null : videoId);
    };

    const handleNextButtonClick = () => {
        if (selectedVideo !== null) {
            navigate("/edit", { state: { videoId: selectedVideo } })
            console.log("Selected video:", selectedVideo);

        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 8;
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videoFiles.slice(indexOfFirstVideo, indexOfLastVideo);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(videoFiles.length / videosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section className='w-full min-h-screen gap-10 max-container'>
            <div className="relative flex flex-col w-full pt-28 gap-4">
                <div className="flex content-center items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center w-10 h-10 bg-white border border-primary-text text-primary-text rounded-full">
                            <img src={arrowLeftColor} alt="back" className="w-[24px] h-[24px]" />
                        </button>
                    <h1 className="flex font-montserrat text-primary-text font-semibold text-2xl">Select a video</h1>
                </div>

                <div className="flex flex-row">
                    <div className="grow flex-col mb-4">
                        <h1 className="grow font-montserrat text-black text-l">
                            <span className="font-semibold">Academic Year: </span>{location.state.year}
                        </h1>
                        <h1 className="grow font-montserrat text-black text-l">
                            <span className="font-semibold">Department: </span>{location.state.department}
                        </h1>
                    </div>
                    <div className="grow flex-col">
                        <h1 className="grow font-montserrat text-black text-l">
                            <span className="font-semibold">Faculty: </span>{location.state.faculty}
                        </h1>
                        <h1 className="grow font-montserrat text-black text-l">
                            <span className="font-semibold">Curriculumn: </span>{location.state.curriculum}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                {currentVideos.length > 0 ? (
                    currentVideos.map((video) => (
                        <div key={video.id} className="flex gap-x-2 w-[308px] h-60 rounded-[4px]">
                            <input
                                type="radio"
                                className=" w-[20px] h-[20px] rounded-[4px] border-2 border-gray-400 checked:bg-blue-500 checked:border-transparent focus:outline-none"
                                checked={video.id === selectedVideo}
                                // value={videoCheck}
                                onChange={() => handleCheckboxChange(video.id)}
                            />
                            <video
                                controls
                                className='flex overflow-hidden object-cover w-full h-full rounded-lg'
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>
                    ))
                ) : (
                    <RecordNotFound />
                )}
            </div>
            <div className="flex justify-center gap-2 mt-4">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 bg-primary-text text-white rounded-full ${currentPage === 1 ? '' : ''}`}
                >
                    <img src={arrowLeft} alt="Previous" className="w-4 h-4" />
                </button>
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-3 py-1 text-primary-text rounded-full ${currentPage === number ? 'bg-primary-text text-white' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === Math.ceil(videoFiles.length / videosPerPage)}
                    className={`px-3 py-1 bg-primary-text text-white rounded-full ${currentPage === Math.ceil(videoFiles.length / videosPerPage) ? '' : ''}`}
                >
                    <img src={arrowRightNext} alt="Next" className="w-4 h-4" />
                </button>
            </div>
            {videoFiles && videoFiles.length > 0 && (
                <div className="fixed z-90 bottom-10 right-8">
                    <button
                        disabled={selectedVideo === null}
                        onClick={handleNextButtonClick}
                        className="flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none bg-primary-text text-white border-coral-red rounded-full disabled:opacity-75"
                    >
                        Next
                        <img
                            src={arrowRight}
                            alt="arrow right icon"
                            className="ml-2 rounded-full bg-white w-5 h-5"
                        />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Result2
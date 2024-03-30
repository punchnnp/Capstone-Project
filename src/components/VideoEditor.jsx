import { createFFmpeg } from "@ffmpeg/ffmpeg"
import { useEffect, useState } from "react"
import { Slider, Spin } from "antd"
import { VideoPlayer } from "./VideoPlayer"
import { sliderValueToVideoTime } from "../utils/utils"
import VideoUpload from "./VideoUpload"
import VideoConversionButton from "./VideoConversionButton"
import { useLocation } from "react-router-dom"
import ModalSuccess from "./modalSuccess"
import { useNavigate } from "react-router-dom"
import { arrowLeftColor } from "../assets/icons"

const ffmpeg = createFFmpeg({ log: true })

function VideoEditor() {
    const location = useLocation();
    const navigate = useNavigate();
    const videoId = location.state.videoId;
    const videoFile = `http://localhost/api/video/${videoId}`
    const [ffmpegLoaded, setFFmpegLoaded] = useState(ffmpeg.isLoaded());
    // const [videoFile, setVideoFile] = useState()
    const [overlayImage, setOverlayImage] = useState()
    const [videoPlayerState, setVideoPlayerState] = useState()
    const [videoPlayer, setVideoPlayer] = useState()
    const [gifUrl, setGifUrl] = useState()
    const [sliderValues, setSliderValues] = useState([0, 100])
    const [processing, setProcessing] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleDownload = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/");
    };

    useEffect(() => {
        // loading ffmpeg on startup
        if (!ffmpegLoaded) {
            ffmpeg.load().then(() => {
                setFFmpegLoaded(true)
            })
        }
    }, [ffmpegLoaded])

    useEffect(() => {
        const min = sliderValues[0]
        // when the slider values are updated, updating the
        // video time
        if (min !== undefined && videoPlayerState && videoPlayer) {
            videoPlayer.seek(sliderValueToVideoTime(videoPlayerState.duration, min))
        }
    }, [sliderValues])

    useEffect(() => {
        if (videoPlayer && videoPlayerState) {
            // allowing users to watch only the portion of
            // the video selected by the slider
            const [min, max] = sliderValues

            const minTime = sliderValueToVideoTime(videoPlayerState.duration, min)
            const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max)

            if (videoPlayerState.currentTime < minTime) {
                videoPlayer.seek(minTime)
            }
            if (videoPlayerState.currentTime > maxTime) {
                // looping logic
                videoPlayer.seek(minTime)
            }
        }
    }, [videoPlayerState])

    useEffect(() => {
        // when the current videoFile is removed,
        // restoring the default state
        if (!videoFile) {
            setVideoPlayerState(undefined)
            setSliderValues([0, 100])
            setVideoPlayerState(undefined)
            setGifUrl(undefined)
        }
    }, [videoFile])

    return (
        <section className='w-full min-h-screen gap-10 max-container'>
            <div className="relative flex flex-col w-full pt-28">
                <div className="flex content-center items-center pb-4 gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center w-10 h-10 bg-white border border-primary-text text-primary-text rounded-full">
                        <img src={arrowLeftColor} alt="back" className="w-[24px] h-[24px]" />
                    </button>
                    <div className="flex-col items-center">
                        <h1 className="font-montserrat text-primary-text font-semibold text-2xl">Edit Video</h1>
                        <p className="font-montserrat text-gray-500 text-l">Customize your video! Click Convert to GIF to preview</p>
                    </div>
                </div>
                <Spin
                    spinning={processing || !ffmpegLoaded}
                    tip={!ffmpegLoaded ? "Waiting for FFmpeg to load..." : "Processing..."}
                >
                    <div className="flex justify-center items-center">
                        {/* <div>  */}
                        {videoFile ? (
                            <VideoPlayer
                                src={videoFile}
                                onPlayerChange={(videoPlayer) => {
                                    setVideoPlayer(videoPlayer)
                                }}
                                onChange={(videoPlayerState) => {
                                    setVideoPlayerState(videoPlayerState)
                                }}
                                className="rounded"
                            />
                        ) : (
                            <h1>Upload a video</h1>
                        )}
                    </div>
                    <div className={"slider-div px-4 pt-4"}>
                        <h3 className="font-montserrat text-l">Cut video</h3>
                        <Slider
                            disabled={!videoPlayerState}
                            value={sliderValues}
                            range={true}
                            onChange={(values) => {
                                setSliderValues(values)
                            }}
                            tooltip={{
                                formatter: null,
                            }}
                        />
                    </div>
                    <div className={"conversion-div"}>
                        <VideoConversionButton
                            onConversionStart={() => {
                                setProcessing(true)
                            }}
                            onConversionEnd={() => {
                                setProcessing(false)
                            }}
                            ffmpeg={ffmpeg}
                            videoPlayerState={videoPlayerState}
                            sliderValues={sliderValues}
                            videoFile={videoFile}
                            overlayImage={overlayImage}
                            setOverlayImage={setOverlayImage}
                            onGifCreated={(gifUrl) => {
                                setGifUrl(gifUrl)
                            }}
                        />
                    </div>
                    {gifUrl && (
                        <div className={"gif-div flex flex-col px-4 gap-4"}>
                            <h3 className="font-montserrat text-primary-text font-semibold text-xl">Result GIF</h3>
                            <div className="flex justify-center items-center">
                                <img src={gifUrl} className={"gif w-[700px] h-auto rounded-lg"} alt={"GIF file generated in the client side"} />
                            </div>
                            <div className="flex justify-center items-center">
                                <a href={gifUrl} download={"YourGreatMoment.gif"} onClick={handleDownload} className={"inline-block bg-primary-text font-montserrat text-white text-lg px-4 py-2 rounded-full mt-4 w-36 flex items-center justify-center"}>
                                    Download
                                </a>
                            </div>
                        </div>
                    )}
                    <ModalSuccess isVisible={showModal} onClose={handleCloseModal} />
                </Spin>
            </div>
        </section>
    )
}

export default VideoEditor

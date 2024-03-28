import { createFFmpeg } from "@ffmpeg/ffmpeg"
import { useEffect, useState } from "react"
import { Slider, Spin } from "antd"
import { VideoPlayer } from "./VideoPlayer"
import { sliderValueToVideoTime } from "../utils/utils"
import VideoUpload from "./VideoUpload"
import VideoConversionButton from "./VideoConversionButton"
import { useLocation } from "react-router-dom"
import { LoadingSection } from "../sections"
import ModalSuccess from "./modalSuccess"
import { useNavigate } from "react-router-dom"

const ffmpeg = createFFmpeg({ log: true })

function VideoEditor() {
    const location = useLocation();
    const navigate = useNavigate();
    const videoId = location.state.videoId;
    const videoFile = `http://localhost/api/video/${videoId}`
    const [ffmpegLoaded, setFFmpegLoaded] = useState(false)
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
        ffmpeg.load().then(() => {
            setFFmpegLoaded(true)
        })
    }, [])

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
<<<<<<< Updated upstream
        <section className="w-full flex flex-col items-center gap-10 bg-blur max-container">
        <div className="relative w-full flex flex-col justify-center items-center p-8 bg-white shadow-lg">
            <h2 className="text-xl font-montserrat text-primary-text mb-6">
            Edit a Video
            </h2>
=======
        <section className='w-full min-h-screen gap-10 max-container'>
            <div className="relative flex flex-col w-full pt-28">
                <h1 className="font-montserrat text-primary-text font-semibold text-2xl">Edit Video</h1>
                <p className="font-montserrat text-gray-500 pb-4 text-l">Customize your video! Click Convert to GIF to preview</p>
>>>>>>> Stashed changes
                <Spin
                    spinning={processing || !ffmpegLoaded}
                    tip={!ffmpegLoaded ? "Waiting for FFmpeg to load..." : "Processing..."}
                >
<<<<<<< Updated upstream
                    <div>
                        {videoFile ? (
                            <VideoPlayer
                                src={URL.createObjectURL(videoFile)}
=======
                    <div className="flex justify-center items-center">
                        {/* <div>  */}
                        {videoFile ? (
                            <VideoPlayer
                                src={videoFile}
>>>>>>> Stashed changes
                                onPlayerChange={(videoPlayer) => {
                                    setVideoPlayer(videoPlayer)
                                }}
                                onChange={(videoPlayerState) => {
                                    setVideoPlayerState(videoPlayerState)
                                }}
<<<<<<< Updated upstream
=======
                                className="rounded"
>>>>>>> Stashed changes
                            />
                        ) : (
                            <h1>Upload a video</h1>
                        )}
                    </div>
<<<<<<< Updated upstream
                    <div className={"upload-div"}>
                        <VideoUpload
                            disabled={!!videoFile}
                            onChange={(videoFile) => {
                                setVideoFile(videoFile)
                            }}
                            onRemove={() => {
                                setVideoFile(undefined)
                            }}
                        />
                    </div>
                    <div className={"slider-div"}>
                        <h3>Cut Video</h3>
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
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                        <div className={"gif-div"}>
                            <h3>Resulting GIF</h3>
                            <img src={gifUrl} className={"gif"} alt={"GIF file generated in the client side"} />
                            <a href={gifUrl} download={"test.gif"} className={"ant-btn ant-btn-default"}>
                                Download
                            </a>
                        </div>
                    )}
=======
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
>>>>>>> Stashed changes
                </Spin>
            </div>
        </section>
    )
}

export default VideoEditor

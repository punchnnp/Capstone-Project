import { Button, Input, Select } from "antd";
import { fetchFile } from "@ffmpeg/ffmpeg";
import { sliderValueToVideoTime } from "../utils/utils";
import { useState } from "react";

const { Option } = Select;

function VideoConversionButton({
    videoPlayerState,
    sliderValues,
    videoFile,
    ffmpeg,
    onConversionStart = () => {},
    onConversionEnd = () => {},
    onGifCreated = () => {},
}) {
    const [text, setText] = useState(""); // State to store the input text
    const [fontSize, setFontSize] = useState(36); // State to store the font size
    const [fontColor, setFontColor] = useState("black"); // State to store the font color
    const [filterEffect, setFilterEffect] = useState("none"); // State to store the selected filter effect

    const handleFontSizeChange = (value) => {
        setFontSize(value);
    };

    const handleFontColorChange = (value) => {
        setFontColor(value);
    };

    const handleFilterEffectChange = (value) => {
        setFilterEffect(value);
    };

    async function convertToGif() {
        // Starting the conversion process
        onConversionStart(true);

        const inputFileName = "input.mp4";
        const outputFileName = "output.gif";
        const fontFileName = "arial.ttf";

        // Writing the video file and font file to memory
        ffmpeg.FS("writeFile", inputFileName, await fetchFile(videoFile));
        ffmpeg.FS("writeFile", fontFileName, await fetchFile('https://raw.githubusercontent.com/ffmpegwasm/testdata/master/arial.ttf'));

        const [min, max] = sliderValues;
        const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
        const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

        // Calculate the x position to center the text horizontally
        const textWidth = text.length * (fontSize / 2); // Rough estimation of text width
        const centerX = `(w - ${textWidth}) / 2`;

        // Construct the text overlay filter
        const textOverlayFilter = `drawtext=fontfile=/${fontFileName}:text='${text}':x=${centerX}:y=10:fontsize=${fontSize}:fontcolor=${fontColor}:box=1:boxcolor=white@1:boxborderw=10`;

        // Apply selected filter effect
        let filterEffectCommand = "";
        if (filterEffect === "vintage") {
            filterEffectCommand = "curves=vintage";
        } else if (filterEffect === "hdr") {
            filterEffectCommand = "eq=brightness=0.1:saturation=1.5:contrast=1.1";
        } else if (filterEffect === "vignette") {
            filterEffectCommand = "vignette";
        } else if (filterEffect === "cinematic") {
            filterEffectCommand = "eq=contrast=1.5:brightness=-0.2:saturation=1.2:gamma=1.2";
        } else if (filterEffect === "blackandwhite") {
            filterEffectCommand = "colorchannelmixer=.3:.4:.3:0:.3:.4:.3:0:.3:.4:.3";
        }

        // Construct the FFmpeg command
        let ffmpegCommand = [
            "-i", inputFileName,
            "-vf", `${textOverlayFilter}${filterEffectCommand ? `,${filterEffectCommand}` : ""}`, // Include text overlay and filter effect
            "-ss", `${minTime}`, "-to", `${maxTime}`, "-f", "gif", outputFileName,
        ];

        // Run FFmpeg command
        await ffmpeg.run(...ffmpegCommand);

        // Reading the resulting file
        const data = ffmpeg.FS("readFile", outputFileName);

        // Converting the GIF file created by FFmpeg to a valid image URL
        const gifUrl = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));
        onGifCreated(gifUrl);

        // Ending the conversion process
        onConversionEnd(false);
    }

    return (
        <>
            <Input
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)} // Update the text state onChange
            />
            <Select defaultValue="36" onChange={handleFontSizeChange}>
                <Option value="24">24</Option>
                <Option value="36">36</Option>
                <Option value="48">48</Option>
            </Select>
            <Select defaultValue="black" onChange={handleFontColorChange}>
                <Option value="black">Black</Option>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="purple">Purple</Option>
                <Option value="pink">Pink</Option>
                <Option value="gold">Gold</Option>
                <Option value="silver">Silver</Option>
            </Select>

            <Select defaultValue="none" onChange={handleFilterEffectChange}>
                <Option value="none">No Filter</Option>
                <Option value="vintage">Vintage</Option>
                <Option value="hdr">HDR</Option>
                <Option value="vignette">Vignette</Option>
                <Option value="cinematic">Cinematic</Option>
                <Option value="blackandwhite">Black and White</Option>
            </Select>
            <Button onClick={() => convertToGif()}>Convert to GIF</Button>
        </>
    );
}

export default VideoConversionButton;

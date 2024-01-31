import { useEffect, useState } from "react";
import { Button, ShoeCard } from "../components";

const ModalUpload = ({ isVisible, onClose}) => {
    if (!isVisible) return null;

    const [images, setImages] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrl = [];
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImageUrl(newImageUrl);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files])
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] justify-center">
                <div className="w-full bg-white rounded-lg shadow-md items-center px-4 py-4 space-y-4">
                    <button className="w-full place-items-end text-end text-[20px] font-montserrat" onClick={() => onClose()}>X</button>
                    <input type="file" className="file:bg-gradient-to-b file:from-orange-300 file:to-orange-400 file:px-4 file:py-4 file:border-none file:rounded-full file:text-white file:font-montserrat font-montserrat px-2 border-none" accept="image/*" onChange={onImageChange}/>
                        {imageUrl && (
                            <img src={imageUrl} />
                        )}
                    <button className="w-full text-white bg-primary-text text-center rounded-lg font-montserrat h-[40px] text-semibold">Upload</button> 
                </div>    
            </div>
        </div>
        
    );
    
  };
  
  
  export default ModalUpload;
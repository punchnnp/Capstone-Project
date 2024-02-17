import { useEffect, useState } from "react";
import { faculties, years} from "../constants";
import { close } from "../assets/icons";
import { useNavigate } from "react-router-dom";

const ModalUpload = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [selectOption, setSelectOption] = useState(null);
    const [selectOption2, setSelectOption2] = useState(null);

    const [year, setYear] = useState("--Select Academic Year--");
    const [faculty, setFaculty] = useState("--Select Faculty--");
    const [department, setDepartment] = useState("--Select Department--");
    const [curriculum, setCurriculum] = useState("--Select Curriculum--");
    const [departments, setDepartments] = useState([]);
    const [curriculums, setCurriculums] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrl = [];
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImageUrl(newImageUrl);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files])
    }

    function yearChange(e) {
        setYear(e.target.value)
    }

    function facultyChange(e) {
        setFaculty(e.target.value)
        setDepartments(faculties.find(fct => fct.name === e.target.value).department)
    }

    function departmentChange(e) {
        setDepartment(e.target.value)
        setCurriculums(departments.find(dpt => dpt.name === e.target.value).curriculum)
    }

    function curriculumChange(e) {
        setCurriculum(e.target.value);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] justify-center">
                <div className="w-full bg-white rounded-lg shadow-md items-center px-4 py-4 space-y-4">
                    <div className="w-full flex justify-end">
                        <div onClick={() => onClose()}>
                            <img className="w-[20px] h-[20px]" src={close} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-[8px]">
                        <div className="flex w-full gap-[4px] flex-col font-montserrat"> Academic Year
                            <select onChange={yearChange} value={year} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden">--Select Academic Year--</option>
                                {years.map((value) => (
                                    <option value={value}>{value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-[4px] flex-col font-montserrat"> Faculty
                            <select onChange={facultyChange} value={faculty} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden" >--Faculty--</option>
                                {faculties.map((fct) => (
                                    <option value={fct.name}>{fct.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-[4px] flex-col font-montserrat"> Department
                            <select onChange={departmentChange} value={department} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden" >--Department--</option>
                                {departments.map(dpt => (
                                    <option value={dpt.name}>{dpt.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-[4px] flex-col font-montserrat"> Curriculum
                            <select onChange={curriculumChange} value={curriculum} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden" >--Curriculum--</option>
                                {curriculums.map(crc => (
                                    <option value={crc}>{crc}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button onClick={() => navigate("/load")} className="w-full text-white bg-primary-text text-center rounded-lg font-montserrat h-[40px] text-semibold">Search</button>
                </div>

            </div>
        </div>

    );

};


export default ModalUpload;
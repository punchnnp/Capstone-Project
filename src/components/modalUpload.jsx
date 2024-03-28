import { useEffect, useState } from "react";
import { faculties, years } from "../constants";
import { close } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { document } from "postcss";

const ModalUpload = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const navigate = useNavigate();

    const [year, setYear] = useState("");
    const [faculty, setFaculty] = useState("");
    const [department, setDepartment] = useState("");
    const [curriculum, setCurriculum] = useState("");
    const [departments, setDepartments] = useState([]);
    const [curriculums, setCurriculums] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);

    function yearChange(e) {
        // formValue.year = e.target.value;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formValue = { "Uni": "KMITL", "Year": year, "Faculty": faculty, "Department": department, "Curriculum": curriculum }
        const uni = "KMITL"
        console.log(formValue);
        // navigate("/load")
        // setDisabled('submitted');
        try {
            const response = await fetch('http://localhost/api/search', {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValue),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Received data from the server:', data);

            navigate("/result", { state: { videoFiles: data, uni: "KMITL", year: year, faculty: faculty, department: department, curriculum: curriculum } });

            setVideoFiles(data.videoFiles || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {

        }
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
                    <form className="flex flex-col gap-y-[8px]" onSubmit={handleSubmit}>
                        <div className="flex w-full gap-[4px] flex-col font-montserrat"> Academic Year
                            <select onChange={yearChange} value={year} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option hidden>--Select Academic Year--</option>
                                {years.map((value) => (
                                    <option value={value}>{value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-[4px] flex-col font-montserrat"> Faculty
                            <select onChange={facultyChange} value={faculty} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden" >--Select Faculty--</option>
                                {faculties.map((fct) => (
                                    <option value={fct.name}>{fct.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-[4px] flex-col font-montserrat"> Department
                            <select onChange={departmentChange} value={department} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden" >--Select Department--</option>
                                {departments.map(dpt => (
                                    <option value={dpt.name}>{dpt.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-[4px] flex-col font-montserrat"> Curriculum
                            <select onChange={curriculumChange} value={curriculum} className="form-control border-solid border-gray-300 border-[1px] px-4 py-2 w-full rounded-[8px] font-montserrat shadow-sm gap-[4px] w-[200px]">
                                <option className="hidden" >--Select Curriculum--</option>
                                {curriculums.map(crc => (
                                    <option value={crc}>{crc}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                    <button
                        disabled={year.length === 0 || faculty.length === 0 || department.length === 0 || curriculum.length === 0}
                        onClick={handleSubmit}
                        className="w-full text-white bg-primary-text text-center rounded-lg font-montserrat h-[40px] text-semibold disabled:opacity-50">
                        Search
                    </button>
                </div>

            </div>
        </div>

    );

};


export default ModalUpload;
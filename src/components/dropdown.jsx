import { useState } from "react";
import { chevronDown } from "../assets/icons";
import { form } from "../constants";

const DropDown = ({ title, values, select, setSelect}) => {
    
    function toggleDropdown() {
        let dropdown = document.querySelector('#dropdownButton #dropdown')
        dropdown.classList.toggle('hidden')
    }

    function onOptionClick(value) {
        setSelect(value);
        toggleDropdown();
    }
    return (
        <div className="relative" id="dropdownButton">
            <div onClick={() => toggleDropdown()} className="border-solid border-gray-300 border-[1px] px-4 py-2 w-[280px] rounded-[8px] cursur-pointer font-montserrat flex justify-between shadow-sm gap-[4px] w-[200px]">
                {select || title}
                <img src={chevronDown} />
            </div>
            <div id="dropdown" className="rounded border-[1px] border-gray-300 bg-white absolute top-[50px] w-[280px] shadow-md hidden">
                {values.map((value) => (
                    <div onClick={() => onOptionClick(value)} key={Math.random()} className="cursur-pointer hover:bg-gray-300 p-4 font-montserrat">{value}</div>
                ))}
                
            </div>
        </div>
    );
};

export default DropDown;
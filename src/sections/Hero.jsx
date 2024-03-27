import { useState } from "react";

import { shoes, statistics, form } from "../constants";
import { Button, DropDown, ModalUpload, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight, chevronDown } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-primary-text'>
          Your Graduates Collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:whitespace-nowrap relative text-black inline-block mt-3'>
            <span className="text-primary-text">Greate</span> Moment
          </span>
          <br />
          <span className='xl:whitespace-nowrap relative inline-block mt-3'>
            of your
          </span>
          <br />
          <span className='xl:whitespace-nowrap relative text-primary-text inline-block mt-3'>Graduation <span className="text-black">Ceremony</span>
          </span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Capture all of your precious moments!
        </p>

        <button className="flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none bg-primary-text text-white border-coral-red rounded-full"
        onClick={() => setShowModal(true)}
        >
          Start
          <img
          src={arrowRight}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
        </button>
        <ModalUpload isVisible={showModal} onClose={() => setShowModal(false)}/>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react'
import { Link } from 'react-router-dom';


import { arrow } from '../assets/icons/index.js';


const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white neo-btn"
    >
      {btnText}
      <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
     
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white rounded-lg mx-5">
      Hi, I'm <span className="font-bold">Sourav Ray👋</span>
      <br />A Software Engineer from India
      <div className='flex justify-center mt-2 items-center'>
        <h4 className='btn-text bg-transparent font-semibold text-sm text-black px-3 py-2 uppercase rounded-md hover:bg-white/50 transition-all duration-300 ease-in-out cursor-pointer'>
          Drag to explore
        </h4>
      </div>
    </h1>
  ),
  2: (
    <InfoBox
      text="I'm a software engineer with a passion for building products that solve real-world problems."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years"
      link="/projects"
      btnText="View my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};



const HomeInfo = ({currentStage}) => {
  return  renderContent[currentStage] || null
}

export default HomeInfo
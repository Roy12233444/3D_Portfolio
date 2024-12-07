import React, { useState } from 'react'
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { personalProjects } from '../constants';
import CTA from '../components/CTA';

const Projects = () => {
  const [activeSection, setActiveSection] = useState('personal');

  

  const allProjects = [...projects, ...personalProjects];

  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="blue-gradient_text ml-3 font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="mt-10 flex gap-4">
        <button
          className={`px-6 py-2 rounded-lg transition-all duration-300 ease-in-out ${
            activeSection === 'personal' 
              ? 'bg-blue-500 text-white shadow-lg scale-105'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setActiveSection('personal')}
        >
          Projects
        </button>
        <button
          className={`px-6 py-2 rounded-lg transition-all duration-300 ease-in-out ${
            activeSection === 'client' 
              ? 'bg-blue-500 text-white shadow-lg scale-105' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setActiveSection('client')}
        >
          Personal Projects
        </button>
      </div>

      <div className='mt-20 prj1 flex flex-wrap justify-center gap-16'>
        {allProjects
          .filter(project => 
            activeSection === 'personal' 
              ? !project.isClient 
              : project.isClient
          )
          .map((project) => (
            <div 
              className='lg:w-[400px] w-full hover:scale-105 transition-transform duration-300 cursor-pointer' 
              key={project.name}
            >
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={project.iconUrl} 
                    alt="Project Icon" 
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              
              <div className='mt-5 flex flex-col'>
                <h4 className='bold-18 text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>

                <p className='mt-2 font-montserrat text-sm leading-tight text-slate-500'>
                  {project.description}
                </p>

                <div className='flex items-center gap-44 font-poppins mt-2'>
                  <div className='flex items-center gap-2'>
                    <Link 
                      to={project.link} 
                      target='_blank'
                      rel="noopener noreferrer"
                      className='font-semibold text-blue-600 hover:text-blue-800'
                    >
                      Live Link
                    </Link>
                    <img 
                      src={arrow} 
                      alt="arrow" 
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                  <div className='flex items-center gap-2'>
                    <Link 
                      to={project.preview} 
                      target='_blank'
                      rel="noopener noreferrer"
                      className='font-semibold text-blue-600 hover:text-blue-800'
                    >
                      Preview
                    </Link>
                    <img 
                      src={arrow} 
                      alt="arrow" 
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>

      <hr className='border-slate-200 mt-20'/>
      <CTA />
    </section>
  );
}

export default Projects
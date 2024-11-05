import React from 'react';
import sessions from '../../assets/sessions.svg';
import arrow_up from '../../assets/arrow_up.svg';
import material from '../../assets/material.svg';
import timer from '../../assets/timer.svg';
import copy from '../../assets/copy.svg';
import chartBar from '../../assets/chartBar.svg';
import arrow_down from '../../assets/arrow_down.svg';
import line from '../../assets/line.svg';
import video from '../../assets/video.svg';
import article from '../../assets/article.svg';
import coding from '../../assets/coding.svg';
import line_20 from '../../assets/line_20.svg';
import line_0 from '../../assets/line_0.svg';
import info from '../../assets/info.svg';

const Main = () => {
  const ResourceItem = ({ icon, title, duration }) => (
    <div className="flex justify-between items-center w-full px-4 sm:px-8 py-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex gap-2 items-center">
        <img src={icon} alt="" className="w-[15px] h-auto"/>
        <p className="font-semibold text-sm sm:text-base">{title}</p>
      </div>
      <div className="flex gap-2 items-center">
        <img className="w-[15px] h-auto" src={timer} alt=""/>
        <p className="text-sm sm:text-base">{duration}</p>
      </div>
    </div>
  );

  return (
    <div className="box-border w-full h-full p-2 sm:p-4 border-[1px] my-2 ml-2 sm:my-6 sm:ml-8 border-solid border-[#A4E6FF] lg:my-24 rounded-lg" style={{marginTop: 40}}>
      <div className="flex flex-col lg:flex-row justify-between">
  <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center">
    <div className="toogle flex flex-wrap xs:flex-nowrap justify-around bg-gradient-to-b from-white to-[#F1FBFF] p-2 sm:p-3 rounded-md gap-2 w-full sm:w-auto">
      <div className="flex items-center gap-1 p-1 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap">
        <img src={sessions} alt="sessions" className="w-3 sm:w-4 md:w-auto" />
        <p>Mentor Sessions</p>
      </div>

      <div className="flex p-1 items-center gap-1 text-xs sm:text-sm md:text-base border-solid border-gradient bg-[#fff] rounded-md border-2 shadow-md cursor-pointer whitespace-nowrap">
        <img src={material} alt="sessions" className="w-3 sm:w-4 md:w-auto" />
        <p>Learning Materials</p>
      </div>
    </div>
    
    <div className='flex items-center border-solid border-[#A4E6FF] border-2 rounded-lg text-xs sm:text-sm md:text-base gap-1 h-8 sm:h-12 p-2 w-full sm:w-auto justify-center sm:justify-start'>
      <img src={info} alt="" className="w-3 sm:w-4 md:w-auto"/>
      <p>How it works</p>
    </div>
  </div>
</div>

      <div className='hidden sm:block w-full h-[1px] bg-[#A4E6FF] my-4'></div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mt-4">
        {/* Left Side - Chapters */}
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between bg-[#EFF5FF] w-full p-2 m-1 text-[#000]">
              <p className="text-sm sm:text-base">Chapter 1</p>
              <div className="flex gap-1 items-center text-[#608AD2]">
                <img src={timer} alt="timer" className="w-4" />
                <p className="text-sm sm:text-base">05:00:00</p>
              </div>
            </div>
            {['Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'].map((chapter, index) => (
              <p key={index} className="w-full p-2 m-1 text-sm sm:text-base hover:bg-gray-50 cursor-pointer">
                {chapter}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side - Progress Section */}
        <div className='flex flex-col'>
        <div className="flex-1 border-box border-solid border-[#A4E6FF] border-2 my-2 rounded-md">
          <div className="flex flex-col sm:flex-row p-4 items-start sm:items-center w-full">
            <div className="flex flex-col">
              <p className="text-sm sm:text-base">PART 1</p>
              <p className="font-bold text-sm sm:text-base">Lorem ipsum dolor sit amet</p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-[#17384D] mt-4 sm:mt-0 sm:ml-auto">
              <div className="flex items-center gap-2">
                <img src={timer} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">02:00:00</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={chartBar} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">Medium</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={copy} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">5</p>
              </div>
              <img src={arrow_down} alt="" className="w-4 sm:w-auto cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-end">
            <p className="w-36 mr-2 text-center h-auto text-sm sm:text-base bg-[#EFF5FF] border-[1px] border-solid border-[#99E4FF] rounded-md font-sans">45% Completed</p>
          </div>
          <img src={line} alt="" className="w-full rounded-b-md mt-2" />

          <div className="divide-y divide-gray-100">
            <ResourceItem icon={video} title="Video 1" duration="10:00" />
            <ResourceItem icon={article} title="Article 1" duration="10:00" />
            <ResourceItem icon={article} title="Quiz 1" duration="10:00" />
            <ResourceItem icon={coding} title="Coding Exercise 1" duration="10:00" />
            <ResourceItem icon={copy} title="Combined Resource 1" duration="10:00" />
          </div>
          
        </div>

        <div className="flex-1 border-box border-solid border-[#A4E6FF] border-2 rounded-md">
          <div className="flex flex-col sm:flex-row p-4 items-start sm:items-center w-full">
            <div className="flex flex-col">
              <p className="text-sm sm:text-base">PART 2</p>
              <p className="font-bold text-sm sm:text-base">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-[#17384D] mt-4 sm:mt-0 sm:ml-auto">
              <div className="flex items-center gap-2">
                <img src={timer} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">02:00:00</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={chartBar} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">Medium</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={copy} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">12</p>
              </div>
              <img src={arrow_up} alt="" className="w-4 sm:w-auto cursor-pointer" />
            </div>
            </div>
            <div className="flex justify-end">
            <p className="w-36 mr-2 text-center h-auto text-sm sm:text-base bg-[#EFF5FF] border-[1px] border-solid border-[#99E4FF] rounded-md font-sans">20% Completed</p>
          </div>
          <img src={line_20} alt="" className="w-full rounded-b-md mt-2" />
        </div>

        <div className="flex-1 border-box border-solid border-[#A4E6FF] border-2 my-2 rounded-md">
          <div className="flex flex-col sm:flex-row p-4 items-start sm:items-center w-full">
            <div className="flex flex-col">
              <p className="text-sm sm:text-base">PART 3</p>
              <p className="font-bold text-sm sm:text-base">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-[#17384D] mt-4 sm:mt-0 sm:ml-auto">
              <div className="flex items-center gap-2">
                <img src={timer} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">02:00:00</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={chartBar} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">Medium</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={copy} alt="" className="w-4 sm:w-auto" />
                <p className="text-sm sm:text-base">12</p>
              </div>
              <img src={arrow_up} alt="" className="w-4 sm:w-auto cursor-pointer" />
            </div>
            </div>
            <div className="flex justify-end">
            <p className="w-36 mr-2 text-center h-auto text-sm sm:text-base bg-[#EFF5FF] border-[1px] border-solid border-[#99E4FF] rounded-md font-sans">0% Completed</p>
          </div>
          <img src={line_0} alt="" className="w-full rounded-b-md mt-2"/>
        </div>
            
        </div>
        
        
      </div>
    </div>
  );
};

export default Main;
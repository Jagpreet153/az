import React, { useState } from 'react';
import dash from '../assets/dash.svg';
import learn from '../assets/learn.svg';
import forum from '../assets/forum.svg';
import upskill from '../assets/upskill.svg';
import contest from '../assets/contest.svg';
import leader from '../assets/leader.svg';
import logo from '../assets/algo_logo.svg';
import notify from '../assets/notify.svg';
import profile from '../assets/profile.svg';
import Main from './main/Main';
import ham from '../assets/hamburger.svg';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: dash, text: 'Dashboard' },
        { icon: learn, text: 'Learn' },
        { icon: forum, text: 'Forum' },
        { icon: upskill, text: 'Upskill' },
        { icon: contest, text: 'Contest' },
        { icon: leader, text: 'Leaderboard' },
    ];

    return (
        <div className="sidebar py-4 md:py-10 px-2 w-full h-auto">
            <nav className="flex justify-between items-center px-4 relative w-full mx-10">
                <div className="flex items-center gap-2 mx-[-2.5rem]">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 cursor-pointer px-2 md:px-6"
                    >
                        <img src={ham} alt="Menu" className="max-h-8 transition-transform duration-300" />
                        <img src={logo} alt="Dashboard" className="max-h-8" />
                    </button>
                </div>

                <div className="flex items-center gap-2 h-3">
                    <div className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
                        <img src={notify} alt="Notifications" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
                        <img src={profile} alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    </div>
                </div>
            </nav>

            <div className="flex flex-col lg:flex-row items-start relative">
                {/* Sidebar Menu */}
                <div className={`
                    ${isOpen ? 'block' : 'hidden'} 
                    lg:block fixed lg:relative z-50 bg-white lg:bg-transparent
                    top-0 left-0 h-full w-64 shadow-lg lg:shadow-none 
                    transition-all duration-300 ease-in-out pt-16 lg:pt-0
                `}>
                    <div className="mt-4 lg:mt-8">
                        {menuItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`flex items-center px-8 py-3 transition duration-300 m-2 
                                    text-[#172B4D] gap-2 w-60 h-auto cursor-pointer hover:bg-[#D6F4FF] 
                                    rounded-md ${item.text === 'Upskill' ? 'bg-[#D6F4FF]' : ''}`}
                                onClick={() => {
                                    if (window.innerWidth < 1024) {
                                        setIsOpen(false);
                                    }
                                }}
                            >
                                <img src={item.icon} alt={item.text} />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlay for mobile */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Main Content */}
                <div className="w-full lg:mx-4">
                    <Main />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
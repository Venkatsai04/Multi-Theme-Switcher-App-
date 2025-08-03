import React from 'react';
import { useSelector } from 'react-redux';
import {type RootState } from '../store';

const About = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

 
  let textColor = 'text-[#121417]';
  let secondaryTextColor = 'text-[#677583]';
  let borderColor = 'border-white';
  
  if (currentTheme === 'Dark') {
    textColor = 'text-white';
    secondaryTextColor = 'text-gray-400';
    borderColor = 'border-gray-500';
  } else if (currentTheme === 'Modern') {
    textColor = 'text-black';
    secondaryTextColor = 'text-gray-600';
    borderColor = 'border-black';
  }

  return (
    <div className="p-4 fixed ">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="flex w-12 items-center justify-end">
          <button
            className={`flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent ${textColor} gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0`}
          >
            <div className={`${textColor}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,80a48,48..." />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <h1 className={`${textColor} text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4 p-4`}>
        About SwitchX
      </h1>

      <div className="md:grid md:grid-cols-2 md:gap-8 px-4">
     
        <div>
          <Section title="Our Vision" textColor={textColor} secondaryTextColor={secondaryTextColor}>
            <p>
              SwitchX was built with a simple goal: to give users the power to customize their digital experience. We believe that your apps should adapt to your style, not the other way around. Our dynamic theme-switching system provides a seamless and personalized journey every time you visit.
            </p>
          </Section>
        </div>

    
        <div>
          <Section title="The Technology" textColor={textColor} secondaryTextColor={secondaryTextColor}>
            <p>
              Under the hood, SwitchX uses  <b>React</b>, <b>Redux</b>, and <b>Tailwind CSS</b>. We've combined these powerful tools to create a robust and scalable theme management system. The current theme state is stored in Redux and persisted in your browser's local storage, so your preferences are saved across sessions.
            </p>
          </Section>
        </div>
      </div>

 
      <div className="mt-8 px-4">
        <h2 className={`${textColor} text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5`}>
          Meet the Creator
        </h2>
        <div className="flex items-center py-3 justify-start gap-4">
          <div className="overflow-visible">
            <img
              src="programmer.png"
              alt="Creator of SwitchX"
              className={`w-20 h-20 rounded-full object-cover ${borderColor} border-4`}
            />
          </div>
          <div className="flex flex-col">
            <p className={`${textColor} font-bold`}>Venkat</p>
            <p className={`${secondaryTextColor}`}>Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  textColor: string;
  secondaryTextColor: string;
}

const Section: React.FC<SectionProps> = ({ title, children, textColor, secondaryTextColor }) => (
  <div className="my-6">
    <h3 className={`${textColor} text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3`}>{title}</h3>
    <div className={`${secondaryTextColor} text-base font-normal leading-normal`}>{children}</div>
  </div>
);

export default About;
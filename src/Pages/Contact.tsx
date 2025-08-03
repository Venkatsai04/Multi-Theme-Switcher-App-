
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const Contact = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  // Derive colors from the Redux state
  let textColor = 'text-[#121417]';
  let placeholderColor = 'placeholder:text-[#677583]';
  let inputBorderColor = 'border-[#dde0e4]';
  let inputBgColor = 'bg-white';
  let secondaryTextColor = 'text-[#677583]';


  if (currentTheme === 'Dark') {
    textColor = 'text-white';
    secondaryTextColor = 'text-gray-400';
    placeholderColor = 'placeholder:text-gray-500';
    inputBorderColor = 'border-gray-500';
    inputBgColor = 'bg-[#000027]';
  } else if (currentTheme === 'Modern') {
    textColor = 'text-black';
    secondaryTextColor = 'text-gray-600';
    placeholderColor = 'placeholder:text-gray-600';
    inputBorderColor = 'border-black';
    inputBgColor = 'bg-[#ffde22]';
  
  }

  return (
    <div>
      <div>
       
        <h2 className={`${textColor} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
          Contact Us
        </h2>
        <p className={`${textColor} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
          We're here to help! Reach out to us with any questions or feedback.
        </p>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          <div className={`col-span-2 grid grid-cols-subgrid border-t ${inputBorderColor} py-5`}>
            <p className={`${secondaryTextColor} text-sm font-normal leading-normal`}>Email</p>
            <p className={`${textColor} text-sm font-normal leading-normal`}>saik87630@gmail.com</p>
          </div>
          <div className={`col-span-2 grid grid-cols-subgrid border-t ${inputBorderColor} py-5`}>
            <p className={`${secondaryTextColor} text-sm font-normal leading-normal`}>Phone</p>
            <p className={`${textColor} text-sm font-normal leading-normal`}>+91 9010471180</p>
          </div>
          <div className={`col-span-2 grid grid-cols-subgrid border-t ${inputBorderColor} py-5`}>
            <p className={`${secondaryTextColor} text-sm font-normal leading-normal`}>Address</p>
            <p className={`${textColor} text-sm font-normal leading-normal`}>Hyderabad, India</p>
          </div>
        </div>
        <h2 className={`${textColor} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
          Send us a message
        </h2>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className={`${textColor} text-base font-medium leading-normal pb-2`}>Your Name</p>
            <input
              placeholder="Enter your name"
              className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl ${textColor} focus:outline-0 focus:ring-0 border ${inputBorderColor} ${inputBgColor} focus:${inputBorderColor} h-14 ${placeholderColor} p-[15px] text-base font-normal leading-normal`}
              type='text'
            
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className={`${textColor} text-base font-medium leading-normal pb-2`}>Your Email</p>
            <input
              placeholder="Enter your email"
              className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl ${textColor} focus:outline-0 focus:ring-0 border ${inputBorderColor} ${inputBgColor} focus:${inputBorderColor} h-14 ${placeholderColor} p-[15px] text-base font-normal leading-normal`}
             
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className={`${textColor} text-base font-medium leading-normal pb-2`}>Message</p>
            <textarea
              placeholder="Enter your message"
              className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl ${textColor} focus:outline-0 focus:ring-0 border ${inputBorderColor} ${inputBgColor} focus:${inputBorderColor} min-h-36 ${placeholderColor} p-[15px] text-base font-normal leading-normal`}
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#357dc9] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Send Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
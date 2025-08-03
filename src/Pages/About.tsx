import React from "react";

const About: React.FC = () => {
  return (
   <div>
    
     <div
      className="relative flex min-h-screen flex-col bg-white justify-between overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
            Acme Co.
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#121417] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#121417]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48..." />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <Section title="About">
          Acme Co. is a leading provider of innovative solutions, dedicated to enhancing user experiences and driving positive change. Our mission is to empower individuals and businesses through cutting-edge technology and exceptional service.
        </Section>

        <Section title="Our Story">
          Founded in 2010, Acme Co. began as a small startup with a big vision. Over the years, we've grown into a global company, serving millions of users worldwide. Our journey has been marked by continuous innovation, a commitment to quality, and a passion for making a difference.
        </Section>

        <Section title="Meet the Team">
          <div className="flex items-center px-4 py-3 justify-start gap-2">
            {[
              "sample.png",
              "sample.png",
              "sample.png",
            ].map((url, i) => (
              <div key={i} className="overflow-visible w-11">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover border-white bg-[#f1f2f4] text-[#677583] rounded-full flex items-center justify-center size-11 border-4"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              </div>
            ))}
          </div>
        </Section>
      </div>

     
    </div>
   </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <>
    <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{title}</h2>
    <p className="text-[#121417] text-base font-normal leading-normal pb-3 pt-1 px-4">{children}</p>
  </>
);

export default About;

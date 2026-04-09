


import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const floatStyle = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-juggle {
    animation: float 4s ease-in-out infinite;
  }
`;



const FeatureCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [specialIdx, setSpecialIdx] = useState(0);
  
  const hasSpecial = item.sections && item.sections.length > 0;
  const isEven = item.id % 2 === 0;

  const handleNext = (e) => {
    e.stopPropagation();
    setSpecialIdx((prev) => (prev + 1) % item.sections.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSpecialIdx((prev) => (prev - 1 + item.sections.length) % item.sections.length);
  };


   const notchMask = {
    maskImage: 'radial-gradient(circle at 0% 50%, transparent 44px, black 45px), radial-gradient(circle at 100% 50%, transparent 44px, black 45px)',
    WebkitMaskImage: 'radial-gradient(circle at 0% 50%, transparent 44px, black 45px), radial-gradient(circle at 100% 50%, transparent 44px, black 45px)',
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  };



  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSpecialIdx(0);
      }}
      className={`relative w-full h-75 rounded-[50px] overflow-visible transition-all duration-500 cursor-pointer 
        ${item.bgColor} ${isHovered ? 'shadow-2xl' : 'shadow-md'}`}
    >
      <style>{floatStyle}</style>


      <div
        className={`absolute inset-0 p-10 flex flex-col sm:flex-row transition-all duration-700 ease-in-out overflow-hidden
          ${isHovered && hasSpecial ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
          ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
      >
        <div className="w-full sm:w-1/2 flex items-end justify-center relative">
          <img
            src={item.image}
            alt={item.title}
            className={`w-[140%] max-w-none h-[300px] object-contain animate-juggle 
              ${isEven ? '-mr-32' : '-ml-32'} -mb-16`}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col  justify-center text-right text-white space-y-4">
            <h2 className="text-3xl -ml-16  font-bold w-[120%] drop-shadow-sm">{item.title}</h2>
             <h4 className="text-lg -ml-8  font-semibold opacity-95">
          {item.subtitle}
        </h4>
            <p className="text-sm -ml-6 text-semibold ">{item.description}</p>
        </div>  


      </div>

      {hasSpecial && (
       
       <div
          className={`absolute inset-0 overflow-seen transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
            ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >


    <div
          className={`absolute inset-0 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) z-10
            ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
        
          <div className={`absolute inset-0 ${item.bgColor} rounded-[50px]`} style={notchMask} />


<button
  onClick={handlePrev}
  className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-30 
    w-16 h-16 text-black bg-white rounded-full 
    flex items-center justify-center 
    shadow-xl hover:scale-110  
    transition-all duration-300"
>
  <ArrowLeft className="w-6 h-6" strokeWidth={3} />
</button>


<button
  onClick={handleNext}
  className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-30 
    w-16 h-16 bg-white text-black rounded-full 
    flex items-center justify-center 
    shadow-xl hover:scale-110 
    transition-all duration-300"
>
  <ArrowRight className="w-6 h-6" strokeWidth={3} />
</button>

              {item.sections.map((sec, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center transition-opacity duration-500
                ${specialIdx === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className='flex w-full items-center px-12 text-white'>
                <div className="w-full relative -ml-16">
                  <img src={sec.image || item.image} className="w-[180%] h-[180%]  animate-juggle" alt="" />
                
                </div>
               
                <div className="w-1/2 pl-4"> 
                  <p className="text-xl -mt-28 font-black ">{sec.text}</p>
                </div>
          
              </div>


            </div> 
          ))}

          
     
        </div>
        </div>

      )}



    </div>
  );
};

export default FeatureCard;
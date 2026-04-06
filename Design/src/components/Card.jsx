import React from 'react';
import { MoveRight } from 'lucide-react'; 

const Card = ({ item }) => {
  // Logic to determine if image should be on the left or right
  const isEven = item.id % 2 === 0;

  return (
    <div
      className={`
        relative w-full  rounded-[40px] p-4 mt-0 pt-0 flex flex-col sm:flex-row transition-all duration-500 cursor-pointer group
        hover:shadow-2xl hover:-translate-y-2
        ${item.bgColor} 
        ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'}
      `}
    >
   
      <div className="w-full sm:w-1/2 flex items-end justify-center">
        <img
          src={item.image}
          alt={item.title}
          className={`w-lg h-[120%]  ${isEven ? '-mr-40  ' : '-ml-40'}  -mb-16  relative  transition-transform duration-500 group-hover:scale-110`}
        />
      </div>

      <div className="w-full mt-4 sm:w-1/2 flex flex-col justify-center text-white space-y-2 px-0">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl w-[120%] md:text-3xl font-bold ">
            {item.title}
          </h2>
        
        </div>

        <h4 className="text-lg font-semibold opacity-95">
          {item.subtitle}
        </h4>

        <p className="text-sm opacity-80 font-light">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
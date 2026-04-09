import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CourseSectionPage = () => {
  const [active, setActive] = useState(0);

  const cards = [
    {
      title: "All Courses",
      count: "23",
      desc: "Courses you're powering through right now.",
    },
    {
      title: "Upcoming Courses",
      count: "05",
      desc: "Exciting new courses waiting to boost your skills.",
    },
    {
      title: "Ongoing Courses",
      count: "10",
      desc: "Currently happening—don’t miss out on the action!",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Dive Into <span className="text-[#00A86B]">What's Hot 🔥</span>
        </h1>
      </div>

    
      <div className="flex gap-4">
        {cards.map((card, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`rounded-3xl pt-6 text-white relative cursor-pointer overflow-hidden h-105 flex flex-col transition-all duration-500
                ${isActive ? "bg-[#C33241]" : " opacity-70 bg-red-100 text-[#C33241]"}
              `}
              style={{
                flex: isActive ? "2" : "1", 
              }}
            >
              
            
              {isActive && (
                <div className="absolute right-6 top-8">
                  <button className="flex items-center gap-2 text-sm">
                    View {card.title} <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {isActive && (
              <div className="flex items-center gap-6 px-6 ml-8 mt-16">
                <img src="/React.png" className="w-20 rounded-md h-20 rotate-[15deg]" />
                <img src="/tags.png" className="w-20 h-20 rotate-[8deg]" />
                <img src="/vue.png" className="w-20 h-20 -rotate-15" />
                <img src="/pin.png" className="w-24 h-24 rotate-10" />
              </div>
              )}

                <div className={`h-full pb-6 flex
                 ${ isActive ? "flex-row gap-0 items-end justify-center -mt-20" : 
                  "flex-col-reverse justify-between items-center text-red-700 mt-12 " }`}>
           <div flex="1" className={`flex items-center gap-0 transition-all duration-500 ${isActive ? "":""}`}>
             <h2 className="text-9xl font-black tracking-tighter">
              {card.count}</h2>
              <p className= {` text-7xl font-bold  ${isActive? "-mt-24":"-mt-16"} `} >+</p>
             </div>
             <div className={`transition-all mb-6 duration-500 ${isActive ? "max-w-[50%]" : "-rotate-90 "}`}>
              <p className={`${isActive ? "text-3xl font-bold -mt-10":"text-4xl font-bold " }`}>
                {card.title}</p>
               <p className={`text-xl opacity-80 mt-2  leading-tight #{isActive ? "" : " "}`}>{card.desc}</p>
             </div>
           </div>

     

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSectionPage;
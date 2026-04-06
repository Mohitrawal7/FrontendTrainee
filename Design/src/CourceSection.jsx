import { ArrowRight } from 'lucide-react';
import VerticalCard from './components/VerticalCard';

const CourseSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans bg-white">
      <div className="mb-10 text-center md:text-left">
        <p className="text-gray-500 text-sm mb-4">Note: Click the cards to view the animation</p>
        <p className="text-gray-600 font-medium">Explore our classes and master trending skills!</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
          Dive Into <span className="text-[#00A86B]">What's Hot Right Now! 🔥</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-13 gap-4 max-h-20 w-[90%] mx-auto -ml-2">
        
      
        <div 
          className="md:col-span-6 lg:col-span-7 bg-[#C63A3D] rounded-4xl pt-8 text-white relative cursor-pointer overflow-hidden min-h-36 flex flex-col  "
        >
          <div className="flex justify-between items-center px-10 absolute right-0 -mr-4 top-4">
            <button className="flex items-center gap-2 mr-4 text-sm font-medium opacity-90 hover:opacity-100 transition-opacity">
              View all Courses <ArrowRight size={16} />
            </button>
          </div>

         
          <div className="flex items-center  gap-8 my-8 mt-13 px-16">
            <img src="src/assets/React.png" alt="Reacr" className="w-18 h-18 rounded-2xl rotate-70" />
            <img src="src/assets/tags.png" alt="tools" className="w-20 h-20 rotate-10" />
            <img src="src/assets/vue.png" alt="Vue" className="w-20 h-20 -rotate-20"  />
            <img src="src/assets/pin.png" alt="pins" className="w-20 h-20 rotate-10" />
          </div>

          <div className="flex items-center ml-10 mb-10 gap-4 mt-auto">
            <h2 className="text-9xl font-black tracking-tighter">23<span className="text-4xl align-top">+</span></h2>
            <div>
              <p className="text-3xl font-bold">All Courses</p>
              <p className="text-xl opacity-80 leading-tight">courses you're powering <br/> through right now.</p>
            </div>
          </div>
        </div>




        <VerticalCard 
          count="05" 
          title1="Upcoming"
          title2="Courses"
          desc1="exciting new courses "
          desc2=" waiting to boost your skills." 
        />

       
        <VerticalCard 
          count="10" 
          title1="Ongoing"
          title2="Courses"
          desc1="currently happening—don't"
          desc2="miss out on the action!" 
        />

      </div>
    </div>
  );
};



export default CourseSection;
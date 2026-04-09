import cardData from "../data";
import FeatureCard from "../components/FeatureCard";

function FeatureSectionPage() {

   return (
    <>
    <div className="min-h-screen bg-white p-8 font-sans">
    
       <div className="max-w-6xl mx-auto mb-12">
         <p className="text-gray-600 text-sm mb-4">

         </p>
         <h3 className="text-gray-500 font-medium mb-2">Your SkillShikshya Journey</h3>
         <h1 className="text-4xl font-extrabold flex items-center gap-2">
           <span className="text-[#00A86B]">Step In.</span>
           <span className="text-[#2C3E50]">Skill Up.</span>
           <span className="text-[#00A86B]">Stand Out. 🚀</span>
         </h1>
       </div>
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardData.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default FeatureSectionPage;
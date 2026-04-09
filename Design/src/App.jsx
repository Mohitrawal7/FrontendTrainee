import './App.css'
import data from './data'
import { ArrowRight } from "lucide-react"
import Card from './components/Card'
import CourseSection from './CourceSection'

function App() {

  return (
    <>
    
    <div className="min-h-screen bg-white p-8 font-sans">
    
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-gray-600 text-sm mb-4">
          Note: Hover the component to view the animation & Click the arrow icon
        </p>
        <h3 className="text-gray-500 font-medium mb-2">Your SkillShikshya Journey</h3>
        <h1 className="text-4xl font-extrabold flex items-center gap-2">
          <span className="text-[#00A86B]">Step In.</span>
          <span className="text-[#2C3E50]">Skill Up.</span>
          <span className="text-[#00A86B]">Stand Out. 🚀</span>
        </h1>
      </div>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
           {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      </div>
    </div>
 
<CourseSection />

    </>
  )
}

export default App

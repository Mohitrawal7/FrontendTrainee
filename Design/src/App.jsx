

import './App.css'
import data from './data'

function App() {

  return (
    <>
      <section id="center">
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

<p>Data small check</p>
<div className="flex justify-center items-center gap-4 text-black">
{data.map((item) => (
  <div key={item.id} className={` w-[48%] bg-green-500 p-4 m-4 rounded-lg text-white flex ${item.illustrationAlign === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center`}>
    <h2>{item.title}</h2>
    <p>{item.subtitle}</p>
    <p>{item.description}</p>
    <img src={item.image} alt={item.title} />
  </div>
))}
</div>



       </section>
    </>
  )
}

export default App

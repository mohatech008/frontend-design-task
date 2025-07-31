import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
export default function HOME(){
  return(
    <main className="bg-[#F2F2F2]">
      <div className="bg-white">
      <Navbar/>
      <Hero/>
      </div>
    </main>
  )
}
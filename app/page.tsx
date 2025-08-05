import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import StatsBar from './Components/SuccessMetrics';
import AchieveMastery from './Components/AchieveMastery';
import CoursesSection from './Components/CourseSection';
import MentorsSection from './Components/MentorSection';
import TestimonialsSection from './Components/TestimonialSection';
import PricingSection from './Components/PricingSection';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
export default function HOME(){
  return(
    <main className="bg-[#F2F2F2]">
      <div className="bg-white">
      <Navbar/>
      <Hero/>
      <StatsBar/>
      <AchieveMastery/>
      <CoursesSection/>
      <MentorsSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <Newsletter/>
      <Footer/>
      </div>
      
    </main>
  )
}
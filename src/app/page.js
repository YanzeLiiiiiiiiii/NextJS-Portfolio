import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Nav/Navbar'
import About from '@/components/About/About'
import ProjectSection from '@/components/Project-Section/ProjectSection';
import EmailSection from '@/components/Email/EmailSection'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className=' container mx-auto py-14 px-12' >
        <Navbar />
        <HeroSection />
        <About />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer></Footer>
    </main>
  );
}

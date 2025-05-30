import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid"
import { navItems } from "@/data";
import RecentProject from "@/components/RecentProjects"
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   < main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
              <FloatingNav className="" navItems={navItems}/>
             <Hero />
             <Grid/>
            <RecentProject/>
            <Experience />
            <Approach/> 
            <Footer/>
      </div>
      </main>
  );
}

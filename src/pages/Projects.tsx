import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const projects = [
  {
    year: '2024',
    title: 'Cooked',
    description: 'AI platform to create Games from PDF.',
    video: '/dev/cooked.mp4',
  },
  {
    year: '2024',
    title: 'Compliance Guru',
    description: 'AI-powered compliance platform ',
    video: '/dev/Compliance_Guru.mp4',
  },
  {
    year: '2024',
    title: 'Pluck',
    description: 'Platform Connecting Small Business to MicroInfluencer',
    video: '/dev/Pluck.mp4',
  },
  {
    year: '2024',
    title: 'BestyAI - Redesign',
    description: 'Redesigned Website for BestyAI',
    video: '/dev/BestyAI.mp4',
  },
  {
    year: '2024',
    title: 'Service Performance Dashboard',
    description: 'Dashboard to monitor performance of applications',
    video: '/dev/Service_Performance.mp4',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-[1200px]">
        <div className="space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col space-y-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  {project.year && (
                    <span className="text-gray-600 text-lg block">
                      {project.year}
                    </span>
                  )}
                  <h2 className="text-6xl font-medium tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full text-sm px-6 py-2 h-auto border hover:bg-transparent hover:text-black transition-colors"
                  >
                    View
                  </Button>
                </div>
                <div>
                  {project.video ? (
                    <div className="rounded-lg shadow-lg bg-white">
                      <video
                        src={project.video}
                        className="rounded-lg w-full h-auto object-cover max-h-[700px]"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  ) : (
                    <img
                      // src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full h-auto object-cover shadow-xl max-h-[500px]"
                    />
                  )}
                </div>
              </div>
              {index !== projects.length - 1 && (
                <div className="w-full border-t border-gray-100" />
              )}
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

interface Project {
  year: string;
  title: string;
  description: string;
  video: string;
}

const projects: Project[] = [
  {
    year: '2024',
    title: 'Cooked',
    description:
      'Cooked is an innovative AI-powered platform that transforms PDFs or text inputs into engaging and interactive games like flashcards, crosswords, and more. Built using Next.js, TypeScript, Schadcn UI, Tailwind CSS, and integrated with OpenAI API, Cooked offers a gamified approach to learning, helping users to better understand complex topics in an enjoyable way.',
    video: '/dev/cooked.mp4',
  },
  {
    year: '2024',
    title: 'Compliance Guru',
    description:
      'Compliance Guru is a cutting-edge AI-powered platform designed to simplify and automate the compliance process for businesses. Using Next.js, TypeScript, Tailwind CSS, Schadcn UI, and Supabase, the platform enables businesses to stay ahead of regulations with real-time updates, automated checks, and comprehensive reporting, all while offering an intuitive user experience.',
    video: '/dev/Compliance_Guru.mp4',
  },
  {
    year: '2024',
    title: 'Pluck',
    description:
      'Pluck is a platform that connects small businesses with micro-influencers to create authentic and engaging content. Built using Next.js, TypeScript, Tailwind CSS, Schadcn UI, and Supabase, Pluck facilitates seamless campaign creation and influencer engagement, providing businesses with powerful tools to enhance their online presence while offering influencers rewarding opportunities.',
    video: '/dev/Pluck.mp4',
  },
  {
    year: '2024',
    title: 'BestyAI - Redesign',
    description:
      'The BestyAI website redesign project focuses on enhancing the user experience for short-term rental property managers. Using Next.js, TypeScript, Tailwind CSS, and Schadcn UI, the new design improves navigation, accessibility, and overall aesthetics while maintaining the core AI-driven features of the platform. Integrated with OpenAI and Claude APIs, the platform provides efficient communication and management tools for property managers.',
    video: '/dev/BestyAI.mp4',
  },
  {
    year: '2024',
    title: 'Service Performance Dashboard',
    description:
      'The Service Performance Dashboard is a powerful tool for monitoring and analyzing the performance of applications. Built with Next.js, TypeScript, Supabase,  Schadcn UI, and Tailwind CSS, the dashboard offers real-time analytics, visualizations, and detailed insights, helping developers and system administrators optimize their applications and ensure high availability and reliability.',
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  {project.year && (
                    <span className="text-gray-600 text-lg block">
                      {project.year}
                    </span>
                  )}
                  <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full text-sm px-6 py-2 h-auto border hover:bg-transparent hover:text-black transition-colors mt-4"
                  >
                    View
                  </Button>
                </div>
                <div className="w-full h-auto">
                  {project.video ? (
                    <div className="rounded-lg shadow-lg bg-white overflow-hidden">
                      <video
                        src={project.video}
                        className="rounded-lg w-full h-full object-cover max-h-[500px]"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  ) : (
                    <img
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

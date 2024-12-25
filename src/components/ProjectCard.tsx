import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface ProjectCardProps {
  year?: string; // Made year optional by adding ?
  title: string;
  description: string;
  image?: string;
  quote?: string;
}

export default function ProjectCard({ year, title, description, image, quote }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
    >
      <div>
        {year && <span className="text-gray-600 block mb-4">{year}</span>}
        <h2 className="text-3xl mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button variant="outline" className="rounded-full">
          View
        </Button>
      </div>
      {image ? (
        <div className="aspect-video rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : quote ? (
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-lg">{quote}</p>
        </div>
      ) : null}
    </motion.div>
  );
}
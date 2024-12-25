import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const thoughts = [
  {
    title: "Show Up",
    subtitle: "Take initiative without waiting.",
    quote: "One of the most powerful forces in shaping your life isn't talent, or money, or connections, but simply showing up. By \"showing up,\" I mean putting yourself in situations where interesting things can happen, even—or especially—when you're not explicitly invited. Most people don't do this. They wait for invitations, for permission, for someone to tell them it's okay to be somewhere or do something..."
  },
  {
    title: "Observing is Art",
    subtitle: "The art of seeing deeply.",
    quote: "We're all born artists. As children, we look at the world with wonder and curiosity, observing with keen interest and marveling at the simplest things. Our childlike wonder drives us to create: we draw stick figures that represent entire worlds, build castles from blankets and chairs, and weave elaborate stories from the simplest prompts. In essence, we're natural observers and creators."
  }
];

export default function Thoughts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-16 max-w-6xl"
      >
        <div className="space-y-24">
          {thoughts.map((thought, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold tracking-tight">{thought.title}</h2>
                <p className="text-xl text-gray-600">{thought.subtitle}</p>
                <Button variant="ghost" className="hover:bg-gray-100 mt-4">
                  <Link to="#" className="text-gray-600">View</Link>
                </Button>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <p className="text-lg leading-relaxed text-gray-800">"{thought.quote}"</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 flex justify-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-black transition-colors">About</Link>
        <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</Link>
        <Link to="/experience" className="text-gray-600 hover:text-black transition-colors">Experience</Link>
        <Link to="/interests" className="text-gray-600 hover:text-black transition-colors">Interests</Link>
        <Link to="/thoughts" className="text-gray-600 hover:text-black transition-colors">Thoughts</Link>
      </div>
    </motion.nav>
  );
}
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-16 bg-secondary"
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-[700px]">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <p className="text-lg text-muted-foreground">
            I'm a software engineer focused on building products that combine beautiful design with efficient functionality. Currently working on innovative solutions that push the boundaries of web technology.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
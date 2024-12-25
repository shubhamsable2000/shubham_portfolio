import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32 md:py-48"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal max-w-[1000px] leading-tight">
          Hi, I'm Shubham — a Full Stack Developer with 5 YOE. I am passionate
          about building technology that makes a meaningful impact on people's
          lives.
        </h1>
      </div>
    </motion.section>
  );
}

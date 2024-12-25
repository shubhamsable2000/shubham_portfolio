import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="py-12 border-t"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Shubham Sable. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://x.com/shubhamsablee"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter size={20} />
            </a>

            <a
              href="https://github.com/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sableshubham/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

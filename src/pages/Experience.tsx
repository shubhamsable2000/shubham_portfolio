import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const experiences = [
  {
    year: 'Jan 2024 - September 2024',
    title: 'Software Engineer Intern @ Mueshi Inc.',
    description:
      'As part of the founding team, redesigned and rebuilt the website, developed React dashboards, led a 3-person team to create a Shopify app, and leveraged Supabase, MySQL, and GraphQL. Integrated Stripe to improve user engagement, streamline data access, and ensure payment reliability',
  },
  {
    year: 'Jan 2023',
    title: 'Buildspace',
    description: '6 week school to build your ideas.',
  },

  {
    year: 'March 2020 - June 2022',
    title: 'Software Engineer @ Vertscend Automation ',
    description:
      'Led the development of a web platform for 100k+ users, building SPAs with React, Node.js, and TypeScript, integrating RESTful and GraphQL APIs with Stripe and PayPal, and creating internal management tools to streamline operations and support $1M+ in monthly transactions.',
  },
  {
    year: 'January 2019 - November 2019',
    title: 'Full Stack Engineer Intern @ Skketchboard Insol LLC',
    description:
      'Developed websites with React, mobile apps with React Native and Swift, and optimized MySQL and SQLite databases to enhance user experience, performance, and server efficiency.',
  },
  {
    year: 'April 2018 - August 2020',
    title: 'Founder @ Marketing Benz',
    description:
      'Founded a media company serving finance, healthcare, and B2B clients; led a 7-member team to design and deploy custom websites, managed marketing strategies to drive client engagement, secured contracts with 3 major clients, and increased revenue to $10,000',
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl mb-12">Experience</h1>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-gray-100 py-8"
            >
              <span className="text-gray-600 block mb-2">{exp.year}</span>
              <h2 className="text-2xl mb-2">{exp.title}</h2>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

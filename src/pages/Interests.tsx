import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const interests = [
  {
    title: 'Reading',
    description:
      'I enjoy reading psychology and spirituality books, which help me explore human behavior and personal growth.',
    image: '/dev/book.jpg',
  },
  {
    title: 'Podcasts',
    description: 'I get to be a part of interesting conversations.',
    image: '/dev/podcast.jpeg',
  },
  {
    title: 'Cooking',
    description:
      'I was forced to cook when I moved in to my university and found joy in the foods of my labor.(images used are from internet not mine)',
    image: '/dev/food.jpg',
  },
];

export default function Interests() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="space-y-32">
          {' '}
          {/* Increased spacing between sections */}
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {interest.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
              {interest.image && (
                <div className="w-full md:w-1/2">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className="rounded-lg w-full h-auto object-cover shadow-lg"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-50"
      id="About"
    >
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl sm:text-5xl font-extrabold mb-4 text-gray-800 text-center"
      >
        About <span className="underline underline-offset-8 decoration-blue-500">Our Brand</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-gray-600 max-w-2xl text-center mb-12 text-lg"
      >
        Passionate About Properties, Dedicated To Your Vision
      </motion.p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Image Section */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          src={assets.brand_img}
          alt="Our Brand"
          className="w-full sm:w-1/2 max-w-lg rounded-xl shadow-lg"
        />

        {/* Stats and Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center md:items-start mt-10 text-gray-700"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 w-full mb-8">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-blue-600">12+</p>
              <p className="text-sm font-medium">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-blue-600">20+</p>
              <p className="text-sm font-medium">Mn. S.Ft. Delivered</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-blue-600">25+</p>
              <p className="text-sm font-medium">Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <p className="my-8 max-w-lg text-center md:text-left text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

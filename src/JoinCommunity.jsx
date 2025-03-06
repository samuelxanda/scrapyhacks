import { motion } from "framer-motion";

export default function JoinCommunity() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-center">
        <div className="bg-gray-700 p-6 rounded-xl text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-90 hover:shadow-2xl bg-pink/10 backdrop-blur-md border border-white/10  "
            >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Join the <span className="text-pink">Youth Innovators Hub</span> Community
        </h2>
        <p className="text-yellow-200 mb-8 text-lg">
          Be part of a growing community of young innovators passionate about coding, problem-solving, and making a real-world impact.
        </p>
        <motion.a
          href="https://bit.ly/youthinnovatorshub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink inline-block bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.a>
      </motion.div></div>
    </section>
  );
}

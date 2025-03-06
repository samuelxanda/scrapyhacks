import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode; // Allowing JSX as answer
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is the Scrapyard Hackathon?",
      answer:
        "The Scrapyard Hackathon is an exciting coding event where young innovators come together to solve real-world challenges through technology. It’s a great opportunity to collaborate, learn, and build something amazing!"
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone passionate about coding, problem-solving, and innovation can join. Whether you're a beginner or an experienced developer, this hackathon is for you!"
    },
    {
      question: "What should I bring?",
      answer:
        "You should bring a laptop, charger, and any additional accessories you may need. We'll provide food and transport, so you just need to focus on coding and collaborating!"
    },
    {
      question: "How long does the hackathon last?",
      answer:
        "The Scrapyard Hackathon is a 12-hour event, filled with coding, collaboration, and fun challenges. There will be scheduled breaks, meals, and networking opportunities."
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "Not at all! The event is designed to be beginner-friendly. We’ll have mentors and resources available to help you throughout the hackathon."
    },
    {
      question: "Will food and transport be provided?",
      answer:
        "Yes! We will cover both food and transport, ensuring you have everything you need to focus on the hackathon."
    },
    {
      question: "How can I contact the organizers?",
      answer: (
        <>
          If you have any questions or need more information, feel free to email us at{" "}
          <a href="mailto:youthinnovatorhub@gmail.com" className="text-moonblossom font-bold">
            youthinnovatorshub@gmail.com
          </a> or message us on{" "}
          <a
            href="https://wa.me/250791845268"
            target="_blank"
            rel="noopener noreferrer"
            className="text-moonblossom font-bold"
          >
            WhatsApp
          </a>
        </>
      )
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-moonblossom mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-xl text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10"
            >
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg text-yellow-200 transition-all duration-300 ease-in-out hover:text-yellow-400"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <div
                className={`transition-all duration-500 overflow-hidden ${activeIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-yellow-100">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

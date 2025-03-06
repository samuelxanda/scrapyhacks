
import React from 'react';
import FAQ from './FAQ';
import { FaWhatsapp } from "react-icons/fa"; 
import Countdown from './Countdown';
import JoinCommunity from './JoinCommunity';
import { Calendar, Clock, MapPin, Users, Code, Brain, Target, Rocket, Building2, Handshake, Mail, Phone, MapPinned, Github, Twitter, Instagram,MessageCircle , Zap, Cpu, Sparkles } from 'lucide-react';

function App() {

  const targetDate = '2025-03-14T05:00:00';

  const sponsors = [
  { name: "ALX", logo: "https://www.alxafrica.com/wp-content/uploads/2023/12/logo-black.svg" },
  { name: "Solvit Africa", logo: "data:image/png;base64,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" },
  { name: "Natcom", logo: "https://www.natcomservice.com/wp-content/uploads/2019/06/N@tcom-Logo.png" },
  { name: "BK Techouse", logo: "https://www.bktechouse.rw/images/logo.svg" },
  { name: "YIHub", logo: "/yihub.png" },
  ];
  
  const schedule = [
    { time: "8:00 AM - 8:30 AM", activity: "Check-in & Registration" },
    { time: "8:30 AM - 9:00 AM", activity: "Opening Ceremony & Keynote" },
    { time: "9:00 AM - 9:30 AM", activity: "Team Formation & Idea Pitches" },
    { time: "9:30 AM - 12:30 PM", activity: "Hacking Session #1" },
    { time: "12:30 PM - 1:30 PM", activity: "Lunch Break" },
    { time: "1:30 PM - 4:30 PM", activity: "Hacking Session #2" },
    { time: "4:30 PM - 5:00 PM", activity: "Project Submission" },
    { time: "5:00 PM - 5:30 PM", activity: "Demo & Presentations" },
    { time: "5:30 PM - 6:00 PM", activity: "Judging & Awards Ceremony" },
    { time: "6:00 PM", activity: "Closing & Networking" },
  ];
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      
      <div className="gradient-bg text-white min-h-screen relative">
      <div>
      <Countdown targetDate={targetDate} />
    </div>
        {/* Add floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Zap className="absolute top-20 left-[10%] w-12 h-12 text-yellow/10 floating-particle" style={{ animationDelay: '0s' }} />
          <Cpu className="absolute top-40 right-[15%] w-16 h-16 text-blue/10 floating-particle" style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute bottom-32 left-[20%] w-14 h-14 text-pink/10 floating-particle" style={{ animationDelay: '4s' }} />
        </div>
          
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="mb-8 inline-block">
              <span className="bg-white/10 text-yellow px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                March 15, 2025 • ETSK Musha, Rwamagana
              </span>
            </div>
            <h1 className="hero-title text-7xl font-bold mb-6">
              Scrapyard Hackathon 
          
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              Where young innovators build the future! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <Calendar className="w-5 h-5 text-yellow" />
                <span>12-Hour Event</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <MapPin className="w-5 h-5 text-blue" />
                <span>High School Students</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
            <a href="https://lu.ma/0w4wdilb" target="_blank" rel="noopener noreferrer">
  <button className="bg-yellow text-gray-900 font-bold py-4 px-10 rounded-xl text-xl transition-all button-bounce shadow-lg hover:shadow-xl backdrop-blur-sm">
    Register Now 🎉
  </button>
</a>  
            
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-moonblossom mb-8">What is Scrapyard? 🤔</h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed">
              Scrapyard is a beginner-friendly hackathon where high school students collaborate to build solutions to real-world problems using technology. Organized by Youth Innovators Hub (YIHub) and Coding Club, this event provides a unique opportunity for young minds to learn, innovate, and make an impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 card-hover">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Learn</h3>
                <p className="text-gray-400">Gain hands-on experience in coding and problem-solving</p>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 card-hover">
                <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Collaborate</h3>
                <p className="text-gray-400">Work in teams and build meaningful connections</p>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 card-hover">
                <div className="w-16 h-16 bg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Innovate</h3>
                <p className="text-gray-400">Create solutions that make a real impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-moonblossom mb-8">Our Mission 🎯</h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed">
              At Youth Innovators Hub, we empower high school students to solve real-world problems through technology, creativity, and collaboration. Scrapyard is designed to inspire and equip the next generation of changemakers by providing a hands-on learning experience in coding, teamwork, and innovation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 card-hover">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Problem Solving</h3>
                <p className="text-gray-400">Develop critical thinking skills through real-world challenges</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 card-hover">
                <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
                <p className="text-gray-400">Create impactful solutions using cutting-edge technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-white/40 relative   p-8 bg-gray-900/90 backdrop-blur-lg   shadow-lg overflow-hidden">
        <div className='max-w-3xl mx-auto'>
          {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

      <h2 className="text-3xl font-bold text-white text-center mb-6 relative">📅 Hackathon Schedule</h2>
      
      <ul className="space-y-4 relative">
  {schedule.map((item, index) => (
    <li
      key={index}
      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition text-white"
    >
      <span className="text-lg sm:text-2xl font-bold">{item.activity}</span>
      <span className="text-lg sm:text-2xl text-gray-300 sm:text-right">{item.time}</span>
    </li>
  ))}
</ul>

      </div>
    </div>
  
      { /*FAQ section  */}
      <FAQ/>
      <JoinCommunity/>
      

      {/* Footer */}
      <footer className="bg-[#1E293B] border-t border-white/10">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 py-16">
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Scrapyard 2025</h3>
              <p className="text-gray-400">Empowering young innovators to build solutions for tomorrow's challenges.</p>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Youth-Innovators-Hub" 
                  className="text-gray-400 hover:text-pink/100 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                
                <a href="https://www.instagram.com/youthinnovatorshub/" 
                  className="text-gray-400 hover:text-pink/100 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Instagram className="w-6 h-6" />
                </a> 
                <a
  href="https://wa.me/250791845268"
  className="text-gray-400 hover:text-pink/100 transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="w-6 h-6" />
</a> 
                        </div>
            </div>

            {/* Quick Links */}
            <div>
  <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
  <ul className="space-y-3">
    <li>
      <a 
        href="https://github.com/Youth-Innovators-Hub/scrapyhacks/blob/main/README.md" 
        className="text-gray-400 hover:text-pink transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        About Us
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/Youth-Innovators-Hub/scrapyhacks/blob/main/README.md" 
        className="text-gray-400 hover:text-pink transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Schedule
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/Youth-Innovators-Hub/scrapyhacks/blob/main/README.md" 
        className="text-gray-400 hover:text-pink transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        FAQs
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/Youth-Innovators-Hub/scrapyhacks/blob/main/README.md" 
        className="text-gray-400 hover:text-pink transition-colors" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Code of Conduct
      </a>
    </li>
  </ul>
</div>


            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5 text-pink" />
                  <a href="mailto:youthinnovatorshub@gmail.com" className="transition-colors">youthinnovatorshub@gmail.com
</a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-5 h-5 text-pink" />
                  <a href="tel:+250780000000" className="transition-colors">+250 791 845 268</a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPinned className="w-5 h-5 text-pink" />
                  <span>ETSK Musha, Rwamagana</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-8 text-center">
            <p className="text-gray-400">
              © 2025 YIHub. All rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
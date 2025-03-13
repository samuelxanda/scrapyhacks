
import FAQ from './FAQ.tsx';
import { FaWhatsapp } from "react-icons/fa"; 
import Countdown from './Countdown.tsx';
import JoinCommunity from './JoinCommunity';
import './index.css'
import { Calendar, MapPin, Users, Code, Brain, Target, Rocket, Mail, Phone, MapPinned, Github, Instagram , Zap, Cpu, Sparkles, Handshake,Building2 } from 'lucide-react';

function App() {

  const targetDate = '2025-03-15T07:00:00'; // Change this to your event date
  
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

  const sponsors = [
  { name: "ALX", logo: "/ALX-White-Logo.png" },
    { name: "Natcom", logo: "https://www.natcomservice.com/wp-content/uploads/2019/06/N@tcom-Logo.png" },
  
    
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
      <JoinCommunity />
      
      {/* Sponsors & Partners Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-moonblossom mb-8">Sponsors & Partners 🤝</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
           <div>
    <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
      <Building2 className="w-8 h-8 text-blue" />
    </div>
    <h3 className="text-2xl font-bold mb-6 text-white">Our Sponsors</h3>
    
    <div className="grid grid-cols-2 gap-8">
      {sponsors.map((sponsor, index) => (
        <div 
          key={index} 
          className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 card-hover flex items-center justify-center min-h-[120px]"
        >
          {sponsor.logo ? (
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="h-13 w-auto" />
            
          ) : (
            <p className="text-gray-400">Sponsor Logo</p>
          )}
        </div>
      ))}
    </div>
  </div>
              <div>
                <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Our Partners</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 card-hover flex items-center justify-center min-h-[120px]">
                    <img src="yihub.png" alt="Logo" className="w-32 h-auto mx-auto" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 card-hover flex items-center justify-center min-h-[120px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTNK1vOeTGXq03Z6xemdihER14jOlR1tM_hQKM5b8kw&s" alt="Logo" className="w-32 h-auto mx-auto" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      

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
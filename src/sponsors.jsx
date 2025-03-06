
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
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="h-12" />
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
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 mb-8">
                Interested in becoming a sponsor or partner? Join us in empowering the next generation of innovators! 🌟
              </p>
              <button className="bg-moonblossom text-white font-bold py-4 px-10 rounded-xl text-xl transition-all button-bounce shadow-lg hover:shadow-xl">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
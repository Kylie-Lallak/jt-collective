import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20 overflow-hidden">
      {/* Dark Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e2a] via-[#3d5239] to-[#1f2e1d]"></div>
      
      {/* Layered Grid Patterns */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      ></div>
      
      {/* Secondary Grid Layer */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 2px, transparent 2px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Radial Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1a2618] opacity-60"></div>
      
      {/* Accent Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5a7556] rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4a6446] rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-[#a8c5a3] text-sm tracking-wider uppercase">Financial Asset Recovery</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight tracking-tight">
              JT Collective
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#a8c5a3] mb-8 italic">
            Recovering What's Rightfully Yours
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#a8c5a3]"></div>
            <div className="w-2 h-2 bg-[#a8c5a3] rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#a8c5a3]"></div>
          </div>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl ml-20 mr-20">
            We help people uncover and reclaim money that was set aside in their name and simply forgotten over time.
          </p>
          
          <p className="text-base md:text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-white text-[#2d3e2a] rounded-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d3e2a] flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
            >
              See If You're Owed Money
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/30 backdrop-blur-sm rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2d3e2a] w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl text-white mb-2">$0</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Upfront Cost</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-white mb-2">100%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Transparent Process</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-white mb-2">✓</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">No Obligation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
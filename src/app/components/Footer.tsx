import { Globe } from 'lucide-react';
import Logo from '../../assets/JTHor.png';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <img src={Logo} className='w-80'/>
            </div>
            <p className="text-gray-600 italic">
         
            </p>
          </div>

          {/* Trust Statement */}
          <div className="md:col-span-1">
            <h4 className="text-gray-900 mb-3">Our Commitment</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Recovering what's rightfully yours with transparency, integrity, and no upfront cost. We're here to help you every step of the way.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-gray-900 mb-3">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-600 hover:text-[#5a7556] transition-colors text-sm focus:outline-none focus:text-[#5a7556]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-600 hover:text-[#5a7556] transition-colors text-sm focus:outline-none focus:text-[#5a7556]"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-600 hover:text-[#5a7556] transition-colors text-sm focus:outline-none focus:text-[#5a7556]"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} JT Collective. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="tel:651-274-8583" 
                className="text-gray-500 hover:text-[#5a7556] transition-colors text-sm focus:outline-none focus:text-[#5a7556]"
              >
                651-274-8583
              </a>
              <a 
                href="mailto:justinthomas@jtcollectivegroup.com" 
                className="text-gray-500 hover:text-[#5a7556] transition-colors text-sm focus:outline-none focus:text-[#5a7556]"
              >
                justinthomas@jtcollectivegroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
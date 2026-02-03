import { Shield, Search, CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Search,
      title: 'We Find Forgotten Funds',
      description: 'Most individuals never realize these funds exist. We help you discover money that was set aside in your name and simply forgotten over time.',
    },
    {
      icon: Shield,
      title: 'Simple & Transparent',
      description: 'We clearly explain what the asset is, guide you through the required steps, and help ensure everything is done correctly from start to finish.',
    },
    {
      icon: CheckCircle,
      title: 'No Risk, No Pressure',
      description: "There's no upfront cost, no pressure, and no obligation. We only succeed when you do.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            About JT Collective
          </h2>
          <div className="w-20 h-1 bg-[#5a7556] mx-auto mb-8"></div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            At JT Collective, we help people uncover and reclaim money that was set aside in their name and simply forgotten over time. Most individuals never realize these funds exist, or feel overwhelmed trying to navigate the process on their own.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We make it simple by clearly explaining what the asset is, guiding you through the required steps, and helping ensure everything is done correctly from start to finish. There's no upfront cost, no pressure, and no obligation — just honest support to help you get back what belongs to you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-14 h-14 bg-[#5a7556]/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-[#5a7556]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, Target, Zap } from "lucide-react";

export default function Technology() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-brand" />,
      title: "Eliminate Uneven Application",
      description: "Centimeter-level RTK positioning guarantees 100% coverage without overlaps or misses."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand" />,
      title: "Mitigate Labor Shortages",
      description: "One drone operator replaces a fleet of manual laborers, operating up to 40x faster."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      title: "Drive Down Input Costs",
      description: "Rotor wash vortex pushes chemicals deep into the canopy, reducing chemical waste by up to 30%."
    }
  ];

  return (
    <section id="technology" className="py-24 bg-tech-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image Zone */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/tech-bg.jpg" 
              alt="Agricultural Drone Technology" 
              className="w-full h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            
            {/* Callouts */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h4 className="text-white font-bold text-xl mb-2">DJI Agras Series</h4>
                <p className="text-gray-300 text-sm">Equipped with Intelligent Obstacle Sensing and advanced atomizer technology.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">Superior Technology</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-8">
              Why Drone Tech is the Future of Farming
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We understand the unique challenges of Zambian agriculture. From unpredictable weather windows to rising input costs, traditional farming methods are no longer sufficient. Our state-of-the-art drone fleet is the ultimate equalizer.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

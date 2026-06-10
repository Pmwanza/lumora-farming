import { ArrowRight, Drone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary min-h-[90vh] flex items-center">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Agricultural Drone Spraying Field"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
          Precision Agriculture. <br className="hidden md:block" />
          <span className="text-brand">Maximized Yields.</span>
        </h1>

        <p className="mt-4 text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
          Advanced drone spraying, spreading, and seeding solutions engineered for African agricultural conditions. Increase efficiency, lower costs, and protect your crops with pinpoint accuracy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-primary bg-brand hover:bg-brand-light transition-all duration-300 shadow-lg shadow-brand/25 group"
          >
            Book a Flight
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white border border-gray-600 hover:border-gray-400 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

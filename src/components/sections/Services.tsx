import { Droplets, Sprout, Leaf, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Drone Spraying",
      description: "Crop protection, precision pest control, and liquid foliar fertilizer application with micron-level droplet control.",
      icon: <Droplets className="w-8 h-8 text-brand" />,
      span: "col-span-1 md:col-span-2 lg:col-span-2 text-white bg-primary",
      headerColor: "text-white",
      descColor: "text-gray-300"
    },
    {
      title: "Drone Spreading",
      description: "Even distribution of granular fertilizer, nutrients, and solid inputs over challenging terrains.",
      icon: <Sprout className="w-8 h-8 text-brand" />,
      span: "col-span-1 md:col-span-1 lg:col-span-1 bg-tech-gray text-primary",
      headerColor: "text-primary",
      descColor: "text-gray-600"
    },
    {
      title: "Drone Seeding",
      description: "High-speed seeding for cover crops and uniform pasture establishment without soil compaction.",
      icon: <Leaf className="w-8 h-8 text-brand" />,
      span: "col-span-1 md:col-span-1 lg:col-span-1 bg-white border border-gray-100 text-primary",
      headerColor: "text-primary",
      descColor: "text-gray-600"
    },
    {
      title: "Maintenance & Repairs",
      description: "World-class local drone technical support, hardware servicing, and preventative maintenance to keep you flying.",
      icon: <Wrench className="w-8 h-8 text-brand" />,
      span: "col-span-1 md:col-span-2 lg:col-span-2 bg-tech-gray text-primary",
      headerColor: "text-primary",
      descColor: "text-gray-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">Core Services</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6">
            Engineered for the Modern Farm
          </h3>
          <p className="text-lg text-gray-600">
            Comprehensive aerial solutions designed to maximize efficiency and minimize input waste across your entire operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.span}`}
            >
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100/10">
                {service.icon}
              </div>
              <h4 className={`text-2xl font-bold mb-4 ${service.headerColor}`}>
                {service.title}
              </h4>
              <p className={`text-lg leading-relaxed ${service.descColor}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

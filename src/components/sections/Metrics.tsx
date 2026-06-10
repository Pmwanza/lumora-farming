export default function Metrics() {
  const metrics = [
    { value: "25 Ha / Hr", label: "Rapid Drone Spraying", delay: "0" },
    { value: "1,500 Kg / Hr", label: "High-Capacity Spreading", delay: "100" },
    { value: "11-Meter", label: "Wide Swath Width", delay: "200" },
    { value: "Centimeter-Level", label: "RTK GPS Precision", delay: "300" },
  ];

  return (
    <section className="bg-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-800">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="px-4 py-6 md:py-10 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors duration-300 min-h-[144px]"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-brand transition-colors">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

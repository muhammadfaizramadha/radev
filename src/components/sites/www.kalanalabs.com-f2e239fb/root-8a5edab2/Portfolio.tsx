const projects = [
  {
    name: 'Anggana Project',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Anggana%20Project.png',
  },
  {
    name: 'Beresin',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Beresin.png',
  },
  {
    name: 'Dapoer Niknik',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Dapoer%20Niknik.png',
  },
  {
    name: 'Desa Kalisabuk',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/Desa%20Kalisabuk.png',
  },
  {
    name: 'SEEO',
    image: '/sites/www.kalanalabs.com-f2e239fb/root-8a5edab2/images/SEEO.png',
  }
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 bg-[#FFF3E0] text-[#D62828] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Karya yang Pernah Kami Bangun
          </h2>
          <p className="text-lg text-[#D62828]/70">
            Beberapa hasil karya terbaik kami dalam membantu klien mencapai tujuan digital mereka.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-[#1a1b23] border border-[#D62828]/10 aspect-[16/10] ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] to-transparent opacity-60 z-10" />
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-[#D62828] group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

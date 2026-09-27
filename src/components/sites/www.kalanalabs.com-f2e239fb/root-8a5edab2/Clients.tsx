export default function Clients() {
  const clients = [
    "Anggana Project", "Beresin", "Dapoer Niknik", "Desa Kalisabuk", "SEEO", 
    "UMKM Purwokerto", "Tech Startups", "Local Businesses"
  ];

  return (
    <section className="py-16 bg-[#FFF3E0] text-[#D62828] border-b border-[#D62828]/10 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <p className="text-sm font-semibold text-[#D62828]/60 uppercase tracking-[0.2em]">
          Dipercaya oleh
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden whitespace-nowrap mask-image-linear-edges">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 px-8">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex items-center justify-center min-w-max text-2xl font-black font-heading text-[#D62828]/80">
              {client}
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-[marquee2_30s_linear_infinite] gap-16 px-8" style={{ left: '100%' }}>
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex items-center justify-center min-w-max text-2xl font-black font-heading text-[#D62828]/80">
              {client}
            </div>
          ))}
        </div>
      </div>
      
      {/* Inline styles for marquee if not in tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .mask-image-linear-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  );
}

import regeneron from "@/assets/clients/regeneron.webp";
import tsystems from "@/assets/clients/t-systems.webp";
import motorola from "@/assets/clients/motorola.webp";
import nintendo from "@/assets/clients/nintendo.webp";
import lizClaiborne from "@/assets/clients/liz-claiborne.webp";
import bluecross from "@/assets/clients/bluecross.webp";
import weightwatchers from "@/assets/clients/weightwatchers.webp";
import pfizer from "@/assets/clients/pfizer.webp";

const ClientLogos = () => {
  const logos = [
    { src: regeneron, alt: "Regeneron", width: 228, height: 75 },
    { src: tsystems, alt: "T-Systems", width: 228, height: 46 },
    { src: motorola, alt: "Motorola", width: 200, height: 100 },
    { src: nintendo, alt: "Nintendo", width: 228, height: 75 },
    { src: lizClaiborne, alt: "Liz Claiborne", width: 200, height: 100 },
    { src: bluecross, alt: "Blue Cross Blue Shield", width: 156, height: 87 },
    { src: weightwatchers, alt: "Weight Watchers", width: 156, height: 87 },
    { src: pfizer, alt: "Pfizer", width: 148, height: 87 },
  ];

  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Trusted by Leading Fortune 500 Companies
          </p>
        </div>

        <div className="relative overflow-hidden py-10">
          <div className="flex animate-marquee hover:pause-marquee">
            {doubledLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 w-[180px] h-[100px] flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-w-full max-h-full object-contain w-auto h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

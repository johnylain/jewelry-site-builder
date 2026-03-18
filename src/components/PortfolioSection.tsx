import earringsImg from "@/assets/portfolio-earrings.jpg";
import ringsImg from "@/assets/portfolio-rings.jpg";
import braceletImg from "@/assets/portfolio-bracelet.jpg";
import pendantImg from "@/assets/portfolio-pendant.jpg";
import weddingImg from "@/assets/portfolio-wedding.jpg";

const categories = [
  { title: "Серьги", image: earringsImg },
  { title: "Женские кольца", image: ringsImg },
  { title: "Браслеты", image: braceletImg },
  { title: "Подвески", image: pendantImg },
  { title: "Обручальные кольца", image: weddingImg },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
            Портфолио
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Наши <span className="italic text-gold-gradient">украшения</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative overflow-hidden aspect-square cursor-pointer">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <h3 className="font-display text-lg text-foreground">{cat.title}</h3>
              </div>
              {/* Always visible label on mobile */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-3 group-hover:opacity-0 transition-opacity">
                <h3 className="font-display text-sm text-foreground">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

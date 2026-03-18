import { Link } from "react-router-dom";
import earringsImg from "@/assets/portfolio-earrings.jpg";
import ringsImg from "@/assets/portfolio-rings.jpg";
import braceletImg from "@/assets/portfolio-bracelet.jpg";
import pendantImg from "@/assets/portfolio-pendant.jpg";
import weddingImg from "@/assets/portfolio-wedding.jpg";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const categories = [
  { title: "Серьги", image: earringsImg, slug: "earrings" },
  { title: "Женские кольца", image: ringsImg, slug: "rings" },
  { title: "Браслеты", image: braceletImg, slug: "bracelets" },
  { title: "Подвески", image: pendantImg, slug: "pendants" },
  { title: "Обручальные кольца", image: weddingImg, slug: "wedding" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
            Портфолио
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Наши <span className="italic text-gold-gradient">украшения</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 1, 0.3, 1] }}
            >
              <Link
                to={`/category/${cat.slug}`}
                className="group relative overflow-hidden aspect-square block cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <h3 className="font-display text-lg text-foreground">{cat.title}</h3>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-3 group-hover:opacity-0 transition-opacity">
                  <h3 className="font-display text-sm text-foreground">{cat.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import heroImage from "@/assets/hero-jewelry.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Ювелирное украшение"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.2, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 1, 0.3, 1] }}
          >
            Ювелирная мастерская · Казань
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 1, 0.3, 1] }}
          >
            <span className="text-gold-gradient">Искусство</span>
            <br />
            <span className="text-foreground">создавать</span>
            <br />
            <span className="text-foreground italic">драгоценности</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg max-w-md leading-relaxed mb-10 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.2, 1, 0.3, 1] }}
          >
            25 лет создаём уникальные ювелирные украшения ручной работы из золота и драгоценных камней
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.2, 1, 0.3, 1] }}
          >
            <a
              href="https://t.me/Jewelerkitchen_store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90"
            >
              Каталог 2025
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-medium tracking-wide uppercase transition-all hover:border-primary hover:text-primary"
            >
              Наши работы
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20 hidden xl:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute right-[12%] top-[48%] -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary/10 hidden xl:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.2, 1, 0.3, 1] }}
      />
    </section>
  );
};

export default HeroSection;

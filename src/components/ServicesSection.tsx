import { Gem, Wrench, PenTool, Truck, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import textureDiamond from "@/assets/texture-diamond-blueprint.jpg";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const services = [
  { icon: Gem, title: "Изготовление", description: "Создание уникальных ювелирных украшений по индивидуальному заказу из золота и драгоценных камней.", link: "/service/manufacturing" },
  { icon: Wrench, title: "Ремонт", description: "Профессиональный ремонт ювелирных изделий любой сложности с гарантией качества.", link: "/service/repair" },
  { icon: PenTool, title: "Гравировка", description: "Художественная и текстовая гравировка на ювелирных изделиях любой сложности.", link: "/service/engraving" },
  { icon: Clock, title: "Срочные заказы", description: "Услуга срочного изготовления для особых случаев и важных дат." },
  { icon: Truck, title: "Доставка по России", description: "Отправка готовых изделий по всей России с надёжной упаковкой и страховкой." },
  { icon: Users, title: "Онлайн-согласование", description: "Каждый этап заказа согласовывается онлайн, без необходимости посещать мастерскую." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#f5f0e8] relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={textureDiamond} alt="" className="w-full h-full object-cover opacity-[0.12]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8B7531] mb-4 font-body">Услуги</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Наши <span className="italic text-gold-gradient">преимущества</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 border border-[#d4c9a8] bg-white/70 backdrop-blur-sm hover:border-[#8B7531]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 1, 0.3, 1] }}
            >
              <service.icon className="w-8 h-8 text-[#8B7531] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl mb-3 text-[#1a1a1a]">{service.title}</h3>
              <p className="text-sm text-[#5a5a5a] leading-relaxed font-body mb-4">{service.description}</p>
              {service.link && (
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8B7531] hover:opacity-80 transition-opacity font-body"
                >
                  Подробнее
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

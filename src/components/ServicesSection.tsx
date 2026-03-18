import { Gem, Wrench, PenTool, Truck, Clock, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const services = [
  { icon: Gem, title: "Изготовление", description: "Создание уникальных ювелирных украшений по индивидуальному заказу из золота и драгоценных камней." },
  { icon: Wrench, title: "Ремонт", description: "Профессиональный ремонт ювелирных изделий любой сложности с гарантией качества." },
  { icon: PenTool, title: "Гравировка", description: "Художественная и текстовая гравировка на ювелирных изделиях любой сложности." },
  { icon: Clock, title: "Срочные заказы", description: "Услуга срочного изготовления для особых случаев и важных дат." },
  { icon: Truck, title: "Доставка по России", description: "Отправка готовых изделий по всей России с надёжной упаковкой и страховкой." },
  { icon: Users, title: "Онлайн-согласование", description: "Каждый этап заказа согласовывается онлайн, без необходимости посещать мастерскую." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Услуги</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Наши <span className="italic text-gold-gradient">преимущества</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 border border-border bg-background hover:border-primary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 1, 0.3, 1] }}
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

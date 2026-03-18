import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const service = services[serviceIndex];
  const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null;
  const nextService = serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Услуга не найдена</h1>
          <Link to="/#services" className="text-primary hover:underline">Вернуться к услугам</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <motion.img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
            <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-3">
              <span className="text-gold-gradient">{service.title}</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-lg text-foreground leading-relaxed font-body mb-6">
              {service.description}
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              {service.longDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Процесс</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Как мы <span className="italic text-gold-gradient">работаем</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-24">
            {service.steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
              >
                <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-primary text-primary font-display text-lg mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mt-2 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Стоимость</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Наши <span className="italic text-gold-gradient">цены</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-0">
              {service.prices.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b border-border"
                >
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-body text-foreground">{item.name}</span>
                      {item.note && (
                        <span className="block text-xs text-muted-foreground font-body mt-0.5">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-display text-lg text-gold-gradient whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Готовы <span className="italic text-gold-gradient">начать</span>?
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Напишите нам — обсудим детали и рассчитаем точную стоимость вашего заказа.
            </p>
            <a
              href="https://t.me/Jewelerkitchen_store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90"
            >
              <MessageCircle className="w-4 h-4" />
              Написать в Telegram
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev/Next */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          {prevService ? (
            <Link
              to={`/service/${prevService.slug}`}
              className="group flex items-center gap-4 px-6 py-8 border-r border-border hover:bg-card transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Назад</p>
                <p className="font-display text-lg text-foreground">{prevService.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextService ? (
            <Link
              to={`/service/${nextService.slug}`}
              className="group flex items-center justify-end gap-4 px-6 py-8 hover:bg-card transition-colors"
            >
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Далее</p>
                <p className="font-display text-lg text-foreground">{nextService.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;

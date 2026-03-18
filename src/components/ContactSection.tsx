import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import textureStone from "@/assets/texture-stone.jpg";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Контакты</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                Онлайн <span className="italic text-gold-gradient">консультация</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 font-body">
                Напишите нам и мы поможем определиться с моделью ювелирного изделия под ваш бюджет. Каждый этап заказа согласовывается онлайн.
              </p>

              <div className="space-y-6">
                <a href="tel:+79506666605" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Телефон</p>
                    <p className="text-foreground font-body">+7 950 666 66 05</p>
                  </div>
                </a>
                <a href="https://t.me/jeweler_kitchen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Telegram</p>
                    <p className="text-foreground font-body">@jeweler_kitchen</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Адрес</p>
                    <p className="text-foreground font-body">г. Казань, ул. Фатыха Карима, д. 9</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Время работы</p>
                    <p className="text-foreground font-body">ПН — ВС, 10:00 — 19:00</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col items-center justify-center bg-background border border-border p-12 text-center h-full">
              <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Станьте частью<br />
                <span className="text-gold-gradient">Jeweler Kitchen</span>
              </h3>
              <p className="text-muted-foreground text-sm mb-8 max-w-sm font-body">
                Напишите нам в Telegram или VK для бесплатной консультации и расчёта стоимости вашего изделия.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://t.me/Jewelerkitchen_store" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90">
                  Telegram
                </a>
                <a href="https://vk.com/im?sel=-36634991" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-border text-foreground text-sm font-medium tracking-wide uppercase transition-all hover:border-primary hover:text-primary">
                  VKontakte
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

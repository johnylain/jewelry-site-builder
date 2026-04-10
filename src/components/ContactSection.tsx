import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import textureRuby from "@/assets/texture-ruby-blueprint.jpg";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#f5f0e8] relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={textureRuby} alt="" className="w-full h-full object-cover opacity-[0.10]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#8B7531] mb-4 font-body">Контакты</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
                Онлайн <span className="italic text-gold-gradient">консультация</span>
              </h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-10 font-body">
                Напишите нам и мы поможем определиться с моделью ювелирного изделия под ваш бюджет. Каждый этап заказа согласовывается онлайн.
              </p>

              <div className="space-y-6">
                <a href="tel:+79506666605" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-[#d4c9a8] flex items-center justify-center group-hover:border-[#8B7531] transition-colors">
                    <Phone className="w-5 h-5 text-[#8B7531]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5a5a5a] uppercase tracking-wider font-body">Телефон</p>
                    <p className="text-[#1a1a1a] font-body">+7 950 666 66 05</p>
                  </div>
                </a>
                <a href="https://t.me/jeweler_kitchen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-[#d4c9a8] flex items-center justify-center group-hover:border-[#8B7531] transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#8B7531]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5a5a5a] uppercase tracking-wider font-body">Telegram</p>
                    <p className="text-[#1a1a1a] font-body">@jeweler_kitchen</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#d4c9a8] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#8B7531]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5a5a5a] uppercase tracking-wider font-body">Адрес</p>
                    <p className="text-[#1a1a1a] font-body">г. Казань, ул. Фатыха Карима, д. 9</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#d4c9a8] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#8B7531]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5a5a5a] uppercase tracking-wider font-body">Время работы</p>
                    <p className="text-[#1a1a1a] font-body">ПН — ВС, 10:00 — 19:00</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm border border-[#d4c9a8] p-12 text-center h-full">
              <div className="w-20 h-20 rounded-full border border-[#8B7531]/30 flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-[#8B7531]" />
              </div>
              <h3 className="font-display text-2xl text-[#1a1a1a] mb-4">Станьте частью<br />
                <span className="text-gold-gradient">Jeweler Kitchen</span>
              </h3>
              <p className="text-[#5a5a5a] text-sm mb-8 max-w-sm font-body">
                Напишите нам в Telegram или VK для бесплатной консультации и расчёта стоимости вашего изделия.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://t.me/Jewelerkitchen_store" target="_blank" rel="noopener noreferrer" className="btn-gold-shimmer px-8 py-3 bg-[#8B7531] text-white text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90">
                  ПОЛУЧИТЬ РАСЧЕТ
                </a>
                <a href="https://vk.com/im?sel=-36634991" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#d4c9a8] text-[#1a1a1a] text-sm font-medium tracking-wide uppercase transition-all hover:border-[#8B7531] hover:text-[#8B7531]">
                  VKontakte
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);};

export default ContactSection;
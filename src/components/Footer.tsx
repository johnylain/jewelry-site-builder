import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="Jeweler Kitchen" className="h-10 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              Изготовление ювелирных украшений по индивидуальному заказу. Ремонт любой сложности.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-body">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#services" className="hover:text-primary transition-colors">Изготовление</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Ремонт</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Гравировка</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Сделать заказ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-body">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Как сделать заказ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            2000 — 2025, Jeweler Kitchen. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "#hero" },
    { label: "О нас", href: "#about" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+79506666605" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              +7 950 666 66 05
            </a>
            <a href="https://t.me/jeweler_kitchen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MessageCircle className="w-3 h-3" />
              @jeweler_kitchen
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            г. Казань, ул. Фатыха Карима, д. 9
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="font-display text-2xl font-semibold tracking-tight">
            <span className="text-gold-gradient">JEWELER</span>
            <span className="text-foreground ml-2">KITCHEN</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase font-body"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/Jewelerkitchen_store"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90"
          >
            Сделать заказ
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/Jewelerkitchen_store"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase text-center"
            >
              Сделать заказ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

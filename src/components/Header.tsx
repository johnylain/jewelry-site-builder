import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, MapPin, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const serviceItems = [
  { label: "Изготовление", href: "/service/manufacturing" },
  { label: "Ремонт", href: "/service/repair" },
  { label: "Гравировка", href: "/service/engraving" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Главная", href: "#hero" },
    { label: "О нас", href: "#about" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
    { label: "Блог", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:pl-0">
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
        <div className="flex items-center h-16">
          <a href="#hero" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Jeweler Kitchen" className="h-10" />
          </a>

          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase font-body"
              >
                {item.label}
              </a>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="#services"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase font-body"
              >
                Услуги
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </a>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-3 z-50">
                  <div className="min-w-[200px] bg-popover border border-border shadow-lg py-2">
                    <a
                      href="#services"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-colors font-body"
                    >
                      Все услуги
                    </a>
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-colors font-body"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
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
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile services expandable */}
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center gap-1 w-full text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              Услуги
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="pl-4 space-y-2">
                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Все услуги
                </a>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {navItems.slice(3).map((item) => (
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

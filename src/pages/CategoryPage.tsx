import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const currentIndex = categories.findIndex((c) => c.slug === slug);
  const prevCategory = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const nextCategory = currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Категория не найдена</h1>
          <Link to="/" className="text-primary hover:underline">Вернуться на главную</Link>
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
          src={category.heroImage}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 1, 0.3, 1] }}
          >
            <Link to="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-body">
              <ArrowLeft className="w-4 h-4" />
              Все украшения
            </Link>
            <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-3">
              <span className="text-gold-gradient">{category.title}</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
              {category.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-lg text-foreground leading-relaxed font-body mb-6">
              {category.description}
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              {category.longDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery / Items */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Коллекция</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Наши <span className="italic text-gold-gradient">работы</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-24">
            {category.items.map((item, i) => (
              <motion.div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.2, 1, 0.3, 1] }}
              >
                <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-square overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary font-body">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mt-2 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-body w-24">Материал</span>
                      <span className="text-sm text-foreground font-body">{item.material}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-body w-24">Стоимость</span>
                      <span className="text-sm text-gold-gradient font-display text-lg">{item.price}</span>
                    </div>
                  </div>
                  <a
                    href="https://t.me/Jewelerkitchen_store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Заказать
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Хотите <span className="italic text-gold-gradient">уникальное</span> изделие?
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Напишите нам — мы создадим украшение по вашему эскизу или поможем разработать дизайн с нуля.
            </p>
            <a
              href="https://t.me/Jewelerkitchen_store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:opacity-90"
            >
              Написать в Telegram
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev/Next navigation */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          {prevCategory ? (
            <Link
              to={`/category/${prevCategory.slug}`}
              className="group flex items-center gap-4 px-6 py-8 border-r border-border hover:bg-card transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Назад</p>
                <p className="font-display text-lg text-foreground">{prevCategory.title}</p>
              </div>
            </Link>
          ) : <div />}
          {nextCategory ? (
            <Link
              to={`/category/${nextCategory.slug}`}
              className="group flex items-center justify-end gap-4 px-6 py-8 hover:bg-card transition-colors"
            >
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Далее</p>
                <p className="font-display text-lg text-foreground">{nextCategory.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;

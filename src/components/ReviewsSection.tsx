import { Star } from "lucide-react";
import textureMarble from "@/assets/texture-marble.jpg";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const reviews = [
  { name: "Мария", text: "Ко дню рождения ребёнка заказывала серьги. Работа выполнена точно в срок и на высшем уровне. Благодарю!" },
  { name: "Ксения", text: "Заказывала золотое кольцо. Сначала переживала, получится ли всё так. Результат превзошел все ожидания! Низкий поклон!" },
  { name: "Юлия", text: "Заказ на изготовление браслета сделала онлайн из Москвы. Со мной связывались на всех этапах. Всё очень быстро, качественно, превосходно!" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Отзывы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Отзывы <span className="italic text-gold-gradient">клиентов</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="p-8 border border-border bg-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 1, 0.3, 1] }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display text-sm text-foreground">{review.name[0]}</span>
                </div>
                <span className="font-display text-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

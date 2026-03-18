import { Star } from "lucide-react";

const reviews = [
  {
    name: "Мария",
    text: "Ко дню рождения ребёнка заказывала серьги. Работа выполнена точно в срок и на высшем уровне. Благодарю!",
  },
  {
    name: "Ксения",
    text: "Заказывала золотое кольцо. Сначала переживала, получится ли всё так. Результат превзошел все ожидания! Низкий поклон!",
  },
  {
    name: "Юлия",
    text: "Заказ на изготовление браслета сделала онлайн из Москвы. Со мной связывались на всех этапах. Всё очень быстро, качественно, превосходно!",
  },
  {
    name: "Ярослав",
    text: "Заказывал перед Новым годом жене золотые серьги. Несмотря на загруженность, мой подарок был готов даже раньше срока.",
  },
  {
    name: "Михаил",
    text: "Необходимо было изготовить помолвочное кольцо. Мастер помог определиться с выбором и изготовил всё превосходно в кратчайший срок!",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
            Отзывы
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Отзывы <span className="italic text-gold-gradient">клиентов</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.name}
              className="p-8 border border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

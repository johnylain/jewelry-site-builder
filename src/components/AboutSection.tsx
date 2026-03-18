import aboutImage from "@/assets/about-craft.jpg";

const stats = [
  { number: "25+", label: "лет опыта" },
  { number: "2000+", label: "изделий создано" },
  { number: "100%", label: "ручная работа" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={aboutImage}
                alt="Процесс создания ювелирного украшения"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
              О мастерской
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-foreground">
              История создания<br />
              <span className="italic text-gold-gradient">Jeweler Kitchen</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
              <p>
                Расположенная в самом сердце Казани, наша ювелирная мастерская создаёт исключительные украшения для вас. Мы работаем с золотом и различными драгоценными камнями, продолжая великие русские ювелирные традиции.
              </p>
              <p>
                Мы предлагаем изготовить уникальное ювелирное украшение, полностью персонализированное по форме и размеру. Заказ в нашей мастерской станет креативным опытом — вы увидите, как ваши идеи обретают форму.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl text-gold-gradient font-light">
                    {stat.number}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

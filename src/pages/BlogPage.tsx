import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";
import blogHero from "@/assets/blog-hero.jpg";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        <motion.img
          src={blogHero}
          alt="Блог Jeweler Kitchen"
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
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
            <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-3">
              <span className="text-gold-gradient">Блог</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
              Статьи о ювелирном искусстве, уходе за украшениями и трендах
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <Link to={`/blog/${blogPosts[0].slug}`} className="group grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary font-body">
                    <Tag className="w-3 h-3" />
                    {blogPosts[0].category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <Clock className="w-3 h-3" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <span className="text-xs text-muted-foreground font-body">{blogPosts[0].date}</span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* All posts grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Все статьи</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Полезное <span className="italic text-gold-gradient">чтение</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary font-body">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-light text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;

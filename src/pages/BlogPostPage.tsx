import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Статья не найдена</h1>
          <Link to="/blog" className="text-primary hover:underline">Вернуться в блог</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Все статьи
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-primary font-body">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground font-body">{post.date}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed font-body ${i === 0 ? 'text-lg text-foreground' : 'text-muted-foreground'}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev/Next */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-4 px-6 py-8 border-r border-border hover:bg-card transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Назад</p>
                <p className="font-display text-lg text-foreground line-clamp-1">{prevPost.title}</p>
              </div>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-end gap-4 px-6 py-8 hover:bg-card transition-colors"
            >
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Далее</p>
                <p className="font-display text-lg text-foreground line-clamp-1">{nextPost.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;

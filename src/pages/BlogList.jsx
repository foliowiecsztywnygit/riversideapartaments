import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllPosts, getAllCategories } from '../utils/blog';
import { Calendar, Clock, Tag, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';

const POSTS_PER_PAGE = 9;

const BlogList = () => {
  const posts = useMemo(() => getAllPosts(), []);
  const categories = useMemo(() => ['Wszystkie', ...getAllCategories()], []);
  
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'Wszystkie') return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Helmet>
        <title>Blog i Przewodnik po Oświęcimiu | River Side Apartments</title>
        <meta 
          name="description" 
          content="Odkryj blog River Side Apartments w Oświęcimiu. Praktyczne przewodniki po atrakcjach Małopolski, Energylandii, Zatorze oraz porady i nowości w naszych apartamentach." 
        />
        <link rel="canonical" href="https://riversideapartaments.pl/blog" />
        <meta property="og:title" content="Blog i Przewodnik po Oświęcimiu | River Side Apartments" />
        <meta property="og:description" content="Praktyczne przewodniki po atrakcjach Małopolski, Energylandii oraz nowości w River Side Apartments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riversideapartaments.pl/blog" />
        <meta property="og:image" content="https://riversideapartaments.pl/assets/images/3.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog i Przewodnik po Oświęcimiu | River Side Apartments" />
        <meta name="twitter:description" content="Praktyczne przewodniki po atrakcjach Małopolski, Energylandii oraz nowości w River Side Apartments." />
      </Helmet>

      {/* Hero Header */}
      <Hero 
        title="Nasz Blog & Przewodnik" 
        subtitle="Aktualności, inspiracje podróżnicze oraz przewodniki po Oświęcimiu i Małopolsce" 
        isHome={false} 
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    isSelected
                      ? 'bg-accent border-accent text-white shadow-md'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-accent hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article 
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="p-8 flex flex-col flex-grow">
                  
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/10 text-accent">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-serif text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt || post.description}
                  </p>

                  {/* Footer Meta */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-accent" />
                      <time dateTime={post.date}>
                        {post.updatedAt || post.date}
                      </time>
                    </div>

                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform"
                    >
                      Czytaj wpis
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <BookOpen className="w-12 h-12 text-accent/40 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-foreground mb-2">Brak artykułów w tej kategorii</h3>
            <p className="text-gray-500 text-sm mb-6">Wybierz inną kategorię lub wróć do wszystkich wpisów.</p>
            <button
              onClick={() => handleCategoryChange('Wszystkie')}
              className="px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-accent/90 transition-colors"
            >
              Pokaż wszystkie artykuły
            </button>
          </div>
        )}

        {/* Pagination (if > 9 posts) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Poprzednia
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-10 h-10 rounded-lg text-xs font-bold transition-all ${
                  currentPage === num
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-accent'
                }`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Następna
            </button>
          </div>
        )}

      </section>
    </div>
  );
};

export default BlogList;

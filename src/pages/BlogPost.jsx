import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getRelatedPosts } from '../utils/blog';
import { 
  Calendar, 
  Clock, 
  Tag, 
  ChevronRight, 
  ArrowLeft, 
  Share2, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => getPostBySlug(slug), [slug]);
  const relatedPosts = useMemo(() => post ? getRelatedPosts(post, 3) : [], [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-serif text-foreground mb-4">Nie znaleziono artykułu</h1>
        <p className="text-gray-500 mb-6">Wpis o podanym adresie nie istnieje lub został przeniesiony.</p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow hover:bg-accent/90 transition-all"
        >
          Wróć do listy wpisów
        </Link>
      </div>
    );
  }

  const pageTitle = post.metaTitle || `${post.title} | River Side Apartments Oświęcim`;
  const pageDescription = post.metaDescription || post.description || post.excerpt;
  const canonicalUrl = `https://riversideapartaments.pl/blog/${post.slug}`;
  const siteUrl = 'https://riversideapartaments.pl';
  const shareUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  // Schema.org JSON-LD structured data (Article / BlogPosting)
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': pageDescription,
    'image': post.image ? `${siteUrl}${post.image}` : `${siteUrl}/assets/images/3.jpg`,
    'datePublished': post.date,
    'dateModified': post.updatedAt || post.date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    'author': {
      '@type': 'Organization',
      'name': 'River Side Apartments',
      'url': siteUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'River Side Apartments',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/assets/images/logo.png`
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: pageDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Skopiowano link do schowka!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24">
      {/* SEO & Meta Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={post.image ? `${siteUrl}${post.image}` : `${siteUrl}/assets/images/3.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={post.image ? `${siteUrl}${post.image}` : `${siteUrl}/assets/images/3.jpg`} />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaJsonLd)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center flex-wrap gap-2 text-xs text-gray-500">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">Strona główna</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li>
              <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li>
              <span className="text-gray-400">{post.category}</span>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 hidden sm:inline" />
            <li className="hidden sm:inline text-foreground font-medium truncate max-w-[240px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Wszystkie artykuły
          </Link>
        </div>

        {/* Main Article Card */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 md:p-16 border border-gray-100 shadow-xl overflow-hidden">
          
          {/* Header */}
          <header className="mb-10 pb-8 border-b border-gray-100">
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent">
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>Zaktualizowano: {post.updatedAt || post.date}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>{post.readTime} czytania</span>
              </span>

              <button
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1 text-xs text-gray-400 hover:text-accent transition-colors py-1 px-2.5 rounded-lg border border-gray-200 hover:border-accent"
                title="Udostępnij wpis"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Udostępnij</span>
              </button>
            </div>

            {/* Article H1 (Strictly rendered here, markdown content only has H2/H3) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground leading-[1.2] mb-6 tracking-tight">
              {post.title}
            </h1>

            {/* Lead Excerpt */}
            {post.excerpt && (
              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed italic bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border-l-4 border-accent">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Markdown Content Container with GFM Typography & Responsive Tables */}
          <div className="prose prose-lg max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-foreground prose-a:text-accent hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // Responsive table wrapper
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
                    <table className="min-w-full divide-y divide-gray-200 text-left text-sm" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-[#FAF8F5] border-b border-gray-200 text-foreground font-serif" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-700" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="px-6 py-4 border-b border-gray-100 text-gray-600" {...props} />
                ),
                // Styled blockquote
                blockquote: ({ node, ...props }) => (
                  <blockquote 
                    className="border-l-4 border-accent bg-[#FAF8F5] pl-6 pr-4 py-4 my-6 italic text-gray-700 rounded-r-xl font-serif text-lg leading-relaxed shadow-sm" 
                    {...props} 
                  />
                ),
                // Heading 2 with distinct margins
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl sm:text-3xl font-serif text-foreground mt-12 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2" {...props} />
                ),
                // Heading 3 with distinct margins
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl sm:text-2xl font-serif text-foreground mt-8 mb-3" {...props} />
                ),
                // Unordered list
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-outside pl-6 space-y-2 my-5 text-gray-700" {...props} />
                ),
                // Ordered list
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-outside pl-6 space-y-2 my-5 text-gray-700" {...props} />
                ),
                // Links
                a: ({ node, ...props }) => (
                  <a className="text-accent hover:underline font-medium inline-flex items-center gap-0.5" {...props} />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author Signature */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-bold block">Autor wpisu</span>
                <span className="text-sm font-serif font-bold text-foreground">Gospodarze River Side Apartments</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors border border-gray-200"
            >
              <Share2 className="w-3.5 h-3.5" />
              Poleć ten wpis
            </button>
          </div>

          {/* Dynamic Call To Action Block (if ctaTitle and ctaHref are present) */}
          {post.ctaTitle && post.ctaHref && (
            <section className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A1F22] to-[#0D1012] text-white relative overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/20 text-accent mb-3 border border-accent/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Rezerwacja Bezpośrednia
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 leading-snug">
                    {post.ctaTitle}
                  </h3>
                  {post.ctaDescription && (
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      {post.ctaDescription}
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0">
                  <Link
                    to={post.ctaHref}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl hover:shadow-accent/30 transform hover:-translate-y-0.5"
                  >
                    {post.ctaLabel || 'Sprawdź Ofertę'}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          )}

        </article>

        {/* Related Posts Section ("Zobacz także") */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-accent block mb-1">
                  Kolejne inspiracje
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-foreground">
                  Zobacz także
                </h2>
              </div>
              <Link 
                to="/blog" 
                className="text-xs font-bold uppercase tracking-wider text-accent hover:underline inline-flex items-center gap-1"
              >
                Wszystkie wpisy <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article 
                  key={related.slug}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2 block">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                    <Link to={`/blog/${related.slug}`}>
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-500 font-light mb-4 line-clamp-2 flex-grow">
                    {related.excerpt || related.description}
                  </p>
                  <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 mt-auto">
                    <span>{related.readTime}</span>
                    <Link 
                      to={`/blog/${related.slug}`}
                      className="font-bold text-accent inline-flex items-center"
                    >
                      Czytaj <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default BlogPost;

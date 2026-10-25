// GitOps Markdown Parser and Blog Engine for RiverSide Apartaments
// Reads .md files eagerly from src/content/blog via Vite import.meta.glob

const mdFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', eager: true });

/**
 * Robust YAML Frontmatter parser supporting strings, numbers, booleans,
 * inline JSON arrays ['a', 'b'] and YAML list formats (- item).
 */
export function parseFrontmatter(rawContent) {
  if (!rawContent || typeof rawContent !== 'string') {
    return { data: {}, content: '' };
  }

  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: rawContent.trim() };
  }

  const frontmatterStr = match[1];
  const content = match[2].trim();
  const data = {};

  const lines = frontmatterStr.split(/\r?\n/);
  let currentKey = null;
  let inArray = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Check if line is a bullet item in a YAML list
    if (inArray && trimmed.startsWith('-')) {
      let val = trimmed.replace(/^-\s*/, '').trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (Array.isArray(data[currentKey])) {
        data[currentKey].push(val);
      }
      continue;
    }

    const colonIdx = rawLine.indexOf(':');
    if (colonIdx !== -1) {
      const key = rawLine.slice(0, colonIdx).trim();
      let val = rawLine.slice(colonIdx + 1).trim();

      // Check if value is inline array like ["a", "b"]
      if (val.startsWith('[') && val.endsWith(']')) {
        try {
          const jsonCompatible = val.replace(/'/g, '"');
          data[key] = JSON.parse(jsonCompatible);
        } catch {
          data[key] = val
            .slice(1, -1)
            .split(',')
            .map((s) => s.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean);
        }
        currentKey = key;
        inArray = false;
      } else if (val === '') {
        // Start of list
        data[key] = [];
        currentKey = key;
        inArray = true;
      } else {
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        data[key] = val;
        currentKey = key;
        inArray = false;
      }
    }
  }

  return { data, content };
}

/**
 * Returns all blog posts parsed from markdown, normalized with the Frontmatter contract,
 * sorted from newest to oldest.
 */
export function getAllPosts() {
  const posts = Object.entries(mdFiles).map(([filePath, fileModule]) => {
    const raw = fileModule.default || fileModule;
    const { data, content } = parseFrontmatter(raw);

    const derivedSlug = (data.slug || filePath.replace(/^.*[\\/]/, '').replace(/\.md$/, '')).trim();
    const title = data.title || 'Aktualności River Side';
    const description = data.description || data.excerpt || '';
    const excerpt = data.excerpt || description;
    const date = data.date || '';
    const updatedAt = data.updatedAt || date;
    const metaTitle = data.metaTitle || title;
    const metaDescription = data.metaDescription || description || excerpt;
    const category = data.category || 'Atrakcje i Okolica';
    const readTime = data.readTime || '4 min';
    const relatedSlugs = Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [];
    const ctaTitle = data.ctaTitle || '';
    const ctaDescription = data.ctaDescription || '';
    const ctaLabel = data.ctaLabel || 'Zarezerwuj pobyt';
    const ctaHref = data.ctaHref || '/rezerwacja';

    return {
      title,
      metaTitle,
      metaDescription,
      slug: derivedSlug,
      category,
      readTime,
      date,
      updatedAt,
      excerpt,
      description,
      relatedSlugs,
      ctaTitle,
      ctaDescription,
      ctaLabel,
      ctaHref,
      content,
      image: data.image || null
    };
  });

  // Sort by date descending (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date || a.updatedAt || 0).getTime();
    const dateB = new Date(b.date || b.updatedAt || 0).getTime();
    return dateB - dateA;
  });
}

/**
 * Retrieve a single post by slug
 */
export function getPostBySlug(slug) {
  if (!slug) return null;
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug.trim()) || null;
}

/**
 * Returns 2-3 related posts based on relatedSlugs or matching category.
 */
export function getRelatedPosts(currentPost, limit = 3) {
  if (!currentPost) return [];
  const allPosts = getAllPosts().filter((p) => p.slug !== currentPost.slug);

  const matched = [];

  // 1. Try relatedSlugs match first
  if (Array.isArray(currentPost.relatedSlugs) && currentPost.relatedSlugs.length > 0) {
    for (const slug of currentPost.relatedSlugs) {
      const found = allPosts.find((p) => p.slug === slug);
      if (found && !matched.some((m) => m.slug === found.slug)) {
        matched.push(found);
      }
    }
  }

  // 2. Try same category
  if (matched.length < limit) {
    const sameCategory = allPosts.filter(
      (p) => p.category === currentPost.category && !matched.some((m) => m.slug === p.slug)
    );
    for (const post of sameCategory) {
      if (matched.length >= limit) break;
      matched.push(post);
    }
  }

  // 3. Fallback to newest posts
  if (matched.length < limit) {
    for (const post of allPosts) {
      if (matched.length >= limit) break;
      if (!matched.some((m) => m.slug === post.slug)) {
        matched.push(post);
      }
    }
  }

  return matched.slice(0, limit);
}

/**
 * Returns list of unique categories across all posts
 */
export function getAllCategories() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category).filter(Boolean));
  return Array.from(categories);
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { ARTICLES } from './data/articles';
import { CategoryKey, Article } from './types';
import { Header } from './components/Header';
import { TickerTape } from './components/TickerTape';
import { MetricsBar } from './components/MetricsBar';
import { HeroFeatured } from './components/HeroFeatured';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { EditorsView } from './components/EditorsView';
import { RepositoryInspectorModal } from './components/RepositoryInspectorModal';
import { EditorialModal, PolicyType } from './components/EditorialModal';
import { Footer } from './components/Footer';
import { 
  ChevronLeft, ChevronRight, SlidersHorizontal, 
  RotateCcw, Sparkles, BookOpen, Search
} from 'lucide-react';

const ITEMS_PER_PAGE = 10;

export default function App() {
  const [activeView, setActiveView] = useState<'feed' | 'about' | 'contact' | 'editors' | 'reader'>('feed');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'newest' | 'readingTime' | 'wordCount'>('newest');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tnc_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isBookmarksOnly, setIsBookmarksOnly] = useState(false);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tnc_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectArticle = (id: string) => {
    setSelectedArticleId(id);
    setActiveView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFeed = () => {
    setActiveView('feed');
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: CategoryKey) => {
    setCurrentCategory(cat);
    setCurrentPage(1);
    setIsBookmarksOnly(false);
    if (activeView !== 'feed') {
      setActiveView('feed');
    }
  };

  // Filtered and sorted articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      // Category filter
      if (currentCategory !== 'all' && art.category !== currentCategory) {
        return false;
      }

      // Bookmarks filter
      if (isBookmarksOnly && !bookmarkedIds.includes(art.id)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesSub = art.subTitle.toLowerCase().includes(q);
        const matchesSummary = art.executiveSummary.toLowerCase().includes(q);
        const matchesTopic = art.topic.toLowerCase().includes(q);
        const matchesAuthor = art.author.name.toLowerCase().includes(q);
        return matchesTitle || matchesSub || matchesSummary || matchesTopic || matchesAuthor;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'wordCount') {
        return b.wordCount - a.wordCount;
      }
      if (sortBy === 'readingTime') {
        return parseInt(b.readTime) - parseInt(a.readTime);
      }
      return 0; // Default order in array (newest chronological)
    });
  }, [currentCategory, searchQuery, isBookmarksOnly, bookmarkedIds, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const activeArticle = useMemo(() => {
    return ARTICLES.find((a) => a.id === selectedArticleId) || ARTICLES[0];
  }, [selectedArticleId]);

  const relatedArticles = useMemo(() => {
    if (!activeArticle) return [];
    return ARTICLES.filter(
      (a) => a.category === activeArticle.category && a.id !== activeArticle.id
    );
  }, [activeArticle]);

  // Lead story is the first article in the collection
  const heroArticle = ARTICLES[0];

  return (
    <div className="min-h-screen bg-[#081c18] text-slate-100 flex flex-col font-sans selection:bg-[#5fdee7]/20 selection:text-[#5fdee7]">
      
      {/* 1. Header (Top Bar Contract: Brand, Nav Links, Interactive Inspector & Search) */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        activeView={activeView}
        onNavigateView={(view) => {
          setActiveView(view);
          setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        onOpenInspector={() => setIsInspectorOpen(true)}
        bookmarkedCount={bookmarkedIds.length}
        onFilterBookmarks={() => {
          setIsBookmarksOnly(!isBookmarksOnly);
          setCurrentPage(1);
          if (activeView !== 'feed') setActiveView('feed');
        }}
        isBookmarksActive={isBookmarksOnly}
      />

      {/* 2. Mandatory Continuously Scrolling Breaking News Ticker Tape */}
      <TickerTape onSelectArticle={handleSelectArticle} />

      {/* Main Dynamic View Switching */}
      {activeView === 'reader' && activeArticle ? (
        <ArticleReader
          article={activeArticle}
          onBack={handleBackToFeed}
          onSelectArticle={handleSelectArticle}
          isBookmarked={bookmarkedIds.includes(activeArticle.id)}
          onToggleBookmark={toggleBookmark}
          relatedArticles={relatedArticles}
        />
      ) : activeView === 'about' ? (
        <AboutView onBackToFeed={handleBackToFeed} />
      ) : activeView === 'contact' ? (
        <ContactView onBackToFeed={handleBackToFeed} />
      ) : activeView === 'editors' ? (
        <EditorsView onBackToFeed={handleBackToFeed} />
      ) : (
        /* Home Feed View */
        <main className="flex-1">
          
          {/* Metrics Counter Bar */}
          <MetricsBar />

          {/* Lead Research Paper Spotlight (Hero) - Rendered on page 1 of unfiltered feed */}
          {currentPage === 1 && currentCategory === 'all' && !searchQuery && !isBookmarksOnly && (
            <HeroFeatured
              article={heroArticle}
              onReadArticle={handleSelectArticle}
              isBookmarked={bookmarkedIds.includes(heroArticle.id)}
              onToggleBookmark={toggleBookmark}
            />
          )}

          {/* Section: Category Tab Switcher, Search Filters & Results Controls */}
          <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            
            {/* Filter Ribbon & Segmented Control */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#5fdee7]/20 pb-6">
              
              {/* Category Segmented Tabs (Buttons Allowed per Constitution) */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0b2721] border border-[#5fdee7]/20">
                {[
                  { id: 'all', label: 'All 20 Papers' },
                  { id: 'ai-emerging-tech', label: 'AI & Emerging Tech' },
                  { id: 'gadgets-mobile', label: 'Gadgets & Mobile' },
                  { id: 'software-apps', label: 'Software & Apps' },
                  { id: 'gaming-entertainment', label: 'Gaming & Entertainment' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id as CategoryKey)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all whitespace-nowrap ${
                      currentCategory === cat.id && !isBookmarksOnly
                        ? 'bg-[#5fdee7] text-slate-950 font-bold shadow-[0_0_12px_rgba(95,222,231,0.3)]'
                        : 'text-slate-300 hover:text-white hover:bg-[#124237]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sorting & Result Counters */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-[#5fdee7]" />
                  <span>Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="rounded bg-[#0b2721] border border-[#5fdee7]/25 px-2 py-1 text-xs text-white focus:outline-none focus:border-[#5fdee7]"
                  >
                    <option value="newest">Chronological</option>
                    <option value="wordCount">Word Count (Deepest)</option>
                    <option value="readingTime">Read Duration</option>
                  </select>
                </div>

                <div className="text-xs font-mono text-[#00ffaa]">
                  {filteredArticles.length} papers
                </div>
              </div>

            </div>

            {/* Active Search / Bookmark Tag notification */}
            {(searchQuery || isBookmarksOnly) && (
              <div className="mt-4 flex items-center justify-between rounded-lg bg-[#0c2f26] border border-[#5fdee7]/30 p-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#5fdee7]">
                    {isBookmarksOnly ? 'Viewing Saved Papers' : `Filtering by: "${searchQuery}"`}
                  </span>
                  <span className="text-slate-400">({filteredArticles.length} results found)</span>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setIsBookmarksOnly(false);
                    setCurrentPage(1);
                  }}
                  className="flex items-center gap-1 text-slate-300 hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset filters</span>
                </button>
              </div>
            )}

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {paginatedArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onSelect={handleSelectArticle}
                    isBookmarked={bookmarkedIds.includes(article.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="my-16 text-center space-y-4">
                <BookOpen className="h-10 w-10 text-slate-500 mx-auto" />
                <h3 className="text-lg font-bold text-white font-mono">
                  No technical papers match the active filter criteria
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try clearing search terms or selecting another engineering category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentCategory('all');
                    setIsBookmarksOnly(false);
                  }}
                  className="rounded-lg bg-[#5fdee7] px-4 py-2 text-xs font-mono font-bold text-slate-950"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}

            {/* Mandatory Interactive Pagination ("Page 1 of 2") */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-4 border-t border-[#5fdee7]/20 pt-8">
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                    currentPage === 1
                      ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'border-[#5fdee7]/30 bg-[#0d2e26] text-[#5fdee7] hover:bg-[#124237]'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-[#0b2721] border border-[#5fdee7]/40 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(95,222,231,0.2)]">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                    currentPage === totalPages
                      ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'border-[#5fdee7]/30 bg-[#0d2e26] text-[#5fdee7] hover:bg-[#124237]'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}

          </section>

        </main>
      )}

      {/* Footer (Official Contact info, editorial policies, crawler validator) */}
      <Footer
        onOpenPolicy={(type) => setActivePolicy(type)}
        onOpenInspector={() => setIsInspectorOpen(true)}
        onSelectCategory={handleSelectCategory}
        onNavigateView={(view) => {
          setActiveView(view);
          setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Backend/Repository Inspector Modal for Developer AdSense Validation */}
      <RepositoryInspectorModal
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />

      {/* Editorial Policy Modal (Privacy Policy, Terms & Conditions, Standards) */}
      <EditorialModal
        isOpen={activePolicy !== null}
        type={activePolicy || 'privacy'}
        onClose={() => setActivePolicy(null)}
      />

    </div>
  );
}

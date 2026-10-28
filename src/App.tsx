/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { ARTICLES } from './data/articles';
import { CategoryKey, Article } from './types';
import { Header, ViewType } from './components/Header';
import { TickerTape } from './components/TickerTape';
import { HeroFeatured } from './components/HeroFeatured';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { EditorsView } from './components/EditorsView';
import { SitemapPage } from './pages/SitemapPage';
import { Sidebar } from './components/Sidebar';
import { BottomPagesDirectory } from './components/BottomPagesDirectory';
import { AdSenseBanner } from './components/AdSenseBanner';
import { ConsentBanner } from './components/ConsentBanner';
import { RepositoryInspectorModal } from './components/RepositoryInspectorModal';
import { EditorialModal, PolicyType } from './components/EditorialModal';
import { Footer } from './components/Footer';
import { 
  ChevronLeft, ChevronRight, SlidersHorizontal, 
  RotateCcw, Sparkles, BookOpen, Search
} from 'lucide-react';

const ITEMS_PER_PAGE = 10;

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('feed');
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
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      
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
          onSelectCategory={handleSelectCategory}
          onNavigateView={(view) => {
            setActiveView(view);
            setSelectedArticleId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'about' ? (
        <AboutUsPage 
          onBackToFeed={handleBackToFeed}
          onNavigateToContact={() => {
            setActiveView('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeView === 'contact' ? (
        <ContactUsPage onBackToFeed={handleBackToFeed} />
      ) : activeView === 'privacy' ? (
        <PrivacyPolicyPage onBackToFeed={handleBackToFeed} />
      ) : activeView === 'terms' ? (
        <TermsConditionsPage onBackToFeed={handleBackToFeed} />
      ) : activeView === 'disclaimer' ? (
        <DisclaimerPage onBackToFeed={handleBackToFeed} />
      ) : activeView === 'editors' ? (
        <EditorsView onBackToFeed={handleBackToFeed} />
      ) : activeView === 'sitemap' ? (
        <SitemapPage 
          onBackToFeed={handleBackToFeed}
          onSelectArticle={handleSelectArticle}
          onNavigateView={(view) => {
            setActiveView(view);
            setSelectedArticleId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectCategory={handleSelectCategory}
        />
      ) : (
        /* Home Feed View */
        <main className="flex-1">
          
          {/* Top Leaderboard Ad Unit (AdSense & RevBid Programmatic Slot) */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
            <AdSenseBanner slot="leaderboard" />
          </div>

          {/* Lead Research Paper Spotlight (Hero) - Rendered on page 1 of unfiltered feed */}
          {currentPage === 1 && currentCategory === 'all' && !searchQuery && !isBookmarksOnly && (
            <HeroFeatured
              article={heroArticle}
              onReadArticle={handleSelectArticle}
              isBookmarked={bookmarkedIds.includes(heroArticle.id)}
              onToggleBookmark={toggleBookmark}
            />
          )}

          {/* RecipePots Style 2-Column Container: Main Content Feed (col-span-8) + Sticky Sidebar (col-span-4) */}
          <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Posts Feed & Controls (lg:col-span-8) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Section Header & Breadcrumb Ribbon */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase font-bold">
                      TECHNEWSCENTRALS FEED
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                      {currentCategory === 'all' 
                        ? 'Latest Engineering Papers' 
                        : currentCategory === 'ai-emerging-tech'
                        ? 'AI & Emerging Tech Research'
                        : currentCategory === 'gadgets-mobile'
                        ? 'Gadgets & Mobile Architecture'
                        : currentCategory === 'software-apps'
                        ? 'Software & Operating Systems'
                        : 'Gaming & Graphics Pipelines'}
                    </h2>
                  </div>
                  
                  {/* Result Count Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 bg-slate-900 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                      {filteredArticles.length} Published Articles
                    </span>
                  </div>
                </div>

                {/* Filter Ribbon: Category Tabs & Sort Dropdown */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-xl shadow-md">
                  {/* Category Segmented Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { id: 'all', label: 'All' },
                      { id: 'ai-emerging-tech', label: 'AI & Tech' },
                      { id: 'gadgets-mobile', label: 'Gadgets' },
                      { id: 'software-apps', label: 'Software' },
                      { id: 'gaming-entertainment', label: 'Gaming' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleSelectCategory(cat.id as CategoryKey)}
                        className={`cursor-pointer px-3 py-1 text-xs font-mono rounded-lg transition-all whitespace-nowrap ${
                          currentCategory === cat.id && !isBookmarksOnly
                            ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/25'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Sorting Control */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 self-end sm:self-auto">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-sky-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="cursor-pointer rounded bg-slate-950 border border-slate-700 px-2.5 py-1 text-xs text-white focus:outline-none focus:border-sky-400"
                    >
                      <option value="newest">Chronological</option>
                      <option value="wordCount">Depth (Word Count)</option>
                      <option value="readingTime">Read Duration</option>
                    </select>
                  </div>
                </div>

                {/* Active Filter Notification */}
                {(searchQuery || isBookmarksOnly) && (
                  <div className="flex items-center justify-between rounded-lg bg-slate-900 border border-sky-500/30 p-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-sky-400">
                        {isBookmarksOnly ? 'Saved Bookmarks' : `Search query: "${searchQuery}"`}
                      </span>
                      <span className="text-slate-400">({filteredArticles.length} matches)</span>
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setIsBookmarksOnly(false);
                        setCurrentPage(1);
                      }}
                      className="cursor-pointer flex items-center gap-1 text-slate-300 hover:text-white"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                )}

                {/* Articles Grid (RecipePots 2-column Card Grid) */}
                {paginatedArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="my-16 text-center space-y-4 rounded-xl bg-slate-900 border border-slate-800 p-8 shadow-xl">
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
                      className="cursor-pointer rounded-lg bg-sky-500 px-4 py-2 text-xs font-mono font-bold text-slate-950 shadow-lg shadow-sky-500/20"
                    >
                      RESET ALL FILTERS
                    </button>
                  </div>
                )}

                {/* Interactive Pagination ("Page 1 of 2") */}
                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-4 border-t border-slate-800 pt-6">
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(1, prev - 1));
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      disabled={currentPage === 1}
                      className={`cursor-pointer flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                        currentPage === 1
                          ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                          : 'border-slate-700 bg-slate-900 text-sky-400 hover:bg-slate-800 hover:border-sky-400'
                      }`}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white bg-slate-900 border border-sky-500/40 px-3.5 py-1.5 rounded-lg shadow-md shadow-sky-500/20">
                        Page {currentPage} of {totalPages}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      disabled={currentPage === totalPages}
                      className={`cursor-pointer flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                        currentPage === totalPages
                          ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                          : 'border-slate-700 bg-slate-900 text-sky-400 hover:bg-slate-800 hover:border-sky-400'
                      }`}
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

              </div>

              {/* Right Column: Sticky Sidebar (lg:col-span-4) RecipePots Widgets */}
              <div className="lg:col-span-4">
                <div className="sticky top-20">
                  <Sidebar
                    currentCategory={currentCategory}
                    onSelectCategory={handleSelectCategory}
                    onSelectArticle={handleSelectArticle}
                    searchQuery={searchQuery}
                    onSearchChange={(q) => {
                      setSearchQuery(q);
                      setCurrentPage(1);
                    }}
                    onNavigateView={(view) => {
                      setActiveView(view);
                      setSelectedArticleId(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </div>
              </div>

            </div>
          </section>

        </main>
      )}

      {/* Official Bottom Pages & Governance Directory ("pages tamam neechy le aao") */}
      <BottomPagesDirectory
        onNavigateView={(view) => {
          setActiveView(view);
          setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeView={activeView}
      />

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

      {/* Cookie & Ad Consent Banner (AdSense & RevBid Compliant) */}
      <ConsentBanner
        onOpenPrivacy={() => {
          setActiveView('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}

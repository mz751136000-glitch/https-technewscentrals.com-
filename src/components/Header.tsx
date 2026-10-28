import React, { useState } from 'react';
import { Search, Terminal, Menu, X, BookOpen, Layers } from 'lucide-react';
import { CategoryKey } from '../types';

export type ViewType = 'feed' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | 'editors' | 'reader' | 'sitemap';

interface HeaderProps {
  currentCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  activeView: ViewType;
  onNavigateView: (view: Exclude<ViewType, 'reader'>) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenInspector: () => void;
  bookmarkedCount: number;
  onFilterBookmarks: () => void;
  isBookmarksActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  activeView,
  onNavigateView,
  searchQuery,
  onSearchChange,
  onOpenInspector,
  bookmarkedCount,
  onFilterBookmarks,
  isBookmarksActive
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navItems = [
    { id: 'feed', label: 'Home Feed', action: () => { onNavigateView('feed'); onSelectCategory('all'); } },
    { id: 'ai-emerging-tech', label: 'AI & Emerging Tech', action: () => { onNavigateView('feed'); onSelectCategory('ai-emerging-tech'); } },
    { id: 'gadgets-mobile', label: 'Gadgets & Mobile', action: () => { onNavigateView('feed'); onSelectCategory('gadgets-mobile'); } },
    { id: 'software-apps', label: 'Software & Apps', action: () => { onNavigateView('feed'); onSelectCategory('software-apps'); } },
    { id: 'gaming-entertainment', label: 'Gaming & Entertainment', action: () => { onNavigateView('feed'); onSelectCategory('gaming-entertainment'); } },
  ];

  const isNavActive = (item: typeof navItems[0]) => {
    if (activeView === 'feed') {
      if (item.id === 'feed' && currentCategory === 'all' && !isBookmarksActive) return true;
      if (item.id === currentCategory && !isBookmarksActive) return true;
      return false;
    }
    return activeView === item.id;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-500/20 bg-slate-950/95 backdrop-blur-md transition-colors shadow-2xl">
      {/* Top Bar 3-Zone Contract */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => { onNavigateView('feed'); onSelectCategory('all'); }}
            className="cursor-pointer group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 via-indigo-600 to-slate-900 border border-sky-400/40 shadow-lg shadow-sky-500/25 group-hover:border-sky-400 group-hover:scale-105 transition-all">
              <span className="font-mono text-sm font-black text-white">tnc</span>
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors whitespace-nowrap">
                technewscentrals
              </span>
              <span className="hidden sm:block text-[9px] font-mono tracking-widest text-sky-400 uppercase">
                ENGINEERING JOURNAL - PUBLISHED DAILY
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Navigation Links (Categories Prominently at Top) */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-slate-300">
          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('all'); }}
            className={`cursor-pointer whitespace-nowrap transition-all py-1 ${
              activeView === 'feed' && currentCategory === 'all' && !isBookmarksActive
                ? 'text-sky-400 border-b-2 border-sky-400 font-bold'
                : 'text-slate-300 hover:text-white hover:text-sky-300'
            }`}
          >
            Home Feed
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('ai-emerging-tech'); }}
            className={`cursor-pointer whitespace-nowrap transition-all py-1 ${
              activeView === 'feed' && currentCategory === 'ai-emerging-tech'
                ? 'text-sky-400 border-b-2 border-sky-400 font-bold'
                : 'text-slate-300 hover:text-white hover:text-sky-300'
            }`}
          >
            AI & Emerging Tech
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('gadgets-mobile'); }}
            className={`cursor-pointer whitespace-nowrap transition-all py-1 ${
              activeView === 'feed' && currentCategory === 'gadgets-mobile'
                ? 'text-sky-400 border-b-2 border-sky-400 font-bold'
                : 'text-slate-300 hover:text-white hover:text-sky-300'
            }`}
          >
            Gadgets & Mobile
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('software-apps'); }}
            className={`cursor-pointer whitespace-nowrap transition-all py-1 ${
              activeView === 'feed' && currentCategory === 'software-apps'
                ? 'text-sky-400 border-b-2 border-sky-400 font-bold'
                : 'text-slate-300 hover:text-white hover:text-sky-300'
            }`}
          >
            Software & Apps
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('gaming-entertainment'); }}
            className={`cursor-pointer whitespace-nowrap transition-all py-1 ${
              activeView === 'feed' && currentCategory === 'gaming-entertainment'
                ? 'text-sky-400 border-b-2 border-sky-400 font-bold'
                : 'text-slate-300 hover:text-white hover:text-sky-300'
            }`}
          >
            Gaming & Entertainment
          </button>
        </nav>

        {/* Zone 3: Interactive Affordances & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Search Input */}
          <div className="relative flex items-center">
            {isSearchExpanded ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search 20 papers, algorithms, SOCs..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="w-48 sm:w-64 rounded-lg bg-slate-900 border border-sky-400/40 px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                />
                <button
                  onClick={() => { setIsSearchExpanded(false); onSearchChange(''); }}
                  className="cursor-pointer ml-1 p-1 text-slate-400 hover:text-white"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchExpanded(true)}
                className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-300 hover:border-sky-400 hover:text-white transition-all shadow-sm"
                title="Search engineering papers"
              >
                <Search className="h-3.5 w-3.5 text-sky-400" />
                <span className="hidden md:inline text-[11px] font-mono text-slate-400">Search</span>
              </button>
            )}
          </div>

          {/* Bookmarks Filter Button */}
          {bookmarkedCount > 0 && (
            <button
              onClick={onFilterBookmarks}
              className={`cursor-pointer flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-mono transition-all ${
                isBookmarksActive
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/30'
                  : 'bg-slate-900 text-sky-400 border border-sky-500/30 hover:bg-slate-850 hover:border-sky-400'
              }`}
              title="Saved technical papers"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>{bookmarkedCount}</span>
            </button>
          )}

          {/* Interactive Backend/Repository Inspector Button */}
          <button
            onClick={onOpenInspector}
            className="cursor-pointer flex items-center gap-1.5 rounded-lg bg-slate-900 border border-sky-500/30 px-3 py-1.5 text-xs font-mono text-sky-400 hover:bg-slate-850 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/20 transition-all whitespace-nowrap"
            title="AdSense Crawler & Repository Inspector"
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden lg:inline">Repo Inspector</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer xl:hidden p-1.5 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Top Categories Quick Strip (Prominently displayed at top) */}
      <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 py-2 shadow-inner">
        <div className="mx-auto flex max-w-7xl items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider hidden sm:inline mr-1">
              CATEGORIES:
            </span>
            {[
              { id: 'all', label: 'All 20 Papers', icon: '⚡' },
              { id: 'ai-emerging-tech', label: 'AI & Emerging Tech', icon: '🤖' },
              { id: 'gadgets-mobile', label: 'Gadgets & Mobile', icon: '📱' },
              { id: 'software-apps', label: 'Software & Apps', icon: '💻' },
              { id: 'gaming-entertainment', label: 'Gaming & Entertainment', icon: '🎮' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onNavigateView('feed');
                  onSelectCategory(cat.id as CategoryKey);
                }}
                className={`cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  activeView === 'feed' && currentCategory === cat.id && !isBookmarksActive
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-400 shrink-0">
            <span className="text-sky-400">ISSN 2981-4402</span>
            <span>·</span>
            <span className="text-emerald-400">AdSense & RevBid Ready</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2 shadow-2xl">
          <div className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider mb-2">
            RESEARCH CATEGORIES
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.action();
                setMobileMenuOpen(false);
              }}
              className={`cursor-pointer block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                isNavActive(item)
                  ? 'bg-slate-900 text-sky-400 font-bold border-l-2 border-sky-400'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 space-y-1">
            <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-2">
              PAGES & GOVERNANCE
            </div>
            <button
              onClick={() => { onNavigateView('about'); setMobileMenuOpen(false); }}
              className="cursor-pointer block w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white"
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigateView('contact'); setMobileMenuOpen(false); }}
              className="cursor-pointer block w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white"
            >
              Contact Us (+923020409739)
            </button>
            <button
              onClick={() => { onNavigateView('privacy'); setMobileMenuOpen(false); }}
              className="cursor-pointer block w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => { onNavigateView('terms'); setMobileMenuOpen(false); }}
              className="cursor-pointer block w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => { onNavigateView('disclaimer'); setMobileMenuOpen(false); }}
              className="cursor-pointer block w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-white"
            >
              Disclaimer
            </button>
            <button
              onClick={() => { onNavigateView('sitemap'); setMobileMenuOpen(false); }}
              className="cursor-pointer block w-full text-left px-3 py-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-mono"
            >
              Site Index & Sitemap (31 URIs)
            </button>
            <button
              onClick={() => { onOpenInspector(); setMobileMenuOpen(false); }}
              className="cursor-pointer flex w-full items-center gap-2 px-3 py-2 text-xs font-mono text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg mt-2"
            >
              <Terminal className="h-4 w-4" />
              <span>Validate ads.txt & Crawler Status</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

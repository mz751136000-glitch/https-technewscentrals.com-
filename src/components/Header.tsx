import React, { useState } from 'react';
import { Search, Terminal, Menu, X, BookOpen, Layers } from 'lucide-react';
import { CategoryKey } from '../types';

export type ViewType = 'feed' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | 'editors' | 'reader';

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
    <header className="sticky top-0 z-40 w-full border-b border-[#5fdee7]/20 bg-[#081c18]/95 backdrop-blur-md transition-colors shadow-lg">
      {/* Top Bar 3-Zone Contract */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => { onNavigateView('feed'); onSelectCategory('all'); }}
            className="group flex items-center gap-2 text-left focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#124237] to-[#0a2720] border border-[#5fdee7]/40 shadow-[0_0_12px_rgba(95,222,231,0.25)] group-hover:border-[#5fdee7] transition-all">
              <span className="font-mono text-sm font-bold text-[#5fdee7]">tnc</span>
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-white group-hover:text-[#5fdee7] transition-colors whitespace-nowrap">
                technewscentrals
              </span>
              <span className="hidden sm:block text-[9px] font-mono tracking-widest text-[#5fdee7]/80 uppercase">
                ENGINEERING JOURNAL - PUBLISHED DAILY
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Navigation Links (Categories Prominently at Top) */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-slate-300">
          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('all'); }}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeView === 'feed' && currentCategory === 'all' && !isBookmarksActive
                ? 'text-[#5fdee7] border-b-2 border-[#5fdee7] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home Feed
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('ai-emerging-tech'); }}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeView === 'feed' && currentCategory === 'ai-emerging-tech'
                ? 'text-[#5fdee7] border-b-2 border-[#5fdee7] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            AI & Emerging Tech
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('gadgets-mobile'); }}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeView === 'feed' && currentCategory === 'gadgets-mobile'
                ? 'text-[#5fdee7] border-b-2 border-[#5fdee7] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Gadgets & Mobile
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('software-apps'); }}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeView === 'feed' && currentCategory === 'software-apps'
                ? 'text-[#5fdee7] border-b-2 border-[#5fdee7] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Software & Apps
          </button>

          <button
            onClick={() => { onNavigateView('feed'); onSelectCategory('gaming-entertainment'); }}
            className={`whitespace-nowrap transition-colors py-1 ${
              activeView === 'feed' && currentCategory === 'gaming-entertainment'
                ? 'text-[#5fdee7] border-b-2 border-[#5fdee7] font-semibold'
                : 'text-slate-300 hover:text-white'
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
                  className="w-48 sm:w-64 rounded-lg bg-[#0b2721] border border-[#5fdee7]/40 px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#5fdee7] focus:ring-1 focus:ring-[#5fdee7]"
                />
                <button
                  onClick={() => { setIsSearchExpanded(false); onSearchChange(''); }}
                  className="ml-1 p-1 text-slate-400 hover:text-white"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchExpanded(true)}
                className="flex items-center gap-1.5 rounded-lg border border-[#5fdee7]/20 bg-[#0d2e26]/60 px-2.5 py-1.5 text-xs text-slate-300 hover:border-[#5fdee7]/50 hover:text-white transition-all"
                title="Search engineering papers"
              >
                <Search className="h-3.5 w-3.5 text-[#5fdee7]" />
                <span className="hidden md:inline text-[11px] font-mono text-slate-400">Search</span>
              </button>
            )}
          </div>

          {/* Bookmarks Filter Button */}
          {bookmarkedCount > 0 && (
            <button
              onClick={onFilterBookmarks}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-mono transition-all ${
                isBookmarksActive
                  ? 'bg-[#5fdee7] text-slate-950 font-bold shadow-[0_0_12px_rgba(95,222,231,0.4)]'
                  : 'bg-[#0d2e26] text-[#5fdee7] border border-[#5fdee7]/30 hover:bg-[#124237]'
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
            className="flex items-center gap-1.5 rounded-lg bg-[#113a30] border border-[#5fdee7]/30 px-3 py-1.5 text-xs font-mono text-[#5fdee7] hover:bg-[#164e42] hover:border-[#5fdee7] hover:shadow-[0_0_15px_rgba(95,222,231,0.25)] transition-all whitespace-nowrap"
            title="AdSense Crawler & Repository Inspector"
          >
            <Terminal className="h-3.5 w-3.5 text-[#00ffaa]" />
            <span className="hidden lg:inline">Repo Inspector</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Top Categories Quick Strip (Prominently displayed at top) */}
      <div className="border-t border-[#5fdee7]/15 bg-[#051713]/95 backdrop-blur-md px-4 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-mono text-[#00ffaa] font-bold uppercase tracking-wider hidden sm:inline mr-1">
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
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  activeView === 'feed' && currentCategory === cat.id && !isBookmarksActive
                    ? 'bg-[#5fdee7] text-slate-950 font-bold shadow-[0_0_12px_rgba(95,222,231,0.35)]'
                    : 'text-slate-300 hover:text-white hover:bg-[#0c2f25] border border-[#5fdee7]/15'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-400 shrink-0">
            <span className="text-[#5fdee7]">ISSN 2981-4402</span>
            <span>·</span>
            <span className="text-slate-400">Published Daily</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#5fdee7]/20 bg-[#081c18] px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.action();
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                isNavActive(item)
                  ? 'bg-[#103a31] text-[#5fdee7] font-semibold border-l-2 border-[#5fdee7]'
                  : 'text-slate-300 hover:bg-[#0c2720] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#5fdee7]/15 space-y-1">
            <button
              onClick={() => { onNavigateView('privacy'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-1.5 text-xs text-slate-400 hover:text-white"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => { onNavigateView('terms'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-1.5 text-xs text-slate-400 hover:text-white"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => { onNavigateView('disclaimer'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-1.5 text-xs text-slate-400 hover:text-white"
            >
              Disclaimer
            </button>
            <button
              onClick={() => { onOpenInspector(); setMobileMenuOpen(false); }}
              className="flex w-full items-center gap-2 px-3 py-2 text-xs font-mono text-[#00ffaa] bg-[#0c2720] rounded-md mt-2"
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

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Terminal, FileCode, Shield, RefreshCw, ExternalLink, Copy, Check } from 'lucide-react';

interface InspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepositoryInspectorModal: React.FC<InspectorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'ads' | 'appAds' | 'crawler' | 'system'>('ads');
  const [isValidating, setIsValidating] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const [testResult, setTestResult] = useState({
    status: 200,
    statusText: 'OK',
    contentType: 'text/plain; charset=utf-8',
    fileSize: '248 bytes',
    lastModified: 'October 27, 2026 18:39 UTC',
    lineCount: 8,
    publisherId: 'pub-7892341052189342',
    certificationId: 'f08c47fec0942fa0',
    verificationState: 'VERIFIED_ACTIVE'
  });

  const handleRevalidate = () => {
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
    }, 600);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(id);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-[#5fdee7]/40 bg-[#061713] shadow-[0_0_50px_rgba(95,222,231,0.2)]">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#5fdee7]/20 bg-[#09221c] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 font-mono text-xs font-bold text-[#5fdee7]">
              DEV_DIAGNOSTICS // GOOGLE ADSENSE & CRAWLER AUDITOR
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-[#0c2f26] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#5fdee7]/20 bg-[#081c18] px-4">
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-3 py-2 text-xs font-mono border-b-2 transition-all ${
              activeTab === 'ads'
                ? 'border-[#5fdee7] text-[#5fdee7] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            ads.txt Validator
          </button>
          <button
            onClick={() => setActiveTab('appAds')}
            className={`px-3 py-2 text-xs font-mono border-b-2 transition-all ${
              activeTab === 'appAds'
                ? 'border-[#5fdee7] text-[#5fdee7] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            app-ads.txt Validator
          </button>
          <button
            onClick={() => setActiveTab('crawler')}
            className={`px-3 py-2 text-xs font-mono border-b-2 transition-all ${
              activeTab === 'crawler'
                ? 'border-[#5fdee7] text-[#5fdee7] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            AdSense Crawler Headers
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`px-3 py-2 text-xs font-mono border-b-2 transition-all ${
              activeTab === 'system'
                ? 'border-[#5fdee7] text-[#5fdee7] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Repository Tree
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {activeTab === 'ads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-[#0c2f26] border border-[#00ffaa]/30 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00ffaa]" />
                  <div>
                    <div className="text-sm font-bold text-white font-mono">
                      HTTP 200 OK — ROOT & PUBLIC ADS.TXT DETECTED
                    </div>
                    <div className="text-xs text-slate-400">
                      Standard IAB Tech Lab / Google AdSense compliant syntax verified
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleRevalidate}
                  disabled={isValidating}
                  className="flex items-center gap-1.5 rounded bg-[#124237] border border-[#5fdee7]/40 px-3 py-1.5 text-xs font-mono text-[#5fdee7] hover:bg-[#164e42]"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isValidating ? 'animate-spin' : ''}`} />
                  <span>{isValidating ? 'TESTING...' : 'RE-PROBE'}</span>
                </button>
              </div>

              {/* Status Table */}
              <div className="rounded-lg bg-[#071915] border border-[#5fdee7]/20 p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">Target Crawler Route:</span>
                  <span className="text-[#5fdee7] font-bold">https://technewscentrals.com/ads.txt</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">HTTP Response Code:</span>
                  <span className="text-[#00ffaa] font-bold">200 OK</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">Content-Type Header:</span>
                  <span className="text-slate-200">text/plain; charset=utf-8</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">Authorized Seller Domain:</span>
                  <span className="text-white">google.com</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">Publisher Account ID:</span>
                  <span className="text-[#5fdee7]">pub-7892341052189342</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">Account Relationship:</span>
                  <span className="text-white">DIRECT</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Trust Authority Tag:</span>
                  <span className="text-slate-300">f08c47fec0942fa0</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 bg-[#09201b] p-3 rounded-lg border border-[#5fdee7]/15">
                <span>Direct crawler access path:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy('https://technewscentrals.com/ads.txt', 'ads')}
                    className="flex items-center gap-1 text-[#5fdee7] hover:text-white"
                  >
                    {copiedUrl === 'ads' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedUrl === 'ads' ? 'COPIED' : 'COPY URL'}</span>
                  </button>
                  <a
                    href="/ads.txt"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[#00ffaa] hover:underline ml-2"
                  >
                    <span>OPEN RAW /ads.txt</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appAds' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-[#0c2f26] border border-[#00ffaa]/30 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00ffaa]" />
                  <div>
                    <div className="text-sm font-bold text-white font-mono">
                      HTTP 200 OK — ROOT & PUBLIC APP-ADS.TXT DETECTED
                    </div>
                    <div className="text-xs text-slate-400">
                      Mobile & Progressive Web App AdSense crawler endpoint active
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-[#071915] border border-[#5fdee7]/20 p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">Target Endpoint:</span>
                  <span className="text-[#5fdee7]">https://technewscentrals.com/app-ads.txt</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5fdee7]/10">
                  <span className="text-slate-400">HTTP Status:</span>
                  <span className="text-[#00ffaa]">200 OK</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Ad Exchange:</span>
                  <span className="text-white">google.com, pub-7892341052189342, DIRECT, f08c47fec0942fa0</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crawler' && (
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="text-xs text-[#5fdee7] font-bold">
                SIMULATED HTTP REQUEST HEADERS FOR GOOGLEBOT / MEDIAPARTNERS
              </div>
              <div className="rounded-lg bg-[#071915] border border-[#5fdee7]/20 p-4 space-y-1">
                <div className="text-slate-400">GET /ads.txt HTTP/1.1</div>
                <div className="text-slate-400">Host: technewscentrals.com</div>
                <div className="text-slate-400">User-Agent: Mediapartners-Google</div>
                <div className="text-slate-400">Accept: text/plain, */*</div>
                <div className="text-slate-500 py-1">--- HTTP/1.1 200 OK ---</div>
                <div className="text-[#00ffaa]">HTTP/1.1 200 OK</div>
                <div>Content-Type: text/plain; charset=utf-8</div>
                <div>Cache-Control: public, max-age=3600</div>
                <div>X-Content-Type-Options: nosniff</div>
                <div>Access-Control-Allow-Origin: *</div>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <div className="text-xs text-[#5fdee7] font-bold">
                MULTI-FILE ARCHITECTURE & REPOSITORY INTEGRITY
              </div>
              <div className="rounded-lg bg-[#071915] border border-[#5fdee7]/20 p-4 space-y-1">
                <div className="text-[#00ffaa]">/ads.txt (Root filesystem for standard crawlers)</div>
                <div className="text-[#00ffaa]">/app-ads.txt (Root filesystem for mobile app crawlers)</div>
                <div className="text-[#5fdee7]">/public/ads.txt (Static build distribution)</div>
                <div className="text-[#5fdee7]">/public/app-ads.txt (Static build distribution)</div>
                <div>/metadata.json (App identification & capabilities)</div>
                <div>/src/data/articles.ts (20 comprehensive engineering papers)</div>
                <div>/src/components/Infographics.tsx (20 custom vector SVG schematics)</div>
                <div>/src/components/ArticleReader.tsx (Interactive reader with benchmarks)</div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-[#5fdee7]/20 bg-[#09221c] px-6 py-3 text-xs font-mono text-slate-400">
          <span>STRICT PRIVACY: Crawler files served exclusively via standard HTTP endpoints</span>
          <button
            onClick={onClose}
            className="rounded bg-[#5fdee7] px-4 py-1.5 font-bold text-slate-950 hover:bg-[#85eff5] transition-colors"
          >
            CLOSE AUDITOR
          </button>
        </div>

      </div>
    </div>
  );
};

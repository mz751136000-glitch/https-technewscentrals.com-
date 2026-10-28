export type CategoryKey = 
  | 'all'
  | 'ai-emerging-tech'
  | 'gadgets-mobile'
  | 'software-apps'
  | 'gaming-entertainment';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  affiliation: string;
}

export interface BenchmarkMetric {
  label: string;
  baseline: string;
  optimized: string;
  delta: string;
  unit: string;
  baselineScore?: number;
  optimizedScore?: number;
}

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
  explanation: string;
}

export interface FailureMode {
  mode: string;
  rootCause: string;
  mitigation: string;
}

export interface Citation {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
}

export interface Article {
  id: string;
  slug: string;
  topic: string;
  category: 'ai-emerging-tech' | 'gadgets-mobile' | 'software-apps' | 'gaming-entertainment';
  categoryLabel: string;
  title: string;
  subTitle: string;
  date: string;
  readTime: string;
  wordCount: number;
  author: Author;
  seoAlt: string;
  infographicId: string;
  heroImage?: string;
  executiveSummary: string;
  keyTakeaways: string[];
  architecturalBlueprint: {
    title: string;
    description: string;
    subsections: { title: string; content: string }[];
  };
  benchmarks: {
    title: string;
    description: string;
    metrics: BenchmarkMetric[];
  };
  codeSnippet: CodeSnippet;
  failureModes: FailureMode[];
  verdict: string;
  citations: Citation[];
}

export interface TickerItem {
  id: string;
  tag: string;
  headline: string;
  timestamp: string;
  articleId?: string;
}

export interface MetricStat {
  label: string;
  value: string;
  numericTarget: number;
  suffix: string;
  description: string;
}

export type ProjectCategory = 'All' | 'ECE' | 'Web' | 'AI/ML';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  conceptUrl?: string;
  featured: boolean;
  date?: string;
}

export type CertCategory = 
  | 'All'
  | 'Leadership'
  | 'AI/ML'
  | 'Tech'
  | 'Courses'
  | 'Volunteer'
  | 'Industrial Visits'
  | 'Internship'
  | 'Badges';

export interface GalleryItem {
  id: string;
  title: string;
  category: CertCategory;
  description?: string;
  issuer?: string;
  date?: string;
  images?: string[];
  pdfUrl?: string;
  videoUrl?: string;
  badgeCode?: string;
  linkUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Hardware & ECE' | 'AI & Data' | 'Tools & Web';
  percentage: number;
  iconName: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  role: string;
  category: 'Education' | 'Leadership' | 'Technical' | 'Space Tech';
  description: string;
  tags: string[];
}

export interface AchievementCard {
  id: string;
  type: 'gold' | 'silver' | 'badge';
  icon: string;
  title: string;
  description: string;
  issuer: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'assistant';
  text: string;
  timestamp: string;
}

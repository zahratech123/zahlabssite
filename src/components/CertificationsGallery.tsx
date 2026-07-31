import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Award, BookOpen, Video, FileText, ExternalLink, X, Sparkles, LayoutGrid, List, CheckCircle2, Play } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem, CertCategory } from '../types';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackIssuer?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackIssuer,
  className,
  ...props
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const candidateSrcs = React.useMemo(() => {
    if (!src) return [];
    
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return [src];
    }

    const cleanPath = src.replace(/^\/+/, '');
    const candidates: string[] = [];

    // Root relative
    candidates.push(src.startsWith('/') ? src : `/${src}`);

    // Clean relative
    candidates.push(cleanPath);

    // ./ relative
    candidates.push(`./${cleanPath}`);

    // Fallback between /images/ and /assets/certificates/
    if (cleanPath.startsWith('images/')) {
      const filename = cleanPath.replace(/^images\//, '');
      candidates.push(`/assets/certificates/${filename}`);
      candidates.push(`assets/certificates/${filename}`);
      candidates.push(`./assets/certificates/${filename}`);
    } else if (cleanPath.startsWith('assets/certificates/')) {
      const filename = cleanPath.replace(/^assets\/certificates\//, '');
      candidates.push(`/images/${filename}`);
      candidates.push(`images/${filename}`);
      candidates.push(`./images/${filename}`);
    }

    return Array.from(new Set(candidates));
  }, [src]);

  React.useEffect(() => {
    setCurrentSrcIndex(0);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (currentSrcIndex + 1 < candidateSrcs.length) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError || candidateSrcs.length === 0) {
    return (
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 text-center bg-slate-950/80 border border-slate-800">
        <Award className="w-10 h-10 text-cyan-400 mx-auto mb-2 opacity-80" />
        {fallbackTitle && (
          <span className="text-xs font-mono text-cyan-300 block font-semibold px-2">
            {fallbackTitle}
          </span>
        )}
        {fallbackIssuer && (
          <span className="text-[10px] font-mono text-purple-300/80 block mt-1">
            {fallbackIssuer}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      {...props}
      src={candidateSrcs[currentSrcIndex]}
      alt={alt}
      onError={handleError}
      className={className}
    />
  );
};

interface CertificationsGalleryProps {
  isDarkMode: boolean;
}

export const CertificationsGallery: React.FC<CertificationsGalleryProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<CertCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: CertCategory[] = [
    'All',
    'Leadership',
    'AI/ML',
    'Tech',
    'Courses',
    'Volunteer',
    'Industrial Visits',
    'Internship',
    'Badges'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.issuer && item.issuer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Milestone Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            Certifications, <span className="text-gradient-cyan-purple">Courses & Visits</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-sans"
          >
            Explore 40+ verified learning milestones, leadership initiatives, industrial visits, internships, badges, and technical course completions.
          </motion.p>
        </div>

        {/* Search & Layout Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search certifications, courses, visits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
            />
          </div>

          {/* Grid/List View Switcher */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-mono text-slate-400 mr-2">
              Showing {filteredItems.length} items
            </span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-md shadow-cyan-500/20 border border-cyan-400/40'
                    : isDarkMode
                      ? 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Filter className="w-3 h-3" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Items Grid / List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div 
                    onClick={() => setSelectedItem(item)}
                    className="relative h-48 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 overflow-hidden cursor-pointer flex items-center justify-center border-b border-slate-800/80 group-hover:border-purple-500/30 transition-colors"
                  >
                    {/* Fallback Certificate Artwork Background */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
                      <Award className="w-24 h-24 text-cyan-400/40" />
                    </div>

                    {item.images && item.images.length > 0 ? (
                      <SmartImage
                        src={item.images[0]}
                        alt={item.title}
                        fallbackTitle={item.title}
                        fallbackIssuer={item.issuer}
                        className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : item.videoUrl ? (
                      <div className="relative z-10 w-full h-full flex items-center justify-center bg-slate-950">
                        <video
                          key={item.videoUrl}
                          src={`${item.videoUrl}#t=0.1`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors z-20 pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 p-4 text-center">
                        <Award className="w-10 h-10 text-cyan-400 mx-auto mb-2 opacity-80" />
                        <span className="text-xs font-mono text-cyan-300 block font-semibold px-2">{item.title}</span>
                        <span className="text-[10px] font-mono text-purple-300/80 block mt-1">{item.issuer}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80 pointer-events-none z-10" />

                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-purple-400/40 text-purple-300 text-[10px] font-mono font-semibold shadow-lg">
                        {item.category}
                      </span>
                    </div>

                    {item.videoUrl && (
                      <div className="absolute bottom-3 right-3 z-20 bg-purple-600 text-white px-2 py-1 rounded-md text-[10px] font-mono flex items-center gap-1 shadow-md">
                        <Video className="w-3 h-3" />
                        <span>Video Available</span>
                      </div>
                    )}

                    {item.pdfUrl && (
                      <div className="absolute bottom-3 right-3 z-20 bg-emerald-600 text-white px-2 py-1 rounded-md text-[10px] font-mono flex items-center gap-1 shadow-md">
                        <FileText className="w-3 h-3" />
                        <span>PDF Offer Letter</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    {item.issuer && (
                      <span className="text-xs font-mono text-cyan-400 block mb-2">
                        {item.issuer}
                      </span>
                    )}

                    {item.description && (
                      <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <span>View Certificate Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  {item.pdfUrl && (
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </div>
        ) : (
          /* List Mode */
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="glass-card rounded-xl p-4 border border-white/10 hover:border-cyan-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold text-slate-100">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400">
                      {item.category} {item.issuer ? `• ${item.issuer}` : ''}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {item.pdfUrl && (
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText className="w-3 h-3" />
                      <span>PDF</span>
                    </a>
                  )}
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox / Video / Document Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-[#0f172a] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl text-slate-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{selectedItem.category} Milestone</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 mb-1">
                {selectedItem.title}
              </h3>

              {selectedItem.issuer && (
                <p className="text-xs font-mono text-purple-400 mb-4">
                  Issuer / Organization: {selectedItem.issuer}
                </p>
              )}

              {selectedItem.description && (
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {selectedItem.description}
                </p>
              )}

              {/* Video Player */}
              {selectedItem.videoUrl && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-black border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <span>Industry Visit Video Experience:</span>
                    <span className="text-[10px] text-purple-300">Playable Video</span>
                  </div>
                  <video 
                    key={selectedItem.videoUrl}
                    src={selectedItem.videoUrl}
                    controls 
                    autoPlay
                    playsInline 
                    preload="auto"
                    className="w-full max-h-[420px] object-contain bg-black"
                  >
                    Your browser does not support video playback.
                  </video>
                </div>
              )}

              {/* Images Preview */}
              {selectedItem.images && selectedItem.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {selectedItem.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                      <SmartImage
                        src={img}
                        alt={`${selectedItem.title} - image ${i + 1}`}
                        fallbackTitle={selectedItem.title}
                        fallbackIssuer={selectedItem.issuer}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* PDF Link */}
              {selectedItem.pdfUrl && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-emerald-400" />
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-200">Official Document Available</h4>
                      <p className="text-xs font-mono text-emerald-400/80">{selectedItem.pdfUrl}</p>
                    </div>
                  </div>
                  <a
                    href={selectedItem.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-emerald-400 transition-colors"
                  >
                    <span>Open PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="flex items-center justify-end pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

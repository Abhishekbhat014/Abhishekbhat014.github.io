import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, BookOpen, ChevronRight, Share2, CornerDownRight } from 'lucide-react';
import devPhoto1 from '../assets/DevPhotoFirst.jpeg';
import reactBlogFeature from '../assets/react_blog_feature.png';

export const BlogPostDetail = ({ blog, onBack }) => {
  const [activeSection, setActiveSection] = useState('react-mindset');
  const [copied, setCopied] = useState(false);

  const sections = [
    { id: 'react-mindset', title: '1. The React Mindset' },
    { id: 'component-architecture', title: '2. Component Architecture' },
    { id: 'managing-reactivity', title: '3. Managing Reactivity' },
    { id: 'conclusion', title: '4. Conclusion' }
  ];

  // Dynamic Section Tracking on Scroll using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -55% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blog-detail-page">
      {/* Background Spotlight Glows */}
      <div className="blog-spotlight top-left" />
      <div className="blog-spotlight bottom-right" />

      <div className="container blog-container">
        
        {/* LEFT COLUMN: Sticky Sidebar */}
        <aside className="blog-sidebar">
          <div className="blog-sidebar-sticky">
            
            {/* Back Button */}
            <button className="back-home-btn" onClick={onBack}>
              <ArrowLeft className="back-icon" size={18} />
              <span>Back to Home</span>
            </button>

            {/* Author profile card */}
            <div className="blog-author-card-new">
              <div className="author-image-wrap">
                <img src={devPhoto1} alt="Abhishek Bhat" className="author-avatar" />
              </div>
              <div className="author-info">
                <span className="author-label">Written by</span>
                <h4 className="author-name">Abhishek Bhat</h4>
                <p className="author-role">Mobile & Web Developer</p>
                <p className="author-bio">
                  Passionate about building fluid, interactive user experiences. Recently expanded from native mobile & desktop development into high-performance reactive web engineering.
                </p>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="toc-wrapper">
              <h5 className="toc-title">
                <BookOpen size={14} className="toc-title-icon" />
                Table of Contents
              </h5>
              <ul className="toc-list">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => handleScrollTo(sec.id)}
                      className={`toc-link ${activeSection === sec.id ? 'active' : ''}`}
                    >
                      <ChevronRight size={12} className="toc-chevron" />
                      <span>{sec.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Post */}
            <button className="share-post-btn" onClick={handleShare}>
              <Share2 size={16} />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </aside>

        {/* RIGHT COLUMN: Scrollable Article */}
        <article className="blog-article-content">
          <header className="article-header">
            <div className="article-meta-tags">
              <span className="meta-category">LEARNING JOURNAL</span>
              <span className="meta-dot">•</span>
              <span className="meta-tag">REACT & WEB</span>
            </div>

            <h1 className="article-main-title">
              My Journey into React: From Imperative DOM to Component-Driven Engineering
            </h1>

            <p className="article-subtitle">
              A software engineer's perspective on shifting from manual selectors and imperative updates to declarative component states, custom hooks, and rendering optimizations.
            </p>

            <div className="article-author-meta-mobile">
              <img src={devPhoto1} alt="Abhishek Bhat" className="mobile-author-avatar" />
              <div>
                <p className="mobile-author-name">Abhishek Bhat</p>
                <p className="mobile-article-details">May 29, 2026 • 5 Min Read</p>
              </div>
            </div>

            <div className="article-header-details">
              <div className="detail-item">
                <Calendar size={16} />
                <span>May 29, 2026</span>
              </div>
              <div className="detail-item">
                <Clock size={16} />
                <span>5 Min Read</span>
              </div>
            </div>
          </header>

          {/* Featured Hero Banner */}
          <div className="article-featured-image-wrap">
            <img 
              src={reactBlogFeature} 
              alt="React Learning Journey" 
              className="article-featured-image"
            />
            <div className="image-overlay-glow" />
          </div>

          {/* Article Body Content */}
          <div className="article-body">
            
            {/* Section 1: The React Mindset */}
            <section id="react-mindset" className="article-section">
              <h2 className="article-section-title">1. The React Mindset</h2>
              <p>
                Coming from a background of mobile development and native desktop applications, my initial attempts at writing web applications relied heavily on imperative paradigms. I was accustomed to querying the DOM directly, listening for events, and mutating elements manually (e.g., using `document.getElementById` to change values or toggle class strings).
              </p>
              <p>
                The fundamental shift when learning React is moving from this <strong>imperative</strong> flow to a <strong>declarative</strong> model. In React, you do not directly manipulate the UI. Instead, you define the component's UI structure using JSX as a direct function of its state:
              </p>
              
              <div className="formula-box">
                <span className="formula-code">UI = f(State)</span>
              </div>
              
              <p>
                When the state changes, React computes the diff between the Virtual DOM and the real DOM, and updates only the modified nodes. This abstraction frees you from writing coordinate-heavy boilerplate and allows you to focus on the business logic of your application.
              </p>

              <blockquote className="orange-blockquote">
                "The transition from imperative DOM selectors to declarative components feels like stepping from a dark room into daylight. You stop telling the browser *how* to build the UI, and start describing *what* the UI should look like for a given state."
              </blockquote>
            </section>

            {/* Section 2: Component Architecture */}
            <section id="component-architecture" className="article-section">
              <h2 className="article-section-title">2. Component Architecture</h2>
              <p>
                One of the most powerful features of React is its modular nature. Instead of having a single monolithic HTML file or a sprawling script sheet, you decompose the interface into small, self-contained, and reusable blocks called components.
              </p>
              <p>
                During my projects, I realized the importance of maintaining clean, atomic components. A well-designed component should follow the single-responsibility principle: it should do one thing and do it exceptionally well.
              </p>

              <div className="takeaway-card">
                <h4 className="card-heading">Architectural Best Practices I've Learned:</h4>
                <ul className="takeaway-list">
                  <li>
                    <CornerDownRight size={14} className="takeaway-bullet" />
                    <strong>Props are Immutable:</strong> Never mutate the props passed down from parent components. Treat them as read-only configuration inputs.
                  </li>
                  <li>
                    <CornerDownRight size={14} className="takeaway-bullet" />
                    <strong>Unidirectional Data Flow:</strong> Data travels down the component tree from parent to child. If children need to modify parent state, pass down handler callbacks.
                  </li>
                  <li>
                    <CornerDownRight size={14} className="takeaway-bullet" />
                    <strong>Decouple Presentation and Logic:</strong> Separate pure UI styling components (like buttons or cards) from components that fetch data or manage complex states.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Managing Reactivity */}
            <section id="managing-reactivity" className="article-section">
              <h2 className="article-section-title">3. Managing Reactivity</h2>
              <p>
                Reactivity in React is governed by Hooks. The first and most essential hooks I mastered were `useState` and `useEffect`.
              </p>
              <p>
                While `useState` allows you to declare reactive state values that trigger re-renders on update, `useEffect` allows you to sync your components with external systems and run side-effects. However, managing side-effects requires a solid understanding of the dependency array. Failing to configure it correctly can trigger infinite loops and freeze the browser.
              </p>
              
              <p className="code-block-caption">Example: A safe reactivity implementation using hooks</p>
              <div className="glassmorphic-code-card">
                <div className="code-card-header">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="code-language">React Component (JSX)</span>
                </div>
                <pre className="code-block">
                  <code>
{`import React, { useState, useEffect } from 'react';

export function ReactTracker() {
  const [count, setCount] = useState(0);

  // Synchronizes window title with clicked count state
  useEffect(() => {
    document.title = \`Clicked \${count} times\`;
  }, [count]); // Triggered only when 'count' changes

  return (
    <div className="counter-panel">
      <p>Interaction count: {count}</p>
      <button 
        className="primary-btn"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment State
      </button>
    </div>
  );
}`}
                  </code>
                </pre>
              </div>

              <p>
                By passing `[count]` as the dependency array, we tell React to only execute the side-effect when `count` actually changes. If we passed an empty array `[]`, the effect would only run once on mount. If we omitted the array entirely, the effect would execute on every single render cycle, which is highly inefficient.
              </p>
            </section>

            {/* Section 4: Conclusion */}
            <section id="conclusion" className="article-section">
              <h2 className="article-section-title">4. Conclusion</h2>
              <p>
                Learning React has completely redefined how I approach frontend development. The declarative mental model, modular component flow, and reactive state management enable developers to build robust, scalable applications with a smooth developer experience.
              </p>
              <p>
                The synergy of Vite for instant compilation, React for component state rendering, and custom CSS for tailored micro-animations results in web designs that feel premium, fast, and extremely responsive. As I continue to build more complex applications, my next steps include deep-diving into state management libraries and server-side rendering architectures.
              </p>
            </section>
          </div>

          {/* Author Card Mobile Footer */}
          <footer className="article-footer-mobile">
            <div className="mobile-footer-card">
              <img src={devPhoto1} alt="Abhishek Bhat" className="mobile-footer-avatar" />
              <div className="mobile-footer-info">
                <h4>Abhishek Bhat</h4>
                <p>Mobile & Web Developer</p>
                <button className="back-bottom-btn" onClick={onBack}>
                  <ArrowLeft size={14} />
                  <span>Back to Homepage</span>
                </button>
              </div>
            </div>
          </footer>
        </article>

      </div>

      <style>{`
        .blog-detail-page {
          background-color: #09090b;
          color: #f9fafb;
          min-height: 100vh;
          padding: 8rem 0 6rem 0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background glow effects */
        .blog-spotlight {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }
        .blog-spotlight.top-left {
          top: -100px;
          left: -100px;
        }
        .blog-spotlight.bottom-right {
          bottom: -100px;
          right: -100px;
        }

        .blog-container {
          max-width: 1100px;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 4rem;
        }

        /* --- SIDEBAR STYLING --- */
        .blog-sidebar {
          position: relative;
        }
        .blog-sidebar-sticky {
          position: sticky;
          top: 110px;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .back-home-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #a1a1aa;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.65rem 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: fit-content;
        }
        .back-home-btn:hover {
          color: #ffffff;
          border-color: #f97316;
          background: rgba(249, 115, 22, 0.05);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.15);
        }
        .back-icon {
          transition: transform 0.3s ease;
        }
        .back-home-btn:hover .back-icon {
          transform: translateX(-4px);
        }

        .blog-author-card-new {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .author-image-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #f97316;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.3);
          margin-bottom: 1rem;
        }
        .author-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .author-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #f97316;
          display: block;
          margin-bottom: 0.25rem;
        }
        .author-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.15rem 0;
        }
        .author-role {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 0.8rem;
          color: #a1a1aa;
          margin: 0 0 0.75rem 0;
        }
        .author-bio {
          font-size: 0.75rem;
          line-height: 1.5;
          color: #71717a;
          margin: 0;
        }

        /* Table of Contents */
        .toc-wrapper {
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          padding-left: 1rem;
        }
        .toc-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #a1a1aa;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .toc-title-icon {
          color: #f97316;
        }
        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .toc-link {
          background: transparent;
          border: none;
          color: #71717a;
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-align: left;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.25s ease;
          width: 100%;
        }
        .toc-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }
        .toc-link.active {
          color: #f97316;
          font-weight: 600;
        }
        .toc-chevron {
          opacity: 0;
          color: #f97316;
          transition: all 0.25s ease;
        }
        .toc-link.active .toc-chevron {
          opacity: 1;
          transform: translateX(2px);
        }

        .share-post-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #ffffff;
          background: transparent;
          border: 1px dashed rgba(249, 115, 22, 0.3);
          padding: 0.75rem;
          border-radius: 12px;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }
        .share-post-btn:hover {
          background: rgba(249, 115, 22, 0.04);
          border-color: #f97316;
        }

        /* --- ARTICLE COLUMN STYLING --- */
        .blog-article-content {
          min-width: 0; /* Prevents flex/grid clipping items */
        }
        .article-header {
          margin-bottom: 2rem;
        }
        .article-meta-tags {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .meta-category {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #f97316;
        }
        .meta-dot {
          color: #27272a;
          font-size: 0.75rem;
        }
        .meta-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 1px;
          color: #71717a;
        }
        .article-main-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0 0 1.25rem 0;
          color: #ffffff;
        }
        .article-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.6;
          color: #a1a1aa;
          margin: 0 0 1.75rem 0;
          font-weight: 400;
        }
        
        .article-author-meta-mobile {
          display: none;
        }

        .article-header-details {
          display: flex;
          gap: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.85rem 0;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #71717a;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        /* Widescreen image wrapper */
        .article-featured-image-wrap {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 3.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          aspect-ratio: 16 / 9;
        }
        .article-featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .article-featured-image-wrap:hover .article-featured-image {
          transform: scale(1.03);
        }
        .image-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(9, 9, 11, 0.6) 100%);
          pointer-events: none;
        }

        /* Article Body styling */
        .article-body {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }
        .article-section {
          scroll-margin-top: 110px;
        }
        .article-section-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
          letter-spacing: -0.5px;
        }
        .article-body p {
          font-size: 1rem;
          line-height: 1.75;
          color: #d4d4d8;
          margin: 0 0 1.5rem 0;
        }
        .article-body p:last-child {
          margin-bottom: 0;
        }

        /* Callouts / Formula / Blockquotes */
        .formula-box {
          background: rgba(249, 115, 22, 0.02);
          border: 1px solid rgba(249, 115, 22, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1.5rem 0 2rem 0;
          box-shadow: inset 0 0 20px rgba(249, 115, 22, 0.02);
        }
        .formula-code {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #f97316;
          text-shadow: 0 0 10px rgba(249, 115, 22, 0.4);
        }

        .orange-blockquote {
          border-left: 4px solid #f97316;
          background: rgba(255, 255, 255, 0.01);
          margin: 2.25rem 0;
          padding: 1.5rem 2rem;
          border-radius: 0 12px 12px 0;
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #f9fafb;
        }

        .takeaway-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 1.75rem;
          margin: 2rem 0;
        }
        .card-heading {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
        }
        .takeaway-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .takeaway-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #a1a1aa;
        }
        .takeaway-bullet {
          color: #f97316;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        /* Code Block Component Card */
        .code-block-caption {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #71717a;
          margin-bottom: 0.5rem;
          display: block;
        }
        .glassmorphic-code-card {
          background: #0d0d10;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .code-card-header {
          background: #09090b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .window-dots {
          display: flex;
          gap: 0.4rem;
        }
        .window-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }
        .code-language {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .code-block {
          margin: 0;
          padding: 1.5rem;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.5;
          color: #a78bfa; /* Soft lilac highlight for tags */
          background-color: #0c0c0e;
        }
        .code-block code {
          font-family: inherit;
        }

        /* Mobile footer */
        .article-footer-mobile {
          display: none;
        }

        /* --- RESPONSIVENESS MEDIA QUERIES --- */
        @media (max-width: 968px) {
          .blog-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1.25rem;
          }
          .blog-sidebar {
            display: none; /* Hide desktop sidebar */
          }
          .article-author-meta-mobile {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            margin: 1.5rem 0 1rem 0;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .mobile-author-avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid #f97316;
          }
          .mobile-author-name {
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
          }
          .mobile-article-details {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: #71717a;
            margin: 0.15rem 0 0 0;
          }
          .article-header-details {
            display: none; /* Mobile displays detail in author block */
          }
          .article-featured-image-wrap {
            margin-bottom: 2.25rem;
          }
          .article-body {
            gap: 2.5rem;
          }
          .article-section-title {
            font-size: 1.4rem;
          }
          
          /* Show Mobile Footer Back Link */
          .article-footer-mobile {
            display: block;
            margin-top: 4rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 2rem;
          }
          .mobile-footer-card {
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.25rem;
          }
          .mobile-footer-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            object-fit: cover;
            border: 1.5px solid #f97316;
          }
          .mobile-footer-info {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .mobile-footer-info h4 {
            margin: 0;
            font-family: var(--font-heading);
            font-size: 1rem;
            color: #ffffff;
          }
          .mobile-footer-info p {
            margin: 0 0 0.5rem 0;
            font-family: var(--font-accent);
            font-style: italic;
            font-size: 0.75rem;
            color: #a1a1aa;
          }
          .back-bottom-btn {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: #ffffff;
            background: #f97316;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-family: var(--font-mono);
            font-size: 0.75rem;
            cursor: pointer;
            width: fit-content;
            transition: background var(--transition-fast);
          }
          .back-bottom-btn:hover {
            background: #ea580c;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
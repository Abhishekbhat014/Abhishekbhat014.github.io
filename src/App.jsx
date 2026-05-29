import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Blogs } from './components/Blogs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { TextHoverEffect } from './components/TextHoverEffect';
import { Footer } from './components/Footer';
import { GooeyCursor } from './components/GooeyCursor';
import { BlogPostDetail } from './components/BlogPostDetail';

function App() {
  const [activeBlog, setActiveBlog] = useState(null);

  // Scroll to top when activeBlog changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeBlog]);

  // Initialize theme from localStorage, default to dark
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  // Initialize global smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Disable right-click (context menu) globally
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <GooeyCursor size={32} lag={0.35} />
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigateHome={() => setActiveBlog(null)} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {activeBlog ? (
          <BlogPostDetail blog={activeBlog} onBack={() => setActiveBlog(null)} />
        ) : (
          <>
            <Hero theme={theme} />
            <Journey />
            <Experience />
            <TechStack />
            <Education />
            <Projects />
            <Blogs onSelectBlog={setActiveBlog} />
            <FAQ />
            <Contact />
            <div className="footer-name-section">
              <span className="name-label">
                My
                <br />
                Name
              </span>
              <div className="container name-hover-wrap">
                <TextHoverEffect text="ABHISHEK" />
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

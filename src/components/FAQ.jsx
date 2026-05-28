import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FramedText } from './ui/FramedText';

const FAQ_ITEMS = [
  {
    question: "What is the purpose of this website?",
    answer: "This is my personal developer portfolio designed to showcase my software projects, technical skills, academic qualifications, and professional experiences in an interactive, visually engaging format."
  },
  {
    question: "How do I contact support?",
    answer: "Since this is a personal portfolio, you can reach out directly via the 'Get in Touch' section below, or drop an email to abhishekbhat014@gmail.com. I will get back to you as soon as possible."
  },
  {
    question: "How do I find the best products?",
    answer: "You can explore my featured applications and systems in the 'Works' section. Each project contains detailed insights, lists of key features, technology tags, and links to source code repositories."
  },
  {
    question: "Can I return a product?",
    answer: "All my open-source projects featured here are free to explore, clone, and modify under their respective open-source licenses (like MIT). For custom client work, terms are defined per project contract."
  },
  {
    question: "Do you offer international shipping?",
    answer: "As a software developer, I deliver digital services globally! I work with clients worldwide on remote contracts, delivering digital applications directly via secure cloud repositories and app stores."
  },
  {
    question: "How can I track my order?",
    answer: "For ongoing freelance projects, I provide continuous tracking via private GitHub repositories, Jira/Trello project boards, and scheduled weekly demo updates so you always know the exact status of your software."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container relative-z faq-grid">
        {/* Left Column: Heading */}
        <div className="faq-heading-side">
          <h2 className="faq-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>
            <FramedText>Frequently Asked Questions</FramedText>
          </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="faq-accordion-side">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question-row">
                  <div className="faq-icon-wrap">
                    <Plus 
                      size={20} 
                      className={`faq-plus-icon ${isOpen ? 'rotate-45' : ''}`} 
                    />
                  </div>
                  <h3 className="faq-question">{item.question}</h3>
                </div>
                
                <div className={`faq-answer-wrapper ${isOpen ? 'show' : ''}`}>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
          background-color: #ffffff !important;
          color: #09090b !important;
          padding: 8rem 0;
          overflow: hidden;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        .faq-heading-side {
          position: sticky;
          top: 120px;
        }
        .faq-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #09090b !important;
          letter-spacing: -1px;
        }
        .faq-title-highlight {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .faq-accordion-side {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        .faq-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: 1.5rem 0;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .faq-item:hover .faq-question {
          color: #000000;
        }
        .faq-item:hover .faq-plus-icon {
          color: hsl(var(--primary));
        }
        .faq-question-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }
        .faq-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        .faq-plus-icon {
          color: #3b82f6; /* Premium Blue for the icon */
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
        }
        .faq-plus-icon.rotate-45 {
          transform: rotate(45deg);
          color: hsl(var(--secondary)) !important;
        }
        .faq-question {
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 600;
          color: #27272a;
          line-height: 1.4;
          transition: color 0.2s ease;
        }
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
          opacity: 0;
          padding-left: 3rem; /* Align with the text, skipping icon spacing */
        }
        .faq-answer-wrapper.show {
          max-height: 200px; /* Safe upper bound for text content */
          opacity: 1;
          margin-top: 1rem;
        }
        .faq-answer {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.6;
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 968px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .faq-heading-side {
            position: relative;
            top: 0;
          }
          .faq-title {
            font-size: 2.75rem;
          }
        }
        @media (max-width: 600px) {
          .faq-title {
            font-size: 1.75rem !important;
          }
          .faq-question {
            font-size: 1.1rem;
          }
          .faq-answer-wrapper {
            padding-left: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;

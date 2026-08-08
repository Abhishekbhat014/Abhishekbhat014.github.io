import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const BasicDropdown = ({
  label,
  items = [],
  value,
  onChange,
  className = "",
  icon: Icon,
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Find selected item based on value or label
  const selectedItem =
    items.find(
      (item) => item.id === value || item.label === value || item.value === value
    ) || null;

  const handleItemSelect = (item) => {
    setIsOpen(false);
    onChange?.(item);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`basic-dropdown-container ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={`basic-dropdown-button ${error ? "error-input" : ""} ${
          isOpen ? "is-open" : ""
        }`}
      >
        <div className="basic-dropdown-label-group">
          {Icon && <Icon size={18} className="basic-dropdown-icon" />}
          <span
            className={`basic-dropdown-text ${
              !selectedItem ? "is-placeholder" : ""
            }`}
          >
            {selectedItem ? selectedItem.label : label}
          </span>
        </div>

        <motion.div
          className="basic-dropdown-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="basic-dropdown-menu"
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95, transition: { duration: 0.15 } }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
            role="menu"
            aria-orientation="vertical"
          >
            <ul className="basic-dropdown-list">
              {items.map((item) => {
                const isSelected =
                  selectedItem?.id === item.id ||
                  selectedItem?.label === item.label ||
                  selectedItem?.value === item.value;
                return (
                  <motion.li
                    key={item.id || item.value || item.label}
                    role="none"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  >
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleItemSelect(item)}
                      className={`basic-dropdown-item ${
                        isSelected ? "selected" : ""
                      }`}
                    >
                      {item.icon && (
                        <span className="dropdown-item-icon">{item.icon}</span>
                      )}
                      <span className="dropdown-item-text">{item.label}</span>

                      {isSelected && (
                        <motion.span
                          className="dropdown-selected-check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          aria-hidden
                        >
                          <svg
                            className="check-svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.span>
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .basic-dropdown-container {
          position: relative;
          width: 100%;
        }
        .basic-dropdown-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.8rem 1rem !important;
          border-radius: var(--border-radius-sm, 8px);
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #f9fafb !important;
          font-family: inherit;
          font-size: 0.95rem;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          text-align: left;
        }
        .basic-dropdown-button:hover, .basic-dropdown-button.is-open {
          border-color: rgba(249, 115, 22, 0.5) !important;
          background: rgba(255, 255, 255, 0.04) !important;
        }
        .basic-dropdown-button:focus-visible {
          outline: none;
          border-color: hsl(var(--primary)) !important;
          box-shadow: 0 0 0 3px hsla(24, 95%, 53%, 0.15) !important;
        }
        .basic-dropdown-button.error-input {
          border-color: hsl(var(--error)) !important;
        }
        .basic-dropdown-label-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
          overflow: hidden;
        }
        .basic-dropdown-icon {
          color: #71717a;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .basic-dropdown-button:hover .basic-dropdown-icon,
        .basic-dropdown-button.is-open .basic-dropdown-icon {
          color: hsl(var(--primary));
        }
        .basic-dropdown-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .basic-dropdown-text.is-placeholder {
          color: #71717a;
        }
        .basic-dropdown-chevron {
          color: #71717a;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .basic-dropdown-button:hover .basic-dropdown-chevron {
          color: #f9fafb;
        }
        .basic-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          width: 100%;
          z-index: 50;
          background: rgba(18, 18, 22, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--border-radius-sm, 8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          transform-origin: top;
        }
        .basic-dropdown-list {
          list-style: none;
          margin: 0;
          padding: 0.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          max-height: 220px;
          overflow-y: auto;
        }
        .basic-dropdown-list::-webkit-scrollbar {
          width: 4px;
        }
        .basic-dropdown-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
        }
        .basic-dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 0.85rem;
          border: none;
          background: transparent;
          color: #d4d4d8;
          font-family: inherit;
          font-size: 0.9rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          text-align: left;
        }
        .basic-dropdown-item:hover {
          background: rgba(249, 115, 22, 0.12);
          color: #f9fafb;
        }
        .basic-dropdown-item.selected {
          background: rgba(249, 115, 22, 0.18);
          color: hsl(var(--primary));
          font-weight: 600;
        }
        .dropdown-item-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          color: currentColor;
        }
        .dropdown-item-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-grow: 1;
        }
        .dropdown-selected-check {
          margin-left: auto;
          display: flex;
          align-items: center;
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .check-svg {
          width: 16px;
          height: 16px;
        }
      `}</style>
    </div>
  );
};

export default BasicDropdown;

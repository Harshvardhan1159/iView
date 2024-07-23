import { useState } from "react";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = (lang) => {
    onSelect(lang);
    setIsMenuOpen(false); // Close the menu after selecting a language
  };

  return (
    <div className="ml-2 mb-4">
      <p className="mb-2 text-lg text-gray-200">Language:</p>
      <div className="relative inline-block">
        <button
          className="px-4 py-2 text-gray-200 bg-blue-500 rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {language}
        </button>
        {isMenuOpen && (
          <div className="absolute right-50 z-10 w-48 mt-2 origin-top-right bg-gray-900 rounded shadow-lg">
            {languages.map(([lang, version]) => (
              <div
                key={lang}
                className={`px-4 py-2 cursor-pointer ${
                  lang === language ? "bg-gray-200" : ""
                } hover:bg-gray-600 text-gray-300`}
                onClick={() => handleSelect(lang)}
              >
                <span className={`${lang === language ? ACTIVE_COLOR : ""}`}>
                  {lang}
                </span>
                &nbsp;
                <span className="text-gray-200 text-sm">({version})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;

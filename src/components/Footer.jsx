import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-12 py-4 border-t border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-900/20 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
        
        {/* LEFT - YOUR NAME */}
        <a
          href="https://uzair-hasan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 dark:text-blue-400 hover:underline mb-2 md:mb-0"
        >
          Uzair Hasan
        </a>

        {/* CENTER - COPYRIGHT */}
        <p className="text-center">
          © {year} All rights reserved.
        </p>




        {/* RIGHT - EMPTY (Balanced Layout) */}
        <div className="w-[93px] md:w-[120px]">
             {/* RIGHT - Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5 text-slate-700 dark:text-slate-200" />
        </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

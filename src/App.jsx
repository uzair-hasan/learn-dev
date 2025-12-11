import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import QuestionList from "./components/QuestionAccordion";
import ThemeToggle from "./components/ThemeToggle";
import { data } from "./data";
import { BookOpen, Sparkles } from "lucide-react";
import Footer from "./components/Footer";



function AppContent() {
  const [activeTab, setActiveTab] = useState("react");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // ⭐ NEW
  const [visibleCount, setVisibleCount] = useState(20);

  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const currentQuestions = data[activeTab] || [];

  const filteredQuestions = currentQuestions
    .filter((q) =>
      selectedFilter === "all" ? true : q.category === selectedFilter
    )
    .filter((q) =>
      q.question.toLowerCase().includes(searchText.toLowerCase())
    );

  // ⭐ FINAL QUESTIONS TO DISPLAY (Lazy Loaded)
  const visibleQuestions = filteredQuestions.slice(0, visibleCount);

  // ⭐ FILTERS BY TAB
  const filtersByTab = {
    react: [
      { label: "All", value: "all" },
      { label: "Important", value: "important" },
      { label: "Hooks", value: "hooks" },
      { label: "Basics", value: "basics" },
      { label: "Advance", value: "advance" },
    ],
    javascript: [
      { label: "All", value: "all" },
      { label: "Important", value: "important" },
      { label: "Basics", value: "basics" },
      { label: "Advance", value: "advance" },
    ],
    html: [
      { label: "All", value: "all" },
      { label: "Basics", value: "basics" },
      { label: "Advance", value: "advance" },
    ],
    css: [
      { label: "All", value: "all" },
      { label: "Basics", value: "basics" },
      { label: "Advance", value: "advance" },
    ],
    nodejs: [
      { label: "All", value: "all" },
      { label: "Important", value: "important" },
      { label: "Basics", value: "basics" },
      { label: "Advance", value: "advance" },
    ],
  };

  const filters = filtersByTab[activeTab];

  useEffect(() => {
    setSelectedFilter("all");
    setVisibleCount(20); // reset lazy load when tab changes
  }, [activeTab]);

  useEffect(() => {
    setVisibleCount(20); // reset on filter/search change
  }, [selectedFilter, searchText]);

  // ⭐ SCROLL HANDLER — Load more when close to bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) => prev + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* HERO */}
        <div ref={heroRef} className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Interview FAQs
            </h2>
          </motion.div>
        </div>

        {/* SEARCH BOX */}
        <motion.div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 
             bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          />
        </motion.div>

        {/* FILTER BUTTONS */}
        <motion.div className="flex gap-3 mb-6 justify-center flex-wrap">
          {filters.map((f) => (
            <label
              key={f.value}
             className={`px-4 py-2 rounded-xl cursor-pointer border transition 
    ${
      selectedFilter === f.value
        ? "bg-blue-500 text-white border-blue-600"
        : "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700"
    }
  `}
            >
              <input
                type="radio"
                value={f.value}
                checked={selectedFilter === f.value}
                onChange={() => setSelectedFilter(f.value)}
                className="hidden"
              />
              {f.label}
            </label>
          ))}
        </motion.div>

        {/* QUESTIONS (Lazy Loaded) */}
        <motion.div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Showing {visibleQuestions.length} / {filteredQuestions.length} questions
          </p>

          <QuestionList questions={visibleQuestions} />
        </motion.div>

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}



function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

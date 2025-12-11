import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import QuestionList from "./components/QuestionAccordion";
import ThemeToggle from "./components/ThemeToggle";
import { data } from "./data";
import { BookOpen, Sparkles } from "lucide-react";

function AppContent() {
  const [activeTab, setActiveTab] = useState("react");
  const [selectedFilter, setSelectedFilter] = useState("all");

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

  const filteredQuestions =
    selectedFilter === "all"
      ? currentQuestions
      : currentQuestions.filter((q) => q.category === selectedFilter);

  const filters = [
    { label: "All", value: "all" },
    { label: "Important", value: "important" },
    { label: "Hooks", value: "hooks" },
    { label: "Basics", value: "basics" },
    { label: "Advance", value: "advance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* <div className="fixed top-20 right-4 md:top-24 md:right-8 z-50">
        <ThemeToggle />
      </div> */}

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
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Interview
              Questions
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-slate-600 dark:text-slate-400 text-base md:text-lg"
          >
            <Sparkles className="w-4 h-4 inline text-blue-500" /> Master the
            fundamentals
          </motion.p>
        </div>

        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-3 mb-6 justify-center flex-wrap"
        >
          {filters.map((f) => (
            <label
              key={f.value}
              className={`px-4 py-2 rounded-xl cursor-pointer border transition 
                ${
                  selectedFilter === f.value
                    ? "bg-blue-500 text-white border-blue-600"
                    : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                }
              `}
            >
              <input
                type="radio"
                name="questionFilter"
                value={f.value}
                checked={selectedFilter === f.value}
                onChange={() => setSelectedFilter(f.value)}
                className="hidden"
              />
              {f.label}
            </label>
          ))}
        </motion.div>

        {/* QUESTIONS */}
        <motion.div
          key={activeTab + selectedFilter}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            {filteredQuestions.length} questions available
          </p>

          <QuestionList questions={filteredQuestions} />
        </motion.div>
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

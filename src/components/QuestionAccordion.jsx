import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const QuestionAccordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
          <div className="px-6 pb-5 pt-2">
  <div className="h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 mb-4" />

  {(() => {
    const parts = answer.split("Real-world example:");
    const main = parts[0].trim();
    const example = parts[1]?.trim();

    return (
      <div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          {main}
        </p>

        {example && (
          <p className="text-blue-600 dark:text-blue-400 font-medium leading-relaxed mt-2">
            <strong>Real-world example:</strong> {example}
          </p>
        )}
      </div>
    );
  })()}
</div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const QuestionList = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <QuestionAccordion
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default QuestionList;

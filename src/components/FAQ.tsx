import { ChevronDownCircle } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
function SingleFaq({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay: index * 0.2, ease: easeInOut }}
      className="w-full flex flex-col p-4 overflow-hidden"
    >
      <button onClick={() => setisOpen(!isOpen)} className="w-full flex">
        <span className="mb-5 items-center text-[18px] ml-28">{q}</span>
        <ChevronDownCircle
          className={`transation-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } bg-brand text-white rounded-full ml-3 items-center`}
        />
      </button>
      {isOpen && (
        <p className="px-3 py-1 border-l-2 border-l-brand text-[20px] ml-28">
          {a}
        </p>
      )}
    </motion.div>
  );
}
export default function FAQ() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "How match acurate the data of this site",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil rem suscipit accusantium .",
    },
    {
      question: "How match acurate the data of this site",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil rem suscipit accusantium.",
    },
    {
      question: "How match acurate the data of this site",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil rem suscipit accusantium.",
    },
    {
      question: "How match acurate the data of this site",
      answer:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil rem suscipit accusantium.",
    },
  ];
  return (
    <div id="faq" className="w-full mt-12 flex justify-center items-start">
      <div className="flex flex-col items-center mt-3 justify-center">
        <h1 className="text-3xl">Frequently Asked Question</h1>
        <h2 className="font-bold text-3xl mt-5">Get to Know our cammpany </h2>
      </div>
      <div className="col-span-2">
        {faqs.map((question, index) => (
          <SingleFaq
            key={index}
            q={question.question}
            a={question.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

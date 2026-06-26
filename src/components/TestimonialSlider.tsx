"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Patil",
    role: "Project Manager, Infrastructure Co.",
    text: "Excellent service and timely delivery. The quality of materials has been consistently outstanding. Highly recommended for any construction project.",
    rating: 5,
  },
  {
    name: "Sandeep Gupta",
    role: "Contractor, Residential Builder",
    text: "We have been sourcing Fly Ash and admixtures from Shubham Trading for over two years. Reliable supply chain and competitive pricing.",
    rating: 5,
  },
  {
    name: "Amit Khanna",
    role: "Purchase Head, RMC Plant",
    text: "Consistent quality and reliable support. Their technical team helped us select the right admixture grade for our high-performance concrete needs.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Site Engineer, Infrastructure Dev.",
    text: "FiberTech products have significantly improved our concrete durability. The crack control performance is excellent. Great supplier partnership.",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-orange/20 transition-all duration-500"
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg
                key={s}
                className={`w-5 h-5 ${s < t.rating ? "text-orange" : "text-gray-200"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
          <div>
            <p className="font-bold text-navy text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

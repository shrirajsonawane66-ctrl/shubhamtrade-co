"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/concrete-pour.jpg", title: "Concrete Pouring Operations", category: "Infrastructure" },
  { src: "/images/cement-mixer.jpg", title: "Ready-Mix Supply", category: "Logistics" },
  { src: "/images/newash.jpg", title: "Industrial Material Supply", category: "Materials" },
  { src: "/images/concrete-structure.jpg", title: "Structural Concrete Work", category: "Infrastructure" },
  { src: "/images/construction-workers.jpg", title: "On-Site Execution", category: "Construction" },
  { src: "/images/cement-bags.jpg", title: "Material Storage & Distribution", category: "Logistics" },
];

export default function ProjectGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
          onClick={() => setSelected(i)}
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-orange text-xs font-semibold">{img.category}</span>
            <p className="text-white text-sm font-semibold">{img.title}</p>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selected].src}
                alt={galleryImages[selected].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold">{galleryImages[selected].title}</p>
                <p className="text-orange text-sm">{galleryImages[selected].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

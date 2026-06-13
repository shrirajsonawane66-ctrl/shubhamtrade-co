"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tagline: string;
  description: string;
  details?: { label: string; value: string }[];
  benefits: string[];
  dosage?: string;
  packing?: string;
}

function waProductUrl(product: string) {
  const msg = `Hello Shubham Trading Co,

I would like a quotation for ${product}:

Product: ${product}
Quantity:
Delivery Location:

Please share pricing and availability.`;
  return `https://wa.me/919167399697?text=${encodeURIComponent(msg)}`;
}

export default function ProductModal({
  isOpen,
  onClose,
  title,
  tagline,
  description,
  details,
  benefits,
  dosage,
  packing,
}: ProductModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <span className="text-orange text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">{title.split(" ")[0] === "Superplast" || title.split(" ")[0] === "FiberTech" ? "Featured Product" : "Product Category"}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">{title}</h2>
              <p className="text-orange font-semibold text-sm mb-4">{tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

              {details && details.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-navy mb-3">Technical Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {details.map((d, i) => (
                      <div key={i} className="flex flex-col bg-gray-50 rounded-lg p-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{d.label}</span>
                        <span className="font-semibold text-gray-800">{d.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-navy mb-3">Benefits</h3>
                <div className="space-y-2">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-orange flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {(dosage || packing) && (
                <div className="bg-gradient-to-r from-navy/5 to-orange/5 rounded-xl p-4 mb-6">
                  {dosage && (
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <svg className="w-4 h-4 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.228A10.5 10.5 0 0012 21a10.5 10.5 0 01-6.828-2.772m15.456 0L15 15m0 0l-3.314 3.314M15 15l3.314-3.314M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700"><strong>Dosage:</strong> {dosage}</span>
                    </div>
                  )}
                  {packing && (
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <span className="text-gray-700"><strong>Packing:</strong> {packing}</span>
                    </div>
                  )}
                </div>
              )}

              <a
                href={waProductUrl(title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-orange hover:bg-orange-light text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Best Price on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

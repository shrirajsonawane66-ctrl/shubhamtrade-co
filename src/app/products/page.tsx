"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/Animations";
import ProductModal from "@/components/ProductModal";

const quoteMessage = `Hello Shubham Trading Co,

I would like a quotation for:

Product:
Quantity:
Delivery Location:

Please share pricing and availability.`;

const waQuoteUrl = `https://wa.me/919167399697?text=${encodeURIComponent(quoteMessage)}`;

function waProductUrl(product: string) {
  const msg = `Hello Shubham Trading Co,

I would like a quotation for ${product}:

Product: ${product}
Quantity:
Delivery Location:

Please share pricing and availability.`;
  return `https://wa.me/919167399697?text=${encodeURIComponent(msg)}`;
}

function HexCube({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Flask({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3h6M10 3v6L4 19c-1 1.5 0 3 2 3h12c2 0 3-1.5 2-3l-6-10V3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FiberStrands({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20c2-6 6-12 8-16M12 20c2-6 6-12 8-16M8 20c2-6 6-12 8-16" strokeLinecap="round"/>
    </svg>
  );
}

const productData = {
  flyash: {
    title: "Fly Ash",
    tagline: "Enhancing Strength, Sustainability and Concrete Performance",
    description:
      "Premium quality Fly Ash sourced from trusted suppliers and suitable for various concrete applications. Enhances strength, durability, and sustainability of concrete structures.",
    details: [
      { label: "Product Type", value: "Premium Quality Fly Ash" },
      { label: "Sourcing", value: "Trusted suppliers across India" },
      { label: "Application", value: "Concrete, structural, mass concrete" },
      { label: "Standards", value: "IS/IRC compliant" },
    ],
    benefits: [
      "Improves concrete strength and durability",
      "Reduces heat of hydration in mass concrete",
      "Enhances workability and finish",
      "Eco-friendly and sustainable",
    ],
  },
  admixtures: {
    title: "Admixtures",
    tagline: "Engineering Better Concrete",
    description:
      "Specialized chemical additives designed to improve workability, strength, durability, and performance of concrete mixes. Our PCE-based hyperplasticizers are eco-friendly and chloride/sulphate free.",
    details: [
      { label: "Type", value: "PCE-based Hyperplasticizers" },
      { label: "Water Reduction", value: "Up to 40%" },
      { label: "Eco-Friendly", value: "Chloride & Sulphate Free" },
      { label: "Dosage Range", value: "0.5% – 1.2%" },
    ],
    benefits: [
      "Exceptional water reduction capability",
      "Enhances concrete strength and durability",
      "Improves workability and flow",
      "Sustainable construction practices",
    ],
  },
  "superplast-509": {
    title: "Superplast 509",
    tagline: "High Performance for High Grade Concrete",
    description:
      "A high-performance PCE-based hyperplasticizer designed for high-grade concrete applications. Delivers excellent workability and strength with minimal dosage.",
    details: [
      { label: "Type", value: "PCE Based Hyperplasticizer" },
      { label: "Color", value: "Light Brown Liquid" },
      { label: "Specific Gravity", value: "1.14 ± 0.02" },
      { label: "Shelf Life", value: "1 Year" },
      { label: "Dosage", value: "0.5% – 0.9%" },
    ],
    benefits: [
      "Better workability",
      "Higher strength",
      "Improved flow",
      "Reduced water requirement",
    ],
  },
  "superplast-401": {
    title: "Superplast 401",
    tagline: "Reliable Performance for Mid Grade Concrete",
    description:
      "A mid-performance PCE-based admixture suited for mid-grade concrete, offering reliable workability improvement and water reduction.",
    details: [
      { label: "Type", value: "PCE Based Hyperplasticizer" },
      { label: "Color", value: "Light Yellowish Liquid" },
      { label: "Specific Gravity", value: "1.12 ± 0.01" },
      { label: "Shelf Life", value: "1 Year" },
      { label: "Dosage", value: "0.7% – 1%" },
    ],
    benefits: [
      "Consistent quality",
      "Better concrete finish",
      "Reduced segregation",
    ],
  },
  "superplast-320": {
    title: "Superplast 320",
    tagline: "Cost Effective Performance for Everyday Construction",
    description:
      "Designed for low-grade concrete applications, Superplast 320 provides consistent workability at an economical dosage rate.",
    details: [
      { label: "Type", value: "PCE Based Hyperplasticizer" },
      { label: "Color", value: "Light Yellowish Liquid" },
      { label: "Specific Gravity", value: "1.10 ± 0.01" },
      { label: "Shelf Life", value: "1 Year" },
      { label: "Dosage", value: "1% – 1.2%" },
    ],
    benefits: [
      "Economical solution",
      "Improved concrete strength",
      "Better mixing performance",
    ],
  },
  "fibertech-gf": {
    title: "FiberTech GF",
    tagline: "Glass Fiber Reinforcement for Superior Concrete Performance",
    description:
      "Glass fiber chopped strands that create a tridimensional reinforcement network within concrete. Alkaline resistant for long-term durability and crack prevention.",
    details: [
      { label: "Type", value: "Glass fiber chopped strands" },
      { label: "Resistance", value: "Alkaline resistant" },
      { label: "Application", value: "Crack prevention, impact resistance" },
    ],
    benefits: [
      "Crack resistance",
      "Better reinforcement",
      "Improved structural integrity",
      "Alkali resistant",
    ],
    dosage: "0.9 kg to 1.2 kg per cubic meter",
    packing: "125g, 900g, 20kg, 50kg Bulk",
  },
  "fibertech-pp": {
    title: "FiberTech PP",
    tagline: "Advanced Polypropylene Fibers for Durable Concrete",
    description:
      "Polypropylene synthetic fibers engineered to control shrinkage cracks, improve flexural toughness, and increase concrete durability over time.",
    details: [
      { label: "Type", value: "Polypropylene synthetic fibers" },
      { label: "Cut Length", value: "6/12/18/24 mm" },
      { label: "Specific Gravity", value: "0.90-0.93" },
      { label: "Tensile Strength", value: "420 Mpa" },
    ],
    benefits: [
      "Controls shrinkage cracks",
      "Improves toughness",
      "Improves durability",
      "Enhances long-term performance",
    ],
    dosage: "0.9 kg to 1.2 kg per cubic meter",
    packing: "125g, 900g, 20kg, 50kg Bulk",
  },
  "micro-silica": {
    title: "Micro Silica (Silica Fume)",
    tagline: "Maximum Strength. Maximum Durability.",
    description:
      "High-Performance Micro Silica engineered for superior strength and durability. Ideal for high-strength and high-performance concrete applications.",
    details: [
      { label: "Product Type", value: "Micro Silica (Silica Fume)" },
      { label: "Form", value: "Fine grey powder" },
      { label: "Application", value: "High-strength & high-performance concrete" },
      { label: "Standards", value: "IS/IRC compliant" },
    ],
    benefits: [
      "Increases compressive and flexural strength",
      "Reduces permeability and water penetration",
      "Improves resistance to chemicals and corrosion",
      "Ideal for high-strength and high-performance concrete",
      "Meets demanding construction standards",
    ],
  },
  "bulker-service": {
    title: "Cement Transportation (Bulk Cement Bulker Services)",
    tagline: "Delivering Cement Efficiently. Keeping Projects Moving.",
    description:
      "Fast, safe, and efficient cement delivery for uninterrupted construction operations. Specialized bulk cement bulker fleet with dust-free and moisture-protected transportation.",
    details: [
      { label: "Service Type", value: "Bulk Cement Transportation" },
      { label: "Fleet", value: "Specialized bulk cement bulker fleet" },
      { label: "Handling", value: "Dust-free & moisture-protected" },
      { label: "Coverage", value: "Project sites, RMC plants & grinding units" },
    ],
    benefits: [
      "Safe & secure bulk cement handling",
      "On-time delivery commitment",
      "Cost-effective transportation solutions",
      "High capacity bulkers for large orders",
      "Reduced material loss during transit",
    ],
  },
  "rmc-concrete": {
    title: "Concrete Trading",
    tagline: "Consistent Strength. Reliable Performance.",
    description:
      "High-quality Ready Mix Concrete (RMC) available in grades M10 to M60, designed for residential, commercial, industrial, and infrastructure construction. Manufactured with premium cement, graded aggregates, sand, and admixtures to ensure consistent strength, durability, and performance.",
    details: [
      { label: "Material", value: "Cement, Sand, Aggregates, Water & Admixtures" },
      { label: "Strength Range", value: "10 MPa – 60 MPa" },
      { label: "Supply", value: "Transit Mixer / Bulk Supply" },
      { label: "Quality Standard", value: "Manufactured as per applicable Indian Standards" },
    ],
    benefits: [
      "High compressive strength",
      "Excellent durability and workability",
      "Uniform quality with controlled batching",
      "Suitable for RCC and non-RCC applications",
      "Timely site delivery available",
    ],
  },
};

const fiberComparisonRows = [
  { property: "Cut Length (mm)", pp: "6/12/18/24", polyester: "6/12/18/24", gf: "6/12/18/24/40" },
  { property: "Effective Diameter (Denier/micron)", pp: "1.5/2/6/15", polyester: "1.5/2/6/15", gf: "12-14" },
  { property: "Specific Gravity", pp: "0.90-0.93", polyester: "1.31-1.37", gf: "2.56-2.60" },
  { property: "Melting Point (°C)", pp: "160-163", polyester: "251-260", gf: "850-1560" },
  { property: "Alkaline Stability", pp: "Very Good", polyester: "Very Good", gf: "Very Good" },
  { property: "Tensile Strength (Mpa)", pp: "420", polyester: "400", gf: "960-1200" },
];

export default function Products() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const categories = [
    {
      id: "flyash",
      title: "Fly Ash",
      tagline: "Enhancing Strength, Sustainability and Concrete Performance",
      gradient: "from-navy/10 to-navy/5",
      icon: <HexCube />,
      products: ["flyash"],
    },
    {
      id: "admixtures",
      title: "Admixtures",
      tagline: "Engineering Better Concrete",
      gradient: "from-orange/10 to-orange/5",
      icon: <Flask />,
      products: ["superplast-509", "superplast-401", "superplast-320"],
    },
    {
      id: "fibers",
      title: "Fibers",
      tagline: "Reinforcing Concrete for the Future",
      gradient: "from-navy/10 to-orange/5",
      icon: <FiberStrands />,
      products: ["fibertech-gf", "fibertech-pp"],
    },
    {
      id: "micro-silica",
      title: "Micro Silica",
      tagline: "Maximum Strength. Maximum Durability.",
      gradient: "from-navy/10 to-orange/5",
      icon: <HexCube />,
      products: ["micro-silica"],
    },
    {
      id: "bulker-service",
      title: "Cement Transportation",
      tagline: "Your Trusted Partner for Bulk Cement Logistics.",
      gradient: "from-navy/10 to-navy/5",
      icon: <HexCube />,
      products: ["bulker-service"],
    },
    {
      id: "rmc-concrete",
      title: "Concrete Trading",
      tagline: "Consistent Strength. Reliable Performance.",
      gradient: "from-orange/10 to-orange/5",
      icon: <HexCube />,
      products: ["rmc-concrete"],
    },
  ];

  const getProduct = (slug: string) => productData[slug as keyof typeof productData];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative py-28 md:py-36 bg-navy overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Premium quality construction materials for modern infrastructure projects
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
        {categories.map((cat, ci) => (
          <section key={cat.id} id={cat.id}>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-navy/60">{cat.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">{cat.title}</h2>
              </div>
              <p className="text-orange font-semibold text-sm mb-8">{cat.tagline}</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((slug, i) => {
                const p = getProduct(slug);
                if (!p) return null;
                const productImages: Record<string, string> = {
                  flyash: "/images/newash.jpg",
                  "superplast-509": "/images/1img.jpeg",
                  "superplast-401": "/images/2img.jpg",
                  "superplast-320": "/images/3img.jpg",
                  "fibertech-gf": "/images/gf.png",
                  "fibertech-pp": "/images/non-gif.jpg",
                  "micro-silica": "/images/microsilica.jpeg",
                  "bulker-service": "/images/bulker-service.png",
                  "rmc-concrete": "/images/batching-plant.jpeg",
                };
                const imgSrc = productImages[slug] || "/images/hero-bg.jpg";
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div
                      onClick={() => setActiveModal(slug)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:border-orange/30 hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={imgSrc} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3">
                          <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                            {cat.icon}
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-white font-bold text-lg drop-shadow-lg">{p.title}</h3>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs text-orange font-semibold mb-2">{p.tagline}</p>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3 line-clamp-2">{p.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {p.benefits.slice(0, 2).map((b, bi) => (
                            <span key={bi} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{b}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-orange font-semibold text-sm mt-auto group-hover:gap-2 transition-all">
                          View Details
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <a
                          href={waProductUrl(p.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                          </svg>
                          Enquire on WhatsApp
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}

        {/* FIBER COMPARISON TABLE */}
        <AnimatedSection>
          <section className="bg-gradient-to-r from-navy/5 to-orange/5 rounded-3xl p-5 sm:p-8 md:p-12 border border-gray-100">
            <h2 className="text-xl sm:text-3xl font-bold text-navy mb-2">Product Comparison</h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Technical specifications across our fiber product range
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full border-collapse min-w-[500px] sm:min-w-0">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold rounded-tl-xl">Property</th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Polypropylene Fibers</th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">Polyester Fibers</th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold bg-orange rounded-tr-xl">FiberTech GF</th>
                  </tr>
                </thead>
                <tbody>
                  {fiberComparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-navy">{row.property}</td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-600">{row.pp}</td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-600">{row.polyester}</td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-orange bg-orange/5">{row.gf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-orange/10 rounded-xl border border-orange/20">
              <p className="text-sm text-gray-700">
                <strong>Key Advantage:</strong> FiberTech GF offers significantly higher tensile strength and durability compared to standard fiber types — meaning fewer cracks and a longer-lasting structure.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* ADMIXTURE GRADE SELECTION GUIDE */}
        <AnimatedSection>
          <section className="bg-gradient-to-r from-navy/5 to-orange/5 rounded-3xl p-5 sm:p-8 md:p-12 border border-gray-100">
            <h2 className="text-xl sm:text-3xl font-bold text-navy mb-2">Choosing the Right Grade</h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
              Select the right Superplast grade based on your concrete application
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full border-collapse min-w-[300px] sm:min-w-0">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold rounded-tl-xl">Concrete Grade Required</th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold bg-orange rounded-tr-xl">Recommended Product</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-white/50">
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-navy">High-grade concrete</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-orange bg-orange/5">Superplast 509</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-white/50">
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-navy">Mid-grade concrete</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-orange bg-orange/5">Superplast 401</td>
                  </tr>
                  <tr className="hover:bg-white/50">
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-navy">Normal/low-grade concrete</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-semibold text-orange bg-orange/5">Superplast 320</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-orange/10 rounded-xl border border-orange/20">
              <p className="text-sm text-gray-700">
                <strong>Easy Selection:</strong> Match your concrete performance requirements to the appropriate Superplast grade for optimal results.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center bg-navy rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you select the best materials for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-light text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Get a Quote
            </a>
            <a
              href="https://wa.me/919167399697"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Product Modals */}
      {activeModal && (() => {
        const p = getProduct(activeModal);
        if (!p) return null;
        return (
          <ProductModal
            isOpen={true}
            onClose={() => setActiveModal(null)}
            title={p.title}
            tagline={p.tagline}
            description={p.description}
            details={p.details}
            benefits={p.benefits}
            dosage={"dosage" in p ? (p as any).dosage : undefined}
            packing={"packing" in p ? (p as any).packing : undefined}
          />
        );
      })()}
    </div>
  );
}

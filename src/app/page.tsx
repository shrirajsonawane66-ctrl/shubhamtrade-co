"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCountUp, AnimatedSection } from "@/components/Animations";
import TestimonialSlider from "@/components/TestimonialSlider";
import ProjectGallery from "@/components/ProjectGallery";
import PerformanceChart from "@/components/PerformanceChart";

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

const trustData = [
  {
    title: "Quality Products",
    desc: "Supplying tested and reliable construction materials that meet industry standards for every project.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L6 10v8c0 8.5 5.8 16.5 14 18 8.2-1.5 14-9.5 14-18v-8L20 4z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
        <path d="M16 20l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Timely Delivery",
    desc: "Ensuring projects stay on schedule with efficient logistics and reliable supply chain management.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="14" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
        <path d="M24 18h4l6 4v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="30" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="28" cy="30" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Industry Expertise",
    desc: "Years of experience serving construction professionals with deep technical knowledge and support.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Customer Commitment",
    desc: "Dedicated support and long-term partnerships built on trust, transparency, and consistent quality.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M8 20c0-4 2-8 6-10l4 6-4 4-6 2v-2zM32 20c0-4-2-8-6-10l-4 6 4 4 6 2v-2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08"/>
        <path d="M8 20l6-2 6 4 6-4 6 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" opacity="0.1"/>
      </svg>
    ),
  },
];

const products = [
  {
    title: "Fly Ash",
    desc: "High-quality fly ash sourced from trusted suppliers for concrete and infrastructure projects.",
    img: "/images/newash.jpg",
    applications: ["Roads & Highways", "High-Rise Buildings", "Industrial Structures", "Mass Concrete"],
    benefits: ["Higher Strength", "Improved Durability", "Reduced Heat of Hydration", "Cost Efficiency"],
  },
  {
    title: "Superplast 509",
    desc: "High-performance PCE-based hyperplasticizer for high-grade concrete applications.",
    img: "/images/1img.jpeg",
    applications: ["High-Performance Concrete", "Precast Elements", "Bridge Decks", "High-Rise Structures"],
    benefits: ["Excellent Workability", "High Water Reduction", "Superior Strength", "Low Dosage"],
  },
  {
    title: "Superplast 401",
    desc: "Mid-performance PCE admixture delivering consistent quality for mid-grade concrete.",
    img: "/images/2img.jpg",
    applications: ["Commercial Buildings", "Residential Projects", "Pavements", "General Construction"],
    benefits: ["Consistent Quality", "Better Finish", "Improved Strength", "Cost-Effective"],
  },
  {
    title: "Superplast 320",
    desc: "Cost-effective PCE admixture for low-grade and standard construction concrete.",
    img: "/images/3img.jpg",
    applications: ["Mass Concrete", "Foundations", "Slab Work", "General Pouring"],
    benefits: ["Economical Solution", "Good Workability", "Reliable Performance", "Easy Mixing"],
  },
  {
    title: "FiberTech GF",
    desc: "Alkaline-resistant glass fiber chopped strands for superior concrete reinforcement.",
    img: "/images/gf.png",
    applications: ["Industrial Flooring", "Tunnel Linings", "Precast Products", "Shotcrete"],
    benefits: ["Crack Resistance", "High Tensile Strength", "Impact Resistance", "Long-Term Durability"],
  },
  {
    title: "FiberTech PP",
    desc: "Polypropylene synthetic fibers engineered to control shrinkage and improve toughness.",
    img: "/images/non-gif.jpg",
    applications: ["Concrete Slabs", "Pavements", "Waterproofing", "Plaster & Mortar"],
    benefits: ["Shrinkage Control", "Improved Toughness", "Enhanced Durability", "Easy Dispersion"],
  },
  {
    title: "Micro Silica (Silica Fume)",
    desc: "High-Performance Micro Silica engineered for superior strength and durability in high-strength concrete.",
    img: "/images/microsilica.jpeg",
    applications: ["High-Rise Buildings", "Bridges", "Marine Structures", "Industrial Flooring", "Water Retaining Structures"],
    benefits: ["Increases Compressive Strength", "Reduces Permeability", "Chemical & Corrosion Resistance", "High-Strength Concrete"],
  },
  {
    title: "Cement Transportation",
    desc: "Fast, safe, and efficient bulk cement delivery for uninterrupted construction operations with our specialized bulker fleet.",
    img: "/images/bulker-service.png",
    applications: ["RMC Plants", "Cement Grinding Units", "Infrastructure Projects", "Industrial Construction", "Large-Scale Commercial Projects"],
    benefits: ["Safe Bulk Cement Handling", "On-Time Delivery", "Cost-Effective Transport", "Reduced Material Loss"],
  },
  {
    title: "Concrete Trading",
    desc: "High-quality Ready Mix Concrete available in grades M10 to M60 for residential, commercial, industrial, and infrastructure projects.",
    img: "/images/batching-plant.jpeg",
    applications: ["Foundations", "Columns & Beams", "Slabs", "Residential & Commercial Buildings", "Roads & Pavements", "Bridges & Infrastructure"],
    benefits: ["High Compressive Strength", "Excellent Durability", "Uniform Quality", "Timely Site Delivery"],
  },
];

function StatCounter({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-bold text-orange mb-1 tracking-tight">
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-white/60 text-sm uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(rgba(0, 25, 80, 0.85), rgba(0, 25, 80, 0.85)),
              url('/images/herobg.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 hex-pattern opacity-[0.07]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="max-w-xl flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 mt-4"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Trusted Construction Materials Supplier
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 text-balance"
            >
              Building Strong Foundations with{" "}
              <span className="text-orange">Premium Construction Materials</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
            >
              Reliable supplier of Fly Ash, Concrete Admixtures, and Industrial Construction Solutions with a commitment to quality, consistency, and on-time delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-12"
            >
              {["Quality Assured Products", "Timely Delivery", "Industry Standard Compliance", "Dedicated Customer Support"].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={waQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-orange hover:bg-orange-light text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange/25 active:scale-[0.98]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Get a Quote
              </a>
              <a
                href="tel:+919167399697"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST SECTION ============ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.15] text-balance mb-5">
              What Sets Shubham Trading Co. Apart
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              We deliver quality, reliability, and expertise — everything you need for successful construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-navy/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-navy/5 to-orange/5 rounded-xl flex items-center justify-center text-navy group-hover:text-orange transition-colors duration-500 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider" />
      </div>

      {/* ============ STATS SECTION ============ */}
      <section className="py-20 md:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-[0.12]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { end: 500, label: "Successful Deliveries", suffix: "+" },
              { end: 100, label: "Projects Supported", suffix: "+" },
              { end: 15, label: "Years of Experience", suffix: "+" },
              { end: 98, label: "Customer Satisfaction", suffix: "%" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <StatCounter end={s.end} label={s.label} suffix={s.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS SECTION — Alternating Layout ============ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Our Products</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.15] text-balance mb-5">
              Premium Construction Materials
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Comprehensive range of high-quality construction materials for every project need
            </p>
          </div>

          <div className="space-y-10">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-500`}
              >
                <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                  <Image src={product.img} alt={product.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-orange text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                    Product 0{i + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">{product.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{product.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">Applications</p>
                      <ul className="space-y-1.5">
                        {product.applications.map((a, ai) => (
                          <li key={ai} className="text-sm text-gray-500 flex items-center gap-2">
                            <span className="w-1 h-1 bg-orange rounded-full flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">Benefits</p>
                      <ul className="space-y-1.5">
                        {product.benefits.map((b, bi) => (
                          <li key={bi} className="text-sm text-gray-500 flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-6">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      View Full Details
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href={waProductUrl(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                      </svg>
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
            >
              View All Products
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES SECTION ============ */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Industries</span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.15] text-balance mb-5">
                Industries We Serve
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                We supply premium construction materials across a wide range of industries and project types throughout Mumbai and beyond.
              </p>
            </div>
            <div className="lg:col-span-3 space-y-5">
              {[
                { title: "Residential Construction", desc: "Quality materials for housing and apartment projects from individual homes to large complexes." },
                { title: "Commercial Projects", desc: "Supplying malls, offices, and institutional buildings with consistent quality materials." },
                { title: "Infrastructure Development", desc: "Roads, bridges, tunnels, and public works — partnering on large-scale infrastructure." },
                { title: "Industrial Facilities", desc: "Factories, warehouses, and industrial structures requiring high-grade materials." },
                { title: "RMC Plants", desc: "Bulk supply partnerships with ready-mix concrete plants across the Mumbai region." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="group p-6 rounded-2xl bg-gray-50 hover:bg-navy transition-all duration-500 border border-transparent hover:border-white/10 cursor-default"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /><path d="M15 5l6 6" /></>}
                        {i === 1 && <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                        {i === 2 && <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />}
                        {i === 3 && <path d="M3 21h18M3 10h18M3 7l9-4 9 4M6 10v11M12 10v11M18 10v11" />}
                        {i === 4 && <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-lg mb-1.5 group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BUSINESS PERFORMANCE ============ */}
      <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-[0.12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Performance</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] text-balance mb-5">
              Our Performance & Growth
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Consistent quality, reliable delivery, and customer satisfaction — tracked and proven.
            </p>
          </div>
          <PerformanceChart />
        </div>
      </section>

      {/* ============ PROJECT GALLERY ============ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Gallery</span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.15] text-balance mb-5">
                Our Work & Supply Network
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                A glimpse into our operations, project support, and material supply in action
              </p>
            </div>
            <span className="text-gray-400 text-sm hidden lg:block">Click any image to view full size</span>
          </div>
          <ProjectGallery />
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-[1.15] text-balance mb-5">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Trusted by contractors, builders, and infrastructure developers across Mumbai and beyond
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ============ QUOTE SECTION ============ */}
      <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-[0.08]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Get a Quote</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] text-balance mb-5">
                Request a Quote
              </h2>
              <p className="text-white/60 leading-relaxed text-lg mb-10">
                Tell us about your material requirements and our team will get back to you with competitive pricing and product recommendations.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Fast Response", desc: "We reply within 2-4 hours" },
                  { title: "Competitive Pricing", desc: "Best rates for bulk and retail" },
                  { title: "Technical Guidance", desc: "Expert advice on product selection" },
                  { title: "Bulk Supply Support", desc: "Seamless logistics for large orders" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10">
                <h3 className="text-white font-bold text-xl mb-7">Send Your Inquiry</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const data = new FormData(form);
                    const msg = `Hello Shubham Trading Co,

I would like a quotation for:

Name: ${data.get("name") || ""}
Company: ${data.get("company") || ""}
Phone: ${data.get("phone") || ""}
Email: ${data.get("email") || ""}
Material Required: ${data.get("material") || ""}
Quantity: ${data.get("quantity") || ""}
Project Location: ${data.get("location") || ""}
Message: ${data.get("message") || ""}

Please share pricing and availability.`;
                    window.open(`https://wa.me/919167399697?text=${encodeURIComponent(msg)}`, "_blank");
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                    <input type="text" name="company" placeholder="Company Name" className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                    <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="material" placeholder="Material Required" required className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                    <input type="text" name="quantity" placeholder="Required Quantity" className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                  </div>
                  <input type="text" name="location" placeholder="Project Location" className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all" />
                  <textarea name="message" placeholder="Additional Message" rows={3} className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/[0.15] transition-all resize-none" />
                  <button
                    type="submit"
                    className="w-full bg-orange hover:bg-orange-light text-white py-4 rounded-xl font-semibold text-sm transition-all hover:shadow-xl hover:shadow-orange/25 active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    Send Inquiry via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-orange to-orange-dark relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-[0.08]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-balance mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today for expert guidance, competitive quotes, and reliable material supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-navy px-10 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/20 active:scale-[0.98]"
            >
              <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Get Best Price on WhatsApp
            </a>
            <a
              href="tel:+919167399697"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

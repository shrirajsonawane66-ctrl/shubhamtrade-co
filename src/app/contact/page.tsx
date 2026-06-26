"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/Animations";

export default function Contact() {
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
            Let&apos;s Build Something Strong Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Reach out to us for inquiries, quotes, or expert guidance on your construction material needs
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE - Contact Information */}
          <div className="space-y-8">
            <AnimatedSection>
              <span className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Get in Touch</span>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-navy">Contact Information</h2>
                  <p className="text-gray-500 text-sm">Shubham Trading Co.</p>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed">
                We are here to assist you with your construction material needs. Contact us through any of the following channels:
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-navy hover:text-white group transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                  <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-orange transition-colors">Phone & WhatsApp</h3>
                  <a
                    href="tel:+919167399697"
                    className="text-gray-600 group-hover:text-white/70 transition-colors text-sm"
                  >
                    +91 9167399697
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-navy hover:text-white group transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                  <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-orange transition-colors">Email Address</h3>
                  <a
                    href="mailto:shubhamtradingcompany19@gmail.com"
                    className="text-gray-600 group-hover:text-white/70 transition-colors text-sm break-all"
                  >
                    shubhamtradingcompany19@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-navy hover:text-white group transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                  <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-orange transition-colors">Office Address</h3>
                  <p className="text-gray-600 group-hover:text-white/70 transition-colors text-sm leading-relaxed">
                    B2/3, Room No. 20, Sector 15, Vashi, Navi Mumbai – 400703
                  </p>
                </div>
              </motion.div>

              {/* GST */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-navy hover:text-white group transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                  <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.018L18 9.75v7.5a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 017.5 16.5V9.75a2.25 2.25 0 00-2.25-2.25H9a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 007.5 18h7.5a2.25 2.25 0 002.25-2.25V9.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-orange transition-colors">GST Number</h3>
                  <p className="text-gray-600 group-hover:text-white/70 transition-colors text-sm">
                    27ABKPW4972C1Z8
                  </p>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-navy hover:text-white group transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                  <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-orange transition-colors">Business Hours</h3>
                  <p className="text-gray-600 group-hover:text-white/70 transition-colors text-sm">
                    Monday – Saturday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-gray-500 group-hover:text-white/50 transition-colors text-sm">
                    Sunday: Emergency only
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE - CTA & Actions */}
          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 md:p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">Talk Directly with Our Team</h3>
                <p className="text-white/70 mb-8 text-sm">
                  Get an instant response via WhatsApp or give us a call
                </p>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919167399697?text=Hi%2C%20I%27d%20like%20more%20info%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>

                  {/* Call Us */}
                  <a
                    href="tel:+919167399697"
                    className="flex items-center justify-center gap-3 w-full bg-orange hover:bg-orange-light text-white py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us Now
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:shubhamtradingcompany19@gmail.com"
                    className="flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send an Email
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Google Map */}
            <AnimatedSection delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6523952625155!2d72.99076687510138!3d19.03465629838434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8e3e3e3e3e%3A0x8e4c8c4c4c4c4c4c!2sB2%2F3%2C%20Room%20No.%2020%2C%20Sector%2015%2C%20Vashi%2C%20Navi%20Mumbai%20-%20400703!5e0!3m2!1sen!2sin!4v1234567890123!6m8!1m7!1s0x3be7cf8e3e3e3e3e%3A0x8e4c8c4c4c4c4c4c!2m2!1d19.03465629838434!2d72.99076687510138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8e3e3e3e3e%3A0x8e4c8c4c4c4c4c4c!2m2!1d19.03465629838434!2d72.99076687510138!3m2!3m1!1s0x3be7cf8e3e3e3e3e%3A0x8e4c8c4c4c4c4c4c!5m2!1d19.03465629838434!2d72.99076687510138"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shubham Trading Co. Location"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "On-Time Delivery", value: 98, suffix: "%", color: "bg-orange" },
  { label: "Customer Satisfaction", value: 96, suffix: "%", color: "bg-orange" },
  { label: "Supply Growth", value: 85, suffix: "%", color: "bg-orange" },
];

const statCards = [
  { label: "On-Time Delivery", value: "98%", sub: "Consistent track record" },
  { label: "Deliveries Completed", value: "500+", sub: "Across Mumbai & region" },
  { label: "Projects Supported", value: "100+", sub: "Residential to infrastructure" },
  { label: "Customer Support", value: "24/7", sub: "Always available" },
];

function BarChart() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-white font-bold text-lg mb-6">Performance Metrics</h3>
      <div className="space-y-6">
        {metrics.map((m, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm text-white/70 mb-2">
              <span>{m.label}</span>
              <span className="text-orange font-bold">{m.value}{m.suffix}</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${m.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                className={`h-full rounded-full ${m.color} relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PerformanceChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-3xl md:text-4xl font-bold text-orange mb-1">{card.value}</div>
            <div className="text-white font-semibold text-sm mb-1">{card.label}</div>
            <div className="text-white/50 text-xs">{card.sub}</div>
          </motion.div>
        ))}
      </div>
      <BarChart />
    </div>
  );
}

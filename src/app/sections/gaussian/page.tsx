"use client"

import { motion } from "framer-motion";

export default function GaussianSplating() {
  return (
    <section className="px-6 sm:px-8 md:px-16 py-24 sm:py-32 bg-[#F9F7F4] border-b border-[#E3DDD6]">
      <div className="max-w-5xl mx-auto text-center">
        {/* SMALL LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-[#9C6B4E]"
        >
          Introduction
        </motion.span>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-light"
        >
          Gaussian Splatting
        </motion.h2>

        {/* MUSEUM TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="
        mt-8
        text-[#6B6B6B]
        leading-relaxed
        max-w-3xl
        mx-auto
        text-base
        md:text-lg
      "
        >
          Gaussian Splatting represents a new approach to three-dimensional
          reconstruction, transforming captured imagery into immersive spatial
          representations. By modeling scenes as millions of adaptive Gaussian
          primitives, this technique enables highly detailed visualization while
          maintaining real-time performance, redefining how physical
          environments are preserved and experienced in digital form.
        </motion.p>

        {/* CLASSIC DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 w-24 h-px bg-[#9C6B4E] mx-auto"
        />
      </div>
    </section>
  );
}

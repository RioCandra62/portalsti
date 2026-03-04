"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Collections from "./sections/collections/page";
import Applications from "./sections/applications/page";
import GaussianSplating from "./sections/gaussian/page";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // ✨ luxury easing
    },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Home() {
  return (
    <main className=" text-[#1E1E1E]">
      {/* ================= HERO ================= */}
      <section
        className="min-h-[90vh] flex items-center px-6 sm:px-8 md:px-16 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1762766768563-7a10e34231e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="max-w-6xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              leading-tight
              text-[#F7F2EE]
            "
          >
            Reconstructing <br /> Reality from Space
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="
              mt-6
              max-w-xl
              text-base
              sm:text-lg
              text-[#F7F2EE]
            "
          >
            A spatial visualization studio transforming PortalCam survey data
            into immersive 3D surfaces using Gaussian Splatting.
          </motion.p>
        </div>
      </section>

      {/* ================= GAUSSIAN SPLATTING ================= */}
      <GaussianSplating />

      {/* ================= STATEMENT ================= */}
      <motion.section
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-8 md:px-16 py-32 bg-[#F2EEE9]"
      >
        <p className="max-w-3xl text-2xl font-light leading-relaxed text-center mx-auto">
          We treat spatial data not merely as measurements, but as curated
          artifacts — reconstructed, refined, and presented with clarity.
        </p>
      </motion.section>

      {/* ================= FEATURED TECHNOLOGY ================= */}
      <section className="px-6 sm:px-8 md:px-16 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xs tracking-widest uppercase text-[#9C6B4E]">
              Featured Technology
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-light">PortalCam</h2>

            <p className="mt-6 max-w-md mx-auto md:mx-0 text-[#6B6B6B] leading-relaxed">
              A mobile spatial scanning device designed for rapid on-site 3D
              data acquisition, optimized for precision and efficiency.
            </p>

            <div className="mt-10 w-24 h-px bg-[#9C6B4E] mx-auto md:mx-0" />
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 border border-[#E3DDD6] translate-x-4 translate-y-4" />
              <div className="relative bg-white p-10 md:p-14 shadow-sm">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0754/1882/9074/files/PortalCam.png?v=1757527583"
                  width={620}
                  height={480}
                  alt="PortalCam Device"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <Collections />
      {/* ================= USE CASES ================= */}
      <Applications />

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="px-8 md:px-16 py-40 text-center bg-[#F2EEE9]"
      >
        <h2 className="text-4xl font-light">Explore Spatial Reality</h2>

        <p className="mt-6 text-[#6B6B6B]">
          Discover how spatial data can be transformed into immersive digital
          artifacts.
        </p>

        <button className="mt-12 px-10 py-4 bg-[#9C6B4E] text-white tracking-wide hover:opacity-90 transition">
          Request Demo
        </button>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="px-8 md:px-16 py-12 border-t border-[#E3DDD6] text-sm text-[#6B6B6B] bg-[#FAFAF8]">
        © 2026 TerraSplat Studio — Spatial Visualization Platform
      </footer>
    </main>
  );
}

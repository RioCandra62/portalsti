"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroductionPage() {
  return (
    <main className="bg-[#F6F6F4] text-black font-serif">
      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-16 text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1632127257893-6136dd9191fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light tracking-wide text-[#FAFAF8]"
          >
            PortalSTI Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 text-lg text-[#FAFAF8] leading-relaxed"
          >
            A digital archive of spatial environments captured through modern 3D
            scanning technology, transforming real-world locations into
            immersive digital experiences.
          </motion.p>

          <div className="mt-10 w-24 h-px bg-[#9C6B4E] mx-auto" />
        </div>
      </section>

      {/* STI PROFILE */}
      <section className="px-6 md:px-16 py-28 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-[#9C6B4E]">
            Company
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Survey Teknologi Indonesia
          </h2>

          <p className="mt-8 text-[#6B6B6B] leading-relaxed">
            Survey Teknologi Indonesia (STI) is a technology-driven organization
            specializing in spatial data acquisition, digital mapping, and 3D
            documentation. Through the integration of modern surveying tools and
            advanced processing workflows, STI produces accurate digital
            representations of real-world environments.
          </p>

          <p className="mt-6 text-[#6B6B6B] leading-relaxed">
            PortalSTI Studio represents an initiative to present spatial data
            through immersive digital visualization, making complex
            technological processes accessible through engaging visual
            platforms.
          </p>

          <div className="mt-12 w-24 h-px bg-[#9C6B4E] mx-auto" />
        </div>
      </section>

      {/* GAUSSIAN SPLATTING */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-widest uppercase text-[#9C6B4E]">
              Technology
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              3D Gaussian Splatting
            </h2>

            <p className="mt-6 text-[#6B6B6B] leading-relaxed max-w-md">
              3D Gaussian Splatting is a modern method for reconstructing
              realistic 3D environments from photographs. Instead of using
              traditional polygon meshes, scenes are represented by thousands of
              volumetric points that store color, position, and light
              information.
            </p>

            <p className="mt-4 text-[#6B6B6B] leading-relaxed max-w-md">
              This technique enables detailed spatial visualization while
              maintaining high rendering performance, making it ideal for
              immersive digital environments.
            </p>

            <div className="mt-10 w-20 h-px bg-[#9C6B4E]" />
          </motion.div>

          {/* VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 border border-[#E3DDD6] translate-x-4 translate-y-4" />

              <div className="relative bg-white p-10 shadow-sm">
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1400/1*FD9cboFOpB5Q1BGIbudA_Q.png"
                  alt="Gaussian Splatting"
                  width={600}
                  height={400}
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTALCAM DEVICE */}
      <section className="px-6 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[8pc] items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 border border-[#E3DDD6] translate-x-4 translate-y-4" />

              <div className="relative bg-white p-10 shadow-sm">
                <Image
                  src="https://openelab.io/cdn/shop/files/xgrids-portalcam-premium-kit_5.webp?v=1770836263&width=713"
                  width={620}
                  height={480}
                  alt="PortalCam Device"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-widest uppercase text-[#9C6B4E]">
              Capture Device
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              XGRIDS PortalCam
            </h2>

            <p className="mt-6 text-[#6B6B6B] leading-relaxed max-w-md">
              The XGRIDS PortalCam is a portable spatial scanning device
              designed for rapid on-site 3D data acquisition. Combining LiDAR
              sensing with high-resolution imaging, the device captures both
              geometry and texture of real-world environments.
            </p>

            <p className="mt-4 text-[#6B6B6B] leading-relaxed max-w-md">
              Its mobility allows efficient scanning of architectural spaces,
              heritage sites, and infrastructure while maintaining professional
              spatial accuracy.
            </p>

            <div className="mt-10 mb-5 w-20 h-px bg-[#9C6B4E]" />

            <a href="https://xgrids.com/intl/portalcam" className="text-xs tracking-widest uppercase text-[#9C6B4E] hover:scale-110 cursor-pointer">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

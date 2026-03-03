"use client";

import { motion } from "framer-motion";

const applications = [
  {
    title: "3D Digitization of World Heritage Sites",
    image:
      "https://plus.unsplash.com/premium_photo-1678303396234-4180231353df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Infrastructure Inspection",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
  },
  {
    title: "Digital Twin & Visualization",
    image:
      "https://images.unsplash.com/photo-1770929685519-8e8d29dbcf45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real Estate Marketing",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  },
];

export default function Applications() {
  return (
    <section className="px-8 md:px-16 py-40 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-light mb-20">
          Applications & Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {applications.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[420px] overflow-hidden cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="
                  absolute inset-0
                  w-full h-full object-cover
                  transition duration-700
                  group-hover:scale-110
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* TEXT */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-light">
                  {item.title}
                </p>

                <div className="mt-4 w-12 h-px bg-white/70 transition-all group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
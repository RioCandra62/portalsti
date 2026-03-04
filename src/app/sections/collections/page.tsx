"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { getScanData } from "@/lib/neon/scan";

export default function Collections() {
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

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const dicta = await getScanData();
      setData(dicta);
    }
    getData();
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fade}
      className="px-8 md:px-16 pt-32 pb-16 bg-[#F2EEE9]"
    >
      <h2 className="text-4xl font-light mb-16">Spatial Collections</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
        {data.slice(0, 3).map((scan, i) => {
          return (
            <motion.a
              href={`/detail/${encodeURIComponent(scan.name)}`}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E3DDD6] hover:shadow-md transition"
            >
              <div
                className="h-64 flex items-center justify-center border-b border-[#E3DDD6] bg-cover bg-center"
                style={{ backgroundImage: `url(${scan.thumbnail})` }}
              ></div>

              <div className="p-6">
                <p className="text-lg">{scan.name}</p>
                <p className="mt-1 text-xs text-[#6B6B6B]">
                  Gaussian Splat · PortalCam
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
      <div className="flex w-full">
        <a
          href="/collections"
          className="text-2xl font-light mt-16 mx-auto hover:scale-110 hover:shadow-lg shadow flex px-6 py-2 border rounded-lg"
        >
          View More{" "}
        </a>
      </div>
    </motion.section>
  );
}

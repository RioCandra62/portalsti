"use client";
import { useEffect, useState } from "react";
import { getScanData } from "@/lib/neon/scan";

export default function Collections() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const dicta = await getScanData();
      setData(dicta);
    }
    getData();
  });

  return (
    <>
      <h2 className="text-xl md:text-2xl pt-12 px-12 ">ALL COLLECTIONS</h2>
      <section
        className="
        px-6 md:px-16
        py-10 md:py-12
        grid
        gap-10
        md:grid-cols-4
        flex-1
      "
      >
        {/* LEFT BIG */}
        <a href="" className="md:col-span-3">
          <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>
          <img
            src="/assets/image/rotterdam.png"
            className="
              w-full
              h-[260px]
              sm:h-[320px]
              md:h-[420px]
              object-cover
              mb-4
            "
          />

          <h3
            className="
            text-lg
            md:text-2xl
            leading-snug
          "
          >
            A historic landmark that reflects Makassar’s rich cultural heritage,
            where timeless architecture preserves stories of the city’s past.
          </h3>
        </a>

        {/* RIGHT ARTICLE */}
        <div className="md:row-span-2 ">
          <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

          <img
            src="https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="
              w-full
              h-[220px]
              sm:h-[260px]
              md:h-[60pc]
              object-cover
              mb-4
            "
          />

          <h4
            className="
            text-base
            md:text-lg
            leading-snug
          "
          >
            A striking waterfront mosque that blends modern architectural beauty
            with a serene spiritual atmosphere.
          </h4>
        </div>

        {/* 3rd ARTICLE */}
        <div>
          <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

          <img
            src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="
              w-full
              h-[220px]
              sm:h-[260px]
              object-cover
              mb-4
            "
          />

          <h4
            className="
            text-base
            md:text-lg
            leading-snug
          "
          >
            A striking waterfront mosque that blends modern architectural beauty
            with a serene spiritual atmosphere.
          </h4>
        </div>

        {/* 4th ARTICLE */}
        <div className="md:col-span-2">
          <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

          <img
            src="https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="
              w-full
              h-[220px]
              sm:h-[260px]
              md:h-[360px]
              object-cover
              mb-4
            "
          />

          <h4
            className="
            text-base
            md:text-lg
            leading-snug
          "
          >
            A striking waterfront mosque that blends modern architectural beauty
            with a serene spiritual atmosphere.
          </h4>
        </div>

        {/* 5th  ARTICLE */}
        <div className="md:col-span-2">
          <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

          <img
            src="https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="
              w-full
              h-[220px]
              sm:h-[260px]
              md:h-[360px]
              object-cover
              mb-4
            "
          />

          <h4
            className="
            text-base
            md:text-lg
            leading-snug
          "
          >
            A striking waterfront mosque that blends modern architectural beauty
            with a serene spiritual atmosphere.
          </h4>
        </div>

        {/* 6th ARTICLE */}
        <div className="md:col-span-2">
          <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

          <img
            src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="
              w-full
              h-[220px]
              sm:h-[260px]
              md:h-[360px]
              object-cover
              mb-4
            "
          />

          <h4
            className="
            text-base
            md:text-lg
            leading-snug
          "
          >
            A striking waterfront mosque that blends modern architectural beauty
            with a serene spiritual atmosphere.
          </h4>
        </div>
      </section>
    </>
  );
}

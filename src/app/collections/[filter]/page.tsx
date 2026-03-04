"use client";

import { getAllFilter } from "@/lib/neon/scan";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterPage() {
  const params = useParams();
  const filter = decodeURIComponent(params.filter as string);

  // ✅ data asli
  const [filterData, setFilterData] = useState<any[]>([]);

  // ✅ hasil filter
  const [filteredData, setFilteredData] = useState<any[]>([]);

  // ================= GET DATA =================
  useEffect(() => {
    async function getFilter() {
      const data = await getAllFilter();
      setFilterData(data);
    }

    getFilter();
  }, []);

  // ================= FILTER DATA =================
  useEffect(() => {
    if (!filterData.length) return;

    const result = filterData.filter(
      (ftr) =>
        ftr.filter_name?.trim().toLowerCase() === filter.trim().toLowerCase(),
    );

    setFilteredData(result);
  }, [filterData, filter]);

  // ================= UI =================

  const getLayout = (index: number) => {
    switch (index) {
      case 0:
        return "hero";
      case 1:
        return "tall";
      case 3:
      case 4:
      case 5:
        return "wide";
      default:
        return "normal";
    }
  };
  return (
    <>
      <h2 className="text-xl md:text-2xl pt-12 px-12">
        {filter.toUpperCase()}
      </h2>

      <section
        className="
    px-6 md:px-16
    py-10 md:py-12
    grid gap-10
    md:grid-cols-4
  "
      >
        {filteredData.map((item, index) => {
          const layout = getLayout(index);

          return (
            <a
            href={`/detail/${encodeURIComponent(item.name)}`}
              key={item.id}
              className={`
          ${layout === "hero" && "md:col-span-3"}
          ${layout === "tall" && "md:row-span-2"}
          ${layout === "wide" && "md:col-span-2"}
        `}
            >
              {layout === "hero" && (
                <h2 className="text-xl md:text-2xl mb-6">{item.name}</h2>
              )}

              <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

              <img
                src={item.thumbnail}
                className={`
            w-full object-cover mb-4
            ${
              layout === "hero"
                ? "h-[420px]"
                : layout === "tall"
                  ? "md:h-[60pc] h-[260px]"
                  : layout === "wide"
                    ? "md:h-[360px] h-[260px]"
                    : "h-[260px]"
            }
          `}
              />

              <h3
                className="
            text-lg
            md:text-2xl
            leading-snug
          "
              >
                A historic landmark that reflects Makassar’s rich cultural
                heritage, where timeless architecture preserves stories of the
                city’s past.
              </h3>
            </a>
          );
        })}
      </section>
    </>
  );
}

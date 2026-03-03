export default function Collections() {
  return (
    <main className="bg-[#F6F6F4] text-black font-serif">

      {/* ================= HEADER ================= */}
      <header className="border-b">
        {/* <div className="flex justify-between items-center px-8 md:px-16 py-4 text-sm">
          <p>THE ART NEWSPAPER</p>

          <button className="border px-4 py-1">
            Menu ☰
          </button>

          <div className="flex gap-6">
            <p>SEARCH</p>
            <p>SIGN IN</p>
            <p>SIGN UP</p>
          </div>
        </div> */}

        {/* BIG TITLE */}
        <div className="text-center border-t border-b py-10">
          <h1 className="text-7xl md:text-9xl tracking-wide">
            Gaussian Splatting
          </h1>
        </div>

        {/* CATEGORY */}
        <nav className="flex justify-center gap-10 text-xs py-4 border-b">
          <p>ART MARKET</p>
          <p>MUSEUMS & HERITAGE EVENTS</p>
          <p>EVENTS</p>
          <p>REVIEW</p>
          <p>BOOKS</p>
          <p>PODCASTS</p>
        </nav>
      </header>

      {/* ================= FEATURE SECTION ================= */}
      <section className="px-8 md:px-16 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT BIG */}
        <div className="md:col-span-2">
          <h2 className="text-2xl mb-6">ALL COLLECTIONS</h2>

          <img
            src="https://images.unsplash.com/photo-1580136579312-94651dfd596d"
            className="w-full h-[420px] object-cover mb-4"
          />

          <h3 className="text-2xl leading-snug">
            Record For Barkley Hendricks And $18.2m Calder
            At Otherwise Unremarkable Sotheby's Sale
          </h3>
        </div>

        {/* RIGHT ARTICLE */}
        <div>
          <p className="text-xs mb-2">
            ART MARKET • 22 JUN 2024
          </p>

          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
            className="h-[260px] w-full object-cover mb-4"
          />

          <h4 className="text-lg">
            With New Chelsea Space, Nara Roesler Expands
            Brazilian Presence In New York.
          </h4>
        </div>
      </section>

      {/* ================= GRID NEWS ================= */}
      {/* <section className="px-8 md:px-16 grid md:grid-cols-4 gap-8 border-t pt-10">

        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <img
              src={`https://picsum.photos/600/500?random=${i}`}
              className="w-full h-[220px] object-cover mb-3"
            />

            <p className="text-xs mb-1">
              ART MARKET • 22 JUN 2024
            </p>

            <h4 className="text-sm leading-snug">
              Why The Van Gogh Museum Might Never Have
              Existed New Research Reveals How The Family
              Collection Was Nearly Sold.
            </h4>
          </div>
        ))}

      </section> */}

      {/* ================= LARGE + SIDE ================= */}
      {/* <section className="px-8 md:px-16 py-16 grid md:grid-cols-3 gap-10 border-t">

        <div className="md:col-span-2">
          <h2 className="text-2xl mb-6">ALL NEWS</h2>

          <img
            src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9"
            className="w-full h-[420px] object-cover mb-4"
          />

          <h3 className="text-xl">
            Humboldt Forum The Empire Strikes Back?
          </h3>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
            className="w-full h-[520px] object-cover mb-4"
          />

          <h4>
            Rare Georges De La Tour Painting Sells
            For Record €3.2m.
          </h4>
        </div>

      </section> */}

      {/* ================= RELATED ================= */}
      {/* <section className="px-8 md:px-16 border-t pt-12">

        <h2 className="text-2xl mb-10">
          RELATED NEWS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <img
                src={`https://picsum.photos/500/500?random=${i + 10}`}
                className="w-full h-[220px] object-cover mb-3"
              />

              <p className="text-xs">
                ART MARKET • 22 JUN 2024
              </p>

              <h4 className="text-sm">
                We Have Broaden Our Reach,
                Be More Interesting.
              </h4>
            </div>
          ))}
        </div>

      </section> */}

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1A1A1A] text-white mt-20">
        <div className="px-8 md:px-16 py-10 grid md:grid-cols-3 text-sm">

          <p>FOLLOW</p>

          <div className="text-center">
            <p>ENTER YOUR EMAIL</p>
            <p className="underline mt-2">
              EXHIBITION MAGAZINE
            </p>
          </div>

          <p className="text-right">
            LEGAL <br /> SUBSCRIBE
          </p>

        </div>

        <div className="border-t border-gray-700 text-center py-4 text-xs">
          ©2024 | ALL RIGHT RESERVED
        </div>
      </footer>

    </main>
  );
}
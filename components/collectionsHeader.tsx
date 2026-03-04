export default function CollectionsHeader() {
  return (
    <header className="border-b">
      {/* BIG TITLE */}
      <div className="text-center border-y py-8 md:py-10">
        <h1
          className="
            text-4xl
            sm:text-6xl
            md:text-8xl
            lg:text-9xl
            tracking-wide
          "
        >
          Gaussian Splatting
        </h1>
      </div>

      {/* CATEGORY */}
      <nav
        className="
          flex gap-6 md:gap-10
          py-4 border-b
          overflow-x-auto
          px-6 md:px-0
          justify-start md:justify-center
          text-sm whitespace-nowrap
        "
      >
        <a href={`/collections`}>
          All
        </a>
        <a href={`/collections/${encodeURIComponent("Architecture")}`}>
          Architecture
        </a>
        <a href={`/collections/${encodeURIComponent("Heritage")}`}>Heritage</a>
        <a href={`/collections/${encodeURIComponent("Urban")}`}>Urban</a>
        <a href={`/collections/${encodeURIComponent("Nature")}`}>Nature</a>
        <a href={`/collections/${encodeURIComponent("Infrastructure")}`}>Infrastructure</a>
        <a href={`/collections/${encodeURIComponent("Interior")}`}>Interior</a>
        <a href={`/collections/${encodeURIComponent("Object")}`}>Object</a>
        <a href={`/collections/${encodeURIComponent("Digital Twin")}`}>Digital Twin</a>
      </nav>
    </header>
  );
}

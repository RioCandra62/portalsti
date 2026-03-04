export default function CollectionsFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-16 md:mt-20">
      <div
        className="
          px-6 md:px-16
          py-10
          grid
          gap-8
          text-sm
          md:grid-cols-3
          text-center md:text-left
        "
      >
        <p>FOLLOW</p>

        <div>
          <p>ENTER YOUR EMAIL</p>
          <p className="underline mt-2">EXHIBITION MAGAZINE</p>
        </div>

        <p className="md:text-right">
          LEGAL <br /> SUBSCRIBE
        </p>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-xs">
        ©2024 | ALL RIGHT RESERVED
      </div>
    </footer>
  );
}

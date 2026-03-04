import CollectionsFooter from "../../../components/collectionsFooter";
import CollectionsHeader from "../../../components/collectionsHeader";

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <main className="bg-[#F6F6F4] text-black font-serif min-h-[91vh] flex flex-col">
      <CollectionsHeader />
      <div className="flex-1">
        {children}
      </div>
      <CollectionsFooter />
    </main>
  );
}
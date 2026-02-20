import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useGallery } from "@/hooks/use-gallery";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const { data: items, isLoading } = useGallery();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Realism", "Traditional", "Black & Grey", "Color", "Piercing"];
  
  // Create derived categories from actual data if available, else use defaults
  const availableCategories = items 
    ? ["All", ...Array.from(new Set(items.map(i => i.category)))]
    : categories;

  const filteredItems = filter === "All" 
    ? items 
    : items?.filter(item => item.category === filter);

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Section>
        <SectionHeader title="Our Masterpieces" subtitle="Gallery" center />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 text-sm font-display tracking-wider uppercase border transition-all duration-300",
                filter === cat 
                  ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(255,34,0,0.3)]" 
                  : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems?.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden border border-white/5 bg-card"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs uppercase tracking-widest font-bold mb-1">{item.category}</span>
                  <h3 className="text-white font-display text-xl">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">by {item.artistName}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!isLoading && filteredItems?.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>No images found in this category.</p>
          </div>
        )}
      </Section>
    </div>
  );
}

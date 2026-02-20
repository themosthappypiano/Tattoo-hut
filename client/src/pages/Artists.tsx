import { Section, SectionHeader } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Mock data for artists (since schema doesn't have an Artists table yet)
const artists = [
  {
    id: 1,
    name: "Alex 'Ink' Morgan",
    role: "Realism Specialist",
    bio: "With over 10 years of experience, Alex specializes in hyper-realistic portraits and black & grey work. His attention to detail is unmatched in the industry.",
    image: "/images/image_1771590016477.png", // Using provided image
    instagram: "@alex_ink",
  },
  {
    id: 2,
    name: "Sarah 'Viper' Chen",
    role: "Neo-Traditional & Color",
    bio: "Sarah brings vibrant colors and bold lines to life. Her neo-traditional style mixes classic motifs with modern color theory for tattoos that pop.",
    image: "/images/image_1771590042708.png", // Using provided image
    instagram: "@viper_tattoos",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Geometric & Dotwork",
    bio: "A master of sacred geometry and intricate dotwork. Marcus creates mesmerizing patterns that flow perfectly with the body's natural contours.",
    image: "/images/image_1771589993398.png", // Using provided image
    instagram: "@thorne_geo",
  }
];

export default function Artists() {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Section>
        <SectionHeader title="The Crew" subtitle="Meet Your Artists" center />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artists.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 overflow-hidden group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-display text-white mb-1">{artist.name}</h3>
                  <p className="text-primary text-sm uppercase tracking-wider font-bold">{artist.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {artist.bio}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                  <Link href="/book">
                    <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white rounded-none text-xs tracking-widest font-bold">
                      BOOK NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

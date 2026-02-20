import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Clock, ShieldCheck, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useGallery } from "@/hooks/use-gallery";

export default function Home() {
  const { data: gallery } = useGallery();
  const featuredImages = gallery?.slice(0, 4) || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10" />
          {/* Using a static placeholder for hero or one of the provided images if suitable. 
              Using Unsplash as per instructions for hero content */}
          {/* dark tattoo studio ambiance */}
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1920&auto=format&fit=crop" 
            alt="Tattoo Studio Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary text-sm md:text-base uppercase tracking-[0.4em] mb-4 font-bold">
              Premium Custom Tattoo Studio
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-6 tracking-tight">
              ART THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">LASTS</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
              Where tradition meets modern artistry. Our expert artists bring your unique vision to life with precision, safety, and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-none font-display tracking-widest shadow-[0_0_20px_rgba(255,34,0,0.4)] hover:shadow-[0_0_30px_rgba(255,34,0,0.6)] transition-all">
                  BOOK APPOINTMENT
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none font-display tracking-widest backdrop-blur-sm">
                  VIEW GALLERY
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-card/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Palette, title: "Custom Design", desc: "Every piece is unique, designed specifically for you by expert artists." },
            { icon: ShieldCheck, title: "Sterile & Safe", desc: "Hospital-grade sterilization and highest hygiene standards guaranteed." },
            { icon: Star, title: "Award Winning", desc: "Recognized excellence in realism, traditional, and geometric styles." },
            { icon: Clock, title: "Walk-ins Welcome", desc: "Spontaneous inspiration? We have artists available for walk-ins daily." },
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-white/5 bg-background/50 hover:bg-background hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-20" />
            <img 
              src="/images/image_1771590016477.png" 
              alt="Artist at work" 
              className="w-full h-auto object-cover border border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <SectionHeader title="More Than Just Ink" subtitle="About Us" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded on the principles of artistic integrity and customer care, Tattoo Hut has established itself as a premier destination for body art. We believe that a tattoo is more than just ink on skin—it's a transformative experience and a lifelong commitment.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our studio provides a clean, welcoming atmosphere where you can feel comfortable expressing your ideas. Whether it's your first tattoo or your fiftieth, we treat every project with the same level of dedication and respect.
            </p>
            <Link href="/artists">
              <Button className="group text-primary hover:text-white p-0 h-auto bg-transparent hover:bg-transparent font-display tracking-wider">
                MEET THE ARTISTS <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Work */}
      <Section className="bg-card">
        <SectionHeader title="Recent Works" subtitle="Portfolio" center />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredImages.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden bg-background border border-white/5"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h4 className="text-white font-display text-lg mb-1">{item.title}</h4>
                <span className="text-primary text-sm uppercase tracking-wider">{item.artistName}</span>
              </div>
            </motion.div>
          ))}
          {/* Fallback if no gallery items yet */}
          {featuredImages.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Loading beautiful artwork...
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-primary/50 px-8 rounded-none font-display tracking-widest">
              VIEW FULL GALLERY
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">READY TO GET INKED?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book your consultation today and let's create something timeless together.
          </p>
          <Link href="/book">
            <Button className="bg-white text-black hover:bg-gray-200 px-10 py-6 text-lg rounded-none font-display font-bold tracking-widest">
              START YOUR JOURNEY
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

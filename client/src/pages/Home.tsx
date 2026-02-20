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
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 z-10" />
          {/* Using a static placeholder for hero or one of the provided images if suitable. 
              Using Unsplash as per instructions for hero content */}
          {/* dark tattoo studio ambiance */}
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1920&auto=format&fit=crop" 
            alt="Tattoo Studio Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center -mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center -mt-8 -mb-8">
              <img src="/images/tattoo-hut-logo.png" alt="Tattoo Hut" className="h-48 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-auto max-w-full" />
            </div>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl mt-12 mb-4 leading-relaxed font-medium">
              Where tradition meets modern artistry. Our expert artists bring your unique vision to life with precision, safety, and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/book">
                <Button className="bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-10 py-6 text-lg rounded-sm font-display tracking-widest shadow-[0_0_25px_rgba(255,34,0,0.5)] hover:shadow-[0_0_40px_rgba(255,34,0,0.8)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-primary/20">
                  BOOK APPOINTMENT
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/15 hover:border-white/50 px-10 py-6 text-lg rounded-sm font-display tracking-widest backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                  VIEW GALLERY
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,34,0,0.03)_0%,transparent_70%)]" />
        <div className="relative z-10">
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
              className="p-8 border border-white/10 bg-gradient-to-br from-background/80 to-card/50 hover:from-card/80 hover:to-background/80 hover:border-primary/40 transition-all duration-500 group backdrop-blur-sm rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,34,0,0.2)] transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      {/* About Preview */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
        <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-3xl rounded-full opacity-30 animate-pulse" />
              <img 
                src="/images/about-image-cropped.png" 
                alt="Artist at work" 
                className="w-full h-auto object-cover border-2 border-white/20 relative z-10 grayscale hover:grayscale-0 transition-all duration-700 rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_60px_rgba(255,34,0,0.2)] transform hover:-translate-y-2"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-3xl rounded-full opacity-30 animate-pulse" />
              <img 
                src="/images/about-tattoo-1.png" 
                alt="Professional tattoo artwork" 
                className="w-full h-auto object-cover border-2 border-white/20 relative z-10 hover:grayscale-0 transition-all duration-700 rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_60px_rgba(255,34,0,0.2)] transform hover:-translate-y-2"
                onError={(e) => {
                  // Fallback to existing image if new one not found
                  e.currentTarget.src = '/images/image_1771590087510.png';
                }}
              />
            </div>
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
        </div>
      </Section>

      {/* Featured Work */}
      <Section className="bg-gradient-to-b from-card/50 to-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,34,0,0.05)_49%,rgba(255,34,0,0.05)_51%,transparent_52%)] bg-[length:20px_20px]" />
        <div className="relative z-10">
        <SectionHeader title="Recent Works" subtitle="Portfolio" center />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredImages.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden bg-gradient-to-br from-background to-card/50 border-2 border-white/10 hover:border-primary/40 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(255,34,0,0.2)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
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
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/15 hover:border-primary/50 px-10 py-4 rounded-lg font-display tracking-widest backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,34,0,0.2)]">
              VIEW FULL GALLERY
            </Button>
          </Link>
        </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,34,0,0.15)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-wider"
          >
            READY TO GET INKED?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Book your consultation today and let's create something timeless together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/book">
              <Button className="bg-gradient-to-r from-white to-gray-100 text-black hover:from-primary hover:to-red-600 hover:text-white px-12 py-8 text-xl rounded-lg font-display font-bold tracking-widest shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,34,0,0.4)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                START YOUR JOURNEY
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/artists", label: "Artists" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-background/95 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="relative z-50 group">
            <div className="flex items-center cursor-pointer">
              <img src="/images/logo.png?v=5" alt="Tattoo Hut Logo" className="h-24 md:h-40 w-auto" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "text-sm uppercase tracking-wider font-medium cursor-pointer transition-all duration-300 hover:text-primary relative group",
                    location === item.href ? "text-primary" : "text-gray-300"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    location === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </span>
              </Link>
            ))}
            <Link href="/book">
              <Button className="bg-primary hover:bg-primary/80 text-white border-none rounded-none px-6 font-display tracking-wide transform hover:-translate-y-1 transition-transform duration-200 shadow-[0_0_15px_rgba(255,34,0,0.3)] hover:shadow-[0_0_25px_rgba(255,34,0,0.5)]">
                BOOK NOW
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors relative z-50 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 lg:hidden flex flex-col items-center justify-start gap-8"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "text-2xl font-display uppercase tracking-widest cursor-pointer hover:text-primary transition-colors",
                    location === item.href ? "text-primary" : "text-white"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/book">
              <Button className="w-full max-w-xs mt-4 bg-primary hover:bg-primary/80 text-white text-lg py-6 rounded-none font-display tracking-wide shadow-[0_0_20px_rgba(255,34,0,0.4)]">
                BOOK SESSION
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-white/10 lg:hidden flex justify-between items-center px-6 py-4 pb-safe">
        <a href="tel:+15042950091" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
          <Phone size={20} />
          <span className="text-[10px] uppercase tracking-wider">Call</span>
        </a>
        <Link href="/book">
          <div className="flex flex-col items-center gap-1 text-primary cursor-pointer -mt-8 bg-background p-4 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(255,34,0,0.3)]">
            <span className="font-display font-bold text-sm">BOOK</span>
          </div>
        </Link>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
          <MapPin size={20} />
          <span className="text-[10px] uppercase tracking-wider">Visit</span>
        </a>
      </div>
    </>
  );
}

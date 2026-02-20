import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-24 lg:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl font-bold text-white tracking-widest">
                TATTOO HUT
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                Ink & Artistry
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium custom tattoo artistry in a clean, professional environment. 
              We bring your vision to life with precision and passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Artists", href: "/artists" },
                { label: "Gallery", href: "/gallery" },
                { label: "Services", href: "/services" },
                { label: "Book a Session", href: "/book" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer block w-fit">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span>123 Ink Street, Artistic District<br />Cityville, ST 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@tattoohut.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-display mb-6 text-white">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">11:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tattoo Hut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly regarding your inquiry.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen">
      <Section>
        <SectionHeader title="Get In Touch" subtitle="Contact Us" center />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-card border border-white/10 p-8 space-y-6">
              <h3 className="text-2xl font-display text-white mb-6">Studio Info</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">123 Ink Street, Artistic District<br />Cityville, ST 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">info@tattoohut.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Fri: 11am - 8pm<br />Sat: 10am - 9pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-gray-800 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center bg-card">
                <span className="text-gray-500 font-display">Map Integration Placeholder</span>
              </div>
              {/* If real map needed, embed iframe here */}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border border-white/10 p-8 lg:p-12">
            <h3 className="text-2xl font-display text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Name</label>
                  <Input required placeholder="Your Name" className="bg-background border-white/10 focus:border-primary/50 text-white h-12 rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                  <Input required type="email" placeholder="your@email.com" className="bg-background border-white/10 focus:border-primary/50 text-white h-12 rounded-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Subject</label>
                <Input required placeholder="General Inquiry / Booking Question" className="bg-background border-white/10 focus:border-primary/50 text-white h-12 rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">Message</label>
                <Textarea required placeholder="Tell us what's on your mind..." className="bg-background border-white/10 focus:border-primary/50 text-white min-h-[150px] rounded-none resize-none" />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-white h-14 text-lg font-display tracking-widest rounded-none shadow-[0_0_20px_rgba(255,34,0,0.3)]"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

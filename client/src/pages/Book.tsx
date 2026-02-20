import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function Book() {
  return (
    <div className="pt-20 min-h-screen">
      <Section>
        <SectionHeader title="Book Your Session" subtitle="Appointments" center />
        
        <div className="max-w-4xl mx-auto bg-card border border-white/10 p-8 lg:p-16 text-center">
          <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
          
          <h3 className="text-3xl font-display text-white mb-6">Ready to Commit?</h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Use our online booking system to schedule your consultation or tattoo appointment. 
            A deposit is required to secure your spot.
          </p>

          {/* Placeholder for Booking Widget/Embed */}
          <div className="bg-background/50 border border-dashed border-white/20 p-12 mb-10 rounded-lg">
            <p className="text-gray-500 italic mb-6">Booking Calendar Widget Loading...</p>
            
            {/* Fallback CTA if widget fails or for simple version */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white px-10 py-8 text-xl font-display tracking-widest rounded-none shadow-[0_0_25px_rgba(255,34,0,0.4)] hover:shadow-[0_0_40px_rgba(255,34,0,0.6)] transition-all transform hover:-translate-y-1"
            >
              OPEN BOOKING CALENDAR
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Having trouble booking online? Call us at <a href="tel:+15551234567" className="text-white hover:text-primary underline">+1 (555) 123-4567</a>
          </p>
        </div>
      </Section>
    </div>
  );
}

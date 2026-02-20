import { Section, SectionHeader } from "@/components/ui/Section";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "First Time Booking",
      price: "$25.00 ・ 30 min",
      desc: "Virtual Consultation / FaceTime / Zoom. Your information is securely stored and used only to coordinate your appointment. Please note that all virtual consultation fees are non-refundable. This policy helps protect our artists' time and commitment to your custom design.",
      features: ["1-2 hours pre-appointment contact", "Design discussion", "Secure information handling", "Vision alignment"]
    },
    {
      title: "Consultation / Tattoo Booking",
      price: "$100.00 ・ 2 hr",
      desc: "Thank you for booking with Tattoo Hut Houston! We appreciate your trust in us. All your information is kept safe and is used solely to help schedule a time that works best for both you and our team. Please note that deposits are non-refundable and secure your spot.",
      features: ["Artist name assignment", "One hour pre-appointment contact", "Final confirmation", "Secure spot"]
    },
    {
      title: "Tattoo Session",
      price: "$50.00 ・ 1 hr",
      desc: "Bring your vision to life with a professional tattoo session. Whether it's a small script or a bold piece, we ensure a clean and collaborative experience.",
      features: ["Clean environment", "Collaborative design", "Aftercare guidance", "Professional execution"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <Section>
        <SectionHeader title="Our Services" subtitle="Pricing & Offerings" center />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-card border border-white/10 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-2xl font-display text-white mb-2">{service.title}</h3>
              <p className="text-primary font-bold text-xl mb-6">{service.price}</p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed border-b border-white/5 pb-8">
                {service.desc}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-background/50 border border-white/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-display text-white mb-4">Deposit Policy</h3>
          <p className="text-gray-400 mb-0 leading-relaxed">
            A non-refundable deposit is required to secure all appointments. This deposit comes off the final price of your tattoo. 
            For multi-session pieces, the deposit rolls over to the final session. 
            Cancellations must be made at least 48 hours in advance to reschedule without forfeiting your deposit.
          </p>
        </div>
      </Section>
    </div>
  );
}

import { Section, SectionHeader } from "@/components/ui/Section";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Tattoos",
      price: "From $150/hr",
      desc: "Unique designs created specifically for you. We consult with you to understand your vision and translate it into a timeless piece of art.",
      features: ["Free Consultation", "Custom Sketching", "Aftercare Kit Included", "Touch-up Guarantee"]
    },
    {
      title: "Cover-ups",
      price: "From $180/hr",
      desc: "Transform old or unwanted tattoos into something new. Our specialists understand how to effectively mask and integrate old ink.",
      features: ["Assessment Session", "Design Integration", "Color Correction", "Complex Patterning"]
    },
    {
      title: "Piercing",
      price: "From $40",
      desc: "Professional body piercing in a sterile environment using high-grade titanium jewelry. We offer everything from ear curation to dermal anchors.",
      features: ["Titanium Jewelry", "Sterile Needles", "Detailed Aftercare", "Jewelry Change Service"]
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

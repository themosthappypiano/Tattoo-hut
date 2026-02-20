import { Section, SectionHeader } from "@/components/ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I book an appointment?",
      a: "You can book directly through our website using the 'Book Now' button, or visit us in person. We require a deposit to secure your slot. For large custom pieces, we recommend a consultation first."
    },
    {
      q: "Does it hurt?",
      a: "Yes, getting a tattoo involves some pain, but it is manageable. The sensation varies depending on placement and your personal pain tolerance. Most people compare it to a scratching sensation or a cat scratch on sunburn."
    },
    {
      q: "How much will my tattoo cost?",
      a: "Our shop minimum is $100. Hourly rates vary by artist, typically ranging from $150-$200/hr. For custom pieces, we can provide a rough estimate during your consultation, but the final price depends on the time taken."
    },
    {
      q: "How do I take care of my new tattoo?",
      a: "We will provide you with detailed aftercare instructions and a kit. Generally, keep it clean, wash gently with unscented soap, apply a thin layer of recommended ointment, and keep it out of the sun and submerged water for 2 weeks."
    },
    {
      q: "Can I bring a friend?",
      a: "Our workspace is limited to maintain hygiene and focus. We generally ask that you come alone for your appointment. If you need support, please discuss this with your artist beforehand."
    },
    {
      q: "Do you do walk-ins?",
      a: "We do accept walk-ins based on artist availability, typically for smaller, pre-drawn designs or simple scripts. For larger custom work, an appointment is always required."
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <Section>
        <SectionHeader title="Common Questions" subtitle="FAQ" center />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="border border-white/10 bg-card px-6 rounded-sm data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary font-display tracking-wide text-left text-lg py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </div>
  );
}

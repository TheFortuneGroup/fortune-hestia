
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-emerald-600" size={24} />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211"
      ]
    },
    {
      icon: <Mail className="text-emerald-600" size={24} />,
      title: "Email Us",
      details: [
        "dm@fortunehestia.in",
        "sales@fortunehestia.com"
      ]
    },
    {
      icon: <MapPin className="text-emerald-600" size={24} />,
      title: "Visit Us",
      details: [
        "Fortune Hestia Villa,",
        "Sarjapur Road, near Wipro Corporate Office,",
        "Bengaluru, Karnataka 560035"
      ]
    },
    {
      icon: <Clock className="text-emerald-600" size={24} />,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 10:00 AM - 7:00 PM",
        "Sunday: 11:00 AM - 5:00 PM"
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the payment plans available?",
      answer: "We offer flexible payment plans including construction-linked and possession-linked options. Our standard payment structure is 20% booking amount, 70% during construction phases, and 10% on possession. Contact our sales team for detailed information tailored to your needs."
    },
    {
      question: "Is the project RERA approved?",
      answer: "Yes, Fortune Hestia Villa is RERA approved with registration number KA-RERA-PRJ-123456. All our developments strictly adhere to RERA guidelines ensuring complete transparency and buyer protection."
    },
    {
      question: "When is the expected possession date?",
      answer: "Phase 1 is ready for possession, while Phase 2 is expected to be completed by December 2023. We maintain a strong track record of on-time delivery across all our projects."
    },
    {
      question: "What are the amenities provided in the villa?",
      answer: "Fortune Hestia Villa offers premium amenities including a clubhouse, swimming pool, gymnasium, indoor games, landscaped gardens, jogging track, children's play area, 24/7 security, and more. Each villa also includes modular kitchen, premium flooring, and smart home features."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, there are no hidden charges. The price includes land cost, construction cost, and legal charges. Additional costs for registration, GST, and maintenance deposits are clearly mentioned in our price breakup document."
    }
  ];

  return (
    <section id="contact" className="section-padding bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-heading text-5xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="body-text">
            Have questions about Fortune Hestia Villa? Our team is here to assist you with all your queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-emerald-500 animated-card">
            <h3 className="font-serif text-2xl font-semibold text-emerald-700 mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>

          {/* Contact information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-50 rounded-full">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-xl font-medium text-emerald-700">{item.title}</h4>
                  </div>
                  <div className="ml-16">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h4 className="font-serif text-xl font-semibold text-emerald-700 mb-4">Frequently Asked Questions</h4>
              
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-md overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-emerald-50 font-medium text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View all FAQs
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

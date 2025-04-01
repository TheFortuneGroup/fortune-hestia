
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-gold" size={24} />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211"
      ]
    },
    {
      icon: <Mail className="text-gold" size={24} />,
      title: "Email Us",
      details: [
        "info@fortunehestia.com",
        "sales@fortunehestia.com"
      ]
    },
    {
      icon: <MapPin className="text-gold" size={24} />,
      title: "Visit Us",
      details: [
        "Fortune Hestia Villa,",
        "Sarjapur Road, near Wipro Corporate Office,",
        "Bengaluru, Karnataka 560035"
      ]
    },
    {
      icon: <Clock className="text-gold" size={24} />,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 10:00 AM - 7:00 PM",
        "Sunday: 11:00 AM - 5:00 PM"
      ]
    }
  ];

  return (
    <section id="contact" className="section-padding bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline mb-6">Get in Touch</h2>
          <p className="body-text">
            Have questions about Fortune Hestia Villa? Our team is here to assist you with all your queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-navy-dark mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>

          {/* Contact information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-navy/5 rounded-full">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-xl font-medium text-navy-dark">{item.title}</h4>
                  </div>
                  <div className="ml-16">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-navy/80 mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h4 className="font-serif text-xl font-semibold text-navy-dark mb-4">Frequently Asked Questions</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-navy mb-2">What are the payment plans available?</h5>
                  <p className="text-navy/70 text-sm">We offer flexible payment plans including construction-linked and possession-linked options. Contact our sales team for detailed information tailored to your needs.</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-navy mb-2">Is the project RERA approved?</h5>
                  <p className="text-navy/70 text-sm">Yes, Fortune Hestia Villa is RERA approved with registration number KA-RERA-PRJ-123456.</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-navy mb-2">When is the expected possession date?</h5>
                  <p className="text-navy/70 text-sm">Phase 1 is ready for possession, while Phase 2 is expected to be completed by December 2023.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

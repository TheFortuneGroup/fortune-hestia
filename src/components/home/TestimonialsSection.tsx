
const testimonials = [
  {
    name: "Rajiv Mehta",
    title: "CEO, Tech Innovations",
    quote: "Moving to Fortune Hestia Villa was one of the best decisions we've made. The architectural design, quality of construction, and attention to detail are simply outstanding. It truly feels like a premium living experience.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Sharma",
    title: "Interior Designer",
    quote: "As someone who works with spaces professionally, I was immediately impressed by the thoughtful layout and premium finishes at Fortune Hestia. The villa offers the perfect canvas for personalization while maintaining its luxury character.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Arun Kapoor",
    title: "Senior VP, Global Finance",
    quote: "The location is perfect for my family - close to top schools, hospitals, and my workplace. Fortune Hestia offers the exclusivity we were looking for while still being connected to the city. A truly wise investment.",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline text-white mb-6">What Our Residents Say</h2>
          <p className="text-gray-300">
            Hear from our residents about their experience living in Fortune Hestia Villa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-light rounded-lg p-6 md:p-8 shadow-lg relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-gold/30 text-6xl font-serif">"</div>
              
              <p className="mb-6 text-gray-300 relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-gold"
                />
                <div>
                  <h4 className="font-medium text-gold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

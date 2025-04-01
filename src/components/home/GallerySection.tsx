
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const images = [
    { src: '/lovable-uploads/ebf40fbe-d160-45c8-b2b7-1bfaba9366bc.png', alt: 'Villa Exterior' },
    { src: '/lovable-uploads/47ff2bfb-aac2-4c57-8739-3348f2edcc90.png', alt: 'Villa Front View' },
    { src: '/lovable-uploads/4ff9e287-6365-43bf-8493-586dbb479b8a.png', alt: 'Villa Side View' },
    { src: '/lovable-uploads/74955895-97f0-4129-8cd0-8cde3cefbe8d.png', alt: 'Villa Entry' },
    { src: '/lovable-uploads/efe10aff-4b3d-4992-998f-7f7d68270963.png', alt: 'Entrance View' },
    { src: '/lovable-uploads/8c79a54c-8b2b-424c-b825-93ce2361651e.png', alt: 'Carport Area' },
    { src: '/lovable-uploads/76c37ef2-49ee-49f7-a6b5-07a19f9ba26b.png', alt: 'Villa Aerial View' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    scrollToThumb(activeIndex + 1);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    scrollToThumb(activeIndex - 1);
  };

  const scrollToThumb = (index: number) => {
    if (scrollContainerRef.current) {
      const thumbs = scrollContainerRef.current.querySelectorAll('.gallery-thumb');
      if (thumbs[index]) {
        thumbs[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  return (
    <section id="gallery" className="section-padding bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline mb-6">Explore the Villa</h2>
          <p className="body-text">
            Take a visual tour of Fortune Hestia Villa and discover the perfect blend of contemporary design and timeless elegance.
          </p>
        </div>

        {/* Main image display */}
        <div className="relative mb-6 overflow-hidden rounded-lg shadow-xl">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Navigation arrows */}
          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy rounded-full p-2 shadow-lg"
            size="icon"
          >
            <ArrowLeft size={24} />
          </Button>
          
          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy rounded-full p-2 shadow-lg"
            size="icon"
          >
            <ArrowRight size={24} />
          </Button>
          
          {/* Image caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-white font-serif text-xl">{images[activeIndex].alt}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-3 py-4 hide-scrollbar"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`gallery-thumb flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'ring-2 ring-gold' : 'ring-0 opacity-70'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-32 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Virtual tour button */}
        <div className="text-center mt-10">
          <Button className="bg-navy hover:bg-navy-light text-white rounded px-6 py-3">
            Take a Virtual Tour
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;

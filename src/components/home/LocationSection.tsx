
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  // Nearby location points
  const nearbyLocations = [
    { category: "Connectivity", places: [
      { name: "Outer Ring Road", distance: "5 mins" },
      { name: "Sarjapur Main Road", distance: "2 mins" },
      { name: "Bangalore International Airport", distance: "60 mins" }
    ]},
    { category: "Tech Parks", places: [
      { name: "Wipro Corporate Office", distance: "7 mins" },
      { name: "RMZ Ecoworld", distance: "15 mins" },
      { name: "Prestige Tech Park", distance: "18 mins" }
    ]},
    { category: "Education", places: [
      { name: "Delhi Public School", distance: "10 mins" },
      { name: "Greenwood High", distance: "15 mins" },
      { name: "VIBGYOR High School", distance: "12 mins" }
    ]},
    { category: "Healthcare", places: [
      { name: "Manipal Hospital", distance: "12 mins" },
      { name: "Fortis Hospital", distance: "20 mins" },
      { name: "Apollo Clinic", distance: "8 mins" }
    ]},
    { category: "Shopping", places: [
      { name: "Phoenix Marketcity", distance: "25 mins" },
      { name: "Central Mall", distance: "18 mins" },
      { name: "Brookefield Mall", distance: "20 mins" }
    ]},
    { category: "Dining", places: [
      { name: "The Whitefield Arms", distance: "15 mins" },
      { name: "Windmills Craftworks", distance: "22 mins" },
      { name: "The Fatty Bao", distance: "18 mins" }
    ]},
  ];

  return (
    <section id="location" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="headline mb-6">Prime Location</h2>
          <p className="body-text">
            Situated in the thriving neighborhood of Sarjapur Road, Fortune Hestia Villa offers the perfect balance of connectivity and tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map or location image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            {/* This would ideally be replaced with an interactive map */}
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=Sarjapur+Road,Bangalore&zoom=13&size=600x600&maptype=roadmap&key=YOUR_API_KEY" 
              alt="Fortune Hestia Villa Location Map" 
              className="w-full h-full object-cover"
            />
            
            {/* Location marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-bounce">
                <div className="bg-gold text-white rounded-full p-2">
                  <MapPin size={28} />
                </div>
              </div>
              <div className="w-2 h-10 bg-gold absolute -bottom-10 left-1/2 transform -translate-x-1/2"></div>
            </div>
            
            {/* Map overlay with location name */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
              <p className="text-white font-serif text-xl">Fortune Hestia Villa, Sarjapur Road</p>
              <p className="text-white/80 text-sm">Near Wipro Corporate Office, Bangalore</p>
            </div>
          </div>
          
          {/* Nearby locations */}
          <div>
            <h3 className="subheadline mb-6">Nearby Conveniences</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearbyLocations.map((category, idx) => (
                <div key={idx} className="bg-white shadow-md rounded-lg p-5">
                  <h4 className="font-serif text-lg font-semibold text-navy-dark mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.places.map((place, placeIdx) => (
                      <li key={placeIdx} className="flex justify-between text-sm">
                        <span className="text-navy">{place.name}</span>
                        <span className="text-navy/60 font-medium">{place.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

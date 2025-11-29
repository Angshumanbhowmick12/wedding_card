import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

interface Photo {
  id: number;
  placeholder: string;
  filename:string;
}

export const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<Set<number>>(new Set());
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Replace with your actual photo filenames in public/images
  const photos: Photo[] = [
    { id: 1, placeholder: "Photo 1", filename: "image2.jpg" },
    {  id: 2, placeholder: "Photo 2", filename: "image3.jpg" },
    { id: 3, placeholder: "Photo 3", filename: "image4.jpg" },
    { id: 4, placeholder: "Photo 4", filename: "image12.jpg" },
    { id: 5, placeholder: "Photo 5", filename: "image9.jpg" },
    { id: 6, placeholder: "Photo 6", filename: "image8.jpg" },
    { id: 7, placeholder: "Photo 7", filename: "image7.jpg" },
    { id: 8, placeholder: "Photo 8", filename: "image6.jpg" },
    { id: 9, placeholder: "Photo 9", filename: "image10.jpg" },
    { id: 10, placeholder: "Photo 10", filename: "image11.jpg" },
  ];

  // Dynamic sizes for masonry layout
  const photoSizes = [
    "row-span-2", // Photo 1 - tall
    "row-span-1", // Photo 2 - regular
    "row-span-2", // Photo 3 - tall
    "row-span-1", // Photo 4 - regular
    "row-span-1 md:col-span-2", // Photo 5 - wide
    "row-span-2", // Photo 6 - tall
    "row-span-1", // Photo 7 - regular
    "row-span-2", // Photo 8 - tall
    "row-span-2", // Photo 9 - regular
    "row-span-1", // Photo 10 - regular
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    photoRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisiblePhotos((prev) => new Set([...prev, index]));
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12 animate-fade-in">
        <Heart className="mx-auto mb-4 text-primary" size={48} fill="currentColor" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Our Beautiful Moments
        </h2>
        <p className="text-lg text-muted-foreground">
          Cherished memories of love and laughter
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            ref={(el) => (photoRefs.current[index] = el)}
            className={`${photoSizes[index]} transform transition-all duration-1000 ${
              visiblePhotos.has(index)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-95"
            }`}
            style={{ transitionDelay: `${(index % 4) * 100}ms` }}
          >
            <div className="group relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Decorative border - animated */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl z-10 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-105"></div>
              
              {/* Photo container */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/15 flex items-center justify-center overflow-hidden">
                {/* Hover overlay with gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-rose-gold/40 to-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 z-20"></div>
                
                {/* Placeholder content */}
                {/* <div className="relative z-30 text-center p-6 transform group-hover:scale-110 transition-transform duration-500">
                  <Heart 
                    className="mx-auto mb-4 text-primary/60 group-hover:text-primary transition-all duration-300 animate-float" 
                    size={40} 
                    fill="currentColor" 
                  />
                  <p className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                    {photo.placeholder}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    (Upload your photo)
                  </p>
                </div> */}
                
                
                <img 
                  src={`/images/${photo.filename}`}
                  alt={`Couple photo ${photo.id}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/placeholder.jpg';
                  }}
                />
               
              </div>

              {/* Photo number badge */}
             
            </div>
          </div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <Heart className="text-primary" size={24} fill="currentColor" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
};

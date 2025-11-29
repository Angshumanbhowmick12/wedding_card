import { Heart } from "lucide-react";
import { FloatingHearts } from "../components/FloatinHearts";

import { PhotoGallery } from "../components/PhotoGallery";
import { BackgroundMusic } from "../components/BackgroundMusic";





const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundMusic/>
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header with Animation */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="text-primary animate-float" fill="currentColor" size={32} />
            <Heart className="text-secondary animate-float-slow" fill="currentColor" size={24} />
            <Heart className="text-primary animate-float" fill="currentColor" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 px-4">
            Congratulations!
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light px-4">
            On Your Beautiful Journey Together
          </p>
        </div>

        {/* Couple Photo Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative group">
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-secondary rounded-tr-3xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-secondary rounded-bl-3xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-3xl opacity-60"></div>
            
            {/* Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card p-2 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="aspect-[2/3] bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for couple photo */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="relative z-10 text-center p-8">
                  <Heart className="mx-auto mb-4 text-primary" size={64} fill="currentColor" />
                  <p className="text-muted-foreground text-lg">
                    Your Beautiful Couple Photo Goes Here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Upload your photo to replace this placeholder)
                  </p>
                </div> */}
                
                <img 
                  src="/images/image1.jpeg" 
                  alt="Happy Couple" 
                  className="w-full h-full object-cover"
                />
               
              </div>
            </div>
          </div>
        </div>

        {/* Message Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <Heart className="mx-auto mb-6 text-primary animate-float" size={48} fill="currentColor" />
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Wishing You A Lifetime of Love & Happiness
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                May your love story be filled with endless joy, laughter, and beautiful moments.
              </p>
              <p>
                As you begin this wonderful journey together, may every day be brighter than the last,
                and may your hearts always beat as one.
              </p>
              <p className="text-xl font-medium text-foreground mt-6">
                Here's to forever and always! 💕
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Heart className="text-primary" size={20} fill="currentColor" />
              <Heart className="text-secondary" size={16} fill="currentColor" />
              <Heart className="text-primary" size={24} fill="currentColor" />
              <Heart className="text-secondary" size={20} fill="currentColor" />
              <Heart className="text-primary" size={16} fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* Decorative Bottom Section */}
        <div className="text-center animate-fade-in mt-16" style={{ animationDelay: "0.9s" }}>
          <div className="inline-block">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="text-sm font-light">With Love & Best Wishes</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float"></div>
    </div>
  );
};

export default Index;

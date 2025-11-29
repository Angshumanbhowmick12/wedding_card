import { Heart, Sparkles, Star } from "lucide-react";

export const BlessingsOverlay = () => {
  const blessings = [
    "May your love grow stronger each day",
    "Blessed with endless happiness",
    "Forever in love, forever together",
    "A lifetime of joy awaits",
    "Two hearts, one beautiful journey",
    "Love, laughter, and happily ever after",
  ];

  return (
    <>
      {/* Top blessing banner */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in">
        <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg border border-primary/20">
          <Star className="text-secondary animate-float" size={20} fill="currentColor" />
          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            {blessings[0]}
          </span>
          <Star className="text-primary animate-float-slow" size={20} fill="currentColor" />
        </div>
      </div>

      {/* Scattered blessings */}
      <div className="absolute top-1/4 left-12 hidden lg:block animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20">
          <Heart className="text-primary" size={16} fill="currentColor" />
          <span className="text-xs text-foreground font-light italic">{blessings[1]}</span>
        </div>
      </div>

      <div className="absolute top-1/3 right-12 hidden lg:block animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2 bg-secondary/10 backdrop-blur-sm px-6 py-2 rounded-full border border-secondary/20">
          <Sparkles className="text-secondary" size={16} fill="currentColor" />
          <span className="text-xs text-foreground font-light italic">{blessings[2]}</span>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-20 hidden md:block animate-fade-in" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-2 bg-accent/60 backdrop-blur-sm px-5 py-2 rounded-full border border-primary/20">
          <Heart className="text-primary" size={14} fill="currentColor" />
          <span className="text-xs text-foreground font-light italic">{blessings[3]}</span>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-24 hidden md:block animate-fade-in" style={{ animationDelay: "2.5s" }}>
        <div className="flex items-center gap-2 bg-card/70 backdrop-blur-sm px-5 py-2 rounded-full border border-secondary/20">
          <Sparkles className="text-secondary" size={14} fill="currentColor" />
          <span className="text-xs text-foreground font-light italic">{blessings[4]}</span>
        </div>
      </div>
    </>
  );
};

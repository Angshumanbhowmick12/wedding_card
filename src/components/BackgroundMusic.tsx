import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "../components/ui/button";

export const BackgroundMusic = () => {
    // Unmute and play music with sound after first user interaction
    useEffect(() => {
      const handleUserInteraction = async () => {
        if (audioRef.current) {
          audioRef.current.muted = false;
          try {
            await audioRef.current.play();
            setIsMuted(false);
            setIsPlaying(true);
          } catch (error) {
            // Ignore
          }
        }
        window.removeEventListener("click", handleUserInteraction);
        window.removeEventListener("keydown", handleUserInteraction);
      };
      window.addEventListener("click", handleUserInteraction);
      window.addEventListener("keydown", handleUserInteraction);
      return () => {
        window.removeEventListener("click", handleUserInteraction);
        window.removeEventListener("keydown", handleUserInteraction);
      };
    }, []);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted to allow autoplay

  useEffect(() => {
    // Autoplay muted on mount (browsers allow this)
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.muted = true; // Ensure muted for autoplay
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented. User interaction required.");
          setIsPlaying(false);
        }
      }
    };

    // Small delay to ensure audio element is ready
    const timer = setTimeout(playAudio, 100);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Add your romantic music file here */}
        {/* For now, using a placeholder. Replace with your actual music file */}
        <source src="/music/elo.mp3" type="audio/mpeg" />
        {/* You can also use a URL to a romantic instrumental */}
        {/* <source src="https://example.com/romantic-song.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* Music control button - fixed position */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      
        <Button
          onClick={togglePlay}
          size="lg"
          variant="secondary"
          className="rounded-full w-auto h-14 shadow-xl hover:scale-110 transition-transform duration-300 bg-card/90 backdrop-blur-sm border-2 border-primary/20"
        >
        
          Click to play music 
          <Music className={`${isPlaying ? "animate-pulse" : ""}`} size={24} />
        
        
        </Button>
        
        {isPlaying && (
          <Button
            onClick={toggleMute}
            size="lg"
            variant="secondary"
            className="rounded-full w-14 h-14 shadow-xl hover:scale-110 transition-transform duration-300 bg-card/90 backdrop-blur-sm border-2 border-primary/20"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </Button>
        )}
      </div>

    </>
  );
};

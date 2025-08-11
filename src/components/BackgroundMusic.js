import React, { useState, useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto play setelah interaksi user
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [isPlaying]);

  // Update mute state ke audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    // kalau musik belum pernah play, play dulu
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    setIsMuted((prev) => !prev);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/CANTO DE LUNA - (SUPER SLOWED).mp3"
      />

      {/* Tombol Mute/Unmute */}
      <button
        onClick={toggleMute}
        style={{
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
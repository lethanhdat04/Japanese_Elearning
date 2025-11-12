"use client";

import { MusicPlayerProvider } from "./MusicPlayer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MusicPlayerProvider>
      {children}
    </MusicPlayerProvider>
  );
}

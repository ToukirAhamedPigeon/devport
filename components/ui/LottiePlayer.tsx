// components/LottiePlayer.tsx
'use client';

import Lottie from 'lottie-react';

export interface LottiePlayerProps {
  animationData: any;
  loop?: boolean;
  className?: string;
}

export default function LottiePlayer({ animationData, loop = true, className }: LottiePlayerProps) {
  return (
    <Lottie animationData={animationData} loop={loop} className={className} />
  );
}

'use client';

import { useState } from 'react';
import Slide01 from '@/components/slides/Slide01';
import Slide02 from '@/components/slides/Slide02';
import Slide03 from '@/components/slides/Slide03';
import Slide04 from '@/components/slides/Slide04';
import Slide05 from '@/components/slides/Slide05';
import Slide06 from '@/components/slides/Slide06';
import Slide07 from '@/components/slides/Slide07';
import Slide08 from '@/components/slides/Slide08';
import Slide09 from '@/components/slides/Slide09';

export default function WrappedApp() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < 8) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const slides = [
    <Slide01 key="1" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide02 key="2" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide03 key="3" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide04 key="4" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide05 key="5" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide06 key="6" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide07 key="7" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide08 key="8" onNext={nextSlide} onPrev={prevSlide} />,
    <Slide09 key="9" onNext={nextSlide} onPrev={prevSlide} />,
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      {slides[currentSlide]}
    </div>
  );
}

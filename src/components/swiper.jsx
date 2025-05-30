import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import Graphs from './graphs';

export default function Graphswiper() {
  const titles = ['Business Partners', 'Products', 'Employees'];
  const [slideWidth, setSlideWidth] = useState('500px'); // Default for large screens
  const [fontSize, setFontSize] = useState('text-[18px]'); // Default font size for large screens
  const [padding, setPadding] = useState('px-4 sm:px-0'); // Default padding

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlideWidth('270px'); // Small screens
        setFontSize('text-base'); // Smaller font size for small screens
        setPadding('px-2 sm:px-0'); // Adjust padding for small screens
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setSlideWidth('380px'); // Medium screens
        setFontSize('text-[12px]'); // Slightly smaller font size for medium screens
        setPadding('px-7 sm:px-0'); // Adjust padding for medium screens
      } else {
        setSlideWidth('500px'); // Large screens
        setFontSize('text-[18px]'); // Default font size for large screens
        setPadding('px-4 sm:px-0'); // Default padding for large screens
      }
    };

    handleResize(); // Set initial value based on the current window width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h1 className={`${fontSize} font-proxima font-bold mb-4`}>
        Growth trends of Parvathi Vallabha Motors
      </h1>

      <div className={`relative ${padding}`}>
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          style={{ paddingBottom: '10px' }}
          className="!overflow-visible flex items-stretch"
        >
          {titles.map((title, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: slideWidth,
                flexShrink: 0,
              }}
              className="relative"
            >
              <Graphs title={title} />

              {/* Divider - hide on small screens */}
              {index !== titles.length - 1 && (
                <div className="absolute right-0 top-[1.5rem] sm:top-[3rem] bottom-[1.5rem] sm:bottom-[3rem] w-px bg-gray-200 z-10" />

              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  images: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(images.length - 3, 0) : prevIndex - 3
    );
  };

  return (
    <div className="relative w-full px-10 py-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      
      <div className="relative group">
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((offset) => {
            const imageIndex = (currentIndex + offset) % images.length;
            return (
              <div key={offset} className="aspect-w-16 aspect-h-9">
                <img 
                  src={images[imageIndex]} 
                  alt={`Slide ${imageIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / 3) === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider
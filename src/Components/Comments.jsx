import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveConfig, setResponsiveConfig] = useState({ numVisible: 3, cardWidth: 336, gap: 32 });

  const testimonials = [
    {
      quote: "Finally, mental clarity that sticks with just one scoop.",
      desc: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
      name: "Krithi Koushal",
      img: "src/assets/Comments/Rectangle-45-1.png"
    },
    {
      quote: "No more bloating, only lighter, happier gut.",
      desc: " I was dragged down by sluggish mornings—lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I'm more alert, active, and resilient.",
      name: "Michun Roy",
      img: "src/assets/Comments/Rectangle-46.png"
    },
    {
      quote: "Reset my routine inside and out.",
      desc: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop, clean energy, and focus. I feel more grounded and ready to tackle the day.",
      name: "Jennifer",
      img: "src/assets/Comments/Rectangle-46-2.png"
    },
    {
      quote: "From sluggish to unstoppable.",
      desc: "I was dragged down by sluggish mornings—lack of energy, poor focus. NeoGreens turned that around. One daily scoop, and I'm resilient, active, and present.",
      name: "Rahul Harrison",
      img: "src/assets/Comments/Rectangle-46-3.png"
    },
    {
      quote: "One scoop, so many wins.",
      desc: "Travel, gym, work— NeoGreens travels with me. It's like a reset button, better digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
      name: "Emily Johnson",
      img: "src/assets/Comments/Rectangle-46-4.png"
    }
  ];

  const calculateResponsiveConfig = () => {
    if (typeof window === 'undefined') return { numVisible: 3, cardWidth: 336, gap: 32 };
    
    const width = window.innerWidth;
    if (width < 640) {
      return { numVisible: 1, cardWidth: Math.min(width - 80, 320), gap: 20 };
    } else if (width < 768) {
      return { numVisible: 1, cardWidth: Math.min(width - 100, 340), gap: 24 };
    } else if (width < 1024) {
      const cardWidth = Math.min((width - 120) / 2, 360);
      return { numVisible: 2, cardWidth: cardWidth, gap: 28 };
    } else {
      const containerWidth = Math.min(1200, width - 100);
      const availableWidth = containerWidth - (2 * 32);
      const cardWidth = Math.floor((availableWidth - (2 * 32)) / 3);
      return { numVisible: 3, cardWidth: Math.min(cardWidth, 400), gap: 32 };
    }
  };

  const maxIndex = Math.max(0, testimonials.length - responsiveConfig.numVisible);
  const cardSlideWidth = responsiveConfig.cardWidth + responsiveConfig.gap;

  const getContainerWidth = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      return (responsiveConfig.numVisible * responsiveConfig.cardWidth) + 
             ((responsiveConfig.numVisible - 1) * responsiveConfig.gap) + 
             16; 
    } else {
      return (responsiveConfig.numVisible * responsiveConfig.cardWidth) + 
             ((responsiveConfig.numVisible - 1) * responsiveConfig.gap);
    }
  };

  const containerWidth = typeof window !== 'undefined' ? getContainerWidth() : 1200;

  const goLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newConfig = calculateResponsiveConfig();
      setResponsiveConfig(newConfig);
      
      const newMaxIndex = Math.max(0, testimonials.length - newConfig.numVisible);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, testimonials.length]);

  return (
    <div className='sixcomments flex flex-col items-center mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20 relatComments bg-[url("src/assets/footer/test-vec.svg")] bg-no-repeat bg-bottom-left'>
      <div className="heading text-center">
        <h1 
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }} 
          className='text-2xl sm:text-3xl lg:text-[32px] text-[#2C4143] leading-[1.2] sm:leading-[1.3] lg:leading-[38px]'
        >
          What Choosing Better Looks Like
        </h1>
        <p 
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }} 
          className='text-base sm:text-lg lg:text-[18px] text-[#677071] leading-relaxed lg:leading-[27px] mt-2 sm:mt-3 max-w-2xl mx-auto'
        >
          Every Scoop, A Step Towards Better Living.
        </p>
      </div>

      <div className='mt-10 sm:mt-16 lg:mt-20 w-full flex items-center justify-center gap-4 sm:gap-6 lg:gap-8'>
        <button
          onClick={goLeft}
          disabled={currentIndex === 0}
          className='bg-white rounded-full p-3 shadow-lg text-[#677071] text-xl font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 z-10'
          aria-label="Previous testimonials"
        >
          &lt;
        </button>

        <div 
          className='overflow-hidden'
          style={{ 
            width: `${containerWidth}px`,
            maxWidth: window.innerWidth < 1024 ? 'calc(100vw - 100px)' : '100%'
          }}
        >
          <div
            className='flex h-full transition-transform duration-300 ease-in-out'
            style={{
              transform: `translateX(calc(-${currentIndex * cardSlideWidth}px))`,
              gap: `${responsiveConfig.gap}px`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className='border-2 border-[#677071]/30 rounded-lg flex-none shadow-sm hover:shadow-md transition-shadow duration-200 bg-white'
                style={{ 
                  width: `${responsiveConfig.cardWidth}px`,
                  height: '480px'
                }}
              >
                <div className='p-5 flex flex-col gap-5 h-full'>
                  <img 
                    src="src/assets/Comments/quote.svg" 
                    alt="Quote" 
                    className='w-8 h-8 mb-2' 
                  />
                  <p 
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }} 
                    className='text-[18px] text-[#172223] leading-[27px] grow'
                  >
                    "{testimonial.quote}"
                  </p>
                  <p 
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }} 
                    className='text-[16px] text-[#172223] leading-[21px] grow'
                  >
                    {testimonial.desc}
                  </p>
                  <div className='flex items-center gap-4 mt-auto'>
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className='w-14 h-14 rounded-full object-cover'
                    />
                    <p 
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }} 
                      className='text-[16px] text-[#677071] leading-[21px]'
                    >
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goRight}
          disabled={currentIndex >= maxIndex}
          className='bg-white rounded-full p-3 shadow-lg text-[#677071] text-xl font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 z-10'
          aria-label="Next testimonials"
        >
          &gt;
        </button>
      </div>

      <div className='flex gap-2 mt-6 sm:mt-8'>
        {testimonials.slice(0, maxIndex + 1).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#2C4143]' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
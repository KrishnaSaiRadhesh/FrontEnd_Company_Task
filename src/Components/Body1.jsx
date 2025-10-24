import React, { useEffect, useRef } from 'react';

const Body1 = () => {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const leftSideRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeScrollEffects = () => {
      if (window.innerWidth < 1024) return;

      const cardsContainer = cardsContainerRef.current;
      const cards = cardsRef.current;
      const leftSide = leftSideRef.current;
      const container = containerRef.current;

      if (!cardsContainer || !cards.length || !leftSide || !container) return;

      cardsContainer.style.setProperty('--cards-count', cards.length.toString());
      if (cards[0]) {
        cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
      }

      const containerRect = container.getBoundingClientRect();
      const leftSideHeight = leftSide.offsetHeight;
      const containerHeight = container.offsetHeight;
      
      leftSide.style.position = 'sticky';
      leftSide.style.top = '20px';
      leftSide.style.alignSelf = 'flex-start';
      leftSide.style.maxHeight = 'calc(100vh - 40px)';
      leftSide.style.overflowY = 'auto';

      cardsContainer.style.overflowY = 'visible';

      cards.forEach((card, index) => {
        if (!card) return;

        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector('.card__inner');

        if (!nextCard || !cardInner) return;

        const handleScroll = () => {
          const nextCardRect = nextCard.getBoundingClientRect();
          const containerRect = cardsContainer.getBoundingClientRect();
          
          const percentageY = Math.max(0, Math.min(1, 
            (containerRect.top - nextCardRect.top) / (window.innerHeight - card.clientHeight)
          ));

          const scale = 1 + (toScale - 1) * percentageY;
          const brightness = 1 + (0.6 - 1) * percentageY;

          cardInner.style.scale = scale.toString();
          cardInner.style.filter = `brightness(${brightness})`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
      });
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        const cards = cardsRef.current;
        const leftSide = leftSideRef.current;
        const cardsContainer = cardsContainerRef.current;

        if (leftSide) {
          leftSide.style.position = '';
          leftSide.style.top = '';
          leftSide.style.maxHeight = '';
          leftSide.style.overflowY = '';
        }

        if (cardsContainer) {
          cardsContainer.style.overflowY = '';
        }

        cards.forEach((card) => {
          if (card) {
            card.style.paddingTop = '';
            const cardInner = card.querySelector('.card__inner');
            if (cardInner) {
              cardInner.style.scale = '';
              cardInner.style.filter = '';
            }
          }
        });
      } else {
        initializeScrollEffects();
      }
    };

    setTimeout(handleResize, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const rightSideCards = [
    {
      icon: "/Body1/Group-4962.svg",
      title: "Feel Foggy or Unfocused?",
      description: "Designed to support mental clarity with B12 and adaptogens.",
      image: "/Body1/Image-1-3.png"
    },
    {
      icon: "/Body1/Group-4962-3.svg",
      title: "Bloating or Indigestion?",
      description: "Aids digestion with probiotics and digestive enzymes.",
      image: "/Body1/Image-2.png"
    },
    {
      icon: "/Body1/Group-4962-1.svg",
      title: "Constant Energy Crashes?",
      description: "Supports sustained energy with clean, plant-based nutrients",
      image: "/Body1/Image-3.png"
    },
    {
      icon: "/Body1/Group-4962-2.svg",
      title: "Busy Routines messing up nutrition?",
      description: "One simple scoop a day keeps your essentials covered.",
      image: "/Body1/Image-4.png"
    },
    {
      icon: "/Body1/Group-4962-3.svg",
      title: "Too many supplements to choose from?",
      description: "NeoGreens simplifies it all. Just one powder, once a day.",
      image: "/Body1/Image-5.png"
    },
    {
      icon: "/Body1/Group-4962-4.svg",
      title: "Frequent body pains and aches?",
      description: "Takes care of essential vitamin deficiencies",
      image: "/Body1/Image-6.png"
    }
  ];

  return (
    <>
      <div ref={containerRef} className='three mt-5 min-h-screen py-10 lg:py-20'>
        <div className='flex flex-col lg:flex-row max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div 
            ref={leftSideRef} 
            className="threeo no-scrollbar flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2 lg:pr-8 bg-[url('/Body1/Bodyi.svg')] bg-left bg-no-repeat bg-cover lg:bg-auto mb-10 lg:mb-0"
          >
            <div className='pt-6 lg:pt-10'>
              <h1 
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }} 
                className='text-3xl sm:text-4xl lg:text-[40px] text-[#2C4143] leading-[1.2] lg:leading-[52px]'
              >
                Backed by Nature. Built for Your Routine.
              </h1>
              <p 
                style={{ fontFamily: "Raleway, sans-serif" }} 
                className='text-base sm:text-lg lg:text-[18px] text-[#677071] leading-relaxed lg:leading-[27px] pt-4 lg:pt-5'
              >
                NeoGreens goes where you go - from home to the office to the gym. One scoop a day will help you overcome all your wellness roadblocks with ease.
              </p>
              <button 
                style={{ fontFamily: "Raleway, sans-serif" }} 
                className='border border-[#2C4143]/60 text-[#2C4143]/60 px-6 py-3 lg:px-8 lg:py-4 rounded-full mt-4 lg:mt-5 text-sm lg:text-base hover:bg-[#2C4143] hover:text-white transition-colors duration-200'
              >
                Coming Soon
              </button>
            </div>
            <img 
              src="/Body1/n.png" 
              alt="NeoGreens product" 
              className='w-full max-w-sm lg:max-w-md mx-auto lg:mx-0' 
            />
          </div>

          <div 
            ref={cardsContainerRef}
            className='threet no-scrollbar flex flex-col justify-center items-center gap-6 lg:gap-y-10 w-full lg:w-1/2'
            style={{
              gridTemplateRows: 'repeat(var(--cards-count), var(--card-height))'
            }}
          >
            {rightSideCards.map((card, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="w-full max-w-sm sm:max-w-md lg:sticky lg:top-0"
                data-index={index}
              >
                <div className="card__inner bg-white rounded-xl p-4 sm:p-5 shadow-lg lg:shadow-xl w-full transition-all duration-300">
                  <div className='card gap-3 sm:gap-4'>
                    <div className='flex items-start gap-3 sm:gap-4'>
                      <img 
                        src={card.icon} 
                        alt="" 
                        className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0' 
                      />
                      <div className='flex-1'>
                        <h1 
                          style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }} 
                          className='text-lg sm:text-xl lg:text-[22px] text-[#2C4143] font-semibold leading-tight'
                        >
                          {card.title}
                        </h1>
                        <p 
                          style={{ fontFamily: "Raleway, sans-serif" }} 
                          className='text-sm sm:text-base lg:text-[18px] text-[#677071] mt-1 sm:mt-2 leading-relaxed lg:leading-[27px]'
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img 
                    src={card.image} 
                    alt="" 
                    className='mt-3 w-full h-auto rounded-lg'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body1;
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='bg-[#2C4143] bg-[url("/Hero/homep.svg")] bg-no-repeat bg-top-left bg-cover lg:bg-cover'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-9 py-8 md:py-10 lg:py-13'>
          <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12'>
            {/* Text Content */}
            <div className='flex flex-col gap-4 md:gap-6 w-full lg:w-[55%] text-center lg:text-left order-2 lg:order-1'>
              <h1 
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}  
                className='text-[#EFECD6] text-4xl sm:text-5xl md:text-[58px] font-semibold leading-[1.1] sm:leading-[1.2] md:leading-[70px]'
              >
                Here's to the New You
              </h1>
              <p 
                style={{ fontFamily: "Raleway, sans-serif" }} 
                className='text-[#EFECD6] text-base sm:text-lg md:text-[18px] leading-relaxed max-w-2xl mx-auto lg:mx-0'
              >
                One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support you can feel.
              </p>
              <button 
                style={{ fontFamily: "Raleway, sans-serif" }} 
                className='bg-[#8E968C] text-[#2C4143] rounded-full w-fit py-3 px-6 sm:px-9 mx-auto lg:mx-0 text-sm sm:text-base font-medium hover:bg-[#7A8278] transition-colors duration-200'
              >
                Coming Soon
              </button>
            </div>

            {/* Image Content */}
            <div className='w-full lg:w-1/2 flex justify-center order-1 lg:order-2'>
              <img 
                src="Hero/Home_Page_Start.png" 
                alt="NeoGreens Product" 
                className='h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] lg:w-[500px] w-auto object-contain'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-[#EFECD6] px-4 sm:px-6 lg:px-8 py-4 md:py-6'>
        <div 
          style={{ fontFamily: "Raleway, sans-serif" }} 
          className='max-w-5xl mx-auto text-[#2C4143]'
        >
          <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8'>
            <div className='flex sm:hidden justify-center items-center gap-6 w-full'>
              {/* Mobile Layout */}
              <div className='flex items-center gap-2'>
                <img 
                  src="Hero/Gluten-free.svg" 
                  alt="Gluten Free" 
                  className='w-6 h-6'
                />
                <h5 className='text-sm whitespace-nowrap'>Gluten Free</h5>
              </div>
              <div className='bg-[#2C4143] h-1 w-1 rounded-full'></div>
              <div className='flex items-center gap-2'>
                <img 
                  src="Hero/Vegan.svg" 
                  alt="Vegan" 
                  className='w-6 h-6'
                />
                <h5 className='text-sm whitespace-nowrap'>Vegan</h5>
              </div>
            </div>

            <div className='flex sm:hidden justify-center items-center gap-6 w-full'>
              <div className='flex items-center gap-2'>
                <img 
                  src="Hero/Organic.svg" 
                  alt="Organic" 
                  className='w-6 h-6'
                />
                <h5 className='text-sm whitespace-nowrap'>Organic</h5>
              </div>

              <div className='bg-[#2C4143] h-1 w-1 rounded-full'></div>
              <div className='flex items-center gap-2'>
                <img 
                  src="Hero/Zsn.svg" 
                  alt="Zero Synthetic Nutrients"
                  className='w-6 h-6'
                />
                <h5 className='text-sm whitespace-nowrap text-center'>
                  Zero Synthetic Nutrients
                </h5>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden sm:flex items-center gap-2 sm:gap-3 flex-1 min-w-[140px] justify-center'>
              <img 
                src="Hero/Gluten-free.svg" 
                alt="Gluten Free" 
                className='w-6 h-6 sm:w-8 sm:h-8'
              />
              <h5 className='text-sm sm:text-base md:text-[18px] whitespace-nowrap'>Gluten Free</h5>
            </div>

            <div className='hidden sm:block bg-[#2C4143] h-1 w-1 rounded-full'></div>
            <div className='hidden sm:flex items-center gap-2 sm:gap-3 flex-1 min-w-[140px] justify-center'>
              <img 
                src="Hero/Vegan.svg" 
                alt="Vegan" 
                className='w-6 h-6 sm:w-8 sm:h-8'
              />
              <h5 className='text-sm sm:text-base md:text-[18px] whitespace-nowrap'>Vegan</h5>
            </div>

            <div className='hidden sm:block bg-[#2C4143] h-1 w-1 rounded-full'></div>

            <div className='hidden sm:flex items-center gap-2 sm:gap-3 flex-1 min-w-[140px] justify-center'>
              <img 
                src="Hero/Organic.svg" 
                alt="Organic" 
                className='w-6 h-6 sm:w-8 sm:h-8'
              />
              <h5 className='text-sm sm:text-base md:text-[18px] whitespace-nowrap'>Organic</h5>
            </div>

            <div className='hidden md:block bg-[#2C4143] h-1 w-1 rounded-full'></div>

            <div className='hidden sm:flex items-center gap-2 sm:gap-3 flex-1 min-w-[160px] justify-center'>
              <img 
                src="Hero/Zsn.svg" 
                alt="Zero Synthetic Nutrients"
                className='w-6 h-6 sm:w-8 sm:h-8'
              />
              <h5 className='text-sm sm:text-base md:text-[18px] whitespace-nowrap text-center'>
                Zero Synthetic Nutrients
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
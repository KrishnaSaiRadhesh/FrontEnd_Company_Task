import React from 'react'

const Card = () => {
  return (
    <div className='sixcard  px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl relative w-full h-auto min-h-[450px] lg:h-[550px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between bg-[#2C4143] rounded-t-xl overflow-hidden'>
            {/* Text Content */}
            <div className='w-full  lg:w-1/2 py-8 lg:py-15 px-6 sm:px-8 lg:pl-10 flex flex-col items-start gap-6 lg:gap-10 bg-[url("Card/vec-simple.svg")] bg-no-repeat bg-bottom bg-contain lg:bg-auto order-2 lg:order-1'>
                    <h1 
                      style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }} 
                      className='text-2xl sm:text-3xl lg:text-[32px] leading-[1.3] sm:leading-[1.4] lg:leading-[42px] text-[#efecd6]'
                    >
                        The Simple Solution to Modern Lifestyle Health Issues
                    </h1>
                    <p 
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }} 
                      className='text-base sm:text-lg lg:text-[18px] text-[#efecd6] leading-relaxed lg:leading-[27px]'
                    >
                        From long hours to missed meals, we understand how wellness gets pushed aside. NeoGreens is our answer to that. Backed by science, grounded in nature, and made to meet you where you are.
                    </p>
                    <button 
                      style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }} 
                      className='text-base sm:text-lg lg:text-[18px] text-[#2C4143] bg-[#efecd6] leading-relaxed py-3 px-6 lg:px-5 rounded-full hover:bg-[#d8d5c0] transition-colors duration-200'
                    >
                        Our Story
                    </button>
            </div>
            
            {/* Image Content */}
            <div className='w-full hidden  lg:w-[60%] lg:absolute right-0   lg:flex items-center justify-center order-1 lg:order-2'>
                <img 
                  src="Card/simple.png" 
                  alt="NeoGreens product solution" 
                  className='w-full h-full object-cover lg:object-contain' 
                />
            </div>
        </div>

         <div className='lg:hidden flex items-center justify-center order-1 rounded-b-xl'>
                <img 
                  src="Card/simple.png" 
                  alt="NeoGreens product solution" 
                  className='w-full object-cover h-full ' 
                />
            </div>
    </div>
  )
}

export default Card
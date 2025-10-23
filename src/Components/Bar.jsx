import React from 'react'

const Bar = () => {
  return (
    <>
        <div className='four bg-[#EFECD6] mt-5'>
                <div className='flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-4 lg:gap-0'>
                        <div className='flex flex-col items-center text-center w-full sm:w-auto'>
                            <img src="Bar/increase.svg" alt="Increased Energy" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3' />
                            <h5 style={{ fontFamily: "Raleway, sans-serif" }}  className='text-sm sm:text-base lg:text-[18px] text-[#2C4143] font-medium leading-tight'>
                                Increased Energy Levels
                            </h5>
                        </div>
                        <div className='flex flex-col items-center text-center w-full sm:w-auto'>
                            <img src="Bar/improved.svg" alt="Improved Gut Health" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3' />
                            <h5 style={{ fontFamily: "Raleway, sans-serif" }}  className='text-sm sm:text-base lg:text-[18px] text-[#2C4143] font-medium leading-tight'>
                                Improved Gut Health
                            </h5>
                        </div>
                        <div className='flex flex-col items-center text-center w-full sm:w-auto'>
                            <img src="Bar/boosted.svg" alt="Boosted Immunity" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3' />
                            <h5 style={{ fontFamily: "Raleway, sans-serif" }}  className='text-sm sm:text-base lg:text-[18px] text-[#2C4143] font-medium leading-tight'>
                                Boosted Immunity
                            </h5>
                        </div>
                        <div className='flex flex-col items-center text-center w-full sm:w-auto'>
                            <img src="Bar/natural-1.svg" alt="Natural Detox" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3' />
                            <h5 style={{ fontFamily: "Raleway, sans-serif" }}  className='text-sm sm:text-base lg:text-[18px] text-[#2C4143] font-medium leading-tight'>
                                Natural Detox
                            </h5>
                        </div>
                        <div className='flex flex-col items-center text-center w-full sm:w-auto'>
                            <img src="Bar/daily.svg" alt="Daily Nourishment" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3' />
                            <h5 style={{ fontFamily: "Raleway, sans-serif" }}  className='text-sm sm:text-base lg:text-[18px] text-[#2C4143] font-medium leading-tight'>
                                Daily Nourishment
                            </h5>
                        </div>
                </div>
        </div>
    </>
  )
}

export default Bar
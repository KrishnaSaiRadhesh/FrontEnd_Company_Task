import React from "react";

const Body2 = () => {
  const tableData = [
    {
      feature: "Probiotic content",
      neogreens: true,
      plantBased: true,
      animalBased: true,
      whey: false,
    },
    {
      feature: "Organic nutrients",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Scientific backing transparency",
      neogreens: true,
      plantBased: true,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Taste profile",
      neogreens: true,
      plantBased: true,
      animalBased: false,
      whey: true,
    },
    {
      feature: "Ingredient sourcing transparency",
      neogreens: true,
      plantBased: true,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Cognitive-enhancing ingredients",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Gut–Brain Axis support",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Avoids questionable fillers (e.g. gums, stevia)",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Sustainability",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Protein quality",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Allergen-free",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      feature: "Digestibility",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
  ];

  return (
    <div>
      <div className="six min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[url('/nutrients-vec.svg')] bg-no-repeat bg-bottom-right">
        <div className="max-w-4xl mx-auto">
          {/* Heading Section */}
          <div className="heading text-center mb-8 sm:mb-10 flex flex-col items-center gap-3 sm:gap-4">
            <h1
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
              className="text-2xl sm:text-3xl lg:text-[40px] leading-[1.2] sm:leading-[1.3] lg:leading-[52px] text-[#2C4143]"
            >
              One Scoop. 60+ Nutrients. It's That Easy.
            </h1>
            <p
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }}
              className="text-sm sm:text-base lg:text-[18px] text-[#677071] leading-relaxed lg:leading-[27px] max-w-2xl"
            >
              NeoGreens is built to take the confusion out of wellness. you get
              the essentials – no synthetic ingredients, harsh formulas, or
              hidden additives. just smart, science-backed nutrition that
              respects your time and your trust.
            </p>
            <button
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 500 }}
              className="text-sm sm:text-base lg:text-[18px] border border-[#677071]/60 text-[#677071]/40 px-4 py-2 sm:px-4 sm:py-3 rounded-full w-fit hover:bg-[#677071] hover:text-white transition-colors duration-200"
            >
              Coming Soon
            </button>
          </div>

          {/* Table Section */}
          <div className="mb-8 sm:mb-10">
            <div className="bg-white rounded-xl shadow-xl p-4">
              <div className="overflow-x-auto no-scrollbar">
                <div className="min-w-full lg:min-w-[800px]">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th
                          style={{
                            fontFamily: "Playfair Display, serif",
                            fontWeight: 600,
                          }}
                          className="px-4 py-4 text-left text-base sm:text-lg font-semibold text-[#2C4143] bg-white sticky left-0 z-10 min-w-[200px] sm:min-w-[250px]"
                        >
                          Information
                        </th>
                        <th className="px-4 sm:px-6 py-4 text-center bg-slate-700 min-w-[120px] sm:min-w-[150px] rounded-t-xl">
                          <div className="flex flex-col items-center gap-1 sm:gap-2">
                            <img
                              src="/neogreens-logo.svg"
                              alt="neogreens"
                              className="h-6 sm:h-8 mx-auto"
                            />
                          </div>
                        </th>
                        <th
                          style={{
                            fontFamily: "Playfair Display, serif",
                            fontWeight: 600,
                          }}
                          className="px-4 sm:px-6 py-4 text-center text-base sm:text-lg font-semibold text-[#2C4143] bg-white min-w-[120px] sm:min-w-[150px]"
                        >
                          Plant-based
                        </th>
                        <th
                          style={{
                            fontFamily: "Playfair Display, serif",
                            fontWeight: 600,
                          }}
                          className="px-4 sm:px-6 py-4 text-center text-base sm:text-lg font-semibold text-[#2C4143] bg-white min-w-[120px] sm:min-w-[150px]"
                        >
                          Animal-based
                        </th>
                        <th
                          style={{
                            fontFamily: "Playfair Display, serif",
                            fontWeight: 600,
                          }}
                          className="px-4 sm:px-6 py-4 text-center text-base sm:text-lg font-semibold text-[#2C4143] bg-white min-w-[120px] sm:min-w-[150px]"
                        >
                          Whey
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {tableData.map((row, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td
                            className="px-4 py-4 text-sm sm:text-base text-gray-700 bg-white sticky left-0 z-10 min-w-[200px] sm:min-w-[250px] border-r border-gray-200"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                          >
                            {row.feature}
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-amber-50 min-w-[120px] sm:min-w-[150px]">
                            <div className="flex justify-center">
                              {row.neogreens ? (
                                <img
                                  src="/Body2/User-Images.svg"
                                  alt="Yes"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              ) : (
                                <img
                                  src="/Body2/User-gray.svg"
                                  alt="No"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              )}
                            </div>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center min-w-[120px] sm:min-w-[150px]">
                            <div className="flex justify-center">
                              {row.plantBased ? (
                                <img
                                  src="/Body2/User-Images.svg"
                                  alt="Yes"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              ) : (
                                <img
                                  src="/Body2/User-gray.svg"
                                  alt="No"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              )}
                            </div>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center min-w-[120px] sm:min-w-[150px]">
                            <div className="flex justify-center">
                              {row.animalBased ? (
                                <img
                                  src="/Body2/User-Images.svg"
                                  alt="Yes"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              ) : (
                                <img
                                  src="/Body2/User-gray.svg"
                                  alt="No"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              )}
                            </div>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center min-w-[120px] sm:min-w-[150px]">
                            <div className="flex justify-center">
                              {row.whey ? (
                                <img
                                  src="/Body2/User-Images.svg"
                                  alt="Yes"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              ) : (
                                <img
                                  src="/Body2/User-gray.svg"
                                  alt="No"
                                  className="h-5 w-5 sm:h-6 sm:w-6"
                                />
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-center mt-4 lg:hidden">
                <div className="bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
                  <span className="text-xs text-gray-600 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    Scroll to view all features
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Body2;

import React from "react";
import Navbar from "../components/Navbar"; // Corrected capitalization
import Footer from "../components/Footer";
import copperimg from "../assets/copper-plates.jpg.webp";
import steeling from "../assets/steel.jpg";
import mineralimg from "../assets/mineral.webp";
import textImg from "../assets/textBg1.jpeg";
// Ensure you have a logo image in the specified path


function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
   {/* Middle Text Section */}
<div
  className="w-full bg-cover bg-center flex flex-col items-center text-center py-40 relative"
  style={{ backgroundImage: `url(${textImg})` }}
>
  {/* Add a semi-transparent dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content stays above the overlay */}
  <div className="relative z-10 text-white">
    <h1 className="text-8xl mb-8 font-bold">LCA</h1>
    <h2 className="text-3xl font-semibold mt-4 mb-2">
      Life Cycle Assessment
    </h2>
    <p className="text-xl mt-4 max-w-2xl">
      AI-driven Life Cycle Assessment for Smarter Metallurgy.
      Seamlessly integrate process data, predictive imputation, and sustainability metrics into one unified platform.
    </p>
  </div>
</div>



      {/* Background Image Section */}
    {/* <div
  className="w-full h-96 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${mineralimg})` }}
></div> */}



    
      {/* Mining Operations Section */}
      <section className="mt-10 bg-gray-50 text-center">
        <h2 className="text-5xl font-semibold mt-10 mb-4">Mining Operations</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          Explore the various stages of metals extraction and production
          processes analyzed through our Life Cycle Assessment platform.
        </p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Copper Mining Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                src={copperimg}
                alt="Copper Mining"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">
                  Copper Mining
                </span>
              </div>
            </div>

            {/* Steel Industry Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                src={steeling}
                alt="Steel Industry"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">
                  Steel Industry
                </span>
              </div>
            </div>

            {/* Mineral Mining Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                src={mineralimg}
                alt="Mineral Mining"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">
                  Mineral Mining
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      

      <Footer />
    </div>
  );
}

export default LandingPage;

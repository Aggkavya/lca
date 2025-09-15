import React from "react";
import Navbar from "../components/navbar"; // Corrected component name for convention
import Footer from "../components/Footer"; // Import Footer component
import copperimg from "../assets/copper-plates.jpg.webp";
import steeling from "../assets/steel.jpg";
import mineralimg from "../assets/mineral.webp";

function LandingPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/* middle text section of the landing page */}
      <div className="flex flex-col items-center text-center mt-20 mb-10 flex-grow">
        <div className="text-8xl mb-8 font-bold">LCA</div>
        <div className="text-3xl font-semibold mt-4 mb-2">
          Life Cycle Assessment
        </div>
        <div className="text-xl mt-4 max-w-2xl">
          The application provides information about the terms and conditions of
          employment for the foreign worker in a "specialty occupation".
        </div>
      </div>

      {/* Mining Operations - First Section */}
      <div className="mt-10">
        <div className="miining-text flex flex-col items-center text-center bg-gray-50">
          <h1 className="text-5xl font-semibold text-center mt-10 mb-2">
            Mining Operations
          </h1>
          <div className=" text-xl mt-4 text-center max-w-2xl">
            Explore the various stages of metals extraction and production
            processes that are analyzed through our Life Cycle Assessment
            platform.
          </div>
        </div>
        <div className="card-holder ">
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Blog Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
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

                {/* Card 2 */}
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

                {/* Card 3 */}
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
        </div>
      </div>

      {/* Mining Operations - Duplicate Section */}
      <div className="mt-10">
        <div className="miining-text flex flex-col items-center text-center bg-gray-50">
          <h1 className="text-5xl font-semibold text-center mt-10 mb-2">
            Our Features
          </h1>
          <div className=" text-xl mt-4 text-center max-w-2xl">
            Explore the various stages of metals extraction and production
            processes that are analyzed through our Life Cycle Assessment
            platform.
          </div>
        </div>
        <div className="card-holder ">
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Blog Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <img
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    src={copperimg}
                    alt="Copper Mining"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <span className="text-white text-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <img
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    src={steeling}
                    alt="Steel Industry"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <span className="text-white text-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <img
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    src={mineralimg}
                    alt="Mineral Mining"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <span className="text-white text-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
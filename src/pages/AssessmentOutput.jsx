import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RadarChart from "../assets/image.png"
import SankeyDiagram from "../assets/image-2.png"
function AssessmentOutput() {
    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = '../assets/sample-pdf-report/sample-Lca.pdf';
        link.download = 'sample-Lca.pdf';
        link.click();
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">LCA Assessment Report</h2>

                {/* Meta Data */}
                <section className="mb-12 bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Meta Data</h3>
                    <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
                        <li><strong>Title:</strong> 1Kg Aluminium Sheet Production</li>
                        <li><strong>Date:</strong> {new Date().toLocaleDateString()}</li>
                        <li><strong>Note:</strong> Confidence Score: 85%</li>
                    </ul>
                </section>
                {/* Predicted Model Inputs */}
<section className="mb-12 bg-white shadow-md rounded-lg p-8">
    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Predicted Model Inputs</h3>

    <ul className="list-disc list-inside space-y-3 text-lg text-gray-800">
        <li><strong>Material Type:</strong> Aluminium Sheet</li>
        <li><strong>Quantity:</strong> 1 Kg</li>
        <li><strong>Production Process:</strong> Rolling</li>
        <li><strong>Source of Aluminium:</strong> Recycled Aluminium</li>
        <li><strong>Energy Consumption:</strong> 50 kWh</li>
        <li><strong>Water Usage:</strong> 200 Liters</li>
        <li><strong>Recycled Content Used Percentage:</strong> 35% </li>
    </ul>
</section>


                {/* Environmental Impacts Table */}
                <section className="mb-12 bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Environmental Impacts</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] border-collapse">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="p-3 text-left border">Category</th>
                                    <th className="p-3 text-left border">Value</th>
                                    <th className="p-3 text-left border">Unit</th>
                                    <th className="p-3 text-left border">Benchmark</th>
                                    <th className="p-3 text-left border">% Change</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-t">
                                    <td className="p-3 border">GWP100</td>
                                    <td className="p-3 border">1.6</td>
                                    <td className="p-3 border">+CO₂e</td>
                                    <td className="p-3 border">4.0</td>
                                    <td className="p-3 text-green-600 border">-60% Green</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 border">Energy Demand</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 border">Water Usage</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 text-green-600 border">-17% Green</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 border">Acidification Potential</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                    <td className="p-3 border">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Circularity Indicators */}
                <section className="mb-12 bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Circularity Indicators</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-600">
                        <div><strong>Recycled Content:</strong> 35%</div>
                        <div><strong>Circularity Index:</strong> 0.68</div>
                        <div><strong>EoL Recovery Rate</strong> 23%</div>
                        <div><strong>Product Life of Technology:</strong> 30 Years</div>
                    </div>
                </section>

 {/* AI Recommendations */}
<section className="mb-12 bg-white shadow-md rounded-lg p-8">
    <h3 className="text-2xl font-semibold text-gray-700 mb-6">AI Recommendations</h3>

    <div className="space-y-4 mb-6">
        <div className="max-w-xl bg-blue-100 p-4 rounded-xl shadow-md">
            <p className="text-gray-800">🤖 Consider using Leaf Materials for Packaging to reduce waste and improve biodegradability.</p>
        </div>

        <div className="max-w-xl bg-blue-100 p-4 rounded-xl shadow-md">
            <p className="text-gray-800">🤖 Optimize Water Usage during Production to lower environmental impact and save costs.</p>
        </div>

        <div className="max-w-xl bg-blue-100 p-4 rounded-xl shadow-md">
            <p className="text-gray-800">🤖 Improve Recycling Efficiency by integrating better sorting technologies in your process.</p>
        </div>
    </div>

    {/* Text input to interact with AI */}
    <div className="flex max-w-xl">
        <input
            type="text"
            placeholder="Ask the AI a question..."
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600">
            Send
        </button>
    </div>
</section>



                {/* Radar Chart */}
                <section className="mb-12 bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Radar Chart</h3>
                    <div className="w-full flex justify-center">
                        <img
                            src={RadarChart}
                            alt="Radar Chart"
                            className="w-full max-w-4xl rounded-lg shadow"
                        />
                    </div>
                </section>

                {/* Sankey Diagram */}
                <section className="mb-12 bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">Sankey Diagram</h3>
                    <div className="w-full flex justify-center">
                        <img
                            src={SankeyDiagram}
                            alt="Sankey Diagram"
                            className="w-full max-w-4xl rounded-lg shadow"
                        />
                    </div>
                </section>

                {/* Download PDF Button */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={handleDownloadPDF}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Download PDF Report
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default AssessmentOutput;

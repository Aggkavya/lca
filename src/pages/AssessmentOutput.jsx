import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AssessmentOutput() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow max-w-4xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-center mb-10">LCA Assessment Results</h2>

                {/* Environment Impacts Table */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Environment Impacts</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse border border-gray-300 rounded-md">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 text-left border">Category</th>
                                    <th className="p-3 text-left border">Value</th>
                                    <th className="p-3 text-left border">Unit</th>
                                    <th className="p-3 text-left border">Benchmark</th>
                                    <th className="p-3 text-left border">% Change</th>
                                </tr>
                            </thead>
                            <tbody>
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
                        </table>3
                    </div>
                </section>

                {/* Circularity Indicators */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Circularity Indicators</h3>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li>Recycled Content: ✓</li>
                        <li>Efficiency: ✓</li>
                        <li>Circular Material: ✓</li>
                        <li>Product Life of the Technology: 30 Years</li>
                    </ul>
                </section>

                {/* AI Recommendations */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">AI Recommendations</h3>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li>Use Leaf materials for packaging</li>
                        <li>Optimize water usage during production</li>
                        <li>Improve recycling efficiency</li>
                    </ul>
                </section>

                {/* Radar Chart Placeholder */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Radar Chart</h3>
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">[Radar Chart Placeholder]</span>
                    </div>
                </section>

                {/* Sankey Diagram Placeholder */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Sankey Diagram</h3>
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">[Sankey Diagram Placeholder]</span>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default AssessmentOutput;

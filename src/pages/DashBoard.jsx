import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

function DashBoard() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />

            <div className="text-center mt-8 mb-8">
                <h1 className="text-3xl font-bold text-gray-800">🌱 LCA Dashboard</h1>
                <p className="text-gray-600 mt-1">Track, manage, and create your Life Cycle Assessments</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-8">
                <div className="bg-white shadow rounded-lg p-5 text-center">
                    <h2 className="text-3xl font-bold text-indigo-600">12</h2>
                    <p className="text-gray-600 mt-1">Total Assessments</p>
                </div>
                <div className="bg-white shadow rounded-lg p-5 text-center">
                    <h2 className="text-3xl font-bold text-green-600">5</h2>
                    <p className="text-gray-600 mt-1">Completed Assessments</p>
                </div>
                <div className="bg-white shadow rounded-lg p-5 text-center">
                    <h2 className="text-3xl font-bold text-yellow-600">3</h2>
                    <p className="text-gray-600 mt-1">Ongoing Assessments</p>
                </div>
                <div className="bg-white shadow rounded-lg p-5 text-center">
                    <h2 className="text-3xl font-bold text-red-600">+1500 kg</h2>
                    <p className="text-gray-600 mt-1">CO₂ Saved</p>
                </div>
            </div>

            {/* Action Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6 mb-8">
                <div
                    onClick={() => navigate("/past-assessments")}
                    className="cursor-pointer bg-indigo-600 text-white rounded-lg shadow-lg p-8 w-full max-w-md text-center hover:bg-indigo-700 transition duration-300"
                >
                    <h2 className="text-2xl font-semibold mb-4"> View Past Assessments</h2>
                    <p className="mb-6 text-gray-100">Review all your previous LCA assessment reports in one place.</p>
                    <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-gray-100">
                        View Assessments
                    </button>
                </div>

                <div
                    onClick={() => navigate("/new-assessment")}
                    className="cursor-pointer bg-green-600 text-white rounded-lg shadow-lg p-8 w-full max-w-md text-center hover:bg-green-700 transition duration-300"
                >
                    <h2 className="text-2xl font-semibold mb-4"> Start New Assessment</h2>
                    <p className="mb-6 text-gray-100">Begin a new Life Cycle Assessment to analyze environmental impact.</p>
                    <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded hover:bg-gray-100">
                        Create New Assessment
                    </button>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">📄 Recent Activity</h3>
                <ul className="divide-y divide-gray-200">
                    <li className="py-3 flex justify-between items-center">
                        <span>Eco-Friendly Packaging Assessment</span>
                        <span className="text-green-600 font-medium">Completed</span>
                    </li>
                    <li className="py-3 flex justify-between items-center">
                        <span>Solar Panel Manufacturing Assessment</span>
                        <span className="text-yellow-600 font-medium">In Progress</span>
                    </li>
                    <li className="py-3 flex justify-between items-center">
                        <span>Plastic Bottle Recycling Assessment</span>
                        <span className="text-green-600 font-medium">Completed</span>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default DashBoard;

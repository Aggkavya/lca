import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NewAssessment() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleDownloadTemplate = () => {
        const link = document.createElement('a');
        link.href = '/templates/lca-template.csv';
        link.download = 'lca-template.csv';
        link.click();
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleStartAssessment = () => {
        if (!selectedFile) {
            alert("Please upload a CSV file before starting the assessment.");
            return;
        }
        navigate("/assessment-form");
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">
                    Start New LCA Assessment
                </h1>

                <div className="max-w-lg mx-auto space-y-16">

                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-6">
                            Here is a sample CSV template
                        </p>
                        <button
                            onClick={handleDownloadTemplate}
                            className="w-full bg-blue-600 text-white text-lg py-3 rounded-full hover:bg-blue-700 transition duration-300 font-medium"
                        >
                            Download CSV Template
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-6">
                            Upload your CSV template here
                        </p>
                        <label className="cursor-pointer w-full inline-block bg-gray-200 text-lg py-3 rounded-full text-gray-800 font-medium hover:bg-gray-300 transition duration-300">
                            Add CSV File
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                        {selectedFile && (
                            <p className="mt-4 text-green-600 text-md">
                                Selected file: {selectedFile.name}
                            </p>
                        )}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate("/assessment-output")}
                            className="w-full bg-green-600 text-white text-lg py-3 rounded-full hover:bg-green-700 transition duration-300 font-medium"
                        >
                            Start Assessment
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default NewAssessment;

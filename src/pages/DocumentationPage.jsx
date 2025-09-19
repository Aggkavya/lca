import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Documentation() {
  return (
    <>
    <Navbar/>
    
  
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">📘 How Our LCA Application Works</h1>

      {/* Section 1: Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-2">
          Our tool helps you perform a <strong>Life Cycle Assessment (LCA)</strong> for industrial
          processes. Instead of struggling with complex databases, you simply download a
          pre-structured CSV, fill in your data, and upload it. The backend will validate, impute
          missing values (with ML), and return a <strong>detailed LCA report</strong> with graphs and
          metrics.
        </p>
      </section>

      {/* Section 2: Workflow */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Workflow Overview</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Download CSV Template:</strong> Get our structured template that defines all
            required fields (scenario, processes, flows).
          </li>
          <li>
            <strong>Fill in Data:</strong> Add your process stages, inputs, outputs, and emissions
            according to the template.
          </li>
          <li>
            <strong>Upload CSV:</strong> Drag and drop or upload your completed file to the app.
          </li>
          <li>
            <strong>Automated Validation:</strong> The backend checks for missing or invalid fields.
            Missing data may be filled using ML imputation (with confidence intervals).
          </li>
          <li>
            <strong>LCA Calculation:</strong> Brightway2/OpenLCA engine computes environmental
            impacts (GWP, energy, water, circularity).
          </li>
          <li>
            <strong>Results Dashboard:</strong> View process-level and flow-level contributions with
            interactive graphs, metrics, and recommendations.
          </li>
        </ol>
      </section>

      {/* Section 3: Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Key Features</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>⚡ <strong>Automatic Imputation:</strong> Missing quantities, transport, or recycled content are predicted with ML models.</li>
          <li>🔎 <strong>Provenance Tracking:</strong> Every value has a trace (user-supplied, template, or predicted).</li>
          <li>📊 <strong>Interactive Metrics:</strong> Global Warming Potential, Energy Use, Water Consumption, Circularity.</li>
          <li>📈 <strong>Uncertainty Analysis:</strong> Monte Carlo simulations for 95% confidence intervals.</li>
          <li>📑 <strong>Export Reports:</strong> Download full PDF/CSV reports for compliance or sharing.</li>
        </ul>
      </section>

      {/* Section 4: Output Explained */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Understanding the Output</h2>
        <p className="mb-2">
          After uploading your CSV and running the assessment, you’ll see outputs organized into
          different levels:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Scenario-Level Metrics:</strong> Overall GWP (kg CO₂e), Energy Demand (MJ),
            Water Use (m³), Circularity Index (%).
          </li>
          <li>
            <strong>Process-Level Contributions:</strong> How much each stage (e.g., mining,
            smelting, transport) contributes to impacts.
          </li>
          <li>
            <strong>Flow-Level Details:</strong> Inputs, outputs, emissions, transport — with
            quantities, units, and imputation status.
          </li>
          <li>
            <strong>Uncertainty & Sensitivity:</strong> Confidence intervals and tornado plots show
            key drivers of results.
          </li>
        </ul>
      </section>

      {/* Section 5: Quick Example */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Example</h2>
        <p className="mb-2">Imagine you’re modeling aluminium smelting:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Upload flows: electricity (input), alumina (input), aluminium ingot (output), CO₂ (emission).</li>
          <li>The system predicts missing transport distances and recycled content automatically.</li>
          <li>You get results like: <em>GWP = 15 kg CO₂e / kg aluminium</em> with 95% CI ±2.3.</li>
          <li>Dashboard shows energy dominates impacts → recommendation: switch to renewable grid mix.</li>
        </ul>
      </section>

      {/* Section 6: Next Steps */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">6. Next Steps</h2>
        <p>
          Ready to try? 🎉 Download the CSV template, start filling your data, and let the app guide
          you. Within minutes, you’ll have a full LCA assessment with actionable insights.
        </p>
      </section>
    </div>
  
    <Footer></Footer></>
    
  );
}

export default Documentation;
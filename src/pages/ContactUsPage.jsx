import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <Navbar />
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="bg-black/60 p-10 rounded-xl text-white max-w-lg w-full shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Team:</span> XYZ
          </p>
          <p>
            <span className="font-semibold">Email:</span> xyz@gmail.com
          </p>
          <p>
            <span className="font-semibold">Address:</span> 123 Mining Street,
            Resource City, Earth
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
    
  );
}

export default Contact;
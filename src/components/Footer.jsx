function Footer(){
    return(
    <>
    <footer className="bg-black text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Company Info */}
        <div >
          <h2 className="text-lg font-bold mb-3">Mining Project</h2>
          <p className="text-sm  text-gray-400">
            Leading the way in sustainable mining solutions and environmental stewardship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#process" className="hover:text-yellow-400">Process</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <h2 className="text-lg font-bold mb-3">Compliance</h2>
          <ul className="space-y-2 text-sm">
            <li>ISO 9001:2015 – Quality Management</li>
            <li>ISO 14001:2015 – Environmental Management</li>
            <li>ISO 45001:2018 – Occupational Health & Safety</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Mining Project. All rights reserved. | 
          <a href="#privacy" className="hover:text-yellow-400 ml-1">Privacy Policy</a>
        </p>
      </div>
    </footer>

    {/* <div className="bg-gray-100">
                <div className="text-center p-4 text-gray-600">
                    Metals Mining Operations © 2024
                </div>
            </div> */}
    </>)
    
}
export default Footer;
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Impact Conversion Block */}
        <div className="bg-tech-gray rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6">
                Ready to Optimize Your Harvest?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Let’s map out your fields. Schedule a consultation to see how Lumora Farming can transform your agricultural operations.
              </p>
              <div className="flex items-center gap-4 text-primary font-medium">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <span>Call us direct: +260 97 000 0000</span>
              </div>
            </div>

            {/* Minimalist Booking Form Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                <input type="text" placeholder="Farm Location / Size" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                <button type="button" className="w-full bg-primary hover:bg-gray-800 text-white font-medium py-4 rounded-lg flex items-center justify-center transition-colors">
                  Request Quote <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Standard Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div>
            <Link href="/" className="inline-flex mb-6 bg-white p-2 rounded-xl">
              <Image 
                src="/logo.png" 
                alt="Lumora Farming" 
                width={120} 
                height={120} 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Advanced precision agriculture services for Zambia and beyond. We elevate yields and minimize waste with cutting-edge drone technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-brand flex-shrink-0" />
                Nyumba Yanga, Lusaka, Zambia
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-5 h-5 mr-3 text-brand flex-shrink-0" />
                info@lumorafarming.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-5 h-5 mr-3 text-brand flex-shrink-0" />
                +260 97 000 0000
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 text-sm hover:text-brand transition-colors">Services</a></li>
              <li><a href="#technology" className="text-gray-400 text-sm hover:text-brand transition-colors">Technology</a></li>
              <li><a href="#faq" className="text-gray-400 text-sm hover:text-brand transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-brand transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Lumora Farming. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo.png";
import googleStore from "../../assets/GooglePlayStore.png";
import appleStore from "../../assets/AppleStore.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-700 mb-2">69 Selous Ave, Harare, Zimbabwe</p>
          <p className="text-gray-700 mb-2">Support (+263) 03 0000052</p>
          <p className="text-blue-600 cursor-pointer">info@demo.com</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 text-gray-700">Help Center</h3>
          <ul className="space-y-2 text-gray-700">
            <li>FAQ</li>
            <li>About E-Commerce</li>
            <li>Support Tickets</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 text-gray-700">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 ">
            <li>Become A Supplier</li>
            <li>Track Order</li>
            <li>Services & Membership</li>
            <li>Help & Community</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 text-gray-700">Download App</h3>
          <div className="flex items-center gap-3">
            <div className="w-40 h-14 bg-white rounded-md flex items-center justify-center">
              <img
                src={googleStore}
                alt="google"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="w-40 h-14 bg-white rounded-md flex items-center justify-center">
              <img
                src={appleStore}
                alt="apple"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-4 mt-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            ©2021 E-Commerce All Rights Reserved
          </p>

          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <p className="text-sm text-gray-600">Stay Connected :</p>
            <Facebook className="w-5 h-5 cursor-pointer text-gray-700" />
            <Twitter className="w-5 h-5 cursor-pointer text-gray-700" />
            <Instagram className="w-5 h-5 cursor-pointer text-gray-700" />
            <Linkedin className="w-5 h-5 cursor-pointer text-gray-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}

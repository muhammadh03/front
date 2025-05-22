import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import googlePlayImage from "../../assets/google-play.png";
import appStoreImage from "../../assets/app-store.png";
import paymentMethods from "../../assets/payment-method.png";

const Footer = () => {
    return (
        <div className="container mx-auto text-gray-500">
            <div className="w-full flex flex-col items-center justify-center">
                <img src={logo} alt="logo" className="w-14" />
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black ml-2">TEKCITY</h1>
                <div className="text-center">
                    <p className="text-gray-800 text-lg">
                        Smart tech marketplace connecting vendors and customers through seamless, secure digital experiences.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4 px-2 mt-3 items-start">
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="font-semibold text-xl text-gray-700">Contact Us</h1>
                    </div>

                    <div>
                        <span className="font-semibold">Address:</span>
                        <span>123 Main Street, City, Country</span>
                    </div>

                    <div>
                        <span className="font-semibold">Phone:</span>
                        <Link to="#" className="hover:text-blue-600">
                            <span>(+1) 123-456-7890</span>
                        </Link>
                    </div>

                    <div>
                        <span className="font-semibold">Email:</span>
                        <Link to="#" className="hover:text-blue-600">
                            <span>tekcity@example.com</span>
                        </Link>
                    </div>

                    <div className="flex gap-2 text-gray-400">
                        <FaFacebookSquare className="w-8 h-8 hover:text-blue-500" />
                        <FaInstagramSquare className="w-8 h-8 hover:text-blue-500" />
                        <FaLinkedin className="w-8 h-8 hover:text-blue-500" />
                        <FaTwitterSquare className="w-8 h-8 hover:text-blue-500" />
                    </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="font-semibold text-xl text-gray-700">Legal</h1>
                    </div>
                    <Link to="#" className="footer-link">Cookie Policy</Link>
                    <Link to="#" className="footer-link">Privacy Policy</Link>
                    <Link to="#" className="footer-link">Terms and Conditions</Link>
                    <Link to="#" className="footer-link">Refund Policy</Link>
                    <Link to="#" className="footer-link">Disclaimer</Link>
                    <Link to="#" className="footer-link">FAQs</Link>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-2">
                    <div>
                        <h1 className="font-semibold text-xl text-gray-700">Services</h1>
                    </div>
                    <Link to="#" className="footer-link">Support Center</Link>
                    <Link to="#" className="footer-link">Editor Help</Link>
                    <Link to="#" className="footer-link">Live Chatting</Link>
                    <Link to="#" className="footer-link">Account Management</Link>
                    <Link to="#" className="footer-link">System Status</Link>
                    <Link to="#" className="footer-link">Web Security</Link>
                    <Link to="#" className="footer-link">Community</Link>
                    <Link to="#" className="footer-link">Terms of Service</Link>
                </div>

                {/* News Letter */}
                <div className="flex flex-col gap-2">
                    <div>
                        <h1 className="font-semibold text-xl text-gray-700">News Letter</h1>
                    </div>
                    <input type="email" name="email" id="" placeholder="Enter your email ...." className="border border-gray-400 p-2 rounded-md" />
                    <button className="bg-blue-300 hover:bg-blue-500 text-white p-2 rounded-md">Subscribe</button>
                    <p>Download our App and get extra 15% off on your first purchase</p>
                    <div className="flex gap-2">
                        <img src={googlePlayImage} alt="google_play_image" className="cursor-pointer" />
                        <img src={appStoreImage} alt="app_store_image" className="cursor-pointer" />
                    </div>
                    <div>
                        <p className="text-sm py-1">Secured Payment Gateways</p>
                        <img src={paymentMethods} alt="payment_method_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;




{/* <div>
    <p>
        © 2023 TecCity. All rights reserved.
    </p>
</div> */}

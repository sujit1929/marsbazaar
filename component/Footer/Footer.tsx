import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white font-bold mb-4">About Us</h3>
                            <p className="text-sm">
                                ShopHub is your one-stop destination for all your shopping needs.
                                We offer quality products at competitive prices.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white">FAQs</a></li>
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <Mail className="h-4 w-4 mr-2" />
                                    support@shophub.com
                                </li>
                                <li className="flex items-center">
                                    <Phone className="h-4 w-4 mr-2" />
                                    +1 (555) 123-4567
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-white">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="hover:text-white">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                        <p>&copy; 2025 ShopHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
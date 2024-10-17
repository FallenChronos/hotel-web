import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className={`text-2xl font-bold mb-4 ${playfair.className}`}>Hotel Agrawal Pride</h4>
                        <p className="text-gray-400">Experience luxury redefined.</p>
                    </div>
                    <div>
                        <h5 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Quick Links</h5>
                        <ul className="space-y-2">
                            {['About Us', 'Rooms & Suites', 'Dining', 'Spa & Wellness'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Contact</h5>
                        <ul className="space-y-2">
                            <li className="text-gray-400">123 Luxury Lane, Cityville</li>
                            <li className="text-gray-400">Phone: +1 (555) 123-4567</li>
                            <li className="text-gray-400">Email: info@luxehaven.com</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Follow Us</h5>
                        <div className="flex space-x-4">
                            {['facebook', 'instagram', 'twitter'].map((social) => (
                                <a key={social} href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    <Image src={`/images/${social}-icon.svg`} alt={social} width={24} height={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
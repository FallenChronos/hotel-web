import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });

const navItems = [
    {
        title: 'Rooms',
        path: '#rooms'
    },
    {
        title: 'Dining',
        path: '#dining'
    },
    {
        title: 'Services',
        path: '#services'
    },
    {
        title: 'Contact',
        path: '#contact'
    }];

const socialLinks = [
    {
        name: 'facebook',
        link: "http://www.google.com"
    },
    {
        name: 'instagram',
        link: "http://www.google.com"
    },
    {
        name: 'map',
        link: "http://www.google.com"
    }];

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
                            {navItems.map((item) => (
                                <li key={item.title}>
                                    <a href={item.path} className="text-gray-400 hover:text-white transition duration-300">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Contact</h5>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Marchikote Square, Puri, Odisha 752001</li>
                            <li className="text-gray-400">Phone: +919101848976</li>
                            <li className="text-gray-400">Email: hotalprideagrwal@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Follow Us</h5>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Link key={social.name} href={social.link} className="text-gray-400 hover:text-white transition duration-300">
                                    <Image src={`/images/${social.name}-icon.svg`} alt={social.name} width={30} height={30} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import { Playfair_Display } from 'next/font/google'
import Image from "next/image"
import { BiBed, BiDrink, BiWifi } from 'react-icons/bi'
import { MdBalcony } from 'react-icons/md'
import { Button } from "./ui/button"

const playfair = Playfair_Display({ subsets: ['latin'] })

const rooms = [
    { name: 'Deluxe room', price: '2450' },
    { name: 'Executive room', price: '2500' },
    { name: 'Family room', price: '2850' },
    { name: 'Premium room', price: '3299' },
    { name: 'Premium Suite', price: '4450' },
    { name: 'Royal Suite', price: '5500' }
]

const Rooms = () => {
    return (
        <section id='rooms' className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <h2 className={`text-4xl font-bold text-center mb-12 ${playfair.className} text-gray-800`}>
                    Our Exquisite Rooms
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <div key={room.name} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl border border-gray-200">
                            <div className="relative">
                                <Image
                                    src={`/images/property/${room.name.toLowerCase().replace(' ', '-')}.jpeg`}
                                    alt={room.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                                    <span className="text-sm font-semibold text-gray-800">₹{room.price}/night</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className={`text-2xl font-semibold mb-2 ${playfair.className} text-gray-800`}>{room.name}</h3>
                                <p className="text-gray-600 mb-4">Experience luxury with a private balcony and stunning views.</p>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex space-x-4">
                                        <BiBed className="text-gray-500 text-xl" />
                                        <BiWifi className="text-gray-500 text-xl" />
                                        <BiDrink className="text-gray-500 text-xl" />
                                        <MdBalcony className="text-gray-500 text-xl" />
                                    </div>
                                </div>
                                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    <a href={"tel:+919101848976"}>Book Now</a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Rooms
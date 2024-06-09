import Link from "next/link";
import { CallIcon, FacebookIcon, LocationIcon, MailIcon } from "./Icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return router.pathname === path ? 'bg-blue-400 text-white' : '';
    };

    return (
        <header className="sticky top-0 bg-white shadow-md z-50 flex items-center justify-between px-4 lg:px-0">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/logo.png" className="w-72 h-28 ms-2" priority alt="Golden Supervision Academy logo" width={600} height={100} />
                </Link>
            </div>

            <div className="lg:hidden flex justify-end w-full">
                <button onClick={handleMenuToggle} className="flex flex-col items-center justify-center p-2">
                    <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                    <span className={`block h-0.5 w-6 bg-black my-0.5 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
                </button>
            </div>

            <div className="hidden lg:grid lg:grid-rows-6 lg:gap-2 lg:items-center lg:w-full lg:top-0 lg:justify-end">
                <div className="row-span-2 flex items-center justify-around text-sm lg:bg-black lg:bg-opacity-5 shadow-md p-1">
                    <Link href="https://maps.app.goo.gl/A4d2BGtvpwWJdkKj9" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                        <LocationIcon className="w-6 h-6" />
                        <p className="hidden md:block">Chapakot-08, Damachour, Syangja, Nepal</p>
                    </Link>
                    <Link href="tel:+99454555454445" className="flex items-center gap-2">
                        <CallIcon className="w-6 h-6" />
                        <p className="hidden md:block">9800000000, 9800000000</p>
                    </Link>
                    <Link href="mailto:gsacademy@gmail.com" className="flex items-center gap-2">
                        <MailIcon className="h-6 w-6" />
                        <p className="hidden md:block">gsacademy@gmail.com</p>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100045764452801" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className="w-6 h-6 hover:bg-white hover:rounded-xl" />
                    </Link>
                </div>

                <nav className="row-span-4 flex flex-col lg:flex-row lg:items-center text-base gap-6 lg:gap-12 mt-4 lg:mt-0 lg:me-4">
                    <Link href="/" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/')}`}>HOME</Link>
                    <Link href="/gallery" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/gallery')}`}>GALLERY</Link>
                    <Link href="/facilities" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/facilities')}`}>FACILITIES</Link>
                    <Link href="/events" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/events')}`}>EVENTS</Link>
                    <Link href="/articles" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/articles')}`}>ARTICLES</Link>
                    <Link href="/about" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/about')}`}>ABOUT</Link>
                    <Link href="/contact" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/contact')}`}>CONTACT</Link>
                </nav>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] min-h-[50vh] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-200 py-16"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <Link href="/" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/')}`}>HOME</Link>
                        <Link href="/gallery" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/gallery')}`}>GALLERY</Link>
                        <Link href="/facilities" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/facilities')}`}>FACILITIES</Link>
                        <Link href="/events" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/events')}`}>EVENTS</Link>
                        <Link href="/articles" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/articles')}`}>ARTICLES</Link>
                        <Link href="/about" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/about')}`}>ABOUT</Link>
                        <Link href="/contact" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/contact')}`}>CONTACT</Link>
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        <motion.a href="https://maps.app.goo.gl/A4d2BGtvpwWJdkKj9" target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mx-1"
                            aria-label="Visit Facebook Profile">
                            <LocationIcon />
                        </motion.a>

                        <motion.a href="tel:+9800000000" target="_blank" whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1"
                            aria-label="contact info">
                            <CallIcon />
                        </motion.a>

                        <motion.a href="mailto:gsacademy@gmail.com" target="_blank" whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1"
                            aria-label="email addr">
                            <MailIcon />
                        </motion.a>
                        <motion.a href="https://www.facebook.com/profile.php?id=100045764452801" target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1"
                            aria-label="visit facebook">
                            <FacebookIcon />
                        </motion.a>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}

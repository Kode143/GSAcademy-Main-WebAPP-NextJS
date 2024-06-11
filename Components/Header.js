import Link from "next/link";
import { CallIcon, FacebookIcon, LocationIcon, MailIcon } from "./Icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const router = useRouter();

    const isActive = (path) => {
        return router.pathname === path ? 'bg-blue-400 text-white' : '';
    };

    return (
        <header className="sticky top-0 bg-white shadow-md z-50 flex items-center justify-between ">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/logo.png" className="w-72 h-28 ms-2" priority alt="Golden Supervision Academy logo" width={600} height={100} />
                </Link>
            </div>

            <div className=" grid grid-rows-7 items-center w-full top-0 justify-end">
                <div className="row-span-2 flex ms-24 items-center justify-around text-xs gap-1 bg-black bg-opacity-5 shadow-md p-1">
                    <Link href="https://maps.app.goo.gl/A4d2BGtvpwWJdkKj9" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                        <LocationIcon className="w-6 h-6" />
                        <p>Chapakot-08, Damachour, Syangja, Nepal</p>
                    </Link>
                    <Link href="tel:+99454555454445" className="flex items-center gap-2">
                        <CallIcon className="w-6 h-6" />
                        <p>9800000000, 9800000000</p>
                    </Link>
                    <Link href="mailto:gsacademy@gmail.com" className="flex items-center gap-2">
                        <MailIcon className="h-6 w-6" />
                        <p>gsacademy@gmail.com</p>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100045764452801" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className="w-6 h-6 hover:bg-white hover:rounded-xl" />
                    </Link>
                </div>

                <nav className="row-span-4 flex flex-row items-center text-base gap-6 mt-4 me-4">
                    <Link href="/" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/')}`}>HOME</Link>
                    <Link href="/gallery" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/gallery')}`}>GALLERY</Link>
                    <Link href="/facilities" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/facilities')}`}>FACILITIES</Link>
                    <Link href="/events" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/events')}`}>EVENTS</Link>
                    <Link href="/articles" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/articles')}`}>ARTICLES</Link>
                    <Link href="/about" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/about')}`}>ABOUT</Link>
                    <Link href="/contact" className={`hover:bg-blue-400 hover:text-white p-2 ${isActive('/contact')}`}>CONTACT</Link>
                </nav>
            </div>
        </header>
    );
}

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={130} height={100} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-sm">
          <div className="flex flex-col">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="/terms" className="hover:text-blue-500">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-blue-500">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="/faq" className="hover:text-blue-500">
              FAQ
            </Link>
            <Link href="/support" className="hover:text-blue-500">
              Support
            </Link>
          </div>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <Link href="https://facebook.com" className="hover:text-blue-500">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com" className="hover:text-blue-500">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com" className="hover:text-blue-500">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-blue-500">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

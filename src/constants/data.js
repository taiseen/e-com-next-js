import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const menuData = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

export const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

export const footerData = {
    firstLevel: [
        { id: 1, text: 'Find a store' },
        { id: 2, text: 'Become a partner' },
        { id: 3, text: 'Sign up for email' },
        { id: 4, text: 'Send us feedback' },
        { id: 5, text: 'Student discount' },
    ],
    secondLevel: [
        { id: 1, text: 'Get help' },
        { id: 2, text: 'Order Status' },
        { id: 3, text: 'Delivery' },
        { id: 4, text: 'Returns' },
        { id: 5, text: 'Payment Options' },
        { id: 6, text: 'Contact Us' },
    ],
    thirdLevel: [
        { id: 1, text: 'About nike' },
        { id: 2, text: 'News' },
        { id: 3, text: 'Careers' },
        { id: 4, text: 'Investors' },
        { id: 5, text: 'Sustainability' },
    ],
    forthLevel: [
        { id: 1, path: 'www.facebook.com', icon: FaFacebookF },
        { id: 2, path: 'www.twitter.com', icon: FaTwitter },
        { id: 3, path: 'www.youtube.com', icon: FaYoutube },
        { id: 4, path: 'www.instagram.com', icon: FaInstagram },
    ],
    fifthLevel: [
        { id: 1, text: 'Guides' },
        { id: 2, text: 'Terms of Sale' },
        { id: 3, text: 'Terms of Use' },
        { id: 4, text: 'Privacy Policy' },
    ],
}
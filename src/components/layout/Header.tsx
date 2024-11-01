import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';

type NavItem = {
    label: string;
    submenu?: string[];
};

type Props = {
    navItems?: NavItem[];
};

export default function Header({ navItems: propNavItems }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    const navItems: NavItem[] = propNavItems || [
        {
            label: 'Áreas de Atuação',
            submenu: [
                'Direito Civil',
                'Direito Empresarial',
                'Direito Trabalhista',
                'Direito Tributário'
            ]
        },
        { label: 'Sobre Nós' },
        { label: 'Equipe' },
        { label: 'Blog' },
        { label: 'Contato' }
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSubmenu = (index: number) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <>
            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-[200] transition-all duration-400 ease-in-out
                    ${isOpen ? 'visible' : 'invisible'}`}
                aria-hidden={!isOpen}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-400 ease-in-out
                        ${isOpen ? 'opacity-50 backdrop-blur-sm' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl
                        transform transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex flex-col h-full">
                        {/* Menu Header */}
                        <div className="border-b border-gray-100">
                            <div className="p-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">A</span>
                                    </div>
                                    <span className="font-bold text-lg text-gray-900">
                                        Advocacia Elite
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gray-50 p-4">
                            <div className="flex flex-col space-y-2">
                                <a href="tel:1112345678" className="text-sm text-gray-600 hover:text-yellow-600 flex items-center gap-2 transition-colors duration-200">
                                    <Phone className="h-4 w-4" />
                                    (11) 1234-5678
                                </a>
                                <a href="mailto:contato@escritorio.com" className="text-sm text-gray-600 hover:text-yellow-600 flex items-center gap-2 transition-colors duration-200">
                                    <Mail className="h-4 w-4" />
                                    contato@escritorio.com
                                </a>
                            </div>
                            <div className="flex gap-4 mt-3 pt-3 border-t border-gray-200">
                                <Link href="/en" className="text-sm text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                                    English
                                </Link>
                                <Link href="/area-cliente" className="text-sm text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                                    Área do Cliente
                                </Link>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-4 space-y-1">
                                {navItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-100 last:border-0"
                                    >
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleSubmenu(index)}
                                                    className="flex items-center justify-between w-full py-3 text-gray-900 
                                                        font-medium hover:text-yellow-600 transition-colors duration-200"
                                                >
                                                    {item.label}
                                                    <ChevronRight
                                                        className={`h-5 w-5 transform transition-transform duration-300 ease-out
                                                            ${activeSubmenu === index ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-out
                                                        ${activeSubmenu === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                                                >
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            href={`/areas/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                            className="block py-2 pl-4 text-gray-600 hover:text-yellow-600 text-sm
                                                                transition-colors duration-200"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={`/${item.label.toLowerCase().replace(/ /g, '-')}`}
                                                className="block py-3 text-gray-900 font-medium hover:text-yellow-600 
                                                    transition-colors duration-200"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <Button
                                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white 
                                    transition-colors duration-200 transform hover:scale-[1.02]"
                            >
                                Consulta Gratuita
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 
                ${scrolled ? 'bg-gray-900 shadow-xl' : 'bg-transparent'}`}>
                {/* Top Bar */}
                <div className="hidden lg:block bg-gray-900/95 backdrop-blur-sm text-white">
                    <div className="container mx-auto px-6 py-2">
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex space-x-6">
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>(11) 1234-5678</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>contato@escritorio.com</span>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <Link href="/area-cliente" className="hover:text-yellow-400 transition-colors">
                                    Área do Cliente
                                </Link>
                                <Link href="/en" className="hover:text-yellow-400 transition-colors">
                                    English
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className={`container mx-auto px-6 transition-all duration-300
                    ${scrolled ? 'py-3' : 'py-6'}`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-yellow-600 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <span className="font-bold text-xl text-white">
                                Advocacia Elite
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    <Link
                                        href={'/'}
                                        className="flex items-center text-white space-x-1 font-medium transition-colors hover:text-yellow-600"
                                    >
                                        <span>{item.label}</span>
                                        {item.submenu && <ChevronDown className="h-4 w-4" />}
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 
                                            group-hover:visible transition-all duration-300 transform translate-y-2 
                                            group-hover:translate-y-0">
                                            <div className="bg-white rounded-lg shadow-xl py-2">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={'/'}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 
                                                            hover:text-yellow-600 transition-colors"
                                                    >
                                                        {subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 
                                transition-colors duration-200 transform hover:scale-[1.02]">
                                Consulta Gratuita
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative z-[201] p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-900" />
                            ) : (
                                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
                            )}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
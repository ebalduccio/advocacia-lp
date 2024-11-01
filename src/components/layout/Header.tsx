import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
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

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${scrolled ? 'bg-gray-900 shadow-xl' : 'bg-transparent'}`}>
            {/* Top Bar */}
            <div className="hidden lg:block bg-gray-900 text-white">
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
            <nav className={`container mx-auto px-6 py-4 transition-all duration-300
                ${scrolled ? 'py-3' : 'py-6'}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-10 flex items-center space-x-2">
                        <div className="w-10 h-10 bg-yellow-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className={`font-bold text-xl text-white`}>
                            Advocacia Elite
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    href={'/'}
                                    className={`flex items-center text-white space-x-1 font-medium transition-colors
                                        hover:text-yellow-600`}
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
                        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6">
                            Consulta Gratuita
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-10 p-2"
                    >
                        {isOpen ? (
                            <X className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
                        ) : (
                            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed inset-0 bg-white z-0 transform transition-transform duration-300 
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="pt-20 px-6">
                        {navItems.map((item, index) => (
                            <div key={index} className="py-3 border-b border-gray-100">
                                <Link
                                    href={`/${item.label.toLowerCase().replace(/ /g, '-')}`}
                                    className="block text-gray-900 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                {item.submenu && (
                                    <div className="mt-2 ml-4 space-y-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={`/areas/${subItem.toLowerCase().replace(/ /g, '-')}`}
                                                className="block text-gray-600 text-sm hover:text-yellow-600"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="mt-6">
                            <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                                Consulta Gratuita
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
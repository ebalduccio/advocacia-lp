import Link from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Clock
} from "lucide-react";

interface QuickLink {
    text: string;
    href: string;
}

interface PracticeArea {
    text: string;
    href: string;
}

const QUICK_LINKS: QuickLink[] = [
    { text: "Sobre Nós", href: "#" },
    { text: "Nossa Equipe", href: "#" },
    { text: "Carreiras", href: "#" },
    { text: "Notícias", href: "#" },
    { text: "Blog Jurídico", href: "#" },
];

const PRACTICE_AREAS: PracticeArea[] = [
    { text: "Direito Civil", href: "#" },
    { text: "Direito Empresarial", href: "#" },
    { text: "Direito Trabalhista", href: "#" },
    { text: "Direito Tributário", href: "#" },
    { text: "Direito Digital", href: "#" },
];

const OFFICE_HOURS = [
    { day: "Segunda - Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "09:00 - 13:00" },
];

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
            {/* Top Section */}
            <div className="border-b border-gray-700">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-wrap justify-between items-center gap-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Advocacia Elite</span>
                        </div>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center space-x-2 text-sm">
                                <Phone className="h-5 w-5 text-yellow-500" />
                                <span>(11) 1234-5678</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Mail className="h-5 w-5 text-yellow-500" />
                                <span>contato@escritorio.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <MapPin className="h-5 w-5 text-yellow-500" />
                                <span>Av. Paulista, 1000 - São Paulo, SP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Sobre o Escritório</h3>
                        <p className="mb-6">
                            Há mais de 30 anos oferecendo soluções jurídicas personalizadas
                            e resultados expressivos para nossos clientes.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-yellow-500 
                                    flex items-center justify-center transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-yellow-500 
                                    flex items-center justify-center transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-yellow-500 
                                    flex items-center justify-center transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-yellow-500 
                                    flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center hover:text-yellow-500 transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Áreas de Atuação</h4>
                        <ul className="space-y-3">
                            {PRACTICE_AREAS.map((area, index) => (
                                <li key={index}>
                                    <Link
                                        href={area.href}
                                        className="flex items-center hover:text-yellow-500 transition-colors"
                                    >
                                        <ChevronRight className="h-4 w-4 mr-2" />
                                        {area.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Office Hours */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Horário de Atendimento</h4>
                        <ul className="space-y-4">
                            {OFFICE_HOURS.map((schedule, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium text-white">{schedule.day}</p>
                                        <p className="text-sm">{schedule.hours}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                            <p className="text-sm">
                                <span className="text-yellow-500 font-semibold">Plantão 24h: </span>
                                Disponível para casos urgentes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Advocacia Elite. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="hover:text-yellow-500 transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="#" className="hover:text-yellow-500 transition-colors">
                                Termos de Uso
                            </Link>
                            <Link href="#" className="hover:text-yellow-500 transition-colors">
                                Mapa do Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
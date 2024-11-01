import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Linkedin,
    Mail,
    Award,
    BookOpen,
    Scale,
    GraduationCap,
    ChevronRight
} from 'lucide-react';
import Image from 'next/image';

interface Lawyer {
    id: number;
    name: string;
    role: string;
    image: string;
    specialties: string[];
    education: string[];
    awards: string[];
    oab: string;
    languages: string[];
    bio: string;
    social: {
        linkedin?: string;
        email: string;
    };
}

const LAWYERS: Lawyer[] = [
    {
        id: 1,
        name: "Dr. Ricardo Mendes",
        role: "Sócio Fundador",
        image: "/dr1.jpg",
        specialties: [
            "Direito Empresarial",
            "Fusões e Aquisições",
            "Contratos Internacionais"
        ],
        education: [
            "Doutor em Direito Comercial - USP",
            "Mestre em Direito Empresarial - Oxford",
            "Graduação em Direito - PUC-SP"
        ],
        awards: [
            "Advogado do Ano 2023 - Direito Empresarial",
            "Top 100 Advogados do Brasil"
        ],
        oab: "OAB/SP 123.456",
        languages: ["Português", "Inglês", "Espanhol"],
        bio: "Mais de 25 anos de experiência em direito empresarial, com especialização em fusões e aquisições internacionais.",
        social: {
            linkedin: "https://linkedin.com",
            email: "ricardo@escritorio.com"
        }
    },
    {
        id: 2,
        name: "Dra. Ana Paula Silva",
        role: "Sócia",
        image: "/dra.jpg",
        specialties: [
            "Direito Tributário",
            "Planejamento Fiscal",
            "Contencioso Tributário"
        ],
        education: [
            "Doutora em Direito Tributário - USP",
            "MBA em Gestão Tributária - FGV",
            "Graduação em Direito - USP"
        ],
        awards: [
            "Prêmio Inovação Jurídica 2023",
            "Destaque em Direito Tributário"
        ],
        oab: "OAB/SP 234.567",
        languages: ["Português", "Inglês", "Francês"],
        bio: "Especialista em estruturação tributária complexa e contencioso tributário de grande porte.",
        social: {
            linkedin: "https://linkedin.com",
            email: "ana@escritorio.com"
        }
    },
    {
        id: 3,
        name: "Dr. Carlos Eduardo",
        role: "Sócio",
        image: "/dr2.jpg",
        specialties: [
            "Direito Civil",
            "Direito Imobiliário",
            "Sucessões"
        ],
        education: [
            "Mestre em Direito Civil - USP",
            "Especialização em Direito Imobiliário - INSPER",
            "Graduação em Direito - Mackenzie"
        ],
        awards: [
            "Destaque em Direito Imobiliário 2023",
            "Top 50 Advogados Civilistas"
        ],
        oab: "OAB/SP 345.678",
        languages: ["Português", "Inglês", "Italiano"],
        bio: "Referência em casos complexos de direito civil e sucessório, com vasta experiência em operações imobiliárias.",
        social: {
            linkedin: "https://linkedin.com",
            email: "carlos@escritorio.com"
        }
    }
];

function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
    const [imageIsLoaded, setImageIsLoaded] = useState(false);

    return (
        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-yellow-500/10 rounded-full transform translate-x-16 -translate-y-16 z-0" />

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
                    <div className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300 ${imageIsLoaded ? 'opacity-0' : 'opacity-100'
                        }`} />
                    <Image
                        src={lawyer.image}
                        alt={lawyer.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${imageIsLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoadingComplete={() => setImageIsLoaded(true)}
                        priority={lawyer.id === 1}
                        quality={90}
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Name and Role on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{lawyer.name}</h3>
                        <p className="text-lg sm:text-xl text-yellow-500">{lawyer.role}</p>
                        <p className="text-xs sm:text-sm mt-1 sm:mt-2">{lawyer.oab}</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col min-h-[500px] lg:h-[600px]">
                    {/* Bio */}
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{lawyer.bio}</p>

                    {/* Specialties */}
                    <div className="mb-4 sm:mb-6">
                        <h4 className="flex items-center text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2" />
                            Áreas de Atuação
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {lawyer.specialties.map((specialty, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm"
                                >
                                    {specialty}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4 sm:mb-6">
                        <h4 className="flex items-center text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2" />
                            Formação
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {lawyer.education.map((edu, index) => (
                                <li key={index} className="flex items-start">
                                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-gray-600">{edu}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Awards */}
                    <div className="mb-4 sm:mb-6">
                        <h4 className="flex items-center text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2" />
                            Reconhecimentos
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {lawyer.awards.map((award, index) => (
                                <li key={index} className="flex items-start">
                                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-gray-600">{award}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className="mb-4 sm:mb-6">
                        <h4 className="flex items-center text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2" />
                            Idiomas
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {lawyer.languages.map((language, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm"
                                >
                                    {language}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mt-auto flex gap-2 sm:gap-4">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white flex-1 text-xs sm:text-sm py-2 h-8 sm:h-10">
                            Agendar Consulta
                        </Button>
                        <Button
                            variant="outline"
                            className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 h-8 sm:h-10 w-8 sm:w-10 p-0"
                            onClick={() => window.location.href = `mailto:${lawyer.social.email}`}
                        >
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 h-8 sm:h-10 w-8 sm:w-10 p-0"
                            onClick={() => window.open(lawyer.social.linkedin, '_blank')}
                        >
                            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TeamSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-block p-2 bg-yellow-50 rounded-lg mb-4">
                        <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Nossa Equipe</h2>
                    <p className="text-lg sm:text-xl text-gray-300">
                        Conheça os profissionais que fazem da Advocacia Elite referência
                        em excelência jurídica e resultados expressivos.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="space-y-8 sm:space-y-12">
                    {LAWYERS.map((lawyer) => (
                        <LawyerCard key={lawyer.id} lawyer={lawyer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
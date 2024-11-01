import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    Trophy,
    Users,
    Star,
    BookOpen,
    ArrowRight,
    ArrowLeft,
    Quote
} from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image: string;
    case: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Roberto Silva",
        role: "CEO",
        company: "Tech Solutions SA",
        content: "O comprometimento e profissionalismo da equipe foram fundamentais para o sucesso do nosso caso. Sua dedicação e conhecimento profundo do direito empresarial nos proporcionaram uma solução eficaz e rápida.",
        rating: 5,
        image: "/api/placeholder/80/80",
        case: "Reestruturação Societária"
    },
    {
        name: "Ana Martins",
        role: "Diretora Financeira",
        company: "Construtora Real",
        content: "A experiência e expertise demonstradas pela equipe foram excepcionais. Conseguiram resolver uma questão tributária complexa que outros escritórios consideravam praticamente impossível.",
        rating: 5,
        image: "/api/placeholder/80/80",
        case: "Planejamento Tributário"
    },
    {
        name: "Carlos Eduardo",
        role: "Proprietário",
        company: "Rede de Farmácias Saúde",
        content: "A abordagem estratégica e o atendimento personalizado fizeram toda a diferença. Resolveram nossa questão trabalhista de forma eficiente e com total transparência durante todo o processo.",
        rating: 5,
        image: "/api/placeholder/80/80",
        case: "Acordo Coletivo"
    }
];

const ACHIEVEMENTS = [
    {
        icon: Trophy,
        value: "30+",
        label: "Anos de Experiência",
        description: "Tradição e conhecimento a serviço dos nossos clientes"
    },
    {
        icon: Users,
        value: "5000+",
        label: "Clientes Satisfeitos",
        description: "Construindo relacionamentos duradouros baseados em resultados"
    },
    {
        icon: Star,
        value: "98%",
        label: "Taxa de Sucesso",
        description: "Comprometimento com a excelência e resultados positivos"
    },
    {
        icon: BookOpen,
        value: "15000+",
        label: "Casos Resolvidos",
        description: "Experiência comprovada em diversas áreas do direito"
    }
];

export default function WhyChooseUsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const nextTestimonial = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
            setFadeIn(true);
        }, 300);
    };

    const prevTestimonial = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
            setFadeIn(true);
        }, 300);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {ACHIEVEMENTS.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-yellow-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    <achievement.icon className="h-6 w-6 text-yellow-600" />
                                </div>
                                <span className="text-3xl font-bold text-white">
                                    {achievement.value}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {achievement.label}
                            </h3>
                            <p className="text-white">
                                {achievement.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Column - Content */}
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white">
                            <h2 className="text-3xl font-bold mb-6">
                                Por que Escolher Nosso Escritório?
                            </h2>
                            <p className="text-lg mb-8 text-yellow-100">
                                Combinamos experiência, dedicação e resultados comprovados para
                                oferecer o melhor serviço jurídico aos nossos clientes.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 border-2 border-yellow-300 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                                    </div>
                                    <span>Atendimento personalizado e dedicado</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 border-2 border-yellow-300 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                                    </div>
                                    <span>Equipe altamente especializada</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 border-2 border-yellow-300 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                                    </div>
                                    <span>Transparência e comunicação clara</span>
                                </li>
                            </ul>
                            <Button className="bg-white text-yellow-600 hover:bg-yellow-50">
                                Agende uma Consulta
                            </Button>
                        </div>

                        {/* Right Column - Testimonials */}
                        <div className="p-8 lg:p-12">
                            <div className="relative h-full flex flex-col justify-between">
                                <Quote className="h-12 w-12 text-yellow-200 mb-6" />

                                <div className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                                    <p className="text-gray-600 text-lg mb-6">
                                        {TESTIMONIALS[currentTestimonial].content}
                                    </p>

                                    <div className="flex items-center space-x-4 mb-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                {TESTIMONIALS[currentTestimonial].name}
                                            </h4>
                                            <p className="text-gray-600">
                                                {TESTIMONIALS[currentTestimonial].role} - {TESTIMONIALS[currentTestimonial].company}
                                            </p>
                                            <p className="text-sm text-yellow-600">
                                                Caso: {TESTIMONIALS[currentTestimonial].case}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-8">
                                    <div className="flex space-x-2">
                                        {TESTIMONIALS.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTestimonial(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-yellow-600 w-6' : 'bg-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={prevTestimonial}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        >
                                            <ArrowLeft className="h-5 w-5 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={nextTestimonial}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        >
                                            <ArrowRight className="h-5 w-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
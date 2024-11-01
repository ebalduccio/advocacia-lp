import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Scale, Building2, Users } from 'lucide-react';

interface PracticeArea {
    icon: React.ElementType;
    title: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
    details: Array<string>;
}

const PRACTICE_AREAS: PracticeArea[] = [
    {
        icon: Scale,
        title: "Direito Civil",
        description: "Especialização em casos complexos de direito civil, incluindo disputas contratuais e responsabilidade civil.",
        stats: [
            { value: "1500+", label: "Casos Resolvidos" },
            { value: "98%", label: "Taxa de Sucesso" },
        ],
        details: [
            "Contratos e Obrigações",
            "Responsabilidade Civil",
            "Direito do Consumidor",
            "Direito Imobiliário"
        ]
    },
    {
        icon: Building2,
        title: "Direito Empresarial",
        description: "Assessoria jurídica completa para empresas, desde startups até grandes corporações.",
        stats: [
            { value: "200+", label: "Empresas Atendidas" },
            { value: "25M+", label: "Economia Gerada" },
        ],
        details: [
            "Contratos Empresariais",
            "Fusões e Aquisições",
            "Recuperação Judicial",
            "Compliance"
        ]
    },
    {
        icon: Users,
        title: "Direito Trabalhista",
        description: "Proteção dos direitos trabalhistas e resolução de conflitos entre empregados e empregadores.",
        stats: [
            { value: "3000+", label: "Processos" },
            { value: "95%", label: "Acordos Favoráveis" },
        ],
        details: [
            "Reclamações Trabalhistas",
            "Acordos Coletivos",
            "Direitos Sindicais",
            "Compliance Trabalhista"
        ]
    },
];

function PracticeAreaCard({ area }: { area: PracticeArea }): JSX.Element {
    const Icon = area.icon;

    return (
        <div
            className="relative group bg-yellow-500 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
        >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-yellow-900 rounded-full opacity-20" />

            <div className="relative p-8">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-yellow-50 rounded-lg">
                        <Icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-white mb-6">
                    {area.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {area.stats.map((stat, index) => (
                        <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-yellow-600">{stat.value}</div>
                            <div className="text-sm text-yellow-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Details List */}
                <div className={`space-y-2 mb-6 transition-all duration-500`}>
                    {area.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-white">
                            <ArrowRight className="h-4 w-4 text-yellow-600 mr-2" />
                            <span>{detail}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <Button
                    className="w-full bg-white hover:bg-yellow-700 text-yellow-500"
                    variant="default"
                >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default function IssuesSection(): JSX.Element {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block p-2 bg-yellow-50 rounded-lg mb-4">
                        <Briefcase className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h2 className="text-4xl text-white font-bold mb-6">Áreas de Atuação</h2>
                    <p className="text-xl text-white">
                        Nosso escritório oferece soluções jurídicas especializadas em diversas áreas do direito,
                        sempre com excelência e compromisso com resultados.
                    </p>
                </div>

                {/* Practice Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRACTICE_AREAS.map((area, index) => (
                        <PracticeAreaCard key={index} area={area} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 cursor-pointer group">
                        <span className="text-lg font-medium">Ver todas as áreas de atuação</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    );
}
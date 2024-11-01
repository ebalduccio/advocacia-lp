import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Clock,
    ChevronRight,
    BookOpen,
    Search,
    Calendar
} from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: {
        name: string;
        role: string;
    };
    category: string;
    readTime: string;
    date: string;
    image: string;
    tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Mudanças na Lei Trabalhista: O que sua empresa precisa saber",
        excerpt: "As recentes alterações na legislação trabalhista trouxeram importantes impactos para empresas. Entenda as principais mudanças e como se adequar.",
        author: {
            name: "Dra. Maria Silva",
            role: "Especialista em Direito Trabalhista",
        },
        category: "Direito Trabalhista",
        readTime: "8 min",
        date: "28 Out 2024",
        image: "/blog1.webp",
        tags: ["Legislação", "Empresas", "Trabalho"]
    },
    {
        id: 2,
        title: "LGPD e Compliance: Guia Completo para Adequação",
        excerpt: "Um guia prático sobre como implementar as diretrizes da Lei Geral de Proteção de Dados e garantir a conformidade da sua empresa.",
        author: {
            name: "Dr. Carlos Mendes",
            role: "Especialista em Direito Digital",
        },
        category: "Direito Digital",
        readTime: "12 min",
        date: "25 Out 2024",
        image: "/blog2.webp",
        tags: ["LGPD", "Compliance", "Proteção de Dados"]
    },
    {
        id: 3,
        title: "Recuperação Judicial: Quando e Como Solicitar",
        excerpt: "Entenda os requisitos, procedimentos e benefícios da recuperação judicial para empresas em dificuldades financeiras.",
        author: {
            name: "Dr. Roberto Santos",
            role: "Especialista em Direito Empresarial",
        },
        category: "Direito Empresarial",
        readTime: "10 min",
        date: "22 Out 2024",
        image: "/blog3.webp",
        tags: ["Empresarial", "Finanças", "Recuperação"]
    }
];

const CATEGORIES = [
    "Todos",
    "Direito Trabalhista",
    "Direito Digital",
    "Direito Empresarial",
    "Direito Tributário"
];

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={post.id === 1} // Prioriza o carregamento da primeira imagem
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-yellow-600 transition-colors">
                    {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full hover:bg-yellow-50 transition-colors"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-3">
                        <div>
                            <h4 className="font-medium text-gray-900">{post.author.name}</h4>
                            <p className="text-sm text-gray-500">{post.author.role}</p>
                        </div>
                    </div>
                    <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700">
                        Ler mais
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default function BlogSection() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block p-2 bg-yellow-50 rounded-lg mb-4">
                        <BookOpen className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-white">Blog Jurídico</h2>
                    <p className="text-xl text-gray-300">
                        Mantenha-se atualizado com as últimas novidades do mundo jurídico,
                        análises aprofundadas e orientações práticas.
                    </p>
                </div>

                <div className="mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category
                                        ? 'bg-yellow-500 text-white'
                                        : 'bg-white text-gray-600 hover:bg-yellow-50'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Buscar artigos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="text-center">
                    <Button className="text-yellow-500 hover:bg-yellow-500/10">
                        Ver Todos os Artigos
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-24 max-w-4xl mx-auto bg-yellow-500 rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Receba Atualizações Jurídicas
                            </h3>
                            <p className="text-yellow-50">
                                Inscreva-se em nossa newsletter para receber as últimas
                                atualizações e artigos diretamente em seu e-mail.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    className="flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                />
                                <Button className="bg-white text-yellow-600 hover:bg-yellow-50">
                                    Inscrever
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
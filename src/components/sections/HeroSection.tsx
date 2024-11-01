'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Scale, Shield, BookOpen } from 'lucide-react';

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            url: "/image2.jpg",
            title: "Excelência Jurídica",
            subtitle: "Defendendo seus direitos com dedicação e compromisso"
        },
        {
            url: "/image1.jpg",
            title: "Experiência Comprovada",
            subtitle: "Mais de 20 anos de casos bem-sucedidos"
        },
        {
            url: "/image3.jpg",
            title: "Atendimento Personalizado",
            subtitle: "Seu caso recebe a atenção que merece"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // const features = [
    //     { icon: Scale, text: "Justiça" },
    //     { icon: Shield, text: "Proteção" },
    //     { icon: BookOpen, text: "Conhecimento" }
    // ];

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Slider */}
            <div className="absolute inset-0 transition-opacity duration-1000">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image.url})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl space-y-6">
                        {/* Tagline */}
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-12 bg-yellow-600" />
                            <span className="text-yellow-400 uppercase tracking-wider text-sm font-semibold">
                                Escritório de Advocacia
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            {images[currentImage].title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-300">
                            {images[currentImage].subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-lg group">
                                Consulta Gratuita
                                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button className="text-white hover:bg-white hover:text-black px-8 py-6 text-lg transition-colors">
                                Conheça o Escritório
                            </Button>
                        </div>

                        {/* Features */}
                        {/* <div className="grid grid-cols-3 gap-6 pt-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center space-y-2">
                                    <feature.icon className="h-8 w-8 text-yellow-400" />
                                    <span className="text-white font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2 rounded-full transition-all ${currentImage === index ? 'w-8 bg-yellow-600' : 'w-2 bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
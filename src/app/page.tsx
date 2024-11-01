'use client'
import { ScrollToTop } from "@/components/ScrollToTop"
import HeroSection from "@/components/sections/HeroSection"
import Header from "@/components/layout/Header"
import IssuesSection from "@/components/sections/IssuesSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import BlogSection from "@/components/sections/BlogSection"
import Footer from "@/components/layout/Footer"
import TeamSection from "@/components/sections/TeamSection"

export default function AdvocacyPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main>
        <HeroSection />
        <IssuesSection />
        <TeamSection />
        <BlogSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
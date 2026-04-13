import React from 'react'
import { Hero } from '../../components/Hero'
import { AboutSection } from '../../components/AboutSection'

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <AboutSection />
        </div>
    )
}

export default Home
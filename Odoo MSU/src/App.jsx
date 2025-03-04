import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CommunitySavings from './components/CommunitySavings'
import PersonalSavings from './components/PersonalSavings'
import JoinCommunity from './components/JoinCommunity'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderPage = () => {
    switch(currentPage) {
      case 'join':
        return <JoinCommunity />
      case 'about':
        return <AboutUs />
      default:
        return (
          <>
            <Hero />
            <CommunitySavings />
            <PersonalSavings />
          </>
        )
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar 
        scrollY={scrollY} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
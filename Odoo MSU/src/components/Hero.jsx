import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  const heroRef = useRef(null)
  
  useEffect(() => {
    // Create animated circles
    const createCircles = () => {
      const hero = heroRef.current
      if (!hero) return
      
      // Clear existing circles
      const existingCircles = hero.querySelectorAll('.circle')
      existingCircles.forEach(circle => circle.remove())
      
      // Create new circles
      for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div')
        circle.classList.add('circle')
        
        // Random size between 100px and 300px
        const size = Math.random() * 200 + 100
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        
        // Random position
        circle.style.left = `${Math.random() * 100}%`
        circle.style.top = `${Math.random() * 100}%`
        
        // Random color (blue or green with varying opacity)
        const colors = ['#2E86AB', '#4CAF50']
        const color = colors[Math.floor(Math.random() * colors.length)]
        circle.style.backgroundColor = color
        circle.style.opacity = (Math.random() * 0.3 + 0.1).toString()
        
        // Random animation delay
        circle.style.animationDelay = `${Math.random() * 4}s`
        
        hero.appendChild(circle)
      }
    }
    
    createCircles()
    
    // Recreate circles on window resize
    window.addEventListener('resize', createCircles)
    
    return () => {
      window.removeEventListener('resize', createCircles)
    }
  }, [])
  
  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      <div className="absolute inset-0 z-0">
        {/* Animated background handled by useEffect */}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thrive Together
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Grow Financially, Support Collectively
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="community"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="cta-button bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                Join Community
              </button>
            </Link>
            
            <Link
              to="personal"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="cta-button bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-full shadow-lg">
                Start Saving
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F5F5F5" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
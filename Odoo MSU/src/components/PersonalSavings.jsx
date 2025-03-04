import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const PersonalSavings = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(85)
      }, 500)
      
      return () => clearTimeout(timer)
    } else {
      setProgress(0)
    }
  }, [isInView])
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  const benefits = [
    {
      icon: "🔒",
      title: "Secure Savings",
      description: "Keep your personal funds secure while still being part of the community."
    },
    {
      icon: "🎯",
      title: "Goal-Based Saving",
      description: "Set personal financial goals and track your progress over time."
    },
    {
      icon: "🌱",
      title: "Growth Opportunities",
      description: "Access exclusive investment opportunities through community connections."
    }
  ]
  
  return (
    <section id="personal" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="md:w-1/2"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Personal Savings: Your Individual Safety Net
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8"
              >
                Save money separately while benefiting from community features. Build your financial future with flexibility and security.
              </motion.p>
              
              <motion.div variants={itemVariants} className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-8"
              >
                <button className="cta-button bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                  Start Saving
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-64 h-80">
                {/* Piggy Bank */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#FF6F61">
                      <ellipse cx="100" cy="140" rx="80" ry="60" />
                      <circle cx="150" cy="100" r="20" />
                      <circle cx="50" cy="100" r="20" />
                      <rect x="80" y="40" width="40" height="30" rx="10" />
                      <rect x="95" y="200" width="10" height="30" />
                      <rect x="75" y="200" width="10" height="20" />
                      <rect x="115" y="200" width="10" height="20" />
                    </g>
                    <circle cx="150" cy="100" r="5" fill="black" />
                    <circle cx="50" cy="100" r="5" fill="black" />
                    <rect x="70" y="70" width="60" height="5" rx="2" fill="#4CAF50" />
                  </svg>
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4">
                  <div className="h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      className="h-full bg-secondary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                  <div className="mt-2 text-center text-gray-700 font-medium">
                    {progress}% of Goal
                  </div>
                </div>
                
                {/* Coins Animation */}
                {isInView && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-500 shadow-md"
                        initial={{ 
                          top: "0%", 
                          left: `${20 + i * 15}%`,
                          opacity: 0 
                        }}
                        animate={{ 
                          top: ["0%", "50%", "70%"],
                          opacity: [0, 1, 1],
                          scale: [0.5, 1, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.3,
                          times: [0, 0.6, 1]
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalSavings
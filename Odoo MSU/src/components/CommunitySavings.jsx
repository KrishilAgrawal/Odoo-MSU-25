import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const CommunitySavings = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
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
  
  const features = [
    {
      icon: "👥",
      title: "Group Contributions",
      description: "Pool funds with your community members to create a larger financial safety net."
    },
    {
      icon: "📈",
      title: "Collective Interest",
      description: "Earn higher interest rates through the power of combined savings."
    },
    {
      icon: "🛡️",
      title: "Emergency Support",
      description: "Access financial help when you need it most, backed by your community."
    }
  ]
  
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Community Savings: Together We Thrive
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Join groups, pool funds, and earn interest. Access financial support in emergencies based on your membership duration.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <button className="cta-button bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg">
              Join a Community
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-20 relative">
        <div className="wave-divider"></div>
      </div>
    </section>
  )
}

export default CommunitySavings
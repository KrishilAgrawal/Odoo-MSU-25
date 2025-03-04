import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const JoinCommunity = () => {
  const createRef = useRef(null)
  const joinRef = useRef(null)
  const reviewsRef = useRef(null)
  const faqRef = useRef(null)
  
  const isCreateInView = useInView(createRef, { once: false, amount: 0.3 })
  const isJoinInView = useInView(joinRef, { once: false, amount: 0.3 })
  const isReviewsInView = useInView(reviewsRef, { once: false, amount: 0.3 })
  const isFaqInView = useInView(faqRef, { once: false, amount: 0.3 })
  
  const [currentReview, setCurrentReview] = useState(0)
  
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
  
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: { 
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }
  
  const communities = [
    {
      name: "Health Warriors",
      members: 1245,
      category: "Chronic Illness",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Financial Freedom",
      members: 3782,
      category: "Savings Group",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Young Investors",
      members: 892,
      category: "Investment Club",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Family Support",
      members: 1567,
      category: "Family Finance",
      image: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ]
  
  const reviews = [
    {
      text: "Thrive Together helped me build a financial safety net while connecting with others who understand my health journey.",
      author: "Sarah Johnson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "I've been able to save more in 6 months with my community than I did in 2 years on my own. The support is incredible!",
      author: "Michael Chen",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "The platform is intuitive and the community features make saving money actually enjoyable. Highly recommend!",
      author: "Priya Patel",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]
  
  const faqs = [
    {
      question: "How do community savings work?",
      answer: "Community savings allow members to pool funds together, earning collective interest and providing emergency support to members in need based on contribution history and membership duration."
    },
    {
      question: "Can I create multiple communities?",
      answer: "Yes, you can create or join multiple communities based on your interests, financial goals, or health conditions."
    },
    {
      question: "How is my money protected?",
      answer: "All funds are held in FDIC-insured accounts, and our platform uses bank-level encryption to protect your financial information."
    }
  ]
  
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }
  
  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }
  
  return (
    <div className="pt-16">
      {/* Create Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                ref={createRef}
                variants={containerVariants}
                initial="hidden"
                animate={isCreateInView ? "visible" : "hidden"}
                className="md:w-1/2"
              >
                <motion.h2 
                  variants={itemVariants} 
                  className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                  Create Your Own Community
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-8"
                >
                  Start a community tailored to your interests or health needs. Set joining criteria, define contribution limits, and grow together.
                </motion.p>
                
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🌱</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Define Your Purpose</h3>
                      <p className="text-gray-600">Create a community with a clear mission and goals that resonate with others.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">⚙️</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Set Your Terms</h3>
                      <p className="text-gray-600">Customize contribution amounts, withdrawal rules, and membership requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🚀</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Grow Together</h3>
                      <p className="text-gray-600">Invite members and watch your community thrive with collective support.</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-8"
                >
                  <button className="cta-button bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                    Create Now
                  </button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 flex justify-center relative"
                initial={{ opacity: 0 }}
                animate={isCreateInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-80 h-80">
                  {/* People Group Illustration */}
                  <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    {/* Center Person */}
                    <circle cx="100" cy="80" r="20" fill="#2E86AB" />
                    <circle cx="100" cy="60" r="10" fill="#2E86AB" />
                    <rect x="85" y="100" width="30" height="40" rx="10" fill="#2E86AB" />
                    
                    {/* Left Person */}
                    <circle cx="60" cy="90" r="15" fill="#4CAF50" />
                    <circle cx="60" cy="75" r="8" fill="#4CAF50" />
                    <rect x="50" y="105" width="20" height="30" rx="8" fill="#4CAF50" />
                    
                    {/* Right Person */}
                    <circle cx="140" cy="90" r="15" fill="#FF6F61" />
                    <circle cx="140" cy="75" r="8" fill="#FF6F61" />
                    <rect x="130" y="105" width="20" height="30" rx="8" fill="#FF6F61" />
                    
                    {/* Bottom Person */}
                    <circle cx="100" cy="140" r="15" fill="#FFD166" />
                    <circle cx="100" cy="125" r="8" fill="#FFD166" />
                    <rect x="90" y="155" width="20" height="30" rx="8" fill="#FFD166" />
                  </svg>
                  
                  {/* Animated Circle */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary z-0"
                    style={{ width: '90%', height: '90%' }}
                    variants={circleVariants}
                    initial="hidden"
                    animate={isCreateInView ? "visible" : "hidden"}
                  />
                  
                  {/* Pulsing Circles */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    {isCreateInView && (
                      <>
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                          initial={{ width: '0%', height: '0%', opacity: 0.5 }}
                          animate={{ 
                            width: ['0%', '90%', '100%'], 
                            height: ['0%', '90%', '100%'], 
                            opacity: [0.5, 0.2, 0] 
                          }}
                          transition={{ 
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                          initial={{ width: '0%', height: '0%', opacity: 0.5 }}
                          animate={{ 
                            width: ['0%', '90%', '100%'], 
                            height: ['0%', '90%', '100%'], 
                            opacity: [0.5, 0.2, 0] 
                          }}
                          transition={{ 
                            duration: 2.5,
                            delay: 0.8,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Community Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              ref={joinRef}
              variants={containerVariants}
              initial="hidden"
              animate={isJoinInView ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Join an Existing Community
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Browse and join communities that match your interests or health conditions. Collaborate, save, and thrive together.
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communities.map((community, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={community.image} 
                      alt={community.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{community.name}</h3>
                      <span className="bg-primary bg-opacity-10 text-primary text-xs px-2 py-1 rounded-full">
                        {community.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{community.members.toLocaleString()} members</p>
                    <button className="w-full cta-button bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md">
                      Join Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <button className="cta-button bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                Explore All Communities
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              ref={reviewsRef}
              variants={containerVariants}
              initial="hidden"
              animate={isReviewsInView ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-bold text-primary mb-4"
              >
                What Our Members Say
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Hear from people who are already thriving together in our communities.
              </motion.p>
            </motion.div>
            
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  initial={{ opacity: 1 }}
                  animate={{ x: `-${currentReview * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="min-w-full px-4">
                      <div className="bg-background rounded-lg p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                          <div className="flex-shrink-0">
                            <img 
                              src={review.image} 
                              alt={review.author} 
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-600 text-lg italic mb-4">"{review.text}"</p>
                            <p className="font-bold text-gray-800">{review.author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              <button 
                onClick={prevReview}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-primary hover:text-accent focus:outline-none md:-translate-x-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextReview}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-primary hover:text-accent focus:outline-none md:translate-x-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="flex justify-center mt-8 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full ${currentReview === index ? 'bg-primary' : 'bg-gray-300'}`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              ref={faqRef}
              variants={containerVariants}
              initial="hidden"
              animate={isFaqInView ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl font-bold text-accent mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Get answers to common questions about our communities.
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <a href="#" className="text-primary hover:text-accent font-semibold flex items-center justify-center">
                View All FAQs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
              <p className="text-white text-opacity-90 text-lg">Discover how our communities are making a difference.</p>
            </div>
            <button className="cta-button bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg">
              Read Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinCommunity
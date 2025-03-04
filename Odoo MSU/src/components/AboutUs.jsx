import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUs = () => {
  // Refs for scroll-triggered animations
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);

  // Check if sections are in view
  const isMissionInView = useInView(missionRef, { once: false, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: false, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: false, amount: 0.3 });
  const isStoryInView = useInView(storyRef, { once: false, amount: 0.3 });

  // Animation variants for containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Team members data
  const teamMembers = [
    {
      name: 'Emma Rodriguez',
      role: 'Founder & CEO',
      bio: 'Former financial advisor with a passion for community-driven solutions.',
      image: 'https://randomuser.me/api/portraits/women/23.jpg',
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator with 15+ years experience in fintech and healthcare.',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
    {
      name: 'Aisha Johnson',
      role: 'Community Director',
      bio: 'Community organizer who has built support networks for over a decade.',
      image: 'https://randomuser.me/api/portraits/women/17.jpg',
    },
    {
      name: 'Marcus Williams',
      role: 'Financial Wellness Lead',
      bio: 'Certified financial planner specializing in community economics.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  // Core values data
  const values = [
    {
      icon: '🤝',
      title: 'Community First',
      description: 'We believe in the power of communities to support each other financially and emotionally.',
    },
    {
      icon: '🔒',
      title: 'Trust & Security',
      description: 'Your financial security and data privacy are our top priorities.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Growth',
      description: 'We focus on long-term financial wellness, not quick fixes.',
    },
    {
      icon: '🌍',
      title: 'Inclusive Support',
      description: 'Our platform is designed to be accessible and beneficial for everyone.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Thrive Together
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building a world where financial wellness and community support go hand in hand.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F5F5F5" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                ref={missionRef}
                variants={containerVariants}
                initial="hidden"
                animate={isMissionInView ? 'visible' : 'hidden'}
                className="md:w-1/2"
              >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
                  Our Mission
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
                  At Thrive Together, we're on a mission to revolutionize how people save, support each other, and build financial resilience through the power of community.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-gray-600">
                  We believe that financial wellness shouldn't be a solitary journey. By combining traditional saving methods with community support networks, we create a platform where everyone can thrive together.
                </motion.p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full opacity-20"></div>
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="People supporting each other"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={teamRef}
              variants={containerVariants}
              initial="hidden"
              animate={isTeamInView ? 'visible' : 'hidden'}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
                Meet Our Team
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
                The passionate individuals behind Thrive Together, dedicated to building a platform that empowers communities.
              </motion.p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={valuesRef}
              variants={containerVariants}
              initial="hidden"
              animate={isValuesInView ? 'visible' : 'hidden'}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
                Our Values
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
                The core principles that guide everything we do at Thrive Together.
              </motion.p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <motion.div
                ref={storyRef}
                variants={containerVariants}
                initial="hidden"
                animate={isStoryInView ? 'visible' : 'hidden'}
                className="md:w-1/2"
              >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
                  Our Story
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
                  Thrive Together was born from a simple observation: financial challenges are easier to overcome when faced together. Our founder, Emma Rodriguez, experienced this firsthand when her community rallied to support her during a health crisis.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
                  Inspired by traditional community savings circles and modern financial technology, Emma assembled a team of experts to create a platform that makes community-based financial support accessible to everyone.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-gray-600">
                  Since our launch in 2023, we've helped thousands of people build financial resilience while fostering meaningful connections within their communities.
                </motion.p>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-96 border-l-4 border-blue-500 border-opacity-30 ml-6 pl-8">
                  {isStoryInView && (
                    <>
                      <motion.div
                        className="absolute left-0 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ top: '0%' }}
                      >
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <div className="ml-8 -mt-3">
                          <p className="font-bold text-blue-500">2022</p>
                          <p className="text-gray-600">The idea is born</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute left-0 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ top: '33%' }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        <div className="ml-8 -mt-3">
                          <p className="font-bold text-green-500">2023</p>
                          <p className="text-gray-600">Platform launch</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute left-0 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        style={{ top: '66%' }}
                      >
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <div className="ml-8 -mt-3">
                          <p className="font-bold text-blue-500">2024</p>
                          <p className="text-gray-600">10,000 members</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute left-0 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        style={{ top: '100%' }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        <div className="ml-8 -mt-3">
                          <p className="font-bold text-green-500">2025</p>
                          <p className="text-gray-600">The future is bright</p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Join Our Mission</h2>
              <p className="text-white text-opacity-90 text-lg">Become part of a community that thrives together.</p>
            </div>
            <button className="cta-button bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
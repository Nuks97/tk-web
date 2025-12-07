/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'; // Main landing with sections
import ContactPage from './pages/ContactPage.js'; // Your standalone contact component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
export default App;

*/

import React, { useState, useEffect } from 'react';
import { Business, LocalShipping, Verified, Speed, Group, EmojiEvents, Security, Build, Category, DesignServices, Phone, Email, LocationOn, ContactSupport, Chat, Copyright, BusinessCenter } from '@mui/icons-material';
import logo from "../src/image/logo.png";
import HeroImage from "../src/image/blue.png"; // Adjust the path as necessary
import saps from "./Slides/SAPS.jpg"; // Adjust the path as necessary
import dhet from './Slides/HigherE.png'; // Adjust the path as necessary
import raf from './Slides/RAF.png'; // Adjust the path as necessary
import ccma from './Slides/ccma.jpg'; // Adjust the path as necessary
import doj from './Slides/DOJ.png'; // Adjust the path as necessary
import amscor from './Slides/amscor.png'; // Adjust the path as necessary
import eastern from './Slides/EASTERNCAPE.png'; // Adjust the path as necessary
import higherE from './Slides/HigherE.png'; // Adjust the path as necessary
import gautengp from './Slides/GautengP.png'; // Adjust the path as necessary
import ipid from './Slides/ipid.png'; // Adjust the path as necessary
import watersam from './Slides/WATERSAN.png'; // Adjust the path as necessary
import SAND from './Slides/SAND.png'; // Adjust the path as necessary
import IEC from './Slides/IEC.webp'; // Adjust the path as necessary
import correction from './Slides/CorrectionalS.png'; // Adjust the path as necessary
import Cooperative from './Slides/Cooperative.png'; // Adjust the path as necessary
import employment from './Slides/Employment.png'; // Adjust the path as necessary
import BankSETA from './Slides/BankSETA.png'; // Adjust the path as necessary
import women from './Slides/womenY.png'; // Adjust the path as necessary
import arc from './Slides/arc.jpg'; // Adjust the path as necessary
import Northwest from './Slides/Northwest.jpg'; // Adjust the path as necessary
import agric from './Slides/Agric.png'; // Adjust the path as necessary
import national from './Slides/National.png'; // Adjust the path as necessary
import homeA from './Slides/HomeA.png'; // Adjust the path as necessary

import Thulamela from './Slides/THULAMELA-MUNICIPALITY.png'; // Adjust the path as necessary
import axios from "axios";

import reno from './Slides/reno.jpg'; // Adjust the path as necessary
import dsc from './Slides/dsc-product.webp'; 
import {  useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { 
   Flag, Grade,  Handshake,  
 Engineering, Construction, CleaningServices, Event,
  
} from '@mui/icons-material';


// Logo placeholder - replace with your actual logo import

const colors = {
  primary: '#FF6B35',
  secondary: '#F7931E',
  //accent: '#4ECDC4',
  light: '#ffffff',
  text: '#2c3e50',
  lightText: '#666'
};

const sections = [
  { 
    id: 'home', 
    label: 'Home',
    icon: <Business sx={{ fontSize: 40, color: colors.primary }} />
  },
  { 
    id: 'about', 
    label: 'About Us',
    icon: <Business sx={{ fontSize: 40, color: colors.primary }} />,
    content: `Takalani TR (PTY) Ltd is a Level 1 BBBEE Black Owned South African Private Company established in 2017. We specialize in supply, delivery, and maintenance services, committed to excellence and customer satisfaction.`
  },
  { 
    id: 'values', 
    label: 'Values',
    icon: <Verified sx={{ fontSize: 40, color: colors.primary }} />,
    items: [
      { 
        icon: '🎯', 
        title: 'Excellence', 
        description: 'Delivering superior quality in everything we do' 
      },
      { 
        icon: '🤝', 
        title: 'Integrity', 
        description: 'Maintaining the highest ethical standards' 
      },
      { 
        icon: '⚡', 
        title: 'Efficiency', 
        description: 'Optimizing processes for best results' 
      },
    
  
      // --- NEW ITEMS (added because they were not in the first array) ---
      { 
        icon: '🔥', 
        title: 'Commitment', 
        description: 'Dedicated to fulfilling our promises and obligations with unwavering resolve.' 
      },
      { 
        icon: '👥', 
        title: 'Customer Value', 
        description: 'Creating exceptional experiences and meaningful solutions for our clients.' 
      },
      { 
        icon: '🧑‍💼', 
        title: 'Professionalism', 
        description: 'Maintaining the highest standards of expertise, ethics, and excellence.' 
      },
      { 
        icon: '🏆', 
        title: 'Quality', 
        description: 'Delivering products and services that meet the highest standards.' 
      },
      { 
        icon: '🔄', 
        title: 'Flexibility', 
        description: 'Adapting to changing circumstances to meet client needs effectively.' 
      },
     
    ]
  },
  { 
    id: 'services', 
    label: 'Our Services',
    icon: <Build sx={{ fontSize: 40, color: colors.primary }} />,
    categories: [
      {
        title: 'Logistics & Supply',
        icon: <LocalShipping />,
        items: [
          'Consumable Goods (Grocery and Food Delivery Services)',
          'Personal Protective Equipment (PPE)',
          'Office Furniture and Stationary',
          'Transportation Services',
          'Bricks and Sands Supply',
          'Chemical Products Distribution'
        ]
      },
      {
        title: 'Engineering Services',
        icon: <Engineering />,
        items: [
          'System Design, Installation & Maintenance',
          'Research and Development',
          'Project Management',
          'IT Solutions (Computers, Software, Networking)',
          'Hardware Repair and Maintenance'
        ]
      },
      {
        title: 'Construction Services',
        icon: <Construction />,
        items: [
          'Building and Roofing',
          'Electrical, Plumbing and Painting',
          'Road Construction Signage',
          'Civil Engineering Projects',
          'Paving and Plastering'
        ]
      },
      {
        title: 'Maintenance Services',
        icon: <CleaningServices />,
        items: [
          'Building Maintenance and Renovations',
          'Industrial and Office Cleaning',
          'Laundry Services',
          'Carpentry and Woodwork',
          'Gardening and Plant Maintenance',
          'HVAC Systems'
        ]
      },
      {
        title: 'Specialized Services',
        icon: <Event />,
        items: [
          'Office Furniture Installation',
          'Catering for Events',
          'Conference Facilities Management',
          'Shuttle and Transport Services',
          'Travel and Tourism Arrangements',
          'Professional Training Programs'
        ]
      }
    ]
  },
  { 
    id: 'projects', 
    label: 'Projects',
    icon: <EmojiEvents sx={{ fontSize: 40, color: colors.primary }} />,
    projects: [
      { title: 'Corporate Office Setup', description: 'Complete office equipment supply for Fortune 500 company', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500' },
      { title: 'Healthcare Facility', description: 'Medical equipment delivery and installation', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500' },
    
      { title: 'Government Department', description: 'Complete office relocation service', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500' }
    ]
  },
  { 
    id: 'testimonials', 
    label: 'Testimonials',
    icon: <Group sx={{ fontSize: 40, color: colors.primary }} />,
    testimonials: [
      { name: 'James Khumalo', company: 'IT Director, SAPS', text: 'Takalani TR delivered our IT upgrade project ahead of schedule with exceptional quality. Their team was professional and responsive throughout the entire process.', rating: 5 },
      { name: 'Sarah Ndlovu', company: 'Facilities Manager, GP Health', text: 'The construction work done on our facilities exceeded our expectations. They handled all challenges efficiently and delivered a flawless result.', rating: 5 },
      { name: 'David Smith', company: 'Operations Manager, DCS', text: 'Their maintenance team provides excellent ongoing support. Quick response times and thorough work every time. Highly recommended!', rating: 4 }
    ]
  },

  { 
    id: 'clients', 
    label: 'Our Clients',
    icon: <Group sx={{ fontSize: 40, color: colors.primary }} />,
    clients: [
      { name: "SAPS", logo: saps},
      { name: "DHET", logo: dhet },
      
      { name: "RAF", logo: raf },
      { name: "GPHEALTH", logo: gautengp },
      { name: "DoJ & CD", logo: doj},
  
      { name: "CCMA", logo: ccma },
      { name: "DWYPD", logo: women},
      { name: "DOH", logo: homeA },
      { name: "DWS", logo: watersam },
      { name: "SANDF", logo: SAND },
      { name: "DCGTA", logo: Cooperative },
      { name: "BANK SETA", logo: BankSETA },
      { name: "IPID", logo: ipid  },
      { name: "DOCS", logo: correction  },
      { name: "IEC", logo: IEC  },
      { name: "NWDoE", logo: Northwest},
      { name: "ARC•LNR", logo: agric },
      { name: "ARMSCOR", logo: amscor },
      { name: "SANParks", logo: national },
      { name: "Thulamela Municipality", logo: Thulamela },
      { name: "Eastern Cape Provincial Treasury", logo: eastern }
    ]
  },
  { 
    id: 'partnerships', 
    label: 'Partnerships',
    icon: <Security sx={{ fontSize: 40, color: colors.primary }} />,
    content: 'We collaborate with industry leaders to deliver comprehensive solutions.',
    partners: [
      { name: 'Premier Conferencing Training', url: 'http://www.premierconferencing.co.za' },
      { name: 'Prepaid24', url: 'https://www.prepaid24.co.za' },

    ]
  },

  { 
    id: 'guarantees', 
    label: 'Contact Us',
    icon: <Chat sx={{ fontSize: 40, color: colors.primary }} />,
    content: 'Contact us for professional supply, delivery, and maintenance solutions.'
  },
 
];

// Navbar Component
const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sectionIds = sections.map(s => s.id);
      for (let id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: !isMobile 
        ? (scrolled ? '#E8E8E8' : 'transparent')
        : '#E8E8E8',
      backdropFilter: scrolled && !isMobile ? 'blur(10px)' : 'none',
      boxShadow: (scrolled && !isMobile) || isMobile ? '0 2px 10px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: scrolled && !isMobile ? '0.5rem 0' : '1rem 0',
    }}>
      <div style={{
         maxWidth: '1400px',
         margin: '0 auto',
         padding: '0 1rem',
         display: 'flex',
         justifyContent: 'space-between',   // <-- FIX ALIGNMENT
         alignItems: 'center',
         flexDirection: isMobile ? 'row' : 'column',  // Desktop keeps your stacked layout
         width: '90%',
      }}>
        {/* Logo */}
        <div
          style={{ 
            marginBottom: isMobile ? '0.2rem' : '0.8rem',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => scrollToSection('home')}
        >
          <img 
            src={logo}
            alt="Takalani TR" 
            style={{
              height: isMobile ? '80px' : (scrolled ? '90px' : '110px'),
              width: 'auto',
              transition: 'all 0.4s ease',
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div style={{ 
          display: !isMobile ? 'flex' : 'none',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                color: activeSection === section.id ? colors.primary : (scrolled ? colors.text : '#fff'),
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: activeSection === section.id ? 700 : 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === section.id ? `3px solid ${colors.primary}` : 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.primary;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = activeSection === section.id ? colors.primary : (scrolled ? colors.text : '#fff');
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: colors.primary,
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <div style={{
          background: '#6fbadc',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                color: activeSection === section.id ? colors.primary : colors.text,
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: activeSection === section.id ? 700 : 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
                borderBottom: activeSection === section.id ? `1px solid ${colors.light}`: 'None',  width: '120px', 


              }}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <div
      id={id}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => (
  <div style={{
    background: 'F5F5F5',
    padding: '2rem',
  
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
   
    textAlign: 'center',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  }}>
    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
    <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'black' }}>{title}</h4>
    <p style={{ color: colors.lightText, lineHeight: 1.6 }}>{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div style={{
    background: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  }}>
    <div style={{ fontSize: '2rem', color: '#6fbadc', marginBottom: '1rem' }}>❝</div>
    <p style={{ fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.6 }}>{testimonial.text}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h5 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{testimonial.name}</h5>
        <p style={{ fontSize: '0.9rem', color: colors.lightText }}>{testimonial.company}</p>
      </div>
      <div style={{ color: '#ffd700' }}>{'⭐'.repeat(testimonial.rating)}</div>
    </div>
  </div>
);

const ClientCard = ({ client, colors }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Box sx={{
      backgroundColor: 'E5E4E2',
      borderRadius: '8px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.22)',
      height: '140px',
      width: '180px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `#FF6B35`
      },
      flexShrink: 0
    }}>
      {client.logo && !imageError ? (
        <Box sx={{
          width: 150,
          height: 100,
          mb: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={client.logo} 
            alt={client.name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        </Box>
      ) : (
        <Box sx={{
          width: 60,
          height: 60,
          backgroundColor: `black`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1
        }}>
          <Business sx={{ fontSize: 30, color: colors.primary }} />
        </Box>
      )}
      <Typography variant="body1" sx={{ 
        fontWeight: 600, 
        textAlign: 'center',
        color: 'fff',
        fontSize: '0.9rem',
        lineHeight: 1.2,
        mt: client.logo ? 1 : 0
      }}>
        {client.name}
      </Typography>
    </Box>
  );
};

const ClientsSlider = ({ clients, colors }) => {
  const sliderRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  const cardWidth = 100; // width of each card
  const gap = 0; // gap between cards
  const speed = 0.5; // pixels per frame for auto-scroll

  // Auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalScrollWidth = slider.scrollWidth / 2;

    let animationFrame;

    const animate = () => {
      setScroll(prev => (prev + speed >= totalScrollWidth ? 0 : prev + speed));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Manual left/right control
  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = cardWidth + gap;
    if (direction === 'left') {
      setScroll(prev => (prev - step < 0 ? slider.scrollWidth / 2 : prev - step));
    } else {
      setScroll(prev => (prev + step >= slider.scrollWidth / 2 ? 0 : prev + step));
    }
  };

  return (
    <Box sx={{ 
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      padding: '2rem 0',
     
      background: 'F5F5F5'
    }}>
      {/* Left Arrow */}
      <IconButton
        onClick={() => handleScroll('right')}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 1000,
          backgroundColor: '#6fbadc',
          color: '#fff',
          '&:hover': { backgroundColor: 'rgba(255,107,53,1)' },
          borderRadius: '50%',
          width: 45,
          height: 45,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={() => handleScroll('left')}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 1000,
          backgroundColor: '#6fbadc',
          color: '#fff',
          '&:hover': { backgroundColor: 'rgba(255,107,53,1)' },
          borderRadius: '50%',
          width: 45,
          height: 45,
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Slider */}
      <Box ref={sliderRef} sx={{ display: 'flex', gap: `${gap}px` }}>
        {[...clients, ...clients].map((client, idx) => (
          <motion.div
            key={idx}
            animate={{
              x: -scroll + idx * (cardWidth + gap), // auto-scroll + card spacing
              rotateY: 0, // subtle rotation if desired: e.g., idx % 2 === 0 ? 5 : -5
              scale: 1,  // you can make center card slightly bigger if needed
            }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ClientCard client={client} colors={colors} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};


// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile] = useState(window.innerWidth <= 768);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

   
    try {
      const response = await axios.post("https://tk-web-ckl1.vercel.app/api/send-email", formData);

      if (response.status === 200) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Email send error:", error);

      alert(
        "Failed to send your message. Please try again later or contact us directly."
      );
    }

  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
<div
  id="home"
  style={{
    minHeight: '100vh',
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: 'cover',          // makes image cover the entire area
    backgroundPosition: 'center',     // centers the image
    backgroundRepeat: 'no-repeat',    // prevents repeating
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '100px',
  }}
>
  {/* Glassy overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(50, 60, 60, 0.4)', // semi-transparent gray
      backdropFilter: 'blur(3px)',              // adds slight glass effect
      zIndex: 0,
    }}
  ></div>

  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 1,  // ensures content is above the overlay
    }}
  >
    <h1
      style={{
        fontSize: isMobile ? '2.5rem' : '3.5rem',
        fontWeight: 800,
        marginBottom: '1.5rem',
        textShadow: '0 4px 20px rgba(0,0,0,0.3)',
        background: 'linear-gradient(45deg, #fff 30%, #F7931E 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      Adhering to high level of integrity and Ensuring delivery as promised
    </h1>
    <p
      style={{
        fontSize: isMobile ? '1rem' : '1.5rem',
        maxWidth: '800px',
        marginBottom: '2rem',
        opacity: 0.95,
      }}
    >
      Professional supply, delivery, and maintenance services for businesses nationwide. 
      Trusted by both private and public organizations since 2017.
    </p>
  </div>
</div>


      {/* Floating CTA */}
      <div style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 999,
      }}>
        <button
          onClick={() => {
            const element = document.getElementById('guarantees');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            backgroundColor: colors.primary,
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: `0 5px 15px ${colors.primary}40`,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#e55a2e';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = colors.primary;
          }}
        >
          <Chat /> Get a Quote
        </button>
      </div>

      {/* Content Sections */}
      {sections.slice(1).map((section, index) => (
        <AnimatedSection key={section.id} id={section.id}>
          <div style={{
            padding: '6rem 2rem',
            background: index % 2 === 0 
              ? '#e9ecef'
              : '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative gradients */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '300px',
              height: '300px',
    
              zIndex: 0
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
              {/* Section Header */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                <div style={{
                  backgroundColor: `${colors.primary}20`,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                }}>
                  {section.icon}
                </div>
                <h2 style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 700,
                  color: colors.primary,
                  position: 'relative',
                }}>
                  {section.label}
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: '80px',
                    height: '4px',
                    backgroundColor: colors.accent,
                    borderRadius: '2px'
                  }} />
                </h2>
              </div>

              {/* Section Content */}
              {section.id === 'values' && (
                <div style={{
                  display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '2rem',
      justifyContent: 'center',   // centers the whole grid block if it has extra space
      justifyItems: 'center',     // <-- centers content of each grid cell so last row appears balanced
      alignItems: 'stretch',
      width: '100%',
      padding: '2rem 0',
                }}>
                  {section.items.map((value, idx) => (
                    <ValueCard key={idx} {...value} />
                  ))}
                </div>
              )}

              {section.id === 'services' && (
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               {section.categories.map((category, idx) => (
                 <div
                   key={idx}
                   style={{
                     background: '#fff',
                     boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                     display: 'flex',
                     flexDirection: isMobile ? 'column' : 'row',
                     overflow: 'hidden',
                     transition: 'all 0.3s ease',
                     width: '100%',
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-5px)';
                     e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                   }}
                 >
                   {/* ICON SECTION */}
                   <div
                     style={{
                       backgroundColor: '#6fbadc',
                       minWidth: isMobile ? '100%' : '120px',
                       height: isMobile ? '100px' : 'auto',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       padding: isMobile ? '10px' : '20px',
                       color: 'white',
                     }}
                   >
                     {category.icon}
                   </div>
             
                   {/* TEXT SECTION */}
                   <div
                     style={{
                       padding: isMobile ? '1.5rem' : '2rem',
                       flexGrow: 1,
                     }}
                   >
                     <h3
                       style={{
                         fontSize: isMobile ? '1.2rem' : '1.5rem',
                         fontWeight: 700,
                         marginBottom: '1rem',
                         color: colors.primary,
                       }}
                     >
                       {category.title}
                     </h3>
             
                     <div
                       style={{
                         display: 'flex',
                         flexWrap: 'wrap',
                         gap: '10px',
                       }}
                     >
                       {category.items.map((item, i) => (
                         <span
                           key={i}
                           style={{
                             backgroundColor: `${colors.accent}10`,
                             borderRadius: '20px',
                             padding: '6px 15px',
                             fontSize: '0.9rem',
                           }}
                         >
                           {item}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             
              )}

              {section.id === 'projects' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                }}>
                  {section.projects.map((project, idx) => (
                    <div key={idx} style={{
                      background: '#fff',
                   
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }}>
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <img src={project.image} alt={project.title} style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                      </div>
                      <div style={{ padding: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.title}</h4>
                        <p style={{ color: colors.lightText }}>{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.id === 'testimonials' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                }}>
                  {section.testimonials.map((testimonial, idx) => (
                    <TestimonialCard key={idx} testimonial={testimonial} />
                  ))}
                </div>
              )}

              {section.id === 'partnerships' && (
                <div>
                  <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                    {section.content}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                  }}>
                    {section.partners.map((partner, idx) => (
                      <div key={idx} style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                      }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: colors.text }}>
                          {partner.name}
                        </h4>
                        <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-block',
                          backgroundColor: `${colors.primary}10`,
                          color: colors.primary,
                          padding: '0.75rem 2rem',
                          borderRadius: '30px',
                          textDecoration: 'none',
                          fontWeight: 600,
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.primary;
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `#6fbadc`;
                          e.currentTarget.style.color = '#fff';
                        }}>
                          Visit Website
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.id === 'clients' && (



                <ClientsSlider clients={section.clients} />
              )}

              {section.id === 'guarantees' && (
                <div style={{
                  maxWidth: '600px',
                  margin: '0 auto',
                  background: '#fff',
                  padding: '3rem',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        //border: `2px solid ${colors.primary}20`,
                        fontSize: '1rem',
                        transition: 'border 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = `${colors.primary}20`}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleFormChange}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        //border: `2px solid ${colors.primary}20`,
                        fontSize: '1rem',
                        transition: 'border 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = `${colors.primary}20`}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        //border: `2px solid ${colors.primary}20`,
                        fontSize: '1rem',
                        transition: 'border 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = `${colors.primary}20`}
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                       // border: `2px solid ${colors.primary}20`,
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        transition: 'border 0.3s ease',
                        resize: 'vertical',
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = `${colors.primary}20`}
                    />
                    <button onClick={handleSubmit} style={{
                      backgroundColor: colors.primary,
                      color: '#fff',
                      padding: '1rem 2rem',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.secondary;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6fbadc';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      Send Message
                    </button>
                  </div>
                </div>
              )}

              {(section.id === 'about' || section.id === 'contact') && (
                <div>

<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    position: 'relative',
    alignItems: 'center',
  }}
>
  {/* Image Section with Orange Overlap */} 
<div style={{ position: 'relative' }}>
  
  {/* Orange Overlap Box */}
  <div
    style={{
      position: 'absolute',
      top: isMobile ? '-20px' : '-30px',
      left: isMobile ? '-10px' : '-25px',
      width: isMobile ? '200px' : '380px',
      height: isMobile ? '220px' : '400px',
      backgroundColor: '#FF6B35',
      borderRadius: '0px',
      zIndex: 1,
      boxShadow: '0 10px 20px rgba(255, 107, 53, 0.4)',
    }}
  />

  {/* Main Image */}
  <div
    style={{
      height: isMobile ? '280px' : '500px',
      borderRadius: '0px',
      background: 'linear-gradient(135deg, #FF6B35 0%, #FF6B35 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `0 12px 30px ${colors.primary}30`,
      overflow: 'hidden',
      position: 'relative',
      zIndex: 2,
    }}
  >
    <img
      src={HeroImage}
      alt="Company Visual"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.9,
        transform: 'scaleX(-1)',
      }}
    />
  </div>
</div>


  {/* Text Section */}
  {/* Text Section */}
<div>

<p
  style={{
    fontSize: '1.1rem',
    lineHeight: 1.5,
    color: '#555',
    marginBottom: '1.2rem',
  }}
>
  Takalani TR (PTY) Ltd is committed to delivering advanced engineering and
  professional solutions that empower businesses and organizations nationwide.
  With years of experience and a dedicated team, we provide reliable, innovative,
  and cost-effective services tailored to client needs.
</p>

<p
  style={{
    fontSize: '1.1rem',
    lineHeight: 1.5,
    color: '#555',
    marginBottom: '1.3rem',
  }}
>
  Our work spans technology services, supply and installation, office equipment,
  research and innovation, and large-scale business support. We take pride in our
  ability to exceed expectations and build long-term partnerships.
</p>

{/* Mission */}
<h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#333' }}>
  Mission
</h3>
<ul style={{ marginLeft: '1.2rem', marginBottom: '1.3rem', color: '#555', lineHeight: 1.7 }}>
  <li>Adhering to a high level of integrity and ensuring delivery as promised</li>
  <li>Building long-term partnerships with our clients</li>
  <li>Providing exceptional customer service through innovation and advanced technology</li>
</ul>

{/* Objectives */}
<h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#333' }}>
  Objectives
</h3>
<ul style={{ marginLeft: '1.2rem', marginBottom: '1.3rem', color: '#555', lineHeight: 1.7 }}>
  <li>To provide professional and engineering products and services</li>
  <li>To assist clients with implementing strategic, operational, and capital business projects</li>
</ul>



</div>

</div>

                  
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Footer */}
      <footer style={{
        padding: '4rem 2rem 2rem',
        background: `#E8E8E8`,
        color: 'black',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
         <div
  style={{
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: '3rem',
    marginBottom: '3rem',
  }}
>
  {/* Company Info */}
  <div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0' }}>
      <Business style={{ fontSize: 40, color: colors.accent, marginRight: '1rem' }} />
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        textShadow: '0 4px 20px rgba(0,0,0,0.3)',
        background: 'linear-gradient(45deg, #F7931E 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Takalani TR (PTY) Ltd
      </h3>
    </div>

    <p style={{ marginBottom: '1rem', opacity: 1.9, lineHeight: 1.6 }}>
      Professional supply, delivery, and maintenance services for businesses across South Africa since 2017.
    </p>

    <div style={{ display: 'flex', alignItems: 'center', opacity: 0.7 }}>
      <BusinessCenter style={{ fontSize: '1rem', marginRight: '0.5rem' }} />
      Reg: 2017/254455/07
    </div>
  </div>

  {/* Contact Info */}
  <div
    style={{
      justifySelf: isMobile ? 'start' : 'end',    // RIGHT on desktop, LEFT on mobile
      textAlign: isMobile ? 'left' : 'right',     // Align text correctly per device
    }}
  >
    <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
      Contact Us
    </h4>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Phone />
        <div>
          <p style={{ fontWeight: 500, margin: 10 }}>+27833436199</p>
          <p style={{ fontWeight: 500, margin: 10 }}>+27723501407</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Email />
        <p style={{ fontWeight: 500, margin: 0 }}>TRTakalani@gmail.com</p>
      </div>
    </div>
  </div>
</div>


          <div style={{ borderTop: 'FFFFFF', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', opacity: 0.7 }}>
              <Copyright style={{ fontSize: '1rem', marginRight: '0.5rem' }} />
              {new Date().getFullYear()} Takalani TR (PTY) Ltd. All rights reserved.
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useEffect,useRef } from 'react';
import { 
  AppBar, Toolbar, Typography, Box, Container, Button, 
  Card, CardContent, Grid, IconButton, useMediaQuery, useTheme,
  Accordion, AccordionSummary, AccordionDetails, Divider, Avatar, Chip, TextField, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { 
  Business, Flag, Grade, Build, Handshake, ContactSupport, 
  LocalShipping, Engineering, Construction, CleaningServices, 
  Chair, Restaurant, Event, DirectionsBus, School,
  CheckCircle, People, Work, Star, Verified, Cached, Group,
  TrackChanges, Groups, Chat, RateReview, PhotoAlbum,// Replaced Target with TrackChanges
  Loyalty, // Added for Commitment value
  Home
} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import logo from '../image/Company Logo 2.jpg'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import saps from "../Slides/SAPS.jpg"; // Adjust the path as necessary
import dhet from '../Slides/HigherE.png'; // Adjust the path as necessary
import raf from '../Slides/RAF.png'; // Adjust the path as necessary
import ccma from '../Slides/ccma.jpg'; // Adjust the path as necessary
import doj from '../Slides/DOJ.png'; // Adjust the path as necessary
import amscor from '../Slides/amscor.png'; // Adjust the path as necessary
import eastern from '../Slides/EASTERNCAPE.png'; // Adjust the path as necessary
import higherE from '../Slides/HigherE.png'; // Adjust the path as necessary
import gautengp from '../Slides/GautengP.png'; // Adjust the path as necessary
import ipid from '../Slides/ipid.png'; // Adjust the path as necessary
import watersam from '../Slides/WATERSAN.png'; // Adjust the path as necessary
import SAND from '../Slides/SAND.png'; // Adjust the path as necessary
import IEC from '../Slides/IEC.webp'; // Adjust the path as necessary
import correction from '../Slides/CorrectionalS.png'; // Adjust the path as necessary
import Cooperative from '../Slides/Cooperative.png'; // Adjust the path as necessary
import employment from '../Slides/Employment.png'; // Adjust the path as necessary
import BankSETA from '../Slides/BankSETA.png'; // Adjust the path as necessary
import women from '../Slides/womenY.png'; // Adjust the path as necessary
import arc from '../Slides/arc.jpg'; // Adjust the path as necessary
import Northwest from '../Slides/Northwest.jpg'; // Adjust the path as necessary
import agric from '../Slides/Agric.png'; // Adjust the path as necessary
import national from '../Slides/National.png'; // Adjust the path as necessary
import homeA from '../Slides/HomeA.png'; // Adjust the path as necessary
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import LocationOn from '@mui/icons-material/LocationOn';
import Thulamela from '../Slides/THULAMELA-MUNICIPALITY.png'; // Adjust the path as necessary
import Copyright from '@mui/icons-material/Copyright';
import reno from '../Slides/reno.jpg'; // Adjust the path as necessary
import dsc from '../Slides/dsc-product.webp'; // Adjust the path as necessary
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import upgrade from '../Slides/upgrade.webp'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';





// Color palette
const colors = {
  primary: '#FF6B35', // Vibrant orange
  secondary: '#1A1A1D', // Dark charcoal
  light: '#F8F9FA',    // Light background
  accent: '#4ECDC4',   // Teal for highlights
  text: '#333333',     // Dark text
  divider: '#EAEAEA'   // Divider color
};

// Animated components
const AnimatedSection = ({ children, delay = 0, withDivider = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    style={{ 
      position: 'relative',
      paddingBottom: withDivider ? '40px' : 0
    }}
  >
    {children}
    {withDivider && (
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.2 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '5%',
          width: '90%',
          height: '1px',
          backgroundColor: colors.divider,
          transformOrigin: 'left center'
        }}
      />
    )}
  </motion.div>
);

const ValueCard = ({ icon, title, description, sx }) => (
  <Card 
    sx={{ 
      height: '100%', 
      transition: 'transform 0.3s, box-shadow 0.3s',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: `0 10px 20px rgba(0,0,0,0.1)`,
      }
    }}
    component={motion.div}
    whileHover={{ scale: 1.03 }}
  >
    <CardContent sx={{ 
      textAlign: 'center', 
      p: 3,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{
        width: 60,
        height: 60,
        backgroundColor: `${colors.primary}20`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        flexShrink: 0
      }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, flexShrink: 0 }}>{title}</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const ServiceCard = ({ icon, title, items, sx }) => (
  <Card sx={{ 
    backgroundColor: colors.light, 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: `4px solid ${colors.primary}`,
    transition: 'all 0.3s',
    ...sx,
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    }
  }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ 
          color: colors.primary, 
          mr: 2, 
          display: 'flex' 
        }}>
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
      </Box>
      <ul style={{ 
        paddingLeft: 20, 
        margin: 0, 
        listStyleType: 'none' 
      }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ 
            position: 'relative', 
            marginBottom: 8,
            paddingLeft: 20 
          }}>
            <Box sx={{
              position: 'absolute',
              left: 0,
              top: 7,
              width: 8,
              height: 8,
              backgroundColor: colors.primary,
              borderRadius: '50%'
            }} />
            <Typography variant="body2">{item}</Typography>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const sections = [
  {
    id: 'overview',
    label: 'Overview',
    icon: <Business sx={{ color: colors.primary }} />,
    content: `Takalani TR (PTY) Limited (Reg No: 2017/254455/07) was formed in year 2017 in South Africa. Our primary objective is to provide professional and engineering products and services to both private and public organizations and/or companies in South Africa and across the board.`,
    additional: `Takalani TR key activities/services comprise of the Design, Supply, Delivery, Installation and Maintenance of all types of services/products/system within our scope and rich. These include; information technology services (computers, software, research, innovation and development, office furniture’s, stationary, building materials, cleaning, chemicals supply, catering for small and bigger event. We are also able to assist and advise our clients on the specialised services that they may need.

Takalani TR (PTY) Ltd has professional personnel who are qualified and innovative and have the necessary skills and years of experience to respond to today’s, challenging issues and needs. Exceeding client satisfaction motivates Takalani TR Limited professional team of staff.`
  },
  {
    id: 'mission',
    label: 'Mission',
    icon: <Flag sx={{ color: colors.primary }} />,
    content: `• Adhering to high level of integrity and ensuring delivery as promised
• Building a long-term partnership with our clients
• Provide exceptional customer services through innovation and advanced technology`,
    additional: `Through our unique innovation, we are able to help our customers to build a reliable, secure, manageable, efficient, and flexible infrastructure. We ensure that we establish a lasting foundation for our clients to meet their business objectives.`
  },
  {
    id: 'objectives',
    label: 'Our Objectives',
   icon: <TrackChanges sx={{ color: colors.primary }} />,
    content: `
 To provide professional and engineering products and services
 To assist clients with various implementations of their strategic operational and capital business projects`,
    additional: `We have confidence in our ability to generate the consensus and commitments necessary to succeed. We are prepared to contribute towards elevation of South Africa economy and to be a leader in the supply, delivery, installation, and maintenance value chain by providing an enhanced services, partnership, and cost-effectiveness solution to our clients.

We also stand behind our recommendations and to assist our clients in providing high quality services to their stakeholders.`
  },


  {
    id: 'values',
    label: 'Values',
    icon: <Grade sx={{ color: colors.primary }} />,
    items: [
      { 
        title: 'Commitment', 
        description: 'Dedicated to fulfilling our promises and obligations with unwavering resolve.',
          icon: <Loyalty sx={{ color: colors.primary }} />
      },
      { 
        title: 'Customer Value', 
        description: 'Creating exceptional experiences and meaningful solutions for our clients.',
        icon: <People sx={{ color: colors.primary }} />
      },
      { 
        title: 'Professionalism', 
        description: 'Maintaining the highest standards of expertise, ethics, and excellence.',
        icon: <Work sx={{ color: colors.primary }} />
      },
      { 
        title: 'Excellent', 
        description: 'Striving for superior performance in every aspect of our services.',
        icon: <Star sx={{ color: colors.primary }} />
      },
      { 
        title: 'Quality', 
        description: 'Delivering products and services that meet the highest standards.',
        icon: <Verified sx={{ color: colors.primary }} />
      },
      { 
        title: 'Flexibility', 
        description: 'Adapting to changing circumstances to meet client needs effectively.',
        icon: <Cached sx={{ color: colors.primary }} />
      },
      { 
        title: 'Teamwork', 
        description: 'Collaborating effectively to achieve shared goals and collective success.',
        icon: <Group sx={{ color: colors.primary }} />
      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    icon: <Build sx={{ color: colors.primary }} />,
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
    icon: <PhotoAlbum sx={{ color: colors.primary }} />,
    projects: [
      {
        title: "SAPS Facility Upgrade",
        description: "Complete IT infrastructure overhaul for 12 regional offices",
        image: upgrade,
       
      },
      {
        title: "DCS Security System Installation",
        description: "State-of-the-art security systems for correctional facilities",
        image: dsc,
       
      },
      {
        title: "GP Health Hospital Renovation",
        description: "Full renovation of 3 provincial hospitals",
        image: reno,
      
      }
    ]
  },


   {
    id: 'testimonials',
    label: 'Testimonials',
    icon: <RateReview sx={{ color: colors.primary }} />,
    testimonials: [
      {
        quote: "Takalani TR (PTY) Ltd delivered our IT upgrade project ahead of schedule with exceptional quality. Their team was professional and responsive throughout the entire process.",
        author: "James Khumalo",
        position: "IT Director, SAPS",
        photo: "/testimonials/james-k.jpg"
      },
      {
        quote: "The construction work done on our facilities exceeded our expectations. They handled all challenges efficiently and delivered a flawless result.",
        author: "Sarah Ndlovu",
        position: "Facilities Manager, GP Health",
        photo: "/testimonials/sarah-n.jpg"
      },
      {
        quote: "Their maintenance team provides excellent ongoing support. Quick response times and thorough work every time. Highly recommended!",
        author: "David Smith",
        position: "Operations Manager, DCS",
        photo: "/testimonials/david-s.jpg"
      }
    ]
  },

{
  id: 'clients',
  label: 'Our Clients',
  icon: <Groups sx={{ color: colors.primary }} />,
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
    icon: <Handshake sx={{ color: colors.primary }} />,
    content: `Takalani TR (PTY) LTD is proud to announce that it has signed the Partnership and Collaborative Agreements with the following companies:`,
    partners: [
      { 
        name: 'Premier Conferencing Training', 
        url: 'http://www.premierconferencing.co.za' 
      },
      { 
        name: 'Prepaid24', 
        url: 'https://www.prepaid24.co.za' 
      }
    ]
  },
{
    id: 'guarantees',
    label: 'Contact Us',
    icon: <ContactSupport sx={{ color: colors.primary }} />,
    content: `Primary contacts for sales/client services:`,
    contact: {
      name: 'Ms. Mpho Tshikalaha',
      phone: '+27833436199 / +27723501407',
      email: 'TRTakalani@gmail.com',
      address: 'Unit 1703, Caro Brooke Est, 5 Piaggio Road, Bonaero Park, 1619'
    }
  }


 
];

// Custom icon components
const LoyaltyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={colors.primary}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
  </svg>
);

console.log(saps)

// Define ClientCard component BEFORE ClientsSlider
const ClientCard = ({ client }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <Box sx={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
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
        boxShadow: `0 8px 16px ${colors.primary}20`
      }
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
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              objectFit: 'contain'
            }}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        </Box>
      ) : (
        <Box sx={{
          width: 60,
          height: 60,
          backgroundColor: `${colors.primary}10`,
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
        color: colors.secondary,
        fontSize: '0.9rem',
        lineHeight: 1.2,
        mt: client.logo ? 1 : 0
      }}>
        {client.name}
      </Typography>
    </Box>
  );
};




const ClientsSlider = ({ clients }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const itemsPerPage = isMobile ? 2 : isTablet ? 3 : 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleClients = clients.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: 3 }}>
      <motion.div
        ref={sliderRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '10px 0'
        }}
      >
        {visibleClients.map((client, idx) => (
          <motion.div
            key={startIndex + idx}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: idx * 0.1,
              type: 'spring',
              stiffness: 100
            }}
          >
            <ClientCard client={client} />
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <>
          <IconButton 
            onClick={prevSlide}
            sx={{ 
              position: 'absolute', 
              left: 0, 
              top: '50%', 
              transform: 'translateY(-50%)',
              backgroundColor: `${colors.primary}20`,
              '&:hover': { backgroundColor: colors.primary }
            }}
          >
            <ArrowBackIos sx={{ color: colors.text }} />
          </IconButton>
          
          <IconButton 
            onClick={nextSlide}
            sx={{ 
              position: 'absolute', 
              right: 0, 
              top: '50%', 
              transform: 'translateY(-50%)',
              backgroundColor: `${colors.primary}20`,
              '&:hover': { backgroundColor: colors.primary }
            }}
          >
            <ArrowForwardIos sx={{ color: colors.text }} />
          </IconButton>
        </>
      )}

      {totalPages > 1 && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 2,
          gap: '8px'
        }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Box 
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentIndex === index 
                  ? colors.primary 
                  : `${colors.primary}30`,
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <Box sx={{
    backgroundColor: '#fff',
    borderRadius: '16px',
    p: 4,
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    position: 'relative',
    height: '100%'
  }}>
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      mb: 3 
    }}>
      <Avatar 
        src={testimonial.photo} 
        sx={{ 
          width: 60, 
          height: 60,
          mr: 2,
          border: `2px solid ${colors.primary}`
        }} 
      />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>{testimonial.author}</Typography>
        <Typography variant="body2" color="textSecondary">
          {testimonial.position}
        </Typography>
      </Box>
    </Box>
    <Typography sx={{ 
      position: 'relative',
      pl: 3,
      '&::before': {
        content: '"❝"',
        position: 'absolute',
        left: 0,
        top: -10,
        fontSize: '2.5rem',
        color: `${colors.primary}50`
      }
    }}>
      {testimonial.quote}
    </Typography>
    <Box sx={{ 
      display: 'flex', 
      mt: 3,
      color: colors.primary
    }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} sx={{ fontSize: '1.2rem' }} />
      ))}
    </Box>
  </Box>
);


function Home1() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   const [mobileOpen, setMobileOpen] = useState(false);

  
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 const handleNavigation = (section) => {
  setActiveSection(section.id);

  const el = document.getElementById(section.id);
  if (el) {
    const header = document.querySelector('header, .MuiAppBar-root'); 
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    // Calculate the exact scroll position
    const topPos = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12; 
    // subtract a little extra (16px) for breathing room

    window.scrollTo({ top: topPos, behavior: 'smooth' });
  }

  setMobileOpen(false);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };


  return (
   <Box sx={{ 
      backgroundColor: colors.light,
      minHeight: '100vh',
      color: colors.text,
      px : 0,
     
    }}>
   {/* Logo with proper styling */}


{/* Navigation Bar */}
  <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#fff',
          color: colors.text,
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          py: 2,
          zIndex: 1300
        }}
      >
        <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
  {/* Logo on top */}
  <Box
    component="img"
    src={logo}
    alt="Takalani TR"
    sx={{
      height: { xs: 50, sm: 60, md: 70 },
      objectFit: 'contain',
      bgcolor: '#fff',
      borderRadius: 1,
      px: 1,
      mb: 1.5,             // space below logo
      transition: 'transform 0.3s',
      '&:hover': { transform: 'scale(1.03)' }
    }}
  />

  {/* Navigation row below */}
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      flexGrow: 1,
      justifyContent: 'center',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
         width: '100%',
   maxWidth: '100%',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' }
    }}
  >
    {sections.map(section => (
      <Button
        key={section.id}
        color="inherit"
        onClick={() => handleNavigation(section)}
        sx={{
          textTransform: 'none',
          mx: 1.5,
          py: 1,
          fontWeight: activeSection === section.id ? 700 : 500,
          color: activeSection === section.id ? colors.primary : colors.lightText,
          borderBottom: activeSection === section.id ? `3px solid ${colors.primary}` : 'none',
          borderRadius: 0,
          minWidth: 'auto',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
          '&:hover': { 
            color: colors.primary,
            backgroundColor: 'rgba(25, 118, 210, 0.05)'
          },
          flexShrink: 0
        }}
      >
        {section.label}
      </Button>
    ))}
  </Box>

  {/* Mobile menu button stays at the bottom */}
  <IconButton
    color="inherit"
    onClick={handleDrawerToggle}
    sx={{ display: { xs: 'flex', md: 'none' }, mt: 1 }}
  >
    <MenuIcon />
  </IconButton>
</Toolbar>

        </Container>
      </AppBar>
      {/* Modern Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(0,0,0,0.2)'
          },
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            color: colors.text,
            boxShadow: '0 0 30px rgba(0,0,0,0.15)',
            borderLeft: `1px solid ${colors.border}`,
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          backgroundColor: colors.primary,
          color: '#fff'
        }}>
          <Box
            component="img"
            src={logo}
            alt="Takalani TR (PTY) Ltd"
            sx={{
              height: 40,
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ 
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ py: 2 }}>
        
          
          {sections.map((section) => (
            <ListItem 
              button 
              key={section.id}
              onClick={() => handleNavigation(section)}
              sx={{
                py: 1.8,
                px: 3,
                transition: 'all 0.25s ease',
                '&:hover': { 
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                  '& .MuiListItemText-primary': {
                    color: colors.primary,
                    fontWeight: 600
                  }
                },
                '&:not(:last-child)': {
                  borderBottom: `1px solid ${colors.border}`
                }
              }}
            >
              <ListItemText 
                primary={section.label} 
                primaryTypographyProps={{
                  fontWeight: activeSection === section.id ? 700 : 500,
                  color: activeSection === section.id ? colors.primary : colors.text,
                  fontSize: '1rem'
                }}
                sx={{
                  '& .MuiListItemText-primary': {
                    transition: 'all 0.2s ease'
                  }
                }}
              />
              {activeSection === section.id && (
                <Box sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '70%',
                  backgroundColor: colors.primary,
                  ml: 1
                }} />
              )}
            </ListItem>
          ))}
        </List>
        
        <Divider sx={{ my: 1 }} />
        
        <Box sx={{ p: 3, textAlign: 'center', mt: 'auto' }}>
         
          
          <Typography variant="body2" sx={{ 
            mt: 3, 
            color: colors.lightText,
            lineHeight: 1.6
          }}>
            Takalani TR (PTY) Ltd &copy; {new Date().getFullYear()}
            <br />
            All rights reserved
          </Typography>
        </Box>
      </Drawer>


      {/* Hero Section */}
      <Box sx={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: '#fff',
        py: 20, // Reduced from 20
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container >
          <Box sx={{ 
            position: 'relative', 
            zIndex: 1,
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                mb: 2,
                fontSize: isMobile ? '2.5rem' : '3.5rem'
              }}>
                Adhering to high level of integrity and Ensuring delivery as promised
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <Typography variant="h6" sx={{ 
                fontWeight: 400, 
                mb: 4,
                maxWidth: isMobile ? '100%' : '70%'
              }}>
                Professional supply, delivery, and maintenance services for businesses nationwide. 
                Trusted by both private and public organizations since 2017.
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            
            </motion.div>
          </Box>
        </Container>
        
        {/* Animated delivery trucks */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          overflow: 'hidden'
        }}>
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                bottom: 10 + Math.random() * 30,
                left: -100
              }}
              animate={{ 
                x: ['0vw', '100vw'],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <LocalShipping sx={{ 
                fontSize: 40,
                color: 'rgba(255,255,255,0.6)',
                transform: `scale(${0.8 + Math.random() * 0.4})`
              }} />
            </motion.div>
          ))}
        </Box>
      </Box>

 {/* Floating CTA Button */}
      <Box sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
        animation: 'pulse 2s infinite',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      }}>
        <Button 
          variant="contained"
          startIcon={<Chat />}
          sx={{
            backgroundColor: colors.primary,
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            boxShadow: `0 5px 15px ${colors.primary}40`,
            '&:hover': {
              backgroundColor: '#e55a2e'
            }
          }}
          onClick={() => {
    const guaranteesSection = sections.find(sec => sec.id === 'guarantees');
    if (guaranteesSection) {
      handleNavigation(guaranteesSection);
    }
  }}
        >
          Get a Quote
        </Button>
      </Box>

      
 {/* Main Content Sections */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {sections.map((section, index) => (
          <Box 
            key={section.id} 
            id={section.id}
            sx={{ 
              width: '100%',
              minHeight: '50vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: 2,
             
              py: 8,
              backgroundColor: index % 2 === 0 ? colors.light : '#f5f5f7',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
                zIndex: 0
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, ${colors.accent}10 0%, transparent 70%)`,
                zIndex: 0
              }
            }}
          >
           

            <AnimatedSection delay={0.2}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 4,
                position: 'relative',
                zIndex: 2
              }}>
                <Box sx={{
                  backgroundColor: `${colors.primary}20`,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}>
                  {section.icon}
                </Box>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800, 
                  color: colors.primary,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: '80px',
                    height: '4px',
                    backgroundColor: colors.accent,
                    borderRadius: '2px'
                  }
                }}>
                  {section.label}
                </Typography>
              </Box>
            </AnimatedSection>

            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <AnimatedSection delay={0.3}>
                {section.id === 'values' ? (
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '30px'
                  }}>
                    {section.items.map((value, idx) => (
                      <Box key={idx} sx={{
                        width: { xs: '100%', sm: '45%', md: '30%' },
                        perspective: '1000px'
                      }}>
                        <ValueCard 
                          icon={value.icon} 
                          title={value.title} 
                          description={value.description} 
                          sx={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateY(5deg)',
                            transition: 'transform 0.4s',
                            '&:hover': {
                              transform: 'rotateY(0deg)'
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                ) : section.id === 'services' ? (
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px'
                  }}>
                    {section.categories.map((category, idx) => (
                      <Box key={idx} sx={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
                        }
                      }}>
                        <Box sx={{
                          backgroundColor: `${colors.primary}10`,
                          minWidth: '120px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '20px'
                        }}>
                          {category.icon}
                        </Box>
                        <Box sx={{ p: 4, flexGrow: 1 }}>
                          <Typography variant="h5" sx={{ 
                            fontWeight: 700, 
                            mb: 2,
                            color: colors.primary
                          }}>
                            {category.title}
                          </Typography>
                          <Box component="ul" sx={{ 
                            pl: 0,
                            m: 0,
                            listStyle: 'none',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px'
                          }}>
                            {category.items.map((item, i) => (
                              <Box key={i} component="li" sx={{
                                backgroundColor: `${colors.accent}10`,
                                borderRadius: '20px',
                                padding: '6px 15px',
                                fontSize: '0.9rem'
                              }}>
                                {item}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ) : section.id === 'projects' ? (
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                    gap: '25px'
                  }}>
                    {section.projects.map((project, idx) => (
                      <Card 
                        key={idx} 
                        component={motion.div}
                        whileHover={{ 
                          y: -10,
                          boxShadow: `0 20px 25px -5px ${colors.primary}20`
                        }}
                        sx={{ 
                          overflow: 'hidden',
                          transform: 'translateY(0)',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: `0 20px 40px rgba(0,0,0,0.2)`
                          }
                        }}
                      >
                        <Box sx={{ height: '200px', overflow: 'hidden' }}>
                          <Box 
                            component="img"
                            src={project.image}
                            alt={project.title}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease',
                              '&:hover': {
                                transform: 'scale(1.1)'
                              }
                            }}
                          />
                        </Box>
                        <CardContent>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>{project.title}</Typography>
                          <Typography variant="body2" sx={{ my: 1 }}>{project.description}</Typography>
                         
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                ) : section.id === 'testimonials' ? (
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: '30px'
                  }}>
                    {section.testimonials.map((testimonial, idx) => (
                      <TestimonialCard key={idx} testimonial={testimonial} />
                    ))}
                  </Box>
                ) : section.id === 'partnerships' ? (
                  <Box>
                    <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                      {section.content}
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '70px',
                      justifyContent: 'center'
                    }}>
                      {section.partners.map((partner, idx) => (
                        <Box key={idx} sx={{
                          width: { xs: '100%', sm: '45%', md: '30%' },
                          perspective: '1000px'
                        }}>
                          <Card sx={{ 
  background: `rgba(255, 255, 255, 0.6)`,
  backdropFilter: 'blur(10px)',
  
  borderRadius: '20px',
  p: 3,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: `1px solid ${colors.primary}20`,
  boxShadow: '0 8px 20px rgba(0,0,0,0.05), inset 0 0 10px rgba(255,255,255,0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 30px ${colors.primary}30`,
  }
}}>
  <Typography variant="h6" sx={{ 
    fontWeight: 700, 
    mb: 2,
    fontSize: '1.2rem',
    color:"black",
  }}>
    {partner.name}
  </Typography>
  <Button 
    href={partner.url} 
    target="_blank"
    variant="contained"
    sx={{
      backgroundColor: `${colors.primary}10`,
      color: colors.primary,
      borderRadius: '30px',
      px: 3,
      py: 1,
      fontWeight: 600,
      textTransform: 'none',
      boxShadow: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: colors.primary,
        color: '#fff',
        transform: 'scale(1.05)'
      }
    }}
  >
    Visit Website
  </Button>
</Card>

                        </Box>
                      ))}
                    </Box>
                  </Box>
                ) : section.id === 'clients' ? (
                  <Box sx={{ position: 'relative' }}>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 700, 
                      textAlign: 'center',
                      mb: 6,
                      color: colors.secondary,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '4px',
                        backgroundColor: colors.primary,
                        borderRadius: '0px'
                      }
                    }}>
                      Our Esteemed Clients
                    </Typography>
                    <ClientsSlider clients={section.clients} />
                  </Box>
                ) : section.id === 'guarantees' ? (
                 <Box sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
}}>


  <Box sx={{
    width: '100%',
    maxWidth: '600px',
    mx: 'auto',  // Ensures centering
  }}>
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
            sx={{ backgroundColor: '#fff' }}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            required
            sx={{ backgroundColor: '#fff' }}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleFormChange}
            required
            sx={{ backgroundColor: '#fff' }}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            required
            sx={{ backgroundColor: '#fff' }}
          />
        </Grid>
        <Grid item sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ px: 4, py: 1.5 }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
</Box>


                ) : (
                  <Box sx={{
                    backgroundColor: '#ffffffdd',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    p: 5,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '8px',
                      height: '100%',
                      backgroundColor: colors.primary
                    }
                  }}>
                   <Box sx={{ zIndex: 2 }}>
  {section.content?.trim().startsWith('•') || section.content?.includes('\n') ? (
    <Box component="ul" sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
      {section.content
        .split('\n')
        .filter(line => line.trim() !== '')
        .map((line, idx) => (
          <Typography
            key={idx}
            component="li"
            sx={{ mb: 1, fontSize: '1rem', lineHeight: 1.6 }}
          >
            {line.replace(/^•\s*/, '').trim()}
          </Typography>
        ))}
    </Box>
  ) : (
    <Typography variant="body1" sx={{ mb: 2 }}>
      {section.content}
    </Typography>
  )}
                    {section.additional && (
                      <Typography variant="body1" paragraph sx={{ 
                        mt: 3,
                        fontStyle: 'italic',
                        position: 'relative',
                        pl: 4,
                        '&::before': {
                          content: '"❝"',
                          position: 'absolute',
                          top: '-20px',
                          left: 0,
                          fontSize: '4rem',
                          color: `${colors.primary}30`,
                          lineHeight: 1
                        }
                      }}>
                        {section.additional}
                      </Typography>
                    )}
                    </Box>
                    {/* Contact Section */}
                    {section.contact && (
                      <Box sx={{ 
                        mt: 4,
                        p: 3,
                        backgroundColor: `${colors.primary}05`,
                        borderRadius: '12px',
                        borderLeft: `4px solid ${colors.accent}`
                      }}>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <ContactSupport sx={{ 
                            color: colors.primary, 
                            mr: 2,
                            fontSize: '2rem' 
                          }} />
                          {section.contact.name}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '20px',
                          mt: 3
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Phone sx={{ color: colors.primary, mr: 1.5 }} />
                            <Typography>{section.contact.phone}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Email sx={{ color: colors.primary, mr: 1.5 }} />
                            <Typography>{section.contact.email}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOn sx={{ color: colors.primary, mr: 1.5 }} />
                            <Typography>{section.contact.address}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                )}
              </AnimatedSection>
            </Box>
          </Box>
        ))}
      </Container>

      {/* Footer */}
      <Box sx={{ 
        backgroundColor: colors.secondary, 
        color: '#fff',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${colors.accent}10 0%, transparent 70%)`,
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '40px',
            mb: 5
          }}>
            {/* Company Info */}
            <Box sx={{ maxWidth: '300px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Business sx={{ 
                  fontSize: 40, 
                  color: colors.primary,
                  mr: 2 
                }} />
                <Typography variant="h5" sx={{ 
                  fontWeight: 800,
                  background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Takalani TR (PTY) Ltd
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ 
                mb: 2,
                opacity: 0.9
              }}>
                Professional supply, delivery, and maintenance services for businesses across South Africa since 2017.
              </Typography>
              
              {/* Social Media */}
              <Box sx={{ display: 'flex', gap: '15px', mt: 3 }}>
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                  <IconButton key={platform} sx={{
                    backgroundColor: `${colors.primary}20`,
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: colors.primary
                    }
                  }}>
                    <Box component="span" className={`fab fa-${platform}`} />
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* Contact Info */}
            <Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 700, 
                mb: 3,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '50px',
                  height: '3px',
                  backgroundColor: colors.primary
                }
              }}>
                Contact Us
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ 
                    color: colors.primary, 
                    mr: 2,
                    fontSize: '1.5rem'
                  }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>+27833436199</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>+27723501407</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ 
                    color: colors.primary, 
                    mr: 2,
                    fontSize: '1.5rem'
                  }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>TRTakalani@gmail.com</Typography>
                </Box>
                
                
              </Box>
            </Box>

           
          </Box>

         

          <Divider sx={{ 
            my: 5, 
            backgroundColor: 'rgba(255,255,255,0.1)',
            height: '2px'
          }} />
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3
          }}>
            <Typography variant="body2" sx={{ 
              textAlign: 'center', 
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Copyright sx={{ fontSize: '1rem', mr: 1 }} />
              {new Date().getFullYear()} Takalani TR (PTY) Ltd. All rights reserved.
            </Typography>
            
            <Typography variant="body2" sx={{ 
              textAlign: 'center', 
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center'
            }}>
              <BusinessCenter sx={{ fontSize: '1rem', mr: 1 }} />
              Reg: 2017/254455/07
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>Terms of Service</Typography>
              <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#fff', opacity: 0.7, alignSelf: 'center' }} />
              <Typography variant="body2" sx={{ opacity: 0.7 }}>Privacy Policy</Typography>
            </Box>
          </Box>
        </Container>
        
        {/* Decorative corner elements */}
        <Box sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: '60px',
          height: '60px',
          borderTop: `3px solid ${colors.primary}`,
          borderLeft: `3px solid ${colors.primary}`,
          zIndex: 0
        }} />
        
        <Box sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: '60px',
          height: '60px',
          borderBottom: `3px solid ${colors.accent}`,
          borderRight: `3px solid ${colors.accent}`,
          zIndex: 0
        }} />
      </Box>
    </Box>
  );
}
export default Home1

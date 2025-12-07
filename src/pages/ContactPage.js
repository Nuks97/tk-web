import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, Button, Grid, TextField, Typography, 
  IconButton, Container, Divider, useTheme
} from '@mui/material';
import { 
  Phone, Email, LocationOn, ArrowBack,
  Business, ContactSupport, Facebook, Twitter, LinkedIn, Instagram
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const colors = {
  primary: '#FF6B35', // Vibrant orange
  secondary: '#1A1A1D', // Dark charcoal
  light: '#F8F9FA',    // Light background
  accent: '#4ECDC4',   // Teal for highlights
  text: '#333333',     // Dark text
  divider: '#EAEAEA'   // Divider color
};

const ContactPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will contact you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: colors.light,
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
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ 
        py: 8, 
        position: 'relative', 
        zIndex: 1, 
        flex: 1 
      }}>
        {/* Back Button */}
        
          <IconButton 
            onClick={() => {
       navigate(-1);
  }}
            
            sx={{ 
              mb: 4,
              backgroundColor: `${colors.primary}20`,
              '&:hover': {
                backgroundColor: colors.primary,
                color: '#fff',
                padding: '8px',
              }
            }}
          >
            <ArrowBack />
            <Typography 
              variant="body1">Back</Typography>
          </IconButton>
     
     
        

        
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 6,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: 0,
            width: '100px',
            height: '4px',
            backgroundColor: colors.primary,
            borderRadius: '2px'
          }
        }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{
              backgroundColor: `${colors.primary}20`,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 3
            }}>
              <ContactSupport sx={{ fontSize: 30, color: colors.primary }} />
            </Box>
          </motion.div>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: colors.primary,
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem'
            }
          }}>
            Get In Touch
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: '40px',
          mb: 6
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
           <Box sx={{ 
  backgroundColor: '#c2c1c0',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  p: { xs: 3, md: 5 },
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '8px',
    height: '100%',
    backgroundColor: colors.primary,
    transition: 'all 0.3s ease',
  },
  '&:hover::before': {
    width: '10px',
    backgroundColor: colors.accent,
  }
}}>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Typography variant="h4" sx={{ 
      fontWeight: 800, 
      mb: 4,
      color: colors.primary,
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: 0,
        width: '80px',
        height: '4px',
        backgroundColor: colors.accent,
        borderRadius: '2px'
      }
    }}>
      Send us a message
    </Typography>
  </motion.div>
  
  <form onSubmit={handleSubmit} style={{ flex: 1 }}>
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 3,
      height: '100%'
      
    }}>
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <TextField 
          fullWidth
          variant="filled"
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: '12px',
              backgroundColor: '#f8f9fa',
            }
          }}
          InputLabelProps={{
            style: {
              fontWeight: 500,
              color: colors.text,
            }
          }}
          placeholder="John Doe"
        />
      </motion.div>
      
      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <TextField 
          fullWidth
          variant="filled"
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: '12px',
              backgroundColor: '#f8f9fa',
            }
          }}
          InputLabelProps={{
            style: {
              fontWeight: 500,
              color: colors.text,
            }
          }}
          placeholder="john@example.com"
        />
      </motion.div>
      
      {/* Subject Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <TextField 
          fullWidth
          variant="filled"
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleFormChange}
          error={!!formErrors.subject}
          helperText={formErrors.subject}
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: '12px',
              backgroundColor: '#f8f9fa',
            }
          }}
          InputLabelProps={{
            style: {
              fontWeight: 500,
              color: colors.text,
            }
          }}
          placeholder="How can we help you?"
        />
      </motion.div>
      
      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <TextField 
          fullWidth
          variant="filled"
          label="Your Message"
          multiline
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          error={!!formErrors.message}
          helperText={formErrors.message}
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: '12px',
              backgroundColor: '#f8f9fa',
              flex: 1,
            }
          }}
          InputLabelProps={{
            style: {
              fontWeight: 500,
              color: colors.text,
            }
          }}
          placeholder="Please share your thoughts with us..."
          sx={{
            flex: 1,
            '& .MuiInputBase-root': {
              height: '100%',
              alignItems: 'flex-start'
            }
          }}
        />
      </motion.div>
      
      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth
          sx={{ 
            py: 1.8,
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
            textTransform: 'none',
            letterSpacing: '0.5px',
            '&:hover': {
              background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
              boxShadow: '0 6px 20px rgba(26, 26, 29, 0.4)'
            }
          }}
        >
          Send Message
        </Button>
      </motion.div>
    </Box>
  </form>
</Box>
          </motion.div>

          {/* Contact Info & Map */}
       
            

        {/* Decorative Corner Elements */}
        <Box sx={{
          position: 'absolute',
          top: 230,
          left: 0,
          width: '60px',
          height: '60px',
          borderTop: `3px solid ${colors.primary}`,
          borderLeft: `3px solid ${colors.primary}`,
          zIndex: 0
        }} />
        
        <Box sx={{
          position: 'absolute',
          bottom: 12,
          right: 0,
          width: '60px',
          height: '60px',
          borderBottom: `3px solid ${colors.accent}`,
          borderRight: `3px solid ${colors.accent}`,
          zIndex: 0
        }} />
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ 
        backgroundColor: colors.secondary, 
        color: '#fff',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
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
                  Takalani TR
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
                {[
                  { icon: <Facebook />, color: '#3b5998' },
                  { icon: <Twitter />, color: '#1da1f2' },
                  { icon: <LinkedIn />, color: '#0077b5' },
                  { icon: <Instagram />, color: '#e1306c' }
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton sx={{
                      backgroundColor: `${platform.color}20`,
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: platform.color
                      }
                    }}>
                      {platform.icon}
                    </IconButton>
                  </motion.div>
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
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <LocationOn sx={{ 
                    color: colors.primary, 
                    mr: 2,
                    fontSize: '1.5rem',
                    mt: '5px'
                  }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Unit 1703, Caro Brooke Est,<br />
                    5 Piaggio Road,<br />
                    Bonaero Park, 1619
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Business Hours */}
           
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
              © {new Date().getFullYear()} Takalani TR (PTY) Ltd. All rights reserved.
            </Typography>
            
            <Typography variant="body2" sx={{ 
              textAlign: 'center', 
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Business sx={{ fontSize: '1rem', mr: 1 }} />
              Reg: 2017/254455/07
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer' }}>Terms of Service</Typography>
              <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#fff', opacity: 0.7, alignSelf: 'center' }} />
              <Typography variant="body2" sx={{ opacity: 0.7, cursor: 'pointer' }}>Privacy Policy</Typography>
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
};

export default ContactPage;
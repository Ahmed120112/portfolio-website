import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useTheme } from '../coontext/ThemeContext';
import './css/Contact.css';

function Contact() {
  const { isDarkMode, isArabic } = useTheme(); // استخدام السياق
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // تطبيق dark-mode class على <body>
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isArabic ? "تم إرسال رسالتك!" : "Your message has been sent!");
    // يمكنك إضافة كود لإرسال البيانات إلى بريدك الإلكتروني أو خادم خارجي
  };

  return (
    <Container className="contact-page mt-5">
      <h1 className="text-center mb-5">{isArabic ? "تواصل معي" : "Contact Me"}</h1>
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formName">
          <Form.Label>{isArabic ? "الاسم" : "Name"}</Form.Label>
          <Form.Control 
            type="text" 
            placeholder={isArabic ? "أدخل اسمك" : "Enter your name"} 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>{isArabic ? "البريد الإلكتروني" : "Email address"}</Form.Label>
          <Form.Control 
            type="email" 
            placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"} 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>{isArabic ? "الرسالة" : "Message"}</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            placeholder={isArabic ? "اكتب رسالتك هنا" : "Write your message here"} 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          {isArabic ? "إرسال الرسالة" : "Send Message"}
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
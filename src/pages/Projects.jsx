import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTheme } from '../coontext/ThemeContext';
import './css/Projects.css';

function Projects() {
  const { isDarkMode, isArabic } = useTheme();

  // useEffect to add or remove the dark mode class from the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const projects = [
    {
      title: isArabic ? "موقع تجارة إلكترونية" : "E-Commerce Website",
      description: isArabic
        ? "موقع تجارة إلكترونية متكامل يتضمن عربة التسوق، صفحات المنتجات، ووظيفة الدفع."
        : "A fully responsive e-commerce website with shopping cart, product pages, and checkout functionality.",
      link: "https://fake-store-app-ahmed-beherys-projects.vercel.app",
      iframe: true
    },
    {
      title: isArabic ? "موقع البورتفوليو" : "Portfolio Website",
      description: isArabic
        ? "بورتفوليو شخصي لعرض مشاريعي ومهاراتي، تم بناؤه باستخدام HTML وCSS وJavaScript."
        : "A personal portfolio to showcase my projects and skills, built with HTML, CSS, and JavaScript.",
      image: "path-to-portfolio-image.jpg",
      link: "https://your-portfolio-homepage-link.com"
    },
    {
      title: isArabic ? "لوحة تحكم تفاعلية" : "Interactive Dashboard",
      description: isArabic
        ? "لوحة تحكم تحتوي على تصورات بيانات حية، تم إنشاؤها باستخدام React وChart.js لتحليل البيانات."
        : "A dashboard with real-time data visualization, built using React and Chart.js for better insights and analysis.",
      image: "path-to-dashboard-image.jpg",
      link: "https://your-dashboard-link.com"
    },
  ];

  return (
    <Container className={`projects-page mt-5 ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="text-center mb-5">{isArabic ? "مشاريعي" : "My Projects"}</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card">
              {project.iframe ? (
                <div className="iframe-container">
                  <iframe 
                    src={project.link} 
                    title={project.title} 
                    width="100%" 
                    height="300px" 
                    style={{ border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </div>
              ) : (
                <Card.Img variant="top" src={project.image} alt={project.title} />
              )}
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  {isArabic ? "عرض المشروع" : "View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
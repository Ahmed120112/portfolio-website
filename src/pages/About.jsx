import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTheme } from '../coontext/ThemeContext';
import './css/About.css';
import Photo from './uploads/IMG_1063.JPG';

function About() {
  const { isDarkMode, isArabic } = useTheme();

  // تطبيق dark-mode class على <body>
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Container className="about-page mt-5">
      
      {/* Introduction Section */}
      <section className="intro-section text-center mb-5">
        <h1>{isArabic ? "من أنا" : "About Me"}</h1>
        <p>
          {isArabic
            ? "أنا مطور واجهات أمامية شغوف بإنشاء تطبيقات ويب تركز على المستخدم وتتمتع بتصميم جذاب. مع اهتمام بتحسين تجربة المستخدم، أسعى دائمًا لاستكشاف تقنيات وأطر عمل جديدة لتطوير مهاراتي."
            : "I am a passionate Front-End Developer with a strong background in creating user-centered and visually appealing web applications. With a dedication to enhancing the user experience, I am constantly exploring new technologies and frameworks to expand my skill set."
          }
        </p>
      </section>
      
      {/* Details Section */}
      <Row className="details-section">
        <Col md={6} className="mb-4">
          <h2>{isArabic ? "رحلتي" : "My Journey"}</h2>
          <p>
            {isArabic
              ? "بدأت رحلتي كمطور واجهات أمامية من فضولي حول كيفية عمل المواقع. تحول هذا الفضول سريعًا إلى شغف دفعني لتعلم HTML، CSS، JavaScript، وأطر عمل مختلفة مثل React."
              : "My journey as a Front-End Developer started with a curiosity about how websites work. This curiosity quickly turned into a passion, leading me to learn HTML, CSS, JavaScript, and various frameworks like React. Over the years, I’ve worked on numerous projects that have helped me hone my skills and stay up-to-date with industry trends."
            }
          </p>
        </Col>
        <Col md={6} className="mb-4">
          <Image src={Photo} alt={isArabic ? "صورتي" : "About Me"} rounded fluid />
        </Col>
      </Row>

      {/* Skills Section */}
      <section className="skills-section mt-5">
        <h2>{isArabic ? "المهارات" : "Skills"}</h2>
        <Row>
          <Col md={4}>
            <div className="skill-card">
              <h4>{isArabic ? "HTML و CSS" : "HTML & CSS"}</h4>
              <p>{isArabic ? "إنشاء تصاميم جميلة وتخطيطات استجابية." : "Creating structured, responsive layouts and beautiful designs."}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-card">
              <h4>{isArabic ? "JavaScript" : "JavaScript"}</h4>
              <p>{isArabic ? "تطوير تطبيقات ويب تفاعلية وديناميكية." : "Implementing interactive and dynamic web applications."}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-card">
              <h4>{isArabic ? "React" : "React"}</h4>
              <p>{isArabic ? "بناء مكونات قابلة لإعادة الاستخدام باستخدام React." : "Building component-based, reusable UI elements with React."}</p>
            </div>
          </Col>
        </Row>
      </section>
      
    </Container>
  );
}

export default About;
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Image, ProgressBar } from 'react-bootstrap';
import { useTheme } from '../coontext/ThemeContext'; // تأكد من مسار السياق الصحيح
import './css/Home.css';
import Photo from './uploads/IMG_1063.JPG';
import Resume from './uploads/Ahmed Emad Eldin Bahairy (E25).pdf';
import Cert1 from './uploads/cert1.jpeg'; // مسار صورة الشهادة الأولى
import Cert2 from './uploads/cert2.jpeg'; // مسار صورة الشهادة الثانية

function Home() {
  const { isDarkMode, isArabic } = useTheme();

  // useEffect to add or remove the dark mode class from the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const skills = [
    { name: isArabic ? "HTML و CSS" : "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Bootstrap", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "PHP", level: 50 },
    { name: "Laravel", level: 50 },
    { name: isArabic ? "تصميم UI/UX" : "UI/UX Design", level: 75 }
  ];

  const certifications = [
    {
      title: isArabic ? "شهادة مطور واجهات أمامية" : "Front-End Developer Certificate",
      institution: "New Horizons Academy",
      date: isArabic ? "مارس 2023" : "March 2023",
      description: isArabic
        ? "شهادة توثق مهاراتي في تطوير الواجهات الأمامية باستخدام HTML، CSS، وJavaScript، بالإضافة إلى إطار React."
        : "Certificate documenting my skills in front-end development using HTML, CSS, JavaScript, and React framework.",
      image: Cert1
    },
    {
      title: isArabic ? "شهادة تطوير الخلفية باستخدام PHP وLaravel" : "Back-End Development with PHP & Laravel Certificate",
      institution: "New Horizons Academy",
      date: isArabic ? "أكتوبر 2022" : "October 2022",
      description: isArabic
        ? "شهادة تثبت كفاءتي في تطوير التطبيقات الخلفية باستخدام PHP وإطار عمل Laravel لتطوير تطبيقات ويب متكاملة."
        : "Certificate demonstrating proficiency in back-end development with PHP and Laravel framework for building full-featured web applications.",
      image: Cert2
    }
  ];

  return (
    <Container className="mt-5">
      {/* Section: Picture, Name, and Job Title */}
      <section id="intro" className="text-center my-5">
        <Image src={Photo} roundedCircle width="150" height="150" alt={isArabic ? "صورتك" : "Your Photo"} />
        <h1 className="mt-3"> {isArabic ? "أحمد بحيري" : "Ahmed Behery"} </h1>
        <h4>{isArabic ? "مطور واجهات أمامية | شغوف بتجربة المستخدم وتصميم الواجهات" : "Front-End Developer | UI/UX Enthusiast"}</h4>

        {/* Download Resume Button */}
        <Button variant="secondary" href={Resume} download className="mt-3">
          {isArabic ? "تحميل السيرة الذاتية" : "Download My Resume"}
        </Button>
      </section>

      {/* Section: About Me */}
      <section id="about-me" className="my-5">
        <h2>{isArabic ? "من أنا" : "About Me"}</h2>
        <p>
          {isArabic
            ? "مرحبًا! أنا مطور واجهات أمامية شغوف بالتصميم وحريص على إنشاء مواقع وتطبيقات تفاعلية وسهلة الاستخدام. ماهر في HTML وCSS وJavaScript وReact، أسعى لتقديم أفضل التجارب البصرية للمستخدمين مع الحفاظ على الأداء الأمثل. أتطلع دائمًا إلى تعلم تقنيات جديدة وتطوير مهاراتي في مجال تطوير الواجهات الأمامية."
            : "Hello! I'm a passionate Front-End Developer with a keen eye for design and a love for creating interactive, user-friendly websites and applications. Skilled in HTML, CSS, JavaScript, and React, I strive to bring the best visual experiences to users while maintaining optimal performance. I’m always excited to learn new technologies and improve my skills in the front-end development field."
          }
        </p>
      </section>

      {/* Section: Skills */}
      <section id="skills" className="my-5">
        <h2 className="text-center mb-4">{isArabic ? "المهارات" : "Skills"}</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} className="mb-3" key={index}>
              <div className="skill">
                <h5>{skill.name}</h5>
                <ProgressBar now={skill.level} label={`${skill.level}%`} />
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section: Certifications */}
      <section id="certifications" className="my-5">
        <h2 className="text-center mb-4">{isArabic ? "الشهادات" : "Certifications"}</h2>
        <Row>
          {certifications.map((cert, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="cert-card">
                <img src={cert.image} alt={cert.title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cert.institution}</Card.Subtitle>
                  <Card.Text>{cert.date}</Card.Text>
                  <Card.Text>{cert.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section: My Projects */}
      <section id="projects" className="my-5">
        <h2>{isArabic ? "مشاريعي" : "My Projects"}</h2>
        <Row>
          {/* Portfolio Website Project */}
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{isArabic ? "موقع بورتفوليو" : "Portfolio Website"}</Card.Title>
                <Card.Text>
                  {isArabic
                    ? "موقع بورتفوليو شخصي لعرض مهاراتي ومشاريعي، تم بناؤه باستخدام React وتصميمه باستخدام CSS مخصص."
                    : "A personal portfolio website to showcase my skills and projects, built using React and styled with custom CSS."
                  }
                </Card.Text>
                <div className="iframe-container">
                  <iframe
                    src="https://my-protfolio-beryl.vercel.app/"
                    title={isArabic ? "موقع بورتفوليو" : "Portfolio Website"}
                    width="100%"
                    height="300px"
                    style={{ border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </div>
                <Button variant="primary" href="https://my-protfolio-beryl.vercel.app/" target="_blank" className="mt-3">
                  {isArabic ? "عرض المشروع الكامل" : "View Full Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Responsive E-Commerce Site Project */}
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{isArabic ? "موقع تجارة إلكترونية متجاوب" : "Responsive E-Commerce Site"}</Card.Title>
                <Card.Text>
                  {isArabic
                    ? "موقع تجارة إلكترونية متجاوب بالكامل مع ميزات مثل عربة التسوق وصفحات المنتجات ووظيفة الدفع."
                    : "A fully responsive e-commerce website with features like shopping cart, product pages, and checkout functionality."
                  }
                </Card.Text>
                <div className="iframe-container">
                  <iframe
                    src="https://fake-store-app-delta.vercel.app/"
                    title={isArabic ? "موقع تجارة إلكترونية متجاوب" : "Responsive E-Commerce Site"}
                    width="100%"
                    height="300px"
                    style={{ border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </div>
                <Button variant="primary" href="https://fake-store-app-delta.vercel.app" target="_blank" className="mt-3">
                  {isArabic ? "عرض المشروع الكامل" : "View Full Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Interactive Dashboard Project */}
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{isArabic ? "لوحة تفاعلية" : "Interactive Dashboard"}</Card.Title>
                <Card.Text>
                  {isArabic
                    ? "لوحة تفاعلية تحتوي على رسوم بيانية، تم بناؤها باستخدام React وChart.js. توفر عرض بيانات في الوقت الفعلي لاتخاذ قرارات أفضل."
                    : "An interactive dashboard with charts and graphs, built using React and Chart.js. Provides real-time data visualization for better decision-making."
                  }
                </Card.Text>
                <Button variant="primary" href="#" target="_blank">
                  {isArabic ? "عرض المشروع" : "View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="my-5">
        <h2>{isArabic ? "تواصل معي" : "Contact Me"}</h2>
        <p>
          {isArabic
            ? "إذا كنت مهتماً بالتعاون في مشروع أو ترغب فقط في التواصل، فلا تتردد في التواصل معي! يمكنك مراسلتي عبر البريد الإلكتروني أو العثور علي على وسائل التواصل الاجتماعي."
            : "If you're interested in collaborating on a project or just want to connect, feel free to reach out! You can contact me via email, phone, or find me on social media."
          }
        </p>

        <div className="d-flex flex-column align-items-center">
          <Button variant="primary" href="mailto:ahmedb7b72001@gmail.com" className="mb-2">
            {isArabic ? "أرسل بريد إلكتروني" : "Send an Email"}
          </Button>

          <Button variant="info" href="https://www.facebook.com/share/19Mu1fkLcC/?mibextid=LQQJ4d" target="_blank" className="mb-2">
            {isArabic ? "فيسبوك" : "Facebook"}
          </Button>

          <Button variant="danger" href="https://www.instagram.com/b7b7_1212/profilecard/?igsh=MWJ6c21scjN6MGl3cw==" target="_blank" className="mb-2">
            {isArabic ? "انستجرام" : "Instagram"}
          </Button>

          <Button variant="secondary" href="tel:01113092527" className="mb-2">
            {isArabic ? "اتصل بي: 01113092527" : "Call me: 01113092527"}
          </Button>

        </div>
      </section>
    </Container>
  );
}

export default Home;
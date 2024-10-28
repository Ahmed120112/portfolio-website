import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../coontext/ThemeContext'; // تحديث مسار الاستيراد
import './css/Navbar.css';

function NavigationBar() {
  const { isDarkMode, toggleDarkMode, isArabic, toggleLanguage } = useTheme();

  return (
    <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          {isArabic ? "بورتفوليو أحمد" : "Ahmed Portfolio"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav-custom">
            <Nav.Link as={Link} to="/" className="nav-link-custom">{isArabic ? "الرئيسية" : "Home"}</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">{isArabic ? "عنّي" : "About"}</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">{isArabic ? "مشاريعي" : "Projects"}</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">{isArabic ? "تواصل" : "Contact"}</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="me-2 btn-toggle-mode" onClick={toggleDarkMode}>
            {isDarkMode ? (isArabic ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-sun"></i>) : (isArabic ? <i class="fa-solid fa-moon"></i> :<i class="fa-solid fa-moon"></i> )}
          </Button>
          <Button variant="outline-secondary" className="btn-toggle-language" onClick={toggleLanguage}>
            {isArabic ? <i class="fa-solid fa-e"></i> : <i class="fa-solid fa-a"></i>}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
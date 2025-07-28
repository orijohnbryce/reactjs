import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LangSelector from '../../../components/LangSelector/LangSelector';

function BsNavBar() {
    const { t } = useTranslation();
    const nav = useNavigate();
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand href="#home">Northwind</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => nav("/home")}>{t("home")}</Nav.Link>
                            <Nav.Link onClick={() => nav("/products")} href="#features">{t("products")}</Nav.Link>
                            <Nav.Link href="#pricing">{t("cart")}</Nav.Link>
                            <LangSelector />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BsNavBar;
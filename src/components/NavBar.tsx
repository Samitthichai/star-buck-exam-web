
import logoImage from "../assets/starbuckLogo.png";
import userImg from "../assets/userImg.png";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: '#303030' }}>
      <Container>
        <Navbar.Brand href="#home"><img src={logoImage} width="60px" height="auto" alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3 ">
          <Navbar.Text className="text-white m-0">
          Wasin Wachirapusitanun 
          </Navbar.Text>
          <Navbar.Brand ><Image src={userImg} roundedCircle  width="60px" height="auto"/></Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default NavBar;
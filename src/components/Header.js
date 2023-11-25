import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Header.css';
import React from 'react';
import logo from '../assets/logo_food_saver.svg';
//import profile_foto_login from '../assets/profile_foto_login.png';
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect } from "react";
//import Dropdown from 'react-bootstrap/Dropdown';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <div className="wrapper-icon">
      <AiOutlineBars
        color="rgb(66, 220, 0)"
        size="2em"
      />
      <span className="badge" id='lblCartCount'></span>
      {children}
    </div>
  </a>
));

function DropDownComponent(props) {
  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <span className="badge" id='lblCartCount'></span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/order">Order Prediction</Dropdown.Item>
          <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}


function Header(props) {


  const navigate = useNavigate();
  const signIn = () => navigate("/signIn")
  var id = localStorage.getItem("idUser")

  let cart = props.cart;
  let setCart = props.setCart;

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcnJpdG9fYWRtaW4iLCJzdWIiOjMsInJvbGVzIjpbImNhcnJpdG9fYWRtaW4iXSwiaWF0IjoxNjY4OTgyODc3fQ.cWWuGfgrrnmIo5k9vHz4CIk6d2ARiOUEdl6W_JzgJrk"
    const fetchData = async () => {
      try {
        if (!navigator.onLine) {
          if (localStorage.getItem('cart') === null) {
            setCart("Loading...");
          }
          else {
            setCart(JSON.parse(localStorage.getItem('cart')));
          }
        } else {
          const URL =

            "http://localhost:3000/api/v1/carritos/6dba5211-95de-49dd-9acb-ad923f466679";
          const response = await fetch(
            URL,
            {
              method: "GET",
              headers: { "Authorization": `Bearer ${token}` }
            }
          );
          if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
          }
          const data = await response.json();
          setCart(data.regalos);
          localStorage.setItem('cart', JSON.stringify(data.regalos));

        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (token) {
      fetchData();
    }
  }, []);


  const onChangeInput = (event) => navigate("/search/" + event.target.value);

  const NavBarMsg = () => { return <FormattedMessage id="NavBarMsg" /> };

  console.log(NavBarMsg());
  return (

    <div className="Header" xxl={10}>
      <Container style={{ columnGap: "0px", width: "100%" }}>
        <Row  >
          <Col sm={2} md={2} lg={2} className="logoContainer" >
            <Link to={"/"}>
              <img src={logo} className="Header-logo" alt="logo" />
            </Link>
          </Col>
          <Col sm={5} md={5} lg={5} style={{ textAlign: "center" }}>
            <Container >
              <Row sm={10} md={10} lg={10} className="searchContainer" >
                <div className="mt-2" style={{ fontFamily: "Work Sans, sans-serif", fontStyle: 'bold', fontSize: '30px', color: '#42DC00', fontWeight: "bold" }}>
                  ORDER
                </div>
              </Row>
            </Container>
          </Col>
          <Col sm={1} md={1} lg={1} >
            <DropDownComponent userId={id} />


          </Col>

          <Col sm={2} md={2} lg={2}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100%', paddingTop: '5px' }}>
              <Link onClick={() => localStorage.removeItem("idUser")} to={"/signup"} style={{ fontFamily: "Work Sans, sans-serif", fontStyle: 'normal', fontSize: '15px', color: '#42DC00', fontWeight: 'bold' }}>
                <FormattedMessage id="CerrarSesion" />
              </Link>
            </div>
          </Col>


          <Col sm={2} md={2} lg={2} className="login_container">
            <Button onClick={signIn} className='mt-4' style={{ color: "white", background: '#42DC00', width: '150px', height: '40px', fontWeight: 'bold', border: 'none' }} >
              <FormattedMessage id="LogIn" />
            </Button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
              <Link className='link' to={"/profile/" + id}> <FormattedMessage id="VerPerfil" /></Link>
            </div>
          </Col>


        </Row>
      </Container>
    </div>
  );

}

export default Header;

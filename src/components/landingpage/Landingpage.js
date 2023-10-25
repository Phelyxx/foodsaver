import React from 'react';
import './Landingpage.css';
import CarouselComp from './CarouselComp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import social_email from '../../assets/social_email.png';
import social_instagram from '../../assets/social_instagram.png';
import social_telefono from '../../assets/social_telefono.png';
import social_twitter from '../../assets/social_twitter.png';
import initial_img from '../../assets/Initial icon.svg';
import second_img from '../../assets/Gift giving.svg';
import third_img from '../../assets/third_image.svg';
import circles_img from '../../assets/blue_circles.svg';
import circles_img_2 from '../../assets/blue_circles_2.svg';
import navega_img from '../../assets/navega_img.png';
import ahorra_dinero_img from '../../assets/ahorra_img.png';
import ahorra_dinero from '../../assets/ahorra_dinero.png';
import lower_emissions from '../../assets/lower_emissions.png';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';

function Landingpage() {
    return (
        <div className="Landingpage">

            
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={200} md={200} lg={200} className="body_container">

                        <Container>

                            <Row>
                                <Col>
                                    <p className='initial_text_0'> <b className='text_color_0' style={{ fontFamily: "Arial", fontWeight: "900" }}>FoodSaver</b> <FormattedMessage id='IntroMsg_0' />  <b className="text_color_0"><FormattedMessage id='IntroMsg_1' /> </b> <FormattedMessage id='IntroMsg_2' />  <b className="text_color_0"><FormattedMessage id='IntroMsg_3' /> </b>  </p>
                                    <div className='social_img_container'>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <a href="home">
                                                        <img src={social_telefono} className="social_img" alt="social_telefono" />
                                                    </a>
                                                </Col>
                                                <Col>
                                                    <a href="home">
                                                        <img src={social_email} className="social_img" alt="social_email" />
                                                    </a>
                                                </Col>
                                                <Col>
                                                    <a href="https://www.instagram.com/">
                                                        <img src={social_instagram} className="social_img" alt="social_instagram" />
                                                    </a>
                                                </Col>
                                                <Col>
                                                    <a href="home">
                                                        <img src={social_twitter} className="social_img" alt="social_twitter" />
                                                    </a>
                                                </Col>
                                            </Row>
                                            <Row>
      
                                            </Row>
                                        </Container>
                                    </div>
                                </Col>
                                <Col>
                                    <Container>
                                        <Row className="initial_img_container">
                                            <Col>
                                                <img src={initial_img} className="initial_img" alt="initial_img" />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="cards_container">
                    <Col>
                        <Card className="card_pink">
                            <Card.Img variant="top" src={ahorra_dinero} className="card_img" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Title style={{ textAlign: "center" }}>
                                            <b className='cyan_format'><FormattedMessage id='LPCardTitle_0'/></b>
                                        </Card.Title>
                                    </Col>
                                </Row>
                                <Card.Text style={{ textAlign: "center" }}>
                                    <div className='normal_format'> <FormattedMessage id='LPCardBody_0'/></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card_cyan">
                            <Card.Img variant="top" src={ahorra_dinero_img} className="card_img" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Title style={{ textAlign: "center" }}>
                                            <b className='pink_format'><FormattedMessage id='LPCardTitle_1'/></b>
                                        </Card.Title>
                                    </Col>
                                </Row>
                                <Card.Text style={{ textAlign: "center" }}>
                                    <div className='normal_format'> <FormattedMessage id='LPCardBody_1'/></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card_pink">
                            <Card.Img variant="top" src={lower_emissions} className="card_img" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Title style={{ textAlign: "center" }}>
                                            <b className='cyan_format'><FormattedMessage id='LPCardTitle_2'/></b>
                                        </Card.Title>
                                    </Col>
                                </Row>
                                <Card.Text style={{ textAlign: "center" }}>
                                    <div className='normal_format'> <FormattedMessage id='LPCardBody_2'/></div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>     
                <p className='initial_text_1'> <b className='text_color_0' style={{ fontFamily: "Arial", fontWeight: "900" }}>Testimonials</b> </p>
       
                <Row className='carousel_container' >
                    <Col>
                        <Container  style={{width:"80%"}}><CarouselComp/></Container >
                        </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Landingpage;

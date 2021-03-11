import React from 'react';
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'
import foundImg from '../../icon/found.png'
import flag from '../../icon/flag.png'
import football from '../../icon/football.png'
import genderSign from '../../icon/male-gender-sign.png'
import './TeamInformation.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";



const TeamInformation = (props) => {
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strYoutube, strFacebook, strTwitter, strInstagram } = props.team

    const isMale = gender => {
        if (gender && gender.toLowerCase() === 'male') {
            return <img src={maleImage} alt="" className="w-100" />
        }
        else if(gender && gender.toLowerCase() === 'female') {
            return <img src={femaleImage} alt="" className="w-100" />
        }
    }

    return (
        <div style={{ backgroundColor: '#183153' }}>
            <Container className="team-information">
                <Row className="bg-primary w-75 mx-auto py-2 team-info-card">
                    <Col md={6} lg={6} className="team-info text-light">
                        <h2 className="mb-3">{strTeam}</h2>
                        <p className="my-2"><img src={foundImg} alt="" className="detail-icon" /> Founded: {intFormedYear}</p>
                        <p className="my-2"><img src={flag} alt="" className="detail-icon" /> Country: {strCountry}</p>
                        <p className="my-2"><img src={football} alt="" className="detail-icon" /> Sport Type: {strSport}</p>
                        <p className="my-2"><img src={genderSign} alt="" className="detail-icon" /> Gender: {strGender}</p>
                    </Col>
                    <Col md={6} lg={6} className="info-image">
                        {isMale(strGender)}
                    </Col>
                </Row>
                <div className="w-75 mx-auto text-justify description mt-4">
                    <p style={{ color: 'white', opacity: '0.8' }}>{strDescriptionEN}</p>
                </div>
                <div className="social-icons">
                    <a href={'https://' + strFacebook} style={{ color: '#1877F2' }}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={'https://' + strTwitter} style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={'https://' + strYoutube} style={{ color: '#FF0000' }}><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href={'https://' + strInstagram} style={{ color: '#E1306C' }}><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </Container>
        </div>
    );
};

export default TeamInformation;
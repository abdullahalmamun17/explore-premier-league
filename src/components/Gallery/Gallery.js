import React from 'react';
import { Container } from 'react-bootstrap';
import './Gallery.css'

const Gallery = (props) => {
    console.log(props.team)
    const { strTeamFanart1, strTeamFanart2, strTeamFanart3, strTeamFanart4 } = props.team


    return (
        <Container className="gallery-container">
            <div className="gallery">
                <img src={strTeamFanart1} alt="" />
                <img src={strTeamFanart2} alt="" />
                <img src={strTeamFanart3} alt="" />
                <img src={strTeamFanart4} alt="" />
            </div>
        </Container>
    );
};

export default Gallery;
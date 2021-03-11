import React from 'react';
import { Container } from 'react-bootstrap';

const Stadium = (props) => {

    const { strStadiumThumb, strStadiumLocation, strStadium, strStadiumDescription } = props.team

    return (
        <Container style={{ backgroundColor: '#183153' }} className="text-light p-4 mb-3">
            <img src={strStadiumThumb} alt="" className="w-100 rounded"/>
            <h2 className="text-center mt-3">{strStadium}</h2>
            <h4 className="text-center">{strStadiumLocation}</h4>
            <p className="text-justify" style={{opacity: '0.8'}}>{strStadiumDescription}</p>
        </Container>
    );
};

export default Stadium;
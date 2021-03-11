import { Button } from 'react-bootstrap';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Team = (props) => {
    const history = useHistory()

    const { idTeam, strTeam, strTeamBadge, strSport } = props.team

    const handleTeamExplore = id => {
        history.push(`/team/${id}`)
    }

    return (
        <Col md={6} lg={4} className="p-2 text-center">
            <div className="bg-light mx-auto team-card">
                <img src={strTeamBadge} className="team-img" alt="" />
                <h2>{strTeam}</h2>
                <p>Sports Type: <strong>{strSport}</strong></p>
                <Button onClick={() => handleTeamExplore(idTeam)}>Explore<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></Button>
            </div>
        </Col>
    );
};

export default Team;
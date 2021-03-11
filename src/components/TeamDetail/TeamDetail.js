import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'react-router';
import Gallery from '../Gallery/Gallery';
import Stadium from '../Stadium/Stadium';
import TeamDetailHeader from '../TeamDetailHeader/TeamDetailHeader';
import TeamInformation from '../TeamInformation/TeamInformation';

const TeamDetail = () => {
    const { teamId } = useParams()

    const [team, setTeam] = useState({})
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])

    return (
        <div className="poppins-font">
            <TeamDetailHeader teamBanner={team.strTeamBanner}></TeamDetailHeader>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="container bg-light">
                <Tab eventKey="home" title="Club">
                    <TeamInformation team={team}></TeamInformation>
                </Tab>
                <Tab eventKey="playground" title="PlayGround">
                    <Stadium team={team}></Stadium>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                    <Gallery team={team}></Gallery>
                </Tab>
            </Tabs>
        </div>

    );
};

export default TeamDetail;
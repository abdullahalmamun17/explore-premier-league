import React from 'react';

const TeamDetailHeader = ({teamBanner}) => {

    return (
        <div>
            <img src={teamBanner} alt="" className="w-100" style={{opacity: '0.8'}} />
        </div>
    );
};

export default TeamDetailHeader;
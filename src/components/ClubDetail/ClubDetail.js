import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import './ClubDetail.css'

const ClubDetail = (props) => {
    const {strTeamBadge, strTeam, strSport} = props.club;
    return (
        <div class="col-md-4">
            <Card className="card-detail-container">
                <Card.Img className="card-image" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title className="club-title">{strTeam}</Card.Title>
                    <p className="club-type">
                        Sports Type: {strSport}
                    </p>
                    <button className="explore-btn">Explore</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClubDetail;
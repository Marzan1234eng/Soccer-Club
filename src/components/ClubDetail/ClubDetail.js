import React from 'react';
import {Card} from "react-bootstrap";
import './ClubDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const ClubDetail = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.club;
    return (
        <div class="col-md-4">
            <Card className="card-detail-container">
                <Card.Img className="card-image" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title className="club-title">{strTeam}</Card.Title>
                    <p className="club-type">
                        Sports Type: {strSport}
                    </p>
                    <Link to={"/team/"+idTeam}>
                        <button className="explore-btn">
                            Explore<FontAwesomeIcon className="arrowIcon" icon={faArrowCircleRight} />
                        </button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClubDetail;
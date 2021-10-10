import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header/Header";
import "./SingleClubDetail.css";
import {faCalendarAlt , faMapMarkerAlt, faFutbol, faMars, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SingleClubDetail = () => {
    let { idTeam } = useParams();

    const [team, setTeam] = useState({});
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
        console.log(team);
    },[idTeam])

    return (
        <div className="single-club-container">
            <Header
                banner={team.strStadiumThumb}
                strStadium={team.strStadium}
                strTeamLogo={team.strTeamLogo}
            >

            </Header>
            <div className="team-detail-container">
                <div className="team-container container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="league-name">{team.strLeague}</h3>
                            <p><FontAwesomeIcon className="team-container-icon" icon={faUsers} />Team: {team.strTeam}</p>
                            <p><FontAwesomeIcon className="team-container-icon" icon={faCalendarAlt} />Founded: {team.intFormedYear}</p>
                            <p><FontAwesomeIcon className="team-container-icon" icon={faMapMarkerAlt} />Country: {team.strCountry}</p>
                            <p><FontAwesomeIcon className="team-container-icon" icon={faFutbol} />Sport Type: {team.strSport}</p>
                            <p><FontAwesomeIcon className="team-container-icon" icon={faMars} />Gender: {team.strGender}</p>
                        </div>
                        <div className="team-img col-md-6">
                            <img src={team.strTeamFanart4} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>{team.strStadiumDescription}</p>
                    <p>{team.strDescriptionEN}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleClubDetail;
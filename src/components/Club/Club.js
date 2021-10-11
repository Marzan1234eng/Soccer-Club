import React, {useEffect, useState} from 'react';
import ClubDetail from "../ClubDetail/ClubDetail";
import {CardGroup} from "react-bootstrap";
import './Club.css';
import Header from "../Header/Header";

const Club = () => {

    const [club, setClub] = useState([]);
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
            .then(res => res.json())
            .then(data =>{
                const sliceClubData = data.teams.slice(0,9);
                setClub(sliceClubData);
            });

    },[])
    console.log(club);
    return (
        <div>
            <Header></Header>
            <div className="card-group-container">
                <CardGroup class="row">
                    {
                        club.map(cb =>
                            <ClubDetail
                                key={cb.idTeam}
                                club={cb}
                            >

                            </ClubDetail>
                        )
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Club;
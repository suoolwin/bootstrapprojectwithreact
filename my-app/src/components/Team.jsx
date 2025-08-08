import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import staff1 from "../assets/img/staffs/staff1.jpg"
import staff2 from "../assets/img/staffs/staff2.jpg"
import staff3 from "../assets/img/staffs/staff3.jpg"

const Team = ()=>{

    const teams = [
        {
            id:1,
            image:staff1,
            name:"Ms. Khin Myat Noe",
            subtitle:"Operation Manager",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        },
        {
            id:2,
            image:staff2,
            name:"Mr. Htet Paing",
            subtitle:"Project Manager",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        },
        {
            id:3,
            image:staff3,
            name:"Mr. Pyae Phyo Paing",
            subtitle:"Founder & CEO",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        },
    ]

    return(
        <>
            {/* Start Team Section  */}
            <section id="team" className="bg-light">
                <div className="container">

                    <div className="sectiontitles">
                        <h2>Our Team</h2>
                        <p>Meet the talented individuals behind our success.</p>
                    </div>
                    
                    <div className="row">

                        {
                            teams.map((team)=>(
                                <div key={team.id} className="col-lg-4 col-md-6 mb-4 teamcards">
                                    <div className="card">
                                        <img src={team.image} className="" alt="user1" />
                                        <div className="card-body text-center">
                                            <h3 className="card-title">{team.name}</h3>
                                            <p className="card-subtitle lead">{team.subtitle}</p>
                                            <p className="card-text">{team.text}</p>
                                            <div className="socialicons">
                                                <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                                                <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                                                <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                                                <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
            {/* End Team Section  */}
        </>
    )
}

export default Team;
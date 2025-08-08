import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const Client = ()=>{

    const clients = [
        {
            id:1,
            bg:"bg-primary text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-car",
            brandname:"Toyota",
            type:"vechile",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:2,
            bg:"bg-primary text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-car",
            brandname:"Mazda",
            type:"vechile",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:3,
            bg:"bg-primary text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-car",
            brandname:"KIA",
            type:"vechile",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:4,
            bg:"bg-primary text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-car",
            brandname:"Suzuki",
            type:"vechile",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:5,
            bg:"bg-warning text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-mobile-screen-button",
            brandname:"Samsung",
            type:"Phone",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:6,
            bg:"bg-warning text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-mobile-screen-button",
            brandname:"Mi",
            type:"Phone",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:7,
            bg:"bg-warning text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-mobile-screen-button",
            brandname:"Sony",
            type:"Phone",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        },
        {
            id:8,
            bg:"bg-warning text-white rounded-circle p-2 me-3",
            icon:"fa-solid fa-mobile-screen-button",
            brandname:"Oppo",
            type:"Phone",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
        }
    ];

    return(
        <>
            {/* Start Client Section  */}
            <section id="clients" className="">
                <div className="container">

                    <div className="sectiontitles">
                        <h2>Our Clients</h2>
                        <p>Projects We Successfully Developed. One look is worth a thousand words.</p>
                    </div>

                    <div className="row">

                        {
                            clients.map((client)=>(
                                 <div key={client.id} className="col-md-3 col-sm-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">

                                            <div className="d-flex align-items-center mb-3" >
                                            <div className={client.bg}>
                                                    <FontAwesomeIcon icon={client.icon} />  
                                            </div> 
                                            <h5 className="card-title mb-0">{client.brandname}</h5>
                                            </div>

                                            <h6 className="card-subtitle text-muted mb-3">{client.type}</h6>
                                            <p className="card-text">{client.text}</p>
                                            <a href="javascript:void(0);" className="card-link">Website</a>
                                            <a href="javascript:void(0);" className="card-link">Contact</a>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
            {/* End Client Section  */}

        </>
    )
}

export default Client;
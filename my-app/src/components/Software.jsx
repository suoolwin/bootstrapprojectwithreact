import React from "react";


const Software = ()=>{

    const softwares = [

        {
            id:1,
            image:"https://imgeng.jagran.com/images/2023/jun/Android%2014%20(1)1686146518996.jpg",
            name:"Android Application",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            text:"Learn More"
        },
        {
            id:2,
            image:"https://mytechmyanmar.com/wp-content/uploads/2020/04/appstore.jpg",
            name:"IOS Application",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            text:"Learn More"
        },
        {
            id:3,
            image:"https://i.ytimg.com/vi/8WbyB_2HthM/maxresdefault.jpg",
            name:"Linux Application",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            text:"Learn More"
        },
        {
            id:4,
            image:"https://i.pcmag.com/imagery/lineups/06xskoAKsVIlA7WdtvUGQmT-1.1577756249.fit_lim.size_1182x667.jpg",
            name:"Window Application",
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            text:"Learn More"
        },

    ]


    return(
        <>
            {/* Start Software Section  */}

        <section id="software">
            <div className="container">

                <div className="sectiontitles">
                    <h2>Our Software Solutions</h2>
                    <p>Projects We Successfully Developed. One look is worth a thousand words.</p>
                </div>

                <div className="row">

                    {
                        softwares.map((software)=>(
                            <div key={software.id} className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div>
                                    <img src={software.image} className="w-100" alt="android" />
                                </div>
                                <div className="card-body">
                                    <h3 className="">{software.name}</h3>
                                    <p className="card-text">{software.title}</p>
                                    <a href="javascript:void(0);" className="btn btn-outline-primary">{software.text}</a>
                                </div>
                            </div>
                        </div>
                        ))
                    }

                    

                </div>

            </div>
        </section>

        {/* End Software Section  */}
        </>
    )
};

export default Software;
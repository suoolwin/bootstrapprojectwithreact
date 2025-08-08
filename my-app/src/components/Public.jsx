import React,{useEffect,useState} from "react";

const Public = ()=>{
    return(
        <>
            {/* Start Public Section  */}
            <section id="public" className="">
                <div className="container">
                    
                    <div className="sectiontitles">
                        <h2>Public Interest</h2>
                        <p>Project We Successfully Developed. One look is worth a thousand words.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 mx-auto">

                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">Ebook</h5>
                                    <span>25%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">Android Application</h5>
                                    <span>25%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"  style={{ width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">IOS Application</h5>
                                    <span>15%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"  style={{ width:'15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" ></div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">Linux Application</h5>
                                    <span>5%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"  style={{ width:'05%'}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" ></div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="mb-0">Windows Application</h5>
                                    <span>30%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"  style={{ width:'30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" ></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* End Public Section  */}
        </>
    )
}

export default Public;
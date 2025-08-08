import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ()=>{

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    });

    const changeHandler = (e)=>{
        // console.log(e.target);

        const {type,name} = e.target;
        // console.log(type,name);

    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Form submitted :",formData);
    }

    return(
        <>
            {/* Start Contact Section  */}
            <section id="contact" className="">
                <div className="container">
                    
                    <div className="sectiontitles">
                        <h2>Contact Us</h2>
                        <p>We'd love to hear from you. Get in touch with us today.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mb-4">  
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="card-title mb-0">Office Location</h5>
                                </div>
                                <div className="card-body p-0 map-containers">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.209847744537!2d96.47117152059684!3d22.038519928049688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cc9f000f02a95d%3A0xfccaf20b8f279ef4!2sPretty%20Bake%20House!5e0!3m2!1sen!2smm!4v1753970742450!5m2!1sen!2smm" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="card-footer">
                                    <p><FontAwesomeIcon icon="fa-solid fa-phone" className="me-2" />Phone : 0942204225</p>
                                    <p><FontAwesomeIcon icon="fa-solid fa-envelope" className="me-2" />Email : info@ptt.com</p>
                                    <p><FontAwesomeIcon icon="fa-solid fa-location-dot" className="me-2" />Address : No.123,Aung San St,Mandalay Myanmar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">

                            <div className="card">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="card-title mb-0">Got Question ?</h5>
                                </div>
                                
                                <div className="card-body">
                                    
                                    <form onSubmit={submitHandler} className="contactforms" action="" method="">

                                        <div className="col-md-12 form-group mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />    
                                        </div>

                                        <div className="col-md-12 form-group mb-3">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />  
                                        </div>

                                        <div className="col-md-12 form-group mb-3">
                                            <label htmlFor="message">Message</label>
                                            <textarea type="message" name="message" id="message" className="form-control" placeholder="Enter your message" rows="5" required ></textarea>
                                        </div>

                                        <button type="sumbit" className="btn btn-primary w-100 mt-3" onChange={changeHandler}>Send Message</button>
                                    
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                
            </section>
            {/* End Contact Section  */}
        </>
    )
}

export default Contact;
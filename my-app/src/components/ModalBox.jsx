import React,{useState,useEffect} from "react";


const ModalBox = ()=>{

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        accept: false,
    });

    const changeHandler = (e) => {
        const { type, name, value, checked } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    
    return(
        <>
            {/* START MODAL AREA */}

            {/* start get in touch modal  */}
            <div id="loginmodal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login to Your Account</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitHandler} action="" method="">

                                <div className="mb-3">
                                    <label htmlFor="signinemail" className="form-label">Email address</label>
                                    <input type="email" name="signinemail" id="signinemail" className="form-control" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="siginpassword" className="form-label">Password</label>
                                    <input type="password" name="siginpassword" id="siginpassword" className="form-control" placeholder="Enter your password" required />
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" name="rememberme" id="rememberme" className="form-check-input" placeholder="Enter your password" required />
                                    <label htmlFor="rememberme" className="form-label">Remember me</label>
                                </div>

                                
                                <button type="submit" className="btn btn-primary w-100" onChange={changeHandler}>Login</button>
                        

                            </form>
                        
                            <div className="text-center mt-3">
                                <a href="javascript:void(0);" className="text-decoration-none">Forget password?</a>
                            </div>

                        </div>
                        <div className="modal-footer justify-content-center">
                            <p>Don't have an account? <a href="javascript:void(0);" className="text-decoration-none">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end get in touch modal  */}

            {/* start signup modal  */}
            <div id="signupmodal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Your Account</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitHandler} action="" method="">

                                <div className="mb-3">
                                    <label htmlFor="signupemail" className="form-label">Email address</label>
                                    <input type="email" name="signinemail" id="signinemail" className="form-control" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cfmpassword" className="form-label">Password</label>
                                    <input type="password" name="cfmpassword" id="cfmpassword" className="form-control" placeholder="Enter your password" required />
                                </div>

                                <button type="submit" className="btn btn-primary w-100" onChange={changeHandler}>Signup</button>
                        
                            </form>

                        </div>
                        <div className="modal-footer justify-content-center">
                            <p>Already Register? <a href="javascript:void(0);" className="text-decoration-none">Login Here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end signup modal  */}

        {/* END MODAL AREA */}
        </>
    )

};

export default ModalBox;
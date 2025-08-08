import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackToTop = ()=>{
    return(
        <>
            {/* Back To Top Button   */}
            <a href="index.html" className="back-to-tops"> 
                <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
            </a>
        </>
    )
};

export default BackToTop;
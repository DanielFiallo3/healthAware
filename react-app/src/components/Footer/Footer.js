import React from 'react';
import "./footer.css";


export default function Footer() {
    return (
        <div className="myContainer">
            <form className="myFormContainer">
                <div>Developer: Ananya Hans</div>
                <button className="footerLinkbtn" formAction={"https://www.linkedin.com/in/ananya-hans-bb757020b"}>   
                    <img className="footerLink" src="https://nextforme.com/wp-content/uploads/2018/11/linkedin-logo.png" alt="linkedin"></img>
                </button>
                <button className="footerHubbtn" formAction={"https://github.com/ahans1607"}>   
                    <img className="footerHub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="linkedin"></img>
                </button>
            </form>
        </div>
    )
}
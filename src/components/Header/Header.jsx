import React from 'react'
import '../Style/Base/_Base.scss'

export default function Header() {
    return (
        <header>
    
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/logo-2.png'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" style={{fontSize: "15px", fontWeight: "500", lineHeight: "45px", color: "#0e1133"}} href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{fontSize: "15px", fontWeight: "500", lineHeight: "45px", color: "#0e1133"}} href="#">service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{fontSize: "15px", fontWeight: "500", lineHeight: "45px", color: "#0e1133"}} href="#">about us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{fontSize: "15px", fontWeight: "500", lineHeight: "45px", color: "#0e1133"}} href="#">news</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{fontSize: "15px", fontWeight: "500", lineHeight: "45px", color: "#0e1133"}} href="#">contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-danger text-capitalize rounded-pill" style={{backgroundColor: "#ff3e66", border: "none"}} type="submit">get started</button>
                        </form>
                    </div>
                </div>
            </nav>
    
        </header>
    )
}

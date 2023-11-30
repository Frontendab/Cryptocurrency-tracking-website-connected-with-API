import { Link } from "react-router-dom"
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { LiaLinkedinIn } from 'react-icons/lia';
import { BsGithub } from 'react-icons/bs';
import { ProviderContext } from "../../App";
import { useContext } from "react";

export const Footer = () => {
    const {ref} = useContext(ProviderContext); 

    return (
        <>
        <footer id="contact" ref={ref} className="container-fluid">
            <div className="container">
            <h1><Link className="navbar-brand" to="/">De<span>Fi</span></Link></h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2 className="fw-bold">Support</h2>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Contact Us</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Chat</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Help Center</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">FAQ</Link></p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2 className="fw-bold">Developers</h2>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Cloud</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Commerce</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Pro</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">API</Link></p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2 className="fw-bold">Company</h2>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">About</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Information</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Legal</Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark">Privacy</Link></p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 Social">
                    <h2 className="fw-bold">Social</h2>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark"><MdFacebook /></Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark"><AiFillTwitterCircle /></Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark"><LiaLinkedinIn /></Link></p>
                    <p className="nav-item"><Link className="nav-link p-0 text-dark"><BsGithub /></Link></p>
                </div>
            </div>
            <hr />
            <p className="copy_right">&copy; CopyRight 1-10-2023 With <span>Ayoub Sadouri</span></p>
            </div>
        </footer>
        </>
    )
};
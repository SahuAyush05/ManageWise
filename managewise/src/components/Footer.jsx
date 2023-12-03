import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import image1 from "../assets/logo1.webp"
import './Footer.css';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerin">
        <div className='footertop'>
            <div className="footerLogo">
                <img className=" footerlogo" src={image1} alt='footerlogo'/>
            </div>
            <div className="footerList">
            <div className="footerlist">
                <ul>
                    <li><Link>Features</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>Testimonials</Link></li>
                </ul>
            </div>
            </div>
            
        </div>
        <div className='footerbottom'>
            <div className='bottomleft'>
                <p>© 2022 ManageWise, Inc.</p>
            </div>
            <div className="footericon">
            <FaLinkedin
              size={20}
              style={{ color: "#333333", marginRight: "1rem" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#333333", marginRight: "1rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#333333", marginRight: "1rem" }}
            />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer
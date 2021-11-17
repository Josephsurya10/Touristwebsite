import React from 'react';
import { Button } from './Button';
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    <h1>
                    Join the Adventure with us!!!
                    </h1>
                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe at any time
                </p>
                <div className="input-area">
                    <form>
                        <input type="email" name="email" placeholder="Enter your Email" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/Signup">How it Works</Link>
                        <Link to="/Signup">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Videos</Link>
                        <Link to="/">Ambassodars</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Youtube</Link>
                    </div>
                </div>
            </div>
            <div className="Social-Media">
                <div className="Social-Media-Wrap">
                    <div className="Social-icons">
                        <Link className="Social-icon-link facebook"
                        to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        
                        <Link className="Social-icon-link twitter"
                        to="/" target="_blank" aria-label="twitter">
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link className="Social-icon-link linkedin"
                        to="/" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; Zarak Khan</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link> 
        <h1 className="text-center mt-3">As the copyright notice, the terms of service are not mandatory, but they should be included in the website footer. They refer to the general rules and guidelines people are deemed to follow when using your website. They may be named as such (“Terms of Service”) or “Terms of Use” or “Conditions of Use”, like in the example of Amazon:
</h1>
      </p>
    </div>
  );
};

export default Footer;
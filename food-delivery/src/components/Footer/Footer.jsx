import React from "react";

import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="brand-info">
        <div className="address">
          <h5>FOOD DELIVERY</h5>
          <p>Avenida da Liberdade, 287</p>
          <p>1250-096 Lisboa</p>
        </div>
        <div className="contacts">
          <div className="phone">
            <img src={phoneIcon} alt="Telephone" />
            <a href="tel:+351982637782">+351 982 637 782</a>
          </div>
          <div className="mail">
            <img src={mailIcon} alt="Mail" />
            <a href="mailto:foodelivery@food.com">foodelivery@food.com</a>
          </div>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.1746810800812!2d-9.149576770785258!3d38.72472544500193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19337774e26f65%3A0xa2145af50d659bfc!2sAv.%20da%20Liberdade%20287%2C%201250-096%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1642561014936!5m2!1spt-PT!2spt"
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </footer>
  );
}

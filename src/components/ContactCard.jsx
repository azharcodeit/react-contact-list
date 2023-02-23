import React from "react";
import "./ContactCard.css";

function ContactCard({ src, name, lastName, email, age, city, country, number }) {
  return (
    <div className='card'>
      <div className='img-wrapper'>
        <img src={src} alt='avatar'/>
        <div>
          <div className='attr name'>
            {name} {lastName}, {age}
          </div>
          <div className='attr email'>{email}</div>
        </div>
      </div>
      <hr />
      <div>
        <div className='attr location'>{city}, {country}</div>
        <div className='attr number'>{number}</div>
      </div>
    </div>
  );
}

export default ContactCard;

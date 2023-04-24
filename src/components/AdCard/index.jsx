import React from "react";
import "./AdCard.css";

const AdCard = ({ad, companyName}) => {
  const { description, primaryText, headline, CTA, imageUrl } = ad;
  return (
    <div className="ad-cart">
      <img src={imageUrl} alt={companyName} />
      <div className="ad-card-content">
        <h1>{companyName}</h1>
        <h2>{headline}</h2>
        <p className="ad-card-primary-text">{primaryText}</p>
        <p>{description}</p>
        <button>{CTA}</button>
      </div>
    </div>
  );
};
export default AdCard
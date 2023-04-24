import React from "react";
import AdCard from "../AdCard";
import {companies} from '../../data';
import "./AdContainer.css"

const AdContainer = ({ads}) => {
  return (
    <div className="ads-grid">
          <div className="ads-lists">
            {ads.map((ad, index) => {
              const companyName = companies.find((x) => x._id === ad.companyId)["name"]
              console.log(ad)
              return(
              <AdCard key={index} ad={ad} companyName={companyName}/>
            )})}
          </div>
    </div>
  );
};

export default AdContainer;
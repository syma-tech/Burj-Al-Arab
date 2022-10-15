import "./Offers.css";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Offer from "../Home/Offer/Offer";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("./offer.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setOffers(data);
      });
  }, []);
  return (
    <div className="  text-bg-dark pt-5">
      <div className="container d-flex flex-column align-items-center py-5 ">
        <h5>BURJ AL ARAB OFFERS</h5>
        <h2>For our valued guests</h2>
        <h3>Offers: {offers?.length}</h3>
        <Row xs={1} md={2} lg={3} className="g-5">
          {offers?.map((offer) => (
            <Offer key={offer._id} offer={offer} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Offers;

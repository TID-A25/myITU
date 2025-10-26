import React from "react";
import InterestPicture from "../assets/Sports.jpg";

export default function InterestCard({ interest }) {
  return (
    <div className="interest-card">
      <img src={InterestPicture} alt={`${interest} background`} />
      <div className="overlay" />
      <span className="card-title">{interest}</span>
    </div>
  );
}